import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import * as React from 'react';
import RcSwitch from 'rc-switch';
import classNames from 'classnames';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import { ConfigContext } from '../config-provider';
import SizeContext from '../config-provider/SizeContext';
import devWarning from '../_util/devWarning';
var Switch = /*#__PURE__*/React.forwardRef(function (_a, ref) {
  var customizePrefixCls = _a.prefixCls,
    customizeSize = _a.size,
    loading = _a.loading,
    _a$className = _a.className,
    className = _a$className === void 0 ? '' : _a$className,
    disabled = _a.disabled,
    props = __rest(_a, ["prefixCls", "size", "loading", "className", "disabled"]);
  devWarning('checked' in props || !('value' in props), 'Switch', '`value` is not a valid prop, do you mean `checked`?');
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var size = React.useContext(SizeContext);
  var prefixCls = getPrefixCls('switch', customizePrefixCls);
  var loadingIcon = /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-handle")
  }, loading && /*#__PURE__*/React.createElement(LoadingOutlined, {
    className: "".concat(prefixCls, "-loading-icon")
  }));
  var classes = classNames(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-small"), (customizeSize || size) === 'small'), "".concat(prefixCls, "-loading"), loading), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  return /*#__PURE__*/React.createElement(RcSwitch, _extends({}, props, {
    prefixCls: prefixCls,
    className: classes,
    disabled: disabled || loading,
    ref: ref,
    loadingIcon: loadingIcon
  }));
});
Switch.__ANT_SWITCH = true;
Switch.displayName = 'Switch';
export default Switch;