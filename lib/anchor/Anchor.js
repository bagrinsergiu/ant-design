"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _readOnlyError2 = _interopRequireDefault(require("@babel/runtime/helpers/readOnlyError"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _isNativeReflectConstruct2 = _interopRequireDefault(require("@babel/runtime/helpers/isNativeReflectConstruct"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var React = _interopRequireWildcard(require("react"));
var ReactDOM = _interopRequireWildcard(require("react-dom"));
var _classnames = _interopRequireDefault(require("classnames"));
var _addEventListener = _interopRequireDefault(require("rc-util/lib/Dom/addEventListener"));
var _affix = _interopRequireDefault(require("../affix"));
var _configProvider = require("../config-provider");
var _scrollTo = _interopRequireDefault(require("../_util/scrollTo"));
var _getScroll = _interopRequireDefault(require("../_util/getScroll"));
var _context = _interopRequireDefault(require("./context"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function getDefaultContainer() {
  return window;
}
function getOffsetTop(element, container) {
  if (!element.getClientRects().length) {
    return 0;
  }
  var rect = element.getBoundingClientRect();
  if (rect.width || rect.height) {
    if (container === window) {
      container = element.ownerDocument.documentElement;
      return rect.top - container.clientTop;
    }
    return rect.top - container.getBoundingClientRect().top;
  }
  return rect.top;
}
var sharpMatcherRegx = /#(\S+)$/;
var Anchor = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function Anchor() {
    var _this;
    (0, _classCallCheck2["default"])(this, Anchor);
    _this = _callSuper(this, Anchor, arguments);
    _this.state = {
      activeLink: null
    };
    _this.links = [];
    // Context
    _this.registerLink = function (link) {
      if (!_this.links.includes(link)) {
        _this.links.push(link);
      }
    };
    _this.unregisterLink = function (link) {
      var index = _this.links.indexOf(link);
      if (index !== -1) {
        _this.links.splice(index, 1);
      }
    };
    _this.getContainer = function () {
      var getTargetContainer = _this.context.getTargetContainer;
      var getContainer = _this.props.getContainer;
      var getFunc = getContainer || getTargetContainer || getDefaultContainer;
      return getFunc();
    };
    _this.handleScrollTo = function (link) {
      var _this$props = _this.props,
        offsetTop = _this$props.offsetTop,
        targetOffset = _this$props.targetOffset;
      _this.setCurrentActiveLink(link);
      var container = _this.getContainer();
      var scrollTop = (0, _getScroll["default"])(container, true);
      var sharpLinkMatch = sharpMatcherRegx.exec(link);
      if (!sharpLinkMatch) {
        return;
      }
      var targetElement = document.getElementById(sharpLinkMatch[1]);
      if (!targetElement) {
        return;
      }
      var eleOffsetTop = getOffsetTop(targetElement, container);
      var y = scrollTop + eleOffsetTop;
      y -= targetOffset !== undefined ? targetOffset : offsetTop || 0;
      _this.animating = true;
      (0, _scrollTo["default"])(y, {
        callback: function callback() {
          _this.animating = false;
        },
        getContainer: _this.getContainer
      });
    };
    _this.saveInkNode = function (node) {
      _this.inkNode = node;
    };
    _this.setCurrentActiveLink = function (link) {
      var activeLink = _this.state.activeLink;
      var onChange = _this.props.onChange;
      if (activeLink !== link) {
        _this.setState({
          activeLink: link
        });
        if (onChange) {
          onChange(link);
        }
      }
    };
    _this.handleScroll = function () {
      if (_this.animating) {
        return;
      }
      var _this$props2 = _this.props,
        offsetTop = _this$props2.offsetTop,
        bounds = _this$props2.bounds,
        targetOffset = _this$props2.targetOffset;
      var currentActiveLink = _this.getCurrentAnchor(targetOffset !== undefined ? targetOffset : offsetTop || 0, bounds);
      _this.setCurrentActiveLink(currentActiveLink);
    };
    _this.updateInk = function () {
      var _this2 = _this,
        prefixCls = _this2.prefixCls;
      var anchorNode = ReactDOM.findDOMNode(_this);
      var linkNode = anchorNode.getElementsByClassName("".concat(prefixCls, "-link-title-active"))[0];
      if (linkNode) {
        _this.inkNode.style.top = "".concat(linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5, "px");
      }
    };
    _this.render = function () {
      var _this$context = _this.context,
        getPrefixCls = _this$context.getPrefixCls,
        direction = _this$context.direction;
      var _this$props3 = _this.props,
        customizePrefixCls = _this$props3.prefixCls,
        _this$props3$classNam = _this$props3.className,
        className = _this$props3$classNam === void 0 ? '' : _this$props3$classNam,
        style = _this$props3.style,
        offsetTop = _this$props3.offsetTop,
        affix = _this$props3.affix,
        showInkInFixed = _this$props3.showInkInFixed,
        children = _this$props3.children;
      var activeLink = _this.state.activeLink;
      var prefixCls = getPrefixCls('anchor', customizePrefixCls);
      // To support old version react.
      // Have to add prefixCls on the instance.
      // https://github.com/facebook/react/issues/12397
      _this.prefixCls = prefixCls;
      var inkClass = (0, _classnames["default"])("".concat(prefixCls, "-ink-ball"), {
        visible: activeLink
      });
      var wrapperClass = (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
      var anchorClass = (0, _classnames["default"])(prefixCls, {
        fixed: !affix && !showInkInFixed
      });
      var wrapperStyle = (0, _extends2["default"])({
        maxHeight: offsetTop ? "calc(100vh - ".concat(offsetTop, "px)") : '100vh'
      }, style);
      var anchorContent = /*#__PURE__*/React.createElement("div", {
        className: wrapperClass,
        style: wrapperStyle
      }, /*#__PURE__*/React.createElement("div", {
        className: anchorClass
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-ink")
      }, /*#__PURE__*/React.createElement("span", {
        className: inkClass,
        ref: _this.saveInkNode
      })), children));
      return /*#__PURE__*/React.createElement(_context["default"].Provider, {
        value: {
          registerLink: _this.registerLink,
          unregisterLink: _this.unregisterLink,
          activeLink: _this.state.activeLink,
          scrollTo: _this.handleScrollTo,
          onClick: _this.props.onClick
        }
      }, !affix ? anchorContent : /*#__PURE__*/React.createElement(_affix["default"], {
        offsetTop: offsetTop,
        target: _this.getContainer
      }, anchorContent));
    };
    return _this;
  }
  (0, _inherits2["default"])(Anchor, _React$Component);
  return (0, _createClass2["default"])(Anchor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollContainer = this.getContainer();
      this.scrollEvent = (0, _addEventListener["default"])(this.scrollContainer, 'scroll', this.handleScroll);
      this.handleScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.scrollEvent) {
        var currentContainer = this.getContainer();
        if (this.scrollContainer !== currentContainer) {
          this.scrollContainer = currentContainer;
          this.scrollEvent.remove();
          this.scrollEvent = (0, _addEventListener["default"])(this.scrollContainer, 'scroll', this.handleScroll);
          this.handleScroll();
        }
      }
      this.updateInk();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.scrollEvent) {
        this.scrollEvent.remove();
      }
    }
  }, {
    key: "getCurrentAnchor",
    value: function getCurrentAnchor() {
      var offsetTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var bounds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
      var getCurrentAnchor = this.props.getCurrentAnchor;
      if (typeof getCurrentAnchor === 'function') {
        return getCurrentAnchor();
      }
      var linkSections = [];
      var container = this.getContainer();
      this.links.forEach(function (link) {
        var sharpLinkMatch = sharpMatcherRegx.exec(link.toString());
        if (!sharpLinkMatch) {
          return;
        }
        var target = document.getElementById(sharpLinkMatch[1]);
        if (target) {
          var top = getOffsetTop(target, container);
          if (top < offsetTop + bounds) {
            linkSections.push({
              link: link,
              top: top
            });
          }
        }
      });
      if (linkSections.length) {
        var maxSection = linkSections.reduce(function (prev, curr) {
          return curr.top > prev.top ? curr : prev;
        });
        return maxSection.link;
      }
      return '';
    }
  }]);
}(React.Component);
Anchor.defaultProps = {
  affix: true,
  showInkInFixed: false
};
Anchor.contextType = _configProvider.ConfigContext;