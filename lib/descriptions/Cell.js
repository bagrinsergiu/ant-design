"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function notEmpty(val) {
  return val !== undefined && val !== null;
}
var Cell = function Cell(_ref) {
  var itemPrefixCls = _ref.itemPrefixCls,
    component = _ref.component,
    span = _ref.span,
    className = _ref.className,
    style = _ref.style,
    bordered = _ref.bordered,
    label = _ref.label,
    content = _ref.content,
    colon = _ref.colon;
  var Component = component;
  if (bordered) {
    return /*#__PURE__*/React.createElement(Component, {
      className: (0, _classnames["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(itemPrefixCls, "-item-label"), notEmpty(label)), "".concat(itemPrefixCls, "-item-content"), notEmpty(content)), className),
      style: style,
      colSpan: span
    }, notEmpty(label) ? label : content);
  }
  return /*#__PURE__*/React.createElement(Component, {
    className: (0, _classnames["default"])("".concat(itemPrefixCls, "-item"), className),
    style: style,
    colSpan: span
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(itemPrefixCls, "-item-container")
  }, label && /*#__PURE__*/React.createElement("span", {
    className: (0, _classnames["default"])("".concat(itemPrefixCls, "-item-label"), (0, _defineProperty2["default"])({}, "".concat(itemPrefixCls, "-item-no-colon"), !colon))
  }, label), content && /*#__PURE__*/React.createElement("span", {
    className: (0, _classnames["default"])("".concat(itemPrefixCls, "-item-content"))
  }, content)));
};
var _default = exports["default"] = Cell;