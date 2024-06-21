"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _isNativeReflectConstruct2 = _interopRequireDefault(require("@babel/runtime/helpers/isNativeReflectConstruct"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var React = _interopRequireWildcard(require("react"));
var _rcMenu = require("rc-menu");
var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));
var _classnames = _interopRequireDefault(require("classnames"));
var _MenuContext = _interopRequireDefault(require("./MenuContext"));
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _Sider = require("../layout/Sider");
var _reactNode = require("../_util/reactNode");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var MenuItem = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function MenuItem() {
    var _this;
    (0, _classCallCheck2["default"])(this, MenuItem);
    _this = _callSuper(this, MenuItem, arguments);
    _this.renderItem = function (_ref) {
      var siderCollapsed = _ref.siderCollapsed;
      var _this$props = _this.props,
        level = _this$props.level,
        className = _this$props.className,
        children = _this$props.children,
        rootPrefixCls = _this$props.rootPrefixCls;
      var _a = _this.props,
        title = _a.title,
        icon = _a.icon,
        danger = _a.danger,
        rest = __rest(_a, ["title", "icon", "danger"]);
      return /*#__PURE__*/React.createElement(_MenuContext["default"].Consumer, null, function (_ref2) {
        var inlineCollapsed = _ref2.inlineCollapsed,
          direction = _ref2.direction;
        var tooltipTitle = title;
        if (typeof title === 'undefined') {
          tooltipTitle = level === 1 ? children : '';
        } else if (title === false) {
          tooltipTitle = '';
        }
        var tooltipProps = {
          title: tooltipTitle
        };
        if (!siderCollapsed && !inlineCollapsed) {
          tooltipProps.title = null;
          // Reset `visible` to fix control mode tooltip display not correct
          // ref: https://github.com/ant-design/ant-design/issues/16742
          tooltipProps.visible = false;
        }
        var childrenLength = (0, _toArray["default"])(children).length;
        return /*#__PURE__*/React.createElement(_tooltip["default"], (0, _extends2["default"])({}, tooltipProps, {
          placement: direction === 'rtl' ? 'left' : 'right',
          overlayClassName: "".concat(rootPrefixCls, "-inline-collapsed-tooltip")
        }), /*#__PURE__*/React.createElement(_rcMenu.Item, (0, _extends2["default"])({}, rest, {
          className: (0, _classnames["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(rootPrefixCls, "-item-danger"), danger), "".concat(rootPrefixCls, "-item-only-child"), (icon ? childrenLength + 1 : childrenLength) === 1), className),
          title: title
        }), icon, _this.renderItemChildren(inlineCollapsed)));
      });
    };
    return _this;
  }
  (0, _inherits2["default"])(MenuItem, _React$Component);
  return (0, _createClass2["default"])(MenuItem, [{
    key: "renderItemChildren",
    value: function renderItemChildren(inlineCollapsed) {
      var _this$props2 = this.props,
        icon = _this$props2.icon,
        children = _this$props2.children,
        level = _this$props2.level,
        rootPrefixCls = _this$props2.rootPrefixCls;
      // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
      // ref: https://github.com/ant-design/ant-design/pull/23456
      if (!icon || (0, _reactNode.isValidElement)(children) && children.type === 'span') {
        if (children && inlineCollapsed && level === 1 && typeof children === 'string') {
          return /*#__PURE__*/React.createElement("div", {
            className: "".concat(rootPrefixCls, "-inline-collapsed-noicon")
          }, children.charAt(0));
        }
        return children;
      }
      return /*#__PURE__*/React.createElement("span", null, children);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_Sider.SiderContext.Consumer, null, this.renderItem);
    }
  }]);
}(React.Component);
MenuItem.isMenuItem = true;