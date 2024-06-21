"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _isNativeReflectConstruct2 = _interopRequireDefault(require("@babel/runtime/helpers/isNativeReflectConstruct"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var React = _interopRequireWildcard(require("react"));
var _rcTextarea = _interopRequireDefault(require("rc-textarea"));
var _omit = _interopRequireDefault(require("omit.js"));
var _classnames = _interopRequireDefault(require("classnames"));
var _ClearableLabeledInput = _interopRequireDefault(require("./ClearableLabeledInput"));
var _configProvider = require("../config-provider");
var _Input = require("./Input");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
var TextArea = /*#__PURE__*/function (_React$Component) {
  function TextArea(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TextArea);
    _this = _callSuper(this, TextArea, [props]);
    _this.focus = function () {
      _this.resizableTextArea.textArea.focus();
    };
    _this.saveTextArea = function (textarea) {
      _this.resizableTextArea = textarea === null || textarea === void 0 ? void 0 : textarea.resizableTextArea;
    };
    _this.saveClearableInput = function (clearableInput) {
      _this.clearableInput = clearableInput;
    };
    _this.handleChange = function (e) {
      _this.setValue(e.target.value);
      (0, _Input.resolveOnChange)(_this.resizableTextArea.textArea, e, _this.props.onChange);
    };
    _this.handleReset = function (e) {
      _this.setValue('', function () {
        _this.focus();
      });
      (0, _Input.resolveOnChange)(_this.resizableTextArea.textArea, e, _this.props.onChange);
    };
    _this.renderTextArea = function (prefixCls, bordered) {
      return /*#__PURE__*/React.createElement(_rcTextarea["default"], (0, _extends2["default"])({}, (0, _omit["default"])(_this.props, ['allowClear', 'bordered', 'showCount']), {
        className: (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-borderless"), !bordered), _this.props.className),
        prefixCls: prefixCls,
        onChange: _this.handleChange,
        ref: _this.saveTextArea
      }));
    };
    _this.renderComponent = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;
      var _a;
      var value = (0, _Input.fixControlledValue)((_a = _this.state) === null || _a === void 0 ? void 0 : _a.value);
      var _this$props = _this.props,
        customizePrefixCls = _this$props.prefixCls,
        _this$props$bordered = _this$props.bordered,
        bordered = _this$props$bordered === void 0 ? true : _this$props$bordered,
        _this$props$showCount = _this$props.showCount,
        showCount = _this$props$showCount === void 0 ? false : _this$props$showCount,
        maxLength = _this$props.maxLength;
      var prefixCls = getPrefixCls('input', customizePrefixCls);
      var hasMaxLength = Number(maxLength) > 0;
      value = hasMaxLength ? value.slice(0, maxLength) : value;
      var valueLength = (0, _toConsumableArray2["default"])(value).length;
      var dataCount = "".concat(valueLength).concat(hasMaxLength ? " / ".concat(maxLength) : '');
      return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])("".concat(prefixCls, "-textarea"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-textarea-show-count"), showCount))
      }, showCount ? {
        'data-count': dataCount
      } : {}), /*#__PURE__*/React.createElement(_ClearableLabeledInput["default"], (0, _extends2["default"])({}, _this.props, {
        prefixCls: prefixCls,
        direction: direction,
        inputType: "text",
        value: value,
        element: _this.renderTextArea(prefixCls, bordered),
        handleReset: _this.handleReset,
        ref: _this.saveClearableInput,
        triggerFocus: _this.focus,
        bordered: bordered
      })));
    };
    var value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    _this.state = {
      value: value,
      // eslint-disable-next-line react/no-unused-state
      prevValue: props.value
    };
    return _this;
  }
  (0, _inherits2["default"])(TextArea, _React$Component);
  return (0, _createClass2["default"])(TextArea, [{
    key: "setValue",
    value: function setValue(value, callback) {
      if (this.props.value === undefined) {
        this.setState({
          value: value
        }, callback);
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      this.resizableTextArea.textArea.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderComponent);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, _ref2) {
      var prevValue = _ref2.prevValue;
      var newState = {
        prevValue: nextProps.value
      };
      if (nextProps.value !== undefined || prevValue !== nextProps.value) {
        newState.value = nextProps.value;
      }
      return newState;
    }
  }]);
}(React.Component);
var _default = exports["default"] = TextArea;