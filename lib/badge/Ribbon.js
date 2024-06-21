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
var _utils = require("./utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Ribbon = function Ribbon(_ref) {
  var className = _ref.className,
    customizePrefixCls = _ref.prefixCls,
    style = _ref.style,
    color = _ref.color,
    children = _ref.children,
    text = _ref.text,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'end' : _ref$placement;
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('ribbon', customizePrefixCls);
  var colorInPreset = (0, _utils.isPresetColor)(color);
  var ribbonCls = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-placement-").concat(placement), (0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-color-").concat(color), colorInPreset), className);
  var colorStyle = {};
  var cornerColorStyle = {};
  if (color && !colorInPreset) {
    colorStyle.background = color;
    cornerColorStyle.color = color;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-wrapper")
  }, children, /*#__PURE__*/React.createElement("div", {
    className: ribbonCls,
    style: (0, _extends2["default"])((0, _extends2["default"])({}, colorStyle), style)
  }, text, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-corner"),
    style: cornerColorStyle
  })));
};
var _default = exports["default"] = Ribbon;