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
var _rcMenu = _interopRequireWildcard(require("rc-menu"));
var _classnames = _interopRequireDefault(require("classnames"));
var _SubMenu = _interopRequireDefault(require("./SubMenu"));
var _MenuItem = _interopRequireDefault(require("./MenuItem"));
var _configProvider = require("../config-provider");
var _devWarning = _interopRequireDefault(require("../_util/devWarning"));
var _Sider = require("../layout/Sider");
var _motion = _interopRequireDefault(require("../_util/motion"));
var _MenuContext = _interopRequireDefault(require("./MenuContext"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
var InternalMenu = /*#__PURE__*/function (_React$Component) {
  function InternalMenu(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, InternalMenu);
    _this = _callSuper(this, InternalMenu, [props]);
    _this.renderMenu = function (_ref) {
      var getPopupContainer = _ref.getPopupContainer,
        getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;
      var _this$props = _this.props,
        customizePrefixCls = _this$props.prefixCls,
        className = _this$props.className,
        theme = _this$props.theme;
      var defaultMotions = {
        horizontal: {
          motionName: 'slide-up'
        },
        inline: _motion["default"],
        other: {
          motionName: 'zoom-big'
        }
      };
      var prefixCls = getPrefixCls('menu', customizePrefixCls);
      var menuClassName = (0, _classnames["default"])("".concat(prefixCls, "-").concat(theme), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-inline-collapsed"), _this.getInlineCollapsed()), className);
      return /*#__PURE__*/React.createElement(_MenuContext["default"].Provider, {
        value: {
          inlineCollapsed: _this.getInlineCollapsed() || false,
          antdMenuTheme: theme,
          direction: direction
        }
      }, /*#__PURE__*/React.createElement(_rcMenu["default"], (0, _extends2["default"])({
        getPopupContainer: getPopupContainer
      }, _this.props, {
        className: menuClassName,
        prefixCls: prefixCls,
        direction: direction,
        defaultMotions: defaultMotions
      })));
    };
    (0, _devWarning["default"])(!('inlineCollapsed' in props && props.mode !== 'inline'), 'Menu', '`inlineCollapsed` should only be used when `mode` is inline.');
    (0, _devWarning["default"])(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'Menu', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.');
    return _this;
  }
  (0, _inherits2["default"])(InternalMenu, _React$Component);
  return (0, _createClass2["default"])(InternalMenu, [{
    key: "getInlineCollapsed",
    value: function getInlineCollapsed() {
      var _this$props2 = this.props,
        inlineCollapsed = _this$props2.inlineCollapsed,
        siderCollapsed = _this$props2.siderCollapsed;
      if (siderCollapsed !== undefined) {
        return siderCollapsed;
      }
      return inlineCollapsed;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderMenu);
    }
  }]);
}(React.Component);
InternalMenu.defaultProps = {
  className: '',
  theme: 'light',
  focusable: false
};
// We should keep this as ref-able
var Menu = exports["default"] = /*#__PURE__*/function (_React$Component2) {
  function Menu() {
    (0, _classCallCheck2["default"])(this, Menu);
    return _callSuper(this, Menu, arguments);
  }
  (0, _inherits2["default"])(Menu, _React$Component2);
  return (0, _createClass2["default"])(Menu, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/React.createElement(_Sider.SiderContext.Consumer, null, function (context) {
        return /*#__PURE__*/React.createElement(InternalMenu, (0, _extends2["default"])({}, _this2.props, context));
      });
    }
  }]);
}(React.Component);
Menu.Divider = _rcMenu.Divider;
Menu.Item = _MenuItem["default"];
Menu.SubMenu = _SubMenu["default"];
Menu.ItemGroup = _rcMenu.ItemGroup;