"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-stream";
exports.ids = ["vendor-chunks/is-stream"];
exports.modules = {

/***/ "(action-browser)/./node_modules/is-stream/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-stream/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\n\nvar isStream = module.exports = function (stream) {\n\treturn stream !== null && typeof stream === 'object' && typeof stream.pipe === 'function';\n};\n\nisStream.writable = function (stream) {\n\treturn isStream(stream) && stream.writable !== false && typeof stream._write === 'function' && typeof stream._writableState === 'object';\n};\n\nisStream.readable = function (stream) {\n\treturn isStream(stream) && stream.readable !== false && typeof stream._read === 'function' && typeof stream._readableState === 'object';\n};\n\nisStream.duplex = function (stream) {\n\treturn isStream.writable(stream) && isStream.readable(stream);\n};\n\nisStream.transform = function (stream) {\n\treturn isStream.duplex(stream) && typeof stream._transform === 'function' && typeof stream._transformState === 'object';\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9pcy1zdHJlYW0vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9pcy1zdHJlYW0vaW5kZXguanM/MjZjYiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBpc1N0cmVhbSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cmVhbSkge1xuXHRyZXR1cm4gc3RyZWFtICE9PSBudWxsICYmIHR5cGVvZiBzdHJlYW0gPT09ICdvYmplY3QnICYmIHR5cGVvZiBzdHJlYW0ucGlwZSA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbmlzU3RyZWFtLndyaXRhYmxlID0gZnVuY3Rpb24gKHN0cmVhbSkge1xuXHRyZXR1cm4gaXNTdHJlYW0oc3RyZWFtKSAmJiBzdHJlYW0ud3JpdGFibGUgIT09IGZhbHNlICYmIHR5cGVvZiBzdHJlYW0uX3dyaXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBzdHJlYW0uX3dyaXRhYmxlU3RhdGUgPT09ICdvYmplY3QnO1xufTtcblxuaXNTdHJlYW0ucmVhZGFibGUgPSBmdW5jdGlvbiAoc3RyZWFtKSB7XG5cdHJldHVybiBpc1N0cmVhbShzdHJlYW0pICYmIHN0cmVhbS5yZWFkYWJsZSAhPT0gZmFsc2UgJiYgdHlwZW9mIHN0cmVhbS5fcmVhZCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygc3RyZWFtLl9yZWFkYWJsZVN0YXRlID09PSAnb2JqZWN0Jztcbn07XG5cbmlzU3RyZWFtLmR1cGxleCA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcblx0cmV0dXJuIGlzU3RyZWFtLndyaXRhYmxlKHN0cmVhbSkgJiYgaXNTdHJlYW0ucmVhZGFibGUoc3RyZWFtKTtcbn07XG5cbmlzU3RyZWFtLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcblx0cmV0dXJuIGlzU3RyZWFtLmR1cGxleChzdHJlYW0pICYmIHR5cGVvZiBzdHJlYW0uX3RyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygc3RyZWFtLl90cmFuc2Zvcm1TdGF0ZSA9PT0gJ29iamVjdCc7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/is-stream/index.js\n");

/***/ })

};
;