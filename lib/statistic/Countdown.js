"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _isNativeReflectConstruct2 = _interopRequireDefault(require("@babel/runtime/helpers/isNativeReflectConstruct"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var React = _interopRequireWildcard(require("react"));
var _Statistic = _interopRequireDefault(require("./Statistic"));
var _utils = require("./utils");
var _reactNode = require("../_util/reactNode");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
var REFRESH_INTERVAL = 1000 / 30;
function getTime(value) {
  return new Date(value).getTime();
}
var Countdown = /*#__PURE__*/function (_React$Component) {
  function Countdown() {
    var _this;
    (0, _classCallCheck2["default"])(this, Countdown);
    _this = _callSuper(this, Countdown, arguments);
    _this.syncTimer = function () {
      var value = _this.props.value;
      var timestamp = getTime(value);
      if (timestamp >= Date.now()) {
        _this.startTimer();
      } else {
        _this.stopTimer();
      }
    };
    _this.startTimer = function () {
      if (_this.countdownId) return;
      _this.countdownId = window.setInterval(function () {
        _this.forceUpdate();
      }, REFRESH_INTERVAL);
    };
    _this.stopTimer = function () {
      var _this$props = _this.props,
        onFinish = _this$props.onFinish,
        value = _this$props.value;
      if (_this.countdownId) {
        clearInterval(_this.countdownId);
        _this.countdownId = undefined;
        var timestamp = getTime(value);
        if (onFinish && timestamp < Date.now()) {
          onFinish();
        }
      }
    };
    _this.formatCountdown = function (value, config) {
      var format = _this.props.format;
      return (0, _utils.formatCountdown)(value, (0, _extends2["default"])((0, _extends2["default"])({}, config), {
        format: format
      }));
    };
    // Countdown do not need display the timestamp
    _this.valueRender = function (node) {
      return (0, _reactNode.cloneElement)(node, {
        title: undefined
      });
    };
    return _this;
  }
  (0, _inherits2["default"])(Countdown, _React$Component);
  return (0, _createClass2["default"])(Countdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.syncTimer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.syncTimer();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopTimer();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_Statistic["default"], (0, _extends2["default"])({
        valueRender: this.valueRender
      }, this.props, {
        formatter: this.formatCountdown
      }));
    }
  }]);
}(React.Component);
Countdown.defaultProps = {
  format: 'HH:mm:ss'
};
var _default = exports["default"] = Countdown;