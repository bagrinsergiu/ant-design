import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as React from 'react';
import classNames from 'classnames';
import { ConfigConsumer } from '../config-provider';
var Group = function Group(props) {
  return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls,
      direction = _ref.direction;
    var customizePrefixCls = props.prefixCls,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className;
    var prefixCls = getPrefixCls('input-group', customizePrefixCls);
    var cls = classNames(prefixCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-lg"), props.size === 'large'), "".concat(prefixCls, "-sm"), props.size === 'small'), "".concat(prefixCls, "-compact"), props.compact), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
    return /*#__PURE__*/React.createElement("span", {
      className: cls,
      style: props.style,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      onFocus: props.onFocus,
      onBlur: props.onBlur
    }, props.children);
  });
};
export default Group;