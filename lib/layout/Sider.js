"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SiderContext = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _isNativeReflectConstruct2 = _interopRequireDefault(require("@babel/runtime/helpers/isNativeReflectConstruct"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _omit = _interopRequireDefault(require("omit.js"));
var _BarsOutlined = _interopRequireDefault(require("@ant-design/icons/BarsOutlined"));
var _RightOutlined = _interopRequireDefault(require("@ant-design/icons/RightOutlined"));
var _LeftOutlined = _interopRequireDefault(require("@ant-design/icons/LeftOutlined"));
var _layout = require("./layout");
var _configProvider = require("../config-provider");
var _isNumeric = _interopRequireDefault(require("../_util/isNumeric"));
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
var dimensionMaxMap = {
  xs: '479.98px',
  sm: '575.98px',
  md: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
  xxl: '1599.98px'
};
var SiderContext = exports.SiderContext = /*#__PURE__*/React.createContext({});
var generateId = function () {
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return "".concat(prefix).concat(i);
  };
}();
var InternalSider = /*#__PURE__*/function (_React$Component) {
  function InternalSider(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, InternalSider);
    _this = _callSuper(this, InternalSider, [props]);
    _this.responsiveHandler = function (mql) {
      _this.setState({
        below: mql.matches
      });
      var onBreakpoint = _this.props.onBreakpoint;
      var collapsed = _this.state.collapsed;
      if (onBreakpoint) {
        onBreakpoint(mql.matches);
      }
      if (collapsed !== mql.matches) {
        _this.setCollapsed(mql.matches, 'responsive');
      }
    };
    _this.setCollapsed = function (collapsed, type) {
      if (!('collapsed' in _this.props)) {
        _this.setState({
          collapsed: collapsed
        });
      }
      var onCollapse = _this.props.onCollapse;
      if (onCollapse) {
        onCollapse(collapsed, type);
      }
    };
    _this.toggle = function () {
      var collapsed = !_this.state.collapsed;
      _this.setCollapsed(collapsed, 'clickTrigger');
    };
    _this.renderSider = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _a = _this.props,
        customizePrefixCls = _a.prefixCls,
        className = _a.className,
        theme = _a.theme,
        collapsible = _a.collapsible,
        reverseArrow = _a.reverseArrow,
        trigger = _a.trigger,
        style = _a.style,
        width = _a.width,
        collapsedWidth = _a.collapsedWidth,
        zeroWidthTriggerStyle = _a.zeroWidthTriggerStyle,
        children = _a.children,
        others = __rest(_a, ["prefixCls", "className", "theme", "collapsible", "reverseArrow", "trigger", "style", "width", "collapsedWidth", "zeroWidthTriggerStyle", "children"]);
      var _this$state = _this.state,
        collapsed = _this$state.collapsed,
        below = _this$state.below;
      var prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
      var divProps = (0, _omit["default"])(others, ['collapsed', 'defaultCollapsed', 'onCollapse', 'breakpoint', 'onBreakpoint', 'siderHook', 'zeroWidthTriggerStyle']);
      var rawWidth = collapsed ? collapsedWidth : width;
      // use "px" as fallback unit for width
      var siderWidth = (0, _isNumeric["default"])(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth);
      // special trigger when collapsedWidth == 0
      var zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? /*#__PURE__*/React.createElement("span", {
        onClick: _this.toggle,
        className: (0, _classnames["default"])("".concat(prefixCls, "-zero-width-trigger"), "".concat(prefixCls, "-zero-width-trigger-").concat(reverseArrow ? 'right' : 'left')),
        style: zeroWidthTriggerStyle
      }, trigger || /*#__PURE__*/React.createElement(_BarsOutlined["default"], null)) : null;
      var iconObj = {
        expanded: reverseArrow ? /*#__PURE__*/React.createElement(_RightOutlined["default"], null) : /*#__PURE__*/React.createElement(_LeftOutlined["default"], null),
        collapsed: reverseArrow ? /*#__PURE__*/React.createElement(_LeftOutlined["default"], null) : /*#__PURE__*/React.createElement(_RightOutlined["default"], null)
      };
      var status = collapsed ? 'collapsed' : 'expanded';
      var defaultTrigger = iconObj[status];
      var triggerDom = trigger !== null ? zeroWidthTrigger || /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-trigger"),
        onClick: _this.toggle,
        style: {
          width: siderWidth
        }
      }, trigger || defaultTrigger) : null;
      var divStyle = (0, _extends2["default"])((0, _extends2["default"])({}, style), {
        flex: "0 0 ".concat(siderWidth),
        maxWidth: siderWidth,
        minWidth: siderWidth,
        width: siderWidth
      });
      var siderCls = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-").concat(theme), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-collapsed"), !!collapsed), "".concat(prefixCls, "-has-trigger"), collapsible && trigger !== null && !zeroWidthTrigger), "".concat(prefixCls, "-below"), !!below), "".concat(prefixCls, "-zero-width"), parseFloat(siderWidth) === 0), className);
      return /*#__PURE__*/React.createElement("aside", (0, _extends2["default"])({
        className: siderCls
      }, divProps, {
        style: divStyle
      }), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-children")
      }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null);
    };
    _this.uniqueId = generateId('ant-sider-');
    var matchMedia;
    if (typeof window !== 'undefined') {
      matchMedia = window.matchMedia;
    }
    if (matchMedia && props.breakpoint && props.breakpoint in dimensionMaxMap) {
      _this.mql = matchMedia("(max-width: ".concat(dimensionMaxMap[props.breakpoint], ")"));
    }
    var collapsed;
    if ('collapsed' in props) {
      collapsed = props.collapsed;
    } else {
      collapsed = props.defaultCollapsed;
    }
    _this.state = {
      collapsed: collapsed,
      below: false
    };
    return _this;
  }
  (0, _inherits2["default"])(InternalSider, _React$Component);
  return (0, _createClass2["default"])(InternalSider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _a;
      if (this.mql) {
        try {
          this.mql.addEventListener('change', this.responsiveHandler);
        } catch (error) {
          this.mql.addListener(this.responsiveHandler);
        }
        this.responsiveHandler(this.mql);
      }
      (_a = this.props) === null || _a === void 0 ? void 0 : _a.siderHook.addSider(this.uniqueId);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _a, _b, _c;
      try {
        (_a = this.mql) === null || _a === void 0 ? void 0 : _a.removeEventListener('change', this.responsiveHandler);
      } catch (error) {
        (_b = this.mql) === null || _b === void 0 ? void 0 : _b.removeListener(this.responsiveHandler);
      }
      (_c = this.props) === null || _c === void 0 ? void 0 : _c.siderHook.removeSider(this.uniqueId);
    }
  }, {
    key: "render",
    value: function render() {
      var collapsed = this.state.collapsed;
      var collapsedWidth = this.props.collapsedWidth;
      return /*#__PURE__*/React.createElement(SiderContext.Provider, {
        value: {
          siderCollapsed: collapsed,
          collapsedWidth: collapsedWidth
        }
      }, /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderSider));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('collapsed' in nextProps) {
        return {
          collapsed: nextProps.collapsed
        };
      }
      return null;
    }
  }]);
}(React.Component);
InternalSider.defaultProps = {
  collapsible: false,
  defaultCollapsed: false,
  reverseArrow: false,
  width: 200,
  collapsedWidth: 80,
  style: {},
  theme: 'dark'
};
// eslint-disable-next-line react/prefer-stateless-function
var Sider = exports["default"] = /*#__PURE__*/function (_React$Component2) {
  function Sider() {
    (0, _classCallCheck2["default"])(this, Sider);
    return _callSuper(this, Sider, arguments);
  }
  (0, _inherits2["default"])(Sider, _React$Component2);
  return (0, _createClass2["default"])(Sider, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/React.createElement(_layout.LayoutContext.Consumer, null, function (context) {
        return /*#__PURE__*/React.createElement(InternalSider, (0, _extends2["default"])({}, context, _this2.props));
      });
    }
  }]);
}(React.Component);