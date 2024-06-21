"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Item;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var React = _interopRequireWildcard(require("react"));
var _ = require(".");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var spaceSize = {
  small: 8,
  middle: 16,
  large: 24
};
function Item(_ref) {
  var className = _ref.className,
    direction = _ref.direction,
    index = _ref.index,
    size = _ref.size,
    marginDirection = _ref.marginDirection,
    children = _ref.children,
    split = _ref.split;
  var _a;
  var latestIndex = React.useContext(_.LastIndexContext);
  if (children === null || children === undefined) {
    return null;
  }
  var style = index >= latestIndex ? {} : (0, _defineProperty2["default"])({}, direction === 'vertical' ? 'marginBottom' : marginDirection, ((_a = typeof size === 'string' ? spaceSize[size] : size) !== null && _a !== void 0 ? _a : 0) / (split ? 2 : 1));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, children), index < latestIndex && split && /*#__PURE__*/React.createElement("span", {
    className: "".concat(className, "-split"),
    style: style
  }, split));
}