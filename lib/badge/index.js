"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _rcAnimate = _interopRequireDefault(require("rc-animate"));
var _classnames = _interopRequireDefault(require("classnames"));
var _ScrollNumber = _interopRequireDefault(require("./ScrollNumber"));
var _Ribbon = _interopRequireDefault(require("./Ribbon"));
var _configProvider = require("../config-provider");
var _reactNode = require("../_util/reactNode");
var _utils = require("./utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var Badge = function Badge(_a) {
  var customizePrefixCls = _a.prefixCls,
    customizeScrollNumberPrefixCls = _a.scrollNumberPrefixCls,
    children = _a.children,
    status = _a.status,
    text = _a.text,
    color = _a.color,
    _a$count = _a.count,
    count = _a$count === void 0 ? null : _a$count,
    _a$overflowCount = _a.overflowCount,
    overflowCount = _a$overflowCount === void 0 ? 99 : _a$overflowCount,
    _a$dot = _a.dot,
    dot = _a$dot === void 0 ? false : _a$dot,
    _a$size = _a.size,
    size = _a$size === void 0 ? 'default' : _a$size,
    title = _a.title,
    offset = _a.offset,
    style = _a.style,
    className = _a.className,
    _a$showZero = _a.showZero,
    showZero = _a$showZero === void 0 ? false : _a$showZero,
    restProps = __rest(_a, ["prefixCls", "scrollNumberPrefixCls", "children", "status", "text", "color", "count", "overflowCount", "dot", "size", "title", "offset", "style", "className", "showZero"]);
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('badge', customizePrefixCls);
  var getNumberedDisplayCount = function getNumberedDisplayCount() {
    var displayCount = count > overflowCount ? "".concat(overflowCount, "+") : count;
    return displayCount;
  };
  var hasStatus = function hasStatus() {
    return status !== null && status !== undefined || color !== null && color !== undefined;
  };
  var isZero = function isZero() {
    var numberedDisplayCount = getNumberedDisplayCount();
    return numberedDisplayCount === '0' || numberedDisplayCount === 0;
  };
  var isDot = function isDot() {
    return dot && !isZero() || hasStatus();
  };
  var getDisplayCount = function getDisplayCount() {
    // dot mode don't need count
    if (isDot()) {
      return '';
    }
    return getNumberedDisplayCount();
  };
  var getScrollNumberTitle = function getScrollNumberTitle() {
    if (title) {
      return title;
    }
    return typeof count === 'string' || typeof count === 'number' ? count : undefined;
  };
  var getStyleWithOffset = function getStyleWithOffset() {
    if (direction === 'rtl') {
      return offset ? (0, _extends2["default"])({
        left: parseInt(offset[0], 10),
        marginTop: offset[1]
      }, style) : style;
    }
    return offset ? (0, _extends2["default"])({
      right: -parseInt(offset[0], 10),
      marginTop: offset[1]
    }, style) : style;
  };
  var isHidden = function isHidden() {
    var displayCount = getDisplayCount();
    var isEmpty = displayCount === null || displayCount === undefined || displayCount === '';
    return (isEmpty || isZero() && !showZero) && !isDot();
  };
  var renderStatusText = function renderStatusText() {
    var hidden = isHidden();
    return hidden || !text ? null : /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-status-text")
    }, text);
  };
  var renderDisplayComponent = function renderDisplayComponent() {
    var customNode = count;
    if (!customNode || (0, _typeof2["default"])(customNode) !== 'object') {
      return undefined;
    }
    return (0, _reactNode.cloneElement)(customNode, {
      style: (0, _extends2["default"])((0, _extends2["default"])({}, getStyleWithOffset()), customNode.props && customNode.props.style)
    });
  };
  var renderBadgeNumber = function renderBadgeNumber() {
    var scrollNumberPrefixCls = getPrefixCls('scroll-number', customizeScrollNumberPrefixCls);
    var displayCount = getDisplayCount();
    var bDot = isDot();
    var hidden = isHidden();
    var scrollNumberCls = (0, _classnames["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-dot"), bDot), "".concat(prefixCls, "-count"), !bDot), "".concat(prefixCls, "-count-sm"), size === 'small'), "".concat(prefixCls, "-multiple-words"), !bDot && count && count.toString && count.toString().length > 1), "".concat(prefixCls, "-status-").concat(status), !!status), "".concat(prefixCls, "-status-").concat(color), (0, _utils.isPresetColor)(color)));
    var statusStyle = getStyleWithOffset();
    if (color && !(0, _utils.isPresetColor)(color)) {
      statusStyle = statusStyle || {};
      statusStyle.background = color;
    }
    return hidden ? null : /*#__PURE__*/React.createElement(_ScrollNumber["default"], {
      prefixCls: scrollNumberPrefixCls,
      "data-show": !hidden,
      className: scrollNumberCls,
      count: displayCount,
      displayComponent: renderDisplayComponent() // <Badge status="success" count={<Icon type="xxx" />}></Badge>
      ,
      title: getScrollNumberTitle(),
      style: statusStyle,
      key: "scrollNumber"
    });
  };
  var statusCls = (0, _classnames["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-status-dot"), hasStatus()), "".concat(prefixCls, "-status-").concat(status), !!status), "".concat(prefixCls, "-status-").concat(color), (0, _utils.isPresetColor)(color)));
  var statusStyle = {};
  if (color && !(0, _utils.isPresetColor)(color)) {
    statusStyle.background = color;
  }
  var badgeClassName = (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-status"), hasStatus()), "".concat(prefixCls, "-not-a-wrapper"), !children), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  // <Badge status="success" />
  if (!children && hasStatus()) {
    var styleWithOffset = getStyleWithOffset();
    var statusTextColor = styleWithOffset && styleWithOffset.color;
    return /*#__PURE__*/React.createElement("span", (0, _extends2["default"])({}, restProps, {
      className: badgeClassName,
      style: styleWithOffset
    }), /*#__PURE__*/React.createElement("span", {
      className: statusCls,
      style: statusStyle
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: statusTextColor
      },
      className: "".concat(prefixCls, "-status-text")
    }, text));
  }
  return /*#__PURE__*/React.createElement("span", (0, _extends2["default"])({}, restProps, {
    className: badgeClassName
  }), children, /*#__PURE__*/React.createElement(_rcAnimate["default"], {
    component: "",
    showProp: "data-show",
    transitionName: children ? "".concat(prefixCls, "-zoom") : '',
    transitionAppear: true
  }, renderBadgeNumber()), renderStatusText());
};
Badge.Ribbon = _Ribbon["default"];
var _default = exports["default"] = Badge;