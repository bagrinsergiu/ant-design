"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LastIndexContext = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));
var _configProvider = require("../config-provider");
var _Item = _interopRequireDefault(require("./Item"));
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
var LastIndexContext = exports.LastIndexContext = /*#__PURE__*/React.createContext(0);
var Space = function Space(props) {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    space = _React$useContext.space,
    directionConfig = _React$useContext.direction;
  var _props$size = props.size,
    size = _props$size === void 0 ? (space === null || space === void 0 ? void 0 : space.size) || 'small' : _props$size,
    align = props.align,
    className = props.className,
    children = props.children,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
    customizePrefixCls = props.prefixCls,
    split = props.split,
    otherProps = __rest(props, ["size", "align", "className", "children", "direction", "prefixCls", "split"]);
  var childNodes = (0, _toArray["default"])(children, {
    keepEmpty: true
  });
  if (childNodes.length === 0) {
    return null;
  }
  var mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
  var prefixCls = getPrefixCls('space', customizePrefixCls);
  var cn = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-").concat(direction), (0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), directionConfig === 'rtl'), "".concat(prefixCls, "-align-").concat(mergedAlign), mergedAlign), className);
  var itemClassName = "".concat(prefixCls, "-item");
  var marginDirection = directionConfig === 'rtl' ? 'marginLeft' : 'marginRight';
  // Calculate latest one
  var latestIndex = 0;
  var nodes = childNodes.map(function (child, i) {
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }
    /* eslint-disable react/no-array-index-key */
    return /*#__PURE__*/React.createElement(_Item["default"], {
      className: itemClassName,
      key: "".concat(itemClassName, "-").concat(i),
      direction: direction,
      size: size,
      index: i,
      marginDirection: marginDirection,
      split: split
    }, child);
    /* eslint-enable */
  });
  return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
    className: cn
  }, otherProps), /*#__PURE__*/React.createElement(LastIndexContext.Provider, {
    value: latestIndex
  }, nodes));
};
var _default = exports["default"] = Space;