"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _RowContext = _interopRequireDefault(require("./RowContext"));
var _configProvider = require("../config-provider");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function parseFlex(flex) {
  if (typeof flex === 'number') {
    return "".concat(flex, " ").concat(flex, " auto");
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return "0 0 ".concat(flex);
  }
  return flex;
}
var Col = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var renderCol = function renderCol(_ref) {
    var getPrefixCls = _ref.getPrefixCls,
      direction = _ref.direction;
    var customizePrefixCls = props.prefixCls,
      span = props.span,
      order = props.order,
      offset = props.offset,
      push = props.push,
      pull = props.pull,
      className = props.className,
      children = props.children,
      flex = props.flex,
      style = props.style,
      others = __rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]);
    var prefixCls = getPrefixCls('col', customizePrefixCls);
    var sizeClassObj = {};
    ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(function (size) {
      var sizeProps = {};
      var propSize = props[size];
      if (typeof propSize === 'number') {
        sizeProps.span = propSize;
      } else if ((0, _typeof2["default"])(propSize) === 'object') {
        sizeProps = propSize || {};
      }
      delete others[size];
      sizeClassObj = (0, _extends3["default"])((0, _extends3["default"])({}, sizeClassObj), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), "".concat(prefixCls, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), "".concat(prefixCls, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), "".concat(prefixCls, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), "".concat(prefixCls, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), "".concat(prefixCls, "-rtl"), direction === 'rtl'));
    });
    var classes = (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-").concat(span), span !== undefined), "".concat(prefixCls, "-order-").concat(order), order), "".concat(prefixCls, "-offset-").concat(offset), offset), "".concat(prefixCls, "-push-").concat(push), push), "".concat(prefixCls, "-pull-").concat(pull), pull), className, sizeClassObj);
    return /*#__PURE__*/React.createElement(_RowContext["default"].Consumer, null, function (_ref2) {
      var gutter = _ref2.gutter;
      var mergedStyle = (0, _extends3["default"])({}, style);
      if (gutter) {
        mergedStyle = (0, _extends3["default"])((0, _extends3["default"])((0, _extends3["default"])({}, gutter[0] > 0 ? {
          paddingLeft: gutter[0] / 2,
          paddingRight: gutter[0] / 2
        } : {}), gutter[1] > 0 ? {
          paddingTop: gutter[1] / 2,
          paddingBottom: gutter[1] / 2
        } : {}), mergedStyle);
      }
      if (flex) {
        mergedStyle.flex = parseFlex(flex);
      }
      return /*#__PURE__*/React.createElement("div", (0, _extends3["default"])({}, others, {
        style: mergedStyle,
        className: classes,
        ref: ref
      }), children);
    });
  };
  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, renderCol);
});
Col.displayName = 'Col';
var _default = exports["default"] = Col;