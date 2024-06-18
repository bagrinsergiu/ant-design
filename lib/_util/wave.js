"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _isNativeReflectConstruct2 = _interopRequireDefault(require("@babel/runtime/helpers/isNativeReflectConstruct"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var React = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
var _Event = _interopRequireDefault(require("@ant-design/css-animation/lib/Event"));
var _raf = _interopRequireDefault(require("./raf"));
var _configProvider = require("../config-provider");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
var styleForPseudo;
// Where el is the DOM element you'd like to test for visibility
function isHidden(element) {
  if (process.env.NODE_ENV === 'test') {
    return false;
  }
  return !element || element.offsetParent === null;
}
function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }
  return true;
}
var Wave = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function Wave() {
    var _this;
    (0, _classCallCheck2["default"])(this, Wave);
    _this = _callSuper(this, Wave, arguments);
    _this.animationStart = false;
    _this.destroyed = false;
    _this.onClick = function (node, waveColor) {
      if (!node || isHidden(node) || node.className.indexOf('-leave') >= 0) {
        return;
      }
      var insertExtraNode = _this.props.insertExtraNode;
      _this.extraNode = document.createElement('div');
      var _this2 = _this,
        extraNode = _this2.extraNode;
      var getPrefixCls = _this.context.getPrefixCls;
      extraNode.className = "".concat(getPrefixCls(''), "-click-animating-node");
      var attributeName = _this.getAttributeName();
      node.setAttribute(attributeName, 'true');
      // Not white or transparent or grey
      styleForPseudo = styleForPseudo || document.createElement('style');
      if (waveColor && waveColor !== '#ffffff' && waveColor !== 'rgb(255, 255, 255)' && isNotGrey(waveColor) && !/rgba\((?:\d*, ){3}0\)/.test(waveColor) &&
      // any transparent rgba color
      waveColor !== 'transparent') {
        // Add nonce if CSP exist
        if (_this.csp && _this.csp.nonce) {
          styleForPseudo.nonce = _this.csp.nonce;
        }
        extraNode.style.borderColor = waveColor;
        styleForPseudo.innerHTML = "\n      [".concat(getPrefixCls(''), "-click-animating-without-extra-node='true']::after, .").concat(getPrefixCls(''), "-click-animating-node {\n        --antd-wave-shadow-color: ").concat(waveColor, ";\n      }");
        if (!document.body.contains(styleForPseudo)) {
          document.body.appendChild(styleForPseudo);
        }
      }
      if (insertExtraNode) {
        node.appendChild(extraNode);
      }
      _Event["default"].addStartEventListener(node, _this.onTransitionStart);
      _Event["default"].addEndEventListener(node, _this.onTransitionEnd);
    };
    _this.onTransitionStart = function (e) {
      if (_this.destroyed) {
        return;
      }
      var node = (0, _reactDom.findDOMNode)(_this);
      if (!e || e.target !== node || _this.animationStart) {
        return;
      }
      _this.resetEffect(node);
    };
    _this.onTransitionEnd = function (e) {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }
      _this.resetEffect(e.target);
    };
    _this.bindAnimationEvent = function (node) {
      if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.indexOf('disabled') >= 0) {
        return;
      }
      var onClick = function onClick(e) {
        // Fix radio button click twice
        if (e.target.tagName === 'INPUT' || isHidden(e.target)) {
          return;
        }
        _this.resetEffect(node);
        // Get wave color from target
        var waveColor = getComputedStyle(node).getPropertyValue('border-top-color') ||
        // Firefox Compatible
        getComputedStyle(node).getPropertyValue('border-color') || getComputedStyle(node).getPropertyValue('background-color');
        _this.clickWaveTimeoutId = window.setTimeout(function () {
          return _this.onClick(node, waveColor);
        }, 0);
        _raf["default"].cancel(_this.animationStartId);
        _this.animationStart = true;
        // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.
        _this.animationStartId = (0, _raf["default"])(function () {
          _this.animationStart = false;
        }, 10);
      };
      node.addEventListener('click', onClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener('click', onClick, true);
        }
      };
    };
    _this.renderWave = function (_ref) {
      var csp = _ref.csp;
      var children = _this.props.children;
      _this.csp = csp;
      return children;
    };
    return _this;
  }
  (0, _inherits2["default"])(Wave, _React$Component);
  return (0, _createClass2["default"])(Wave, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var node = (0, _reactDom.findDOMNode)(this);
      if (!node || node.nodeType !== 1) {
        return;
      }
      this.instance = this.bindAnimationEvent(node);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.cancel();
      }
      if (this.clickWaveTimeoutId) {
        clearTimeout(this.clickWaveTimeoutId);
      }
      this.destroyed = true;
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName() {
      var getPrefixCls = this.context.getPrefixCls;
      var insertExtraNode = this.props.insertExtraNode;
      return insertExtraNode ? "".concat(getPrefixCls(''), "-click-animating") : "".concat(getPrefixCls(''), "-click-animating-without-extra-node");
    }
  }, {
    key: "resetEffect",
    value: function resetEffect(node) {
      if (!node || node === this.extraNode || !(node instanceof Element)) {
        return;
      }
      var insertExtraNode = this.props.insertExtraNode;
      var attributeName = this.getAttributeName();
      node.setAttribute(attributeName, 'false'); // edge has bug on `removeAttribute` #14466
      if (styleForPseudo) {
        styleForPseudo.innerHTML = '';
      }
      if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
        node.removeChild(this.extraNode);
      }
      _Event["default"].removeStartEventListener(node, this.onTransitionStart);
      _Event["default"].removeEndEventListener(node, this.onTransitionEnd);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderWave);
    }
  }]);
}(React.Component);
Wave.contextType = _configProvider.ConfigContext;