"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useItemRef;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var React = _interopRequireWildcard(require("react"));
var _ref = require("rc-util/lib/ref");
var _context = require("../context");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function useItemRef() {
  var _React$useContext = React.useContext(_context.FormContext),
    itemRef = _React$useContext.itemRef;
  var cacheRef = React.useRef({});
  function getRef(name, children) {
    var childrenRef = children && (0, _typeof2["default"])(children) === 'object' && children.ref;
    var nameStr = name.join('_');
    if (cacheRef.current.name !== nameStr || cacheRef.current.originRef !== childrenRef) {
      cacheRef.current.name = nameStr;
      cacheRef.current.originRef = childrenRef;
      cacheRef.current.ref = (0, _ref.composeRef)(itemRef(name), childrenRef);
    }
    return cacheRef.current.ref;
  }
  return getRef;
}