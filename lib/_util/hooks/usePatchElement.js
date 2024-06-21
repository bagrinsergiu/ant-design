"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = usePatchElement;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function usePatchElement() {
  var _React$useState = React.useState([]),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    elements = _React$useState2[0],
    setElements = _React$useState2[1];
  function patchElement(element) {
    // append a new element to elements (and create a new ref)
    setElements(function (originElements) {
      return [].concat((0, _toConsumableArray2["default"])(originElements), [element]);
    });
    // return a function that removes the new element out of elements (and create a new ref)
    // it works a little like useEffect
    return function () {
      setElements(function (originElements) {
        return originElements.filter(function (ele) {
          return ele !== element;
        });
      });
    };
  }
  return [elements, patchElement];
}