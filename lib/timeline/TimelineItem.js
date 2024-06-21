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
var _omit = _interopRequireDefault(require("omit.js"));
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
var TimelineItem = function TimelineItem(props) {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    color = props.color,
    children = props.children,
    pending = props.pending,
    dot = props.dot,
    label = props.label,
    restProps = __rest(props, ["prefixCls", "className", "color", "children", "pending", "dot", "label"]);
  var prefixCls = getPrefixCls('timeline', customizePrefixCls);
  var itemClassName = (0, _classnames["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-item"), true), "".concat(prefixCls, "-item-pending"), pending), className);
  var dotClassName = (0, _classnames["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-item-head"), true), "".concat(prefixCls, "-item-head-custom"), dot), "".concat(prefixCls, "-item-head-").concat(color), true));
  return /*#__PURE__*/React.createElement("li", (0, _extends2["default"])({}, (0, _omit["default"])(restProps, ['position']), {
    className: itemClassName
  }), label && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-item-label")
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-item-tail")
  }), /*#__PURE__*/React.createElement("div", {
    className: dotClassName,
    style: {
      borderColor: /blue|red|green|gray/.test(color || '') ? undefined : color
    }
  }, dot), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-item-content")
  }, children));
};
TimelineItem.defaultProps = {
  color: 'blue',
  pending: false,
  position: ''
};
var _default = exports["default"] = TimelineItem;