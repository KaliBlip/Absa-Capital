"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "instrumentation";
exports.ids = ["instrumentation"];
exports.modules = {

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("module");

/***/ }),

/***/ "node:child_process":
/*!*************************************!*\
  !*** external "node:child_process" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("node:child_process");

/***/ }),

/***/ "node:diagnostics_channel":
/*!*******************************************!*\
  !*** external "node:diagnostics_channel" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("node:diagnostics_channel");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ "node:inspector":
/*!*********************************!*\
  !*** external "node:inspector" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("node:inspector");

/***/ }),

/***/ "node:net":
/*!***************************!*\
  !*** external "node:net" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ "node:os":
/*!**************************!*\
  !*** external "node:os" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:os");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ "node:readline":
/*!********************************!*\
  !*** external "node:readline" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("node:readline");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "node:tls":
/*!***************************!*\
  !*** external "node:tls" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:tls");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "node:worker_threads":
/*!**************************************!*\
  !*** external "node:worker_threads" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("node:worker_threads");

/***/ }),

/***/ "node:zlib":
/*!****************************!*\
  !*** external "node:zlib" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:zlib");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("perf_hooks");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "(instrument)/./instrumentation.ts":
/*!****************************!*\
  !*** ./instrumentation.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\nvar _sentryCollisionFreeGlobalObject =  false ? 0 : typeof global != \"undefined\" ? global : typeof self != \"undefined\" ? self : {};\n_sentryCollisionFreeGlobalObject[\"__sentryRewritesTunnelPath__\"] = undefined;\n_sentryCollisionFreeGlobalObject[\"SENTRY_RELEASE\"] = undefined;\n_sentryCollisionFreeGlobalObject[\"__sentryBasePath\"] = undefined;\n_sentryCollisionFreeGlobalObject[\"__rewriteFramesDistDir__\"] = \".next\";\nasync function register() {\n    if (true) {\n        await Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/@opentelemetry\"), __webpack_require__.e(\"vendor-chunks/@sentry\"), __webpack_require__.e(\"vendor-chunks/next\"), __webpack_require__.e(\"vendor-chunks/semver\"), __webpack_require__.e(\"vendor-chunks/resolve\"), __webpack_require__.e(\"vendor-chunks/debug\"), __webpack_require__.e(\"vendor-chunks/color-convert\"), __webpack_require__.e(\"vendor-chunks/require-in-the-middle\"), __webpack_require__.e(\"vendor-chunks/@prisma\"), __webpack_require__.e(\"vendor-chunks/is-core-module\"), __webpack_require__.e(\"vendor-chunks/color-name\"), __webpack_require__.e(\"vendor-chunks/ms\"), __webpack_require__.e(\"vendor-chunks/ansi-styles\"), __webpack_require__.e(\"vendor-chunks/supports-color\"), __webpack_require__.e(\"vendor-chunks/import-in-the-middle\"), __webpack_require__.e(\"vendor-chunks/stacktrace-parser\"), __webpack_require__.e(\"vendor-chunks/shimmer\"), __webpack_require__.e(\"vendor-chunks/function-bind\"), __webpack_require__.e(\"vendor-chunks/path-parse\"), __webpack_require__.e(\"vendor-chunks/@swc\"), __webpack_require__.e(\"vendor-chunks/module-details-from-path\"), __webpack_require__.e(\"vendor-chunks/has-flag\"), __webpack_require__.e(\"vendor-chunks/hasown\"), __webpack_require__.e(\"_instrument_node_modules_opentelemetry_instrumentation_build_esm_platform_node_sync_recursive-cef40b\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sentry.server.config */ \"(instrument)/./sentry.server.config.ts\"));\n    }\n    if (false) {}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vaW5zdHJ1bWVudGF0aW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFJQSxtQ0FBbUMsTUFBNEIsR0FBR0MsQ0FBTUEsR0FBRyxPQUFPQyxVQUFVLGNBQWNBLFNBQVMsT0FBT0MsUUFBUSxjQUFjQSxPQUFPLENBQUM7QUFDNUpILGdDQUFnQyxDQUFDLCtCQUErQixHQUFHSTtBQUNuRUosZ0NBQWdDLENBQUMsaUJBQWlCLEdBQUdJO0FBQ3JESixnQ0FBZ0MsQ0FBQyxtQkFBbUIsR0FBR0k7QUFDdkRKLGdDQUFnQyxDQUFDLDJCQUEyQixHQUFHO0FBRXhELGVBQWVLO0lBQ3BCLElBQUlDLElBQTZCLEVBQVU7UUFDekMsTUFBTSwwN0NBQU87SUFDZjtJQUVBLElBQUlBLEtBQTZCLEVBQVEsRUFFeEM7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL2luc3RydW1lbnRhdGlvbi50cz9kN2Q3Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfc2VudHJ5Q29sbGlzaW9uRnJlZUdsb2JhbE9iamVjdCA9IHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9IFwidW5kZWZpbmVkXCIgPyBzZWxmIDoge307XG5fc2VudHJ5Q29sbGlzaW9uRnJlZUdsb2JhbE9iamVjdFtcIl9fc2VudHJ5UmV3cml0ZXNUdW5uZWxQYXRoX19cIl0gPSB1bmRlZmluZWQ7XG5fc2VudHJ5Q29sbGlzaW9uRnJlZUdsb2JhbE9iamVjdFtcIlNFTlRSWV9SRUxFQVNFXCJdID0gdW5kZWZpbmVkO1xuX3NlbnRyeUNvbGxpc2lvbkZyZWVHbG9iYWxPYmplY3RbXCJfX3NlbnRyeUJhc2VQYXRoXCJdID0gdW5kZWZpbmVkO1xuX3NlbnRyeUNvbGxpc2lvbkZyZWVHbG9iYWxPYmplY3RbXCJfX3Jld3JpdGVGcmFtZXNEaXN0RGlyX19cIl0gPSBcIi5uZXh0XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSA9PT0gJ25vZGVqcycpIHtcbiAgICBhd2FpdCBpbXBvcnQoJy4vc2VudHJ5LnNlcnZlci5jb25maWcnKTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5ORVhUX1JVTlRJTUUgPT09ICdlZGdlJykge1xuICAgIGF3YWl0IGltcG9ydCgnLi9zZW50cnkuZWRnZS5jb25maWcnKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIl9zZW50cnlDb2xsaXNpb25GcmVlR2xvYmFsT2JqZWN0Iiwid2luZG93IiwiZ2xvYmFsIiwic2VsZiIsInVuZGVmaW5lZCIsInJlZ2lzdGVyIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUlVOVElNRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(instrument)/./instrumentation.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(instrument)/./instrumentation.ts"));
module.exports = __webpack_exports__;

})();