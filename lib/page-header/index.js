"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _ArrowLeftOutlined = _interopRequireDefault(require("@ant-design/icons/ArrowLeftOutlined"));
var _ArrowRightOutlined = _interopRequireDefault(require("@ant-design/icons/ArrowRightOutlined"));
var _rcResizeObserver = _interopRequireDefault(require("rc-resize-observer"));
var _configProvider = require("../config-provider");
var _breadcrumb = _interopRequireDefault(require("../breadcrumb"));
var _avatar = _interopRequireDefault(require("../avatar"));
var _transButton = _interopRequireDefault(require("../_util/transButton"));
var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var renderBack = function renderBack(prefixCls, backIcon, onBack) {
  if (!backIcon || !onBack) {
    return null;
  }
  return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
    componentName: "PageHeader"
  }, function (_ref) {
    var back = _ref.back;
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-back")
    }, /*#__PURE__*/React.createElement(_transButton["default"], {
      onClick: function onClick(e) {
        if (onBack) {
          onBack(e);
        }
      },
      className: "".concat(prefixCls, "-back-button"),
      "aria-label": back
    }, backIcon));
  });
};
var renderBreadcrumb = function renderBreadcrumb(breadcrumb) {
  return /*#__PURE__*/React.createElement(_breadcrumb["default"], breadcrumb);
};
var getBackIcon = function getBackIcon(props) {
  var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ltr';
  if (props.backIcon !== undefined) {
    return props.backIcon;
  }
  return direction === 'rtl' ? /*#__PURE__*/React.createElement(_ArrowRightOutlined["default"], null) : /*#__PURE__*/React.createElement(_ArrowLeftOutlined["default"], null);
};
var renderTitle = function renderTitle(prefixCls, props) {
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ltr';
  var title = props.title,
    avatar = props.avatar,
    subTitle = props.subTitle,
    tags = props.tags,
    extra = props.extra,
    onBack = props.onBack;
  var headingPrefixCls = "".concat(prefixCls, "-heading");
  if (title || subTitle || tags || extra) {
    var backIcon = getBackIcon(props, direction);
    var backIconDom = renderBack(prefixCls, backIcon, onBack);
    return /*#__PURE__*/React.createElement("div", {
      className: headingPrefixCls
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(headingPrefixCls, "-left")
    }, backIconDom, avatar && /*#__PURE__*/React.createElement(_avatar["default"], avatar), title && /*#__PURE__*/React.createElement("span", {
      className: "".concat(headingPrefixCls, "-title"),
      title: typeof title === 'string' ? title : undefined
    }, title), subTitle && /*#__PURE__*/React.createElement("span", {
      className: "".concat(headingPrefixCls, "-sub-title"),
      title: typeof subTitle === 'string' ? subTitle : undefined
    }, subTitle), tags && /*#__PURE__*/React.createElement("span", {
      className: "".concat(headingPrefixCls, "-tags")
    }, tags)), extra && /*#__PURE__*/React.createElement("span", {
      className: "".concat(headingPrefixCls, "-extra")
    }, extra));
  }
  return null;
};
var renderFooter = function renderFooter(prefixCls, footer) {
  if (footer) {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, footer);
  }
  return null;
};
var renderChildren = function renderChildren(prefixCls, children) {
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-content")
  }, children);
};
var PageHeader = function PageHeader(props) {
  var _React$useState = React.useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    compact = _React$useState2[0],
    updateCompact = _React$useState2[1];
  var onResize = function onResize(_ref2) {
    var width = _ref2.width;
    updateCompact(width < 768);
  };
  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref3) {
    var getPrefixCls = _ref3.getPrefixCls,
      pageHeader = _ref3.pageHeader,
      direction = _ref3.direction;
    var customizePrefixCls = props.prefixCls,
      style = props.style,
      footer = props.footer,
      children = props.children,
      breadcrumb = props.breadcrumb,
      customizeClassName = props.className;
    var ghost = true;
    // Use `ghost` from `props` or from `ConfigProvider` instead.
    if ('ghost' in props) {
      ghost = props.ghost;
    } else if (pageHeader && 'ghost' in pageHeader) {
      ghost = pageHeader.ghost;
    }
    var prefixCls = getPrefixCls('page-header', customizePrefixCls);
    var breadcrumbDom = breadcrumb && breadcrumb.routes ? renderBreadcrumb(breadcrumb) : null;
    var className = (0, _classnames["default"])(prefixCls, customizeClassName, (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({
      'has-breadcrumb': breadcrumbDom,
      'has-footer': footer
    }, "".concat(prefixCls, "-ghost"), ghost), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-compact"), compact));
    return /*#__PURE__*/React.createElement(_rcResizeObserver["default"], {
      onResize: onResize
    }, /*#__PURE__*/React.createElement("div", {
      className: className,
      style: style
    }, breadcrumbDom, renderTitle(prefixCls, props, direction), children && renderChildren(prefixCls, children), renderFooter(prefixCls, footer)));
  });
};
var _default = exports["default"] = PageHeader;