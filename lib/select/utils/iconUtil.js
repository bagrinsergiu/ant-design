"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getIcons;
var React = _interopRequireWildcard(require("react"));
var _DownOutlined = _interopRequireDefault(require("@ant-design/icons/DownOutlined"));
var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));
var _CheckOutlined = _interopRequireDefault(require("@ant-design/icons/CheckOutlined"));
var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));
var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));
var _SearchOutlined = _interopRequireDefault(require("@ant-design/icons/SearchOutlined"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function getIcons(_ref) {
  var suffixIcon = _ref.suffixIcon,
    clearIcon = _ref.clearIcon,
    menuItemSelectedIcon = _ref.menuItemSelectedIcon,
    removeIcon = _ref.removeIcon,
    loading = _ref.loading,
    multiple = _ref.multiple,
    prefixCls = _ref.prefixCls;
  // Clear Icon
  var mergedClearIcon = clearIcon;
  if (!clearIcon) {
    mergedClearIcon = /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null);
  }
  // Arrow item icon
  var mergedSuffixIcon = null;
  if (suffixIcon !== undefined) {
    mergedSuffixIcon = suffixIcon;
  } else if (loading) {
    mergedSuffixIcon = /*#__PURE__*/React.createElement(_LoadingOutlined["default"], {
      spin: true
    });
  } else {
    var iconCls = "".concat(prefixCls, "-suffix");
    mergedSuffixIcon = function mergedSuffixIcon(_ref2) {
      var open = _ref2.open,
        showSearch = _ref2.showSearch;
      if (open && showSearch) {
        return /*#__PURE__*/React.createElement(_SearchOutlined["default"], {
          className: iconCls
        });
      }
      return /*#__PURE__*/React.createElement(_DownOutlined["default"], {
        className: iconCls
      });
    };
  }
  // Checked item icon
  var mergedItemIcon = null;
  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = /*#__PURE__*/React.createElement(_CheckOutlined["default"], null);
  } else {
    mergedItemIcon = null;
  }
  var mergedRemoveIcon = null;
  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = /*#__PURE__*/React.createElement(_CloseOutlined["default"], null);
  }
  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}