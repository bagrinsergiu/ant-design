"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _isNativeReflectConstruct2 = _interopRequireDefault(require("@babel/runtime/helpers/isNativeReflectConstruct"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var React = _interopRequireWildcard(require("react"));
var _omit = _interopRequireDefault(require("omit.js"));
var _classnames = _interopRequireDefault(require("classnames"));
var _rcSelect = _interopRequireWildcard(require("rc-select"));
var _configProvider = require("../config-provider");
var _iconUtil = _interopRequireDefault(require("./utils/iconUtil"));
var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); } // TODO: 4.0 - codemod should help to change `filterOption` to support node props.
// We still use class here since `forwardRef` not support generic in typescript
var Select = /*#__PURE__*/function (_React$Component) {
  function Select() {
    var _this;
    (0, _classCallCheck2["default"])(this, Select);
    _this = _callSuper(this, Select, arguments);
    _this.selectRef = /*#__PURE__*/React.createRef();
    _this.focus = function () {
      if (_this.selectRef.current) {
        _this.selectRef.current.focus();
      }
    };
    _this.blur = function () {
      if (_this.selectRef.current) {
        _this.selectRef.current.blur();
      }
    };
    _this.getMode = function () {
      var mode = _this.props.mode;
      if (mode === 'combobox') {
        return undefined;
      }
      if (mode === Select.SECRET_COMBOBOX_MODE_DO_NOT_USE) {
        return 'combobox';
      }
      return mode;
    };
    _this.renderSelect = function (_ref) {
      var getContextPopupContainer = _ref.getPopupContainer,
        getPrefixCls = _ref.getPrefixCls,
        renderEmpty = _ref.renderEmpty,
        direction = _ref.direction,
        virtual = _ref.virtual,
        dropdownMatchSelectWidth = _ref.dropdownMatchSelectWidth;
      var _this$props = _this.props,
        customizePrefixCls = _this$props.prefixCls,
        notFoundContent = _this$props.notFoundContent,
        className = _this$props.className,
        customizeSize = _this$props.size,
        _this$props$listHeigh = _this$props.listHeight,
        listHeight = _this$props$listHeigh === void 0 ? 256 : _this$props$listHeigh,
        _this$props$listItemH = _this$props.listItemHeight,
        listItemHeight = _this$props$listItemH === void 0 ? 24 : _this$props$listItemH,
        getPopupContainer = _this$props.getPopupContainer,
        dropdownClassName = _this$props.dropdownClassName,
        bordered = _this$props.bordered;
      var prefixCls = getPrefixCls('select', customizePrefixCls);
      var mode = _this.getMode();
      var isMultiple = mode === 'multiple' || mode === 'tags';
      // ===================== Empty =====================
      var mergedNotFound;
      if (notFoundContent !== undefined) {
        mergedNotFound = notFoundContent;
      } else if (mode === 'combobox') {
        mergedNotFound = null;
      } else {
        mergedNotFound = renderEmpty('Select');
      }
      // ===================== Icons =====================
      var _getIcons = (0, _iconUtil["default"])((0, _extends2["default"])((0, _extends2["default"])({}, _this.props), {
          multiple: isMultiple,
          prefixCls: prefixCls
        })),
        suffixIcon = _getIcons.suffixIcon,
        itemIcon = _getIcons.itemIcon,
        removeIcon = _getIcons.removeIcon,
        clearIcon = _getIcons.clearIcon;
      var selectProps = (0, _omit["default"])(_this.props, ['prefixCls', 'suffixIcon', 'itemIcon', 'removeIcon', 'clearIcon', 'size', 'bordered']);
      var rcSelectRtlDropDownClassName = (0, _classnames["default"])(dropdownClassName, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-dropdown-").concat(direction), direction === 'rtl'));
      return /*#__PURE__*/React.createElement(_SizeContext["default"].Consumer, null, function (size) {
        var mergedSize = customizeSize || size;
        var mergedClassName = (0, _classnames["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-lg"), mergedSize === 'large'), "".concat(prefixCls, "-sm"), mergedSize === 'small'), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-borderless"), !bordered), className);
        return /*#__PURE__*/React.createElement(_rcSelect["default"], (0, _extends2["default"])({
          ref: _this.selectRef,
          virtual: virtual,
          dropdownMatchSelectWidth: dropdownMatchSelectWidth
        }, selectProps, {
          listHeight: listHeight,
          listItemHeight: listItemHeight,
          mode: mode,
          prefixCls: prefixCls,
          direction: direction,
          inputIcon: suffixIcon,
          menuItemSelectedIcon: itemIcon,
          removeIcon: removeIcon,
          clearIcon: clearIcon,
          notFoundContent: mergedNotFound,
          className: mergedClassName,
          getPopupContainer: getPopupContainer || getContextPopupContainer,
          dropdownClassName: rcSelectRtlDropDownClassName
        }));
      });
    };
    return _this;
  }
  (0, _inherits2["default"])(Select, _React$Component);
  return (0, _createClass2["default"])(Select, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderSelect);
    }
  }]);
}(React.Component);
Select.Option = _rcSelect.Option;
Select.OptGroup = _rcSelect.OptGroup;
Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
Select.defaultProps = {
  transitionName: 'slide-up',
  choiceTransitionName: '',
  bordered: true
};
var _default = exports["default"] = Select;