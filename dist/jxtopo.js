/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jxtopo"] = factory();
	else
		root["jxtopo"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/idutils.js":
/*!************************!*\
  !*** ./src/idutils.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomString\": function() { return /* binding */ getRandomString; }\n/* harmony export */ });\nconst _charStr = 'abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789';\r\n\r\n/**\n * 随机生成字符串\n * @param len 指定生成字符串长度\n */\nfunction getRandomString(len){\n    let _charStr = 'abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789',\n        min = 0, \n        max = _charStr.length-1, \n        _str = '';                    //定义随机字符串 变量\n    //判断是否指定长度，否则默认长度为15\n    len = len || 15;\n    //循环生成字符串\n    for(var i = 0, index; i < len; i++){\n        index = (function(randomIndexFunc, i){         \n                    return randomIndexFunc(min, max, i, randomIndexFunc);\n                })(function(min, max, i, _self){\n                    let indexTemp = Math.floor(Math.random()*(max-min+1)+min),\n                        numStart = _charStr.length - 10;\n                    if(i==0&&indexTemp >=numStart){\n                        indexTemp = _self(min, max, i, _self);\n                    }\n                    return indexTemp ;\n                }, i);\n        _str += _charStr[index];\n    }\n    return _str;\n}\n\n//# sourceURL=webpack://jxtopo/./src/idutils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bbb\": function() { return /* binding */ bbb; }\n/* harmony export */ });\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ \"./src/math.js\");\n/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string */ \"./src/string.js\");\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node */ \"./src/node.js\");\n/* harmony import */ var _idutils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./idutils.js */ \"./src/idutils.js\");\n\n\r\n\n\r\n\t\r\nfunction bbb(canvasId){\r\n\tconsole.log(_math__WEBPACK_IMPORTED_MODULE_0__);\r\n\tconsole.log(_string__WEBPACK_IMPORTED_MODULE_1__);\r\n\tconsole.log(_math__WEBPACK_IMPORTED_MODULE_0__.add(1,2));\r\n\tconsole.log(_string__WEBPACK_IMPORTED_MODULE_1__.join(1,2));\r\n\tvar node=new _node__WEBPACK_IMPORTED_MODULE_2__.Node(\"11111\");\r\n\tconsole.log(node.getInfo());\r\n\tconsole.log(_idutils_js__WEBPACK_IMPORTED_MODULE_3__.getRandomString(32));\r\n}\r\n\n\r\n \r\n \r\n\n\n//# sourceURL=webpack://jxtopo/./src/index.js?");

/***/ }),

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": function() { return /* binding */ add; },\n/* harmony export */   \"division\": function() { return /* binding */ division; },\n/* harmony export */   \"minus\": function() { return /* binding */ minus; },\n/* harmony export */   \"multiply\": function() { return /* binding */ multiply; }\n/* harmony export */ });\n// math.js\nfunction add(a,b){\n  return a+b;\n}\n \nfunction minus(a,b){\n  return a-b;\n}\n \nfunction multiply(a,b){\n  return a*b;\n}\n \nfunction division(a,b){\n  return a/b;\n}\n\n//# sourceURL=webpack://jxtopo/./src/math.js?");

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Node\": function() { return /* binding */ Node; }\n/* harmony export */ });\n class Node {\r\n\tconstructor(name,x,y) {\r\n\t\tthis.name = name\r\n\t\tthis.x=x;\r\n\t\tthis.y=y;\r\n\t}\r\n\tgetInfo() {\r\n\t\treturn this.name+\"，\"+this.age;\r\n\t}\r\n}\r\n\r\n \n\n\n//# sourceURL=webpack://jxtopo/./src/node.js?");

/***/ }),

/***/ "./src/string.js":
/*!***********************!*\
  !*** ./src/string.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"join\": function() { return /* binding */ join; }\n/* harmony export */ });\n// string.js\nfunction join(a,b){\n  return a+\" \"+b;\n}\n\n//# sourceURL=webpack://jxtopo/./src/string.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});