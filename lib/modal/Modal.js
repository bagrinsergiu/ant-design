"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroyFns = exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _rcDialog = _interopRequireDefault(require("rc-dialog"));
var _classnames = _interopRequireDefault(require("classnames"));
var _addEventListener = _interopRequireDefault(require("rc-util/lib/Dom/addEventListener"));
var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));
var _useModal = _interopRequireDefault(require("./useModal"));
var _locale = require("./locale");
var _button = _interopRequireDefault(require("../button"));
var _button2 = require("../button/button");
var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));
var _configProvider = require("../config-provider");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var mousePosition;
var destroyFns = exports.destroyFns = [];
// ref: https://github.com/ant-design/ant-design/issues/15795
var getClickPosition = function getClickPosition(e) {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  };
  // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开
  setTimeout(function () {
    mousePosition = null;
  }, 100);
};
// 只有点击事件支持从鼠标位置动画展开
if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
  (0, _addEventListener["default"])(document.documentElement, 'click', getClickPosition);
}
var Modal = function Modal(props) {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getContextPopupContainer = _React$useContext.getPopupContainer,
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var handleCancel = function handleCancel(e) {
    var onCancel = props.onCancel;
    if (onCancel) {
      onCancel(e);
    }
  };
  var handleOk = function handleOk(e) {
    var onOk = props.onOk;
    if (onOk) {
      onOk(e);
    }
  };
  var renderFooter = function renderFooter(locale) {
    var okText = props.okText,
      okType = props.okType,
      cancelText = props.cancelText,
      confirmLoading = props.confirmLoading;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_button["default"], (0, _extends2["default"])({
      onClick: handleCancel
    }, props.cancelButtonProps), cancelText || locale.cancelText), /*#__PURE__*/React.createElement(_button["default"], (0, _extends2["default"])({}, (0, _button2.convertLegacyProps)(okType), {
      loading: confirmLoading,
      onClick: handleOk
    }, props.okButtonProps), okText || locale.okText));
  };
  var customizePrefixCls = props.prefixCls,
    footer = props.footer,
    visible = props.visible,
    wrapClassName = props.wrapClassName,
    centered = props.centered,
    getContainer = props.getContainer,
    closeIcon = props.closeIcon,
    restProps = __rest(props, ["prefixCls", "footer", "visible", "wrapClassName", "centered", "getContainer", "closeIcon"]);
  var prefixCls = getPrefixCls('modal', customizePrefixCls);
  var defaultFooter = /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
    componentName: "Modal",
    defaultLocale: (0, _locale.getConfirmLocale)()
  }, renderFooter);
  var closeIconToRender = /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-close-x")
  }, closeIcon || /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
    className: "".concat(prefixCls, "-close-icon")
  }));
  var wrapClassNameExtended = (0, _classnames["default"])(wrapClassName, (0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-centered"), !!centered), "".concat(prefixCls, "-wrap-rtl"), direction === 'rtl'));
  return /*#__PURE__*/React.createElement(_rcDialog["default"], (0, _extends2["default"])({}, restProps, {
    getContainer: getContainer === undefined ? getContextPopupContainer : getContainer,
    prefixCls: prefixCls,
    wrapClassName: wrapClassNameExtended,
    footer: footer === undefined ? defaultFooter : footer,
    visible: visible,
    mousePosition: mousePosition,
    onClose: handleCancel,
    closeIcon: closeIconToRender
  }));
};
Modal.useModal = _useModal["default"];
Modal.defaultProps = {
  width: 520,
  transitionName: 'zoom',
  maskTransitionName: 'fade',
  confirmLoading: false,
  visible: false,
  okType: 'primary'
};
var _default = exports["default"] = Modal;