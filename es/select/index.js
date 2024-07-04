import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _isNativeReflectConstruct from "@babel/runtime/helpers/isNativeReflectConstruct";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
// TODO: 4.0 - codemod should help to change `filterOption` to support node props.
import * as React from 'react';
import omit from 'omit.js';
import classNames from 'classnames';
import RcSelect, { Option, OptGroup } from 'rc-select';
import { ConfigConsumer } from '../config-provider';
import getIcons from './utils/iconUtil';
import SizeContext from '../config-provider/SizeContext';
// We still use class here since `forwardRef` not support generic in typescript
var Select = /*#__PURE__*/function (_React$Component) {
  function Select() {
    var _this;
    _classCallCheck(this, Select);
    _this = _callSuper(this, Select, arguments);
    // @ts-ignore
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
      var _getIcons = getIcons(_extends(_extends({}, _this.props), {
          multiple: isMultiple,
          prefixCls: prefixCls
        })),
        suffixIcon = _getIcons.suffixIcon,
        itemIcon = _getIcons.itemIcon,
        removeIcon = _getIcons.removeIcon,
        clearIcon = _getIcons.clearIcon;
      var selectProps = omit(_this.props, ['prefixCls', 'suffixIcon', 'itemIcon', 'removeIcon', 'clearIcon', 'size', 'bordered']);
      var rcSelectRtlDropDownClassName = classNames(dropdownClassName, _defineProperty({}, "".concat(prefixCls, "-dropdown-").concat(direction), direction === 'rtl'));
      return /*#__PURE__*/React.createElement(SizeContext.Consumer, null, function (size) {
        var mergedSize = customizeSize || size;
        var mergedClassName = classNames(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-lg"), mergedSize === 'large'), "".concat(prefixCls, "-sm"), mergedSize === 'small'), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-borderless"), !bordered), className);
        return /*#__PURE__*/React.createElement(RcSelect, _extends({
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
  _inherits(Select, _React$Component);
  return _createClass(Select, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderSelect);
    }
  }]);
}(React.Component);
Select.Option = Option;
Select.OptGroup = OptGroup;
Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
Select.defaultProps = {
  transitionName: 'slide-up',
  choiceTransitionName: '',
  bordered: true
};
export default Select;