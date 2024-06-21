"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _isNativeReflectConstruct2 = _interopRequireDefault(require("@babel/runtime/helpers/isNativeReflectConstruct"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _configProvider = require("../config-provider");
var _context = _interopRequireDefault(require("./context"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
var AnchorLink = /*#__PURE__*/function (_React$Component) {
  function AnchorLink() {
    var _this;
    (0, _classCallCheck2["default"])(this, AnchorLink);
    _this = _callSuper(this, AnchorLink, arguments);
    _this.handleClick = function (e) {
      var _this$context = _this.context,
        scrollTo = _this$context.scrollTo,
        onClick = _this$context.onClick;
      var _this$props = _this.props,
        href = _this$props.href,
        title = _this$props.title;
      if (onClick) {
        onClick(e, {
          title: title,
          href: href
        });
      }
      scrollTo(href);
    };
    _this.renderAnchorLink = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props2 = _this.props,
        customizePrefixCls = _this$props2.prefixCls,
        href = _this$props2.href,
        title = _this$props2.title,
        children = _this$props2.children,
        className = _this$props2.className,
        target = _this$props2.target;
      var prefixCls = getPrefixCls('anchor', customizePrefixCls);
      var active = _this.context.activeLink === href;
      var wrapperClassName = (0, _classnames["default"])("".concat(prefixCls, "-link"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-link-active"), active), className);
      var titleClassName = (0, _classnames["default"])("".concat(prefixCls, "-link-title"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-link-title-active"), active));
      return /*#__PURE__*/React.createElement("div", {
        className: wrapperClassName
      }, /*#__PURE__*/React.createElement("a", {
        className: titleClassName,
        href: href,
        title: typeof title === 'string' ? title : '',
        target: target,
        onClick: _this.handleClick
      }, title), children);
    };
    return _this;
  }
  (0, _inherits2["default"])(AnchorLink, _React$Component);
  return (0, _createClass2["default"])(AnchorLink, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.context.registerLink(this.props.href);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevHref = _ref2.href;
      var href = this.props.href;
      if (prevHref !== href) {
        this.context.unregisterLink(prevHref);
        this.context.registerLink(href);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.context.unregisterLink(this.props.href);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderAnchorLink);
    }
  }]);
}(React.Component);
AnchorLink.defaultProps = {
  href: '#'
};
AnchorLink.contextType = _context["default"];
var _default = exports["default"] = AnchorLink;