"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _configProvider = require("../config-provider");
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
var CheckableTag = function CheckableTag(props) {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var handleClick = function handleClick(e) {
    var checked = props.checked,
      onChange = props.onChange,
      onClick = props.onClick;
    if (onChange) {
      onChange(!checked);
    }
    if (onClick) {
      onClick(e);
    }
  };
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    checked = props.checked,
    restProps = __rest(props, ["prefixCls", "className", "checked"]);
  var prefixCls = getPrefixCls('tag', customizePrefixCls);
  var cls = (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-checkable"), true), "".concat(prefixCls, "-checkable-checked"), checked), className);
  delete restProps.onChange; // TypeScript cannot check delete now.
  return /*#__PURE__*/React.createElement("span", (0, _extends2["default"])({}, restProps, {
    className: cls,
    onClick: handleClick
  }));
};
var _default = exports["default"] = CheckableTag;