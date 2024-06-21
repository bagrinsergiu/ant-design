"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _isNativeReflectConstruct2 = _interopRequireDefault(require("@babel/runtime/helpers/isNativeReflectConstruct"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var React = _interopRequireWildcard(require("react"));
var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));
var _SearchOutlined = _interopRequireDefault(require("@ant-design/icons/SearchOutlined"));
var _input = _interopRequireDefault(require("../input"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
var Search = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function Search() {
    var _this;
    (0, _classCallCheck2["default"])(this, Search);
    _this = _callSuper(this, Search, arguments);
    _this.handleChange = function (e) {
      var onChange = _this.props.onChange;
      if (onChange) {
        onChange(e);
      }
    };
    _this.handleClear = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
        handleClear = _this$props.handleClear,
        disabled = _this$props.disabled;
      if (!disabled && handleClear) {
        handleClear(e);
      }
    };
    return _this;
  }
  (0, _inherits2["default"])(Search, _React$Component);
  return (0, _createClass2["default"])(Search, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        placeholder = _this$props2.placeholder,
        value = _this$props2.value,
        prefixCls = _this$props2.prefixCls,
        disabled = _this$props2.disabled;
      var icon = value && value.length > 0 ? /*#__PURE__*/React.createElement("a", {
        className: "".concat(prefixCls, "-action"),
        onClick: this.handleClear
      }, /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null)) : /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-action")
      }, /*#__PURE__*/React.createElement(_SearchOutlined["default"], null));
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_input["default"], {
        placeholder: placeholder,
        className: prefixCls,
        value: value,
        onChange: this.handleChange,
        disabled: disabled
      }), icon);
    }
  }]);
}(React.Component);
Search.defaultProps = {
  placeholder: ''
};