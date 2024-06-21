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
var _classnames = _interopRequireDefault(require("classnames"));
var _rcCheckbox = _interopRequireDefault(require("rc-checkbox"));
var _Group = require("./Group");
var _configProvider = require("../config-provider");
var _devWarning = _interopRequireDefault(require("../_util/devWarning"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var Checkbox = /*#__PURE__*/function (_React$PureComponent) {
  function Checkbox() {
    var _this;
    (0, _classCallCheck2["default"])(this, Checkbox);
    _this = _callSuper(this, Checkbox, arguments);
    _this.saveCheckbox = function (node) {
      _this.rcCheckbox = node;
    };
    _this.renderCheckbox = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;
      var _this2 = _this,
        props = _this2.props,
        context = _this2.context;
      var customizePrefixCls = props.prefixCls,
        className = props.className,
        children = props.children,
        indeterminate = props.indeterminate,
        style = props.style,
        onMouseEnter = props.onMouseEnter,
        onMouseLeave = props.onMouseLeave,
        restProps = __rest(props, ["prefixCls", "className", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave"]);
      var checkboxGroup = context;
      var prefixCls = getPrefixCls('checkbox', customizePrefixCls);
      var checkboxProps = (0, _extends2["default"])({}, restProps);
      if (checkboxGroup) {
        checkboxProps.onChange = function () {
          if (restProps.onChange) {
            restProps.onChange.apply(restProps, arguments);
          }
          checkboxGroup.toggleOption({
            label: children,
            value: props.value
          });
        };
        checkboxProps.name = checkboxGroup.name;
        checkboxProps.checked = checkboxGroup.value.indexOf(props.value) !== -1;
        checkboxProps.disabled = props.disabled || checkboxGroup.disabled;
      }
      var classString = (0, _classnames["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-wrapper"), true), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-wrapper-checked"), checkboxProps.checked), "".concat(prefixCls, "-wrapper-disabled"), checkboxProps.disabled), className);
      var checkboxClass = (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-indeterminate"), indeterminate));
      return (
        /*#__PURE__*/
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        React.createElement("label", {
          className: classString,
          style: style,
          onMouseEnter: onMouseEnter,
          onMouseLeave: onMouseLeave
        }, /*#__PURE__*/React.createElement(_rcCheckbox["default"], (0, _extends2["default"])({}, checkboxProps, {
          prefixCls: prefixCls,
          className: checkboxClass,
          ref: _this.saveCheckbox
        })), children !== undefined && /*#__PURE__*/React.createElement("span", null, children))
      );
    };
    return _this;
  }
  (0, _inherits2["default"])(Checkbox, _React$PureComponent);
  return (0, _createClass2["default"])(Checkbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _a;
      var value = this.props.value;
      (_a = this.context) === null || _a === void 0 ? void 0 : _a.registerValue(value);
      (0, _devWarning["default"])('checked' in this.props || this.context || !('value' in this.props), 'Checkbox', '`value` is not a valid prop, do you mean `checked`?');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevValue = _ref2.value;
      var _a, _b;
      var value = this.props.value;
      if (value !== prevValue) {
        (_a = this.context) === null || _a === void 0 ? void 0 : _a.cancelValue(prevValue);
        (_b = this.context) === null || _b === void 0 ? void 0 : _b.registerValue(value);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _a;
      var value = this.props.value;
      (_a = this.context) === null || _a === void 0 ? void 0 : _a.cancelValue(value);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.rcCheckbox.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.rcCheckbox.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderCheckbox);
    }
  }]);
}(React.PureComponent);
Checkbox.__ANT_CHECKBOX = true;
Checkbox.defaultProps = {
  indeterminate: false
};
Checkbox.contextType = _Group.GroupContext;
var _default = exports["default"] = Checkbox;