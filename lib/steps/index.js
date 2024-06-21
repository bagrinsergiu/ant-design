"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _isNativeReflectConstruct2 = _interopRequireDefault(require("@babel/runtime/helpers/isNativeReflectConstruct"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var React = _interopRequireWildcard(require("react"));
var _omit = _interopRequireDefault(require("omit.js"));
var _rcSteps = _interopRequireDefault(require("rc-steps"));
var _CheckOutlined = _interopRequireDefault(require("@ant-design/icons/CheckOutlined"));
var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));
var _classnames = _interopRequireDefault(require("classnames"));
var _configProvider = require("../config-provider");
var _progress = _interopRequireDefault(require("../progress"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
var Steps = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function Steps() {
    var _this;
    (0, _classCallCheck2["default"])(this, Steps);
    _this = _callSuper(this, Steps, arguments);
    _this.renderSteps = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;
      var prefixCls = getPrefixCls('steps', _this.props.prefixCls);
      var iconPrefix = getPrefixCls('', _this.props.iconPrefix);
      var _this$props = _this.props,
        percent = _this$props.percent,
        size = _this$props.size;
      var className = (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _this.props.className);
      var icons = {
        finish: /*#__PURE__*/React.createElement(_CheckOutlined["default"], {
          className: "".concat(prefixCls, "-finish-icon")
        }),
        error: /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
          className: "".concat(prefixCls, "-error-icon")
        })
      };
      var stepIconRender = function stepIconRender(_ref2) {
        var node = _ref2.node,
          status = _ref2.status;
        if (status === 'process' && percent !== undefined) {
          // currently it's hard-coded, since we can't easily read the actually width of icon
          var progressWidth = size === 'small' ? 32 : 40;
          var iconWithProgress = /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-progress-icon")
          }, /*#__PURE__*/React.createElement(_progress["default"], {
            type: "circle",
            percent: percent,
            width: progressWidth,
            strokeWidth: 4,
            format: function format() {
              return null;
            }
          }), node);
          return iconWithProgress;
        }
        return node;
      };
      return /*#__PURE__*/React.createElement(_rcSteps["default"], (0, _extends2["default"])({
        icons: icons
      }, (0, _omit["default"])(_this.props, ['progress']), {
        stepIcon: stepIconRender,
        prefixCls: prefixCls,
        iconPrefix: iconPrefix,
        className: className
      }));
    };
    return _this;
  }
  (0, _inherits2["default"])(Steps, _React$Component);
  return (0, _createClass2["default"])(Steps, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderSteps);
    }
  }]);
}(React.Component);
Steps.Step = _rcSteps["default"].Step;
Steps.defaultProps = {
  current: 0
};