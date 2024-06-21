import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as React from 'react';
import classNames from 'classnames';
var Element = function Element(props) {
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    size = props.size,
    shape = props.shape;
  var sizeCls = classNames(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-lg"), size === 'large'), "".concat(prefixCls, "-sm"), size === 'small'));
  var shapeCls = classNames(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-circle"), shape === 'circle'), "".concat(prefixCls, "-square"), shape === 'square'), "".concat(prefixCls, "-round"), shape === 'round'));
  var sizeStyle = typeof size === 'number' ? {
    width: size,
    height: size,
    lineHeight: "".concat(size, "px")
  } : {};
  return /*#__PURE__*/React.createElement("span", {
    className: classNames(prefixCls, sizeCls, shapeCls, className),
    style: _extends(_extends({}, sizeStyle), style)
  });
};
export default Element;