"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.hasPrefixSuffix = hasPrefixSuffix;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _isNativeReflectConstruct2 = _interopRequireDefault(require("@babel/runtime/helpers/isNativeReflectConstruct"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));
var _type = require("../_util/type");
var _Input = require("./Input");
var _reactNode = require("../_util/reactNode");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
var ClearableInputType = (0, _type.tuple)('text', 'input');
function hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}
var ClearableLabeledInput = /*#__PURE__*/function (_React$Component) {
  function ClearableLabeledInput() {
    var _this;
    (0, _classCallCheck2["default"])(this, ClearableLabeledInput);
    _this = _callSuper(this, ClearableLabeledInput, arguments);
    /** @private Do not use out of this class. We do not promise this is always keep. */
    _this.containerRef = /*#__PURE__*/React.createRef();
    _this.onInputMouseUp = function (e) {
      var _a;
      if ((_a = _this.containerRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
        var triggerFocus = _this.props.triggerFocus;
        triggerFocus();
      }
    };
    return _this;
  }
  (0, _inherits2["default"])(ClearableLabeledInput, _React$Component);
  return (0, _createClass2["default"])(ClearableLabeledInput, [{
    key: "renderClearIcon",
    value: function renderClearIcon(prefixCls) {
      var _this$props = this.props,
        allowClear = _this$props.allowClear,
        value = _this$props.value,
        disabled = _this$props.disabled,
        readOnly = _this$props.readOnly,
        inputType = _this$props.inputType,
        handleReset = _this$props.handleReset;
      if (!allowClear) {
        return null;
      }
      var needClear = !disabled && !readOnly && value;
      var className = inputType === ClearableInputType[0] ? "".concat(prefixCls, "-textarea-clear-icon") : "".concat(prefixCls, "-clear-icon");
      return /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], {
        onClick: handleReset,
        className: (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(className, "-hidden"), !needClear), className),
        role: "button"
      });
    }
  }, {
    key: "renderSuffix",
    value: function renderSuffix(prefixCls) {
      var _this$props2 = this.props,
        suffix = _this$props2.suffix,
        allowClear = _this$props2.allowClear;
      if (suffix || allowClear) {
        return /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-suffix")
        }, this.renderClearIcon(prefixCls), suffix);
      }
      return null;
    }
  }, {
    key: "renderLabeledIcon",
    value: function renderLabeledIcon(prefixCls, element) {
      var _this$props3 = this.props,
        focused = _this$props3.focused,
        value = _this$props3.value,
        prefix = _this$props3.prefix,
        className = _this$props3.className,
        size = _this$props3.size,
        suffix = _this$props3.suffix,
        disabled = _this$props3.disabled,
        allowClear = _this$props3.allowClear,
        direction = _this$props3.direction,
        style = _this$props3.style,
        readOnly = _this$props3.readOnly,
        bordered = _this$props3.bordered;
      var suffixNode = this.renderSuffix(prefixCls);
      if (!hasPrefixSuffix(this.props)) {
        return (0, _reactNode.cloneElement)(element, {
          value: value
        });
      }
      var prefixNode = prefix ? /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-prefix")
      }, prefix) : null;
      var affixWrapperCls = (0, _classnames["default"])("".concat(prefixCls, "-affix-wrapper"), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-affix-wrapper-focused"), focused), "".concat(prefixCls, "-affix-wrapper-disabled"), disabled), "".concat(prefixCls, "-affix-wrapper-sm"), size === 'small'), "".concat(prefixCls, "-affix-wrapper-lg"), size === 'large'), "".concat(prefixCls, "-affix-wrapper-input-with-clear-btn"), suffix && allowClear && value), "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), "".concat(prefixCls, "-affix-wrapper-readonly"), readOnly), "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), className);
      return /*#__PURE__*/React.createElement("span", {
        ref: this.containerRef,
        className: affixWrapperCls,
        style: style,
        onMouseUp: this.onInputMouseUp
      }, prefixNode, (0, _reactNode.cloneElement)(element, {
        style: null,
        value: value,
        className: (0, _Input.getInputClassName)(prefixCls, bordered, size, disabled)
      }), suffixNode);
    }
  }, {
    key: "renderInputWithLabel",
    value: function renderInputWithLabel(prefixCls, labeledElement) {
      var _this$props4 = this.props,
        addonBefore = _this$props4.addonBefore,
        addonAfter = _this$props4.addonAfter,
        style = _this$props4.style,
        size = _this$props4.size,
        className = _this$props4.className,
        direction = _this$props4.direction;
      // Not wrap when there is not addons
      if (!addonBefore && !addonAfter) {
        return labeledElement;
      }
      var wrapperClassName = "".concat(prefixCls, "-group");
      var addonClassName = "".concat(wrapperClassName, "-addon");
      var addonBeforeNode = addonBefore ? /*#__PURE__*/React.createElement("span", {
        className: addonClassName
      }, addonBefore) : null;
      var addonAfterNode = addonAfter ? /*#__PURE__*/React.createElement("span", {
        className: addonClassName
      }, addonAfter) : null;
      var mergedWrapperClassName = (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), (0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, wrapperClassName, addonBefore || addonAfter), "".concat(wrapperClassName, "-rtl"), direction === 'rtl'));
      var mergedGroupClassName = (0, _classnames["default"])("".concat(prefixCls, "-group-wrapper"), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-group-wrapper-sm"), size === 'small'), "".concat(prefixCls, "-group-wrapper-lg"), size === 'large'), "".concat(prefixCls, "-group-wrapper-rtl"), direction === 'rtl'), className);
      // Need another wrapper for changing display:table to display:inline-block
      // and put style prop in wrapper
      return /*#__PURE__*/React.createElement("span", {
        className: mergedGroupClassName,
        style: style
      }, /*#__PURE__*/React.createElement("span", {
        className: mergedWrapperClassName
      }, addonBeforeNode, (0, _reactNode.cloneElement)(labeledElement, {
        style: null
      }), addonAfterNode));
    }
  }, {
    key: "renderTextAreaWithClearIcon",
    value: function renderTextAreaWithClearIcon(prefixCls, element) {
      var _this$props5 = this.props,
        value = _this$props5.value,
        allowClear = _this$props5.allowClear,
        className = _this$props5.className,
        style = _this$props5.style,
        direction = _this$props5.direction,
        bordered = _this$props5.bordered;
      if (!allowClear) {
        return (0, _reactNode.cloneElement)(element, {
          value: value
        });
      }
      var affixWrapperCls = (0, _classnames["default"])("".concat(prefixCls, "-affix-wrapper"), "".concat(prefixCls, "-affix-wrapper-textarea-with-clear-btn"), (0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), className);
      return /*#__PURE__*/React.createElement("span", {
        className: affixWrapperCls,
        style: style
      }, (0, _reactNode.cloneElement)(element, {
        style: null,
        value: value
      }), this.renderClearIcon(prefixCls));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
        prefixCls = _this$props6.prefixCls,
        inputType = _this$props6.inputType,
        element = _this$props6.element;
      if (inputType === ClearableInputType[0]) {
        return this.renderTextAreaWithClearIcon(prefixCls, element);
      }
      return this.renderInputWithLabel(prefixCls, this.renderLabeledIcon(prefixCls, element));
    }
  }]);
}(React.Component);
var _default = exports["default"] = ClearableLabeledInput;