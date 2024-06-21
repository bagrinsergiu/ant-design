"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useCacheErrors;
var React = _interopRequireWildcard(require("react"));
var _useForceUpdate = _interopRequireDefault(require("../../_util/hooks/useForceUpdate"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * Always debounce error to avoid [error -> null -> error] blink
 */
function useCacheErrors(errors, changeTrigger, directly) {
  var cacheRef = React.useRef({
    errors: errors,
    visible: !!errors.length
  });
  var forceUpdate = (0, _useForceUpdate["default"])();
  var update = function update() {
    var prevVisible = cacheRef.current.visible;
    var newVisible = !!errors.length;
    var prevErrors = cacheRef.current.errors;
    cacheRef.current.errors = errors;
    cacheRef.current.visible = newVisible;
    if (prevVisible !== newVisible) {
      changeTrigger(newVisible);
    } else if (prevErrors.length !== errors.length || prevErrors.some(function (prevErr, index) {
      return prevErr !== errors[index];
    })) {
      forceUpdate();
    }
  };
  React.useEffect(function () {
    if (!directly) {
      var timeout = setTimeout(update, 10);
      return function () {
        return clearTimeout(timeout);
      };
    }
  }, [errors]);
  if (directly) {
    update();
  }
  return [cacheRef.current.visible, cacheRef.current.errors];
}