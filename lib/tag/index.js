"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _omit = _interopRequireDefault(require("omit.js"));
var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));
var _CheckableTag = _interopRequireDefault(require("./CheckableTag"));
var _configProvider = require("../config-provider");
var _colors = require("../_util/colors");
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
var PresetColorRegex = new RegExp("^(".concat(_colors.PresetColorTypes.join('|'), ")(-inverse)?$"));
var PresetStatusColorRegex = new RegExp("^(".concat(_colors.PresetStatusColorTypes.join('|'), ")$"));
var InternalTag = function InternalTag(_a, ref) {
  var customizePrefixCls = _a.prefixCls,
    className = _a.className,
    style = _a.style,
    children = _a.children,
    icon = _a.icon,
    color = _a.color,
    onClose = _a.onClose,
    closeIcon = _a.closeIcon,
    _a$closable = _a.closable,
    closable = _a$closable === void 0 ? false : _a$closable,
    props = __rest(_a, ["prefixCls", "className", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var _React$useState = React.useState(true),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    visible = _React$useState2[0],
    setVisible = _React$useState2[1];
  React.useEffect(function () {
    if ('visible' in props) {
      setVisible(props.visible);
    }
  }, [props.visible]);
  var isPresetColor = function isPresetColor() {
    if (!color) {
      return false;
    }
    return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
  };
  var tagStyle = (0, _extends2["default"])({
    backgroundColor: color && !isPresetColor() ? color : undefined
  }, style);
  var presetColor = isPresetColor();
  var prefixCls = getPrefixCls('tag', customizePrefixCls);
  var tagClassName = (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-").concat(color), presetColor), "".concat(prefixCls, "-has-color"), color && !presetColor), "".concat(prefixCls, "-hidden"), !visible), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  var handleCloseClick = function handleCloseClick(e) {
    e.stopPropagation();
    if (onClose) {
      onClose(e);
    }
    if (e.defaultPrevented) {
      return;
    }
    if (!('visible' in props)) {
      setVisible(false);
    }
  };
  var renderCloseIcon = function renderCloseIcon() {
    if (closable) {
      return closeIcon ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-close-icon"),
        onClick: handleCloseClick
      }, closeIcon) : /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
        className: "".concat(prefixCls, "-close-icon"),
        onClick: handleCloseClick
      });
    }
    return null;
  };
  var tagProps = (0, _omit["default"])(props, ['visible']);
  var iconNode = icon || null;
  var kids = iconNode ? /*#__PURE__*/React.createElement(React.Fragment, null, iconNode, /*#__PURE__*/React.createElement("span", null, children)) : children;
  var tagNode = /*#__PURE__*/React.createElement("span", (0, _extends2["default"])({}, tagProps, {
    ref: ref,
    className: tagClassName,
    style: tagStyle
  }), kids, renderCloseIcon());
  return tagNode;
};
var Tag = /*#__PURE__*/React.forwardRef(InternalTag);
Tag.displayName = 'Tag';
Tag.CheckableTag = _CheckableTag["default"];
var _default = exports["default"] = Tag;