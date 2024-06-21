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
var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));
var _EnterOutlined = _interopRequireDefault(require("@ant-design/icons/EnterOutlined"));
var _TextArea = _interopRequireDefault(require("../input/TextArea"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
var Editable = /*#__PURE__*/function (_React$Component) {
  function Editable() {
    var _this;
    (0, _classCallCheck2["default"])(this, Editable);
    _this = _callSuper(this, Editable, arguments);
    _this.inComposition = false;
    _this.state = {
      current: ''
    };
    _this.onChange = function (_ref) {
      var value = _ref.target.value;
      _this.setState({
        current: value.replace(/[\n\r]/g, '')
      });
    };
    _this.onCompositionStart = function () {
      _this.inComposition = true;
    };
    _this.onCompositionEnd = function () {
      _this.inComposition = false;
    };
    _this.onKeyDown = function (_ref2) {
      var keyCode = _ref2.keyCode;
      // We don't record keyCode when IME is using
      if (_this.inComposition) return;
      _this.lastKeyCode = keyCode;
    };
    _this.onKeyUp = function (_ref3) {
      var keyCode = _ref3.keyCode,
        ctrlKey = _ref3.ctrlKey,
        altKey = _ref3.altKey,
        metaKey = _ref3.metaKey,
        shiftKey = _ref3.shiftKey;
      var onCancel = _this.props.onCancel;
      // Check if it's a real key
      if (_this.lastKeyCode === keyCode && !_this.inComposition && !ctrlKey && !altKey && !metaKey && !shiftKey) {
        if (keyCode === _KeyCode["default"].ENTER) {
          _this.confirmChange();
        } else if (keyCode === _KeyCode["default"].ESC) {
          onCancel();
        }
      }
    };
    _this.onBlur = function () {
      _this.confirmChange();
    };
    _this.confirmChange = function () {
      var current = _this.state.current;
      var onSave = _this.props.onSave;
      onSave(current.trim());
    };
    _this.setTextarea = function (textarea) {
      _this.textarea = textarea;
    };
    return _this;
  }
  (0, _inherits2["default"])(Editable, _React$Component);
  return (0, _createClass2["default"])(Editable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.textarea && this.textarea.resizableTextArea) {
        var textArea = this.textarea.resizableTextArea.textArea;
        textArea.focus();
        var length = textArea.value.length;
        textArea.setSelectionRange(length, length);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var current = this.state.current;
      var _this$props = this.props,
        prefixCls = _this$props.prefixCls,
        ariaLabel = _this$props['aria-label'],
        className = _this$props.className,
        style = _this$props.style,
        direction = _this$props.direction,
        maxLength = _this$props.maxLength,
        autoSize = _this$props.autoSize;
      var textAreaClassName = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-edit-content"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
      return /*#__PURE__*/React.createElement("div", {
        className: textAreaClassName,
        style: style
      }, /*#__PURE__*/React.createElement(_TextArea["default"], {
        ref: this.setTextarea,
        maxLength: maxLength,
        value: current,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        onCompositionStart: this.onCompositionStart,
        onCompositionEnd: this.onCompositionEnd,
        onBlur: this.onBlur,
        "aria-label": ariaLabel,
        autoSize: autoSize === undefined || autoSize
      }), /*#__PURE__*/React.createElement(_EnterOutlined["default"], {
        className: "".concat(prefixCls, "-edit-content-confirm")
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var prevValue = prevState.prevValue;
      var value = nextProps.value;
      var newState = {
        prevValue: value
      };
      if (prevValue !== value) {
        newState.current = value;
      }
      return newState;
    }
  }]);
}(React.Component);
var _default = exports["default"] = Editable;