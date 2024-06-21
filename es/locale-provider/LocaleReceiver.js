import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _isNativeReflectConstruct from "@babel/runtime/helpers/isNativeReflectConstruct";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
import * as React from 'react';
import defaultLocaleData from './default';
import LocaleContext from './context';
var LocaleReceiver = /*#__PURE__*/function (_React$Component) {
  function LocaleReceiver() {
    _classCallCheck(this, LocaleReceiver);
    return _callSuper(this, LocaleReceiver, arguments);
  }
  _inherits(LocaleReceiver, _React$Component);
  return _createClass(LocaleReceiver, [{
    key: "getLocale",
    value: function getLocale() {
      var _this$props = this.props,
        componentName = _this$props.componentName,
        defaultLocale = _this$props.defaultLocale;
      var locale = defaultLocale || defaultLocaleData[componentName || 'global'];
      var antLocale = this.context;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return _extends(_extends({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
    }
  }, {
    key: "getLocaleCode",
    value: function getLocaleCode() {
      var antLocale = this.context;
      var localeCode = antLocale && antLocale.locale;
      // Had use LocaleProvide but didn't set locale
      if (antLocale && antLocale.exist && !localeCode) {
        return defaultLocaleData.locale;
      }
      return localeCode;
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.getLocale(), this.getLocaleCode(), this.context);
    }
  }]);
}(React.Component);
export { LocaleReceiver as default };
LocaleReceiver.defaultProps = {
  componentName: 'global'
};
LocaleReceiver.contextType = LocaleContext;
export function useLocaleReceiver(componentName, defaultLocale) {
  var antLocale = React.useContext(LocaleContext);
  var componentLocale = React.useMemo(function () {
    var locale = defaultLocale || defaultLocaleData[componentName || 'global'];
    var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
    return _extends(_extends({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, antLocale]);
  return [componentLocale];
}