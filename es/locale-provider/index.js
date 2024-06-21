import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _isNativeReflectConstruct from "@babel/runtime/helpers/isNativeReflectConstruct";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
import * as React from 'react';
import devWarning from '../_util/devWarning';
import { changeConfirmLocale } from '../modal/locale';
import LocaleContext from './context';
export var ANT_MARK = 'internalMark';
var LocaleProvider = /*#__PURE__*/function (_React$Component) {
  function LocaleProvider(props) {
    var _this;
    _classCallCheck(this, LocaleProvider);
    _this = _callSuper(this, LocaleProvider, [props]);
    changeConfirmLocale(props.locale && props.locale.Modal);
    devWarning(props._ANT_MARK__ === ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale');
    return _this;
  }
  _inherits(LocaleProvider, _React$Component);
  return _createClass(LocaleProvider, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var locale = this.props.locale;
      if (prevProps.locale !== locale) {
        changeConfirmLocale(locale && locale.Modal);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      changeConfirmLocale();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        locale = _this$props.locale,
        children = _this$props.children;
      return /*#__PURE__*/React.createElement(LocaleContext.Provider, {
        value: _extends(_extends({}, locale), {
          exist: true
        })
      }, children);
    }
  }]);
}(React.Component);
export { LocaleProvider as default };
LocaleProvider.defaultProps = {
  locale: {}
};