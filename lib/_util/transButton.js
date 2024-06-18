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
var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * Wrap of sub component which need use as Button capacity (like Icon component).
 * This helps accessibility reader to tread as a interactive button to operation.
 */

var inlineStyle = {
  border: 0,
  background: 'transparent',
  padding: 0,
  lineHeight: 'inherit',
  display: 'inline-block'
};
var TransButton = /*#__PURE__*/function (_React$Component) {
  function TransButton() {
    var _this;
    (0, _classCallCheck2["default"])(this, TransButton);
    _this = _callSuper(this, TransButton, arguments);
    _this.onKeyDown = function (event) {
      var keyCode = event.keyCode;
      if (keyCode === _KeyCode["default"].ENTER) {
        event.preventDefault();
      }
    };
    _this.onKeyUp = function (event) {
      var keyCode = event.keyCode;
      var onClick = _this.props.onClick;
      if (keyCode === _KeyCode["default"].ENTER && onClick) {
        onClick();
      }
    };
    _this.setRef = function (btn) {
      _this.div = btn;
    };
    return _this;
  }
  (0, _inherits2["default"])(TransButton, _React$Component);
  return (0, _createClass2["default"])(TransButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var autoFocus = this.props.autoFocus;
      if (autoFocus) {
        this.focus();
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.div) {
        this.div.focus();
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      if (this.div) {
        this.div.blur();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
        style = _a.style,
        noStyle = _a.noStyle,
        disabled = _a.disabled,
        restProps = __rest(_a, ["style", "noStyle", "disabled"]);
      var mergedStyle = {};
      if (!noStyle) {
        mergedStyle = (0, _extends2["default"])({}, inlineStyle);
      }
      if (disabled) {
        mergedStyle.pointerEvents = 'none';
      }
      mergedStyle = (0, _extends2["default"])((0, _extends2["default"])({}, mergedStyle), style);
      return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
        role: "button",
        tabIndex: 0,
        ref: this.setRef
      }, restProps, {
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        style: mergedStyle
      }));
    }
  }]);
}(React.Component);
var _default = exports["default"] = TransButton;