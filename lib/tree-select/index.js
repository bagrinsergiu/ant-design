"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TreeNode", {
  enumerable: true,
  get: function get() {
    return _rcTreeSelect.TreeNode;
  }
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
var _rcTreeSelect = _interopRequireWildcard(require("rc-tree-select"));
var _classnames = _interopRequireDefault(require("classnames"));
var _omit = _interopRequireDefault(require("omit.js"));
var _configProvider = require("../config-provider");
var _devWarning = _interopRequireDefault(require("../_util/devWarning"));
var _iconUtil = _interopRequireDefault(require("../select/utils/iconUtil"));
var _iconUtil2 = _interopRequireDefault(require("../tree/utils/iconUtil"));
var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
var TreeSelect = /*#__PURE__*/function (_React$Component) {
  function TreeSelect(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TreeSelect);
    _this = _callSuper(this, TreeSelect, [props]);
    _this.selectRef = /*#__PURE__*/React.createRef();
    _this.renderTreeSelect = function (_ref) {
      var getContextPopupContainer = _ref.getPopupContainer,
        getPrefixCls = _ref.getPrefixCls,
        renderEmpty = _ref.renderEmpty,
        direction = _ref.direction,
        virtual = _ref.virtual,
        dropdownMatchSelectWidth = _ref.dropdownMatchSelectWidth;
      var _this$props = _this.props,
        customizePrefixCls = _this$props.prefixCls,
        customizeSize = _this$props.size,
        className = _this$props.className,
        treeCheckable = _this$props.treeCheckable,
        multiple = _this$props.multiple,
        _this$props$listHeigh = _this$props.listHeight,
        listHeight = _this$props$listHeigh === void 0 ? 256 : _this$props$listHeigh,
        _this$props$listItemH = _this$props.listItemHeight,
        listItemHeight = _this$props$listItemH === void 0 ? 26 : _this$props$listItemH,
        notFoundContent = _this$props.notFoundContent,
        _switcherIcon = _this$props.switcherIcon,
        treeLine = _this$props.treeLine,
        getPopupContainer = _this$props.getPopupContainer,
        dropdownClassName = _this$props.dropdownClassName,
        bordered = _this$props.bordered,
        _this$props$treeIcon = _this$props.treeIcon,
        treeIcon = _this$props$treeIcon === void 0 ? false : _this$props$treeIcon;
      var prefixCls = getPrefixCls('select', customizePrefixCls);
      var treePrefixCls = getPrefixCls('select-tree', customizePrefixCls);
      var treeSelectPrefixCls = getPrefixCls('tree-select', customizePrefixCls);
      var mergedDropdownClassName = (0, _classnames["default"])(dropdownClassName, "".concat(treeSelectPrefixCls, "-dropdown"), (0, _defineProperty2["default"])({}, "".concat(treeSelectPrefixCls, "-dropdown-rtl"), direction === 'rtl'));
      var isMultiple = !!(treeCheckable || multiple);
      // ===================== Icons =====================
      var _getIcons = (0, _iconUtil["default"])((0, _extends2["default"])((0, _extends2["default"])({}, _this.props), {
          multiple: isMultiple,
          prefixCls: prefixCls
        })),
        suffixIcon = _getIcons.suffixIcon,
        itemIcon = _getIcons.itemIcon,
        removeIcon = _getIcons.removeIcon,
        clearIcon = _getIcons.clearIcon;
      // ===================== Empty =====================
      var mergedNotFound;
      if (notFoundContent !== undefined) {
        mergedNotFound = notFoundContent;
      } else {
        mergedNotFound = renderEmpty('Select');
      }
      // ==================== Render =====================
      var selectProps = (0, _omit["default"])(_this.props, ['prefixCls', 'suffixIcon', 'itemIcon', 'removeIcon', 'clearIcon', 'switcherIcon', 'size', 'bordered']);
      return /*#__PURE__*/React.createElement(_SizeContext["default"].Consumer, null, function (size) {
        var mergedSize = customizeSize || size;
        var mergedClassName = (0, _classnames["default"])(!customizePrefixCls && treeSelectPrefixCls, (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-lg"), mergedSize === 'large'), "".concat(prefixCls, "-sm"), mergedSize === 'small'), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-borderless"), !bordered), className);
        return /*#__PURE__*/React.createElement(_rcTreeSelect["default"], (0, _extends2["default"])({
          virtual: virtual,
          dropdownMatchSelectWidth: dropdownMatchSelectWidth
        }, selectProps, {
          ref: _this.selectRef,
          prefixCls: prefixCls,
          className: mergedClassName,
          listHeight: listHeight,
          listItemHeight: listItemHeight,
          treeCheckable: treeCheckable ? /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-tree-checkbox-inner")
          }) : treeCheckable,
          inputIcon: suffixIcon,
          menuItemSelectedIcon: itemIcon,
          removeIcon: removeIcon,
          clearIcon: clearIcon,
          switcherIcon: function switcherIcon(nodeProps) {
            return (0, _iconUtil2["default"])(treePrefixCls, _switcherIcon, treeLine, nodeProps);
          },
          showTreeIcon: treeIcon,
          notFoundContent: mergedNotFound,
          getPopupContainer: getPopupContainer || getContextPopupContainer,
          treeMotion: null,
          dropdownClassName: mergedDropdownClassName
        }));
      });
    };
    (0, _devWarning["default"])(props.multiple !== false || !props.treeCheckable, 'TreeSelect', '`multiple` will alway be `true` when `treeCheckable` is true');
    return _this;
  }
  (0, _inherits2["default"])(TreeSelect, _React$Component);
  return (0, _createClass2["default"])(TreeSelect, [{
    key: "focus",
    value: function focus() {
      if (this.selectRef.current) {
        this.selectRef.current.focus();
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      if (this.selectRef.current) {
        this.selectRef.current.blur();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderTreeSelect);
    }
  }]);
}(React.Component);
TreeSelect.TreeNode = _rcTreeSelect.TreeNode;
TreeSelect.SHOW_ALL = _rcTreeSelect.SHOW_ALL;
TreeSelect.SHOW_PARENT = _rcTreeSelect.SHOW_PARENT;
TreeSelect.SHOW_CHILD = _rcTreeSelect.SHOW_CHILD;
TreeSelect.defaultProps = {
  transitionName: 'slide-up',
  choiceTransitionName: '',
  bordered: true
};
var _default = exports["default"] = TreeSelect;