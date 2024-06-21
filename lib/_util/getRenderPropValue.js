"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRenderPropValue = void 0;
var getRenderPropValue = exports.getRenderPropValue = function getRenderPropValue(propValue) {
  if (!propValue) {
    return null;
  }
  var isRenderFunction = typeof propValue === 'function';
  if (isRenderFunction) {
    return propValue();
  }
  return propValue;
};