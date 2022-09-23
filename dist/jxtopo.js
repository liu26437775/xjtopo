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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"test\": function() { return /* binding */ test; },\n/* harmony export */   \"x\": function() { return /* reexport module object */ _xjconst_js__WEBPACK_IMPORTED_MODULE_4__; }\n/* harmony export */ });\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ \"./src/math.js\");\n/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string */ \"./src/string.js\");\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node */ \"./src/node.js\");\n/* harmony import */ var _idutils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./idutils.js */ \"./src/idutils.js\");\n/* harmony import */ var _xjconst_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./xjconst.js */ \"./src/xjconst.js\");\n\n\r\n\n\r\n\r\nfunction test(){\r\n\tvar canvas = document.getElementById('mycanvas');\r\n\tvar ctx = canvas.getContext('2d');\r\n\tvar node=new _node__WEBPACK_IMPORTED_MODULE_2__.Node(\"111222\",200,200);\r\n\tnode.setNodeShape(_xjconst_js__WEBPACK_IMPORTED_MODULE_4__.NODE_SHAPE_RECT);\r\n\tnode.drawNode(ctx);\r\n}\r\n\n\r\n \r\n \r\n\n\n//# sourceURL=webpack://jxtopo/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Node\": function() { return /* binding */ Node; }\n/* harmony export */ });\n/* harmony import */ var _xjconst_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xjconst.js */ \"./src/xjconst.js\");\n/* harmony import */ var _idutils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./idutils.js */ \"./src/idutils.js\");\n\r\n\r\nfunction Node(name, x, y) {\r\n\tthis.name = name;\r\n\tif (x == undefined) {\r\n\t\tthis.x = 10;\r\n\t} else {\r\n\t\tthis.x = x;\r\n\t}\r\n\tif (y == undefined) {\r\n\t\tthis.y = 10;\r\n\t} else {\r\n\t\tthis.y = y;\r\n\t}\r\n\tthis.height = 30;\r\n\tthis.width = 30;\r\n\tthis.nodeShape = x.NODE_SHAPE_RECT;\r\n\tthis.id = _idutils_js__WEBPACK_IMPORTED_MODULE_1__.getRandomString(32);\r\n\tthis.fillStyle = \"orchid\";\r\n\tthis.getNodeInfo = function() {\r\n\t\treturn this.id + \",\" + this.name + \"|\" + this.nodeShape + \"|[\" + this.x + \",\" + this.y + \",\" + this.height +\r\n\t\t\t\",\" + this.width + \"]\";\r\n\t};\r\n\tthis.imageUrl = null; //图片路径，当设置图片为形状时候起作用\r\n\t//设置Label位置\r\n\tthis.setLabelLocation = function(l) {\r\n\r\n\t};\r\n\t//设置节点形状\r\n\tthis.setNodeShape = function(nodeShape) {\r\n\t\tthis.nodeShape = nodeShape;\r\n\t};\r\n\t//设置Node节点大小\r\n\tthis.setNodeShapeSize = function(width, height) {\r\n\t\tthis.width = width;\r\n\t\tthis.height = height;\r\n\t};\r\n\t//绘制节点\r\n\tthis.drawNode = function(ctx) {\r\n\t\tif (this.nodeShape == x.NODE_SHAPE_RECT) {\r\n\t\t\tthis.drawRectNode(ctx);\r\n\t\t} else if (this.nodeShape == x.NODE_SHAPE_CIRCULAR) {\r\n\t\t\tthis.drawCircular(ctx);\r\n\t\t} else if (this.nodeShape == NODE_SHAPE_IMAGE) {\r\n\t\t\tconsole.log(\"暂时不支持的图形类别\");\r\n\t\t} else {\r\n\t\t\tconsole.log(\"暂时不支持的图形类别\");\r\n\t\t}\r\n\t};\r\n\tthis.drawRectNode = function(ctx) {\r\n\t\tconsole.log(\"绘制矩形\");\r\n\t\tctx.fillStyle = this.fillStyle;\r\n\t\tctx.fillRect(this.x, this.y, this.width, this.height);\r\n\t};\r\n\tthis.drawCircular = function(ctx) {\r\n\t\tconsole.log(\"绘制圆形\");\r\n\t\tctx.beginPath();\r\n\t\tctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI,\r\n\t\t\ttrue); //以圆心300,300，绘制一个半径为100的原型 true或者false表示正向画圆还是逆向画圆，在绘制扇形的时候有意义\r\n\t\tctx.stroke(); //画边框，关闭\r\n\t\tctx.fillStyle = this.fillStyle;\r\n\t\tctx.fill();\r\n\t};\r\n}\n\n\n//# sourceURL=webpack://jxtopo/./src/node.js?");

/***/ }),

/***/ "./src/string.js":
/*!***********************!*\
  !*** ./src/string.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"join\": function() { return /* binding */ join; }\n/* harmony export */ });\n// string.js\nfunction join(a,b){\n  return a+\" \"+b;\n}\n\n//# sourceURL=webpack://jxtopo/./src/string.js?");

/***/ }),

/***/ "./src/xjconst.js":
/*!************************!*\
  !*** ./src/xjconst.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NODE_SHAPE_CIRCULAR\": function() { return /* binding */ NODE_SHAPE_CIRCULAR; },\n/* harmony export */   \"NODE_SHAPE_IMAGE\": function() { return /* binding */ NODE_SHAPE_IMAGE; },\n/* harmony export */   \"NODE_SHAPE_RECT\": function() { return /* binding */ NODE_SHAPE_RECT; },\n/* harmony export */   \"POSITION_BOTTOM\": function() { return /* binding */ POSITION_BOTTOM; },\n/* harmony export */   \"POSITION_LEFT\": function() { return /* binding */ POSITION_LEFT; },\n/* harmony export */   \"POSITION_MIDDLE\": function() { return /* binding */ POSITION_MIDDLE; },\n/* harmony export */   \"POSITION_RIGHT\": function() { return /* binding */ POSITION_RIGHT; },\n/* harmony export */   \"POSITION_TOP\": function() { return /* binding */ POSITION_TOP; }\n/* harmony export */ });\nconst POSITION_LEFT = \"left\";\r\nconst POSITION_RIGHT = \"right\";\r\nconst POSITION_TOP = \"top\";\r\nconst POSITION_BOTTOM = \"buttom\";\r\nconst POSITION_MIDDLE = \"middle\";\r\n\r\nconst NODE_SHAPE_RECT = \"rect\";\r\nconst NODE_SHAPE_CIRCULAR = \"circular\";\r\nconst NODE_SHAPE_IMAGE = \"image\";\r\n\n\n//# sourceURL=webpack://jxtopo/./src/xjconst.js?");

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