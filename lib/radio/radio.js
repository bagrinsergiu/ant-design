"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _rcCheckbox = _interopRequireDefault(require("rc-checkbox"));
var _classnames = _interopRequireDefault(require("classnames"));
var _configProvider = require("../config-provider");
var _context = _interopRequireDefault(require("./context"));
var _ref = require("../_util/ref");
var _devWarning = _interopRequireDefault(require("../_util/devWarning"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var InternalRadio = function InternalRadio(props, ref) {
  var context = React.useContext(_context["default"]);
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var innerRef = React.useRef();
  var mergedRef = (0, _ref.composeRef)(ref, innerRef);
  React.useEffect(function () {
    (0, _devWarning["default"])(!('optionType' in props), 'Radio', '`optionType` is only support in Radio.Group.');
  }, []);
  var onChange = function onChange(e) {
    if (props.onChange) {
      props.onChange(e);
    }
    if (context === null || context === void 0 ? void 0 : context.onChange) {
      context.onChange(e);
    }
  };
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    children = props.children,
    style = props.style,
    restProps = __rest(props, ["prefixCls", "className", "children", "style"]);
  var prefixCls = getPrefixCls('radio', customizePrefixCls);
  var radioProps = (0, _extends2["default"])({}, restProps);
  if (context) {
    radioProps.name = context.name;
    radioProps.onChange = onChange;
    radioProps.checked = props.value === context.value;
    radioProps.disabled = props.disabled || context.disabled;
  }
  var wrapperClassString = (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-wrapper-checked"), radioProps.checked), "".concat(prefixCls, "-wrapper-disabled"), radioProps.disabled), "".concat(prefixCls, "-wrapper-rtl"), direction === 'rtl'), className);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    React.createElement("label", {
      className: wrapperClassString,
      style: style,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave
    }, /*#__PURE__*/React.createElement(_rcCheckbox["default"], (0, _extends2["default"])({}, radioProps, {
      prefixCls: prefixCls,
      ref: mergedRef
    })), children !== undefined ? /*#__PURE__*/React.createElement("span", null, children) : null)
  );
};
var Radio = /*#__PURE__*/React.forwardRef(InternalRadio);
Radio.displayName = 'Radio';
Radio.defaultProps = {
  type: 'radio'
};
var _default = exports["default"] = Radio;