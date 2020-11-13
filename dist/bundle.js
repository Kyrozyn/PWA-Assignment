/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/materialize.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/materialize.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\r\n * Materialize v1.0.0 (http://materializecss.com)\r\n * Copyright 2014-2017 Materialize\r\n * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)\r\n */\r\n.materialize-red {\n  background-color: #e51c23 !important;\n}\n\n.materialize-red-text {\n  color: #e51c23 !important;\n}\n\n.materialize-red.lighten-5 {\n  background-color: #fdeaeb !important;\n}\n\n.materialize-red-text.text-lighten-5 {\n  color: #fdeaeb !important;\n}\n\n.materialize-red.lighten-4 {\n  background-color: #f8c1c3 !important;\n}\n\n.materialize-red-text.text-lighten-4 {\n  color: #f8c1c3 !important;\n}\n\n.materialize-red.lighten-3 {\n  background-color: #f3989b !important;\n}\n\n.materialize-red-text.text-lighten-3 {\n  color: #f3989b !important;\n}\n\n.materialize-red.lighten-2 {\n  background-color: #ee6e73 !important;\n}\n\n.materialize-red-text.text-lighten-2 {\n  color: #ee6e73 !important;\n}\n\n.materialize-red.lighten-1 {\n  background-color: #ea454b !important;\n}\n\n.materialize-red-text.text-lighten-1 {\n  color: #ea454b !important;\n}\n\n.materialize-red.darken-1 {\n  background-color: #d0181e !important;\n}\n\n.materialize-red-text.text-darken-1 {\n  color: #d0181e !important;\n}\n\n.materialize-red.darken-2 {\n  background-color: #b9151b !important;\n}\n\n.materialize-red-text.text-darken-2 {\n  color: #b9151b !important;\n}\n\n.materialize-red.darken-3 {\n  background-color: #a21318 !important;\n}\n\n.materialize-red-text.text-darken-3 {\n  color: #a21318 !important;\n}\n\n.materialize-red.darken-4 {\n  background-color: #8b1014 !important;\n}\n\n.materialize-red-text.text-darken-4 {\n  color: #8b1014 !important;\n}\n\n.red {\n  background-color: #F44336 !important;\n}\n\n.red-text {\n  color: #F44336 !important;\n}\n\n.red.lighten-5 {\n  background-color: #FFEBEE !important;\n}\n\n.red-text.text-lighten-5 {\n  color: #FFEBEE !important;\n}\n\n.red.lighten-4 {\n  background-color: #FFCDD2 !important;\n}\n\n.red-text.text-lighten-4 {\n  color: #FFCDD2 !important;\n}\n\n.red.lighten-3 {\n  background-color: #EF9A9A !important;\n}\n\n.red-text.text-lighten-3 {\n  color: #EF9A9A !important;\n}\n\n.red.lighten-2 {\n  background-color: #E57373 !important;\n}\n\n.red-text.text-lighten-2 {\n  color: #E57373 !important;\n}\n\n.red.lighten-1 {\n  background-color: #EF5350 !important;\n}\n\n.red-text.text-lighten-1 {\n  color: #EF5350 !important;\n}\n\n.red.darken-1 {\n  background-color: #E53935 !important;\n}\n\n.red-text.text-darken-1 {\n  color: #E53935 !important;\n}\n\n.red.darken-2 {\n  background-color: #D32F2F !important;\n}\n\n.red-text.text-darken-2 {\n  color: #D32F2F !important;\n}\n\n.red.darken-3 {\n  background-color: #C62828 !important;\n}\n\n.red-text.text-darken-3 {\n  color: #C62828 !important;\n}\n\n.red.darken-4 {\n  background-color: #B71C1C !important;\n}\n\n.red-text.text-darken-4 {\n  color: #B71C1C !important;\n}\n\n.red.accent-1 {\n  background-color: #FF8A80 !important;\n}\n\n.red-text.text-accent-1 {\n  color: #FF8A80 !important;\n}\n\n.red.accent-2 {\n  background-color: #FF5252 !important;\n}\n\n.red-text.text-accent-2 {\n  color: #FF5252 !important;\n}\n\n.red.accent-3 {\n  background-color: #FF1744 !important;\n}\n\n.red-text.text-accent-3 {\n  color: #FF1744 !important;\n}\n\n.red.accent-4 {\n  background-color: #D50000 !important;\n}\n\n.red-text.text-accent-4 {\n  color: #D50000 !important;\n}\n\n.pink {\n  background-color: #e91e63 !important;\n}\n\n.pink-text {\n  color: #e91e63 !important;\n}\n\n.pink.lighten-5 {\n  background-color: #fce4ec !important;\n}\n\n.pink-text.text-lighten-5 {\n  color: #fce4ec !important;\n}\n\n.pink.lighten-4 {\n  background-color: #f8bbd0 !important;\n}\n\n.pink-text.text-lighten-4 {\n  color: #f8bbd0 !important;\n}\n\n.pink.lighten-3 {\n  background-color: #f48fb1 !important;\n}\n\n.pink-text.text-lighten-3 {\n  color: #f48fb1 !important;\n}\n\n.pink.lighten-2 {\n  background-color: #f06292 !important;\n}\n\n.pink-text.text-lighten-2 {\n  color: #f06292 !important;\n}\n\n.pink.lighten-1 {\n  background-color: #ec407a !important;\n}\n\n.pink-text.text-lighten-1 {\n  color: #ec407a !important;\n}\n\n.pink.darken-1 {\n  background-color: #d81b60 !important;\n}\n\n.pink-text.text-darken-1 {\n  color: #d81b60 !important;\n}\n\n.pink.darken-2 {\n  background-color: #c2185b !important;\n}\n\n.pink-text.text-darken-2 {\n  color: #c2185b !important;\n}\n\n.pink.darken-3 {\n  background-color: #ad1457 !important;\n}\n\n.pink-text.text-darken-3 {\n  color: #ad1457 !important;\n}\n\n.pink.darken-4 {\n  background-color: #880e4f !important;\n}\n\n.pink-text.text-darken-4 {\n  color: #880e4f !important;\n}\n\n.pink.accent-1 {\n  background-color: #ff80ab !important;\n}\n\n.pink-text.text-accent-1 {\n  color: #ff80ab !important;\n}\n\n.pink.accent-2 {\n  background-color: #ff4081 !important;\n}\n\n.pink-text.text-accent-2 {\n  color: #ff4081 !important;\n}\n\n.pink.accent-3 {\n  background-color: #f50057 !important;\n}\n\n.pink-text.text-accent-3 {\n  color: #f50057 !important;\n}\n\n.pink.accent-4 {\n  background-color: #c51162 !important;\n}\n\n.pink-text.text-accent-4 {\n  color: #c51162 !important;\n}\n\n.purple {\n  background-color: #9c27b0 !important;\n}\n\n.purple-text {\n  color: #9c27b0 !important;\n}\n\n.purple.lighten-5 {\n  background-color: #f3e5f5 !important;\n}\n\n.purple-text.text-lighten-5 {\n  color: #f3e5f5 !important;\n}\n\n.purple.lighten-4 {\n  background-color: #e1bee7 !important;\n}\n\n.purple-text.text-lighten-4 {\n  color: #e1bee7 !important;\n}\n\n.purple.lighten-3 {\n  background-color: #ce93d8 !important;\n}\n\n.purple-text.text-lighten-3 {\n  color: #ce93d8 !important;\n}\n\n.purple.lighten-2 {\n  background-color: #ba68c8 !important;\n}\n\n.purple-text.text-lighten-2 {\n  color: #ba68c8 !important;\n}\n\n.purple.lighten-1 {\n  background-color: #ab47bc !important;\n}\n\n.purple-text.text-lighten-1 {\n  color: #ab47bc !important;\n}\n\n.purple.darken-1 {\n  background-color: #8e24aa !important;\n}\n\n.purple-text.text-darken-1 {\n  color: #8e24aa !important;\n}\n\n.purple.darken-2 {\n  background-color: #7b1fa2 !important;\n}\n\n.purple-text.text-darken-2 {\n  color: #7b1fa2 !important;\n}\n\n.purple.darken-3 {\n  background-color: #6a1b9a !important;\n}\n\n.purple-text.text-darken-3 {\n  color: #6a1b9a !important;\n}\n\n.purple.darken-4 {\n  background-color: #4a148c !important;\n}\n\n.purple-text.text-darken-4 {\n  color: #4a148c !important;\n}\n\n.purple.accent-1 {\n  background-color: #ea80fc !important;\n}\n\n.purple-text.text-accent-1 {\n  color: #ea80fc !important;\n}\n\n.purple.accent-2 {\n  background-color: #e040fb !important;\n}\n\n.purple-text.text-accent-2 {\n  color: #e040fb !important;\n}\n\n.purple.accent-3 {\n  background-color: #d500f9 !important;\n}\n\n.purple-text.text-accent-3 {\n  color: #d500f9 !important;\n}\n\n.purple.accent-4 {\n  background-color: #aa00ff !important;\n}\n\n.purple-text.text-accent-4 {\n  color: #aa00ff !important;\n}\n\n.deep-purple {\n  background-color: #673ab7 !important;\n}\n\n.deep-purple-text {\n  color: #673ab7 !important;\n}\n\n.deep-purple.lighten-5 {\n  background-color: #ede7f6 !important;\n}\n\n.deep-purple-text.text-lighten-5 {\n  color: #ede7f6 !important;\n}\n\n.deep-purple.lighten-4 {\n  background-color: #d1c4e9 !important;\n}\n\n.deep-purple-text.text-lighten-4 {\n  color: #d1c4e9 !important;\n}\n\n.deep-purple.lighten-3 {\n  background-color: #b39ddb !important;\n}\n\n.deep-purple-text.text-lighten-3 {\n  color: #b39ddb !important;\n}\n\n.deep-purple.lighten-2 {\n  background-color: #9575cd !important;\n}\n\n.deep-purple-text.text-lighten-2 {\n  color: #9575cd !important;\n}\n\n.deep-purple.lighten-1 {\n  background-color: #7e57c2 !important;\n}\n\n.deep-purple-text.text-lighten-1 {\n  color: #7e57c2 !important;\n}\n\n.deep-purple.darken-1 {\n  background-color: #5e35b1 !important;\n}\n\n.deep-purple-text.text-darken-1 {\n  color: #5e35b1 !important;\n}\n\n.deep-purple.darken-2 {\n  background-color: #512da8 !important;\n}\n\n.deep-purple-text.text-darken-2 {\n  color: #512da8 !important;\n}\n\n.deep-purple.darken-3 {\n  background-color: #4527a0 !important;\n}\n\n.deep-purple-text.text-darken-3 {\n  color: #4527a0 !important;\n}\n\n.deep-purple.darken-4 {\n  background-color: #311b92 !important;\n}\n\n.deep-purple-text.text-darken-4 {\n  color: #311b92 !important;\n}\n\n.deep-purple.accent-1 {\n  background-color: #b388ff !important;\n}\n\n.deep-purple-text.text-accent-1 {\n  color: #b388ff !important;\n}\n\n.deep-purple.accent-2 {\n  background-color: #7c4dff !important;\n}\n\n.deep-purple-text.text-accent-2 {\n  color: #7c4dff !important;\n}\n\n.deep-purple.accent-3 {\n  background-color: #651fff !important;\n}\n\n.deep-purple-text.text-accent-3 {\n  color: #651fff !important;\n}\n\n.deep-purple.accent-4 {\n  background-color: #6200ea !important;\n}\n\n.deep-purple-text.text-accent-4 {\n  color: #6200ea !important;\n}\n\n.indigo {\n  background-color: #3f51b5 !important;\n}\n\n.indigo-text {\n  color: #3f51b5 !important;\n}\n\n.indigo.lighten-5 {\n  background-color: #e8eaf6 !important;\n}\n\n.indigo-text.text-lighten-5 {\n  color: #e8eaf6 !important;\n}\n\n.indigo.lighten-4 {\n  background-color: #c5cae9 !important;\n}\n\n.indigo-text.text-lighten-4 {\n  color: #c5cae9 !important;\n}\n\n.indigo.lighten-3 {\n  background-color: #9fa8da !important;\n}\n\n.indigo-text.text-lighten-3 {\n  color: #9fa8da !important;\n}\n\n.indigo.lighten-2 {\n  background-color: #7986cb !important;\n}\n\n.indigo-text.text-lighten-2 {\n  color: #7986cb !important;\n}\n\n.indigo.lighten-1 {\n  background-color: #5c6bc0 !important;\n}\n\n.indigo-text.text-lighten-1 {\n  color: #5c6bc0 !important;\n}\n\n.indigo.darken-1 {\n  background-color: #3949ab !important;\n}\n\n.indigo-text.text-darken-1 {\n  color: #3949ab !important;\n}\n\n.indigo.darken-2 {\n  background-color: #303f9f !important;\n}\n\n.indigo-text.text-darken-2 {\n  color: #303f9f !important;\n}\n\n.indigo.darken-3 {\n  background-color: #283593 !important;\n}\n\n.indigo-text.text-darken-3 {\n  color: #283593 !important;\n}\n\n.indigo.darken-4 {\n  background-color: #1a237e !important;\n}\n\n.indigo-text.text-darken-4 {\n  color: #1a237e !important;\n}\n\n.indigo.accent-1 {\n  background-color: #8c9eff !important;\n}\n\n.indigo-text.text-accent-1 {\n  color: #8c9eff !important;\n}\n\n.indigo.accent-2 {\n  background-color: #536dfe !important;\n}\n\n.indigo-text.text-accent-2 {\n  color: #536dfe !important;\n}\n\n.indigo.accent-3 {\n  background-color: #3d5afe !important;\n}\n\n.indigo-text.text-accent-3 {\n  color: #3d5afe !important;\n}\n\n.indigo.accent-4 {\n  background-color: #304ffe !important;\n}\n\n.indigo-text.text-accent-4 {\n  color: #304ffe !important;\n}\n\n.blue {\n  background-color: #2196F3 !important;\n}\n\n.blue-text {\n  color: #2196F3 !important;\n}\n\n.blue.lighten-5 {\n  background-color: #E3F2FD !important;\n}\n\n.blue-text.text-lighten-5 {\n  color: #E3F2FD !important;\n}\n\n.blue.lighten-4 {\n  background-color: #BBDEFB !important;\n}\n\n.blue-text.text-lighten-4 {\n  color: #BBDEFB !important;\n}\n\n.blue.lighten-3 {\n  background-color: #90CAF9 !important;\n}\n\n.blue-text.text-lighten-3 {\n  color: #90CAF9 !important;\n}\n\n.blue.lighten-2 {\n  background-color: #64B5F6 !important;\n}\n\n.blue-text.text-lighten-2 {\n  color: #64B5F6 !important;\n}\n\n.blue.lighten-1 {\n  background-color: #42A5F5 !important;\n}\n\n.blue-text.text-lighten-1 {\n  color: #42A5F5 !important;\n}\n\n.blue.darken-1 {\n  background-color: #1E88E5 !important;\n}\n\n.blue-text.text-darken-1 {\n  color: #1E88E5 !important;\n}\n\n.blue.darken-2 {\n  background-color: #1976D2 !important;\n}\n\n.blue-text.text-darken-2 {\n  color: #1976D2 !important;\n}\n\n.blue.darken-3 {\n  background-color: #1565C0 !important;\n}\n\n.blue-text.text-darken-3 {\n  color: #1565C0 !important;\n}\n\n.blue.darken-4 {\n  background-color: #0D47A1 !important;\n}\n\n.blue-text.text-darken-4 {\n  color: #0D47A1 !important;\n}\n\n.blue.accent-1 {\n  background-color: #82B1FF !important;\n}\n\n.blue-text.text-accent-1 {\n  color: #82B1FF !important;\n}\n\n.blue.accent-2 {\n  background-color: #448AFF !important;\n}\n\n.blue-text.text-accent-2 {\n  color: #448AFF !important;\n}\n\n.blue.accent-3 {\n  background-color: #2979FF !important;\n}\n\n.blue-text.text-accent-3 {\n  color: #2979FF !important;\n}\n\n.blue.accent-4 {\n  background-color: #2962FF !important;\n}\n\n.blue-text.text-accent-4 {\n  color: #2962FF !important;\n}\n\n.light-blue {\n  background-color: #03a9f4 !important;\n}\n\n.light-blue-text {\n  color: #03a9f4 !important;\n}\n\n.light-blue.lighten-5 {\n  background-color: #e1f5fe !important;\n}\n\n.light-blue-text.text-lighten-5 {\n  color: #e1f5fe !important;\n}\n\n.light-blue.lighten-4 {\n  background-color: #b3e5fc !important;\n}\n\n.light-blue-text.text-lighten-4 {\n  color: #b3e5fc !important;\n}\n\n.light-blue.lighten-3 {\n  background-color: #81d4fa !important;\n}\n\n.light-blue-text.text-lighten-3 {\n  color: #81d4fa !important;\n}\n\n.light-blue.lighten-2 {\n  background-color: #4fc3f7 !important;\n}\n\n.light-blue-text.text-lighten-2 {\n  color: #4fc3f7 !important;\n}\n\n.light-blue.lighten-1 {\n  background-color: #29b6f6 !important;\n}\n\n.light-blue-text.text-lighten-1 {\n  color: #29b6f6 !important;\n}\n\n.light-blue.darken-1 {\n  background-color: #039be5 !important;\n}\n\n.light-blue-text.text-darken-1 {\n  color: #039be5 !important;\n}\n\n.light-blue.darken-2 {\n  background-color: #0288d1 !important;\n}\n\n.light-blue-text.text-darken-2 {\n  color: #0288d1 !important;\n}\n\n.light-blue.darken-3 {\n  background-color: #0277bd !important;\n}\n\n.light-blue-text.text-darken-3 {\n  color: #0277bd !important;\n}\n\n.light-blue.darken-4 {\n  background-color: #01579b !important;\n}\n\n.light-blue-text.text-darken-4 {\n  color: #01579b !important;\n}\n\n.light-blue.accent-1 {\n  background-color: #80d8ff !important;\n}\n\n.light-blue-text.text-accent-1 {\n  color: #80d8ff !important;\n}\n\n.light-blue.accent-2 {\n  background-color: #40c4ff !important;\n}\n\n.light-blue-text.text-accent-2 {\n  color: #40c4ff !important;\n}\n\n.light-blue.accent-3 {\n  background-color: #00b0ff !important;\n}\n\n.light-blue-text.text-accent-3 {\n  color: #00b0ff !important;\n}\n\n.light-blue.accent-4 {\n  background-color: #0091ea !important;\n}\n\n.light-blue-text.text-accent-4 {\n  color: #0091ea !important;\n}\n\n.cyan {\n  background-color: #00bcd4 !important;\n}\n\n.cyan-text {\n  color: #00bcd4 !important;\n}\n\n.cyan.lighten-5 {\n  background-color: #e0f7fa !important;\n}\n\n.cyan-text.text-lighten-5 {\n  color: #e0f7fa !important;\n}\n\n.cyan.lighten-4 {\n  background-color: #b2ebf2 !important;\n}\n\n.cyan-text.text-lighten-4 {\n  color: #b2ebf2 !important;\n}\n\n.cyan.lighten-3 {\n  background-color: #80deea !important;\n}\n\n.cyan-text.text-lighten-3 {\n  color: #80deea !important;\n}\n\n.cyan.lighten-2 {\n  background-color: #4dd0e1 !important;\n}\n\n.cyan-text.text-lighten-2 {\n  color: #4dd0e1 !important;\n}\n\n.cyan.lighten-1 {\n  background-color: #26c6da !important;\n}\n\n.cyan-text.text-lighten-1 {\n  color: #26c6da !important;\n}\n\n.cyan.darken-1 {\n  background-color: #00acc1 !important;\n}\n\n.cyan-text.text-darken-1 {\n  color: #00acc1 !important;\n}\n\n.cyan.darken-2 {\n  background-color: #0097a7 !important;\n}\n\n.cyan-text.text-darken-2 {\n  color: #0097a7 !important;\n}\n\n.cyan.darken-3 {\n  background-color: #00838f !important;\n}\n\n.cyan-text.text-darken-3 {\n  color: #00838f !important;\n}\n\n.cyan.darken-4 {\n  background-color: #006064 !important;\n}\n\n.cyan-text.text-darken-4 {\n  color: #006064 !important;\n}\n\n.cyan.accent-1 {\n  background-color: #84ffff !important;\n}\n\n.cyan-text.text-accent-1 {\n  color: #84ffff !important;\n}\n\n.cyan.accent-2 {\n  background-color: #18ffff !important;\n}\n\n.cyan-text.text-accent-2 {\n  color: #18ffff !important;\n}\n\n.cyan.accent-3 {\n  background-color: #00e5ff !important;\n}\n\n.cyan-text.text-accent-3 {\n  color: #00e5ff !important;\n}\n\n.cyan.accent-4 {\n  background-color: #00b8d4 !important;\n}\n\n.cyan-text.text-accent-4 {\n  color: #00b8d4 !important;\n}\n\n.teal {\n  background-color: #009688 !important;\n}\n\n.teal-text {\n  color: #009688 !important;\n}\n\n.teal.lighten-5 {\n  background-color: #e0f2f1 !important;\n}\n\n.teal-text.text-lighten-5 {\n  color: #e0f2f1 !important;\n}\n\n.teal.lighten-4 {\n  background-color: #b2dfdb !important;\n}\n\n.teal-text.text-lighten-4 {\n  color: #b2dfdb !important;\n}\n\n.teal.lighten-3 {\n  background-color: #80cbc4 !important;\n}\n\n.teal-text.text-lighten-3 {\n  color: #80cbc4 !important;\n}\n\n.teal.lighten-2 {\n  background-color: #4db6ac !important;\n}\n\n.teal-text.text-lighten-2 {\n  color: #4db6ac !important;\n}\n\n.teal.lighten-1 {\n  background-color: #26a69a !important;\n}\n\n.teal-text.text-lighten-1 {\n  color: #26a69a !important;\n}\n\n.teal.darken-1 {\n  background-color: #00897b !important;\n}\n\n.teal-text.text-darken-1 {\n  color: #00897b !important;\n}\n\n.teal.darken-2 {\n  background-color: #00796b !important;\n}\n\n.teal-text.text-darken-2 {\n  color: #00796b !important;\n}\n\n.teal.darken-3 {\n  background-color: #00695c !important;\n}\n\n.teal-text.text-darken-3 {\n  color: #00695c !important;\n}\n\n.teal.darken-4 {\n  background-color: #004d40 !important;\n}\n\n.teal-text.text-darken-4 {\n  color: #004d40 !important;\n}\n\n.teal.accent-1 {\n  background-color: #a7ffeb !important;\n}\n\n.teal-text.text-accent-1 {\n  color: #a7ffeb !important;\n}\n\n.teal.accent-2 {\n  background-color: #64ffda !important;\n}\n\n.teal-text.text-accent-2 {\n  color: #64ffda !important;\n}\n\n.teal.accent-3 {\n  background-color: #1de9b6 !important;\n}\n\n.teal-text.text-accent-3 {\n  color: #1de9b6 !important;\n}\n\n.teal.accent-4 {\n  background-color: #00bfa5 !important;\n}\n\n.teal-text.text-accent-4 {\n  color: #00bfa5 !important;\n}\n\n.green {\n  background-color: #4CAF50 !important;\n}\n\n.green-text {\n  color: #4CAF50 !important;\n}\n\n.green.lighten-5 {\n  background-color: #E8F5E9 !important;\n}\n\n.green-text.text-lighten-5 {\n  color: #E8F5E9 !important;\n}\n\n.green.lighten-4 {\n  background-color: #C8E6C9 !important;\n}\n\n.green-text.text-lighten-4 {\n  color: #C8E6C9 !important;\n}\n\n.green.lighten-3 {\n  background-color: #A5D6A7 !important;\n}\n\n.green-text.text-lighten-3 {\n  color: #A5D6A7 !important;\n}\n\n.green.lighten-2 {\n  background-color: #81C784 !important;\n}\n\n.green-text.text-lighten-2 {\n  color: #81C784 !important;\n}\n\n.green.lighten-1 {\n  background-color: #66BB6A !important;\n}\n\n.green-text.text-lighten-1 {\n  color: #66BB6A !important;\n}\n\n.green.darken-1 {\n  background-color: #43A047 !important;\n}\n\n.green-text.text-darken-1 {\n  color: #43A047 !important;\n}\n\n.green.darken-2 {\n  background-color: #388E3C !important;\n}\n\n.green-text.text-darken-2 {\n  color: #388E3C !important;\n}\n\n.green.darken-3 {\n  background-color: #2E7D32 !important;\n}\n\n.green-text.text-darken-3 {\n  color: #2E7D32 !important;\n}\n\n.green.darken-4 {\n  background-color: #1B5E20 !important;\n}\n\n.green-text.text-darken-4 {\n  color: #1B5E20 !important;\n}\n\n.green.accent-1 {\n  background-color: #B9F6CA !important;\n}\n\n.green-text.text-accent-1 {\n  color: #B9F6CA !important;\n}\n\n.green.accent-2 {\n  background-color: #69F0AE !important;\n}\n\n.green-text.text-accent-2 {\n  color: #69F0AE !important;\n}\n\n.green.accent-3 {\n  background-color: #00E676 !important;\n}\n\n.green-text.text-accent-3 {\n  color: #00E676 !important;\n}\n\n.green.accent-4 {\n  background-color: #00C853 !important;\n}\n\n.green-text.text-accent-4 {\n  color: #00C853 !important;\n}\n\n.light-green {\n  background-color: #8bc34a !important;\n}\n\n.light-green-text {\n  color: #8bc34a !important;\n}\n\n.light-green.lighten-5 {\n  background-color: #f1f8e9 !important;\n}\n\n.light-green-text.text-lighten-5 {\n  color: #f1f8e9 !important;\n}\n\n.light-green.lighten-4 {\n  background-color: #dcedc8 !important;\n}\n\n.light-green-text.text-lighten-4 {\n  color: #dcedc8 !important;\n}\n\n.light-green.lighten-3 {\n  background-color: #c5e1a5 !important;\n}\n\n.light-green-text.text-lighten-3 {\n  color: #c5e1a5 !important;\n}\n\n.light-green.lighten-2 {\n  background-color: #aed581 !important;\n}\n\n.light-green-text.text-lighten-2 {\n  color: #aed581 !important;\n}\n\n.light-green.lighten-1 {\n  background-color: #9ccc65 !important;\n}\n\n.light-green-text.text-lighten-1 {\n  color: #9ccc65 !important;\n}\n\n.light-green.darken-1 {\n  background-color: #7cb342 !important;\n}\n\n.light-green-text.text-darken-1 {\n  color: #7cb342 !important;\n}\n\n.light-green.darken-2 {\n  background-color: #689f38 !important;\n}\n\n.light-green-text.text-darken-2 {\n  color: #689f38 !important;\n}\n\n.light-green.darken-3 {\n  background-color: #558b2f !important;\n}\n\n.light-green-text.text-darken-3 {\n  color: #558b2f !important;\n}\n\n.light-green.darken-4 {\n  background-color: #33691e !important;\n}\n\n.light-green-text.text-darken-4 {\n  color: #33691e !important;\n}\n\n.light-green.accent-1 {\n  background-color: #ccff90 !important;\n}\n\n.light-green-text.text-accent-1 {\n  color: #ccff90 !important;\n}\n\n.light-green.accent-2 {\n  background-color: #b2ff59 !important;\n}\n\n.light-green-text.text-accent-2 {\n  color: #b2ff59 !important;\n}\n\n.light-green.accent-3 {\n  background-color: #76ff03 !important;\n}\n\n.light-green-text.text-accent-3 {\n  color: #76ff03 !important;\n}\n\n.light-green.accent-4 {\n  background-color: #64dd17 !important;\n}\n\n.light-green-text.text-accent-4 {\n  color: #64dd17 !important;\n}\n\n.lime {\n  background-color: #cddc39 !important;\n}\n\n.lime-text {\n  color: #cddc39 !important;\n}\n\n.lime.lighten-5 {\n  background-color: #f9fbe7 !important;\n}\n\n.lime-text.text-lighten-5 {\n  color: #f9fbe7 !important;\n}\n\n.lime.lighten-4 {\n  background-color: #f0f4c3 !important;\n}\n\n.lime-text.text-lighten-4 {\n  color: #f0f4c3 !important;\n}\n\n.lime.lighten-3 {\n  background-color: #e6ee9c !important;\n}\n\n.lime-text.text-lighten-3 {\n  color: #e6ee9c !important;\n}\n\n.lime.lighten-2 {\n  background-color: #dce775 !important;\n}\n\n.lime-text.text-lighten-2 {\n  color: #dce775 !important;\n}\n\n.lime.lighten-1 {\n  background-color: #d4e157 !important;\n}\n\n.lime-text.text-lighten-1 {\n  color: #d4e157 !important;\n}\n\n.lime.darken-1 {\n  background-color: #c0ca33 !important;\n}\n\n.lime-text.text-darken-1 {\n  color: #c0ca33 !important;\n}\n\n.lime.darken-2 {\n  background-color: #afb42b !important;\n}\n\n.lime-text.text-darken-2 {\n  color: #afb42b !important;\n}\n\n.lime.darken-3 {\n  background-color: #9e9d24 !important;\n}\n\n.lime-text.text-darken-3 {\n  color: #9e9d24 !important;\n}\n\n.lime.darken-4 {\n  background-color: #827717 !important;\n}\n\n.lime-text.text-darken-4 {\n  color: #827717 !important;\n}\n\n.lime.accent-1 {\n  background-color: #f4ff81 !important;\n}\n\n.lime-text.text-accent-1 {\n  color: #f4ff81 !important;\n}\n\n.lime.accent-2 {\n  background-color: #eeff41 !important;\n}\n\n.lime-text.text-accent-2 {\n  color: #eeff41 !important;\n}\n\n.lime.accent-3 {\n  background-color: #c6ff00 !important;\n}\n\n.lime-text.text-accent-3 {\n  color: #c6ff00 !important;\n}\n\n.lime.accent-4 {\n  background-color: #aeea00 !important;\n}\n\n.lime-text.text-accent-4 {\n  color: #aeea00 !important;\n}\n\n.yellow {\n  background-color: #ffeb3b !important;\n}\n\n.yellow-text {\n  color: #ffeb3b !important;\n}\n\n.yellow.lighten-5 {\n  background-color: #fffde7 !important;\n}\n\n.yellow-text.text-lighten-5 {\n  color: #fffde7 !important;\n}\n\n.yellow.lighten-4 {\n  background-color: #fff9c4 !important;\n}\n\n.yellow-text.text-lighten-4 {\n  color: #fff9c4 !important;\n}\n\n.yellow.lighten-3 {\n  background-color: #fff59d !important;\n}\n\n.yellow-text.text-lighten-3 {\n  color: #fff59d !important;\n}\n\n.yellow.lighten-2 {\n  background-color: #fff176 !important;\n}\n\n.yellow-text.text-lighten-2 {\n  color: #fff176 !important;\n}\n\n.yellow.lighten-1 {\n  background-color: #ffee58 !important;\n}\n\n.yellow-text.text-lighten-1 {\n  color: #ffee58 !important;\n}\n\n.yellow.darken-1 {\n  background-color: #fdd835 !important;\n}\n\n.yellow-text.text-darken-1 {\n  color: #fdd835 !important;\n}\n\n.yellow.darken-2 {\n  background-color: #fbc02d !important;\n}\n\n.yellow-text.text-darken-2 {\n  color: #fbc02d !important;\n}\n\n.yellow.darken-3 {\n  background-color: #f9a825 !important;\n}\n\n.yellow-text.text-darken-3 {\n  color: #f9a825 !important;\n}\n\n.yellow.darken-4 {\n  background-color: #f57f17 !important;\n}\n\n.yellow-text.text-darken-4 {\n  color: #f57f17 !important;\n}\n\n.yellow.accent-1 {\n  background-color: #ffff8d !important;\n}\n\n.yellow-text.text-accent-1 {\n  color: #ffff8d !important;\n}\n\n.yellow.accent-2 {\n  background-color: #ffff00 !important;\n}\n\n.yellow-text.text-accent-2 {\n  color: #ffff00 !important;\n}\n\n.yellow.accent-3 {\n  background-color: #ffea00 !important;\n}\n\n.yellow-text.text-accent-3 {\n  color: #ffea00 !important;\n}\n\n.yellow.accent-4 {\n  background-color: #ffd600 !important;\n}\n\n.yellow-text.text-accent-4 {\n  color: #ffd600 !important;\n}\n\n.amber {\n  background-color: #ffc107 !important;\n}\n\n.amber-text {\n  color: #ffc107 !important;\n}\n\n.amber.lighten-5 {\n  background-color: #fff8e1 !important;\n}\n\n.amber-text.text-lighten-5 {\n  color: #fff8e1 !important;\n}\n\n.amber.lighten-4 {\n  background-color: #ffecb3 !important;\n}\n\n.amber-text.text-lighten-4 {\n  color: #ffecb3 !important;\n}\n\n.amber.lighten-3 {\n  background-color: #ffe082 !important;\n}\n\n.amber-text.text-lighten-3 {\n  color: #ffe082 !important;\n}\n\n.amber.lighten-2 {\n  background-color: #ffd54f !important;\n}\n\n.amber-text.text-lighten-2 {\n  color: #ffd54f !important;\n}\n\n.amber.lighten-1 {\n  background-color: #ffca28 !important;\n}\n\n.amber-text.text-lighten-1 {\n  color: #ffca28 !important;\n}\n\n.amber.darken-1 {\n  background-color: #ffb300 !important;\n}\n\n.amber-text.text-darken-1 {\n  color: #ffb300 !important;\n}\n\n.amber.darken-2 {\n  background-color: #ffa000 !important;\n}\n\n.amber-text.text-darken-2 {\n  color: #ffa000 !important;\n}\n\n.amber.darken-3 {\n  background-color: #ff8f00 !important;\n}\n\n.amber-text.text-darken-3 {\n  color: #ff8f00 !important;\n}\n\n.amber.darken-4 {\n  background-color: #ff6f00 !important;\n}\n\n.amber-text.text-darken-4 {\n  color: #ff6f00 !important;\n}\n\n.amber.accent-1 {\n  background-color: #ffe57f !important;\n}\n\n.amber-text.text-accent-1 {\n  color: #ffe57f !important;\n}\n\n.amber.accent-2 {\n  background-color: #ffd740 !important;\n}\n\n.amber-text.text-accent-2 {\n  color: #ffd740 !important;\n}\n\n.amber.accent-3 {\n  background-color: #ffc400 !important;\n}\n\n.amber-text.text-accent-3 {\n  color: #ffc400 !important;\n}\n\n.amber.accent-4 {\n  background-color: #ffab00 !important;\n}\n\n.amber-text.text-accent-4 {\n  color: #ffab00 !important;\n}\n\n.orange {\n  background-color: #ff9800 !important;\n}\n\n.orange-text {\n  color: #ff9800 !important;\n}\n\n.orange.lighten-5 {\n  background-color: #fff3e0 !important;\n}\n\n.orange-text.text-lighten-5 {\n  color: #fff3e0 !important;\n}\n\n.orange.lighten-4 {\n  background-color: #ffe0b2 !important;\n}\n\n.orange-text.text-lighten-4 {\n  color: #ffe0b2 !important;\n}\n\n.orange.lighten-3 {\n  background-color: #ffcc80 !important;\n}\n\n.orange-text.text-lighten-3 {\n  color: #ffcc80 !important;\n}\n\n.orange.lighten-2 {\n  background-color: #ffb74d !important;\n}\n\n.orange-text.text-lighten-2 {\n  color: #ffb74d !important;\n}\n\n.orange.lighten-1 {\n  background-color: #ffa726 !important;\n}\n\n.orange-text.text-lighten-1 {\n  color: #ffa726 !important;\n}\n\n.orange.darken-1 {\n  background-color: #fb8c00 !important;\n}\n\n.orange-text.text-darken-1 {\n  color: #fb8c00 !important;\n}\n\n.orange.darken-2 {\n  background-color: #f57c00 !important;\n}\n\n.orange-text.text-darken-2 {\n  color: #f57c00 !important;\n}\n\n.orange.darken-3 {\n  background-color: #ef6c00 !important;\n}\n\n.orange-text.text-darken-3 {\n  color: #ef6c00 !important;\n}\n\n.orange.darken-4 {\n  background-color: #e65100 !important;\n}\n\n.orange-text.text-darken-4 {\n  color: #e65100 !important;\n}\n\n.orange.accent-1 {\n  background-color: #ffd180 !important;\n}\n\n.orange-text.text-accent-1 {\n  color: #ffd180 !important;\n}\n\n.orange.accent-2 {\n  background-color: #ffab40 !important;\n}\n\n.orange-text.text-accent-2 {\n  color: #ffab40 !important;\n}\n\n.orange.accent-3 {\n  background-color: #ff9100 !important;\n}\n\n.orange-text.text-accent-3 {\n  color: #ff9100 !important;\n}\n\n.orange.accent-4 {\n  background-color: #ff6d00 !important;\n}\n\n.orange-text.text-accent-4 {\n  color: #ff6d00 !important;\n}\n\n.deep-orange {\n  background-color: #ff5722 !important;\n}\n\n.deep-orange-text {\n  color: #ff5722 !important;\n}\n\n.deep-orange.lighten-5 {\n  background-color: #fbe9e7 !important;\n}\n\n.deep-orange-text.text-lighten-5 {\n  color: #fbe9e7 !important;\n}\n\n.deep-orange.lighten-4 {\n  background-color: #ffccbc !important;\n}\n\n.deep-orange-text.text-lighten-4 {\n  color: #ffccbc !important;\n}\n\n.deep-orange.lighten-3 {\n  background-color: #ffab91 !important;\n}\n\n.deep-orange-text.text-lighten-3 {\n  color: #ffab91 !important;\n}\n\n.deep-orange.lighten-2 {\n  background-color: #ff8a65 !important;\n}\n\n.deep-orange-text.text-lighten-2 {\n  color: #ff8a65 !important;\n}\n\n.deep-orange.lighten-1 {\n  background-color: #ff7043 !important;\n}\n\n.deep-orange-text.text-lighten-1 {\n  color: #ff7043 !important;\n}\n\n.deep-orange.darken-1 {\n  background-color: #f4511e !important;\n}\n\n.deep-orange-text.text-darken-1 {\n  color: #f4511e !important;\n}\n\n.deep-orange.darken-2 {\n  background-color: #e64a19 !important;\n}\n\n.deep-orange-text.text-darken-2 {\n  color: #e64a19 !important;\n}\n\n.deep-orange.darken-3 {\n  background-color: #d84315 !important;\n}\n\n.deep-orange-text.text-darken-3 {\n  color: #d84315 !important;\n}\n\n.deep-orange.darken-4 {\n  background-color: #bf360c !important;\n}\n\n.deep-orange-text.text-darken-4 {\n  color: #bf360c !important;\n}\n\n.deep-orange.accent-1 {\n  background-color: #ff9e80 !important;\n}\n\n.deep-orange-text.text-accent-1 {\n  color: #ff9e80 !important;\n}\n\n.deep-orange.accent-2 {\n  background-color: #ff6e40 !important;\n}\n\n.deep-orange-text.text-accent-2 {\n  color: #ff6e40 !important;\n}\n\n.deep-orange.accent-3 {\n  background-color: #ff3d00 !important;\n}\n\n.deep-orange-text.text-accent-3 {\n  color: #ff3d00 !important;\n}\n\n.deep-orange.accent-4 {\n  background-color: #dd2c00 !important;\n}\n\n.deep-orange-text.text-accent-4 {\n  color: #dd2c00 !important;\n}\n\n.brown {\n  background-color: #795548 !important;\n}\n\n.brown-text {\n  color: #795548 !important;\n}\n\n.brown.lighten-5 {\n  background-color: #efebe9 !important;\n}\n\n.brown-text.text-lighten-5 {\n  color: #efebe9 !important;\n}\n\n.brown.lighten-4 {\n  background-color: #d7ccc8 !important;\n}\n\n.brown-text.text-lighten-4 {\n  color: #d7ccc8 !important;\n}\n\n.brown.lighten-3 {\n  background-color: #bcaaa4 !important;\n}\n\n.brown-text.text-lighten-3 {\n  color: #bcaaa4 !important;\n}\n\n.brown.lighten-2 {\n  background-color: #a1887f !important;\n}\n\n.brown-text.text-lighten-2 {\n  color: #a1887f !important;\n}\n\n.brown.lighten-1 {\n  background-color: #8d6e63 !important;\n}\n\n.brown-text.text-lighten-1 {\n  color: #8d6e63 !important;\n}\n\n.brown.darken-1 {\n  background-color: #6d4c41 !important;\n}\n\n.brown-text.text-darken-1 {\n  color: #6d4c41 !important;\n}\n\n.brown.darken-2 {\n  background-color: #5d4037 !important;\n}\n\n.brown-text.text-darken-2 {\n  color: #5d4037 !important;\n}\n\n.brown.darken-3 {\n  background-color: #4e342e !important;\n}\n\n.brown-text.text-darken-3 {\n  color: #4e342e !important;\n}\n\n.brown.darken-4 {\n  background-color: #3e2723 !important;\n}\n\n.brown-text.text-darken-4 {\n  color: #3e2723 !important;\n}\n\n.blue-grey {\n  background-color: #607d8b !important;\n}\n\n.blue-grey-text {\n  color: #607d8b !important;\n}\n\n.blue-grey.lighten-5 {\n  background-color: #eceff1 !important;\n}\n\n.blue-grey-text.text-lighten-5 {\n  color: #eceff1 !important;\n}\n\n.blue-grey.lighten-4 {\n  background-color: #cfd8dc !important;\n}\n\n.blue-grey-text.text-lighten-4 {\n  color: #cfd8dc !important;\n}\n\n.blue-grey.lighten-3 {\n  background-color: #b0bec5 !important;\n}\n\n.blue-grey-text.text-lighten-3 {\n  color: #b0bec5 !important;\n}\n\n.blue-grey.lighten-2 {\n  background-color: #90a4ae !important;\n}\n\n.blue-grey-text.text-lighten-2 {\n  color: #90a4ae !important;\n}\n\n.blue-grey.lighten-1 {\n  background-color: #78909c !important;\n}\n\n.blue-grey-text.text-lighten-1 {\n  color: #78909c !important;\n}\n\n.blue-grey.darken-1 {\n  background-color: #546e7a !important;\n}\n\n.blue-grey-text.text-darken-1 {\n  color: #546e7a !important;\n}\n\n.blue-grey.darken-2 {\n  background-color: #455a64 !important;\n}\n\n.blue-grey-text.text-darken-2 {\n  color: #455a64 !important;\n}\n\n.blue-grey.darken-3 {\n  background-color: #37474f !important;\n}\n\n.blue-grey-text.text-darken-3 {\n  color: #37474f !important;\n}\n\n.blue-grey.darken-4 {\n  background-color: #263238 !important;\n}\n\n.blue-grey-text.text-darken-4 {\n  color: #263238 !important;\n}\n\n.grey {\n  background-color: #9e9e9e !important;\n}\n\n.grey-text {\n  color: #9e9e9e !important;\n}\n\n.grey.lighten-5 {\n  background-color: #fafafa !important;\n}\n\n.grey-text.text-lighten-5 {\n  color: #fafafa !important;\n}\n\n.grey.lighten-4 {\n  background-color: #f5f5f5 !important;\n}\n\n.grey-text.text-lighten-4 {\n  color: #f5f5f5 !important;\n}\n\n.grey.lighten-3 {\n  background-color: #eeeeee !important;\n}\n\n.grey-text.text-lighten-3 {\n  color: #eeeeee !important;\n}\n\n.grey.lighten-2 {\n  background-color: #e0e0e0 !important;\n}\n\n.grey-text.text-lighten-2 {\n  color: #e0e0e0 !important;\n}\n\n.grey.lighten-1 {\n  background-color: #bdbdbd !important;\n}\n\n.grey-text.text-lighten-1 {\n  color: #bdbdbd !important;\n}\n\n.grey.darken-1 {\n  background-color: #757575 !important;\n}\n\n.grey-text.text-darken-1 {\n  color: #757575 !important;\n}\n\n.grey.darken-2 {\n  background-color: #616161 !important;\n}\n\n.grey-text.text-darken-2 {\n  color: #616161 !important;\n}\n\n.grey.darken-3 {\n  background-color: #424242 !important;\n}\n\n.grey-text.text-darken-3 {\n  color: #424242 !important;\n}\n\n.grey.darken-4 {\n  background-color: #212121 !important;\n}\n\n.grey-text.text-darken-4 {\n  color: #212121 !important;\n}\n\n.black {\n  background-color: #000000 !important;\n}\n\n.black-text {\n  color: #000000 !important;\n}\n\n.white {\n  background-color: #FFFFFF !important;\n}\n\n.white-text {\n  color: #FFFFFF !important;\n}\n\n.transparent {\n  background-color: transparent !important;\n}\n\n.transparent-text {\n  color: transparent !important;\n}\n\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n     -moz-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n}\n\nul:not(.browser-default) {\n  padding-left: 0;\n  list-style-type: none;\n}\n\nul:not(.browser-default) > li {\n  list-style-type: none;\n}\n\na {\n  color: #039be5;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.valign-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.clearfix {\n  clear: both;\n}\n\n.z-depth-0 {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n\n/* 2dp elevation modified*/\n.z-depth-1, nav, .card-panel, .card, .toast, .btn, .btn-large, .btn-small, .btn-floating, .dropdown-content, .collapsible, .sidenav {\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n\n.z-depth-1-half, .btn:hover, .btn-large:hover, .btn-small:hover, .btn-floating:hover {\n  -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\n}\n\n/* 6dp elevation modified*/\n.z-depth-2 {\n  -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n}\n\n/* 12dp elevation modified*/\n.z-depth-3 {\n  -webkit-box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n}\n\n/* 16dp elevation */\n.z-depth-4 {\n  -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);\n}\n\n/* 24dp elevation */\n.z-depth-5, .modal {\n  -webkit-box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);\n}\n\n.hoverable {\n  -webkit-transition: -webkit-box-shadow .25s;\n  transition: -webkit-box-shadow .25s;\n  transition: box-shadow .25s;\n  transition: box-shadow .25s, -webkit-box-shadow .25s;\n}\n\n.hoverable:hover {\n  -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.divider {\n  height: 1px;\n  overflow: hidden;\n  background-color: #e0e0e0;\n}\n\nblockquote {\n  margin: 20px 0;\n  padding-left: 1.5rem;\n  border-left: 5px solid #ee6e73;\n}\n\ni {\n  line-height: inherit;\n}\n\ni.left {\n  float: left;\n  margin-right: 15px;\n}\n\ni.right {\n  float: right;\n  margin-left: 15px;\n}\n\ni.tiny {\n  font-size: 1rem;\n}\n\ni.small {\n  font-size: 2rem;\n}\n\ni.medium {\n  font-size: 4rem;\n}\n\ni.large {\n  font-size: 6rem;\n}\n\nimg.responsive-img,\nvideo.responsive-video {\n  max-width: 100%;\n  height: auto;\n}\n\n.pagination li {\n  display: inline-block;\n  border-radius: 2px;\n  text-align: center;\n  vertical-align: top;\n  height: 30px;\n}\n\n.pagination li a {\n  color: #444;\n  display: inline-block;\n  font-size: 1.2rem;\n  padding: 0 10px;\n  line-height: 30px;\n}\n\n.pagination li.active a {\n  color: #fff;\n}\n\n.pagination li.active {\n  background-color: #ee6e73;\n}\n\n.pagination li.disabled a {\n  cursor: default;\n  color: #999;\n}\n\n.pagination li i {\n  font-size: 2rem;\n}\n\n.pagination li.pages ul li {\n  display: inline-block;\n  float: none;\n}\n\n@media only screen and (max-width: 992px) {\n  .pagination {\n    width: 100%;\n  }\n  .pagination li.prev,\n  .pagination li.next {\n    width: 10%;\n  }\n  .pagination li.pages {\n    width: 80%;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n\n.breadcrumb {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.breadcrumb i,\n.breadcrumb [class^=\"mdi-\"], .breadcrumb [class*=\"mdi-\"],\n.breadcrumb i.material-icons {\n  display: inline-block;\n  float: left;\n  font-size: 24px;\n}\n\n.breadcrumb:before {\n  content: '\\E5CC';\n  color: rgba(255, 255, 255, 0.7);\n  vertical-align: top;\n  display: inline-block;\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 25px;\n  margin: 0 10px 0 8px;\n  -webkit-font-smoothing: antialiased;\n}\n\n.breadcrumb:first-child:before {\n  display: none;\n}\n\n.breadcrumb:last-child {\n  color: #fff;\n}\n\n.parallax-container {\n  position: relative;\n  overflow: hidden;\n  height: 500px;\n}\n\n.parallax-container .parallax {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\n.parallax-container .parallax img {\n  opacity: 0;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n.pin-top, .pin-bottom {\n  position: relative;\n}\n\n.pinned {\n  position: fixed !important;\n}\n\n/*********************\n  Transition Classes\n**********************/\nul.staggered-list li {\n  opacity: 0;\n}\n\n.fade-in {\n  opacity: 0;\n  -webkit-transform-origin: 0 50%;\n          transform-origin: 0 50%;\n}\n\n/*********************\n  Media Query Classes\n**********************/\n@media only screen and (max-width: 600px) {\n  .hide-on-small-only, .hide-on-small-and-down {\n    display: none !important;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .hide-on-med-and-down {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  .hide-on-med-and-up {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .hide-on-med-only {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .hide-on-large-only {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 1201px) {\n  .hide-on-extra-large-only {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 1201px) {\n  .show-on-extra-large {\n    display: block !important;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .show-on-large {\n    display: block !important;\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .show-on-medium {\n    display: block !important;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .show-on-small {\n    display: block !important;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  .show-on-medium-and-up {\n    display: block !important;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .show-on-medium-and-down {\n    display: block !important;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .center-on-small-only {\n    text-align: center;\n  }\n}\n\n.page-footer {\n  padding-top: 20px;\n  color: #fff;\n  background-color: #ee6e73;\n}\n\n.page-footer .footer-copyright {\n  overflow: hidden;\n  min-height: 50px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 10px 0px;\n  color: rgba(255, 255, 255, 0.8);\n  background-color: rgba(51, 51, 51, 0.08);\n}\n\ntable, th, td {\n  border: none;\n}\n\ntable {\n  width: 100%;\n  display: table;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntable.striped tr {\n  border-bottom: none;\n}\n\ntable.striped > tbody > tr:nth-child(odd) {\n  background-color: rgba(242, 242, 242, 0.5);\n}\n\ntable.striped > tbody > tr > td {\n  border-radius: 0;\n}\n\ntable.highlight > tbody > tr {\n  -webkit-transition: background-color .25s ease;\n  transition: background-color .25s ease;\n}\n\ntable.highlight > tbody > tr:hover {\n  background-color: rgba(242, 242, 242, 0.5);\n}\n\ntable.centered thead tr th, table.centered tbody tr td {\n  text-align: center;\n}\n\ntr {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\ntd, th {\n  padding: 15px 5px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: middle;\n  border-radius: 2px;\n}\n\n@media only screen and (max-width: 992px) {\n  table.responsive-table {\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: block;\n    position: relative;\n    /* sort out borders */\n  }\n  table.responsive-table td:empty:before {\n    content: '\\00a0';\n  }\n  table.responsive-table th,\n  table.responsive-table td {\n    margin: 0;\n    vertical-align: top;\n  }\n  table.responsive-table th {\n    text-align: left;\n  }\n  table.responsive-table thead {\n    display: block;\n    float: left;\n  }\n  table.responsive-table thead tr {\n    display: block;\n    padding: 0 10px 0 0;\n  }\n  table.responsive-table thead tr th::before {\n    content: \"\\00a0\";\n  }\n  table.responsive-table tbody {\n    display: block;\n    width: auto;\n    position: relative;\n    overflow-x: auto;\n    white-space: nowrap;\n  }\n  table.responsive-table tbody tr {\n    display: inline-block;\n    vertical-align: top;\n  }\n  table.responsive-table th {\n    display: block;\n    text-align: right;\n  }\n  table.responsive-table td {\n    display: block;\n    min-height: 1.25em;\n    text-align: left;\n  }\n  table.responsive-table tr {\n    border-bottom: none;\n    padding: 0 10px;\n  }\n  table.responsive-table thead {\n    border: 0;\n    border-right: 1px solid rgba(0, 0, 0, 0.12);\n  }\n}\n\n.collection {\n  margin: 0.5rem 0 1rem 0;\n  border: 1px solid #e0e0e0;\n  border-radius: 2px;\n  overflow: hidden;\n  position: relative;\n}\n\n.collection .collection-item {\n  background-color: #fff;\n  line-height: 1.5rem;\n  padding: 10px 20px;\n  margin: 0;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.collection .collection-item.avatar {\n  min-height: 84px;\n  padding-left: 72px;\n  position: relative;\n}\n\n.collection .collection-item.avatar:not(.circle-clipper) > .circle,\n.collection .collection-item.avatar :not(.circle-clipper) > .circle {\n  position: absolute;\n  width: 42px;\n  height: 42px;\n  overflow: hidden;\n  left: 15px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.collection .collection-item.avatar i.circle {\n  font-size: 18px;\n  line-height: 42px;\n  color: #fff;\n  background-color: #999;\n  text-align: center;\n}\n\n.collection .collection-item.avatar .title {\n  font-size: 16px;\n}\n\n.collection .collection-item.avatar p {\n  margin: 0;\n}\n\n.collection .collection-item.avatar .secondary-content {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n\n.collection .collection-item:last-child {\n  border-bottom: none;\n}\n\n.collection .collection-item.active {\n  background-color: #26a69a;\n  color: #eafaf9;\n}\n\n.collection .collection-item.active .secondary-content {\n  color: #fff;\n}\n\n.collection a.collection-item {\n  display: block;\n  -webkit-transition: .25s;\n  transition: .25s;\n  color: #26a69a;\n}\n\n.collection a.collection-item:not(.active):hover {\n  background-color: #ddd;\n}\n\n.collection.with-header .collection-header {\n  background-color: #fff;\n  border-bottom: 1px solid #e0e0e0;\n  padding: 10px 20px;\n}\n\n.collection.with-header .collection-item {\n  padding-left: 30px;\n}\n\n.collection.with-header .collection-item.avatar {\n  padding-left: 72px;\n}\n\n.secondary-content {\n  float: right;\n  color: #26a69a;\n}\n\n.collapsible .collection {\n  margin: 0;\n  border: none;\n}\n\n.video-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden;\n}\n\n.video-container iframe, .video-container object, .video-container embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.progress {\n  position: relative;\n  height: 4px;\n  display: block;\n  width: 100%;\n  background-color: #acece6;\n  border-radius: 2px;\n  margin: 0.5rem 0 1rem 0;\n  overflow: hidden;\n}\n\n.progress .determinate {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #26a69a;\n  -webkit-transition: width .3s linear;\n  transition: width .3s linear;\n}\n\n.progress .indeterminate {\n  background-color: #26a69a;\n}\n\n.progress .indeterminate:before {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n          animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n\n.progress .indeterminate:after {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n          animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  -webkit-animation-delay: 1.15s;\n          animation-delay: 1.15s;\n}\n\n@-webkit-keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n\n@keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n\n@-webkit-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n\n@keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n\n/*******************\n  Utility Classes\n*******************/\n.hide {\n  display: none !important;\n}\n\n.left-align {\n  text-align: left;\n}\n\n.right-align {\n  text-align: right;\n}\n\n.center, .center-align {\n  text-align: center;\n}\n\n.left {\n  float: left !important;\n}\n\n.right {\n  float: right !important;\n}\n\n.no-select, input[type=range],\ninput[type=range] + .thumb {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.circle {\n  border-radius: 50%;\n}\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.truncate {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.no-padding {\n  padding: 0 !important;\n}\n\nspan.badge {\n  min-width: 3rem;\n  padding: 0 6px;\n  margin-left: 14px;\n  text-align: center;\n  font-size: 1rem;\n  line-height: 22px;\n  height: 22px;\n  color: #757575;\n  float: right;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nspan.badge.new {\n  font-weight: 300;\n  font-size: 0.8rem;\n  color: #fff;\n  background-color: #26a69a;\n  border-radius: 2px;\n}\n\nspan.badge.new:after {\n  content: \" new\";\n}\n\nspan.badge[data-badge-caption]::after {\n  content: \" \" attr(data-badge-caption);\n}\n\nnav ul a span.badge {\n  display: inline-block;\n  float: none;\n  margin-left: 4px;\n  line-height: 22px;\n  height: 22px;\n  -webkit-font-smoothing: auto;\n}\n\n.collection-item span.badge {\n  margin-top: calc(0.75rem - 11px);\n}\n\n.collapsible span.badge {\n  margin-left: auto;\n}\n\n.sidenav span.badge {\n  margin-top: calc(24px - 11px);\n}\n\ntable span.badge {\n  display: inline-block;\n  float: none;\n  margin-left: auto;\n}\n\n/* This is needed for some mobile phones to display the Google Icon font properly */\n.material-icons {\n  text-rendering: optimizeLegibility;\n  -webkit-font-feature-settings: 'liga';\n     -moz-font-feature-settings: 'liga';\n          font-feature-settings: 'liga';\n}\n\n.container {\n  margin: 0 auto;\n  max-width: 1280px;\n  width: 90%;\n}\n\n@media only screen and (min-width: 601px) {\n  .container {\n    width: 85%;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .container {\n    width: 70%;\n  }\n}\n\n.col .row {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n}\n\n.section {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.section.no-pad {\n  padding: 0;\n}\n\n.section.no-pad-bot {\n  padding-bottom: 0;\n}\n\n.section.no-pad-top {\n  padding-top: 0;\n}\n\n.row {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row .col {\n  float: left;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0 0.75rem;\n  min-height: 1px;\n}\n\n.row .col[class*=\"push-\"], .row .col[class*=\"pull-\"] {\n  position: relative;\n}\n\n.row .col.s1 {\n  width: 8.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s2 {\n  width: 16.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s3 {\n  width: 25%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s4 {\n  width: 33.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s5 {\n  width: 41.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s6 {\n  width: 50%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s7 {\n  width: 58.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s8 {\n  width: 66.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s9 {\n  width: 75%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s10 {\n  width: 83.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s11 {\n  width: 91.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s12 {\n  width: 100%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.offset-s1 {\n  margin-left: 8.3333333333%;\n}\n\n.row .col.pull-s1 {\n  right: 8.3333333333%;\n}\n\n.row .col.push-s1 {\n  left: 8.3333333333%;\n}\n\n.row .col.offset-s2 {\n  margin-left: 16.6666666667%;\n}\n\n.row .col.pull-s2 {\n  right: 16.6666666667%;\n}\n\n.row .col.push-s2 {\n  left: 16.6666666667%;\n}\n\n.row .col.offset-s3 {\n  margin-left: 25%;\n}\n\n.row .col.pull-s3 {\n  right: 25%;\n}\n\n.row .col.push-s3 {\n  left: 25%;\n}\n\n.row .col.offset-s4 {\n  margin-left: 33.3333333333%;\n}\n\n.row .col.pull-s4 {\n  right: 33.3333333333%;\n}\n\n.row .col.push-s4 {\n  left: 33.3333333333%;\n}\n\n.row .col.offset-s5 {\n  margin-left: 41.6666666667%;\n}\n\n.row .col.pull-s5 {\n  right: 41.6666666667%;\n}\n\n.row .col.push-s5 {\n  left: 41.6666666667%;\n}\n\n.row .col.offset-s6 {\n  margin-left: 50%;\n}\n\n.row .col.pull-s6 {\n  right: 50%;\n}\n\n.row .col.push-s6 {\n  left: 50%;\n}\n\n.row .col.offset-s7 {\n  margin-left: 58.3333333333%;\n}\n\n.row .col.pull-s7 {\n  right: 58.3333333333%;\n}\n\n.row .col.push-s7 {\n  left: 58.3333333333%;\n}\n\n.row .col.offset-s8 {\n  margin-left: 66.6666666667%;\n}\n\n.row .col.pull-s8 {\n  right: 66.6666666667%;\n}\n\n.row .col.push-s8 {\n  left: 66.6666666667%;\n}\n\n.row .col.offset-s9 {\n  margin-left: 75%;\n}\n\n.row .col.pull-s9 {\n  right: 75%;\n}\n\n.row .col.push-s9 {\n  left: 75%;\n}\n\n.row .col.offset-s10 {\n  margin-left: 83.3333333333%;\n}\n\n.row .col.pull-s10 {\n  right: 83.3333333333%;\n}\n\n.row .col.push-s10 {\n  left: 83.3333333333%;\n}\n\n.row .col.offset-s11 {\n  margin-left: 91.6666666667%;\n}\n\n.row .col.pull-s11 {\n  right: 91.6666666667%;\n}\n\n.row .col.push-s11 {\n  left: 91.6666666667%;\n}\n\n.row .col.offset-s12 {\n  margin-left: 100%;\n}\n\n.row .col.pull-s12 {\n  right: 100%;\n}\n\n.row .col.push-s12 {\n  left: 100%;\n}\n\n@media only screen and (min-width: 601px) {\n  .row .col.m1 {\n    width: 8.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m2 {\n    width: 16.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m3 {\n    width: 25%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m4 {\n    width: 33.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m5 {\n    width: 41.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m6 {\n    width: 50%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m7 {\n    width: 58.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m8 {\n    width: 66.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m9 {\n    width: 75%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m10 {\n    width: 83.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m11 {\n    width: 91.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m12 {\n    width: 100%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.offset-m1 {\n    margin-left: 8.3333333333%;\n  }\n  .row .col.pull-m1 {\n    right: 8.3333333333%;\n  }\n  .row .col.push-m1 {\n    left: 8.3333333333%;\n  }\n  .row .col.offset-m2 {\n    margin-left: 16.6666666667%;\n  }\n  .row .col.pull-m2 {\n    right: 16.6666666667%;\n  }\n  .row .col.push-m2 {\n    left: 16.6666666667%;\n  }\n  .row .col.offset-m3 {\n    margin-left: 25%;\n  }\n  .row .col.pull-m3 {\n    right: 25%;\n  }\n  .row .col.push-m3 {\n    left: 25%;\n  }\n  .row .col.offset-m4 {\n    margin-left: 33.3333333333%;\n  }\n  .row .col.pull-m4 {\n    right: 33.3333333333%;\n  }\n  .row .col.push-m4 {\n    left: 33.3333333333%;\n  }\n  .row .col.offset-m5 {\n    margin-left: 41.6666666667%;\n  }\n  .row .col.pull-m5 {\n    right: 41.6666666667%;\n  }\n  .row .col.push-m5 {\n    left: 41.6666666667%;\n  }\n  .row .col.offset-m6 {\n    margin-left: 50%;\n  }\n  .row .col.pull-m6 {\n    right: 50%;\n  }\n  .row .col.push-m6 {\n    left: 50%;\n  }\n  .row .col.offset-m7 {\n    margin-left: 58.3333333333%;\n  }\n  .row .col.pull-m7 {\n    right: 58.3333333333%;\n  }\n  .row .col.push-m7 {\n    left: 58.3333333333%;\n  }\n  .row .col.offset-m8 {\n    margin-left: 66.6666666667%;\n  }\n  .row .col.pull-m8 {\n    right: 66.6666666667%;\n  }\n  .row .col.push-m8 {\n    left: 66.6666666667%;\n  }\n  .row .col.offset-m9 {\n    margin-left: 75%;\n  }\n  .row .col.pull-m9 {\n    right: 75%;\n  }\n  .row .col.push-m9 {\n    left: 75%;\n  }\n  .row .col.offset-m10 {\n    margin-left: 83.3333333333%;\n  }\n  .row .col.pull-m10 {\n    right: 83.3333333333%;\n  }\n  .row .col.push-m10 {\n    left: 83.3333333333%;\n  }\n  .row .col.offset-m11 {\n    margin-left: 91.6666666667%;\n  }\n  .row .col.pull-m11 {\n    right: 91.6666666667%;\n  }\n  .row .col.push-m11 {\n    left: 91.6666666667%;\n  }\n  .row .col.offset-m12 {\n    margin-left: 100%;\n  }\n  .row .col.pull-m12 {\n    right: 100%;\n  }\n  .row .col.push-m12 {\n    left: 100%;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .row .col.l1 {\n    width: 8.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l2 {\n    width: 16.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l3 {\n    width: 25%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l4 {\n    width: 33.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l5 {\n    width: 41.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l6 {\n    width: 50%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l7 {\n    width: 58.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l8 {\n    width: 66.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l9 {\n    width: 75%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l10 {\n    width: 83.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l11 {\n    width: 91.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l12 {\n    width: 100%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.offset-l1 {\n    margin-left: 8.3333333333%;\n  }\n  .row .col.pull-l1 {\n    right: 8.3333333333%;\n  }\n  .row .col.push-l1 {\n    left: 8.3333333333%;\n  }\n  .row .col.offset-l2 {\n    margin-left: 16.6666666667%;\n  }\n  .row .col.pull-l2 {\n    right: 16.6666666667%;\n  }\n  .row .col.push-l2 {\n    left: 16.6666666667%;\n  }\n  .row .col.offset-l3 {\n    margin-left: 25%;\n  }\n  .row .col.pull-l3 {\n    right: 25%;\n  }\n  .row .col.push-l3 {\n    left: 25%;\n  }\n  .row .col.offset-l4 {\n    margin-left: 33.3333333333%;\n  }\n  .row .col.pull-l4 {\n    right: 33.3333333333%;\n  }\n  .row .col.push-l4 {\n    left: 33.3333333333%;\n  }\n  .row .col.offset-l5 {\n    margin-left: 41.6666666667%;\n  }\n  .row .col.pull-l5 {\n    right: 41.6666666667%;\n  }\n  .row .col.push-l5 {\n    left: 41.6666666667%;\n  }\n  .row .col.offset-l6 {\n    margin-left: 50%;\n  }\n  .row .col.pull-l6 {\n    right: 50%;\n  }\n  .row .col.push-l6 {\n    left: 50%;\n  }\n  .row .col.offset-l7 {\n    margin-left: 58.3333333333%;\n  }\n  .row .col.pull-l7 {\n    right: 58.3333333333%;\n  }\n  .row .col.push-l7 {\n    left: 58.3333333333%;\n  }\n  .row .col.offset-l8 {\n    margin-left: 66.6666666667%;\n  }\n  .row .col.pull-l8 {\n    right: 66.6666666667%;\n  }\n  .row .col.push-l8 {\n    left: 66.6666666667%;\n  }\n  .row .col.offset-l9 {\n    margin-left: 75%;\n  }\n  .row .col.pull-l9 {\n    right: 75%;\n  }\n  .row .col.push-l9 {\n    left: 75%;\n  }\n  .row .col.offset-l10 {\n    margin-left: 83.3333333333%;\n  }\n  .row .col.pull-l10 {\n    right: 83.3333333333%;\n  }\n  .row .col.push-l10 {\n    left: 83.3333333333%;\n  }\n  .row .col.offset-l11 {\n    margin-left: 91.6666666667%;\n  }\n  .row .col.pull-l11 {\n    right: 91.6666666667%;\n  }\n  .row .col.push-l11 {\n    left: 91.6666666667%;\n  }\n  .row .col.offset-l12 {\n    margin-left: 100%;\n  }\n  .row .col.pull-l12 {\n    right: 100%;\n  }\n  .row .col.push-l12 {\n    left: 100%;\n  }\n}\n\n@media only screen and (min-width: 1201px) {\n  .row .col.xl1 {\n    width: 8.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl2 {\n    width: 16.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl3 {\n    width: 25%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl4 {\n    width: 33.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl5 {\n    width: 41.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl6 {\n    width: 50%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl7 {\n    width: 58.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl8 {\n    width: 66.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl9 {\n    width: 75%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl10 {\n    width: 83.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl11 {\n    width: 91.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl12 {\n    width: 100%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.offset-xl1 {\n    margin-left: 8.3333333333%;\n  }\n  .row .col.pull-xl1 {\n    right: 8.3333333333%;\n  }\n  .row .col.push-xl1 {\n    left: 8.3333333333%;\n  }\n  .row .col.offset-xl2 {\n    margin-left: 16.6666666667%;\n  }\n  .row .col.pull-xl2 {\n    right: 16.6666666667%;\n  }\n  .row .col.push-xl2 {\n    left: 16.6666666667%;\n  }\n  .row .col.offset-xl3 {\n    margin-left: 25%;\n  }\n  .row .col.pull-xl3 {\n    right: 25%;\n  }\n  .row .col.push-xl3 {\n    left: 25%;\n  }\n  .row .col.offset-xl4 {\n    margin-left: 33.3333333333%;\n  }\n  .row .col.pull-xl4 {\n    right: 33.3333333333%;\n  }\n  .row .col.push-xl4 {\n    left: 33.3333333333%;\n  }\n  .row .col.offset-xl5 {\n    margin-left: 41.6666666667%;\n  }\n  .row .col.pull-xl5 {\n    right: 41.6666666667%;\n  }\n  .row .col.push-xl5 {\n    left: 41.6666666667%;\n  }\n  .row .col.offset-xl6 {\n    margin-left: 50%;\n  }\n  .row .col.pull-xl6 {\n    right: 50%;\n  }\n  .row .col.push-xl6 {\n    left: 50%;\n  }\n  .row .col.offset-xl7 {\n    margin-left: 58.3333333333%;\n  }\n  .row .col.pull-xl7 {\n    right: 58.3333333333%;\n  }\n  .row .col.push-xl7 {\n    left: 58.3333333333%;\n  }\n  .row .col.offset-xl8 {\n    margin-left: 66.6666666667%;\n  }\n  .row .col.pull-xl8 {\n    right: 66.6666666667%;\n  }\n  .row .col.push-xl8 {\n    left: 66.6666666667%;\n  }\n  .row .col.offset-xl9 {\n    margin-left: 75%;\n  }\n  .row .col.pull-xl9 {\n    right: 75%;\n  }\n  .row .col.push-xl9 {\n    left: 75%;\n  }\n  .row .col.offset-xl10 {\n    margin-left: 83.3333333333%;\n  }\n  .row .col.pull-xl10 {\n    right: 83.3333333333%;\n  }\n  .row .col.push-xl10 {\n    left: 83.3333333333%;\n  }\n  .row .col.offset-xl11 {\n    margin-left: 91.6666666667%;\n  }\n  .row .col.pull-xl11 {\n    right: 91.6666666667%;\n  }\n  .row .col.push-xl11 {\n    left: 91.6666666667%;\n  }\n  .row .col.offset-xl12 {\n    margin-left: 100%;\n  }\n  .row .col.pull-xl12 {\n    right: 100%;\n  }\n  .row .col.push-xl12 {\n    left: 100%;\n  }\n}\n\nnav {\n  color: #fff;\n  background-color: #ee6e73;\n  width: 100%;\n  height: 56px;\n  line-height: 56px;\n}\n\nnav.nav-extended {\n  height: auto;\n}\n\nnav.nav-extended .nav-wrapper {\n  min-height: 56px;\n  height: auto;\n}\n\nnav.nav-extended .nav-content {\n  position: relative;\n  line-height: normal;\n}\n\nnav a {\n  color: #fff;\n}\n\nnav i,\nnav [class^=\"mdi-\"], nav [class*=\"mdi-\"],\nnav i.material-icons {\n  display: block;\n  font-size: 24px;\n  height: 56px;\n  line-height: 56px;\n}\n\nnav .nav-wrapper {\n  position: relative;\n  height: 100%;\n}\n\n@media only screen and (min-width: 993px) {\n  nav a.sidenav-trigger {\n    display: none;\n  }\n}\n\nnav .sidenav-trigger {\n  float: left;\n  position: relative;\n  z-index: 1;\n  height: 56px;\n  margin: 0 18px;\n}\n\nnav .sidenav-trigger i {\n  height: 56px;\n  line-height: 56px;\n}\n\nnav .brand-logo {\n  position: absolute;\n  color: #fff;\n  display: inline-block;\n  font-size: 2.1rem;\n  padding: 0;\n}\n\nnav .brand-logo.center {\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n@media only screen and (max-width: 992px) {\n  nav .brand-logo {\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n  }\n  nav .brand-logo.left, nav .brand-logo.right {\n    padding: 0;\n    -webkit-transform: none;\n            transform: none;\n  }\n  nav .brand-logo.left {\n    left: 0.5rem;\n  }\n  nav .brand-logo.right {\n    right: 0.5rem;\n    left: auto;\n  }\n}\n\nnav .brand-logo.right {\n  right: 0.5rem;\n  padding: 0;\n}\n\nnav .brand-logo i,\nnav .brand-logo [class^=\"mdi-\"], nav .brand-logo [class*=\"mdi-\"],\nnav .brand-logo i.material-icons {\n  float: left;\n  margin-right: 15px;\n}\n\nnav .nav-title {\n  display: inline-block;\n  font-size: 32px;\n  padding: 28px 0;\n}\n\nnav ul {\n  margin: 0;\n}\n\nnav ul li {\n  -webkit-transition: background-color .3s;\n  transition: background-color .3s;\n  float: left;\n  padding: 0;\n}\n\nnav ul li.active {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\nnav ul a {\n  -webkit-transition: background-color .3s;\n  transition: background-color .3s;\n  font-size: 1rem;\n  color: #fff;\n  display: block;\n  padding: 0 15px;\n  cursor: pointer;\n}\n\nnav ul a.btn, nav ul a.btn-large, nav ul a.btn-small, nav ul a.btn-large, nav ul a.btn-flat, nav ul a.btn-floating {\n  margin-top: -2px;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\nnav ul a.btn > .material-icons, nav ul a.btn-large > .material-icons, nav ul a.btn-small > .material-icons, nav ul a.btn-large > .material-icons, nav ul a.btn-flat > .material-icons, nav ul a.btn-floating > .material-icons {\n  height: inherit;\n  line-height: inherit;\n}\n\nnav ul a:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\nnav ul.left {\n  float: left;\n}\n\nnav form {\n  height: 100%;\n}\n\nnav .input-field {\n  margin: 0;\n  height: 100%;\n}\n\nnav .input-field input {\n  height: 100%;\n  font-size: 1.2rem;\n  border: none;\n  padding-left: 2rem;\n}\n\nnav .input-field input:focus, nav .input-field input[type=text]:valid, nav .input-field input[type=password]:valid, nav .input-field input[type=email]:valid, nav .input-field input[type=url]:valid, nav .input-field input[type=date]:valid {\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\nnav .input-field label {\n  top: 0;\n  left: 0;\n}\n\nnav .input-field label i {\n  color: rgba(255, 255, 255, 0.7);\n  -webkit-transition: color .3s;\n  transition: color .3s;\n}\n\nnav .input-field label.active i {\n  color: #fff;\n}\n\n.navbar-fixed {\n  position: relative;\n  height: 56px;\n  z-index: 997;\n}\n\n.navbar-fixed nav {\n  position: fixed;\n}\n\n@media only screen and (min-width: 601px) {\n  nav.nav-extended .nav-wrapper {\n    min-height: 64px;\n  }\n  nav, nav .nav-wrapper i, nav a.sidenav-trigger, nav a.sidenav-trigger i {\n    height: 64px;\n    line-height: 64px;\n  }\n  .navbar-fixed {\n    height: 64px;\n  }\n}\n\na {\n  text-decoration: none;\n}\n\nhtml {\n  line-height: 1.5;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n  font-weight: normal;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n@media only screen and (min-width: 0) {\n  html {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  html {\n    font-size: 14.5px;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  html {\n    font-size: 15px;\n  }\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 400;\n  line-height: 1.3;\n}\n\nh1 a, h2 a, h3 a, h4 a, h5 a, h6 a {\n  font-weight: inherit;\n}\n\nh1 {\n  font-size: 4.2rem;\n  line-height: 110%;\n  margin: 2.8rem 0 1.68rem 0;\n}\n\nh2 {\n  font-size: 3.56rem;\n  line-height: 110%;\n  margin: 2.3733333333rem 0 1.424rem 0;\n}\n\nh3 {\n  font-size: 2.92rem;\n  line-height: 110%;\n  margin: 1.9466666667rem 0 1.168rem 0;\n}\n\nh4 {\n  font-size: 2.28rem;\n  line-height: 110%;\n  margin: 1.52rem 0 0.912rem 0;\n}\n\nh5 {\n  font-size: 1.64rem;\n  line-height: 110%;\n  margin: 1.0933333333rem 0 0.656rem 0;\n}\n\nh6 {\n  font-size: 1.15rem;\n  line-height: 110%;\n  margin: 0.7666666667rem 0 0.46rem 0;\n}\n\nem {\n  font-style: italic;\n}\n\nstrong {\n  font-weight: 500;\n}\n\nsmall {\n  font-size: 75%;\n}\n\n.light {\n  font-weight: 300;\n}\n\n.thin {\n  font-weight: 200;\n}\n\n@media only screen and (min-width: 360px) {\n  .flow-text {\n    font-size: 1.2rem;\n  }\n}\n\n@media only screen and (min-width: 390px) {\n  .flow-text {\n    font-size: 1.224rem;\n  }\n}\n\n@media only screen and (min-width: 420px) {\n  .flow-text {\n    font-size: 1.248rem;\n  }\n}\n\n@media only screen and (min-width: 450px) {\n  .flow-text {\n    font-size: 1.272rem;\n  }\n}\n\n@media only screen and (min-width: 480px) {\n  .flow-text {\n    font-size: 1.296rem;\n  }\n}\n\n@media only screen and (min-width: 510px) {\n  .flow-text {\n    font-size: 1.32rem;\n  }\n}\n\n@media only screen and (min-width: 540px) {\n  .flow-text {\n    font-size: 1.344rem;\n  }\n}\n\n@media only screen and (min-width: 570px) {\n  .flow-text {\n    font-size: 1.368rem;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .flow-text {\n    font-size: 1.392rem;\n  }\n}\n\n@media only screen and (min-width: 630px) {\n  .flow-text {\n    font-size: 1.416rem;\n  }\n}\n\n@media only screen and (min-width: 660px) {\n  .flow-text {\n    font-size: 1.44rem;\n  }\n}\n\n@media only screen and (min-width: 690px) {\n  .flow-text {\n    font-size: 1.464rem;\n  }\n}\n\n@media only screen and (min-width: 720px) {\n  .flow-text {\n    font-size: 1.488rem;\n  }\n}\n\n@media only screen and (min-width: 750px) {\n  .flow-text {\n    font-size: 1.512rem;\n  }\n}\n\n@media only screen and (min-width: 780px) {\n  .flow-text {\n    font-size: 1.536rem;\n  }\n}\n\n@media only screen and (min-width: 810px) {\n  .flow-text {\n    font-size: 1.56rem;\n  }\n}\n\n@media only screen and (min-width: 840px) {\n  .flow-text {\n    font-size: 1.584rem;\n  }\n}\n\n@media only screen and (min-width: 870px) {\n  .flow-text {\n    font-size: 1.608rem;\n  }\n}\n\n@media only screen and (min-width: 900px) {\n  .flow-text {\n    font-size: 1.632rem;\n  }\n}\n\n@media only screen and (min-width: 930px) {\n  .flow-text {\n    font-size: 1.656rem;\n  }\n}\n\n@media only screen and (min-width: 960px) {\n  .flow-text {\n    font-size: 1.68rem;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .flow-text {\n    font-size: 1.2rem;\n  }\n}\n\n.scale-transition {\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\n  transition: -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\n  transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\n  transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63), -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\n}\n\n.scale-transition.scale-out {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: -webkit-transform .2s !important;\n  transition: -webkit-transform .2s !important;\n  transition: transform .2s !important;\n  transition: transform .2s, -webkit-transform .2s !important;\n}\n\n.scale-transition.scale-in {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.card-panel {\n  -webkit-transition: -webkit-box-shadow .25s;\n  transition: -webkit-box-shadow .25s;\n  transition: box-shadow .25s;\n  transition: box-shadow .25s, -webkit-box-shadow .25s;\n  padding: 24px;\n  margin: 0.5rem 0 1rem 0;\n  border-radius: 2px;\n  background-color: #fff;\n}\n\n.card {\n  position: relative;\n  margin: 0.5rem 0 1rem 0;\n  background-color: #fff;\n  -webkit-transition: -webkit-box-shadow .25s;\n  transition: -webkit-box-shadow .25s;\n  transition: box-shadow .25s;\n  transition: box-shadow .25s, -webkit-box-shadow .25s;\n  border-radius: 2px;\n}\n\n.card .card-title {\n  font-size: 24px;\n  font-weight: 300;\n}\n\n.card .card-title.activator {\n  cursor: pointer;\n}\n\n.card.small, .card.medium, .card.large {\n  position: relative;\n}\n\n.card.small .card-image, .card.medium .card-image, .card.large .card-image {\n  max-height: 60%;\n  overflow: hidden;\n}\n\n.card.small .card-image + .card-content, .card.medium .card-image + .card-content, .card.large .card-image + .card-content {\n  max-height: 40%;\n}\n\n.card.small .card-content, .card.medium .card-content, .card.large .card-content {\n  max-height: 100%;\n  overflow: hidden;\n}\n\n.card.small .card-action, .card.medium .card-action, .card.large .card-action {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.card.small {\n  height: 300px;\n}\n\n.card.medium {\n  height: 400px;\n}\n\n.card.large {\n  height: 500px;\n}\n\n.card.horizontal {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.card.horizontal.small .card-image, .card.horizontal.medium .card-image, .card.horizontal.large .card-image {\n  height: 100%;\n  max-height: none;\n  overflow: visible;\n}\n\n.card.horizontal.small .card-image img, .card.horizontal.medium .card-image img, .card.horizontal.large .card-image img {\n  height: 100%;\n}\n\n.card.horizontal .card-image {\n  max-width: 50%;\n}\n\n.card.horizontal .card-image img {\n  border-radius: 2px 0 0 2px;\n  max-width: 100%;\n  width: auto;\n}\n\n.card.horizontal .card-stacked {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative;\n}\n\n.card.horizontal .card-stacked .card-content {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.card.sticky-action .card-action {\n  z-index: 2;\n}\n\n.card.sticky-action .card-reveal {\n  z-index: 1;\n  padding-bottom: 64px;\n}\n\n.card .card-image {\n  position: relative;\n}\n\n.card .card-image img {\n  display: block;\n  border-radius: 2px 2px 0 0;\n  position: relative;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n}\n\n.card .card-image .card-title {\n  color: #fff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  max-width: 100%;\n  padding: 24px;\n}\n\n.card .card-content {\n  padding: 24px;\n  border-radius: 0 0 2px 2px;\n}\n\n.card .card-content p {\n  margin: 0;\n}\n\n.card .card-content .card-title {\n  display: block;\n  line-height: 32px;\n  margin-bottom: 8px;\n}\n\n.card .card-content .card-title i {\n  line-height: 32px;\n}\n\n.card .card-action {\n  background-color: inherit;\n  border-top: 1px solid rgba(160, 160, 160, 0.2);\n  position: relative;\n  padding: 16px 24px;\n}\n\n.card .card-action:last-child {\n  border-radius: 0 0 2px 2px;\n}\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating) {\n  color: #ffab40;\n  margin-right: 24px;\n  -webkit-transition: color .3s ease;\n  transition: color .3s ease;\n  text-transform: uppercase;\n}\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating):hover {\n  color: #ffd8a6;\n}\n\n.card .card-reveal {\n  padding: 24px;\n  position: absolute;\n  background-color: #fff;\n  width: 100%;\n  overflow-y: auto;\n  left: 0;\n  top: 100%;\n  height: 100%;\n  z-index: 3;\n  display: none;\n}\n\n.card .card-reveal .card-title {\n  cursor: pointer;\n  display: block;\n}\n\n#toast-container {\n  display: block;\n  position: fixed;\n  z-index: 10000;\n}\n\n@media only screen and (max-width: 600px) {\n  #toast-container {\n    min-width: 100%;\n    bottom: 0%;\n  }\n}\n\n@media only screen and (min-width: 601px) and (max-width: 992px) {\n  #toast-container {\n    left: 5%;\n    bottom: 7%;\n    max-width: 90%;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  #toast-container {\n    top: 10%;\n    right: 7%;\n    max-width: 86%;\n  }\n}\n\n.toast {\n  border-radius: 2px;\n  top: 35px;\n  width: auto;\n  margin-top: 10px;\n  position: relative;\n  max-width: 100%;\n  height: auto;\n  min-height: 48px;\n  line-height: 1.5em;\n  background-color: #323232;\n  padding: 10px 25px;\n  font-size: 1.1rem;\n  font-weight: 300;\n  color: #fff;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  cursor: default;\n}\n\n.toast .toast-action {\n  color: #eeff41;\n  font-weight: 500;\n  margin-right: -25px;\n  margin-left: 3rem;\n}\n\n.toast.rounded {\n  border-radius: 24px;\n}\n\n@media only screen and (max-width: 600px) {\n  .toast {\n    width: 100%;\n    border-radius: 0;\n  }\n}\n\n.tabs {\n  position: relative;\n  overflow-x: auto;\n  overflow-y: hidden;\n  height: 48px;\n  width: 100%;\n  background-color: #fff;\n  margin: 0 auto;\n  white-space: nowrap;\n}\n\n.tabs.tabs-transparent {\n  background-color: transparent;\n}\n\n.tabs.tabs-transparent .tab a,\n.tabs.tabs-transparent .tab.disabled a,\n.tabs.tabs-transparent .tab.disabled a:hover {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.tabs.tabs-transparent .tab a:hover,\n.tabs.tabs-transparent .tab a.active {\n  color: #fff;\n}\n\n.tabs.tabs-transparent .indicator {\n  background-color: #fff;\n}\n\n.tabs.tabs-fixed-width {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.tabs.tabs-fixed-width .tab {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.tabs .tab {\n  display: inline-block;\n  text-align: center;\n  line-height: 48px;\n  height: 48px;\n  padding: 0;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.tabs .tab a {\n  color: rgba(238, 110, 115, 0.7);\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 0 24px;\n  font-size: 14px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-transition: color .28s ease, background-color .28s ease;\n  transition: color .28s ease, background-color .28s ease;\n}\n\n.tabs .tab a:focus, .tabs .tab a:focus.active {\n  background-color: rgba(246, 178, 181, 0.2);\n  outline: none;\n}\n\n.tabs .tab a:hover, .tabs .tab a.active {\n  background-color: transparent;\n  color: #ee6e73;\n}\n\n.tabs .tab.disabled a,\n.tabs .tab.disabled a:hover {\n  color: rgba(238, 110, 115, 0.4);\n  cursor: default;\n}\n\n.tabs .indicator {\n  position: absolute;\n  bottom: 0;\n  height: 2px;\n  background-color: #f6b2b5;\n  will-change: left, right;\n}\n\n@media only screen and (max-width: 992px) {\n  .tabs {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .tabs .tab {\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n  }\n  .tabs .tab a {\n    padding: 0 12px;\n  }\n}\n\n.material-tooltip {\n  padding: 10px 8px;\n  font-size: 1rem;\n  z-index: 2000;\n  background-color: transparent;\n  border-radius: 2px;\n  color: #fff;\n  min-height: 36px;\n  line-height: 120%;\n  opacity: 0;\n  position: absolute;\n  text-align: center;\n  max-width: calc(100% - 4px);\n  overflow: hidden;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  visibility: hidden;\n  background-color: #323232;\n}\n\n.backdrop {\n  position: absolute;\n  opacity: 0;\n  height: 7px;\n  width: 14px;\n  border-radius: 0 0 50% 50%;\n  background-color: #323232;\n  z-index: -1;\n  -webkit-transform-origin: 50% 0%;\n          transform-origin: 50% 0%;\n  visibility: hidden;\n}\n\n.btn, .btn-large, .btn-small,\n.btn-flat {\n  border: none;\n  border-radius: 2px;\n  display: inline-block;\n  height: 36px;\n  line-height: 36px;\n  padding: 0 16px;\n  text-transform: uppercase;\n  vertical-align: middle;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.btn.disabled, .disabled.btn-large, .disabled.btn-small,\n.btn-floating.disabled,\n.btn-large.disabled,\n.btn-small.disabled,\n.btn-flat.disabled,\n.btn:disabled,\n.btn-large:disabled,\n.btn-small:disabled,\n.btn-floating:disabled,\n.btn-large:disabled,\n.btn-small:disabled,\n.btn-flat:disabled,\n.btn[disabled],\n.btn-large[disabled],\n.btn-small[disabled],\n.btn-floating[disabled],\n.btn-large[disabled],\n.btn-small[disabled],\n.btn-flat[disabled] {\n  pointer-events: none;\n  background-color: #DFDFDF !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #9F9F9F !important;\n  cursor: default;\n}\n\n.btn.disabled:hover, .disabled.btn-large:hover, .disabled.btn-small:hover,\n.btn-floating.disabled:hover,\n.btn-large.disabled:hover,\n.btn-small.disabled:hover,\n.btn-flat.disabled:hover,\n.btn:disabled:hover,\n.btn-large:disabled:hover,\n.btn-small:disabled:hover,\n.btn-floating:disabled:hover,\n.btn-large:disabled:hover,\n.btn-small:disabled:hover,\n.btn-flat:disabled:hover,\n.btn[disabled]:hover,\n.btn-large[disabled]:hover,\n.btn-small[disabled]:hover,\n.btn-floating[disabled]:hover,\n.btn-large[disabled]:hover,\n.btn-small[disabled]:hover,\n.btn-flat[disabled]:hover {\n  background-color: #DFDFDF !important;\n  color: #9F9F9F !important;\n}\n\n.btn, .btn-large, .btn-small,\n.btn-floating,\n.btn-large,\n.btn-small,\n.btn-flat {\n  font-size: 14px;\n  outline: 0;\n}\n\n.btn i, .btn-large i, .btn-small i,\n.btn-floating i,\n.btn-large i,\n.btn-small i,\n.btn-flat i {\n  font-size: 1.3rem;\n  line-height: inherit;\n}\n\n.btn:focus, .btn-large:focus, .btn-small:focus,\n.btn-floating:focus {\n  background-color: #1d7d74;\n}\n\n.btn, .btn-large, .btn-small {\n  text-decoration: none;\n  color: #fff;\n  background-color: #26a69a;\n  text-align: center;\n  letter-spacing: .5px;\n  -webkit-transition: background-color .2s ease-out;\n  transition: background-color .2s ease-out;\n  cursor: pointer;\n}\n\n.btn:hover, .btn-large:hover, .btn-small:hover {\n  background-color: #2bbbad;\n}\n\n.btn-floating {\n  display: inline-block;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  padding: 0;\n  background-color: #26a69a;\n  border-radius: 50%;\n  -webkit-transition: background-color .3s;\n  transition: background-color .3s;\n  cursor: pointer;\n  vertical-align: middle;\n}\n\n.btn-floating:hover {\n  background-color: #26a69a;\n}\n\n.btn-floating:before {\n  border-radius: 0;\n}\n\n.btn-floating.btn-large {\n  width: 56px;\n  height: 56px;\n  padding: 0;\n}\n\n.btn-floating.btn-large.halfway-fab {\n  bottom: -28px;\n}\n\n.btn-floating.btn-large i {\n  line-height: 56px;\n}\n\n.btn-floating.btn-small {\n  width: 32.4px;\n  height: 32.4px;\n}\n\n.btn-floating.btn-small.halfway-fab {\n  bottom: -16.2px;\n}\n\n.btn-floating.btn-small i {\n  line-height: 32.4px;\n}\n\n.btn-floating.halfway-fab {\n  position: absolute;\n  right: 24px;\n  bottom: -20px;\n}\n\n.btn-floating.halfway-fab.left {\n  right: auto;\n  left: 24px;\n}\n\n.btn-floating i {\n  width: inherit;\n  display: inline-block;\n  text-align: center;\n  color: #fff;\n  font-size: 1.6rem;\n  line-height: 40px;\n}\n\nbutton.btn-floating {\n  border: none;\n}\n\n.fixed-action-btn {\n  position: fixed;\n  right: 23px;\n  bottom: 23px;\n  padding-top: 15px;\n  margin-bottom: 0;\n  z-index: 997;\n}\n\n.fixed-action-btn.active ul {\n  visibility: visible;\n}\n\n.fixed-action-btn.direction-left, .fixed-action-btn.direction-right {\n  padding: 0 0 0 15px;\n}\n\n.fixed-action-btn.direction-left ul, .fixed-action-btn.direction-right ul {\n  text-align: right;\n  right: 64px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  height: 100%;\n  left: auto;\n  /*width 100% only goes to width of button container */\n  width: 500px;\n}\n\n.fixed-action-btn.direction-left ul li, .fixed-action-btn.direction-right ul li {\n  display: inline-block;\n  margin: 7.5px 15px 0 0;\n}\n\n.fixed-action-btn.direction-right {\n  padding: 0 15px 0 0;\n}\n\n.fixed-action-btn.direction-right ul {\n  text-align: left;\n  direction: rtl;\n  left: 64px;\n  right: auto;\n}\n\n.fixed-action-btn.direction-right ul li {\n  margin: 7.5px 0 0 15px;\n}\n\n.fixed-action-btn.direction-bottom {\n  padding: 0 0 15px 0;\n}\n\n.fixed-action-btn.direction-bottom ul {\n  top: 64px;\n  bottom: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: column-reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n\n.fixed-action-btn.direction-bottom ul li {\n  margin: 15px 0 0 0;\n}\n\n.fixed-action-btn.toolbar {\n  padding: 0;\n  height: 56px;\n}\n\n.fixed-action-btn.toolbar.active > a i {\n  opacity: 0;\n}\n\n.fixed-action-btn.toolbar ul {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n}\n\n.fixed-action-btn.toolbar ul li {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: inline-block;\n  margin: 0;\n  height: 100%;\n  -webkit-transition: none;\n  transition: none;\n}\n\n.fixed-action-btn.toolbar ul li a {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n  line-height: 56px;\n  z-index: 1;\n}\n\n.fixed-action-btn.toolbar ul li a i {\n  line-height: inherit;\n}\n\n.fixed-action-btn ul {\n  left: 0;\n  right: 0;\n  text-align: center;\n  position: absolute;\n  bottom: 64px;\n  margin: 0;\n  visibility: hidden;\n}\n\n.fixed-action-btn ul li {\n  margin-bottom: 15px;\n}\n\n.fixed-action-btn ul a.btn-floating {\n  opacity: 0;\n}\n\n.fixed-action-btn .fab-backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 40px;\n  height: 40px;\n  background-color: #26a69a;\n  border-radius: 50%;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n.btn-flat {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  background-color: transparent;\n  color: #343434;\n  cursor: pointer;\n  -webkit-transition: background-color .2s;\n  transition: background-color .2s;\n}\n\n.btn-flat:focus, .btn-flat:hover {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.btn-flat:focus {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.btn-flat.disabled, .btn-flat.btn-flat[disabled] {\n  background-color: transparent !important;\n  color: #b3b2b2 !important;\n  cursor: default;\n}\n\n.btn-large {\n  height: 54px;\n  line-height: 54px;\n  font-size: 15px;\n  padding: 0 28px;\n}\n\n.btn-large i {\n  font-size: 1.6rem;\n}\n\n.btn-small {\n  height: 32.4px;\n  line-height: 32.4px;\n  font-size: 13px;\n}\n\n.btn-small i {\n  font-size: 1.2rem;\n}\n\n.btn-block {\n  display: block;\n}\n\n.dropdown-content {\n  background-color: #fff;\n  margin: 0;\n  display: none;\n  min-width: 100px;\n  overflow-y: auto;\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n\n.dropdown-content:focus {\n  outline: 0;\n}\n\n.dropdown-content li {\n  clear: both;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: pointer;\n  min-height: 50px;\n  line-height: 1.5rem;\n  width: 100%;\n  text-align: left;\n}\n\n.dropdown-content li:hover, .dropdown-content li.active {\n  background-color: #eee;\n}\n\n.dropdown-content li:focus {\n  outline: none;\n}\n\n.dropdown-content li.divider {\n  min-height: 0;\n  height: 1px;\n}\n\n.dropdown-content li > a, .dropdown-content li > span {\n  font-size: 16px;\n  color: #26a69a;\n  display: block;\n  line-height: 22px;\n  padding: 14px 16px;\n}\n\n.dropdown-content li > span > label {\n  top: 1px;\n  left: 0;\n  height: 18px;\n}\n\n.dropdown-content li > a > i {\n  height: inherit;\n  line-height: inherit;\n  float: left;\n  margin: 0 24px 0 0;\n  width: 24px;\n}\n\nbody.keyboard-focused .dropdown-content li:focus {\n  background-color: #dadada;\n}\n\n.input-field.col .dropdown-content [type=\"checkbox\"] + label {\n  top: 1px;\n  left: 0;\n  height: 18px;\n  -webkit-transform: none;\n          transform: none;\n}\n\n.dropdown-trigger {\n  cursor: pointer;\n}\n\n/*!\r\n * Waves v0.6.0\r\n * http://fian.my.id/Waves\r\n *\r\n * Copyright 2014 Alfiana E. Sibuea and other contributors\r\n * Released under the MIT license\r\n * https://github.com/fians/Waves/blob/master/LICENSE\r\n */\n.waves-effect {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  -webkit-transition: .3s ease-out;\n  transition: .3s ease-out;\n}\n\n.waves-effect .waves-ripple {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  -webkit-transition: all 0.7s ease-out;\n  transition: all 0.7s ease-out;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light .waves-ripple {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red .waves-ripple {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow .waves-ripple {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange .waves-ripple {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple .waves-ripple {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green .waves-ripple {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal .waves-ripple {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect input[type=\"button\"], .waves-effect input[type=\"reset\"], .waves-effect input[type=\"submit\"] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect img {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition {\n  -webkit-transition: none !important;\n  transition: none !important;\n}\n\n.waves-circle {\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper .waves-button-input {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block {\n  display: block;\n}\n\n/* Firefox Bug: link not triggered */\n.waves-effect .waves-ripple {\n  z-index: -1;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  background-color: #fafafa;\n  padding: 0;\n  max-height: 70%;\n  width: 55%;\n  margin: auto;\n  overflow-y: auto;\n  border-radius: 2px;\n  will-change: top, opacity;\n}\n\n.modal:focus {\n  outline: none;\n}\n\n@media only screen and (max-width: 992px) {\n  .modal {\n    width: 80%;\n  }\n}\n\n.modal h1, .modal h2, .modal h3, .modal h4 {\n  margin-top: 0;\n}\n\n.modal .modal-content {\n  padding: 24px;\n}\n\n.modal .modal-close {\n  cursor: pointer;\n}\n\n.modal .modal-footer {\n  border-radius: 0 0 2px 2px;\n  background-color: #fafafa;\n  padding: 4px 6px;\n  height: 56px;\n  width: 100%;\n  text-align: right;\n}\n\n.modal .modal-footer .btn, .modal .modal-footer .btn-large, .modal .modal-footer .btn-small, .modal .modal-footer .btn-flat {\n  margin: 6px 0;\n}\n\n.modal-overlay {\n  position: fixed;\n  z-index: 999;\n  top: -25%;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 125%;\n  width: 100%;\n  background: #000;\n  display: none;\n  will-change: opacity;\n}\n\n.modal.modal-fixed-footer {\n  padding: 0;\n  height: 70%;\n}\n\n.modal.modal-fixed-footer .modal-content {\n  position: absolute;\n  height: calc(100% - 56px);\n  max-height: 100%;\n  width: 100%;\n  overflow-y: auto;\n}\n\n.modal.modal-fixed-footer .modal-footer {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  position: absolute;\n  bottom: 0;\n}\n\n.modal.bottom-sheet {\n  top: auto;\n  bottom: -100%;\n  margin: 0;\n  width: 100%;\n  max-height: 45%;\n  border-radius: 0;\n  will-change: bottom, opacity;\n}\n\n.collapsible {\n  border-top: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n  margin: 0.5rem 0 1rem 0;\n}\n\n.collapsible-header {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  line-height: 1.5;\n  padding: 1rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n}\n\n.collapsible-header:focus {\n  outline: 0;\n}\n\n.collapsible-header i {\n  width: 2rem;\n  font-size: 1.6rem;\n  display: inline-block;\n  text-align: center;\n  margin-right: 1rem;\n}\n\n.keyboard-focused .collapsible-header:focus {\n  background-color: #eee;\n}\n\n.collapsible-body {\n  display: none;\n  border-bottom: 1px solid #ddd;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 2rem;\n}\n\n.sidenav .collapsible,\n.sidenav.fixed .collapsible {\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.sidenav .collapsible li,\n.sidenav.fixed .collapsible li {\n  padding: 0;\n}\n\n.sidenav .collapsible-header,\n.sidenav.fixed .collapsible-header {\n  background-color: transparent;\n  border: none;\n  line-height: inherit;\n  height: inherit;\n  padding: 0 16px;\n}\n\n.sidenav .collapsible-header:hover,\n.sidenav.fixed .collapsible-header:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.sidenav .collapsible-header i,\n.sidenav.fixed .collapsible-header i {\n  line-height: inherit;\n}\n\n.sidenav .collapsible-body,\n.sidenav.fixed .collapsible-body {\n  border: 0;\n  background-color: #fff;\n}\n\n.sidenav .collapsible-body li a,\n.sidenav.fixed .collapsible-body li a {\n  padding: 0 23.5px 0 31px;\n}\n\n.collapsible.popout {\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.collapsible.popout > li {\n  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  margin: 0 24px;\n  -webkit-transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.collapsible.popout > li.active {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n          box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  margin: 16px 0;\n}\n\n.chip {\n  display: inline-block;\n  height: 32px;\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  line-height: 32px;\n  padding: 0 12px;\n  border-radius: 16px;\n  background-color: #e4e4e4;\n  margin-bottom: 5px;\n  margin-right: 5px;\n}\n\n.chip:focus {\n  outline: none;\n  background-color: #26a69a;\n  color: #fff;\n}\n\n.chip > img {\n  float: left;\n  margin: 0 8px 0 -12px;\n  height: 32px;\n  width: 32px;\n  border-radius: 50%;\n}\n\n.chip .close {\n  cursor: pointer;\n  float: right;\n  font-size: 16px;\n  line-height: 32px;\n  padding-left: 8px;\n}\n\n.chips {\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  margin: 0 0 8px 0;\n  min-height: 45px;\n  outline: none;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n\n.chips.focus {\n  border-bottom: 1px solid #26a69a;\n  -webkit-box-shadow: 0 1px 0 0 #26a69a;\n          box-shadow: 0 1px 0 0 #26a69a;\n}\n\n.chips:hover {\n  cursor: text;\n}\n\n.chips .input {\n  background: none;\n  border: 0;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  font-size: 16px;\n  height: 3rem;\n  line-height: 32px;\n  outline: 0;\n  margin: 0;\n  padding: 0 !important;\n  width: 120px !important;\n}\n\n.chips .input:focus {\n  border: 0 !important;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n\n.chips .autocomplete-content {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.prefix ~ .chips {\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem);\n}\n\n.chips:empty ~ label {\n  font-size: 0.8rem;\n  -webkit-transform: translateY(-140%);\n          transform: translateY(-140%);\n}\n\n.materialboxed {\n  display: block;\n  cursor: -webkit-zoom-in;\n  cursor: zoom-in;\n  position: relative;\n  -webkit-transition: opacity .4s;\n  transition: opacity .4s;\n  -webkit-backface-visibility: hidden;\n}\n\n.materialboxed:hover:not(.active) {\n  opacity: .8;\n}\n\n.materialboxed.active {\n  cursor: -webkit-zoom-out;\n  cursor: zoom-out;\n}\n\n#materialbox-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #292929;\n  z-index: 1000;\n  will-change: opacity;\n}\n\n.materialbox-caption {\n  position: fixed;\n  display: none;\n  color: #fff;\n  line-height: 50px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  padding: 0% 15%;\n  height: 50px;\n  z-index: 1000;\n  -webkit-font-smoothing: antialiased;\n}\n\nselect:focus {\n  outline: 1px solid #c9f3ef;\n}\n\nbutton:focus {\n  outline: none;\n  background-color: #2ab7a9;\n}\n\nlabel {\n  font-size: 0.8rem;\n  color: #9e9e9e;\n}\n\n/* Text Inputs + Textarea\n   ========================================================================== */\n/* Style Placeholders */\n::-webkit-input-placeholder {\n  color: #d1d1d1;\n}\n::-moz-placeholder {\n  color: #d1d1d1;\n}\n:-ms-input-placeholder {\n  color: #d1d1d1;\n}\n::-ms-input-placeholder {\n  color: #d1d1d1;\n}\n::placeholder {\n  color: #d1d1d1;\n}\n\n/* Text inputs */\ninput:not([type]),\ninput[type=text]:not(.browser-default),\ninput[type=password]:not(.browser-default),\ninput[type=email]:not(.browser-default),\ninput[type=url]:not(.browser-default),\ninput[type=time]:not(.browser-default),\ninput[type=date]:not(.browser-default),\ninput[type=datetime]:not(.browser-default),\ninput[type=datetime-local]:not(.browser-default),\ninput[type=tel]:not(.browser-default),\ninput[type=number]:not(.browser-default),\ninput[type=search]:not(.browser-default),\ntextarea.materialize-textarea {\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  border-radius: 0;\n  outline: none;\n  height: 3rem;\n  width: 100%;\n  font-size: 16px;\n  margin: 0 0 8px 0;\n  padding: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  -webkit-transition: border .3s, -webkit-box-shadow .3s;\n  transition: border .3s, -webkit-box-shadow .3s;\n  transition: box-shadow .3s, border .3s;\n  transition: box-shadow .3s, border .3s, -webkit-box-shadow .3s;\n}\n\ninput:not([type]):disabled, input:not([type])[readonly=\"readonly\"],\ninput[type=text]:not(.browser-default):disabled,\ninput[type=text]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=password]:not(.browser-default):disabled,\ninput[type=password]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=email]:not(.browser-default):disabled,\ninput[type=email]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=url]:not(.browser-default):disabled,\ninput[type=url]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=time]:not(.browser-default):disabled,\ninput[type=time]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=date]:not(.browser-default):disabled,\ninput[type=date]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=datetime]:not(.browser-default):disabled,\ninput[type=datetime]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=datetime-local]:not(.browser-default):disabled,\ninput[type=datetime-local]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=tel]:not(.browser-default):disabled,\ninput[type=tel]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=number]:not(.browser-default):disabled,\ninput[type=number]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=search]:not(.browser-default):disabled,\ninput[type=search]:not(.browser-default)[readonly=\"readonly\"],\ntextarea.materialize-textarea:disabled,\ntextarea.materialize-textarea[readonly=\"readonly\"] {\n  color: rgba(0, 0, 0, 0.42);\n  border-bottom: 1px dotted rgba(0, 0, 0, 0.42);\n}\n\ninput:not([type]):disabled + label,\ninput:not([type])[readonly=\"readonly\"] + label,\ninput[type=text]:not(.browser-default):disabled + label,\ninput[type=text]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=password]:not(.browser-default):disabled + label,\ninput[type=password]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=email]:not(.browser-default):disabled + label,\ninput[type=email]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=url]:not(.browser-default):disabled + label,\ninput[type=url]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=time]:not(.browser-default):disabled + label,\ninput[type=time]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=date]:not(.browser-default):disabled + label,\ninput[type=date]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=datetime]:not(.browser-default):disabled + label,\ninput[type=datetime]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=datetime-local]:not(.browser-default):disabled + label,\ninput[type=datetime-local]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=tel]:not(.browser-default):disabled + label,\ninput[type=tel]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=number]:not(.browser-default):disabled + label,\ninput[type=number]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=search]:not(.browser-default):disabled + label,\ninput[type=search]:not(.browser-default)[readonly=\"readonly\"] + label,\ntextarea.materialize-textarea:disabled + label,\ntextarea.materialize-textarea[readonly=\"readonly\"] + label {\n  color: rgba(0, 0, 0, 0.42);\n}\n\ninput:not([type]):focus:not([readonly]),\ninput[type=text]:not(.browser-default):focus:not([readonly]),\ninput[type=password]:not(.browser-default):focus:not([readonly]),\ninput[type=email]:not(.browser-default):focus:not([readonly]),\ninput[type=url]:not(.browser-default):focus:not([readonly]),\ninput[type=time]:not(.browser-default):focus:not([readonly]),\ninput[type=date]:not(.browser-default):focus:not([readonly]),\ninput[type=datetime]:not(.browser-default):focus:not([readonly]),\ninput[type=datetime-local]:not(.browser-default):focus:not([readonly]),\ninput[type=tel]:not(.browser-default):focus:not([readonly]),\ninput[type=number]:not(.browser-default):focus:not([readonly]),\ninput[type=search]:not(.browser-default):focus:not([readonly]),\ntextarea.materialize-textarea:focus:not([readonly]) {\n  border-bottom: 1px solid #26a69a;\n  -webkit-box-shadow: 0 1px 0 0 #26a69a;\n          box-shadow: 0 1px 0 0 #26a69a;\n}\n\ninput:not([type]):focus:not([readonly]) + label,\ninput[type=text]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=password]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=email]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=url]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=time]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=date]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=datetime]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=datetime-local]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=tel]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=number]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=search]:not(.browser-default):focus:not([readonly]) + label,\ntextarea.materialize-textarea:focus:not([readonly]) + label {\n  color: #26a69a;\n}\n\ninput:not([type]):focus.valid ~ label,\ninput[type=text]:not(.browser-default):focus.valid ~ label,\ninput[type=password]:not(.browser-default):focus.valid ~ label,\ninput[type=email]:not(.browser-default):focus.valid ~ label,\ninput[type=url]:not(.browser-default):focus.valid ~ label,\ninput[type=time]:not(.browser-default):focus.valid ~ label,\ninput[type=date]:not(.browser-default):focus.valid ~ label,\ninput[type=datetime]:not(.browser-default):focus.valid ~ label,\ninput[type=datetime-local]:not(.browser-default):focus.valid ~ label,\ninput[type=tel]:not(.browser-default):focus.valid ~ label,\ninput[type=number]:not(.browser-default):focus.valid ~ label,\ninput[type=search]:not(.browser-default):focus.valid ~ label,\ntextarea.materialize-textarea:focus.valid ~ label {\n  color: #4CAF50;\n}\n\ninput:not([type]):focus.invalid ~ label,\ninput[type=text]:not(.browser-default):focus.invalid ~ label,\ninput[type=password]:not(.browser-default):focus.invalid ~ label,\ninput[type=email]:not(.browser-default):focus.invalid ~ label,\ninput[type=url]:not(.browser-default):focus.invalid ~ label,\ninput[type=time]:not(.browser-default):focus.invalid ~ label,\ninput[type=date]:not(.browser-default):focus.invalid ~ label,\ninput[type=datetime]:not(.browser-default):focus.invalid ~ label,\ninput[type=datetime-local]:not(.browser-default):focus.invalid ~ label,\ninput[type=tel]:not(.browser-default):focus.invalid ~ label,\ninput[type=number]:not(.browser-default):focus.invalid ~ label,\ninput[type=search]:not(.browser-default):focus.invalid ~ label,\ntextarea.materialize-textarea:focus.invalid ~ label {\n  color: #F44336;\n}\n\ninput:not([type]).validate + label,\ninput[type=text]:not(.browser-default).validate + label,\ninput[type=password]:not(.browser-default).validate + label,\ninput[type=email]:not(.browser-default).validate + label,\ninput[type=url]:not(.browser-default).validate + label,\ninput[type=time]:not(.browser-default).validate + label,\ninput[type=date]:not(.browser-default).validate + label,\ninput[type=datetime]:not(.browser-default).validate + label,\ninput[type=datetime-local]:not(.browser-default).validate + label,\ninput[type=tel]:not(.browser-default).validate + label,\ninput[type=number]:not(.browser-default).validate + label,\ninput[type=search]:not(.browser-default).validate + label,\ntextarea.materialize-textarea.validate + label {\n  width: 100%;\n}\n\n/* Validation Sass Placeholders */\ninput.valid:not([type]), input.valid:not([type]):focus,\ninput.valid[type=text]:not(.browser-default),\ninput.valid[type=text]:not(.browser-default):focus,\ninput.valid[type=password]:not(.browser-default),\ninput.valid[type=password]:not(.browser-default):focus,\ninput.valid[type=email]:not(.browser-default),\ninput.valid[type=email]:not(.browser-default):focus,\ninput.valid[type=url]:not(.browser-default),\ninput.valid[type=url]:not(.browser-default):focus,\ninput.valid[type=time]:not(.browser-default),\ninput.valid[type=time]:not(.browser-default):focus,\ninput.valid[type=date]:not(.browser-default),\ninput.valid[type=date]:not(.browser-default):focus,\ninput.valid[type=datetime]:not(.browser-default),\ninput.valid[type=datetime]:not(.browser-default):focus,\ninput.valid[type=datetime-local]:not(.browser-default),\ninput.valid[type=datetime-local]:not(.browser-default):focus,\ninput.valid[type=tel]:not(.browser-default),\ninput.valid[type=tel]:not(.browser-default):focus,\ninput.valid[type=number]:not(.browser-default),\ninput.valid[type=number]:not(.browser-default):focus,\ninput.valid[type=search]:not(.browser-default),\ninput.valid[type=search]:not(.browser-default):focus,\ntextarea.materialize-textarea.valid,\ntextarea.materialize-textarea.valid:focus, .select-wrapper.valid > input.select-dropdown {\n  border-bottom: 1px solid #4CAF50;\n  -webkit-box-shadow: 0 1px 0 0 #4CAF50;\n          box-shadow: 0 1px 0 0 #4CAF50;\n}\n\ninput.invalid:not([type]), input.invalid:not([type]):focus,\ninput.invalid[type=text]:not(.browser-default),\ninput.invalid[type=text]:not(.browser-default):focus,\ninput.invalid[type=password]:not(.browser-default),\ninput.invalid[type=password]:not(.browser-default):focus,\ninput.invalid[type=email]:not(.browser-default),\ninput.invalid[type=email]:not(.browser-default):focus,\ninput.invalid[type=url]:not(.browser-default),\ninput.invalid[type=url]:not(.browser-default):focus,\ninput.invalid[type=time]:not(.browser-default),\ninput.invalid[type=time]:not(.browser-default):focus,\ninput.invalid[type=date]:not(.browser-default),\ninput.invalid[type=date]:not(.browser-default):focus,\ninput.invalid[type=datetime]:not(.browser-default),\ninput.invalid[type=datetime]:not(.browser-default):focus,\ninput.invalid[type=datetime-local]:not(.browser-default),\ninput.invalid[type=datetime-local]:not(.browser-default):focus,\ninput.invalid[type=tel]:not(.browser-default),\ninput.invalid[type=tel]:not(.browser-default):focus,\ninput.invalid[type=number]:not(.browser-default),\ninput.invalid[type=number]:not(.browser-default):focus,\ninput.invalid[type=search]:not(.browser-default),\ninput.invalid[type=search]:not(.browser-default):focus,\ntextarea.materialize-textarea.invalid,\ntextarea.materialize-textarea.invalid:focus, .select-wrapper.invalid > input.select-dropdown,\n.select-wrapper.invalid > input.select-dropdown:focus {\n  border-bottom: 1px solid #F44336;\n  -webkit-box-shadow: 0 1px 0 0 #F44336;\n          box-shadow: 0 1px 0 0 #F44336;\n}\n\ninput:not([type]).valid ~ .helper-text[data-success],\ninput:not([type]):focus.valid ~ .helper-text[data-success],\ninput:not([type]).invalid ~ .helper-text[data-error],\ninput:not([type]):focus.invalid ~ .helper-text[data-error],\ninput[type=text]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=text]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=text]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=text]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=password]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=password]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=password]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=password]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=email]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=email]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=email]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=email]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=url]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=url]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=url]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=url]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=time]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=time]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=time]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=time]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=date]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=date]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=date]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=date]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=datetime]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=datetime]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=datetime]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=datetime]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=datetime-local]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=datetime-local]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=datetime-local]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=datetime-local]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=tel]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=tel]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=tel]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=tel]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=number]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=number]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=number]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=number]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=search]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=search]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=search]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=search]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ntextarea.materialize-textarea.valid ~ .helper-text[data-success],\ntextarea.materialize-textarea:focus.valid ~ .helper-text[data-success],\ntextarea.materialize-textarea.invalid ~ .helper-text[data-error],\ntextarea.materialize-textarea:focus.invalid ~ .helper-text[data-error], .select-wrapper.valid .helper-text[data-success],\n.select-wrapper.invalid ~ .helper-text[data-error] {\n  color: transparent;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}\n\ninput:not([type]).valid ~ .helper-text:after,\ninput:not([type]):focus.valid ~ .helper-text:after,\ninput[type=text]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=text]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=password]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=password]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=email]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=email]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=url]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=url]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=time]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=time]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=date]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=date]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=datetime]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=datetime]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=datetime-local]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=datetime-local]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=tel]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=tel]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=number]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=number]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=search]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=search]:not(.browser-default):focus.valid ~ .helper-text:after,\ntextarea.materialize-textarea.valid ~ .helper-text:after,\ntextarea.materialize-textarea:focus.valid ~ .helper-text:after, .select-wrapper.valid ~ .helper-text:after {\n  content: attr(data-success);\n  color: #4CAF50;\n}\n\ninput:not([type]).invalid ~ .helper-text:after,\ninput:not([type]):focus.invalid ~ .helper-text:after,\ninput[type=text]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=text]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=password]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=password]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=email]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=email]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=url]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=url]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=time]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=time]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=date]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=date]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=datetime]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=datetime]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=datetime-local]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=datetime-local]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=tel]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=tel]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=number]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=number]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=search]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=search]:not(.browser-default):focus.invalid ~ .helper-text:after,\ntextarea.materialize-textarea.invalid ~ .helper-text:after,\ntextarea.materialize-textarea:focus.invalid ~ .helper-text:after, .select-wrapper.invalid ~ .helper-text:after {\n  content: attr(data-error);\n  color: #F44336;\n}\n\ninput:not([type]) + label:after,\ninput[type=text]:not(.browser-default) + label:after,\ninput[type=password]:not(.browser-default) + label:after,\ninput[type=email]:not(.browser-default) + label:after,\ninput[type=url]:not(.browser-default) + label:after,\ninput[type=time]:not(.browser-default) + label:after,\ninput[type=date]:not(.browser-default) + label:after,\ninput[type=datetime]:not(.browser-default) + label:after,\ninput[type=datetime-local]:not(.browser-default) + label:after,\ninput[type=tel]:not(.browser-default) + label:after,\ninput[type=number]:not(.browser-default) + label:after,\ninput[type=search]:not(.browser-default) + label:after,\ntextarea.materialize-textarea + label:after, .select-wrapper + label:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 0;\n  opacity: 0;\n  -webkit-transition: .2s opacity ease-out, .2s color ease-out;\n  transition: .2s opacity ease-out, .2s color ease-out;\n}\n\n.input-field {\n  position: relative;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.input-field.inline {\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 5px;\n}\n\n.input-field.inline input,\n.input-field.inline .select-dropdown {\n  margin-bottom: 1rem;\n}\n\n.input-field.col label {\n  left: 0.75rem;\n}\n\n.input-field.col .prefix ~ label,\n.input-field.col .prefix ~ .validate ~ label {\n  width: calc(100% - 3rem - 1.5rem);\n}\n\n.input-field > label {\n  color: #9e9e9e;\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 1rem;\n  cursor: text;\n  -webkit-transition: color .2s ease-out, -webkit-transform .2s ease-out;\n  transition: color .2s ease-out, -webkit-transform .2s ease-out;\n  transition: transform .2s ease-out, color .2s ease-out;\n  transition: transform .2s ease-out, color .2s ease-out, -webkit-transform .2s ease-out;\n  -webkit-transform-origin: 0% 100%;\n          transform-origin: 0% 100%;\n  text-align: initial;\n  -webkit-transform: translateY(12px);\n          transform: translateY(12px);\n}\n\n.input-field > label:not(.label-icon).active {\n  -webkit-transform: translateY(-14px) scale(0.8);\n          transform: translateY(-14px) scale(0.8);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n\n.input-field > input[type]:-webkit-autofill:not(.browser-default):not([type=\"search\"]) + label,\n.input-field > input[type=date]:not(.browser-default) + label,\n.input-field > input[type=time]:not(.browser-default) + label {\n  -webkit-transform: translateY(-14px) scale(0.8);\n          transform: translateY(-14px) scale(0.8);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n\n.input-field .helper-text {\n  position: relative;\n  min-height: 18px;\n  display: block;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.input-field .helper-text::after {\n  opacity: 1;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.input-field .prefix {\n  position: absolute;\n  width: 3rem;\n  font-size: 2rem;\n  -webkit-transition: color .2s;\n  transition: color .2s;\n  top: 0.5rem;\n}\n\n.input-field .prefix.active {\n  color: #26a69a;\n}\n\n.input-field .prefix ~ input,\n.input-field .prefix ~ textarea,\n.input-field .prefix ~ label,\n.input-field .prefix ~ .validate ~ label,\n.input-field .prefix ~ .helper-text,\n.input-field .prefix ~ .autocomplete-content {\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem);\n}\n\n.input-field .prefix ~ label {\n  margin-left: 3rem;\n}\n\n@media only screen and (max-width: 992px) {\n  .input-field .prefix ~ input {\n    width: 86%;\n    width: calc(100% - 3rem);\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .input-field .prefix ~ input {\n    width: 80%;\n    width: calc(100% - 3rem);\n  }\n}\n\n/* Search Field */\n.input-field input[type=search] {\n  display: block;\n  line-height: inherit;\n  -webkit-transition: .3s background-color;\n  transition: .3s background-color;\n}\n\n.nav-wrapper .input-field input[type=search] {\n  height: inherit;\n  padding-left: 4rem;\n  width: calc(100% - 4rem);\n  border: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.input-field input[type=search]:focus:not(.browser-default) {\n  background-color: #fff;\n  border: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #444;\n}\n\n.input-field input[type=search]:focus:not(.browser-default) + label i,\n.input-field input[type=search]:focus:not(.browser-default) ~ .mdi-navigation-close,\n.input-field input[type=search]:focus:not(.browser-default) ~ .material-icons {\n  color: #444;\n}\n\n.input-field input[type=search] + .label-icon {\n  -webkit-transform: none;\n          transform: none;\n  left: 1rem;\n}\n\n.input-field input[type=search] ~ .mdi-navigation-close,\n.input-field input[type=search] ~ .material-icons {\n  position: absolute;\n  top: 0;\n  right: 1rem;\n  color: transparent;\n  cursor: pointer;\n  font-size: 2rem;\n  -webkit-transition: .3s color;\n  transition: .3s color;\n}\n\n/* Textarea */\ntextarea {\n  width: 100%;\n  height: 3rem;\n  background-color: transparent;\n}\n\ntextarea.materialize-textarea {\n  line-height: normal;\n  overflow-y: hidden;\n  /* prevents scroll bar flash */\n  padding: .8rem 0 .8rem 0;\n  /* prevents text jump on Enter keypress */\n  resize: none;\n  min-height: 3rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.hiddendiv {\n  visibility: hidden;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  /* future version of deprecated 'word-wrap' */\n  padding-top: 1.2rem;\n  /* prevents text jump on Enter keypress */\n  position: absolute;\n  top: 0;\n  z-index: -1;\n}\n\n/* Autocomplete */\n.autocomplete-content li .highlight {\n  color: #444;\n}\n\n.autocomplete-content li img {\n  height: 40px;\n  width: 40px;\n  margin: 5px 15px;\n}\n\n/* Character Counter */\n.character-counter {\n  min-height: 18px;\n}\n\n/* Radio Buttons\n   ========================================================================== */\n[type=\"radio\"]:not(:checked),\n[type=\"radio\"]:checked {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n\n[type=\"radio\"]:not(:checked) + span,\n[type=\"radio\"]:checked + span {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  font-size: 1rem;\n  -webkit-transition: .28s ease;\n  transition: .28s ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n[type=\"radio\"] + span:before,\n[type=\"radio\"] + span:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 4px;\n  width: 16px;\n  height: 16px;\n  z-index: 0;\n  -webkit-transition: .28s ease;\n  transition: .28s ease;\n}\n\n/* Unchecked styles */\n[type=\"radio\"]:not(:checked) + span:before,\n[type=\"radio\"]:not(:checked) + span:after,\n[type=\"radio\"]:checked + span:before,\n[type=\"radio\"]:checked + span:after,\n[type=\"radio\"].with-gap:checked + span:before,\n[type=\"radio\"].with-gap:checked + span:after {\n  border-radius: 50%;\n}\n\n[type=\"radio\"]:not(:checked) + span:before,\n[type=\"radio\"]:not(:checked) + span:after {\n  border: 2px solid #5a5a5a;\n}\n\n[type=\"radio\"]:not(:checked) + span:after {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n/* Checked styles */\n[type=\"radio\"]:checked + span:before {\n  border: 2px solid transparent;\n}\n\n[type=\"radio\"]:checked + span:after,\n[type=\"radio\"].with-gap:checked + span:before,\n[type=\"radio\"].with-gap:checked + span:after {\n  border: 2px solid #26a69a;\n}\n\n[type=\"radio\"]:checked + span:after,\n[type=\"radio\"].with-gap:checked + span:after {\n  background-color: #26a69a;\n}\n\n[type=\"radio\"]:checked + span:after {\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n}\n\n/* Radio With gap */\n[type=\"radio\"].with-gap:checked + span:after {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n\n/* Focused styles */\n[type=\"radio\"].tabbed:focus + span:before {\n  -webkit-box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n/* Disabled Radio With gap */\n[type=\"radio\"].with-gap:disabled:checked + span:before {\n  border: 2px solid rgba(0, 0, 0, 0.42);\n}\n\n[type=\"radio\"].with-gap:disabled:checked + span:after {\n  border: none;\n  background-color: rgba(0, 0, 0, 0.42);\n}\n\n/* Disabled style */\n[type=\"radio\"]:disabled:not(:checked) + span:before,\n[type=\"radio\"]:disabled:checked + span:before {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.42);\n}\n\n[type=\"radio\"]:disabled + span {\n  color: rgba(0, 0, 0, 0.42);\n}\n\n[type=\"radio\"]:disabled:not(:checked) + span:before {\n  border-color: rgba(0, 0, 0, 0.42);\n}\n\n[type=\"radio\"]:disabled:checked + span:after {\n  background-color: rgba(0, 0, 0, 0.42);\n  border-color: #949494;\n}\n\n/* Checkboxes\n   ========================================================================== */\n/* Remove default checkbox */\n[type=\"checkbox\"]:not(:checked),\n[type=\"checkbox\"]:checked {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n\n[type=\"checkbox\"] {\n  /* checkbox aspect */\n}\n\n[type=\"checkbox\"] + span:not(.lever) {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  font-size: 1rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n[type=\"checkbox\"] + span:not(.lever):before,\n[type=\"checkbox\"]:not(.filled-in) + span:not(.lever):after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 18px;\n  height: 18px;\n  z-index: 0;\n  border: 2px solid #5a5a5a;\n  border-radius: 1px;\n  margin-top: 3px;\n  -webkit-transition: .2s;\n  transition: .2s;\n}\n\n[type=\"checkbox\"]:not(.filled-in) + span:not(.lever):after {\n  border: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n[type=\"checkbox\"]:not(:checked):disabled + span:not(.lever):before {\n  border: none;\n  background-color: rgba(0, 0, 0, 0.42);\n}\n\n[type=\"checkbox\"].tabbed:focus + span:not(.lever):after {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  border: 0;\n  border-radius: 50%;\n  -webkit-box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n[type=\"checkbox\"]:checked + span:not(.lever):before {\n  top: -4px;\n  left: -5px;\n  width: 12px;\n  height: 22px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #26a69a;\n  border-bottom: 2px solid #26a69a;\n  -webkit-transform: rotate(40deg);\n          transform: rotate(40deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"]:checked:disabled + span:before {\n  border-right: 2px solid rgba(0, 0, 0, 0.42);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.42);\n}\n\n/* Indeterminate checkbox */\n[type=\"checkbox\"]:indeterminate + span:not(.lever):before {\n  top: -11px;\n  left: -12px;\n  width: 10px;\n  height: 22px;\n  border-top: none;\n  border-left: none;\n  border-right: 2px solid #26a69a;\n  border-bottom: none;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"]:indeterminate:disabled + span:not(.lever):before {\n  border-right: 2px solid rgba(0, 0, 0, 0.42);\n  background-color: transparent;\n}\n\n[type=\"checkbox\"].filled-in + span:not(.lever):after {\n  border-radius: 2px;\n}\n\n[type=\"checkbox\"].filled-in + span:not(.lever):before,\n[type=\"checkbox\"].filled-in + span:not(.lever):after {\n  content: '';\n  left: 0;\n  position: absolute;\n  /* .1s delay is for check animation */\n  -webkit-transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;\n  transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;\n  z-index: 1;\n}\n\n[type=\"checkbox\"].filled-in:not(:checked) + span:not(.lever):before {\n  width: 0;\n  height: 0;\n  border: 3px solid transparent;\n  left: 6px;\n  top: 10px;\n  -webkit-transform: rotateZ(37deg);\n          transform: rotateZ(37deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"].filled-in:not(:checked) + span:not(.lever):after {\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: 2px solid #5a5a5a;\n  top: 0px;\n  z-index: 0;\n}\n\n[type=\"checkbox\"].filled-in:checked + span:not(.lever):before {\n  top: 0;\n  left: 1px;\n  width: 8px;\n  height: 13px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n  -webkit-transform: rotateZ(37deg);\n          transform: rotateZ(37deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"].filled-in:checked + span:not(.lever):after {\n  top: 0;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #26a69a;\n  background-color: #26a69a;\n  z-index: 0;\n}\n\n[type=\"checkbox\"].filled-in.tabbed:focus + span:not(.lever):after {\n  border-radius: 2px;\n  border-color: #5a5a5a;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n[type=\"checkbox\"].filled-in.tabbed:checked:focus + span:not(.lever):after {\n  border-radius: 2px;\n  background-color: #26a69a;\n  border-color: #26a69a;\n}\n\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + span:not(.lever):before {\n  background-color: transparent;\n  border: 2px solid transparent;\n}\n\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + span:not(.lever):after {\n  border-color: transparent;\n  background-color: #949494;\n}\n\n[type=\"checkbox\"].filled-in:disabled:checked + span:not(.lever):before {\n  background-color: transparent;\n}\n\n[type=\"checkbox\"].filled-in:disabled:checked + span:not(.lever):after {\n  background-color: #949494;\n  border-color: #949494;\n}\n\n/* Switch\r\n   ========================================================================== */\n.switch,\n.switch * {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.switch label {\n  cursor: pointer;\n}\n\n.switch label input[type=checkbox] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.switch label input[type=checkbox]:checked + .lever {\n  background-color: #84c7c1;\n}\n\n.switch label input[type=checkbox]:checked + .lever:before, .switch label input[type=checkbox]:checked + .lever:after {\n  left: 18px;\n}\n\n.switch label input[type=checkbox]:checked + .lever:after {\n  background-color: #26a69a;\n}\n\n.switch label .lever {\n  content: \"\";\n  display: inline-block;\n  position: relative;\n  width: 36px;\n  height: 14px;\n  background-color: rgba(0, 0, 0, 0.38);\n  border-radius: 15px;\n  margin-right: 10px;\n  -webkit-transition: background 0.3s ease;\n  transition: background 0.3s ease;\n  vertical-align: middle;\n  margin: 0 16px;\n}\n\n.switch label .lever:before, .switch label .lever:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  left: 0;\n  top: -3px;\n  -webkit-transition: left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;\n  transition: left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;\n  transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease;\n  transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;\n}\n\n.switch label .lever:before {\n  background-color: rgba(38, 166, 154, 0.15);\n}\n\n.switch label .lever:after {\n  background-color: #F1F1F1;\n  -webkit-box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\ninput[type=checkbox]:checked:not(:disabled) ~ .lever:active::before,\ninput[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::before {\n  -webkit-transform: scale(2.4);\n          transform: scale(2.4);\n  background-color: rgba(38, 166, 154, 0.15);\n}\n\ninput[type=checkbox]:not(:disabled) ~ .lever:active:before,\ninput[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::before {\n  -webkit-transform: scale(2.4);\n          transform: scale(2.4);\n  background-color: rgba(0, 0, 0, 0.08);\n}\n\n.switch input[type=checkbox][disabled] + .lever {\n  cursor: default;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\n.switch label input[type=checkbox][disabled] + .lever:after,\n.switch label input[type=checkbox][disabled]:checked + .lever:after {\n  background-color: #949494;\n}\n\n/* Select Field\n   ========================================================================== */\nselect {\n  display: none;\n}\n\nselect.browser-default {\n  display: block;\n}\n\nselect {\n  background-color: rgba(255, 255, 255, 0.9);\n  width: 100%;\n  padding: 5px;\n  border: 1px solid #f2f2f2;\n  border-radius: 2px;\n  height: 3rem;\n}\n\n.select-label {\n  position: absolute;\n}\n\n.select-wrapper {\n  position: relative;\n}\n\n.select-wrapper.valid + label,\n.select-wrapper.invalid + label {\n  width: 100%;\n  pointer-events: none;\n}\n\n.select-wrapper input.select-dropdown {\n  position: relative;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  outline: none;\n  height: 3rem;\n  line-height: 3rem;\n  width: 100%;\n  font-size: 16px;\n  margin: 0 0 8px 0;\n  padding: 0;\n  display: block;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 1;\n}\n\n.select-wrapper input.select-dropdown:focus {\n  border-bottom: 1px solid #26a69a;\n}\n\n.select-wrapper .caret {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  z-index: 0;\n  fill: rgba(0, 0, 0, 0.87);\n}\n\n.select-wrapper + label {\n  position: absolute;\n  top: -26px;\n  font-size: 0.8rem;\n}\n\nselect:disabled {\n  color: rgba(0, 0, 0, 0.42);\n}\n\n.select-wrapper.disabled + label {\n  color: rgba(0, 0, 0, 0.42);\n}\n\n.select-wrapper.disabled .caret {\n  fill: rgba(0, 0, 0, 0.42);\n}\n\n.select-wrapper input.select-dropdown:disabled {\n  color: rgba(0, 0, 0, 0.42);\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.select-wrapper i {\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.select-dropdown li.disabled,\n.select-dropdown li.disabled > span,\n.select-dropdown li.optgroup {\n  color: rgba(0, 0, 0, 0.3);\n  background-color: transparent;\n}\n\nbody.keyboard-focused .select-dropdown.dropdown-content li:focus {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n\n.select-dropdown.dropdown-content li:hover {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n\n.select-dropdown.dropdown-content li.selected {\n  background-color: rgba(0, 0, 0, 0.03);\n}\n\n.prefix ~ .select-wrapper {\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem);\n}\n\n.prefix ~ label {\n  margin-left: 3rem;\n}\n\n.select-dropdown li img {\n  height: 40px;\n  width: 40px;\n  margin: 5px 15px;\n  float: right;\n}\n\n.select-dropdown li.optgroup {\n  border-top: 1px solid #eee;\n}\n\n.select-dropdown li.optgroup.selected > span {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.select-dropdown li.optgroup > span {\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.select-dropdown li.optgroup ~ li.optgroup-option {\n  padding-left: 1rem;\n}\n\n/* File Input\r\n   ========================================================================== */\n.file-field {\n  position: relative;\n}\n\n.file-field .file-path-wrapper {\n  overflow: hidden;\n  padding-left: 10px;\n}\n\n.file-field input.file-path {\n  width: 100%;\n}\n\n.file-field .btn, .file-field .btn-large, .file-field .btn-small {\n  float: left;\n  height: 3rem;\n  line-height: 3rem;\n}\n\n.file-field span {\n  cursor: pointer;\n}\n\n.file-field input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.file-field input[type=file]::-webkit-file-upload-button {\n  display: none;\n}\n\n/* Range\n   ========================================================================== */\n.range-field {\n  position: relative;\n}\n\ninput[type=range],\ninput[type=range] + .thumb {\n  cursor: pointer;\n}\n\ninput[type=range] {\n  position: relative;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  width: 100%;\n  margin: 15px 0;\n  padding: 0;\n}\n\ninput[type=range]:focus {\n  outline: none;\n}\n\ninput[type=range] + .thumb {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  border: none;\n  height: 0;\n  width: 0;\n  border-radius: 50%;\n  background-color: #26a69a;\n  margin-left: 7px;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\ninput[type=range] + .thumb .value {\n  display: block;\n  width: 30px;\n  text-align: center;\n  color: #26a69a;\n  font-size: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\ninput[type=range] + .thumb.active {\n  border-radius: 50% 50% 50% 0;\n}\n\ninput[type=range] + .thumb.active .value {\n  color: #fff;\n  margin-left: -1px;\n  margin-top: 8px;\n  font-size: 10px;\n}\n\ninput[type=range] {\n  -webkit-appearance: none;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n  height: 3px;\n  background: #c2c0c2;\n  border: none;\n}\n\ninput[type=range]::-webkit-slider-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a;\n  -webkit-transition: -webkit-box-shadow .3s;\n  transition: -webkit-box-shadow .3s;\n  transition: box-shadow .3s;\n  transition: box-shadow .3s, -webkit-box-shadow .3s;\n  -webkit-appearance: none;\n  background-color: #26a69a;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  margin: -5px 0 0 0;\n}\n\n.keyboard-focused input[type=range]:focus:not(.active)::-webkit-slider-thumb {\n  -webkit-box-shadow: 0 0 0 10px rgba(38, 166, 154, 0.26);\n          box-shadow: 0 0 0 10px rgba(38, 166, 154, 0.26);\n}\n\ninput[type=range] {\n  /* fix for FF unable to apply focus style bug  */\n  border: 1px solid white;\n  /*required for proper track sizing in FF*/\n}\n\ninput[type=range]::-moz-range-track {\n  height: 3px;\n  background: #c2c0c2;\n  border: none;\n}\n\ninput[type=range]::-moz-focus-inner {\n  border: 0;\n}\n\ninput[type=range]::-moz-range-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a;\n  -webkit-transition: -webkit-box-shadow .3s;\n  transition: -webkit-box-shadow .3s;\n  transition: box-shadow .3s;\n  transition: box-shadow .3s, -webkit-box-shadow .3s;\n  margin-top: -5px;\n}\n\ninput[type=range]:-moz-focusring {\n  outline: 1px solid #fff;\n  outline-offset: -1px;\n}\n\n.keyboard-focused input[type=range]:focus:not(.active)::-moz-range-thumb {\n  box-shadow: 0 0 0 10px rgba(38, 166, 154, 0.26);\n}\n\ninput[type=range]::-ms-track {\n  height: 3px;\n  background: transparent;\n  border-color: transparent;\n  border-width: 6px 0;\n  /*remove default tick marks*/\n  color: transparent;\n}\n\ninput[type=range]::-ms-fill-lower {\n  background: #777;\n}\n\ninput[type=range]::-ms-fill-upper {\n  background: #ddd;\n}\n\ninput[type=range]::-ms-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a;\n  -webkit-transition: -webkit-box-shadow .3s;\n  transition: -webkit-box-shadow .3s;\n  transition: box-shadow .3s;\n  transition: box-shadow .3s, -webkit-box-shadow .3s;\n}\n\n.keyboard-focused input[type=range]:focus:not(.active)::-ms-thumb {\n  box-shadow: 0 0 0 10px rgba(38, 166, 154, 0.26);\n}\n\n/***************\n    Nav List\n***************/\n.table-of-contents.fixed {\n  position: fixed;\n}\n\n.table-of-contents li {\n  padding: 2px 0;\n}\n\n.table-of-contents a {\n  display: inline-block;\n  font-weight: 300;\n  color: #757575;\n  padding-left: 16px;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  letter-spacing: .4;\n  display: inline-block;\n}\n\n.table-of-contents a:hover {\n  color: #a8a8a8;\n  padding-left: 15px;\n  border-left: 1px solid #ee6e73;\n}\n\n.table-of-contents a.active {\n  font-weight: 500;\n  padding-left: 14px;\n  border-left: 2px solid #ee6e73;\n}\n\n.sidenav {\n  position: fixed;\n  width: 300px;\n  left: 0;\n  top: 0;\n  margin: 0;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  height: 100%;\n  height: calc(100% + 60px);\n  height: -moz-calc(100%);\n  padding-bottom: 60px;\n  background-color: #fff;\n  z-index: 999;\n  overflow-y: auto;\n  will-change: transform;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: translateX(-105%);\n          transform: translateX(-105%);\n}\n\n.sidenav.right-aligned {\n  right: 0;\n  -webkit-transform: translateX(105%);\n          transform: translateX(105%);\n  left: auto;\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n\n.sidenav .collapsible {\n  margin: 0;\n}\n\n.sidenav li {\n  float: none;\n  line-height: 48px;\n}\n\n.sidenav li.active {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.sidenav li > a {\n  color: rgba(0, 0, 0, 0.87);\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  height: 48px;\n  line-height: 48px;\n  padding: 0 32px;\n}\n\n.sidenav li > a:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.sidenav li > a.btn, .sidenav li > a.btn-large, .sidenav li > a.btn-small, .sidenav li > a.btn-large, .sidenav li > a.btn-flat, .sidenav li > a.btn-floating {\n  margin: 10px 15px;\n}\n\n.sidenav li > a.btn, .sidenav li > a.btn-large, .sidenav li > a.btn-small, .sidenav li > a.btn-large, .sidenav li > a.btn-floating {\n  color: #fff;\n}\n\n.sidenav li > a.btn-flat {\n  color: #343434;\n}\n\n.sidenav li > a.btn:hover, .sidenav li > a.btn-large:hover, .sidenav li > a.btn-small:hover, .sidenav li > a.btn-large:hover {\n  background-color: #2bbbad;\n}\n\n.sidenav li > a.btn-floating:hover {\n  background-color: #26a69a;\n}\n\n.sidenav li > a > i,\n.sidenav li > a > [class^=\"mdi-\"], .sidenav li > a li > a > [class*=\"mdi-\"],\n.sidenav li > a > i.material-icons {\n  float: left;\n  height: 48px;\n  line-height: 48px;\n  margin: 0 32px 0 0;\n  width: 24px;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.sidenav .divider {\n  margin: 8px 0 0 0;\n}\n\n.sidenav .subheader {\n  cursor: initial;\n  pointer-events: none;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 48px;\n}\n\n.sidenav .subheader:hover {\n  background-color: transparent;\n}\n\n.sidenav .user-view {\n  position: relative;\n  padding: 32px 32px 0;\n  margin-bottom: 8px;\n}\n\n.sidenav .user-view > a {\n  height: auto;\n  padding: 0;\n}\n\n.sidenav .user-view > a:hover {\n  background-color: transparent;\n}\n\n.sidenav .user-view .background {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.sidenav .user-view .circle, .sidenav .user-view .name, .sidenav .user-view .email {\n  display: block;\n}\n\n.sidenav .user-view .circle {\n  height: 64px;\n  width: 64px;\n}\n\n.sidenav .user-view .name,\n.sidenav .user-view .email {\n  font-size: 14px;\n  line-height: 24px;\n}\n\n.sidenav .user-view .name {\n  margin-top: 16px;\n  font-weight: 500;\n}\n\n.sidenav .user-view .email {\n  padding-bottom: 16px;\n  font-weight: 400;\n}\n\n.drag-target {\n  height: 100%;\n  width: 10px;\n  position: fixed;\n  top: 0;\n  z-index: 998;\n}\n\n.drag-target.right-aligned {\n  right: 0;\n}\n\n.sidenav.sidenav-fixed {\n  left: 0;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  position: fixed;\n}\n\n.sidenav.sidenav-fixed.right-aligned {\n  right: 0;\n  left: auto;\n}\n\n@media only screen and (max-width: 992px) {\n  .sidenav.sidenav-fixed {\n    -webkit-transform: translateX(-105%);\n            transform: translateX(-105%);\n  }\n  .sidenav.sidenav-fixed.right-aligned {\n    -webkit-transform: translateX(105%);\n            transform: translateX(105%);\n  }\n  .sidenav > a {\n    padding: 0 16px;\n  }\n  .sidenav .user-view {\n    padding: 16px 16px 0;\n  }\n}\n\n.sidenav .collapsible-body > ul:not(.collapsible) > li.active,\n.sidenav.sidenav-fixed .collapsible-body > ul:not(.collapsible) > li.active {\n  background-color: #ee6e73;\n}\n\n.sidenav .collapsible-body > ul:not(.collapsible) > li.active a,\n.sidenav.sidenav-fixed .collapsible-body > ul:not(.collapsible) > li.active a {\n  color: #fff;\n}\n\n.sidenav .collapsible-body {\n  padding: 0;\n}\n\n.sidenav-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 0;\n  height: 120vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 997;\n  display: none;\n}\n\n/*\r\n    @license\r\n    Copyright (c) 2014 The Polymer Project Authors. All rights reserved.\r\n    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt\r\n    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt\r\n    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt\r\n    Code distributed by Google as part of the polymer project is also\r\n    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt\r\n */\n/**************************/\n/* STYLES FOR THE SPINNER */\n/**************************/\n/*\r\n * Constants:\r\n *      STROKEWIDTH = 3px\r\n *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)\r\n *      ARCTIME     = 1333ms (time it takes to expand and contract arc)\r\n *      ARCSTARTROT = 216 degrees (how much the start location of the arc\r\n *                                should rotate each time, 216 gives us a\r\n *                                5 pointed star shape (it's 360/5 * 3).\r\n *                                For a 7 pointed star, we might do\r\n *                                360/7 * 3 = 154.286)\r\n *      CONTAINERWIDTH = 28px\r\n *      SHRINK_TIME = 400ms\r\n */\n.preloader-wrapper {\n  display: inline-block;\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n\n.preloader-wrapper.small {\n  width: 36px;\n  height: 36px;\n}\n\n.preloader-wrapper.big {\n  width: 64px;\n  height: 64px;\n}\n\n.preloader-wrapper.active {\n  /* duration: 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */\n  -webkit-animation: container-rotate 1568ms linear infinite;\n  animation: container-rotate 1568ms linear infinite;\n}\n\n@-webkit-keyframes container-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes container-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  border-color: #26a69a;\n}\n\n.spinner-blue,\n.spinner-blue-only {\n  border-color: #4285f4;\n}\n\n.spinner-red,\n.spinner-red-only {\n  border-color: #db4437;\n}\n\n.spinner-yellow,\n.spinner-yellow-only {\n  border-color: #f4b400;\n}\n\n.spinner-green,\n.spinner-green-only {\n  border-color: #0f9d58;\n}\n\n/**\r\n * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):\r\n *\r\n * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't\r\n * guarantee that the animation will start _exactly_ after that value. So we avoid using\r\n * animation-delay and instead set custom keyframes for each color (as redundant as it\r\n * seems).\r\n *\r\n * We write out each animation in full (instead of separating animation-name,\r\n * animation-duration, etc.) because under the polyfill, Safari does not recognize those\r\n * specific properties properly, treats them as -webkit-animation, and overrides the\r\n * other animation rules. See https://github.com/Polymer/platform/issues/53.\r\n */\n.active .spinner-layer.spinner-blue {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .spinner-layer.spinner-red {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .spinner-layer.spinner-yellow {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .spinner-layer.spinner-green {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .spinner-layer,\n.active .spinner-layer.spinner-blue-only,\n.active .spinner-layer.spinner-red-only,\n.active .spinner-layer.spinner-yellow-only,\n.active .spinner-layer.spinner-green-only {\n  /* durations: 4 * ARCTIME */\n  opacity: 1;\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n@-webkit-keyframes fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n  }\n  /* 0.5 * ARCSIZE */\n  25% {\n    -webkit-transform: rotate(270deg);\n  }\n  /* 1   * ARCSIZE */\n  37.5% {\n    -webkit-transform: rotate(405deg);\n  }\n  /* 1.5 * ARCSIZE */\n  50% {\n    -webkit-transform: rotate(540deg);\n  }\n  /* 2   * ARCSIZE */\n  62.5% {\n    -webkit-transform: rotate(675deg);\n  }\n  /* 2.5 * ARCSIZE */\n  75% {\n    -webkit-transform: rotate(810deg);\n  }\n  /* 3   * ARCSIZE */\n  87.5% {\n    -webkit-transform: rotate(945deg);\n  }\n  /* 3.5 * ARCSIZE */\n  to {\n    -webkit-transform: rotate(1080deg);\n  }\n  /* 4   * ARCSIZE */\n}\n\n@keyframes fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n  }\n  /* 0.5 * ARCSIZE */\n  25% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n  }\n  /* 1   * ARCSIZE */\n  37.5% {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n  /* 1.5 * ARCSIZE */\n  50% {\n    -webkit-transform: rotate(540deg);\n            transform: rotate(540deg);\n  }\n  /* 2   * ARCSIZE */\n  62.5% {\n    -webkit-transform: rotate(675deg);\n            transform: rotate(675deg);\n  }\n  /* 2.5 * ARCSIZE */\n  75% {\n    -webkit-transform: rotate(810deg);\n            transform: rotate(810deg);\n  }\n  /* 3   * ARCSIZE */\n  87.5% {\n    -webkit-transform: rotate(945deg);\n            transform: rotate(945deg);\n  }\n  /* 3.5 * ARCSIZE */\n  to {\n    -webkit-transform: rotate(1080deg);\n            transform: rotate(1080deg);\n  }\n  /* 4   * ARCSIZE */\n}\n\n@-webkit-keyframes blue-fade-in-out {\n  from {\n    opacity: 1;\n  }\n  25% {\n    opacity: 1;\n  }\n  26% {\n    opacity: 0;\n  }\n  89% {\n    opacity: 0;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes blue-fade-in-out {\n  from {\n    opacity: 1;\n  }\n  25% {\n    opacity: 1;\n  }\n  26% {\n    opacity: 0;\n  }\n  89% {\n    opacity: 0;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes red-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  15% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  51% {\n    opacity: 0;\n  }\n}\n\n@keyframes red-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  15% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  51% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes yellow-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  76% {\n    opacity: 0;\n  }\n}\n\n@keyframes yellow-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  76% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes green-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  65% {\n    opacity: 0;\n  }\n  75% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes green-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  65% {\n    opacity: 0;\n  }\n  75% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n/**\r\n * Patch the gap that appear between the two adjacent div.circle-clipper while the\r\n * spinner is rotating (appears on Chrome 38, Safari 7.1, and IE 11).\r\n */\n.gap-patch {\n  position: absolute;\n  top: 0;\n  left: 45%;\n  width: 10%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit;\n}\n\n.gap-patch .circle {\n  width: 1000%;\n  left: -450%;\n}\n\n.circle-clipper {\n  display: inline-block;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit;\n}\n\n.circle-clipper .circle {\n  width: 200%;\n  height: 100%;\n  border-width: 3px;\n  /* STROKEWIDTH */\n  border-style: solid;\n  border-color: inherit;\n  border-bottom-color: transparent !important;\n  border-radius: 50%;\n  -webkit-animation: none;\n  animation: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.circle-clipper.left .circle {\n  left: 0;\n  border-right-color: transparent !important;\n  -webkit-transform: rotate(129deg);\n  transform: rotate(129deg);\n}\n\n.circle-clipper.right .circle {\n  left: -100%;\n  border-left-color: transparent !important;\n  -webkit-transform: rotate(-129deg);\n  transform: rotate(-129deg);\n}\n\n.active .circle-clipper.left .circle {\n  /* duration: ARCTIME */\n  -webkit-animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .circle-clipper.right .circle {\n  /* duration: ARCTIME */\n  -webkit-animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n@-webkit-keyframes left-spin {\n  from {\n    -webkit-transform: rotate(130deg);\n  }\n  50% {\n    -webkit-transform: rotate(-5deg);\n  }\n  to {\n    -webkit-transform: rotate(130deg);\n  }\n}\n\n@keyframes left-spin {\n  from {\n    -webkit-transform: rotate(130deg);\n            transform: rotate(130deg);\n  }\n  50% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n  to {\n    -webkit-transform: rotate(130deg);\n            transform: rotate(130deg);\n  }\n}\n\n@-webkit-keyframes right-spin {\n  from {\n    -webkit-transform: rotate(-130deg);\n  }\n  50% {\n    -webkit-transform: rotate(5deg);\n  }\n  to {\n    -webkit-transform: rotate(-130deg);\n  }\n}\n\n@keyframes right-spin {\n  from {\n    -webkit-transform: rotate(-130deg);\n            transform: rotate(-130deg);\n  }\n  50% {\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n  to {\n    -webkit-transform: rotate(-130deg);\n            transform: rotate(-130deg);\n  }\n}\n\n#spinnerContainer.cooldown {\n  /* duration: SHRINK_TIME */\n  -webkit-animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);\n  animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n@-webkit-keyframes fade-out {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fade-out {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.slider {\n  position: relative;\n  height: 400px;\n  width: 100%;\n}\n\n.slider.fullscreen {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.slider.fullscreen ul.slides {\n  height: 100%;\n}\n\n.slider.fullscreen ul.indicators {\n  z-index: 2;\n  bottom: 30px;\n}\n\n.slider .slides {\n  background-color: #9e9e9e;\n  margin: 0;\n  height: 400px;\n}\n\n.slider .slides li {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: inherit;\n  overflow: hidden;\n}\n\n.slider .slides li img {\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n}\n\n.slider .slides li .caption {\n  color: #fff;\n  position: absolute;\n  top: 15%;\n  left: 15%;\n  width: 70%;\n  opacity: 0;\n}\n\n.slider .slides li .caption p {\n  color: #e0e0e0;\n}\n\n.slider .slides li.active {\n  z-index: 2;\n}\n\n.slider .indicators {\n  position: absolute;\n  text-align: center;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n}\n\n.slider .indicators .indicator-item {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 16px;\n  width: 16px;\n  margin: 0 12px;\n  background-color: #e0e0e0;\n  -webkit-transition: background-color .3s;\n  transition: background-color .3s;\n  border-radius: 50%;\n}\n\n.slider .indicators .indicator-item.active {\n  background-color: #4CAF50;\n}\n\n.carousel {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 400px;\n  -webkit-perspective: 500px;\n          perspective: 500px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n          transform-origin: 0% 50%;\n}\n\n.carousel.carousel-slider {\n  top: 0;\n  left: 0;\n}\n\n.carousel.carousel-slider .carousel-fixed-item {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 20px;\n  z-index: 1;\n}\n\n.carousel.carousel-slider .carousel-fixed-item.with-indicators {\n  bottom: 68px;\n}\n\n.carousel.carousel-slider .carousel-item {\n  width: 100%;\n  height: 100%;\n  min-height: 400px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.carousel.carousel-slider .carousel-item h2 {\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 32px;\n}\n\n.carousel.carousel-slider .carousel-item p {\n  font-size: 15px;\n}\n\n.carousel .carousel-item {\n  visibility: hidden;\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.carousel .carousel-item > img {\n  width: 100%;\n}\n\n.carousel .indicators {\n  position: absolute;\n  text-align: center;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n}\n\n.carousel .indicators .indicator-item {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 8px;\n  width: 8px;\n  margin: 24px 4px;\n  background-color: rgba(255, 255, 255, 0.5);\n  -webkit-transition: background-color .3s;\n  transition: background-color .3s;\n  border-radius: 50%;\n}\n\n.carousel .indicators .indicator-item.active {\n  background-color: #fff;\n}\n\n.carousel.scrolling .carousel-item .materialboxed,\n.carousel .carousel-item:not(.active) .materialboxed {\n  pointer-events: none;\n}\n\n.tap-target-wrapper {\n  width: 800px;\n  height: 800px;\n  position: fixed;\n  z-index: 1000;\n  visibility: hidden;\n  -webkit-transition: visibility 0s .3s;\n  transition: visibility 0s .3s;\n}\n\n.tap-target-wrapper.open {\n  visibility: visible;\n  -webkit-transition: visibility 0s;\n  transition: visibility 0s;\n}\n\n.tap-target-wrapper.open .tap-target {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: .95;\n  -webkit-transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n  transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n}\n\n.tap-target-wrapper.open .tap-target-wave::before {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.tap-target-wrapper.open .tap-target-wave::after {\n  visibility: visible;\n  -webkit-animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\n          animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\n  -webkit-transition: opacity .3s,\r visibility 0s 1s,\r -webkit-transform .3s;\n  transition: opacity .3s,\r visibility 0s 1s,\r -webkit-transform .3s;\n  transition: opacity .3s,\r transform .3s,\r visibility 0s 1s;\n  transition: opacity .3s,\r transform .3s,\r visibility 0s 1s,\r -webkit-transform .3s;\n}\n\n.tap-target {\n  position: absolute;\n  font-size: 1rem;\n  border-radius: 50%;\n  background-color: #ee6e73;\n  -webkit-box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.14), 0 10px 50px 0 rgba(0, 0, 0, 0.12), 0 30px 10px -20px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.14), 0 10px 50px 0 rgba(0, 0, 0, 0.12), 0 30px 10px -20px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n  transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n}\n\n.tap-target-content {\n  position: relative;\n  display: table-cell;\n}\n\n.tap-target-wave {\n  position: absolute;\n  border-radius: 50%;\n  z-index: 10001;\n}\n\n.tap-target-wave::before, .tap-target-wave::after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #ffffff;\n}\n\n.tap-target-wave::before {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n}\n\n.tap-target-wave::after {\n  visibility: hidden;\n  -webkit-transition: opacity .3s,\r visibility 0s,\r -webkit-transform .3s;\n  transition: opacity .3s,\r visibility 0s,\r -webkit-transform .3s;\n  transition: opacity .3s,\r transform .3s,\r visibility 0s;\n  transition: opacity .3s,\r transform .3s,\r visibility 0s,\r -webkit-transform .3s;\n  z-index: -1;\n}\n\n.tap-target-origin {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 10002;\n  position: absolute !important;\n}\n\n.tap-target-origin:not(.btn):not(.btn-large):not(.btn-small), .tap-target-origin:not(.btn):not(.btn-large):not(.btn-small):hover {\n  background: none;\n}\n\n@media only screen and (max-width: 600px) {\n  .tap-target, .tap-target-wrapper {\n    width: 600px;\n    height: 600px;\n  }\n}\n\n.pulse {\n  overflow: visible;\n  position: relative;\n}\n\n.pulse::before {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: inherit;\n  border-radius: inherit;\n  -webkit-transition: opacity .3s, -webkit-transform .3s;\n  transition: opacity .3s, -webkit-transform .3s;\n  transition: opacity .3s, transform .3s;\n  transition: opacity .3s, transform .3s, -webkit-transform .3s;\n  -webkit-animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\n          animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\n  z-index: -1;\n}\n\n@-webkit-keyframes pulse-animation {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n  }\n}\n\n@keyframes pulse-animation {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n  }\n}\n\n/* Modal */\n.datepicker-modal {\n  max-width: 325px;\n  min-width: 300px;\n  max-height: none;\n}\n\n.datepicker-container.modal-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 0;\n}\n\n.datepicker-controls {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 280px;\n  margin: 0 auto;\n}\n\n.datepicker-controls .selects-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.datepicker-controls .select-wrapper input {\n  border-bottom: none;\n  text-align: center;\n  margin: 0;\n}\n\n.datepicker-controls .select-wrapper input:focus {\n  border-bottom: none;\n}\n\n.datepicker-controls .select-wrapper .caret {\n  display: none;\n}\n\n.datepicker-controls .select-year input {\n  width: 50px;\n}\n\n.datepicker-controls .select-month input {\n  width: 70px;\n}\n\n.month-prev, .month-next {\n  margin-top: 4px;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n}\n\n/* Date Display */\n.datepicker-date-display {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 auto;\n      -ms-flex: 1 auto;\n          flex: 1 auto;\n  background-color: #26a69a;\n  color: #fff;\n  padding: 20px 22px;\n  font-weight: 500;\n}\n\n.datepicker-date-display .year-text {\n  display: block;\n  font-size: 1.5rem;\n  line-height: 25px;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.datepicker-date-display .date-text {\n  display: block;\n  font-size: 2.8rem;\n  line-height: 47px;\n  font-weight: 500;\n}\n\n/* Calendar */\n.datepicker-calendar-container {\n  -webkit-box-flex: 2.5;\n  -webkit-flex: 2.5 auto;\n      -ms-flex: 2.5 auto;\n          flex: 2.5 auto;\n}\n\n.datepicker-table {\n  width: 280px;\n  font-size: 1rem;\n  margin: 0 auto;\n}\n\n.datepicker-table thead {\n  border-bottom: none;\n}\n\n.datepicker-table th {\n  padding: 10px 5px;\n  text-align: center;\n}\n\n.datepicker-table tr {\n  border: none;\n}\n\n.datepicker-table abbr {\n  text-decoration: none;\n  color: #999;\n}\n\n.datepicker-table td {\n  border-radius: 50%;\n  padding: 0;\n}\n\n.datepicker-table td.is-today {\n  color: #26a69a;\n}\n\n.datepicker-table td.is-selected {\n  background-color: #26a69a;\n  color: #fff;\n}\n\n.datepicker-table td.is-outside-current-month, .datepicker-table td.is-disabled {\n  color: rgba(0, 0, 0, 0.3);\n  pointer-events: none;\n}\n\n.datepicker-day-button {\n  background-color: transparent;\n  border: none;\n  line-height: 38px;\n  display: block;\n  width: 100%;\n  border-radius: 50%;\n  padding: 0 5px;\n  cursor: pointer;\n  color: inherit;\n}\n\n.datepicker-day-button:focus {\n  background-color: rgba(43, 161, 150, 0.25);\n}\n\n/* Footer */\n.datepicker-footer {\n  width: 280px;\n  margin: 0 auto;\n  padding-bottom: 5px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.datepicker-cancel,\n.datepicker-clear,\n.datepicker-today,\n.datepicker-done {\n  color: #26a69a;\n  padding: 0 1rem;\n}\n\n.datepicker-clear {\n  color: #F44336;\n}\n\n/* Media Queries */\n@media only screen and (min-width: 601px) {\n  .datepicker-modal {\n    max-width: 625px;\n  }\n  .datepicker-container.modal-content {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .datepicker-date-display {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 270px;\n        -ms-flex: 0 1 270px;\n            flex: 0 1 270px;\n  }\n  .datepicker-controls,\n  .datepicker-table,\n  .datepicker-footer {\n    width: 320px;\n  }\n  .datepicker-day-button {\n    line-height: 44px;\n  }\n}\n\n/* Timepicker Containers */\n.timepicker-modal {\n  max-width: 325px;\n  max-height: none;\n}\n\n.timepicker-container.modal-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 0;\n}\n\n.text-primary {\n  color: white;\n}\n\n/* Clock Digital Display */\n.timepicker-digital-display {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 auto;\n      -ms-flex: 1 auto;\n          flex: 1 auto;\n  background-color: #26a69a;\n  padding: 10px;\n  font-weight: 300;\n}\n\n.timepicker-text-container {\n  font-size: 4rem;\n  font-weight: bold;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 400;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.timepicker-span-hours,\n.timepicker-span-minutes,\n.timepicker-span-am-pm div {\n  cursor: pointer;\n}\n\n.timepicker-span-hours {\n  margin-right: 3px;\n}\n\n.timepicker-span-minutes {\n  margin-left: 3px;\n}\n\n.timepicker-display-am-pm {\n  font-size: 1.3rem;\n  position: absolute;\n  right: 1rem;\n  bottom: 1rem;\n  font-weight: 400;\n}\n\n/* Analog Clock Display */\n.timepicker-analog-display {\n  -webkit-box-flex: 2.5;\n  -webkit-flex: 2.5 auto;\n      -ms-flex: 2.5 auto;\n          flex: 2.5 auto;\n}\n\n.timepicker-plate {\n  background-color: #eee;\n  border-radius: 50%;\n  width: 270px;\n  height: 270px;\n  overflow: visible;\n  position: relative;\n  margin: auto;\n  margin-top: 25px;\n  margin-bottom: 5px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.timepicker-canvas,\n.timepicker-dial {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.timepicker-minutes {\n  visibility: hidden;\n}\n\n.timepicker-tick {\n  border-radius: 50%;\n  color: rgba(0, 0, 0, 0.87);\n  line-height: 40px;\n  text-align: center;\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  cursor: pointer;\n  font-size: 15px;\n}\n\n.timepicker-tick.active,\n.timepicker-tick:hover {\n  background-color: rgba(38, 166, 154, 0.25);\n}\n\n.timepicker-dial {\n  -webkit-transition: opacity 350ms, -webkit-transform 350ms;\n  transition: opacity 350ms, -webkit-transform 350ms;\n  transition: transform 350ms, opacity 350ms;\n  transition: transform 350ms, opacity 350ms, -webkit-transform 350ms;\n}\n\n.timepicker-dial-out {\n  opacity: 0;\n}\n\n.timepicker-dial-out.timepicker-hours {\n  -webkit-transform: scale(1.1, 1.1);\n          transform: scale(1.1, 1.1);\n}\n\n.timepicker-dial-out.timepicker-minutes {\n  -webkit-transform: scale(0.8, 0.8);\n          transform: scale(0.8, 0.8);\n}\n\n.timepicker-canvas {\n  -webkit-transition: opacity 175ms;\n  transition: opacity 175ms;\n}\n\n.timepicker-canvas line {\n  stroke: #26a69a;\n  stroke-width: 4;\n  stroke-linecap: round;\n}\n\n.timepicker-canvas-out {\n  opacity: 0.25;\n}\n\n.timepicker-canvas-bearing {\n  stroke: none;\n  fill: #26a69a;\n}\n\n.timepicker-canvas-bg {\n  stroke: none;\n  fill: #26a69a;\n}\n\n/* Footer */\n.timepicker-footer {\n  margin: 0 auto;\n  padding: 5px 1rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.timepicker-clear {\n  color: #F44336;\n}\n\n.timepicker-close {\n  color: #26a69a;\n}\n\n.timepicker-clear,\n.timepicker-close {\n  padding: 0 20px;\n}\n\n/* Media Queries */\n@media only screen and (min-width: 601px) {\n  .timepicker-modal {\n    max-width: 600px;\n  }\n  .timepicker-container.modal-content {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .timepicker-text-container {\n    top: 32%;\n  }\n  .timepicker-display-am-pm {\n    position: relative;\n    right: auto;\n    bottom: auto;\n    text-align: center;\n    margin-top: 1.2rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/css/materialize.css"],"names":[],"mappings":"AAAA;;;;EAIE;AACF;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,y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CV,WAAW;EACb;EACA;IACE,qBAAqB;IACrB,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,qBAAqB;IACrB,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,WAAW;IACX,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,oBAAoB;EACtB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,UAAU;EACZ;EACA;IACE,SAAS;EACX;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,UAAU;EACZ;EACA;IACE,SAAS;EACX;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,UAAU;EACZ;EACA;IACE,SAAS;EACX;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,WAAW;EACb;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,oBAAoB;IACpB,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,qBAAqB;IACrB,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,UAAU;IACV,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,qBAAqB;IACrB,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,qBAAqB;IACrB,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,UAAU;IACV,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,qBAAqB;IACrB,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,qBAAqB;IACrB,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,UAAU;IACV,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,qBAAqB;IACrB,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,qBAAqB;IACrB,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,WAAW;IACX,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,oBAAoB;EACtB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,UAAU;EACZ;EACA;IACE,SAAS;EACX;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,UAAU;EACZ;EACA;IACE,SAAS;EACX;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,UAAU;EACZ;EACA;IACE,SAAS;EACX;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,WAAW;EACb;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,oBAAoB;IACpB,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,qBAAqB;IACrB,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,UAAU;IACV,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,qBAAqB;IACrB,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,qBAAqB;IACrB,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,UAAU;IACV,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,qBAAqB;IACrB,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,qBAAqB;IACrB,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,UAAU;IACV,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,qBAAqB;IACrB,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,qBAAqB;IACrB,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,WAAW;IACX,iBAAiB;IACjB,UAAU;IACV,WAAW;EACb;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,oBAAoB;EACtB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,UAAU;EACZ;EACA;IACE,SAAS;EACX;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,UAAU;EACZ;EACA;IACE,SAAS;EACX;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,UAAU;EACZ;EACA;IACE,SAAS;EACX;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,WAAW;EACb;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;;;EAGE,cAAc;EACd,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,qBAAqB;EACrB,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,mCAAmC;UAC3B,2BAA2B;AACrC;;AAEA;EACE;IACE,SAAS;IACT,mCAAmC;YAC3B,2BAA2B;EACrC;EACA;IACE,UAAU;IACV,uBAAuB;YACf,eAAe;EACzB;EACA;IACE,YAAY;EACd;EACA;IACE,aAAa;IACb,UAAU;EACZ;AACF;;AAEA;EACE,aAAa;EACb,UAAU;AACZ;;AAEA;;;EAGE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,wCAAwC;EACxC,gCAAgC;EAChC,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,wCAAwC;EACxC,gCAAgC;EAChC,eAAe;EACf,WAAW;EACX,cAAc;EACd,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,SAAS;EACT,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,wBAAwB;UAChB,gBAAgB;AAC1B;;AAEA;EACE,MAAM;EACN,OAAO;AACT;;AAEA;EACE,+BAA+B;EAC/B,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;IACE,gBAAgB;EAClB;EACA;IACE,YAAY;IACZ,iBAAiB;EACnB;EACA;IACE,YAAY;EACd;AACF;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,gIAAgI;EAChI,mBAAmB;EACnB,0BAA0B;AAC5B;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mCAAmC;AACrC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE,0FAA0F;EAC1F,kFAAkF;EAClF,0EAA0E;EAC1E,uIAAuI;AACzI;;AAEA;EACE,2BAA2B;UACnB,mBAAmB;EAC3B,oDAAoD;EACpD,4CAA4C;EAC5C,oCAAoC;EACpC,2DAA2D;AAC7D;;AAEA;EACE,2BAA2B;UACnB,mBAAmB;AAC7B;;AAEA;EACE,2CAA2C;EAC3C,mCAAmC;EACnC,2BAA2B;EAC3B,oDAAoD;EACpD,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,sBAA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E,iCAAiC;YACzB,yBAAyB;EACnC;EACA,kBAAkB;EAClB;IACE,iCAAiC;YACzB,yBAAyB;EACnC;EACA,kBAAkB;EAClB;IACE,iCAAiC;YACzB,yBAAyB;EACnC;EACA,kBAAkB;EAClB;IACE,iCAAiC;YACzB,yBAAyB;EACnC;EACA,kBAAkB;EAClB;IACE,iCAAiC;YACzB,yBAAyB;EACnC;EACA,kBAAkB;EAClB;IACE,iCAAiC;YACzB,yBAAyB;EACnC;EACA,kBAAkB;EAClB;IACE,iCAAiC;YACzB,yBAAyB;EACnC;EACA,kBAAkB;EAClB;IACE,kCAAkC;YAC1B,0BAA0B;EACpC;EACA,kBAAkB;AACpB;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ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","sourcesContent":["/*!\r\n * Materialize v1.0.0 (http://materializecss.com)\r\n * Copyright 2014-2017 Materialize\r\n * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)\r\n */\r\n.materialize-red {\n  background-color: #e51c23 !important;\n}\n\n.materialize-red-text {\n  color: #e51c23 !important;\n}\n\n.materialize-red.lighten-5 {\n  background-color: #fdeaeb !important;\n}\n\n.materialize-red-text.text-lighten-5 {\n  color: #fdeaeb !important;\n}\n\n.materialize-red.lighten-4 {\n  background-color: #f8c1c3 !important;\n}\n\n.materialize-red-text.text-lighten-4 {\n  color: #f8c1c3 !important;\n}\n\n.materialize-red.lighten-3 {\n  background-color: #f3989b !important;\n}\n\n.materialize-red-text.text-lighten-3 {\n  color: #f3989b !important;\n}\n\n.materialize-red.lighten-2 {\n  background-color: #ee6e73 !important;\n}\n\n.materialize-red-text.text-lighten-2 {\n  color: #ee6e73 !important;\n}\n\n.materialize-red.lighten-1 {\n  background-color: #ea454b !important;\n}\n\n.materialize-red-text.text-lighten-1 {\n  color: #ea454b !important;\n}\n\n.materialize-red.darken-1 {\n  background-color: #d0181e !important;\n}\n\n.materialize-red-text.text-darken-1 {\n  color: #d0181e !important;\n}\n\n.materialize-red.darken-2 {\n  background-color: #b9151b !important;\n}\n\n.materialize-red-text.text-darken-2 {\n  color: #b9151b !important;\n}\n\n.materialize-red.darken-3 {\n  background-color: #a21318 !important;\n}\n\n.materialize-red-text.text-darken-3 {\n  color: #a21318 !important;\n}\n\n.materialize-red.darken-4 {\n  background-color: #8b1014 !important;\n}\n\n.materialize-red-text.text-darken-4 {\n  color: #8b1014 !important;\n}\n\n.red {\n  background-color: #F44336 !important;\n}\n\n.red-text {\n  color: #F44336 !important;\n}\n\n.red.lighten-5 {\n  background-color: #FFEBEE !important;\n}\n\n.red-text.text-lighten-5 {\n  color: #FFEBEE !important;\n}\n\n.red.lighten-4 {\n  background-color: #FFCDD2 !important;\n}\n\n.red-text.text-lighten-4 {\n  color: #FFCDD2 !important;\n}\n\n.red.lighten-3 {\n  background-color: #EF9A9A !important;\n}\n\n.red-text.text-lighten-3 {\n  color: #EF9A9A !important;\n}\n\n.red.lighten-2 {\n  background-color: #E57373 !important;\n}\n\n.red-text.text-lighten-2 {\n  color: #E57373 !important;\n}\n\n.red.lighten-1 {\n  background-color: #EF5350 !important;\n}\n\n.red-text.text-lighten-1 {\n  color: #EF5350 !important;\n}\n\n.red.darken-1 {\n  background-color: #E53935 !important;\n}\n\n.red-text.text-darken-1 {\n  color: #E53935 !important;\n}\n\n.red.darken-2 {\n  background-color: #D32F2F !important;\n}\n\n.red-text.text-darken-2 {\n  color: #D32F2F !important;\n}\n\n.red.darken-3 {\n  background-color: #C62828 !important;\n}\n\n.red-text.text-darken-3 {\n  color: #C62828 !important;\n}\n\n.red.darken-4 {\n  background-color: #B71C1C !important;\n}\n\n.red-text.text-darken-4 {\n  color: #B71C1C !important;\n}\n\n.red.accent-1 {\n  background-color: #FF8A80 !important;\n}\n\n.red-text.text-accent-1 {\n  color: #FF8A80 !important;\n}\n\n.red.accent-2 {\n  background-color: #FF5252 !important;\n}\n\n.red-text.text-accent-2 {\n  color: #FF5252 !important;\n}\n\n.red.accent-3 {\n  background-color: #FF1744 !important;\n}\n\n.red-text.text-accent-3 {\n  color: #FF1744 !important;\n}\n\n.red.accent-4 {\n  background-color: #D50000 !important;\n}\n\n.red-text.text-accent-4 {\n  color: #D50000 !important;\n}\n\n.pink {\n  background-color: #e91e63 !important;\n}\n\n.pink-text {\n  color: #e91e63 !important;\n}\n\n.pink.lighten-5 {\n  background-color: #fce4ec !important;\n}\n\n.pink-text.text-lighten-5 {\n  color: #fce4ec !important;\n}\n\n.pink.lighten-4 {\n  background-color: #f8bbd0 !important;\n}\n\n.pink-text.text-lighten-4 {\n  color: #f8bbd0 !important;\n}\n\n.pink.lighten-3 {\n  background-color: #f48fb1 !important;\n}\n\n.pink-text.text-lighten-3 {\n  color: #f48fb1 !important;\n}\n\n.pink.lighten-2 {\n  background-color: #f06292 !important;\n}\n\n.pink-text.text-lighten-2 {\n  color: #f06292 !important;\n}\n\n.pink.lighten-1 {\n  background-color: #ec407a !important;\n}\n\n.pink-text.text-lighten-1 {\n  color: #ec407a !important;\n}\n\n.pink.darken-1 {\n  background-color: #d81b60 !important;\n}\n\n.pink-text.text-darken-1 {\n  color: #d81b60 !important;\n}\n\n.pink.darken-2 {\n  background-color: #c2185b !important;\n}\n\n.pink-text.text-darken-2 {\n  color: #c2185b !important;\n}\n\n.pink.darken-3 {\n  background-color: #ad1457 !important;\n}\n\n.pink-text.text-darken-3 {\n  color: #ad1457 !important;\n}\n\n.pink.darken-4 {\n  background-color: #880e4f !important;\n}\n\n.pink-text.text-darken-4 {\n  color: #880e4f !important;\n}\n\n.pink.accent-1 {\n  background-color: #ff80ab !important;\n}\n\n.pink-text.text-accent-1 {\n  color: #ff80ab !important;\n}\n\n.pink.accent-2 {\n  background-color: #ff4081 !important;\n}\n\n.pink-text.text-accent-2 {\n  color: #ff4081 !important;\n}\n\n.pink.accent-3 {\n  background-color: #f50057 !important;\n}\n\n.pink-text.text-accent-3 {\n  color: #f50057 !important;\n}\n\n.pink.accent-4 {\n  background-color: #c51162 !important;\n}\n\n.pink-text.text-accent-4 {\n  color: #c51162 !important;\n}\n\n.purple {\n  background-color: #9c27b0 !important;\n}\n\n.purple-text {\n  color: #9c27b0 !important;\n}\n\n.purple.lighten-5 {\n  background-color: #f3e5f5 !important;\n}\n\n.purple-text.text-lighten-5 {\n  color: #f3e5f5 !important;\n}\n\n.purple.lighten-4 {\n  background-color: #e1bee7 !important;\n}\n\n.purple-text.text-lighten-4 {\n  color: #e1bee7 !important;\n}\n\n.purple.lighten-3 {\n  background-color: #ce93d8 !important;\n}\n\n.purple-text.text-lighten-3 {\n  color: #ce93d8 !important;\n}\n\n.purple.lighten-2 {\n  background-color: #ba68c8 !important;\n}\n\n.purple-text.text-lighten-2 {\n  color: #ba68c8 !important;\n}\n\n.purple.lighten-1 {\n  background-color: #ab47bc !important;\n}\n\n.purple-text.text-lighten-1 {\n  color: #ab47bc !important;\n}\n\n.purple.darken-1 {\n  background-color: #8e24aa !important;\n}\n\n.purple-text.text-darken-1 {\n  color: #8e24aa !important;\n}\n\n.purple.darken-2 {\n  background-color: #7b1fa2 !important;\n}\n\n.purple-text.text-darken-2 {\n  color: #7b1fa2 !important;\n}\n\n.purple.darken-3 {\n  background-color: #6a1b9a !important;\n}\n\n.purple-text.text-darken-3 {\n  color: #6a1b9a !important;\n}\n\n.purple.darken-4 {\n  background-color: #4a148c !important;\n}\n\n.purple-text.text-darken-4 {\n  color: #4a148c !important;\n}\n\n.purple.accent-1 {\n  background-color: #ea80fc !important;\n}\n\n.purple-text.text-accent-1 {\n  color: #ea80fc !important;\n}\n\n.purple.accent-2 {\n  background-color: #e040fb !important;\n}\n\n.purple-text.text-accent-2 {\n  color: #e040fb !important;\n}\n\n.purple.accent-3 {\n  background-color: #d500f9 !important;\n}\n\n.purple-text.text-accent-3 {\n  color: #d500f9 !important;\n}\n\n.purple.accent-4 {\n  background-color: #aa00ff !important;\n}\n\n.purple-text.text-accent-4 {\n  color: #aa00ff !important;\n}\n\n.deep-purple {\n  background-color: #673ab7 !important;\n}\n\n.deep-purple-text {\n  color: #673ab7 !important;\n}\n\n.deep-purple.lighten-5 {\n  background-color: #ede7f6 !important;\n}\n\n.deep-purple-text.text-lighten-5 {\n  color: #ede7f6 !important;\n}\n\n.deep-purple.lighten-4 {\n  background-color: #d1c4e9 !important;\n}\n\n.deep-purple-text.text-lighten-4 {\n  color: #d1c4e9 !important;\n}\n\n.deep-purple.lighten-3 {\n  background-color: #b39ddb !important;\n}\n\n.deep-purple-text.text-lighten-3 {\n  color: #b39ddb !important;\n}\n\n.deep-purple.lighten-2 {\n  background-color: #9575cd !important;\n}\n\n.deep-purple-text.text-lighten-2 {\n  color: #9575cd !important;\n}\n\n.deep-purple.lighten-1 {\n  background-color: #7e57c2 !important;\n}\n\n.deep-purple-text.text-lighten-1 {\n  color: #7e57c2 !important;\n}\n\n.deep-purple.darken-1 {\n  background-color: #5e35b1 !important;\n}\n\n.deep-purple-text.text-darken-1 {\n  color: #5e35b1 !important;\n}\n\n.deep-purple.darken-2 {\n  background-color: #512da8 !important;\n}\n\n.deep-purple-text.text-darken-2 {\n  color: #512da8 !important;\n}\n\n.deep-purple.darken-3 {\n  background-color: #4527a0 !important;\n}\n\n.deep-purple-text.text-darken-3 {\n  color: #4527a0 !important;\n}\n\n.deep-purple.darken-4 {\n  background-color: #311b92 !important;\n}\n\n.deep-purple-text.text-darken-4 {\n  color: #311b92 !important;\n}\n\n.deep-purple.accent-1 {\n  background-color: #b388ff !important;\n}\n\n.deep-purple-text.text-accent-1 {\n  color: #b388ff !important;\n}\n\n.deep-purple.accent-2 {\n  background-color: #7c4dff !important;\n}\n\n.deep-purple-text.text-accent-2 {\n  color: #7c4dff !important;\n}\n\n.deep-purple.accent-3 {\n  background-color: #651fff !important;\n}\n\n.deep-purple-text.text-accent-3 {\n  color: #651fff !important;\n}\n\n.deep-purple.accent-4 {\n  background-color: #6200ea !important;\n}\n\n.deep-purple-text.text-accent-4 {\n  color: #6200ea !important;\n}\n\n.indigo {\n  background-color: #3f51b5 !important;\n}\n\n.indigo-text {\n  color: #3f51b5 !important;\n}\n\n.indigo.lighten-5 {\n  background-color: #e8eaf6 !important;\n}\n\n.indigo-text.text-lighten-5 {\n  color: #e8eaf6 !important;\n}\n\n.indigo.lighten-4 {\n  background-color: #c5cae9 !important;\n}\n\n.indigo-text.text-lighten-4 {\n  color: #c5cae9 !important;\n}\n\n.indigo.lighten-3 {\n  background-color: #9fa8da !important;\n}\n\n.indigo-text.text-lighten-3 {\n  color: #9fa8da !important;\n}\n\n.indigo.lighten-2 {\n  background-color: #7986cb !important;\n}\n\n.indigo-text.text-lighten-2 {\n  color: #7986cb !important;\n}\n\n.indigo.lighten-1 {\n  background-color: #5c6bc0 !important;\n}\n\n.indigo-text.text-lighten-1 {\n  color: #5c6bc0 !important;\n}\n\n.indigo.darken-1 {\n  background-color: #3949ab !important;\n}\n\n.indigo-text.text-darken-1 {\n  color: #3949ab !important;\n}\n\n.indigo.darken-2 {\n  background-color: #303f9f !important;\n}\n\n.indigo-text.text-darken-2 {\n  color: #303f9f !important;\n}\n\n.indigo.darken-3 {\n  background-color: #283593 !important;\n}\n\n.indigo-text.text-darken-3 {\n  color: #283593 !important;\n}\n\n.indigo.darken-4 {\n  background-color: #1a237e !important;\n}\n\n.indigo-text.text-darken-4 {\n  color: #1a237e !important;\n}\n\n.indigo.accent-1 {\n  background-color: #8c9eff !important;\n}\n\n.indigo-text.text-accent-1 {\n  color: #8c9eff !important;\n}\n\n.indigo.accent-2 {\n  background-color: #536dfe !important;\n}\n\n.indigo-text.text-accent-2 {\n  color: #536dfe !important;\n}\n\n.indigo.accent-3 {\n  background-color: #3d5afe !important;\n}\n\n.indigo-text.text-accent-3 {\n  color: #3d5afe !important;\n}\n\n.indigo.accent-4 {\n  background-color: #304ffe !important;\n}\n\n.indigo-text.text-accent-4 {\n  color: #304ffe !important;\n}\n\n.blue {\n  background-color: #2196F3 !important;\n}\n\n.blue-text {\n  color: #2196F3 !important;\n}\n\n.blue.lighten-5 {\n  background-color: #E3F2FD !important;\n}\n\n.blue-text.text-lighten-5 {\n  color: #E3F2FD !important;\n}\n\n.blue.lighten-4 {\n  background-color: #BBDEFB !important;\n}\n\n.blue-text.text-lighten-4 {\n  color: #BBDEFB !important;\n}\n\n.blue.lighten-3 {\n  background-color: #90CAF9 !important;\n}\n\n.blue-text.text-lighten-3 {\n  color: #90CAF9 !important;\n}\n\n.blue.lighten-2 {\n  background-color: #64B5F6 !important;\n}\n\n.blue-text.text-lighten-2 {\n  color: #64B5F6 !important;\n}\n\n.blue.lighten-1 {\n  background-color: #42A5F5 !important;\n}\n\n.blue-text.text-lighten-1 {\n  color: #42A5F5 !important;\n}\n\n.blue.darken-1 {\n  background-color: #1E88E5 !important;\n}\n\n.blue-text.text-darken-1 {\n  color: #1E88E5 !important;\n}\n\n.blue.darken-2 {\n  background-color: #1976D2 !important;\n}\n\n.blue-text.text-darken-2 {\n  color: #1976D2 !important;\n}\n\n.blue.darken-3 {\n  background-color: #1565C0 !important;\n}\n\n.blue-text.text-darken-3 {\n  color: #1565C0 !important;\n}\n\n.blue.darken-4 {\n  background-color: #0D47A1 !important;\n}\n\n.blue-text.text-darken-4 {\n  color: #0D47A1 !important;\n}\n\n.blue.accent-1 {\n  background-color: #82B1FF !important;\n}\n\n.blue-text.text-accent-1 {\n  color: #82B1FF !important;\n}\n\n.blue.accent-2 {\n  background-color: #448AFF !important;\n}\n\n.blue-text.text-accent-2 {\n  color: #448AFF !important;\n}\n\n.blue.accent-3 {\n  background-color: #2979FF !important;\n}\n\n.blue-text.text-accent-3 {\n  color: #2979FF !important;\n}\n\n.blue.accent-4 {\n  background-color: #2962FF !important;\n}\n\n.blue-text.text-accent-4 {\n  color: #2962FF !important;\n}\n\n.light-blue {\n  background-color: #03a9f4 !important;\n}\n\n.light-blue-text {\n  color: #03a9f4 !important;\n}\n\n.light-blue.lighten-5 {\n  background-color: #e1f5fe !important;\n}\n\n.light-blue-text.text-lighten-5 {\n  color: #e1f5fe !important;\n}\n\n.light-blue.lighten-4 {\n  background-color: #b3e5fc !important;\n}\n\n.light-blue-text.text-lighten-4 {\n  color: #b3e5fc !important;\n}\n\n.light-blue.lighten-3 {\n  background-color: #81d4fa !important;\n}\n\n.light-blue-text.text-lighten-3 {\n  color: #81d4fa !important;\n}\n\n.light-blue.lighten-2 {\n  background-color: #4fc3f7 !important;\n}\n\n.light-blue-text.text-lighten-2 {\n  color: #4fc3f7 !important;\n}\n\n.light-blue.lighten-1 {\n  background-color: #29b6f6 !important;\n}\n\n.light-blue-text.text-lighten-1 {\n  color: #29b6f6 !important;\n}\n\n.light-blue.darken-1 {\n  background-color: #039be5 !important;\n}\n\n.light-blue-text.text-darken-1 {\n  color: #039be5 !important;\n}\n\n.light-blue.darken-2 {\n  background-color: #0288d1 !important;\n}\n\n.light-blue-text.text-darken-2 {\n  color: #0288d1 !important;\n}\n\n.light-blue.darken-3 {\n  background-color: #0277bd !important;\n}\n\n.light-blue-text.text-darken-3 {\n  color: #0277bd !important;\n}\n\n.light-blue.darken-4 {\n  background-color: #01579b !important;\n}\n\n.light-blue-text.text-darken-4 {\n  color: #01579b !important;\n}\n\n.light-blue.accent-1 {\n  background-color: #80d8ff !important;\n}\n\n.light-blue-text.text-accent-1 {\n  color: #80d8ff !important;\n}\n\n.light-blue.accent-2 {\n  background-color: #40c4ff !important;\n}\n\n.light-blue-text.text-accent-2 {\n  color: #40c4ff !important;\n}\n\n.light-blue.accent-3 {\n  background-color: #00b0ff !important;\n}\n\n.light-blue-text.text-accent-3 {\n  color: #00b0ff !important;\n}\n\n.light-blue.accent-4 {\n  background-color: #0091ea !important;\n}\n\n.light-blue-text.text-accent-4 {\n  color: #0091ea !important;\n}\n\n.cyan {\n  background-color: #00bcd4 !important;\n}\n\n.cyan-text {\n  color: #00bcd4 !important;\n}\n\n.cyan.lighten-5 {\n  background-color: #e0f7fa !important;\n}\n\n.cyan-text.text-lighten-5 {\n  color: #e0f7fa !important;\n}\n\n.cyan.lighten-4 {\n  background-color: #b2ebf2 !important;\n}\n\n.cyan-text.text-lighten-4 {\n  color: #b2ebf2 !important;\n}\n\n.cyan.lighten-3 {\n  background-color: #80deea !important;\n}\n\n.cyan-text.text-lighten-3 {\n  color: #80deea !important;\n}\n\n.cyan.lighten-2 {\n  background-color: #4dd0e1 !important;\n}\n\n.cyan-text.text-lighten-2 {\n  color: #4dd0e1 !important;\n}\n\n.cyan.lighten-1 {\n  background-color: #26c6da !important;\n}\n\n.cyan-text.text-lighten-1 {\n  color: #26c6da !important;\n}\n\n.cyan.darken-1 {\n  background-color: #00acc1 !important;\n}\n\n.cyan-text.text-darken-1 {\n  color: #00acc1 !important;\n}\n\n.cyan.darken-2 {\n  background-color: #0097a7 !important;\n}\n\n.cyan-text.text-darken-2 {\n  color: #0097a7 !important;\n}\n\n.cyan.darken-3 {\n  background-color: #00838f !important;\n}\n\n.cyan-text.text-darken-3 {\n  color: #00838f !important;\n}\n\n.cyan.darken-4 {\n  background-color: #006064 !important;\n}\n\n.cyan-text.text-darken-4 {\n  color: #006064 !important;\n}\n\n.cyan.accent-1 {\n  background-color: #84ffff !important;\n}\n\n.cyan-text.text-accent-1 {\n  color: #84ffff !important;\n}\n\n.cyan.accent-2 {\n  background-color: #18ffff !important;\n}\n\n.cyan-text.text-accent-2 {\n  color: #18ffff !important;\n}\n\n.cyan.accent-3 {\n  background-color: #00e5ff !important;\n}\n\n.cyan-text.text-accent-3 {\n  color: #00e5ff !important;\n}\n\n.cyan.accent-4 {\n  background-color: #00b8d4 !important;\n}\n\n.cyan-text.text-accent-4 {\n  color: #00b8d4 !important;\n}\n\n.teal {\n  background-color: #009688 !important;\n}\n\n.teal-text {\n  color: #009688 !important;\n}\n\n.teal.lighten-5 {\n  background-color: #e0f2f1 !important;\n}\n\n.teal-text.text-lighten-5 {\n  color: #e0f2f1 !important;\n}\n\n.teal.lighten-4 {\n  background-color: #b2dfdb !important;\n}\n\n.teal-text.text-lighten-4 {\n  color: #b2dfdb !important;\n}\n\n.teal.lighten-3 {\n  background-color: #80cbc4 !important;\n}\n\n.teal-text.text-lighten-3 {\n  color: #80cbc4 !important;\n}\n\n.teal.lighten-2 {\n  background-color: #4db6ac !important;\n}\n\n.teal-text.text-lighten-2 {\n  color: #4db6ac !important;\n}\n\n.teal.lighten-1 {\n  background-color: #26a69a !important;\n}\n\n.teal-text.text-lighten-1 {\n  color: #26a69a !important;\n}\n\n.teal.darken-1 {\n  background-color: #00897b !important;\n}\n\n.teal-text.text-darken-1 {\n  color: #00897b !important;\n}\n\n.teal.darken-2 {\n  background-color: #00796b !important;\n}\n\n.teal-text.text-darken-2 {\n  color: #00796b !important;\n}\n\n.teal.darken-3 {\n  background-color: #00695c !important;\n}\n\n.teal-text.text-darken-3 {\n  color: #00695c !important;\n}\n\n.teal.darken-4 {\n  background-color: #004d40 !important;\n}\n\n.teal-text.text-darken-4 {\n  color: #004d40 !important;\n}\n\n.teal.accent-1 {\n  background-color: #a7ffeb !important;\n}\n\n.teal-text.text-accent-1 {\n  color: #a7ffeb !important;\n}\n\n.teal.accent-2 {\n  background-color: #64ffda !important;\n}\n\n.teal-text.text-accent-2 {\n  color: #64ffda !important;\n}\n\n.teal.accent-3 {\n  background-color: #1de9b6 !important;\n}\n\n.teal-text.text-accent-3 {\n  color: #1de9b6 !important;\n}\n\n.teal.accent-4 {\n  background-color: #00bfa5 !important;\n}\n\n.teal-text.text-accent-4 {\n  color: #00bfa5 !important;\n}\n\n.green {\n  background-color: #4CAF50 !important;\n}\n\n.green-text {\n  color: #4CAF50 !important;\n}\n\n.green.lighten-5 {\n  background-color: #E8F5E9 !important;\n}\n\n.green-text.text-lighten-5 {\n  color: #E8F5E9 !important;\n}\n\n.green.lighten-4 {\n  background-color: #C8E6C9 !important;\n}\n\n.green-text.text-lighten-4 {\n  color: #C8E6C9 !important;\n}\n\n.green.lighten-3 {\n  background-color: #A5D6A7 !important;\n}\n\n.green-text.text-lighten-3 {\n  color: #A5D6A7 !important;\n}\n\n.green.lighten-2 {\n  background-color: #81C784 !important;\n}\n\n.green-text.text-lighten-2 {\n  color: #81C784 !important;\n}\n\n.green.lighten-1 {\n  background-color: #66BB6A !important;\n}\n\n.green-text.text-lighten-1 {\n  color: #66BB6A !important;\n}\n\n.green.darken-1 {\n  background-color: #43A047 !important;\n}\n\n.green-text.text-darken-1 {\n  color: #43A047 !important;\n}\n\n.green.darken-2 {\n  background-color: #388E3C !important;\n}\n\n.green-text.text-darken-2 {\n  color: #388E3C !important;\n}\n\n.green.darken-3 {\n  background-color: #2E7D32 !important;\n}\n\n.green-text.text-darken-3 {\n  color: #2E7D32 !important;\n}\n\n.green.darken-4 {\n  background-color: #1B5E20 !important;\n}\n\n.green-text.text-darken-4 {\n  color: #1B5E20 !important;\n}\n\n.green.accent-1 {\n  background-color: #B9F6CA !important;\n}\n\n.green-text.text-accent-1 {\n  color: #B9F6CA !important;\n}\n\n.green.accent-2 {\n  background-color: #69F0AE !important;\n}\n\n.green-text.text-accent-2 {\n  color: #69F0AE !important;\n}\n\n.green.accent-3 {\n  background-color: #00E676 !important;\n}\n\n.green-text.text-accent-3 {\n  color: #00E676 !important;\n}\n\n.green.accent-4 {\n  background-color: #00C853 !important;\n}\n\n.green-text.text-accent-4 {\n  color: #00C853 !important;\n}\n\n.light-green {\n  background-color: #8bc34a !important;\n}\n\n.light-green-text {\n  color: #8bc34a !important;\n}\n\n.light-green.lighten-5 {\n  background-color: #f1f8e9 !important;\n}\n\n.light-green-text.text-lighten-5 {\n  color: #f1f8e9 !important;\n}\n\n.light-green.lighten-4 {\n  background-color: #dcedc8 !important;\n}\n\n.light-green-text.text-lighten-4 {\n  color: #dcedc8 !important;\n}\n\n.light-green.lighten-3 {\n  background-color: #c5e1a5 !important;\n}\n\n.light-green-text.text-lighten-3 {\n  color: #c5e1a5 !important;\n}\n\n.light-green.lighten-2 {\n  background-color: #aed581 !important;\n}\n\n.light-green-text.text-lighten-2 {\n  color: #aed581 !important;\n}\n\n.light-green.lighten-1 {\n  background-color: #9ccc65 !important;\n}\n\n.light-green-text.text-lighten-1 {\n  color: #9ccc65 !important;\n}\n\n.light-green.darken-1 {\n  background-color: #7cb342 !important;\n}\n\n.light-green-text.text-darken-1 {\n  color: #7cb342 !important;\n}\n\n.light-green.darken-2 {\n  background-color: #689f38 !important;\n}\n\n.light-green-text.text-darken-2 {\n  color: #689f38 !important;\n}\n\n.light-green.darken-3 {\n  background-color: #558b2f !important;\n}\n\n.light-green-text.text-darken-3 {\n  color: #558b2f !important;\n}\n\n.light-green.darken-4 {\n  background-color: #33691e !important;\n}\n\n.light-green-text.text-darken-4 {\n  color: #33691e !important;\n}\n\n.light-green.accent-1 {\n  background-color: #ccff90 !important;\n}\n\n.light-green-text.text-accent-1 {\n  color: #ccff90 !important;\n}\n\n.light-green.accent-2 {\n  background-color: #b2ff59 !important;\n}\n\n.light-green-text.text-accent-2 {\n  color: #b2ff59 !important;\n}\n\n.light-green.accent-3 {\n  background-color: #76ff03 !important;\n}\n\n.light-green-text.text-accent-3 {\n  color: #76ff03 !important;\n}\n\n.light-green.accent-4 {\n  background-color: #64dd17 !important;\n}\n\n.light-green-text.text-accent-4 {\n  color: #64dd17 !important;\n}\n\n.lime {\n  background-color: #cddc39 !important;\n}\n\n.lime-text {\n  color: #cddc39 !important;\n}\n\n.lime.lighten-5 {\n  background-color: #f9fbe7 !important;\n}\n\n.lime-text.text-lighten-5 {\n  color: #f9fbe7 !important;\n}\n\n.lime.lighten-4 {\n  background-color: #f0f4c3 !important;\n}\n\n.lime-text.text-lighten-4 {\n  color: #f0f4c3 !important;\n}\n\n.lime.lighten-3 {\n  background-color: #e6ee9c !important;\n}\n\n.lime-text.text-lighten-3 {\n  color: #e6ee9c !important;\n}\n\n.lime.lighten-2 {\n  background-color: #dce775 !important;\n}\n\n.lime-text.text-lighten-2 {\n  color: #dce775 !important;\n}\n\n.lime.lighten-1 {\n  background-color: #d4e157 !important;\n}\n\n.lime-text.text-lighten-1 {\n  color: #d4e157 !important;\n}\n\n.lime.darken-1 {\n  background-color: #c0ca33 !important;\n}\n\n.lime-text.text-darken-1 {\n  color: #c0ca33 !important;\n}\n\n.lime.darken-2 {\n  background-color: #afb42b !important;\n}\n\n.lime-text.text-darken-2 {\n  color: #afb42b !important;\n}\n\n.lime.darken-3 {\n  background-color: #9e9d24 !important;\n}\n\n.lime-text.text-darken-3 {\n  color: #9e9d24 !important;\n}\n\n.lime.darken-4 {\n  background-color: #827717 !important;\n}\n\n.lime-text.text-darken-4 {\n  color: #827717 !important;\n}\n\n.lime.accent-1 {\n  background-color: #f4ff81 !important;\n}\n\n.lime-text.text-accent-1 {\n  color: #f4ff81 !important;\n}\n\n.lime.accent-2 {\n  background-color: #eeff41 !important;\n}\n\n.lime-text.text-accent-2 {\n  color: #eeff41 !important;\n}\n\n.lime.accent-3 {\n  background-color: #c6ff00 !important;\n}\n\n.lime-text.text-accent-3 {\n  color: #c6ff00 !important;\n}\n\n.lime.accent-4 {\n  background-color: #aeea00 !important;\n}\n\n.lime-text.text-accent-4 {\n  color: #aeea00 !important;\n}\n\n.yellow {\n  background-color: #ffeb3b !important;\n}\n\n.yellow-text {\n  color: #ffeb3b !important;\n}\n\n.yellow.lighten-5 {\n  background-color: #fffde7 !important;\n}\n\n.yellow-text.text-lighten-5 {\n  color: #fffde7 !important;\n}\n\n.yellow.lighten-4 {\n  background-color: #fff9c4 !important;\n}\n\n.yellow-text.text-lighten-4 {\n  color: #fff9c4 !important;\n}\n\n.yellow.lighten-3 {\n  background-color: #fff59d !important;\n}\n\n.yellow-text.text-lighten-3 {\n  color: #fff59d !important;\n}\n\n.yellow.lighten-2 {\n  background-color: #fff176 !important;\n}\n\n.yellow-text.text-lighten-2 {\n  color: #fff176 !important;\n}\n\n.yellow.lighten-1 {\n  background-color: #ffee58 !important;\n}\n\n.yellow-text.text-lighten-1 {\n  color: #ffee58 !important;\n}\n\n.yellow.darken-1 {\n  background-color: #fdd835 !important;\n}\n\n.yellow-text.text-darken-1 {\n  color: #fdd835 !important;\n}\n\n.yellow.darken-2 {\n  background-color: #fbc02d !important;\n}\n\n.yellow-text.text-darken-2 {\n  color: #fbc02d !important;\n}\n\n.yellow.darken-3 {\n  background-color: #f9a825 !important;\n}\n\n.yellow-text.text-darken-3 {\n  color: #f9a825 !important;\n}\n\n.yellow.darken-4 {\n  background-color: #f57f17 !important;\n}\n\n.yellow-text.text-darken-4 {\n  color: #f57f17 !important;\n}\n\n.yellow.accent-1 {\n  background-color: #ffff8d !important;\n}\n\n.yellow-text.text-accent-1 {\n  color: #ffff8d !important;\n}\n\n.yellow.accent-2 {\n  background-color: #ffff00 !important;\n}\n\n.yellow-text.text-accent-2 {\n  color: #ffff00 !important;\n}\n\n.yellow.accent-3 {\n  background-color: #ffea00 !important;\n}\n\n.yellow-text.text-accent-3 {\n  color: #ffea00 !important;\n}\n\n.yellow.accent-4 {\n  background-color: #ffd600 !important;\n}\n\n.yellow-text.text-accent-4 {\n  color: #ffd600 !important;\n}\n\n.amber {\n  background-color: #ffc107 !important;\n}\n\n.amber-text {\n  color: #ffc107 !important;\n}\n\n.amber.lighten-5 {\n  background-color: #fff8e1 !important;\n}\n\n.amber-text.text-lighten-5 {\n  color: #fff8e1 !important;\n}\n\n.amber.lighten-4 {\n  background-color: #ffecb3 !important;\n}\n\n.amber-text.text-lighten-4 {\n  color: #ffecb3 !important;\n}\n\n.amber.lighten-3 {\n  background-color: #ffe082 !important;\n}\n\n.amber-text.text-lighten-3 {\n  color: #ffe082 !important;\n}\n\n.amber.lighten-2 {\n  background-color: #ffd54f !important;\n}\n\n.amber-text.text-lighten-2 {\n  color: #ffd54f !important;\n}\n\n.amber.lighten-1 {\n  background-color: #ffca28 !important;\n}\n\n.amber-text.text-lighten-1 {\n  color: #ffca28 !important;\n}\n\n.amber.darken-1 {\n  background-color: #ffb300 !important;\n}\n\n.amber-text.text-darken-1 {\n  color: #ffb300 !important;\n}\n\n.amber.darken-2 {\n  background-color: #ffa000 !important;\n}\n\n.amber-text.text-darken-2 {\n  color: #ffa000 !important;\n}\n\n.amber.darken-3 {\n  background-color: #ff8f00 !important;\n}\n\n.amber-text.text-darken-3 {\n  color: #ff8f00 !important;\n}\n\n.amber.darken-4 {\n  background-color: #ff6f00 !important;\n}\n\n.amber-text.text-darken-4 {\n  color: #ff6f00 !important;\n}\n\n.amber.accent-1 {\n  background-color: #ffe57f !important;\n}\n\n.amber-text.text-accent-1 {\n  color: #ffe57f !important;\n}\n\n.amber.accent-2 {\n  background-color: #ffd740 !important;\n}\n\n.amber-text.text-accent-2 {\n  color: #ffd740 !important;\n}\n\n.amber.accent-3 {\n  background-color: #ffc400 !important;\n}\n\n.amber-text.text-accent-3 {\n  color: #ffc400 !important;\n}\n\n.amber.accent-4 {\n  background-color: #ffab00 !important;\n}\n\n.amber-text.text-accent-4 {\n  color: #ffab00 !important;\n}\n\n.orange {\n  background-color: #ff9800 !important;\n}\n\n.orange-text {\n  color: #ff9800 !important;\n}\n\n.orange.lighten-5 {\n  background-color: #fff3e0 !important;\n}\n\n.orange-text.text-lighten-5 {\n  color: #fff3e0 !important;\n}\n\n.orange.lighten-4 {\n  background-color: #ffe0b2 !important;\n}\n\n.orange-text.text-lighten-4 {\n  color: #ffe0b2 !important;\n}\n\n.orange.lighten-3 {\n  background-color: #ffcc80 !important;\n}\n\n.orange-text.text-lighten-3 {\n  color: #ffcc80 !important;\n}\n\n.orange.lighten-2 {\n  background-color: #ffb74d !important;\n}\n\n.orange-text.text-lighten-2 {\n  color: #ffb74d !important;\n}\n\n.orange.lighten-1 {\n  background-color: #ffa726 !important;\n}\n\n.orange-text.text-lighten-1 {\n  color: #ffa726 !important;\n}\n\n.orange.darken-1 {\n  background-color: #fb8c00 !important;\n}\n\n.orange-text.text-darken-1 {\n  color: #fb8c00 !important;\n}\n\n.orange.darken-2 {\n  background-color: #f57c00 !important;\n}\n\n.orange-text.text-darken-2 {\n  color: #f57c00 !important;\n}\n\n.orange.darken-3 {\n  background-color: #ef6c00 !important;\n}\n\n.orange-text.text-darken-3 {\n  color: #ef6c00 !important;\n}\n\n.orange.darken-4 {\n  background-color: #e65100 !important;\n}\n\n.orange-text.text-darken-4 {\n  color: #e65100 !important;\n}\n\n.orange.accent-1 {\n  background-color: #ffd180 !important;\n}\n\n.orange-text.text-accent-1 {\n  color: #ffd180 !important;\n}\n\n.orange.accent-2 {\n  background-color: #ffab40 !important;\n}\n\n.orange-text.text-accent-2 {\n  color: #ffab40 !important;\n}\n\n.orange.accent-3 {\n  background-color: #ff9100 !important;\n}\n\n.orange-text.text-accent-3 {\n  color: #ff9100 !important;\n}\n\n.orange.accent-4 {\n  background-color: #ff6d00 !important;\n}\n\n.orange-text.text-accent-4 {\n  color: #ff6d00 !important;\n}\n\n.deep-orange {\n  background-color: #ff5722 !important;\n}\n\n.deep-orange-text {\n  color: #ff5722 !important;\n}\n\n.deep-orange.lighten-5 {\n  background-color: #fbe9e7 !important;\n}\n\n.deep-orange-text.text-lighten-5 {\n  color: #fbe9e7 !important;\n}\n\n.deep-orange.lighten-4 {\n  background-color: #ffccbc !important;\n}\n\n.deep-orange-text.text-lighten-4 {\n  color: #ffccbc !important;\n}\n\n.deep-orange.lighten-3 {\n  background-color: #ffab91 !important;\n}\n\n.deep-orange-text.text-lighten-3 {\n  color: #ffab91 !important;\n}\n\n.deep-orange.lighten-2 {\n  background-color: #ff8a65 !important;\n}\n\n.deep-orange-text.text-lighten-2 {\n  color: #ff8a65 !important;\n}\n\n.deep-orange.lighten-1 {\n  background-color: #ff7043 !important;\n}\n\n.deep-orange-text.text-lighten-1 {\n  color: #ff7043 !important;\n}\n\n.deep-orange.darken-1 {\n  background-color: #f4511e !important;\n}\n\n.deep-orange-text.text-darken-1 {\n  color: #f4511e !important;\n}\n\n.deep-orange.darken-2 {\n  background-color: #e64a19 !important;\n}\n\n.deep-orange-text.text-darken-2 {\n  color: #e64a19 !important;\n}\n\n.deep-orange.darken-3 {\n  background-color: #d84315 !important;\n}\n\n.deep-orange-text.text-darken-3 {\n  color: #d84315 !important;\n}\n\n.deep-orange.darken-4 {\n  background-color: #bf360c !important;\n}\n\n.deep-orange-text.text-darken-4 {\n  color: #bf360c !important;\n}\n\n.deep-orange.accent-1 {\n  background-color: #ff9e80 !important;\n}\n\n.deep-orange-text.text-accent-1 {\n  color: #ff9e80 !important;\n}\n\n.deep-orange.accent-2 {\n  background-color: #ff6e40 !important;\n}\n\n.deep-orange-text.text-accent-2 {\n  color: #ff6e40 !important;\n}\n\n.deep-orange.accent-3 {\n  background-color: #ff3d00 !important;\n}\n\n.deep-orange-text.text-accent-3 {\n  color: #ff3d00 !important;\n}\n\n.deep-orange.accent-4 {\n  background-color: #dd2c00 !important;\n}\n\n.deep-orange-text.text-accent-4 {\n  color: #dd2c00 !important;\n}\n\n.brown {\n  background-color: #795548 !important;\n}\n\n.brown-text {\n  color: #795548 !important;\n}\n\n.brown.lighten-5 {\n  background-color: #efebe9 !important;\n}\n\n.brown-text.text-lighten-5 {\n  color: #efebe9 !important;\n}\n\n.brown.lighten-4 {\n  background-color: #d7ccc8 !important;\n}\n\n.brown-text.text-lighten-4 {\n  color: #d7ccc8 !important;\n}\n\n.brown.lighten-3 {\n  background-color: #bcaaa4 !important;\n}\n\n.brown-text.text-lighten-3 {\n  color: #bcaaa4 !important;\n}\n\n.brown.lighten-2 {\n  background-color: #a1887f !important;\n}\n\n.brown-text.text-lighten-2 {\n  color: #a1887f !important;\n}\n\n.brown.lighten-1 {\n  background-color: #8d6e63 !important;\n}\n\n.brown-text.text-lighten-1 {\n  color: #8d6e63 !important;\n}\n\n.brown.darken-1 {\n  background-color: #6d4c41 !important;\n}\n\n.brown-text.text-darken-1 {\n  color: #6d4c41 !important;\n}\n\n.brown.darken-2 {\n  background-color: #5d4037 !important;\n}\n\n.brown-text.text-darken-2 {\n  color: #5d4037 !important;\n}\n\n.brown.darken-3 {\n  background-color: #4e342e !important;\n}\n\n.brown-text.text-darken-3 {\n  color: #4e342e !important;\n}\n\n.brown.darken-4 {\n  background-color: #3e2723 !important;\n}\n\n.brown-text.text-darken-4 {\n  color: #3e2723 !important;\n}\n\n.blue-grey {\n  background-color: #607d8b !important;\n}\n\n.blue-grey-text {\n  color: #607d8b !important;\n}\n\n.blue-grey.lighten-5 {\n  background-color: #eceff1 !important;\n}\n\n.blue-grey-text.text-lighten-5 {\n  color: #eceff1 !important;\n}\n\n.blue-grey.lighten-4 {\n  background-color: #cfd8dc !important;\n}\n\n.blue-grey-text.text-lighten-4 {\n  color: #cfd8dc !important;\n}\n\n.blue-grey.lighten-3 {\n  background-color: #b0bec5 !important;\n}\n\n.blue-grey-text.text-lighten-3 {\n  color: #b0bec5 !important;\n}\n\n.blue-grey.lighten-2 {\n  background-color: #90a4ae !important;\n}\n\n.blue-grey-text.text-lighten-2 {\n  color: #90a4ae !important;\n}\n\n.blue-grey.lighten-1 {\n  background-color: #78909c !important;\n}\n\n.blue-grey-text.text-lighten-1 {\n  color: #78909c !important;\n}\n\n.blue-grey.darken-1 {\n  background-color: #546e7a !important;\n}\n\n.blue-grey-text.text-darken-1 {\n  color: #546e7a !important;\n}\n\n.blue-grey.darken-2 {\n  background-color: #455a64 !important;\n}\n\n.blue-grey-text.text-darken-2 {\n  color: #455a64 !important;\n}\n\n.blue-grey.darken-3 {\n  background-color: #37474f !important;\n}\n\n.blue-grey-text.text-darken-3 {\n  color: #37474f !important;\n}\n\n.blue-grey.darken-4 {\n  background-color: #263238 !important;\n}\n\n.blue-grey-text.text-darken-4 {\n  color: #263238 !important;\n}\n\n.grey {\n  background-color: #9e9e9e !important;\n}\n\n.grey-text {\n  color: #9e9e9e !important;\n}\n\n.grey.lighten-5 {\n  background-color: #fafafa !important;\n}\n\n.grey-text.text-lighten-5 {\n  color: #fafafa !important;\n}\n\n.grey.lighten-4 {\n  background-color: #f5f5f5 !important;\n}\n\n.grey-text.text-lighten-4 {\n  color: #f5f5f5 !important;\n}\n\n.grey.lighten-3 {\n  background-color: #eeeeee !important;\n}\n\n.grey-text.text-lighten-3 {\n  color: #eeeeee !important;\n}\n\n.grey.lighten-2 {\n  background-color: #e0e0e0 !important;\n}\n\n.grey-text.text-lighten-2 {\n  color: #e0e0e0 !important;\n}\n\n.grey.lighten-1 {\n  background-color: #bdbdbd !important;\n}\n\n.grey-text.text-lighten-1 {\n  color: #bdbdbd !important;\n}\n\n.grey.darken-1 {\n  background-color: #757575 !important;\n}\n\n.grey-text.text-darken-1 {\n  color: #757575 !important;\n}\n\n.grey.darken-2 {\n  background-color: #616161 !important;\n}\n\n.grey-text.text-darken-2 {\n  color: #616161 !important;\n}\n\n.grey.darken-3 {\n  background-color: #424242 !important;\n}\n\n.grey-text.text-darken-3 {\n  color: #424242 !important;\n}\n\n.grey.darken-4 {\n  background-color: #212121 !important;\n}\n\n.grey-text.text-darken-4 {\n  color: #212121 !important;\n}\n\n.black {\n  background-color: #000000 !important;\n}\n\n.black-text {\n  color: #000000 !important;\n}\n\n.white {\n  background-color: #FFFFFF !important;\n}\n\n.white-text {\n  color: #FFFFFF !important;\n}\n\n.transparent {\n  background-color: transparent !important;\n}\n\n.transparent-text {\n  color: transparent !important;\n}\n\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n     -moz-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n}\n\nul:not(.browser-default) {\n  padding-left: 0;\n  list-style-type: none;\n}\n\nul:not(.browser-default) > li {\n  list-style-type: none;\n}\n\na {\n  color: #039be5;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.valign-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.clearfix {\n  clear: both;\n}\n\n.z-depth-0 {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n\n/* 2dp elevation modified*/\n.z-depth-1, nav, .card-panel, .card, .toast, .btn, .btn-large, .btn-small, .btn-floating, .dropdown-content, .collapsible, .sidenav {\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n\n.z-depth-1-half, .btn:hover, .btn-large:hover, .btn-small:hover, .btn-floating:hover {\n  -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\n}\n\n/* 6dp elevation modified*/\n.z-depth-2 {\n  -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n}\n\n/* 12dp elevation modified*/\n.z-depth-3 {\n  -webkit-box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n}\n\n/* 16dp elevation */\n.z-depth-4 {\n  -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);\n}\n\n/* 24dp elevation */\n.z-depth-5, .modal {\n  -webkit-box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);\n}\n\n.hoverable {\n  -webkit-transition: -webkit-box-shadow .25s;\n  transition: -webkit-box-shadow .25s;\n  transition: box-shadow .25s;\n  transition: box-shadow .25s, -webkit-box-shadow .25s;\n}\n\n.hoverable:hover {\n  -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.divider {\n  height: 1px;\n  overflow: hidden;\n  background-color: #e0e0e0;\n}\n\nblockquote {\n  margin: 20px 0;\n  padding-left: 1.5rem;\n  border-left: 5px solid #ee6e73;\n}\n\ni {\n  line-height: inherit;\n}\n\ni.left {\n  float: left;\n  margin-right: 15px;\n}\n\ni.right {\n  float: right;\n  margin-left: 15px;\n}\n\ni.tiny {\n  font-size: 1rem;\n}\n\ni.small {\n  font-size: 2rem;\n}\n\ni.medium {\n  font-size: 4rem;\n}\n\ni.large {\n  font-size: 6rem;\n}\n\nimg.responsive-img,\nvideo.responsive-video {\n  max-width: 100%;\n  height: auto;\n}\n\n.pagination li {\n  display: inline-block;\n  border-radius: 2px;\n  text-align: center;\n  vertical-align: top;\n  height: 30px;\n}\n\n.pagination li a {\n  color: #444;\n  display: inline-block;\n  font-size: 1.2rem;\n  padding: 0 10px;\n  line-height: 30px;\n}\n\n.pagination li.active a {\n  color: #fff;\n}\n\n.pagination li.active {\n  background-color: #ee6e73;\n}\n\n.pagination li.disabled a {\n  cursor: default;\n  color: #999;\n}\n\n.pagination li i {\n  font-size: 2rem;\n}\n\n.pagination li.pages ul li {\n  display: inline-block;\n  float: none;\n}\n\n@media only screen and (max-width: 992px) {\n  .pagination {\n    width: 100%;\n  }\n  .pagination li.prev,\n  .pagination li.next {\n    width: 10%;\n  }\n  .pagination li.pages {\n    width: 80%;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n\n.breadcrumb {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.breadcrumb i,\n.breadcrumb [class^=\"mdi-\"], .breadcrumb [class*=\"mdi-\"],\n.breadcrumb i.material-icons {\n  display: inline-block;\n  float: left;\n  font-size: 24px;\n}\n\n.breadcrumb:before {\n  content: '\\E5CC';\n  color: rgba(255, 255, 255, 0.7);\n  vertical-align: top;\n  display: inline-block;\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 25px;\n  margin: 0 10px 0 8px;\n  -webkit-font-smoothing: antialiased;\n}\n\n.breadcrumb:first-child:before {\n  display: none;\n}\n\n.breadcrumb:last-child {\n  color: #fff;\n}\n\n.parallax-container {\n  position: relative;\n  overflow: hidden;\n  height: 500px;\n}\n\n.parallax-container .parallax {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\n.parallax-container .parallax img {\n  opacity: 0;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n.pin-top, .pin-bottom {\n  position: relative;\n}\n\n.pinned {\n  position: fixed !important;\n}\n\n/*********************\n  Transition Classes\n**********************/\nul.staggered-list li {\n  opacity: 0;\n}\n\n.fade-in {\n  opacity: 0;\n  -webkit-transform-origin: 0 50%;\n          transform-origin: 0 50%;\n}\n\n/*********************\n  Media Query Classes\n**********************/\n@media only screen and (max-width: 600px) {\n  .hide-on-small-only, .hide-on-small-and-down {\n    display: none !important;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .hide-on-med-and-down {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  .hide-on-med-and-up {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .hide-on-med-only {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .hide-on-large-only {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 1201px) {\n  .hide-on-extra-large-only {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 1201px) {\n  .show-on-extra-large {\n    display: block !important;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .show-on-large {\n    display: block !important;\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .show-on-medium {\n    display: block !important;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .show-on-small {\n    display: block !important;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  .show-on-medium-and-up {\n    display: block !important;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .show-on-medium-and-down {\n    display: block !important;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .center-on-small-only {\n    text-align: center;\n  }\n}\n\n.page-footer {\n  padding-top: 20px;\n  color: #fff;\n  background-color: #ee6e73;\n}\n\n.page-footer .footer-copyright {\n  overflow: hidden;\n  min-height: 50px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 10px 0px;\n  color: rgba(255, 255, 255, 0.8);\n  background-color: rgba(51, 51, 51, 0.08);\n}\n\ntable, th, td {\n  border: none;\n}\n\ntable {\n  width: 100%;\n  display: table;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntable.striped tr {\n  border-bottom: none;\n}\n\ntable.striped > tbody > tr:nth-child(odd) {\n  background-color: rgba(242, 242, 242, 0.5);\n}\n\ntable.striped > tbody > tr > td {\n  border-radius: 0;\n}\n\ntable.highlight > tbody > tr {\n  -webkit-transition: background-color .25s ease;\n  transition: background-color .25s ease;\n}\n\ntable.highlight > tbody > tr:hover {\n  background-color: rgba(242, 242, 242, 0.5);\n}\n\ntable.centered thead tr th, table.centered tbody tr td {\n  text-align: center;\n}\n\ntr {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\ntd, th {\n  padding: 15px 5px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: middle;\n  border-radius: 2px;\n}\n\n@media only screen and (max-width: 992px) {\n  table.responsive-table {\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: block;\n    position: relative;\n    /* sort out borders */\n  }\n  table.responsive-table td:empty:before {\n    content: '\\00a0';\n  }\n  table.responsive-table th,\n  table.responsive-table td {\n    margin: 0;\n    vertical-align: top;\n  }\n  table.responsive-table th {\n    text-align: left;\n  }\n  table.responsive-table thead {\n    display: block;\n    float: left;\n  }\n  table.responsive-table thead tr {\n    display: block;\n    padding: 0 10px 0 0;\n  }\n  table.responsive-table thead tr th::before {\n    content: \"\\00a0\";\n  }\n  table.responsive-table tbody {\n    display: block;\n    width: auto;\n    position: relative;\n    overflow-x: auto;\n    white-space: nowrap;\n  }\n  table.responsive-table tbody tr {\n    display: inline-block;\n    vertical-align: top;\n  }\n  table.responsive-table th {\n    display: block;\n    text-align: right;\n  }\n  table.responsive-table td {\n    display: block;\n    min-height: 1.25em;\n    text-align: left;\n  }\n  table.responsive-table tr {\n    border-bottom: none;\n    padding: 0 10px;\n  }\n  table.responsive-table thead {\n    border: 0;\n    border-right: 1px solid rgba(0, 0, 0, 0.12);\n  }\n}\n\n.collection {\n  margin: 0.5rem 0 1rem 0;\n  border: 1px solid #e0e0e0;\n  border-radius: 2px;\n  overflow: hidden;\n  position: relative;\n}\n\n.collection .collection-item {\n  background-color: #fff;\n  line-height: 1.5rem;\n  padding: 10px 20px;\n  margin: 0;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.collection .collection-item.avatar {\n  min-height: 84px;\n  padding-left: 72px;\n  position: relative;\n}\n\n.collection .collection-item.avatar:not(.circle-clipper) > .circle,\n.collection .collection-item.avatar :not(.circle-clipper) > .circle {\n  position: absolute;\n  width: 42px;\n  height: 42px;\n  overflow: hidden;\n  left: 15px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.collection .collection-item.avatar i.circle {\n  font-size: 18px;\n  line-height: 42px;\n  color: #fff;\n  background-color: #999;\n  text-align: center;\n}\n\n.collection .collection-item.avatar .title {\n  font-size: 16px;\n}\n\n.collection .collection-item.avatar p {\n  margin: 0;\n}\n\n.collection .collection-item.avatar .secondary-content {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n\n.collection .collection-item:last-child {\n  border-bottom: none;\n}\n\n.collection .collection-item.active {\n  background-color: #26a69a;\n  color: #eafaf9;\n}\n\n.collection .collection-item.active .secondary-content {\n  color: #fff;\n}\n\n.collection a.collection-item {\n  display: block;\n  -webkit-transition: .25s;\n  transition: .25s;\n  color: #26a69a;\n}\n\n.collection a.collection-item:not(.active):hover {\n  background-color: #ddd;\n}\n\n.collection.with-header .collection-header {\n  background-color: #fff;\n  border-bottom: 1px solid #e0e0e0;\n  padding: 10px 20px;\n}\n\n.collection.with-header .collection-item {\n  padding-left: 30px;\n}\n\n.collection.with-header .collection-item.avatar {\n  padding-left: 72px;\n}\n\n.secondary-content {\n  float: right;\n  color: #26a69a;\n}\n\n.collapsible .collection {\n  margin: 0;\n  border: none;\n}\n\n.video-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden;\n}\n\n.video-container iframe, .video-container object, .video-container embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.progress {\n  position: relative;\n  height: 4px;\n  display: block;\n  width: 100%;\n  background-color: #acece6;\n  border-radius: 2px;\n  margin: 0.5rem 0 1rem 0;\n  overflow: hidden;\n}\n\n.progress .determinate {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #26a69a;\n  -webkit-transition: width .3s linear;\n  transition: width .3s linear;\n}\n\n.progress .indeterminate {\n  background-color: #26a69a;\n}\n\n.progress .indeterminate:before {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n          animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n\n.progress .indeterminate:after {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n          animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  -webkit-animation-delay: 1.15s;\n          animation-delay: 1.15s;\n}\n\n@-webkit-keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n\n@keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n\n@-webkit-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n\n@keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n\n/*******************\n  Utility Classes\n*******************/\n.hide {\n  display: none !important;\n}\n\n.left-align {\n  text-align: left;\n}\n\n.right-align {\n  text-align: right;\n}\n\n.center, .center-align {\n  text-align: center;\n}\n\n.left {\n  float: left !important;\n}\n\n.right {\n  float: right !important;\n}\n\n.no-select, input[type=range],\ninput[type=range] + .thumb {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.circle {\n  border-radius: 50%;\n}\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.truncate {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.no-padding {\n  padding: 0 !important;\n}\n\nspan.badge {\n  min-width: 3rem;\n  padding: 0 6px;\n  margin-left: 14px;\n  text-align: center;\n  font-size: 1rem;\n  line-height: 22px;\n  height: 22px;\n  color: #757575;\n  float: right;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nspan.badge.new {\n  font-weight: 300;\n  font-size: 0.8rem;\n  color: #fff;\n  background-color: #26a69a;\n  border-radius: 2px;\n}\n\nspan.badge.new:after {\n  content: \" new\";\n}\n\nspan.badge[data-badge-caption]::after {\n  content: \" \" attr(data-badge-caption);\n}\n\nnav ul a span.badge {\n  display: inline-block;\n  float: none;\n  margin-left: 4px;\n  line-height: 22px;\n  height: 22px;\n  -webkit-font-smoothing: auto;\n}\n\n.collection-item span.badge {\n  margin-top: calc(0.75rem - 11px);\n}\n\n.collapsible span.badge {\n  margin-left: auto;\n}\n\n.sidenav span.badge {\n  margin-top: calc(24px - 11px);\n}\n\ntable span.badge {\n  display: inline-block;\n  float: none;\n  margin-left: auto;\n}\n\n/* This is needed for some mobile phones to display the Google Icon font properly */\n.material-icons {\n  text-rendering: optimizeLegibility;\n  -webkit-font-feature-settings: 'liga';\n     -moz-font-feature-settings: 'liga';\n          font-feature-settings: 'liga';\n}\n\n.container {\n  margin: 0 auto;\n  max-width: 1280px;\n  width: 90%;\n}\n\n@media only screen and (min-width: 601px) {\n  .container {\n    width: 85%;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .container {\n    width: 70%;\n  }\n}\n\n.col .row {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n}\n\n.section {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.section.no-pad {\n  padding: 0;\n}\n\n.section.no-pad-bot {\n  padding-bottom: 0;\n}\n\n.section.no-pad-top {\n  padding-top: 0;\n}\n\n.row {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row .col {\n  float: left;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0 0.75rem;\n  min-height: 1px;\n}\n\n.row .col[class*=\"push-\"], .row .col[class*=\"pull-\"] {\n  position: relative;\n}\n\n.row .col.s1 {\n  width: 8.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s2 {\n  width: 16.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s3 {\n  width: 25%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s4 {\n  width: 33.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s5 {\n  width: 41.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s6 {\n  width: 50%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s7 {\n  width: 58.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s8 {\n  width: 66.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s9 {\n  width: 75%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s10 {\n  width: 83.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s11 {\n  width: 91.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s12 {\n  width: 100%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.offset-s1 {\n  margin-left: 8.3333333333%;\n}\n\n.row .col.pull-s1 {\n  right: 8.3333333333%;\n}\n\n.row .col.push-s1 {\n  left: 8.3333333333%;\n}\n\n.row .col.offset-s2 {\n  margin-left: 16.6666666667%;\n}\n\n.row .col.pull-s2 {\n  right: 16.6666666667%;\n}\n\n.row .col.push-s2 {\n  left: 16.6666666667%;\n}\n\n.row .col.offset-s3 {\n  margin-left: 25%;\n}\n\n.row .col.pull-s3 {\n  right: 25%;\n}\n\n.row .col.push-s3 {\n  left: 25%;\n}\n\n.row .col.offset-s4 {\n  margin-left: 33.3333333333%;\n}\n\n.row .col.pull-s4 {\n  right: 33.3333333333%;\n}\n\n.row .col.push-s4 {\n  left: 33.3333333333%;\n}\n\n.row .col.offset-s5 {\n  margin-left: 41.6666666667%;\n}\n\n.row .col.pull-s5 {\n  right: 41.6666666667%;\n}\n\n.row .col.push-s5 {\n  left: 41.6666666667%;\n}\n\n.row .col.offset-s6 {\n  margin-left: 50%;\n}\n\n.row .col.pull-s6 {\n  right: 50%;\n}\n\n.row .col.push-s6 {\n  left: 50%;\n}\n\n.row .col.offset-s7 {\n  margin-left: 58.3333333333%;\n}\n\n.row .col.pull-s7 {\n  right: 58.3333333333%;\n}\n\n.row .col.push-s7 {\n  left: 58.3333333333%;\n}\n\n.row .col.offset-s8 {\n  margin-left: 66.6666666667%;\n}\n\n.row .col.pull-s8 {\n  right: 66.6666666667%;\n}\n\n.row .col.push-s8 {\n  left: 66.6666666667%;\n}\n\n.row .col.offset-s9 {\n  margin-left: 75%;\n}\n\n.row .col.pull-s9 {\n  right: 75%;\n}\n\n.row .col.push-s9 {\n  left: 75%;\n}\n\n.row .col.offset-s10 {\n  margin-left: 83.3333333333%;\n}\n\n.row .col.pull-s10 {\n  right: 83.3333333333%;\n}\n\n.row .col.push-s10 {\n  left: 83.3333333333%;\n}\n\n.row .col.offset-s11 {\n  margin-left: 91.6666666667%;\n}\n\n.row .col.pull-s11 {\n  right: 91.6666666667%;\n}\n\n.row .col.push-s11 {\n  left: 91.6666666667%;\n}\n\n.row .col.offset-s12 {\n  margin-left: 100%;\n}\n\n.row .col.pull-s12 {\n  right: 100%;\n}\n\n.row .col.push-s12 {\n  left: 100%;\n}\n\n@media only screen and (min-width: 601px) {\n  .row .col.m1 {\n    width: 8.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m2 {\n    width: 16.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m3 {\n    width: 25%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m4 {\n    width: 33.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m5 {\n    width: 41.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m6 {\n    width: 50%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m7 {\n    width: 58.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m8 {\n    width: 66.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m9 {\n    width: 75%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m10 {\n    width: 83.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m11 {\n    width: 91.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m12 {\n    width: 100%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.offset-m1 {\n    margin-left: 8.3333333333%;\n  }\n  .row .col.pull-m1 {\n    right: 8.3333333333%;\n  }\n  .row .col.push-m1 {\n    left: 8.3333333333%;\n  }\n  .row .col.offset-m2 {\n    margin-left: 16.6666666667%;\n  }\n  .row .col.pull-m2 {\n    right: 16.6666666667%;\n  }\n  .row .col.push-m2 {\n    left: 16.6666666667%;\n  }\n  .row .col.offset-m3 {\n    margin-left: 25%;\n  }\n  .row .col.pull-m3 {\n    right: 25%;\n  }\n  .row .col.push-m3 {\n    left: 25%;\n  }\n  .row .col.offset-m4 {\n    margin-left: 33.3333333333%;\n  }\n  .row .col.pull-m4 {\n    right: 33.3333333333%;\n  }\n  .row .col.push-m4 {\n    left: 33.3333333333%;\n  }\n  .row .col.offset-m5 {\n    margin-left: 41.6666666667%;\n  }\n  .row .col.pull-m5 {\n    right: 41.6666666667%;\n  }\n  .row .col.push-m5 {\n    left: 41.6666666667%;\n  }\n  .row .col.offset-m6 {\n    margin-left: 50%;\n  }\n  .row .col.pull-m6 {\n    right: 50%;\n  }\n  .row .col.push-m6 {\n    left: 50%;\n  }\n  .row .col.offset-m7 {\n    margin-left: 58.3333333333%;\n  }\n  .row .col.pull-m7 {\n    right: 58.3333333333%;\n  }\n  .row .col.push-m7 {\n    left: 58.3333333333%;\n  }\n  .row .col.offset-m8 {\n    margin-left: 66.6666666667%;\n  }\n  .row .col.pull-m8 {\n    right: 66.6666666667%;\n  }\n  .row .col.push-m8 {\n    left: 66.6666666667%;\n  }\n  .row .col.offset-m9 {\n    margin-left: 75%;\n  }\n  .row .col.pull-m9 {\n    right: 75%;\n  }\n  .row .col.push-m9 {\n    left: 75%;\n  }\n  .row .col.offset-m10 {\n    margin-left: 83.3333333333%;\n  }\n  .row .col.pull-m10 {\n    right: 83.3333333333%;\n  }\n  .row .col.push-m10 {\n    left: 83.3333333333%;\n  }\n  .row .col.offset-m11 {\n    margin-left: 91.6666666667%;\n  }\n  .row .col.pull-m11 {\n    right: 91.6666666667%;\n  }\n  .row .col.push-m11 {\n    left: 91.6666666667%;\n  }\n  .row .col.offset-m12 {\n    margin-left: 100%;\n  }\n  .row .col.pull-m12 {\n    right: 100%;\n  }\n  .row .col.push-m12 {\n    left: 100%;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .row .col.l1 {\n    width: 8.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l2 {\n    width: 16.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l3 {\n    width: 25%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l4 {\n    width: 33.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l5 {\n    width: 41.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l6 {\n    width: 50%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l7 {\n    width: 58.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l8 {\n    width: 66.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l9 {\n    width: 75%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l10 {\n    width: 83.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l11 {\n    width: 91.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l12 {\n    width: 100%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.offset-l1 {\n    margin-left: 8.3333333333%;\n  }\n  .row .col.pull-l1 {\n    right: 8.3333333333%;\n  }\n  .row .col.push-l1 {\n    left: 8.3333333333%;\n  }\n  .row .col.offset-l2 {\n    margin-left: 16.6666666667%;\n  }\n  .row .col.pull-l2 {\n    right: 16.6666666667%;\n  }\n  .row .col.push-l2 {\n    left: 16.6666666667%;\n  }\n  .row .col.offset-l3 {\n    margin-left: 25%;\n  }\n  .row .col.pull-l3 {\n    right: 25%;\n  }\n  .row .col.push-l3 {\n    left: 25%;\n  }\n  .row .col.offset-l4 {\n    margin-left: 33.3333333333%;\n  }\n  .row .col.pull-l4 {\n    right: 33.3333333333%;\n  }\n  .row .col.push-l4 {\n    left: 33.3333333333%;\n  }\n  .row .col.offset-l5 {\n    margin-left: 41.6666666667%;\n  }\n  .row .col.pull-l5 {\n    right: 41.6666666667%;\n  }\n  .row .col.push-l5 {\n    left: 41.6666666667%;\n  }\n  .row .col.offset-l6 {\n    margin-left: 50%;\n  }\n  .row .col.pull-l6 {\n    right: 50%;\n  }\n  .row .col.push-l6 {\n    left: 50%;\n  }\n  .row .col.offset-l7 {\n    margin-left: 58.3333333333%;\n  }\n  .row .col.pull-l7 {\n    right: 58.3333333333%;\n  }\n  .row .col.push-l7 {\n    left: 58.3333333333%;\n  }\n  .row .col.offset-l8 {\n    margin-left: 66.6666666667%;\n  }\n  .row .col.pull-l8 {\n    right: 66.6666666667%;\n  }\n  .row .col.push-l8 {\n    left: 66.6666666667%;\n  }\n  .row .col.offset-l9 {\n    margin-left: 75%;\n  }\n  .row .col.pull-l9 {\n    right: 75%;\n  }\n  .row .col.push-l9 {\n    left: 75%;\n  }\n  .row .col.offset-l10 {\n    margin-left: 83.3333333333%;\n  }\n  .row .col.pull-l10 {\n    right: 83.3333333333%;\n  }\n  .row .col.push-l10 {\n    left: 83.3333333333%;\n  }\n  .row .col.offset-l11 {\n    margin-left: 91.6666666667%;\n  }\n  .row .col.pull-l11 {\n    right: 91.6666666667%;\n  }\n  .row .col.push-l11 {\n    left: 91.6666666667%;\n  }\n  .row .col.offset-l12 {\n    margin-left: 100%;\n  }\n  .row .col.pull-l12 {\n    right: 100%;\n  }\n  .row .col.push-l12 {\n    left: 100%;\n  }\n}\n\n@media only screen and (min-width: 1201px) {\n  .row .col.xl1 {\n    width: 8.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl2 {\n    width: 16.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl3 {\n    width: 25%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl4 {\n    width: 33.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl5 {\n    width: 41.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl6 {\n    width: 50%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl7 {\n    width: 58.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl8 {\n    width: 66.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl9 {\n    width: 75%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl10 {\n    width: 83.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl11 {\n    width: 91.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.xl12 {\n    width: 100%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.offset-xl1 {\n    margin-left: 8.3333333333%;\n  }\n  .row .col.pull-xl1 {\n    right: 8.3333333333%;\n  }\n  .row .col.push-xl1 {\n    left: 8.3333333333%;\n  }\n  .row .col.offset-xl2 {\n    margin-left: 16.6666666667%;\n  }\n  .row .col.pull-xl2 {\n    right: 16.6666666667%;\n  }\n  .row .col.push-xl2 {\n    left: 16.6666666667%;\n  }\n  .row .col.offset-xl3 {\n    margin-left: 25%;\n  }\n  .row .col.pull-xl3 {\n    right: 25%;\n  }\n  .row .col.push-xl3 {\n    left: 25%;\n  }\n  .row .col.offset-xl4 {\n    margin-left: 33.3333333333%;\n  }\n  .row .col.pull-xl4 {\n    right: 33.3333333333%;\n  }\n  .row .col.push-xl4 {\n    left: 33.3333333333%;\n  }\n  .row .col.offset-xl5 {\n    margin-left: 41.6666666667%;\n  }\n  .row .col.pull-xl5 {\n    right: 41.6666666667%;\n  }\n  .row .col.push-xl5 {\n    left: 41.6666666667%;\n  }\n  .row .col.offset-xl6 {\n    margin-left: 50%;\n  }\n  .row .col.pull-xl6 {\n    right: 50%;\n  }\n  .row .col.push-xl6 {\n    left: 50%;\n  }\n  .row .col.offset-xl7 {\n    margin-left: 58.3333333333%;\n  }\n  .row .col.pull-xl7 {\n    right: 58.3333333333%;\n  }\n  .row .col.push-xl7 {\n    left: 58.3333333333%;\n  }\n  .row .col.offset-xl8 {\n    margin-left: 66.6666666667%;\n  }\n  .row .col.pull-xl8 {\n    right: 66.6666666667%;\n  }\n  .row .col.push-xl8 {\n    left: 66.6666666667%;\n  }\n  .row .col.offset-xl9 {\n    margin-left: 75%;\n  }\n  .row .col.pull-xl9 {\n    right: 75%;\n  }\n  .row .col.push-xl9 {\n    left: 75%;\n  }\n  .row .col.offset-xl10 {\n    margin-left: 83.3333333333%;\n  }\n  .row .col.pull-xl10 {\n    right: 83.3333333333%;\n  }\n  .row .col.push-xl10 {\n    left: 83.3333333333%;\n  }\n  .row .col.offset-xl11 {\n    margin-left: 91.6666666667%;\n  }\n  .row .col.pull-xl11 {\n    right: 91.6666666667%;\n  }\n  .row .col.push-xl11 {\n    left: 91.6666666667%;\n  }\n  .row .col.offset-xl12 {\n    margin-left: 100%;\n  }\n  .row .col.pull-xl12 {\n    right: 100%;\n  }\n  .row .col.push-xl12 {\n    left: 100%;\n  }\n}\n\nnav {\n  color: #fff;\n  background-color: #ee6e73;\n  width: 100%;\n  height: 56px;\n  line-height: 56px;\n}\n\nnav.nav-extended {\n  height: auto;\n}\n\nnav.nav-extended .nav-wrapper {\n  min-height: 56px;\n  height: auto;\n}\n\nnav.nav-extended .nav-content {\n  position: relative;\n  line-height: normal;\n}\n\nnav a {\n  color: #fff;\n}\n\nnav i,\nnav [class^=\"mdi-\"], nav [class*=\"mdi-\"],\nnav i.material-icons {\n  display: block;\n  font-size: 24px;\n  height: 56px;\n  line-height: 56px;\n}\n\nnav .nav-wrapper {\n  position: relative;\n  height: 100%;\n}\n\n@media only screen and (min-width: 993px) {\n  nav a.sidenav-trigger {\n    display: none;\n  }\n}\n\nnav .sidenav-trigger {\n  float: left;\n  position: relative;\n  z-index: 1;\n  height: 56px;\n  margin: 0 18px;\n}\n\nnav .sidenav-trigger i {\n  height: 56px;\n  line-height: 56px;\n}\n\nnav .brand-logo {\n  position: absolute;\n  color: #fff;\n  display: inline-block;\n  font-size: 2.1rem;\n  padding: 0;\n}\n\nnav .brand-logo.center {\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n@media only screen and (max-width: 992px) {\n  nav .brand-logo {\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n  }\n  nav .brand-logo.left, nav .brand-logo.right {\n    padding: 0;\n    -webkit-transform: none;\n            transform: none;\n  }\n  nav .brand-logo.left {\n    left: 0.5rem;\n  }\n  nav .brand-logo.right {\n    right: 0.5rem;\n    left: auto;\n  }\n}\n\nnav .brand-logo.right {\n  right: 0.5rem;\n  padding: 0;\n}\n\nnav .brand-logo i,\nnav .brand-logo [class^=\"mdi-\"], nav .brand-logo [class*=\"mdi-\"],\nnav .brand-logo i.material-icons {\n  float: left;\n  margin-right: 15px;\n}\n\nnav .nav-title {\n  display: inline-block;\n  font-size: 32px;\n  padding: 28px 0;\n}\n\nnav ul {\n  margin: 0;\n}\n\nnav ul li {\n  -webkit-transition: background-color .3s;\n  transition: background-color .3s;\n  float: left;\n  padding: 0;\n}\n\nnav ul li.active {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\nnav ul a {\n  -webkit-transition: background-color .3s;\n  transition: background-color .3s;\n  font-size: 1rem;\n  color: #fff;\n  display: block;\n  padding: 0 15px;\n  cursor: pointer;\n}\n\nnav ul a.btn, nav ul a.btn-large, nav ul a.btn-small, nav ul a.btn-large, nav ul a.btn-flat, nav ul a.btn-floating {\n  margin-top: -2px;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\nnav ul a.btn > .material-icons, nav ul a.btn-large > .material-icons, nav ul a.btn-small > .material-icons, nav ul a.btn-large > .material-icons, nav ul a.btn-flat > .material-icons, nav ul a.btn-floating > .material-icons {\n  height: inherit;\n  line-height: inherit;\n}\n\nnav ul a:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\nnav ul.left {\n  float: left;\n}\n\nnav form {\n  height: 100%;\n}\n\nnav .input-field {\n  margin: 0;\n  height: 100%;\n}\n\nnav .input-field input {\n  height: 100%;\n  font-size: 1.2rem;\n  border: none;\n  padding-left: 2rem;\n}\n\nnav .input-field input:focus, nav .input-field input[type=text]:valid, nav .input-field input[type=password]:valid, nav .input-field input[type=email]:valid, nav .input-field input[type=url]:valid, nav .input-field input[type=date]:valid {\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\nnav .input-field label {\n  top: 0;\n  left: 0;\n}\n\nnav .input-field label i {\n  color: rgba(255, 255, 255, 0.7);\n  -webkit-transition: color .3s;\n  transition: color .3s;\n}\n\nnav .input-field label.active i {\n  color: #fff;\n}\n\n.navbar-fixed {\n  position: relative;\n  height: 56px;\n  z-index: 997;\n}\n\n.navbar-fixed nav {\n  position: fixed;\n}\n\n@media only screen and (min-width: 601px) {\n  nav.nav-extended .nav-wrapper {\n    min-height: 64px;\n  }\n  nav, nav .nav-wrapper i, nav a.sidenav-trigger, nav a.sidenav-trigger i {\n    height: 64px;\n    line-height: 64px;\n  }\n  .navbar-fixed {\n    height: 64px;\n  }\n}\n\na {\n  text-decoration: none;\n}\n\nhtml {\n  line-height: 1.5;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n  font-weight: normal;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n@media only screen and (min-width: 0) {\n  html {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  html {\n    font-size: 14.5px;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  html {\n    font-size: 15px;\n  }\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 400;\n  line-height: 1.3;\n}\n\nh1 a, h2 a, h3 a, h4 a, h5 a, h6 a {\n  font-weight: inherit;\n}\n\nh1 {\n  font-size: 4.2rem;\n  line-height: 110%;\n  margin: 2.8rem 0 1.68rem 0;\n}\n\nh2 {\n  font-size: 3.56rem;\n  line-height: 110%;\n  margin: 2.3733333333rem 0 1.424rem 0;\n}\n\nh3 {\n  font-size: 2.92rem;\n  line-height: 110%;\n  margin: 1.9466666667rem 0 1.168rem 0;\n}\n\nh4 {\n  font-size: 2.28rem;\n  line-height: 110%;\n  margin: 1.52rem 0 0.912rem 0;\n}\n\nh5 {\n  font-size: 1.64rem;\n  line-height: 110%;\n  margin: 1.0933333333rem 0 0.656rem 0;\n}\n\nh6 {\n  font-size: 1.15rem;\n  line-height: 110%;\n  margin: 0.7666666667rem 0 0.46rem 0;\n}\n\nem {\n  font-style: italic;\n}\n\nstrong {\n  font-weight: 500;\n}\n\nsmall {\n  font-size: 75%;\n}\n\n.light {\n  font-weight: 300;\n}\n\n.thin {\n  font-weight: 200;\n}\n\n@media only screen and (min-width: 360px) {\n  .flow-text {\n    font-size: 1.2rem;\n  }\n}\n\n@media only screen and (min-width: 390px) {\n  .flow-text {\n    font-size: 1.224rem;\n  }\n}\n\n@media only screen and (min-width: 420px) {\n  .flow-text {\n    font-size: 1.248rem;\n  }\n}\n\n@media only screen and (min-width: 450px) {\n  .flow-text {\n    font-size: 1.272rem;\n  }\n}\n\n@media only screen and (min-width: 480px) {\n  .flow-text {\n    font-size: 1.296rem;\n  }\n}\n\n@media only screen and (min-width: 510px) {\n  .flow-text {\n    font-size: 1.32rem;\n  }\n}\n\n@media only screen and (min-width: 540px) {\n  .flow-text {\n    font-size: 1.344rem;\n  }\n}\n\n@media only screen and (min-width: 570px) {\n  .flow-text {\n    font-size: 1.368rem;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .flow-text {\n    font-size: 1.392rem;\n  }\n}\n\n@media only screen and (min-width: 630px) {\n  .flow-text {\n    font-size: 1.416rem;\n  }\n}\n\n@media only screen and (min-width: 660px) {\n  .flow-text {\n    font-size: 1.44rem;\n  }\n}\n\n@media only screen and (min-width: 690px) {\n  .flow-text {\n    font-size: 1.464rem;\n  }\n}\n\n@media only screen and (min-width: 720px) {\n  .flow-text {\n    font-size: 1.488rem;\n  }\n}\n\n@media only screen and (min-width: 750px) {\n  .flow-text {\n    font-size: 1.512rem;\n  }\n}\n\n@media only screen and (min-width: 780px) {\n  .flow-text {\n    font-size: 1.536rem;\n  }\n}\n\n@media only screen and (min-width: 810px) {\n  .flow-text {\n    font-size: 1.56rem;\n  }\n}\n\n@media only screen and (min-width: 840px) {\n  .flow-text {\n    font-size: 1.584rem;\n  }\n}\n\n@media only screen and (min-width: 870px) {\n  .flow-text {\n    font-size: 1.608rem;\n  }\n}\n\n@media only screen and (min-width: 900px) {\n  .flow-text {\n    font-size: 1.632rem;\n  }\n}\n\n@media only screen and (min-width: 930px) {\n  .flow-text {\n    font-size: 1.656rem;\n  }\n}\n\n@media only screen and (min-width: 960px) {\n  .flow-text {\n    font-size: 1.68rem;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .flow-text {\n    font-size: 1.2rem;\n  }\n}\n\n.scale-transition {\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\n  transition: -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\n  transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\n  transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63), -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\n}\n\n.scale-transition.scale-out {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: -webkit-transform .2s !important;\n  transition: -webkit-transform .2s !important;\n  transition: transform .2s !important;\n  transition: transform .2s, -webkit-transform .2s !important;\n}\n\n.scale-transition.scale-in {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.card-panel {\n  -webkit-transition: -webkit-box-shadow .25s;\n  transition: -webkit-box-shadow .25s;\n  transition: box-shadow .25s;\n  transition: box-shadow .25s, -webkit-box-shadow .25s;\n  padding: 24px;\n  margin: 0.5rem 0 1rem 0;\n  border-radius: 2px;\n  background-color: #fff;\n}\n\n.card {\n  position: relative;\n  margin: 0.5rem 0 1rem 0;\n  background-color: #fff;\n  -webkit-transition: -webkit-box-shadow .25s;\n  transition: -webkit-box-shadow .25s;\n  transition: box-shadow .25s;\n  transition: box-shadow .25s, -webkit-box-shadow .25s;\n  border-radius: 2px;\n}\n\n.card .card-title {\n  font-size: 24px;\n  font-weight: 300;\n}\n\n.card .card-title.activator {\n  cursor: pointer;\n}\n\n.card.small, .card.medium, .card.large {\n  position: relative;\n}\n\n.card.small .card-image, .card.medium .card-image, .card.large .card-image {\n  max-height: 60%;\n  overflow: hidden;\n}\n\n.card.small .card-image + .card-content, .card.medium .card-image + .card-content, .card.large .card-image + .card-content {\n  max-height: 40%;\n}\n\n.card.small .card-content, .card.medium .card-content, .card.large .card-content {\n  max-height: 100%;\n  overflow: hidden;\n}\n\n.card.small .card-action, .card.medium .card-action, .card.large .card-action {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.card.small {\n  height: 300px;\n}\n\n.card.medium {\n  height: 400px;\n}\n\n.card.large {\n  height: 500px;\n}\n\n.card.horizontal {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.card.horizontal.small .card-image, .card.horizontal.medium .card-image, .card.horizontal.large .card-image {\n  height: 100%;\n  max-height: none;\n  overflow: visible;\n}\n\n.card.horizontal.small .card-image img, .card.horizontal.medium .card-image img, .card.horizontal.large .card-image img {\n  height: 100%;\n}\n\n.card.horizontal .card-image {\n  max-width: 50%;\n}\n\n.card.horizontal .card-image img {\n  border-radius: 2px 0 0 2px;\n  max-width: 100%;\n  width: auto;\n}\n\n.card.horizontal .card-stacked {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative;\n}\n\n.card.horizontal .card-stacked .card-content {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.card.sticky-action .card-action {\n  z-index: 2;\n}\n\n.card.sticky-action .card-reveal {\n  z-index: 1;\n  padding-bottom: 64px;\n}\n\n.card .card-image {\n  position: relative;\n}\n\n.card .card-image img {\n  display: block;\n  border-radius: 2px 2px 0 0;\n  position: relative;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n}\n\n.card .card-image .card-title {\n  color: #fff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  max-width: 100%;\n  padding: 24px;\n}\n\n.card .card-content {\n  padding: 24px;\n  border-radius: 0 0 2px 2px;\n}\n\n.card .card-content p {\n  margin: 0;\n}\n\n.card .card-content .card-title {\n  display: block;\n  line-height: 32px;\n  margin-bottom: 8px;\n}\n\n.card .card-content .card-title i {\n  line-height: 32px;\n}\n\n.card .card-action {\n  background-color: inherit;\n  border-top: 1px solid rgba(160, 160, 160, 0.2);\n  position: relative;\n  padding: 16px 24px;\n}\n\n.card .card-action:last-child {\n  border-radius: 0 0 2px 2px;\n}\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating) {\n  color: #ffab40;\n  margin-right: 24px;\n  -webkit-transition: color .3s ease;\n  transition: color .3s ease;\n  text-transform: uppercase;\n}\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating):hover {\n  color: #ffd8a6;\n}\n\n.card .card-reveal {\n  padding: 24px;\n  position: absolute;\n  background-color: #fff;\n  width: 100%;\n  overflow-y: auto;\n  left: 0;\n  top: 100%;\n  height: 100%;\n  z-index: 3;\n  display: none;\n}\n\n.card .card-reveal .card-title {\n  cursor: pointer;\n  display: block;\n}\n\n#toast-container {\n  display: block;\n  position: fixed;\n  z-index: 10000;\n}\n\n@media only screen and (max-width: 600px) {\n  #toast-container {\n    min-width: 100%;\n    bottom: 0%;\n  }\n}\n\n@media only screen and (min-width: 601px) and (max-width: 992px) {\n  #toast-container {\n    left: 5%;\n    bottom: 7%;\n    max-width: 90%;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  #toast-container {\n    top: 10%;\n    right: 7%;\n    max-width: 86%;\n  }\n}\n\n.toast {\n  border-radius: 2px;\n  top: 35px;\n  width: auto;\n  margin-top: 10px;\n  position: relative;\n  max-width: 100%;\n  height: auto;\n  min-height: 48px;\n  line-height: 1.5em;\n  background-color: #323232;\n  padding: 10px 25px;\n  font-size: 1.1rem;\n  font-weight: 300;\n  color: #fff;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  cursor: default;\n}\n\n.toast .toast-action {\n  color: #eeff41;\n  font-weight: 500;\n  margin-right: -25px;\n  margin-left: 3rem;\n}\n\n.toast.rounded {\n  border-radius: 24px;\n}\n\n@media only screen and (max-width: 600px) {\n  .toast {\n    width: 100%;\n    border-radius: 0;\n  }\n}\n\n.tabs {\n  position: relative;\n  overflow-x: auto;\n  overflow-y: hidden;\n  height: 48px;\n  width: 100%;\n  background-color: #fff;\n  margin: 0 auto;\n  white-space: nowrap;\n}\n\n.tabs.tabs-transparent {\n  background-color: transparent;\n}\n\n.tabs.tabs-transparent .tab a,\n.tabs.tabs-transparent .tab.disabled a,\n.tabs.tabs-transparent .tab.disabled a:hover {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.tabs.tabs-transparent .tab a:hover,\n.tabs.tabs-transparent .tab a.active {\n  color: #fff;\n}\n\n.tabs.tabs-transparent .indicator {\n  background-color: #fff;\n}\n\n.tabs.tabs-fixed-width {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.tabs.tabs-fixed-width .tab {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.tabs .tab {\n  display: inline-block;\n  text-align: center;\n  line-height: 48px;\n  height: 48px;\n  padding: 0;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.tabs .tab a {\n  color: rgba(238, 110, 115, 0.7);\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 0 24px;\n  font-size: 14px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-transition: color .28s ease, background-color .28s ease;\n  transition: color .28s ease, background-color .28s ease;\n}\n\n.tabs .tab a:focus, .tabs .tab a:focus.active {\n  background-color: rgba(246, 178, 181, 0.2);\n  outline: none;\n}\n\n.tabs .tab a:hover, .tabs .tab a.active {\n  background-color: transparent;\n  color: #ee6e73;\n}\n\n.tabs .tab.disabled a,\n.tabs .tab.disabled a:hover {\n  color: rgba(238, 110, 115, 0.4);\n  cursor: default;\n}\n\n.tabs .indicator {\n  position: absolute;\n  bottom: 0;\n  height: 2px;\n  background-color: #f6b2b5;\n  will-change: left, right;\n}\n\n@media only screen and (max-width: 992px) {\n  .tabs {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .tabs .tab {\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n  }\n  .tabs .tab a {\n    padding: 0 12px;\n  }\n}\n\n.material-tooltip {\n  padding: 10px 8px;\n  font-size: 1rem;\n  z-index: 2000;\n  background-color: transparent;\n  border-radius: 2px;\n  color: #fff;\n  min-height: 36px;\n  line-height: 120%;\n  opacity: 0;\n  position: absolute;\n  text-align: center;\n  max-width: calc(100% - 4px);\n  overflow: hidden;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  visibility: hidden;\n  background-color: #323232;\n}\n\n.backdrop {\n  position: absolute;\n  opacity: 0;\n  height: 7px;\n  width: 14px;\n  border-radius: 0 0 50% 50%;\n  background-color: #323232;\n  z-index: -1;\n  -webkit-transform-origin: 50% 0%;\n          transform-origin: 50% 0%;\n  visibility: hidden;\n}\n\n.btn, .btn-large, .btn-small,\n.btn-flat {\n  border: none;\n  border-radius: 2px;\n  display: inline-block;\n  height: 36px;\n  line-height: 36px;\n  padding: 0 16px;\n  text-transform: uppercase;\n  vertical-align: middle;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.btn.disabled, .disabled.btn-large, .disabled.btn-small,\n.btn-floating.disabled,\n.btn-large.disabled,\n.btn-small.disabled,\n.btn-flat.disabled,\n.btn:disabled,\n.btn-large:disabled,\n.btn-small:disabled,\n.btn-floating:disabled,\n.btn-large:disabled,\n.btn-small:disabled,\n.btn-flat:disabled,\n.btn[disabled],\n.btn-large[disabled],\n.btn-small[disabled],\n.btn-floating[disabled],\n.btn-large[disabled],\n.btn-small[disabled],\n.btn-flat[disabled] {\n  pointer-events: none;\n  background-color: #DFDFDF !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #9F9F9F !important;\n  cursor: default;\n}\n\n.btn.disabled:hover, .disabled.btn-large:hover, .disabled.btn-small:hover,\n.btn-floating.disabled:hover,\n.btn-large.disabled:hover,\n.btn-small.disabled:hover,\n.btn-flat.disabled:hover,\n.btn:disabled:hover,\n.btn-large:disabled:hover,\n.btn-small:disabled:hover,\n.btn-floating:disabled:hover,\n.btn-large:disabled:hover,\n.btn-small:disabled:hover,\n.btn-flat:disabled:hover,\n.btn[disabled]:hover,\n.btn-large[disabled]:hover,\n.btn-small[disabled]:hover,\n.btn-floating[disabled]:hover,\n.btn-large[disabled]:hover,\n.btn-small[disabled]:hover,\n.btn-flat[disabled]:hover {\n  background-color: #DFDFDF !important;\n  color: #9F9F9F !important;\n}\n\n.btn, .btn-large, .btn-small,\n.btn-floating,\n.btn-large,\n.btn-small,\n.btn-flat {\n  font-size: 14px;\n  outline: 0;\n}\n\n.btn i, .btn-large i, .btn-small i,\n.btn-floating i,\n.btn-large i,\n.btn-small i,\n.btn-flat i {\n  font-size: 1.3rem;\n  line-height: inherit;\n}\n\n.btn:focus, .btn-large:focus, .btn-small:focus,\n.btn-floating:focus {\n  background-color: #1d7d74;\n}\n\n.btn, .btn-large, .btn-small {\n  text-decoration: none;\n  color: #fff;\n  background-color: #26a69a;\n  text-align: center;\n  letter-spacing: .5px;\n  -webkit-transition: background-color .2s ease-out;\n  transition: background-color .2s ease-out;\n  cursor: pointer;\n}\n\n.btn:hover, .btn-large:hover, .btn-small:hover {\n  background-color: #2bbbad;\n}\n\n.btn-floating {\n  display: inline-block;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  padding: 0;\n  background-color: #26a69a;\n  border-radius: 50%;\n  -webkit-transition: background-color .3s;\n  transition: background-color .3s;\n  cursor: pointer;\n  vertical-align: middle;\n}\n\n.btn-floating:hover {\n  background-color: #26a69a;\n}\n\n.btn-floating:before {\n  border-radius: 0;\n}\n\n.btn-floating.btn-large {\n  width: 56px;\n  height: 56px;\n  padding: 0;\n}\n\n.btn-floating.btn-large.halfway-fab {\n  bottom: -28px;\n}\n\n.btn-floating.btn-large i {\n  line-height: 56px;\n}\n\n.btn-floating.btn-small {\n  width: 32.4px;\n  height: 32.4px;\n}\n\n.btn-floating.btn-small.halfway-fab {\n  bottom: -16.2px;\n}\n\n.btn-floating.btn-small i {\n  line-height: 32.4px;\n}\n\n.btn-floating.halfway-fab {\n  position: absolute;\n  right: 24px;\n  bottom: -20px;\n}\n\n.btn-floating.halfway-fab.left {\n  right: auto;\n  left: 24px;\n}\n\n.btn-floating i {\n  width: inherit;\n  display: inline-block;\n  text-align: center;\n  color: #fff;\n  font-size: 1.6rem;\n  line-height: 40px;\n}\n\nbutton.btn-floating {\n  border: none;\n}\n\n.fixed-action-btn {\n  position: fixed;\n  right: 23px;\n  bottom: 23px;\n  padding-top: 15px;\n  margin-bottom: 0;\n  z-index: 997;\n}\n\n.fixed-action-btn.active ul {\n  visibility: visible;\n}\n\n.fixed-action-btn.direction-left, .fixed-action-btn.direction-right {\n  padding: 0 0 0 15px;\n}\n\n.fixed-action-btn.direction-left ul, .fixed-action-btn.direction-right ul {\n  text-align: right;\n  right: 64px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  height: 100%;\n  left: auto;\n  /*width 100% only goes to width of button container */\n  width: 500px;\n}\n\n.fixed-action-btn.direction-left ul li, .fixed-action-btn.direction-right ul li {\n  display: inline-block;\n  margin: 7.5px 15px 0 0;\n}\n\n.fixed-action-btn.direction-right {\n  padding: 0 15px 0 0;\n}\n\n.fixed-action-btn.direction-right ul {\n  text-align: left;\n  direction: rtl;\n  left: 64px;\n  right: auto;\n}\n\n.fixed-action-btn.direction-right ul li {\n  margin: 7.5px 0 0 15px;\n}\n\n.fixed-action-btn.direction-bottom {\n  padding: 0 0 15px 0;\n}\n\n.fixed-action-btn.direction-bottom ul {\n  top: 64px;\n  bottom: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: column-reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n\n.fixed-action-btn.direction-bottom ul li {\n  margin: 15px 0 0 0;\n}\n\n.fixed-action-btn.toolbar {\n  padding: 0;\n  height: 56px;\n}\n\n.fixed-action-btn.toolbar.active > a i {\n  opacity: 0;\n}\n\n.fixed-action-btn.toolbar ul {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n}\n\n.fixed-action-btn.toolbar ul li {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: inline-block;\n  margin: 0;\n  height: 100%;\n  -webkit-transition: none;\n  transition: none;\n}\n\n.fixed-action-btn.toolbar ul li a {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n  line-height: 56px;\n  z-index: 1;\n}\n\n.fixed-action-btn.toolbar ul li a i {\n  line-height: inherit;\n}\n\n.fixed-action-btn ul {\n  left: 0;\n  right: 0;\n  text-align: center;\n  position: absolute;\n  bottom: 64px;\n  margin: 0;\n  visibility: hidden;\n}\n\n.fixed-action-btn ul li {\n  margin-bottom: 15px;\n}\n\n.fixed-action-btn ul a.btn-floating {\n  opacity: 0;\n}\n\n.fixed-action-btn .fab-backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 40px;\n  height: 40px;\n  background-color: #26a69a;\n  border-radius: 50%;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n.btn-flat {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  background-color: transparent;\n  color: #343434;\n  cursor: pointer;\n  -webkit-transition: background-color .2s;\n  transition: background-color .2s;\n}\n\n.btn-flat:focus, .btn-flat:hover {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.btn-flat:focus {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.btn-flat.disabled, .btn-flat.btn-flat[disabled] {\n  background-color: transparent !important;\n  color: #b3b2b2 !important;\n  cursor: default;\n}\n\n.btn-large {\n  height: 54px;\n  line-height: 54px;\n  font-size: 15px;\n  padding: 0 28px;\n}\n\n.btn-large i {\n  font-size: 1.6rem;\n}\n\n.btn-small {\n  height: 32.4px;\n  line-height: 32.4px;\n  font-size: 13px;\n}\n\n.btn-small i {\n  font-size: 1.2rem;\n}\n\n.btn-block {\n  display: block;\n}\n\n.dropdown-content {\n  background-color: #fff;\n  margin: 0;\n  display: none;\n  min-width: 100px;\n  overflow-y: auto;\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n\n.dropdown-content:focus {\n  outline: 0;\n}\n\n.dropdown-content li {\n  clear: both;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: pointer;\n  min-height: 50px;\n  line-height: 1.5rem;\n  width: 100%;\n  text-align: left;\n}\n\n.dropdown-content li:hover, .dropdown-content li.active {\n  background-color: #eee;\n}\n\n.dropdown-content li:focus {\n  outline: none;\n}\n\n.dropdown-content li.divider {\n  min-height: 0;\n  height: 1px;\n}\n\n.dropdown-content li > a, .dropdown-content li > span {\n  font-size: 16px;\n  color: #26a69a;\n  display: block;\n  line-height: 22px;\n  padding: 14px 16px;\n}\n\n.dropdown-content li > span > label {\n  top: 1px;\n  left: 0;\n  height: 18px;\n}\n\n.dropdown-content li > a > i {\n  height: inherit;\n  line-height: inherit;\n  float: left;\n  margin: 0 24px 0 0;\n  width: 24px;\n}\n\nbody.keyboard-focused .dropdown-content li:focus {\n  background-color: #dadada;\n}\n\n.input-field.col .dropdown-content [type=\"checkbox\"] + label {\n  top: 1px;\n  left: 0;\n  height: 18px;\n  -webkit-transform: none;\n          transform: none;\n}\n\n.dropdown-trigger {\n  cursor: pointer;\n}\n\n/*!\r\n * Waves v0.6.0\r\n * http://fian.my.id/Waves\r\n *\r\n * Copyright 2014 Alfiana E. Sibuea and other contributors\r\n * Released under the MIT license\r\n * https://github.com/fians/Waves/blob/master/LICENSE\r\n */\n.waves-effect {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  -webkit-transition: .3s ease-out;\n  transition: .3s ease-out;\n}\n\n.waves-effect .waves-ripple {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  -webkit-transition: all 0.7s ease-out;\n  transition: all 0.7s ease-out;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light .waves-ripple {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red .waves-ripple {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow .waves-ripple {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange .waves-ripple {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple .waves-ripple {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green .waves-ripple {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal .waves-ripple {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect input[type=\"button\"], .waves-effect input[type=\"reset\"], .waves-effect input[type=\"submit\"] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect img {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition {\n  -webkit-transition: none !important;\n  transition: none !important;\n}\n\n.waves-circle {\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper .waves-button-input {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block {\n  display: block;\n}\n\n/* Firefox Bug: link not triggered */\n.waves-effect .waves-ripple {\n  z-index: -1;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  background-color: #fafafa;\n  padding: 0;\n  max-height: 70%;\n  width: 55%;\n  margin: auto;\n  overflow-y: auto;\n  border-radius: 2px;\n  will-change: top, opacity;\n}\n\n.modal:focus {\n  outline: none;\n}\n\n@media only screen and (max-width: 992px) {\n  .modal {\n    width: 80%;\n  }\n}\n\n.modal h1, .modal h2, .modal h3, .modal h4 {\n  margin-top: 0;\n}\n\n.modal .modal-content {\n  padding: 24px;\n}\n\n.modal .modal-close {\n  cursor: pointer;\n}\n\n.modal .modal-footer {\n  border-radius: 0 0 2px 2px;\n  background-color: #fafafa;\n  padding: 4px 6px;\n  height: 56px;\n  width: 100%;\n  text-align: right;\n}\n\n.modal .modal-footer .btn, .modal .modal-footer .btn-large, .modal .modal-footer .btn-small, .modal .modal-footer .btn-flat {\n  margin: 6px 0;\n}\n\n.modal-overlay {\n  position: fixed;\n  z-index: 999;\n  top: -25%;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 125%;\n  width: 100%;\n  background: #000;\n  display: none;\n  will-change: opacity;\n}\n\n.modal.modal-fixed-footer {\n  padding: 0;\n  height: 70%;\n}\n\n.modal.modal-fixed-footer .modal-content {\n  position: absolute;\n  height: calc(100% - 56px);\n  max-height: 100%;\n  width: 100%;\n  overflow-y: auto;\n}\n\n.modal.modal-fixed-footer .modal-footer {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  position: absolute;\n  bottom: 0;\n}\n\n.modal.bottom-sheet {\n  top: auto;\n  bottom: -100%;\n  margin: 0;\n  width: 100%;\n  max-height: 45%;\n  border-radius: 0;\n  will-change: bottom, opacity;\n}\n\n.collapsible {\n  border-top: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n  margin: 0.5rem 0 1rem 0;\n}\n\n.collapsible-header {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  line-height: 1.5;\n  padding: 1rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n}\n\n.collapsible-header:focus {\n  outline: 0;\n}\n\n.collapsible-header i {\n  width: 2rem;\n  font-size: 1.6rem;\n  display: inline-block;\n  text-align: center;\n  margin-right: 1rem;\n}\n\n.keyboard-focused .collapsible-header:focus {\n  background-color: #eee;\n}\n\n.collapsible-body {\n  display: none;\n  border-bottom: 1px solid #ddd;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 2rem;\n}\n\n.sidenav .collapsible,\n.sidenav.fixed .collapsible {\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.sidenav .collapsible li,\n.sidenav.fixed .collapsible li {\n  padding: 0;\n}\n\n.sidenav .collapsible-header,\n.sidenav.fixed .collapsible-header {\n  background-color: transparent;\n  border: none;\n  line-height: inherit;\n  height: inherit;\n  padding: 0 16px;\n}\n\n.sidenav .collapsible-header:hover,\n.sidenav.fixed .collapsible-header:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.sidenav .collapsible-header i,\n.sidenav.fixed .collapsible-header i {\n  line-height: inherit;\n}\n\n.sidenav .collapsible-body,\n.sidenav.fixed .collapsible-body {\n  border: 0;\n  background-color: #fff;\n}\n\n.sidenav .collapsible-body li a,\n.sidenav.fixed .collapsible-body li a {\n  padding: 0 23.5px 0 31px;\n}\n\n.collapsible.popout {\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.collapsible.popout > li {\n  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  margin: 0 24px;\n  -webkit-transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.collapsible.popout > li.active {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n          box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  margin: 16px 0;\n}\n\n.chip {\n  display: inline-block;\n  height: 32px;\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  line-height: 32px;\n  padding: 0 12px;\n  border-radius: 16px;\n  background-color: #e4e4e4;\n  margin-bottom: 5px;\n  margin-right: 5px;\n}\n\n.chip:focus {\n  outline: none;\n  background-color: #26a69a;\n  color: #fff;\n}\n\n.chip > img {\n  float: left;\n  margin: 0 8px 0 -12px;\n  height: 32px;\n  width: 32px;\n  border-radius: 50%;\n}\n\n.chip .close {\n  cursor: pointer;\n  float: right;\n  font-size: 16px;\n  line-height: 32px;\n  padding-left: 8px;\n}\n\n.chips {\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  margin: 0 0 8px 0;\n  min-height: 45px;\n  outline: none;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n\n.chips.focus {\n  border-bottom: 1px solid #26a69a;\n  -webkit-box-shadow: 0 1px 0 0 #26a69a;\n          box-shadow: 0 1px 0 0 #26a69a;\n}\n\n.chips:hover {\n  cursor: text;\n}\n\n.chips .input {\n  background: none;\n  border: 0;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  font-size: 16px;\n  height: 3rem;\n  line-height: 32px;\n  outline: 0;\n  margin: 0;\n  padding: 0 !important;\n  width: 120px !important;\n}\n\n.chips .input:focus {\n  border: 0 !important;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n\n.chips .autocomplete-content {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.prefix ~ .chips {\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem);\n}\n\n.chips:empty ~ label {\n  font-size: 0.8rem;\n  -webkit-transform: translateY(-140%);\n          transform: translateY(-140%);\n}\n\n.materialboxed {\n  display: block;\n  cursor: -webkit-zoom-in;\n  cursor: zoom-in;\n  position: relative;\n  -webkit-transition: opacity .4s;\n  transition: opacity .4s;\n  -webkit-backface-visibility: hidden;\n}\n\n.materialboxed:hover:not(.active) {\n  opacity: .8;\n}\n\n.materialboxed.active {\n  cursor: -webkit-zoom-out;\n  cursor: zoom-out;\n}\n\n#materialbox-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #292929;\n  z-index: 1000;\n  will-change: opacity;\n}\n\n.materialbox-caption {\n  position: fixed;\n  display: none;\n  color: #fff;\n  line-height: 50px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  padding: 0% 15%;\n  height: 50px;\n  z-index: 1000;\n  -webkit-font-smoothing: antialiased;\n}\n\nselect:focus {\n  outline: 1px solid #c9f3ef;\n}\n\nbutton:focus {\n  outline: none;\n  background-color: #2ab7a9;\n}\n\nlabel {\n  font-size: 0.8rem;\n  color: #9e9e9e;\n}\n\n/* Text Inputs + Textarea\n   ========================================================================== */\n/* Style Placeholders */\n::-webkit-input-placeholder {\n  color: #d1d1d1;\n}\n::-moz-placeholder {\n  color: #d1d1d1;\n}\n:-ms-input-placeholder {\n  color: #d1d1d1;\n}\n::-ms-input-placeholder {\n  color: #d1d1d1;\n}\n::placeholder {\n  color: #d1d1d1;\n}\n\n/* Text inputs */\ninput:not([type]),\ninput[type=text]:not(.browser-default),\ninput[type=password]:not(.browser-default),\ninput[type=email]:not(.browser-default),\ninput[type=url]:not(.browser-default),\ninput[type=time]:not(.browser-default),\ninput[type=date]:not(.browser-default),\ninput[type=datetime]:not(.browser-default),\ninput[type=datetime-local]:not(.browser-default),\ninput[type=tel]:not(.browser-default),\ninput[type=number]:not(.browser-default),\ninput[type=search]:not(.browser-default),\ntextarea.materialize-textarea {\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  border-radius: 0;\n  outline: none;\n  height: 3rem;\n  width: 100%;\n  font-size: 16px;\n  margin: 0 0 8px 0;\n  padding: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  -webkit-transition: border .3s, -webkit-box-shadow .3s;\n  transition: border .3s, -webkit-box-shadow .3s;\n  transition: box-shadow .3s, border .3s;\n  transition: box-shadow .3s, border .3s, -webkit-box-shadow .3s;\n}\n\ninput:not([type]):disabled, input:not([type])[readonly=\"readonly\"],\ninput[type=text]:not(.browser-default):disabled,\ninput[type=text]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=password]:not(.browser-default):disabled,\ninput[type=password]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=email]:not(.browser-default):disabled,\ninput[type=email]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=url]:not(.browser-default):disabled,\ninput[type=url]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=time]:not(.browser-default):disabled,\ninput[type=time]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=date]:not(.browser-default):disabled,\ninput[type=date]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=datetime]:not(.browser-default):disabled,\ninput[type=datetime]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=datetime-local]:not(.browser-default):disabled,\ninput[type=datetime-local]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=tel]:not(.browser-default):disabled,\ninput[type=tel]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=number]:not(.browser-default):disabled,\ninput[type=number]:not(.browser-default)[readonly=\"readonly\"],\ninput[type=search]:not(.browser-default):disabled,\ninput[type=search]:not(.browser-default)[readonly=\"readonly\"],\ntextarea.materialize-textarea:disabled,\ntextarea.materialize-textarea[readonly=\"readonly\"] {\n  color: rgba(0, 0, 0, 0.42);\n  border-bottom: 1px dotted rgba(0, 0, 0, 0.42);\n}\n\ninput:not([type]):disabled + label,\ninput:not([type])[readonly=\"readonly\"] + label,\ninput[type=text]:not(.browser-default):disabled + label,\ninput[type=text]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=password]:not(.browser-default):disabled + label,\ninput[type=password]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=email]:not(.browser-default):disabled + label,\ninput[type=email]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=url]:not(.browser-default):disabled + label,\ninput[type=url]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=time]:not(.browser-default):disabled + label,\ninput[type=time]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=date]:not(.browser-default):disabled + label,\ninput[type=date]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=datetime]:not(.browser-default):disabled + label,\ninput[type=datetime]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=datetime-local]:not(.browser-default):disabled + label,\ninput[type=datetime-local]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=tel]:not(.browser-default):disabled + label,\ninput[type=tel]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=number]:not(.browser-default):disabled + label,\ninput[type=number]:not(.browser-default)[readonly=\"readonly\"] + label,\ninput[type=search]:not(.browser-default):disabled + label,\ninput[type=search]:not(.browser-default)[readonly=\"readonly\"] + label,\ntextarea.materialize-textarea:disabled + label,\ntextarea.materialize-textarea[readonly=\"readonly\"] + label {\n  color: rgba(0, 0, 0, 0.42);\n}\n\ninput:not([type]):focus:not([readonly]),\ninput[type=text]:not(.browser-default):focus:not([readonly]),\ninput[type=password]:not(.browser-default):focus:not([readonly]),\ninput[type=email]:not(.browser-default):focus:not([readonly]),\ninput[type=url]:not(.browser-default):focus:not([readonly]),\ninput[type=time]:not(.browser-default):focus:not([readonly]),\ninput[type=date]:not(.browser-default):focus:not([readonly]),\ninput[type=datetime]:not(.browser-default):focus:not([readonly]),\ninput[type=datetime-local]:not(.browser-default):focus:not([readonly]),\ninput[type=tel]:not(.browser-default):focus:not([readonly]),\ninput[type=number]:not(.browser-default):focus:not([readonly]),\ninput[type=search]:not(.browser-default):focus:not([readonly]),\ntextarea.materialize-textarea:focus:not([readonly]) {\n  border-bottom: 1px solid #26a69a;\n  -webkit-box-shadow: 0 1px 0 0 #26a69a;\n          box-shadow: 0 1px 0 0 #26a69a;\n}\n\ninput:not([type]):focus:not([readonly]) + label,\ninput[type=text]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=password]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=email]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=url]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=time]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=date]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=datetime]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=datetime-local]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=tel]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=number]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=search]:not(.browser-default):focus:not([readonly]) + label,\ntextarea.materialize-textarea:focus:not([readonly]) + label {\n  color: #26a69a;\n}\n\ninput:not([type]):focus.valid ~ label,\ninput[type=text]:not(.browser-default):focus.valid ~ label,\ninput[type=password]:not(.browser-default):focus.valid ~ label,\ninput[type=email]:not(.browser-default):focus.valid ~ label,\ninput[type=url]:not(.browser-default):focus.valid ~ label,\ninput[type=time]:not(.browser-default):focus.valid ~ label,\ninput[type=date]:not(.browser-default):focus.valid ~ label,\ninput[type=datetime]:not(.browser-default):focus.valid ~ label,\ninput[type=datetime-local]:not(.browser-default):focus.valid ~ label,\ninput[type=tel]:not(.browser-default):focus.valid ~ label,\ninput[type=number]:not(.browser-default):focus.valid ~ label,\ninput[type=search]:not(.browser-default):focus.valid ~ label,\ntextarea.materialize-textarea:focus.valid ~ label {\n  color: #4CAF50;\n}\n\ninput:not([type]):focus.invalid ~ label,\ninput[type=text]:not(.browser-default):focus.invalid ~ label,\ninput[type=password]:not(.browser-default):focus.invalid ~ label,\ninput[type=email]:not(.browser-default):focus.invalid ~ label,\ninput[type=url]:not(.browser-default):focus.invalid ~ label,\ninput[type=time]:not(.browser-default):focus.invalid ~ label,\ninput[type=date]:not(.browser-default):focus.invalid ~ label,\ninput[type=datetime]:not(.browser-default):focus.invalid ~ label,\ninput[type=datetime-local]:not(.browser-default):focus.invalid ~ label,\ninput[type=tel]:not(.browser-default):focus.invalid ~ label,\ninput[type=number]:not(.browser-default):focus.invalid ~ label,\ninput[type=search]:not(.browser-default):focus.invalid ~ label,\ntextarea.materialize-textarea:focus.invalid ~ label {\n  color: #F44336;\n}\n\ninput:not([type]).validate + label,\ninput[type=text]:not(.browser-default).validate + label,\ninput[type=password]:not(.browser-default).validate + label,\ninput[type=email]:not(.browser-default).validate + label,\ninput[type=url]:not(.browser-default).validate + label,\ninput[type=time]:not(.browser-default).validate + label,\ninput[type=date]:not(.browser-default).validate + label,\ninput[type=datetime]:not(.browser-default).validate + label,\ninput[type=datetime-local]:not(.browser-default).validate + label,\ninput[type=tel]:not(.browser-default).validate + label,\ninput[type=number]:not(.browser-default).validate + label,\ninput[type=search]:not(.browser-default).validate + label,\ntextarea.materialize-textarea.validate + label {\n  width: 100%;\n}\n\n/* Validation Sass Placeholders */\ninput.valid:not([type]), input.valid:not([type]):focus,\ninput.valid[type=text]:not(.browser-default),\ninput.valid[type=text]:not(.browser-default):focus,\ninput.valid[type=password]:not(.browser-default),\ninput.valid[type=password]:not(.browser-default):focus,\ninput.valid[type=email]:not(.browser-default),\ninput.valid[type=email]:not(.browser-default):focus,\ninput.valid[type=url]:not(.browser-default),\ninput.valid[type=url]:not(.browser-default):focus,\ninput.valid[type=time]:not(.browser-default),\ninput.valid[type=time]:not(.browser-default):focus,\ninput.valid[type=date]:not(.browser-default),\ninput.valid[type=date]:not(.browser-default):focus,\ninput.valid[type=datetime]:not(.browser-default),\ninput.valid[type=datetime]:not(.browser-default):focus,\ninput.valid[type=datetime-local]:not(.browser-default),\ninput.valid[type=datetime-local]:not(.browser-default):focus,\ninput.valid[type=tel]:not(.browser-default),\ninput.valid[type=tel]:not(.browser-default):focus,\ninput.valid[type=number]:not(.browser-default),\ninput.valid[type=number]:not(.browser-default):focus,\ninput.valid[type=search]:not(.browser-default),\ninput.valid[type=search]:not(.browser-default):focus,\ntextarea.materialize-textarea.valid,\ntextarea.materialize-textarea.valid:focus, .select-wrapper.valid > input.select-dropdown {\n  border-bottom: 1px solid #4CAF50;\n  -webkit-box-shadow: 0 1px 0 0 #4CAF50;\n          box-shadow: 0 1px 0 0 #4CAF50;\n}\n\ninput.invalid:not([type]), input.invalid:not([type]):focus,\ninput.invalid[type=text]:not(.browser-default),\ninput.invalid[type=text]:not(.browser-default):focus,\ninput.invalid[type=password]:not(.browser-default),\ninput.invalid[type=password]:not(.browser-default):focus,\ninput.invalid[type=email]:not(.browser-default),\ninput.invalid[type=email]:not(.browser-default):focus,\ninput.invalid[type=url]:not(.browser-default),\ninput.invalid[type=url]:not(.browser-default):focus,\ninput.invalid[type=time]:not(.browser-default),\ninput.invalid[type=time]:not(.browser-default):focus,\ninput.invalid[type=date]:not(.browser-default),\ninput.invalid[type=date]:not(.browser-default):focus,\ninput.invalid[type=datetime]:not(.browser-default),\ninput.invalid[type=datetime]:not(.browser-default):focus,\ninput.invalid[type=datetime-local]:not(.browser-default),\ninput.invalid[type=datetime-local]:not(.browser-default):focus,\ninput.invalid[type=tel]:not(.browser-default),\ninput.invalid[type=tel]:not(.browser-default):focus,\ninput.invalid[type=number]:not(.browser-default),\ninput.invalid[type=number]:not(.browser-default):focus,\ninput.invalid[type=search]:not(.browser-default),\ninput.invalid[type=search]:not(.browser-default):focus,\ntextarea.materialize-textarea.invalid,\ntextarea.materialize-textarea.invalid:focus, .select-wrapper.invalid > input.select-dropdown,\n.select-wrapper.invalid > input.select-dropdown:focus {\n  border-bottom: 1px solid #F44336;\n  -webkit-box-shadow: 0 1px 0 0 #F44336;\n          box-shadow: 0 1px 0 0 #F44336;\n}\n\ninput:not([type]).valid ~ .helper-text[data-success],\ninput:not([type]):focus.valid ~ .helper-text[data-success],\ninput:not([type]).invalid ~ .helper-text[data-error],\ninput:not([type]):focus.invalid ~ .helper-text[data-error],\ninput[type=text]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=text]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=text]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=text]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=password]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=password]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=password]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=password]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=email]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=email]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=email]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=email]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=url]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=url]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=url]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=url]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=time]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=time]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=time]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=time]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=date]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=date]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=date]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=date]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=datetime]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=datetime]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=datetime]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=datetime]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=datetime-local]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=datetime-local]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=datetime-local]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=datetime-local]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=tel]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=tel]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=tel]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=tel]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=number]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=number]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=number]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=number]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ninput[type=search]:not(.browser-default).valid ~ .helper-text[data-success],\ninput[type=search]:not(.browser-default):focus.valid ~ .helper-text[data-success],\ninput[type=search]:not(.browser-default).invalid ~ .helper-text[data-error],\ninput[type=search]:not(.browser-default):focus.invalid ~ .helper-text[data-error],\ntextarea.materialize-textarea.valid ~ .helper-text[data-success],\ntextarea.materialize-textarea:focus.valid ~ .helper-text[data-success],\ntextarea.materialize-textarea.invalid ~ .helper-text[data-error],\ntextarea.materialize-textarea:focus.invalid ~ .helper-text[data-error], .select-wrapper.valid .helper-text[data-success],\n.select-wrapper.invalid ~ .helper-text[data-error] {\n  color: transparent;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}\n\ninput:not([type]).valid ~ .helper-text:after,\ninput:not([type]):focus.valid ~ .helper-text:after,\ninput[type=text]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=text]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=password]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=password]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=email]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=email]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=url]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=url]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=time]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=time]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=date]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=date]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=datetime]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=datetime]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=datetime-local]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=datetime-local]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=tel]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=tel]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=number]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=number]:not(.browser-default):focus.valid ~ .helper-text:after,\ninput[type=search]:not(.browser-default).valid ~ .helper-text:after,\ninput[type=search]:not(.browser-default):focus.valid ~ .helper-text:after,\ntextarea.materialize-textarea.valid ~ .helper-text:after,\ntextarea.materialize-textarea:focus.valid ~ .helper-text:after, .select-wrapper.valid ~ .helper-text:after {\n  content: attr(data-success);\n  color: #4CAF50;\n}\n\ninput:not([type]).invalid ~ .helper-text:after,\ninput:not([type]):focus.invalid ~ .helper-text:after,\ninput[type=text]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=text]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=password]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=password]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=email]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=email]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=url]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=url]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=time]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=time]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=date]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=date]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=datetime]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=datetime]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=datetime-local]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=datetime-local]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=tel]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=tel]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=number]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=number]:not(.browser-default):focus.invalid ~ .helper-text:after,\ninput[type=search]:not(.browser-default).invalid ~ .helper-text:after,\ninput[type=search]:not(.browser-default):focus.invalid ~ .helper-text:after,\ntextarea.materialize-textarea.invalid ~ .helper-text:after,\ntextarea.materialize-textarea:focus.invalid ~ .helper-text:after, .select-wrapper.invalid ~ .helper-text:after {\n  content: attr(data-error);\n  color: #F44336;\n}\n\ninput:not([type]) + label:after,\ninput[type=text]:not(.browser-default) + label:after,\ninput[type=password]:not(.browser-default) + label:after,\ninput[type=email]:not(.browser-default) + label:after,\ninput[type=url]:not(.browser-default) + label:after,\ninput[type=time]:not(.browser-default) + label:after,\ninput[type=date]:not(.browser-default) + label:after,\ninput[type=datetime]:not(.browser-default) + label:after,\ninput[type=datetime-local]:not(.browser-default) + label:after,\ninput[type=tel]:not(.browser-default) + label:after,\ninput[type=number]:not(.browser-default) + label:after,\ninput[type=search]:not(.browser-default) + label:after,\ntextarea.materialize-textarea + label:after, .select-wrapper + label:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 0;\n  opacity: 0;\n  -webkit-transition: .2s opacity ease-out, .2s color ease-out;\n  transition: .2s opacity ease-out, .2s color ease-out;\n}\n\n.input-field {\n  position: relative;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.input-field.inline {\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 5px;\n}\n\n.input-field.inline input,\n.input-field.inline .select-dropdown {\n  margin-bottom: 1rem;\n}\n\n.input-field.col label {\n  left: 0.75rem;\n}\n\n.input-field.col .prefix ~ label,\n.input-field.col .prefix ~ .validate ~ label {\n  width: calc(100% - 3rem - 1.5rem);\n}\n\n.input-field > label {\n  color: #9e9e9e;\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 1rem;\n  cursor: text;\n  -webkit-transition: color .2s ease-out, -webkit-transform .2s ease-out;\n  transition: color .2s ease-out, -webkit-transform .2s ease-out;\n  transition: transform .2s ease-out, color .2s ease-out;\n  transition: transform .2s ease-out, color .2s ease-out, -webkit-transform .2s ease-out;\n  -webkit-transform-origin: 0% 100%;\n          transform-origin: 0% 100%;\n  text-align: initial;\n  -webkit-transform: translateY(12px);\n          transform: translateY(12px);\n}\n\n.input-field > label:not(.label-icon).active {\n  -webkit-transform: translateY(-14px) scale(0.8);\n          transform: translateY(-14px) scale(0.8);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n\n.input-field > input[type]:-webkit-autofill:not(.browser-default):not([type=\"search\"]) + label,\n.input-field > input[type=date]:not(.browser-default) + label,\n.input-field > input[type=time]:not(.browser-default) + label {\n  -webkit-transform: translateY(-14px) scale(0.8);\n          transform: translateY(-14px) scale(0.8);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n\n.input-field .helper-text {\n  position: relative;\n  min-height: 18px;\n  display: block;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.input-field .helper-text::after {\n  opacity: 1;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.input-field .prefix {\n  position: absolute;\n  width: 3rem;\n  font-size: 2rem;\n  -webkit-transition: color .2s;\n  transition: color .2s;\n  top: 0.5rem;\n}\n\n.input-field .prefix.active {\n  color: #26a69a;\n}\n\n.input-field .prefix ~ input,\n.input-field .prefix ~ textarea,\n.input-field .prefix ~ label,\n.input-field .prefix ~ .validate ~ label,\n.input-field .prefix ~ .helper-text,\n.input-field .prefix ~ .autocomplete-content {\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem);\n}\n\n.input-field .prefix ~ label {\n  margin-left: 3rem;\n}\n\n@media only screen and (max-width: 992px) {\n  .input-field .prefix ~ input {\n    width: 86%;\n    width: calc(100% - 3rem);\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .input-field .prefix ~ input {\n    width: 80%;\n    width: calc(100% - 3rem);\n  }\n}\n\n/* Search Field */\n.input-field input[type=search] {\n  display: block;\n  line-height: inherit;\n  -webkit-transition: .3s background-color;\n  transition: .3s background-color;\n}\n\n.nav-wrapper .input-field input[type=search] {\n  height: inherit;\n  padding-left: 4rem;\n  width: calc(100% - 4rem);\n  border: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.input-field input[type=search]:focus:not(.browser-default) {\n  background-color: #fff;\n  border: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #444;\n}\n\n.input-field input[type=search]:focus:not(.browser-default) + label i,\n.input-field input[type=search]:focus:not(.browser-default) ~ .mdi-navigation-close,\n.input-field input[type=search]:focus:not(.browser-default) ~ .material-icons {\n  color: #444;\n}\n\n.input-field input[type=search] + .label-icon {\n  -webkit-transform: none;\n          transform: none;\n  left: 1rem;\n}\n\n.input-field input[type=search] ~ .mdi-navigation-close,\n.input-field input[type=search] ~ .material-icons {\n  position: absolute;\n  top: 0;\n  right: 1rem;\n  color: transparent;\n  cursor: pointer;\n  font-size: 2rem;\n  -webkit-transition: .3s color;\n  transition: .3s color;\n}\n\n/* Textarea */\ntextarea {\n  width: 100%;\n  height: 3rem;\n  background-color: transparent;\n}\n\ntextarea.materialize-textarea {\n  line-height: normal;\n  overflow-y: hidden;\n  /* prevents scroll bar flash */\n  padding: .8rem 0 .8rem 0;\n  /* prevents text jump on Enter keypress */\n  resize: none;\n  min-height: 3rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.hiddendiv {\n  visibility: hidden;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  /* future version of deprecated 'word-wrap' */\n  padding-top: 1.2rem;\n  /* prevents text jump on Enter keypress */\n  position: absolute;\n  top: 0;\n  z-index: -1;\n}\n\n/* Autocomplete */\n.autocomplete-content li .highlight {\n  color: #444;\n}\n\n.autocomplete-content li img {\n  height: 40px;\n  width: 40px;\n  margin: 5px 15px;\n}\n\n/* Character Counter */\n.character-counter {\n  min-height: 18px;\n}\n\n/* Radio Buttons\n   ========================================================================== */\n[type=\"radio\"]:not(:checked),\n[type=\"radio\"]:checked {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n\n[type=\"radio\"]:not(:checked) + span,\n[type=\"radio\"]:checked + span {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  font-size: 1rem;\n  -webkit-transition: .28s ease;\n  transition: .28s ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n[type=\"radio\"] + span:before,\n[type=\"radio\"] + span:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 4px;\n  width: 16px;\n  height: 16px;\n  z-index: 0;\n  -webkit-transition: .28s ease;\n  transition: .28s ease;\n}\n\n/* Unchecked styles */\n[type=\"radio\"]:not(:checked) + span:before,\n[type=\"radio\"]:not(:checked) + span:after,\n[type=\"radio\"]:checked + span:before,\n[type=\"radio\"]:checked + span:after,\n[type=\"radio\"].with-gap:checked + span:before,\n[type=\"radio\"].with-gap:checked + span:after {\n  border-radius: 50%;\n}\n\n[type=\"radio\"]:not(:checked) + span:before,\n[type=\"radio\"]:not(:checked) + span:after {\n  border: 2px solid #5a5a5a;\n}\n\n[type=\"radio\"]:not(:checked) + span:after {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n/* Checked styles */\n[type=\"radio\"]:checked + span:before {\n  border: 2px solid transparent;\n}\n\n[type=\"radio\"]:checked + span:after,\n[type=\"radio\"].with-gap:checked + span:before,\n[type=\"radio\"].with-gap:checked + span:after {\n  border: 2px solid #26a69a;\n}\n\n[type=\"radio\"]:checked + span:after,\n[type=\"radio\"].with-gap:checked + span:after {\n  background-color: #26a69a;\n}\n\n[type=\"radio\"]:checked + span:after {\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n}\n\n/* Radio With gap */\n[type=\"radio\"].with-gap:checked + span:after {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n\n/* Focused styles */\n[type=\"radio\"].tabbed:focus + span:before {\n  -webkit-box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n/* Disabled Radio With gap */\n[type=\"radio\"].with-gap:disabled:checked + span:before {\n  border: 2px solid rgba(0, 0, 0, 0.42);\n}\n\n[type=\"radio\"].with-gap:disabled:checked + span:after {\n  border: none;\n  background-color: rgba(0, 0, 0, 0.42);\n}\n\n/* Disabled style */\n[type=\"radio\"]:disabled:not(:checked) + span:before,\n[type=\"radio\"]:disabled:checked + span:before {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.42);\n}\n\n[type=\"radio\"]:disabled + span {\n  color: rgba(0, 0, 0, 0.42);\n}\n\n[type=\"radio\"]:disabled:not(:checked) + span:before {\n  border-color: rgba(0, 0, 0, 0.42);\n}\n\n[type=\"radio\"]:disabled:checked + span:after {\n  background-color: rgba(0, 0, 0, 0.42);\n  border-color: #949494;\n}\n\n/* Checkboxes\n   ========================================================================== */\n/* Remove default checkbox */\n[type=\"checkbox\"]:not(:checked),\n[type=\"checkbox\"]:checked {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n\n[type=\"checkbox\"] {\n  /* checkbox aspect */\n}\n\n[type=\"checkbox\"] + span:not(.lever) {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  font-size: 1rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n[type=\"checkbox\"] + span:not(.lever):before,\n[type=\"checkbox\"]:not(.filled-in) + span:not(.lever):after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 18px;\n  height: 18px;\n  z-index: 0;\n  border: 2px solid #5a5a5a;\n  border-radius: 1px;\n  margin-top: 3px;\n  -webkit-transition: .2s;\n  transition: .2s;\n}\n\n[type=\"checkbox\"]:not(.filled-in) + span:not(.lever):after {\n  border: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n[type=\"checkbox\"]:not(:checked):disabled + span:not(.lever):before {\n  border: none;\n  background-color: rgba(0, 0, 0, 0.42);\n}\n\n[type=\"checkbox\"].tabbed:focus + span:not(.lever):after {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  border: 0;\n  border-radius: 50%;\n  -webkit-box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n[type=\"checkbox\"]:checked + span:not(.lever):before {\n  top: -4px;\n  left: -5px;\n  width: 12px;\n  height: 22px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #26a69a;\n  border-bottom: 2px solid #26a69a;\n  -webkit-transform: rotate(40deg);\n          transform: rotate(40deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"]:checked:disabled + span:before {\n  border-right: 2px solid rgba(0, 0, 0, 0.42);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.42);\n}\n\n/* Indeterminate checkbox */\n[type=\"checkbox\"]:indeterminate + span:not(.lever):before {\n  top: -11px;\n  left: -12px;\n  width: 10px;\n  height: 22px;\n  border-top: none;\n  border-left: none;\n  border-right: 2px solid #26a69a;\n  border-bottom: none;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"]:indeterminate:disabled + span:not(.lever):before {\n  border-right: 2px solid rgba(0, 0, 0, 0.42);\n  background-color: transparent;\n}\n\n[type=\"checkbox\"].filled-in + span:not(.lever):after {\n  border-radius: 2px;\n}\n\n[type=\"checkbox\"].filled-in + span:not(.lever):before,\n[type=\"checkbox\"].filled-in + span:not(.lever):after {\n  content: '';\n  left: 0;\n  position: absolute;\n  /* .1s delay is for check animation */\n  -webkit-transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;\n  transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;\n  z-index: 1;\n}\n\n[type=\"checkbox\"].filled-in:not(:checked) + span:not(.lever):before {\n  width: 0;\n  height: 0;\n  border: 3px solid transparent;\n  left: 6px;\n  top: 10px;\n  -webkit-transform: rotateZ(37deg);\n          transform: rotateZ(37deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"].filled-in:not(:checked) + span:not(.lever):after {\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: 2px solid #5a5a5a;\n  top: 0px;\n  z-index: 0;\n}\n\n[type=\"checkbox\"].filled-in:checked + span:not(.lever):before {\n  top: 0;\n  left: 1px;\n  width: 8px;\n  height: 13px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n  -webkit-transform: rotateZ(37deg);\n          transform: rotateZ(37deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"].filled-in:checked + span:not(.lever):after {\n  top: 0;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #26a69a;\n  background-color: #26a69a;\n  z-index: 0;\n}\n\n[type=\"checkbox\"].filled-in.tabbed:focus + span:not(.lever):after {\n  border-radius: 2px;\n  border-color: #5a5a5a;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n[type=\"checkbox\"].filled-in.tabbed:checked:focus + span:not(.lever):after {\n  border-radius: 2px;\n  background-color: #26a69a;\n  border-color: #26a69a;\n}\n\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + span:not(.lever):before {\n  background-color: transparent;\n  border: 2px solid transparent;\n}\n\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + span:not(.lever):after {\n  border-color: transparent;\n  background-color: #949494;\n}\n\n[type=\"checkbox\"].filled-in:disabled:checked + span:not(.lever):before {\n  background-color: transparent;\n}\n\n[type=\"checkbox\"].filled-in:disabled:checked + span:not(.lever):after {\n  background-color: #949494;\n  border-color: #949494;\n}\n\n/* Switch\r\n   ========================================================================== */\n.switch,\n.switch * {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.switch label {\n  cursor: pointer;\n}\n\n.switch label input[type=checkbox] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.switch label input[type=checkbox]:checked + .lever {\n  background-color: #84c7c1;\n}\n\n.switch label input[type=checkbox]:checked + .lever:before, .switch label input[type=checkbox]:checked + .lever:after {\n  left: 18px;\n}\n\n.switch label input[type=checkbox]:checked + .lever:after {\n  background-color: #26a69a;\n}\n\n.switch label .lever {\n  content: \"\";\n  display: inline-block;\n  position: relative;\n  width: 36px;\n  height: 14px;\n  background-color: rgba(0, 0, 0, 0.38);\n  border-radius: 15px;\n  margin-right: 10px;\n  -webkit-transition: background 0.3s ease;\n  transition: background 0.3s ease;\n  vertical-align: middle;\n  margin: 0 16px;\n}\n\n.switch label .lever:before, .switch label .lever:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  left: 0;\n  top: -3px;\n  -webkit-transition: left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;\n  transition: left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;\n  transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease;\n  transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;\n}\n\n.switch label .lever:before {\n  background-color: rgba(38, 166, 154, 0.15);\n}\n\n.switch label .lever:after {\n  background-color: #F1F1F1;\n  -webkit-box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\ninput[type=checkbox]:checked:not(:disabled) ~ .lever:active::before,\ninput[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::before {\n  -webkit-transform: scale(2.4);\n          transform: scale(2.4);\n  background-color: rgba(38, 166, 154, 0.15);\n}\n\ninput[type=checkbox]:not(:disabled) ~ .lever:active:before,\ninput[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::before {\n  -webkit-transform: scale(2.4);\n          transform: scale(2.4);\n  background-color: rgba(0, 0, 0, 0.08);\n}\n\n.switch input[type=checkbox][disabled] + .lever {\n  cursor: default;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\n.switch label input[type=checkbox][disabled] + .lever:after,\n.switch label input[type=checkbox][disabled]:checked + .lever:after {\n  background-color: #949494;\n}\n\n/* Select Field\n   ========================================================================== */\nselect {\n  display: none;\n}\n\nselect.browser-default {\n  display: block;\n}\n\nselect {\n  background-color: rgba(255, 255, 255, 0.9);\n  width: 100%;\n  padding: 5px;\n  border: 1px solid #f2f2f2;\n  border-radius: 2px;\n  height: 3rem;\n}\n\n.select-label {\n  position: absolute;\n}\n\n.select-wrapper {\n  position: relative;\n}\n\n.select-wrapper.valid + label,\n.select-wrapper.invalid + label {\n  width: 100%;\n  pointer-events: none;\n}\n\n.select-wrapper input.select-dropdown {\n  position: relative;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  outline: none;\n  height: 3rem;\n  line-height: 3rem;\n  width: 100%;\n  font-size: 16px;\n  margin: 0 0 8px 0;\n  padding: 0;\n  display: block;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 1;\n}\n\n.select-wrapper input.select-dropdown:focus {\n  border-bottom: 1px solid #26a69a;\n}\n\n.select-wrapper .caret {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  z-index: 0;\n  fill: rgba(0, 0, 0, 0.87);\n}\n\n.select-wrapper + label {\n  position: absolute;\n  top: -26px;\n  font-size: 0.8rem;\n}\n\nselect:disabled {\n  color: rgba(0, 0, 0, 0.42);\n}\n\n.select-wrapper.disabled + label {\n  color: rgba(0, 0, 0, 0.42);\n}\n\n.select-wrapper.disabled .caret {\n  fill: rgba(0, 0, 0, 0.42);\n}\n\n.select-wrapper input.select-dropdown:disabled {\n  color: rgba(0, 0, 0, 0.42);\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.select-wrapper i {\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.select-dropdown li.disabled,\n.select-dropdown li.disabled > span,\n.select-dropdown li.optgroup {\n  color: rgba(0, 0, 0, 0.3);\n  background-color: transparent;\n}\n\nbody.keyboard-focused .select-dropdown.dropdown-content li:focus {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n\n.select-dropdown.dropdown-content li:hover {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n\n.select-dropdown.dropdown-content li.selected {\n  background-color: rgba(0, 0, 0, 0.03);\n}\n\n.prefix ~ .select-wrapper {\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem);\n}\n\n.prefix ~ label {\n  margin-left: 3rem;\n}\n\n.select-dropdown li img {\n  height: 40px;\n  width: 40px;\n  margin: 5px 15px;\n  float: right;\n}\n\n.select-dropdown li.optgroup {\n  border-top: 1px solid #eee;\n}\n\n.select-dropdown li.optgroup.selected > span {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.select-dropdown li.optgroup > span {\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.select-dropdown li.optgroup ~ li.optgroup-option {\n  padding-left: 1rem;\n}\n\n/* File Input\r\n   ========================================================================== */\n.file-field {\n  position: relative;\n}\n\n.file-field .file-path-wrapper {\n  overflow: hidden;\n  padding-left: 10px;\n}\n\n.file-field input.file-path {\n  width: 100%;\n}\n\n.file-field .btn, .file-field .btn-large, .file-field .btn-small {\n  float: left;\n  height: 3rem;\n  line-height: 3rem;\n}\n\n.file-field span {\n  cursor: pointer;\n}\n\n.file-field input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.file-field input[type=file]::-webkit-file-upload-button {\n  display: none;\n}\n\n/* Range\n   ========================================================================== */\n.range-field {\n  position: relative;\n}\n\ninput[type=range],\ninput[type=range] + .thumb {\n  cursor: pointer;\n}\n\ninput[type=range] {\n  position: relative;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  width: 100%;\n  margin: 15px 0;\n  padding: 0;\n}\n\ninput[type=range]:focus {\n  outline: none;\n}\n\ninput[type=range] + .thumb {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  border: none;\n  height: 0;\n  width: 0;\n  border-radius: 50%;\n  background-color: #26a69a;\n  margin-left: 7px;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\ninput[type=range] + .thumb .value {\n  display: block;\n  width: 30px;\n  text-align: center;\n  color: #26a69a;\n  font-size: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\ninput[type=range] + .thumb.active {\n  border-radius: 50% 50% 50% 0;\n}\n\ninput[type=range] + .thumb.active .value {\n  color: #fff;\n  margin-left: -1px;\n  margin-top: 8px;\n  font-size: 10px;\n}\n\ninput[type=range] {\n  -webkit-appearance: none;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n  height: 3px;\n  background: #c2c0c2;\n  border: none;\n}\n\ninput[type=range]::-webkit-slider-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a;\n  -webkit-transition: -webkit-box-shadow .3s;\n  transition: -webkit-box-shadow .3s;\n  transition: box-shadow .3s;\n  transition: box-shadow .3s, -webkit-box-shadow .3s;\n  -webkit-appearance: none;\n  background-color: #26a69a;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  margin: -5px 0 0 0;\n}\n\n.keyboard-focused input[type=range]:focus:not(.active)::-webkit-slider-thumb {\n  -webkit-box-shadow: 0 0 0 10px rgba(38, 166, 154, 0.26);\n          box-shadow: 0 0 0 10px rgba(38, 166, 154, 0.26);\n}\n\ninput[type=range] {\n  /* fix for FF unable to apply focus style bug  */\n  border: 1px solid white;\n  /*required for proper track sizing in FF*/\n}\n\ninput[type=range]::-moz-range-track {\n  height: 3px;\n  background: #c2c0c2;\n  border: none;\n}\n\ninput[type=range]::-moz-focus-inner {\n  border: 0;\n}\n\ninput[type=range]::-moz-range-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a;\n  -webkit-transition: -webkit-box-shadow .3s;\n  transition: -webkit-box-shadow .3s;\n  transition: box-shadow .3s;\n  transition: box-shadow .3s, -webkit-box-shadow .3s;\n  margin-top: -5px;\n}\n\ninput[type=range]:-moz-focusring {\n  outline: 1px solid #fff;\n  outline-offset: -1px;\n}\n\n.keyboard-focused input[type=range]:focus:not(.active)::-moz-range-thumb {\n  box-shadow: 0 0 0 10px rgba(38, 166, 154, 0.26);\n}\n\ninput[type=range]::-ms-track {\n  height: 3px;\n  background: transparent;\n  border-color: transparent;\n  border-width: 6px 0;\n  /*remove default tick marks*/\n  color: transparent;\n}\n\ninput[type=range]::-ms-fill-lower {\n  background: #777;\n}\n\ninput[type=range]::-ms-fill-upper {\n  background: #ddd;\n}\n\ninput[type=range]::-ms-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a;\n  -webkit-transition: -webkit-box-shadow .3s;\n  transition: -webkit-box-shadow .3s;\n  transition: box-shadow .3s;\n  transition: box-shadow .3s, -webkit-box-shadow .3s;\n}\n\n.keyboard-focused input[type=range]:focus:not(.active)::-ms-thumb {\n  box-shadow: 0 0 0 10px rgba(38, 166, 154, 0.26);\n}\n\n/***************\n    Nav List\n***************/\n.table-of-contents.fixed {\n  position: fixed;\n}\n\n.table-of-contents li {\n  padding: 2px 0;\n}\n\n.table-of-contents a {\n  display: inline-block;\n  font-weight: 300;\n  color: #757575;\n  padding-left: 16px;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  letter-spacing: .4;\n  display: inline-block;\n}\n\n.table-of-contents a:hover {\n  color: #a8a8a8;\n  padding-left: 15px;\n  border-left: 1px solid #ee6e73;\n}\n\n.table-of-contents a.active {\n  font-weight: 500;\n  padding-left: 14px;\n  border-left: 2px solid #ee6e73;\n}\n\n.sidenav {\n  position: fixed;\n  width: 300px;\n  left: 0;\n  top: 0;\n  margin: 0;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  height: 100%;\n  height: calc(100% + 60px);\n  height: -moz-calc(100%);\n  padding-bottom: 60px;\n  background-color: #fff;\n  z-index: 999;\n  overflow-y: auto;\n  will-change: transform;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: translateX(-105%);\n          transform: translateX(-105%);\n}\n\n.sidenav.right-aligned {\n  right: 0;\n  -webkit-transform: translateX(105%);\n          transform: translateX(105%);\n  left: auto;\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n\n.sidenav .collapsible {\n  margin: 0;\n}\n\n.sidenav li {\n  float: none;\n  line-height: 48px;\n}\n\n.sidenav li.active {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.sidenav li > a {\n  color: rgba(0, 0, 0, 0.87);\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  height: 48px;\n  line-height: 48px;\n  padding: 0 32px;\n}\n\n.sidenav li > a:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.sidenav li > a.btn, .sidenav li > a.btn-large, .sidenav li > a.btn-small, .sidenav li > a.btn-large, .sidenav li > a.btn-flat, .sidenav li > a.btn-floating {\n  margin: 10px 15px;\n}\n\n.sidenav li > a.btn, .sidenav li > a.btn-large, .sidenav li > a.btn-small, .sidenav li > a.btn-large, .sidenav li > a.btn-floating {\n  color: #fff;\n}\n\n.sidenav li > a.btn-flat {\n  color: #343434;\n}\n\n.sidenav li > a.btn:hover, .sidenav li > a.btn-large:hover, .sidenav li > a.btn-small:hover, .sidenav li > a.btn-large:hover {\n  background-color: #2bbbad;\n}\n\n.sidenav li > a.btn-floating:hover {\n  background-color: #26a69a;\n}\n\n.sidenav li > a > i,\n.sidenav li > a > [class^=\"mdi-\"], .sidenav li > a li > a > [class*=\"mdi-\"],\n.sidenav li > a > i.material-icons {\n  float: left;\n  height: 48px;\n  line-height: 48px;\n  margin: 0 32px 0 0;\n  width: 24px;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.sidenav .divider {\n  margin: 8px 0 0 0;\n}\n\n.sidenav .subheader {\n  cursor: initial;\n  pointer-events: none;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 48px;\n}\n\n.sidenav .subheader:hover {\n  background-color: transparent;\n}\n\n.sidenav .user-view {\n  position: relative;\n  padding: 32px 32px 0;\n  margin-bottom: 8px;\n}\n\n.sidenav .user-view > a {\n  height: auto;\n  padding: 0;\n}\n\n.sidenav .user-view > a:hover {\n  background-color: transparent;\n}\n\n.sidenav .user-view .background {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.sidenav .user-view .circle, .sidenav .user-view .name, .sidenav .user-view .email {\n  display: block;\n}\n\n.sidenav .user-view .circle {\n  height: 64px;\n  width: 64px;\n}\n\n.sidenav .user-view .name,\n.sidenav .user-view .email {\n  font-size: 14px;\n  line-height: 24px;\n}\n\n.sidenav .user-view .name {\n  margin-top: 16px;\n  font-weight: 500;\n}\n\n.sidenav .user-view .email {\n  padding-bottom: 16px;\n  font-weight: 400;\n}\n\n.drag-target {\n  height: 100%;\n  width: 10px;\n  position: fixed;\n  top: 0;\n  z-index: 998;\n}\n\n.drag-target.right-aligned {\n  right: 0;\n}\n\n.sidenav.sidenav-fixed {\n  left: 0;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  position: fixed;\n}\n\n.sidenav.sidenav-fixed.right-aligned {\n  right: 0;\n  left: auto;\n}\n\n@media only screen and (max-width: 992px) {\n  .sidenav.sidenav-fixed {\n    -webkit-transform: translateX(-105%);\n            transform: translateX(-105%);\n  }\n  .sidenav.sidenav-fixed.right-aligned {\n    -webkit-transform: translateX(105%);\n            transform: translateX(105%);\n  }\n  .sidenav > a {\n    padding: 0 16px;\n  }\n  .sidenav .user-view {\n    padding: 16px 16px 0;\n  }\n}\n\n.sidenav .collapsible-body > ul:not(.collapsible) > li.active,\n.sidenav.sidenav-fixed .collapsible-body > ul:not(.collapsible) > li.active {\n  background-color: #ee6e73;\n}\n\n.sidenav .collapsible-body > ul:not(.collapsible) > li.active a,\n.sidenav.sidenav-fixed .collapsible-body > ul:not(.collapsible) > li.active a {\n  color: #fff;\n}\n\n.sidenav .collapsible-body {\n  padding: 0;\n}\n\n.sidenav-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 0;\n  height: 120vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 997;\n  display: none;\n}\n\n/*\r\n    @license\r\n    Copyright (c) 2014 The Polymer Project Authors. All rights reserved.\r\n    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt\r\n    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt\r\n    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt\r\n    Code distributed by Google as part of the polymer project is also\r\n    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt\r\n */\n/**************************/\n/* STYLES FOR THE SPINNER */\n/**************************/\n/*\r\n * Constants:\r\n *      STROKEWIDTH = 3px\r\n *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)\r\n *      ARCTIME     = 1333ms (time it takes to expand and contract arc)\r\n *      ARCSTARTROT = 216 degrees (how much the start location of the arc\r\n *                                should rotate each time, 216 gives us a\r\n *                                5 pointed star shape (it's 360/5 * 3).\r\n *                                For a 7 pointed star, we might do\r\n *                                360/7 * 3 = 154.286)\r\n *      CONTAINERWIDTH = 28px\r\n *      SHRINK_TIME = 400ms\r\n */\n.preloader-wrapper {\n  display: inline-block;\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n\n.preloader-wrapper.small {\n  width: 36px;\n  height: 36px;\n}\n\n.preloader-wrapper.big {\n  width: 64px;\n  height: 64px;\n}\n\n.preloader-wrapper.active {\n  /* duration: 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */\n  -webkit-animation: container-rotate 1568ms linear infinite;\n  animation: container-rotate 1568ms linear infinite;\n}\n\n@-webkit-keyframes container-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes container-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  border-color: #26a69a;\n}\n\n.spinner-blue,\n.spinner-blue-only {\n  border-color: #4285f4;\n}\n\n.spinner-red,\n.spinner-red-only {\n  border-color: #db4437;\n}\n\n.spinner-yellow,\n.spinner-yellow-only {\n  border-color: #f4b400;\n}\n\n.spinner-green,\n.spinner-green-only {\n  border-color: #0f9d58;\n}\n\n/**\r\n * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):\r\n *\r\n * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't\r\n * guarantee that the animation will start _exactly_ after that value. So we avoid using\r\n * animation-delay and instead set custom keyframes for each color (as redundant as it\r\n * seems).\r\n *\r\n * We write out each animation in full (instead of separating animation-name,\r\n * animation-duration, etc.) because under the polyfill, Safari does not recognize those\r\n * specific properties properly, treats them as -webkit-animation, and overrides the\r\n * other animation rules. See https://github.com/Polymer/platform/issues/53.\r\n */\n.active .spinner-layer.spinner-blue {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .spinner-layer.spinner-red {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .spinner-layer.spinner-yellow {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .spinner-layer.spinner-green {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .spinner-layer,\n.active .spinner-layer.spinner-blue-only,\n.active .spinner-layer.spinner-red-only,\n.active .spinner-layer.spinner-yellow-only,\n.active .spinner-layer.spinner-green-only {\n  /* durations: 4 * ARCTIME */\n  opacity: 1;\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n@-webkit-keyframes fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n  }\n  /* 0.5 * ARCSIZE */\n  25% {\n    -webkit-transform: rotate(270deg);\n  }\n  /* 1   * ARCSIZE */\n  37.5% {\n    -webkit-transform: rotate(405deg);\n  }\n  /* 1.5 * ARCSIZE */\n  50% {\n    -webkit-transform: rotate(540deg);\n  }\n  /* 2   * ARCSIZE */\n  62.5% {\n    -webkit-transform: rotate(675deg);\n  }\n  /* 2.5 * ARCSIZE */\n  75% {\n    -webkit-transform: rotate(810deg);\n  }\n  /* 3   * ARCSIZE */\n  87.5% {\n    -webkit-transform: rotate(945deg);\n  }\n  /* 3.5 * ARCSIZE */\n  to {\n    -webkit-transform: rotate(1080deg);\n  }\n  /* 4   * ARCSIZE */\n}\n\n@keyframes fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n  }\n  /* 0.5 * ARCSIZE */\n  25% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n  }\n  /* 1   * ARCSIZE */\n  37.5% {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n  /* 1.5 * ARCSIZE */\n  50% {\n    -webkit-transform: rotate(540deg);\n            transform: rotate(540deg);\n  }\n  /* 2   * ARCSIZE */\n  62.5% {\n    -webkit-transform: rotate(675deg);\n            transform: rotate(675deg);\n  }\n  /* 2.5 * ARCSIZE */\n  75% {\n    -webkit-transform: rotate(810deg);\n            transform: rotate(810deg);\n  }\n  /* 3   * ARCSIZE */\n  87.5% {\n    -webkit-transform: rotate(945deg);\n            transform: rotate(945deg);\n  }\n  /* 3.5 * ARCSIZE */\n  to {\n    -webkit-transform: rotate(1080deg);\n            transform: rotate(1080deg);\n  }\n  /* 4   * ARCSIZE */\n}\n\n@-webkit-keyframes blue-fade-in-out {\n  from {\n    opacity: 1;\n  }\n  25% {\n    opacity: 1;\n  }\n  26% {\n    opacity: 0;\n  }\n  89% {\n    opacity: 0;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes blue-fade-in-out {\n  from {\n    opacity: 1;\n  }\n  25% {\n    opacity: 1;\n  }\n  26% {\n    opacity: 0;\n  }\n  89% {\n    opacity: 0;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes red-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  15% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  51% {\n    opacity: 0;\n  }\n}\n\n@keyframes red-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  15% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  51% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes yellow-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  76% {\n    opacity: 0;\n  }\n}\n\n@keyframes yellow-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  76% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes green-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  65% {\n    opacity: 0;\n  }\n  75% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes green-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  65% {\n    opacity: 0;\n  }\n  75% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n/**\r\n * Patch the gap that appear between the two adjacent div.circle-clipper while the\r\n * spinner is rotating (appears on Chrome 38, Safari 7.1, and IE 11).\r\n */\n.gap-patch {\n  position: absolute;\n  top: 0;\n  left: 45%;\n  width: 10%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit;\n}\n\n.gap-patch .circle {\n  width: 1000%;\n  left: -450%;\n}\n\n.circle-clipper {\n  display: inline-block;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit;\n}\n\n.circle-clipper .circle {\n  width: 200%;\n  height: 100%;\n  border-width: 3px;\n  /* STROKEWIDTH */\n  border-style: solid;\n  border-color: inherit;\n  border-bottom-color: transparent !important;\n  border-radius: 50%;\n  -webkit-animation: none;\n  animation: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.circle-clipper.left .circle {\n  left: 0;\n  border-right-color: transparent !important;\n  -webkit-transform: rotate(129deg);\n  transform: rotate(129deg);\n}\n\n.circle-clipper.right .circle {\n  left: -100%;\n  border-left-color: transparent !important;\n  -webkit-transform: rotate(-129deg);\n  transform: rotate(-129deg);\n}\n\n.active .circle-clipper.left .circle {\n  /* duration: ARCTIME */\n  -webkit-animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .circle-clipper.right .circle {\n  /* duration: ARCTIME */\n  -webkit-animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n@-webkit-keyframes left-spin {\n  from {\n    -webkit-transform: rotate(130deg);\n  }\n  50% {\n    -webkit-transform: rotate(-5deg);\n  }\n  to {\n    -webkit-transform: rotate(130deg);\n  }\n}\n\n@keyframes left-spin {\n  from {\n    -webkit-transform: rotate(130deg);\n            transform: rotate(130deg);\n  }\n  50% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n  to {\n    -webkit-transform: rotate(130deg);\n            transform: rotate(130deg);\n  }\n}\n\n@-webkit-keyframes right-spin {\n  from {\n    -webkit-transform: rotate(-130deg);\n  }\n  50% {\n    -webkit-transform: rotate(5deg);\n  }\n  to {\n    -webkit-transform: rotate(-130deg);\n  }\n}\n\n@keyframes right-spin {\n  from {\n    -webkit-transform: rotate(-130deg);\n            transform: rotate(-130deg);\n  }\n  50% {\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n  to {\n    -webkit-transform: rotate(-130deg);\n            transform: rotate(-130deg);\n  }\n}\n\n#spinnerContainer.cooldown {\n  /* duration: SHRINK_TIME */\n  -webkit-animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);\n  animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n@-webkit-keyframes fade-out {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fade-out {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.slider {\n  position: relative;\n  height: 400px;\n  width: 100%;\n}\n\n.slider.fullscreen {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.slider.fullscreen ul.slides {\n  height: 100%;\n}\n\n.slider.fullscreen ul.indicators {\n  z-index: 2;\n  bottom: 30px;\n}\n\n.slider .slides {\n  background-color: #9e9e9e;\n  margin: 0;\n  height: 400px;\n}\n\n.slider .slides li {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: inherit;\n  overflow: hidden;\n}\n\n.slider .slides li img {\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n}\n\n.slider .slides li .caption {\n  color: #fff;\n  position: absolute;\n  top: 15%;\n  left: 15%;\n  width: 70%;\n  opacity: 0;\n}\n\n.slider .slides li .caption p {\n  color: #e0e0e0;\n}\n\n.slider .slides li.active {\n  z-index: 2;\n}\n\n.slider .indicators {\n  position: absolute;\n  text-align: center;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n}\n\n.slider .indicators .indicator-item {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 16px;\n  width: 16px;\n  margin: 0 12px;\n  background-color: #e0e0e0;\n  -webkit-transition: background-color .3s;\n  transition: background-color .3s;\n  border-radius: 50%;\n}\n\n.slider .indicators .indicator-item.active {\n  background-color: #4CAF50;\n}\n\n.carousel {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 400px;\n  -webkit-perspective: 500px;\n          perspective: 500px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n          transform-origin: 0% 50%;\n}\n\n.carousel.carousel-slider {\n  top: 0;\n  left: 0;\n}\n\n.carousel.carousel-slider .carousel-fixed-item {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 20px;\n  z-index: 1;\n}\n\n.carousel.carousel-slider .carousel-fixed-item.with-indicators {\n  bottom: 68px;\n}\n\n.carousel.carousel-slider .carousel-item {\n  width: 100%;\n  height: 100%;\n  min-height: 400px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.carousel.carousel-slider .carousel-item h2 {\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 32px;\n}\n\n.carousel.carousel-slider .carousel-item p {\n  font-size: 15px;\n}\n\n.carousel .carousel-item {\n  visibility: hidden;\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.carousel .carousel-item > img {\n  width: 100%;\n}\n\n.carousel .indicators {\n  position: absolute;\n  text-align: center;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n}\n\n.carousel .indicators .indicator-item {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 8px;\n  width: 8px;\n  margin: 24px 4px;\n  background-color: rgba(255, 255, 255, 0.5);\n  -webkit-transition: background-color .3s;\n  transition: background-color .3s;\n  border-radius: 50%;\n}\n\n.carousel .indicators .indicator-item.active {\n  background-color: #fff;\n}\n\n.carousel.scrolling .carousel-item .materialboxed,\n.carousel .carousel-item:not(.active) .materialboxed {\n  pointer-events: none;\n}\n\n.tap-target-wrapper {\n  width: 800px;\n  height: 800px;\n  position: fixed;\n  z-index: 1000;\n  visibility: hidden;\n  -webkit-transition: visibility 0s .3s;\n  transition: visibility 0s .3s;\n}\n\n.tap-target-wrapper.open {\n  visibility: visible;\n  -webkit-transition: visibility 0s;\n  transition: visibility 0s;\n}\n\n.tap-target-wrapper.open .tap-target {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: .95;\n  -webkit-transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n  transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n}\n\n.tap-target-wrapper.open .tap-target-wave::before {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.tap-target-wrapper.open .tap-target-wave::after {\n  visibility: visible;\n  -webkit-animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\n          animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\n  -webkit-transition: opacity .3s,\r visibility 0s 1s,\r -webkit-transform .3s;\n  transition: opacity .3s,\r visibility 0s 1s,\r -webkit-transform .3s;\n  transition: opacity .3s,\r transform .3s,\r visibility 0s 1s;\n  transition: opacity .3s,\r transform .3s,\r visibility 0s 1s,\r -webkit-transform .3s;\n}\n\n.tap-target {\n  position: absolute;\n  font-size: 1rem;\n  border-radius: 50%;\n  background-color: #ee6e73;\n  -webkit-box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.14), 0 10px 50px 0 rgba(0, 0, 0, 0.12), 0 30px 10px -20px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.14), 0 10px 50px 0 rgba(0, 0, 0, 0.12), 0 30px 10px -20px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n  transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n}\n\n.tap-target-content {\n  position: relative;\n  display: table-cell;\n}\n\n.tap-target-wave {\n  position: absolute;\n  border-radius: 50%;\n  z-index: 10001;\n}\n\n.tap-target-wave::before, .tap-target-wave::after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #ffffff;\n}\n\n.tap-target-wave::before {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n}\n\n.tap-target-wave::after {\n  visibility: hidden;\n  -webkit-transition: opacity .3s,\r visibility 0s,\r -webkit-transform .3s;\n  transition: opacity .3s,\r visibility 0s,\r -webkit-transform .3s;\n  transition: opacity .3s,\r transform .3s,\r visibility 0s;\n  transition: opacity .3s,\r transform .3s,\r visibility 0s,\r -webkit-transform .3s;\n  z-index: -1;\n}\n\n.tap-target-origin {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 10002;\n  position: absolute !important;\n}\n\n.tap-target-origin:not(.btn):not(.btn-large):not(.btn-small), .tap-target-origin:not(.btn):not(.btn-large):not(.btn-small):hover {\n  background: none;\n}\n\n@media only screen and (max-width: 600px) {\n  .tap-target, .tap-target-wrapper {\n    width: 600px;\n    height: 600px;\n  }\n}\n\n.pulse {\n  overflow: visible;\n  position: relative;\n}\n\n.pulse::before {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: inherit;\n  border-radius: inherit;\n  -webkit-transition: opacity .3s, -webkit-transform .3s;\n  transition: opacity .3s, -webkit-transform .3s;\n  transition: opacity .3s, transform .3s;\n  transition: opacity .3s, transform .3s, -webkit-transform .3s;\n  -webkit-animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\n          animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\n  z-index: -1;\n}\n\n@-webkit-keyframes pulse-animation {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n  }\n}\n\n@keyframes pulse-animation {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n  }\n}\n\n/* Modal */\n.datepicker-modal {\n  max-width: 325px;\n  min-width: 300px;\n  max-height: none;\n}\n\n.datepicker-container.modal-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 0;\n}\n\n.datepicker-controls {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 280px;\n  margin: 0 auto;\n}\n\n.datepicker-controls .selects-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.datepicker-controls .select-wrapper input {\n  border-bottom: none;\n  text-align: center;\n  margin: 0;\n}\n\n.datepicker-controls .select-wrapper input:focus {\n  border-bottom: none;\n}\n\n.datepicker-controls .select-wrapper .caret {\n  display: none;\n}\n\n.datepicker-controls .select-year input {\n  width: 50px;\n}\n\n.datepicker-controls .select-month input {\n  width: 70px;\n}\n\n.month-prev, .month-next {\n  margin-top: 4px;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n}\n\n/* Date Display */\n.datepicker-date-display {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 auto;\n      -ms-flex: 1 auto;\n          flex: 1 auto;\n  background-color: #26a69a;\n  color: #fff;\n  padding: 20px 22px;\n  font-weight: 500;\n}\n\n.datepicker-date-display .year-text {\n  display: block;\n  font-size: 1.5rem;\n  line-height: 25px;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.datepicker-date-display .date-text {\n  display: block;\n  font-size: 2.8rem;\n  line-height: 47px;\n  font-weight: 500;\n}\n\n/* Calendar */\n.datepicker-calendar-container {\n  -webkit-box-flex: 2.5;\n  -webkit-flex: 2.5 auto;\n      -ms-flex: 2.5 auto;\n          flex: 2.5 auto;\n}\n\n.datepicker-table {\n  width: 280px;\n  font-size: 1rem;\n  margin: 0 auto;\n}\n\n.datepicker-table thead {\n  border-bottom: none;\n}\n\n.datepicker-table th {\n  padding: 10px 5px;\n  text-align: center;\n}\n\n.datepicker-table tr {\n  border: none;\n}\n\n.datepicker-table abbr {\n  text-decoration: none;\n  color: #999;\n}\n\n.datepicker-table td {\n  border-radius: 50%;\n  padding: 0;\n}\n\n.datepicker-table td.is-today {\n  color: #26a69a;\n}\n\n.datepicker-table td.is-selected {\n  background-color: #26a69a;\n  color: #fff;\n}\n\n.datepicker-table td.is-outside-current-month, .datepicker-table td.is-disabled {\n  color: rgba(0, 0, 0, 0.3);\n  pointer-events: none;\n}\n\n.datepicker-day-button {\n  background-color: transparent;\n  border: none;\n  line-height: 38px;\n  display: block;\n  width: 100%;\n  border-radius: 50%;\n  padding: 0 5px;\n  cursor: pointer;\n  color: inherit;\n}\n\n.datepicker-day-button:focus {\n  background-color: rgba(43, 161, 150, 0.25);\n}\n\n/* Footer */\n.datepicker-footer {\n  width: 280px;\n  margin: 0 auto;\n  padding-bottom: 5px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.datepicker-cancel,\n.datepicker-clear,\n.datepicker-today,\n.datepicker-done {\n  color: #26a69a;\n  padding: 0 1rem;\n}\n\n.datepicker-clear {\n  color: #F44336;\n}\n\n/* Media Queries */\n@media only screen and (min-width: 601px) {\n  .datepicker-modal {\n    max-width: 625px;\n  }\n  .datepicker-container.modal-content {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .datepicker-date-display {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 270px;\n        -ms-flex: 0 1 270px;\n            flex: 0 1 270px;\n  }\n  .datepicker-controls,\n  .datepicker-table,\n  .datepicker-footer {\n    width: 320px;\n  }\n  .datepicker-day-button {\n    line-height: 44px;\n  }\n}\n\n/* Timepicker Containers */\n.timepicker-modal {\n  max-width: 325px;\n  max-height: none;\n}\n\n.timepicker-container.modal-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 0;\n}\n\n.text-primary {\n  color: white;\n}\n\n/* Clock Digital Display */\n.timepicker-digital-display {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 auto;\n      -ms-flex: 1 auto;\n          flex: 1 auto;\n  background-color: #26a69a;\n  padding: 10px;\n  font-weight: 300;\n}\n\n.timepicker-text-container {\n  font-size: 4rem;\n  font-weight: bold;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 400;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.timepicker-span-hours,\n.timepicker-span-minutes,\n.timepicker-span-am-pm div {\n  cursor: pointer;\n}\n\n.timepicker-span-hours {\n  margin-right: 3px;\n}\n\n.timepicker-span-minutes {\n  margin-left: 3px;\n}\n\n.timepicker-display-am-pm {\n  font-size: 1.3rem;\n  position: absolute;\n  right: 1rem;\n  bottom: 1rem;\n  font-weight: 400;\n}\n\n/* Analog Clock Display */\n.timepicker-analog-display {\n  -webkit-box-flex: 2.5;\n  -webkit-flex: 2.5 auto;\n      -ms-flex: 2.5 auto;\n          flex: 2.5 auto;\n}\n\n.timepicker-plate {\n  background-color: #eee;\n  border-radius: 50%;\n  width: 270px;\n  height: 270px;\n  overflow: visible;\n  position: relative;\n  margin: auto;\n  margin-top: 25px;\n  margin-bottom: 5px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.timepicker-canvas,\n.timepicker-dial {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.timepicker-minutes {\n  visibility: hidden;\n}\n\n.timepicker-tick {\n  border-radius: 50%;\n  color: rgba(0, 0, 0, 0.87);\n  line-height: 40px;\n  text-align: center;\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  cursor: pointer;\n  font-size: 15px;\n}\n\n.timepicker-tick.active,\n.timepicker-tick:hover {\n  background-color: rgba(38, 166, 154, 0.25);\n}\n\n.timepicker-dial {\n  -webkit-transition: opacity 350ms, -webkit-transform 350ms;\n  transition: opacity 350ms, -webkit-transform 350ms;\n  transition: transform 350ms, opacity 350ms;\n  transition: transform 350ms, opacity 350ms, -webkit-transform 350ms;\n}\n\n.timepicker-dial-out {\n  opacity: 0;\n}\n\n.timepicker-dial-out.timepicker-hours {\n  -webkit-transform: scale(1.1, 1.1);\n          transform: scale(1.1, 1.1);\n}\n\n.timepicker-dial-out.timepicker-minutes {\n  -webkit-transform: scale(0.8, 0.8);\n          transform: scale(0.8, 0.8);\n}\n\n.timepicker-canvas {\n  -webkit-transition: opacity 175ms;\n  transition: opacity 175ms;\n}\n\n.timepicker-canvas line {\n  stroke: #26a69a;\n  stroke-width: 4;\n  stroke-linecap: round;\n}\n\n.timepicker-canvas-out {\n  opacity: 0.25;\n}\n\n.timepicker-canvas-bearing {\n  stroke: none;\n  fill: #26a69a;\n}\n\n.timepicker-canvas-bg {\n  stroke: none;\n  fill: #26a69a;\n}\n\n/* Footer */\n.timepicker-footer {\n  margin: 0 auto;\n  padding: 5px 1rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.timepicker-clear {\n  color: #F44336;\n}\n\n.timepicker-close {\n  color: #26a69a;\n}\n\n.timepicker-clear,\n.timepicker-close {\n  padding: 0 20px;\n}\n\n/* Media Queries */\n@media only screen and (min-width: 601px) {\n  .timepicker-modal {\n    max-width: 600px;\n  }\n  .timepicker-container.modal-content {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .timepicker-text-container {\n    top: 32%;\n  }\n  .timepicker-display-am-pm {\n    position: relative;\n    right: auto;\n    bottom: auto;\n    text-align: center;\n    margin-top: 1.2rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/idb/build/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/idb/build/esm/index.js ***!
  \*********************************************/
/*! exports provided: unwrap, wrap, deleteDB, openDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDB", function() { return deleteDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openDB", function() { return openDB; });
/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-idb-value.js */ "./node_modules/idb/build/esm/wrap-idb-value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unwrap", function() { return _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__["w"]; });

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */

function openDB(name, version) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      blocked = _ref.blocked,
      upgrade = _ref.upgrade,
      blocking = _ref.blocking,
      terminated = _ref.terminated;

  var request = indexedDB.open(name, version);
  var openPromise = Object(_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__["w"])(request);

  if (upgrade) {
    request.addEventListener('upgradeneeded', function (event) {
      upgrade(Object(_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__["w"])(request.result), event.oldVersion, event.newVersion, Object(_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__["w"])(request.transaction));
    });
  }

  if (blocked) request.addEventListener('blocked', function () {
    return blocked();
  });
  openPromise.then(function (db) {
    if (terminated) db.addEventListener('close', function () {
      return terminated();
    });
    if (blocking) db.addEventListener('versionchange', function () {
      return blocking();
    });
  })["catch"](function () {});
  return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */


function deleteDB(name) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      blocked = _ref2.blocked;

  var request = indexedDB.deleteDatabase(name);
  if (blocked) request.addEventListener('blocked', function () {
    return blocked();
  });
  return Object(_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__["w"])(request).then(function () {
    return undefined;
  });
}

var readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
var writeMethods = ['put', 'add', 'delete', 'clear'];
var cachedMethods = new Map();

function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === 'string')) {
    return;
  }

  if (cachedMethods.get(prop)) return cachedMethods.get(prop);
  var targetFuncName = prop.replace(/FromIndex$/, '');
  var useIndex = prop !== targetFuncName;
  var isWrite = writeMethods.includes(targetFuncName);

  if ( // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
  !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
    return;
  }

  var method = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(storeName) {
      var _target;

      var tx,
          target,
          _len,
          args,
          _key,
          returnVal,
          _args = arguments;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
              tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
              target = tx.store;

              for (_len = _args.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = _args[_key];
              }

              if (useIndex) target = target.index(args.shift());
              _context.next = 6;
              return (_target = target)[targetFuncName].apply(_target, args);

            case 6:
              returnVal = _context.sent;

              if (!isWrite) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return tx.done;

            case 10:
              return _context.abrupt("return", returnVal);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function method(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  cachedMethods.set(prop, method);
  return method;
}

Object(_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__["r"])(function (oldTraps) {
  return _objectSpread(_objectSpread({}, oldTraps), {}, {
    get: function get(target, prop, receiver) {
      return getMethod(target, prop) || oldTraps.get(target, prop, receiver);
    },
    has: function has(target, prop) {
      return !!getMethod(target, prop) || oldTraps.has(target, prop);
    }
  });
});


/***/ }),

/***/ "./node_modules/idb/build/esm/wrap-idb-value.js":
/*!******************************************************!*\
  !*** ./node_modules/idb/build/esm/wrap-idb-value.js ***!
  \******************************************************/
/*! exports provided: a, i, r, u, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reverseTransformCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return instanceOfAny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return replaceTraps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return unwrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return wrap; });
var instanceOfAny = function instanceOfAny(object, constructors) {
  return constructors.some(function (c) {
    return object instanceof c;
  });
};

var idbProxyableTypes;
var cursorAdvanceMethods; // This is a function to prevent it throwing up in node environments.

function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
} // This is a function to prevent it throwing up in node environments.


function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [IDBCursor.prototype.advance, IDBCursor.prototype["continue"], IDBCursor.prototype.continuePrimaryKey]);
}

var cursorRequestMap = new WeakMap();
var transactionDoneMap = new WeakMap();
var transactionStoreNamesMap = new WeakMap();
var transformCache = new WeakMap();
var reverseTransformCache = new WeakMap();

function promisifyRequest(request) {
  var promise = new Promise(function (resolve, reject) {
    var unlisten = function unlisten() {
      request.removeEventListener('success', success);
      request.removeEventListener('error', error);
    };

    var success = function success() {
      resolve(wrap(request.result));
      unlisten();
    };

    var error = function error() {
      reject(request.error);
      unlisten();
    };

    request.addEventListener('success', success);
    request.addEventListener('error', error);
  });
  promise.then(function (value) {
    // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
    // (see wrapFunction).
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    } // Catching to avoid "Uncaught Promise exceptions"

  })["catch"](function () {}); // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
  // is because we create many promises from a single IDBRequest.

  reverseTransformCache.set(promise, request);
  return promise;
}

function cacheDonePromiseForTransaction(tx) {
  // Early bail if we've already created a done promise for this transaction.
  if (transactionDoneMap.has(tx)) return;
  var done = new Promise(function (resolve, reject) {
    var unlisten = function unlisten() {
      tx.removeEventListener('complete', complete);
      tx.removeEventListener('error', error);
      tx.removeEventListener('abort', error);
    };

    var complete = function complete() {
      resolve();
      unlisten();
    };

    var error = function error() {
      reject(tx.error || new DOMException('AbortError', 'AbortError'));
      unlisten();
    };

    tx.addEventListener('complete', complete);
    tx.addEventListener('error', error);
    tx.addEventListener('abort', error);
  }); // Cache it for later retrieval.

  transactionDoneMap.set(tx, done);
}

var idbProxyTraps = {
  get: function get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      // Special handling for transaction.done.
      if (prop === 'done') return transactionDoneMap.get(target); // Polyfill for objectStoreNames because of Edge.

      if (prop === 'objectStoreNames') {
        return target.objectStoreNames || transactionStoreNamesMap.get(target);
      } // Make tx.store return the only store in the transaction, or undefined if there are many.


      if (prop === 'store') {
        return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    } // Else transform whatever we get back.


    return wrap(target[prop]);
  },
  set: function set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has: function has(target, prop) {
    if (target instanceof IDBTransaction && (prop === 'done' || prop === 'store')) {
      return true;
    }

    return prop in target;
  }
};

function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}

function wrapFunction(func) {
  // Due to expected object equality (which is enforced by the caching in `wrap`), we
  // only create one new func per func.
  // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
  if (func === IDBDatabase.prototype.transaction && !('objectStoreNames' in IDBTransaction.prototype)) {
    return function (storeNames) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var tx = func.call.apply(func, [unwrap(this), storeNames].concat(args));
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap(tx);
    };
  } // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
  // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
  // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
  // with real promises, so each advance methods returns a new promise for the cursor object, or
  // undefined if the end of the cursor has been reached.


  if (getCursorAdvanceMethods().includes(func)) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
      // the original object.
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }

  return function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
    // the original object.
    return wrap(func.apply(unwrap(this), args));
  };
}

function transformCachableValue(value) {
  if (typeof value === 'function') return wrapFunction(value); // This doesn't return, it just creates a 'done' promise for the transaction,
  // which is later returned for transaction.done (see idbObjectHandler).

  if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps); // Return the same value back if we're not going to transform it.

  return value;
}

function wrap(value) {
  // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
  // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
  if (value instanceof IDBRequest) return promisifyRequest(value); // If we've already transformed this value before, reuse the transformed value.
  // This is faster, but it also provides object equality.

  if (transformCache.has(value)) return transformCache.get(value);
  var newValue = transformCachableValue(value); // Not all types are transformed.
  // These may be primitive types, so they can't be WeakMap keys.

  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }

  return newValue;
}

var unwrap = function unwrap(value) {
  return reverseTransformCache.get(value);
};



/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/css/materialize.css":
/*!*********************************!*\
  !*** ./src/css/materialize.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./materialize.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/materialize.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/*! exports provided: getTeams, getAllTeams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTeams", function() { return getTeams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTeams", function() { return getAllTeams; });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ "./src/js/db.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/js/model.js");


var ligaid = 2001;
function getTeams() {
  var urlParams = new URLSearchParams("?" + window.location.hash.split("?")[1]);
  var idParam = urlParams.get("id"); // console.log("?"+window.location.hash.split("?")[1])

  fetch('https://api.football-data.org/v2/teams/' + idParam, {
    headers: {
      'X-Auth-Token': '34bd7bd813d441578a703b522b305500'
    }
  }).then(function (response) {
    if (response.status !== 200) {
      console.log('Error : ' + response.status);
      handleData(500);
      return;
    }

    response.json().then(function (data) {
      handleData(200, data);
    });
  })["catch"](function (error) {
    handleData(500);
  });

  function handleData(status, response) {
    console.log(status);

    if (status === 200) {
      Object(_db__WEBPACK_IMPORTED_MODULE_0__["teamexist"])(idParam).then(function (res) {
        if (res) {
          document.getElementById('button_delete').style.display = "block";
          document.getElementById('button_fav').style.display = "none";
        } else {
          document.getElementById('button_delete').style.display = "none";
          document.getElementById('button_fav').style.display = "block";
        }
      });
      console.log(response);

      if (response.crestUrl == null) {
        document.getElementById('image_team').src = 'https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png';
      } else {
        document.getElementById('image_team').src = response.crestUrl;
      }

      document.getElementById('title_team').textContent = response.name;
      document.getElementById('info_alamat_team').textContent = response.address;
      document.getElementById('info_warna_club').textContent = response.clubColors;
      document.getElementById('info_email_club').textContent = response.email;
      document.getElementById('info_tahun_team').textContent = response.founded;
      document.getElementById('info_telp_club').textContent = response.phone;
      document.getElementById('button_delete').style.display = "none";

      document.getElementById('buttonfav').onclick = function () {
        var data = {
          id: idParam,
          image: document.getElementById('image_team').src,
          name: document.getElementById('title_team').textContent
        }; //ASYNC function ALWAYS RETURN PROMISE???????!@@#!!##*@*&*#@*#*&@#*&@*&

        Object(_db__WEBPACK_IMPORTED_MODULE_0__["teamexist"])(idParam).then(function (res) {
          // console.log(res)
          if (res) {
            alert('Tim sudah ada di favorit tim kamu!');
          } else {
            Object(_db__WEBPACK_IMPORTED_MODULE_0__["save"])(idParam, data).then(function () {
              alert('Tim berhasil ditambahkan ke favorit anda!');
              document.getElementById('button_delete').style.display = "block";
              document.getElementById('button_fav').style.display = "none";
            })["catch"](function () {
              alert('Tim gagal ditambahkan ke favorit anda :(');
            });
          }
        })["catch"](function () {
          alert('Gagal mengambil info tim.');
        });
      };

      document.getElementById('buttondelete').onclick = function () {
        Object(_model__WEBPACK_IMPORTED_MODULE_1__["deleteClub"])(idParam).then(function (res) {
          if (res) {
            alert('Club Berhasil dihapus dari daftar favorit anda');
            document.getElementById('button_delete').style.display = "none";
            document.getElementById('button_fav').style.display = "block";
          } else {
            alert('Club gagal dihapus dari daftar favorit anda');
          }
        });
      };
    } else {
      document.getElementById('info').style.display = "none";
      document.getElementById('buttonfav').style.display = "none";
      document.getElementById('title_team').textContent = 'Maaf gagal memuat informasi team..';
    }
  }
}
function getAllTeams() {
  fetch('https://api.football-data.org/v2/competitions/' + ligaid + '/teams', {
    headers: {
      'X-Auth-Token': '34bd7bd813d441578a703b522b305500'
    }
  }).then(function (response) {
    if (response.status !== 200) {
      console.log('Error : ' + response.status);
      handleData(500);
      return;
    }

    response.json().then(function (data) {
      handleData(200, data);
    });
  })["catch"](function (error) {
    handleData(500);
  });

  function handleData(status, response) {
    console.log(status);

    if (status === 200) {
      var insertRowTeam = function insertRowTeam(item, index) {
        var table = document.getElementById('allclub');
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerText = item.name; // console.log(item.crestUrl)

        if (item.crestUrl == null) {
          cell2.innerHTML = '<a href="#team?id=' + item.id + '"><img src="https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png" class="responsive-img"></a>';
        } else {
          cell2.innerHTML = '<a href="#team?id=' + item.id + '"><img src="' + item.crestUrl + '" class="responsive-img"></a>';
        }
      };

      // $('#image_team').attr('src', response.crestUrl);
      // $('#title_team').text(response.name);
      console.log(response);
      response.teams.forEach(insertRowTeam);
    } else {
      document.getElementById('title_team').textContent = 'Maaf gagal memuat informasi team..';
    }
  }
}

/***/ }),

/***/ "./src/js/db.js":
/*!**********************!*\
  !*** ./src/js/db.js ***!
  \**********************/
/*! exports provided: save, del, getall, teamexist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getall", function() { return getall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamexist", function() { return teamexist; });
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/esm/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_0__["openDB"])('kyro-store', 1, {
  upgrade: function upgrade(db) {
    db.createObjectStore('kyro');
  }
});
function save(_x, _x2) {
  return _save.apply(this, arguments);
}

function _save() {
  _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, item) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dbPromise.then(function (db) {
              var tx = db.transaction('kyro', 'readwrite');
              var store = tx.objectStore('kyro');
              store.add(item, id);
              return tx.complete;
            }).then(function () {
              console.log('berhasil disimpan');
            })["catch"](function (res) {
              console.log('gagal disimpan ' + res);
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _save.apply(this, arguments);
}

function del(_x3) {
  return _del.apply(this, arguments);
}

function _del() {
  _del = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dbPromise.then(function (db) {
              var tx = db.transaction('kyro', 'readwrite');
              tx.objectStore('kyro')["delete"](id);
            }).then(function () {
              console.log('berhasil dihapus');
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _del.apply(this, arguments);
}

function getall() {
  return _getall.apply(this, arguments);
}

function _getall() {
  _getall = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", dbPromise.then(function (db) {
              var tx = db.transaction('kyro', 'readonly');
              var store = tx.objectStore('kyro');
              var data = store.getAll(); //console.log(data)

              return data;
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getall.apply(this, arguments);
}

function teamexist(_x4) {
  return _teamexist.apply(this, arguments);
}

function _teamexist() {
  _teamexist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", dbPromise.then( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(db) {
                var tx, data;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return db.transaction('kyro', 'readonly');

                      case 2:
                        tx = _context4.sent;
                        _context4.next = 5;
                        return tx.objectStore('kyro').get(id);

                      case 5:
                        data = _context4.sent;
                        return _context4.abrupt("return", data == undefined ? false : true);

                      case 7:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x5) {
                return _ref.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _teamexist.apply(this, arguments);
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _materialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./materialize */ "./src/js/materialize.js");
/* harmony import */ var _materialize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_materialize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ "./src/js/pages.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ "./src/js/nav.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_materialize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/materialize.css */ "./src/css/materialize.css");
/* harmony import */ var _css_materialize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_materialize_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ "./src/js/api.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model */ "./src/js/model.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./db */ "./src/js/db.js");





 //babel async error fix :)



 // Load page content

var page = window.location.hash.split('?')[0].substr(1);
if (page == "") page = "home";
Object(_pages__WEBPACK_IMPORTED_MODULE_1__["default"])(page);

if (page == "team") {
  Object(_api__WEBPACK_IMPORTED_MODULE_4__["getTeams"])();
}

if (page == 'favclub') {
  Object(_model__WEBPACK_IMPORTED_MODULE_6__["tampilsemuafav"])();
}

if (page == "allclub") {
  Object(_api__WEBPACK_IMPORTED_MODULE_4__["getAllTeams"])();
}

console.log(page); //agar semua link dapat bekerja

window.onhashchange = function () {
  var page = window.location.hash.split('?')[0].substr(1);
  if (page == "") page = "home";
  Object(_pages__WEBPACK_IMPORTED_MODULE_1__["default"])(page);

  if (page == "team") {
    Object(_api__WEBPACK_IMPORTED_MODULE_4__["getTeams"])();
  }

  if (page == 'favclub') {
    Object(_model__WEBPACK_IMPORTED_MODULE_6__["tampilsemuafav"])();
  }

  if (page == "allclub") {
    Object(_api__WEBPACK_IMPORTED_MODULE_4__["getAllTeams"])();
  }
};

/***/ }),

/***/ "./src/js/materialize.js":
/*!*******************************!*\
  !*** ./src/js/materialize.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Materialize v1.0.0 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/*! cash-dom 1.3.5, https://github.com/kenwheeler/cash @license MIT */


(function (factory) {
  window.cash = factory();
})(function () {
  var doc = document,
      win = window,
      ArrayProto = Array.prototype,
      slice = ArrayProto.slice,
      _filter = ArrayProto.filter,
      push = ArrayProto.push;

  var noop = function noop() {},
      isFunction = function isFunction(item) {
    // @see https://crbug.com/568448
    return _typeof(item) === _typeof(noop) && item.call;
  },
      isString = function isString(item) {
    return _typeof(item) === _typeof("");
  };

  var idMatch = /^#[\w-]*$/,
      classMatch = /^\.[\w-]*$/,
      htmlMatch = /<.+>/,
      singlet = /^\w+$/;

  function _find(selector, context) {
    context = context || doc;
    var elems = classMatch.test(selector) ? context.getElementsByClassName(selector.slice(1)) : singlet.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector);
    return elems;
  }

  var frag;

  function parseHTML(str) {
    if (!frag) {
      frag = doc.implementation.createHTMLDocument(null);
      var base = frag.createElement("base");
      base.href = doc.location.href;
      frag.head.appendChild(base);
    }

    frag.body.innerHTML = str;
    return frag.body.childNodes;
  }

  function onReady(fn) {
    if (doc.readyState !== "loading") {
      fn();
    } else {
      doc.addEventListener("DOMContentLoaded", fn);
    }
  }

  function Init(selector, context) {
    if (!selector) {
      return this;
    } // If already a cash collection, don't do any further processing


    if (selector.cash && selector !== win) {
      return selector;
    }

    var elems = selector,
        i = 0,
        length;

    if (isString(selector)) {
      elems = idMatch.test(selector) ? // If an ID use the faster getElementById check
      doc.getElementById(selector.slice(1)) : htmlMatch.test(selector) ? // If HTML, parse it into real elements
      parseHTML(selector) : // else use `find`
      _find(selector, context); // If function, use as shortcut for DOM ready
    } else if (isFunction(selector)) {
      onReady(selector);
      return this;
    }

    if (!elems) {
      return this;
    } // If a single DOM element is passed in or received via ID, return the single element


    if (elems.nodeType || elems === win) {
      this[0] = elems;
      this.length = 1;
    } else {
      // Treat like an array and loop through each item.
      length = this.length = elems.length;

      for (; i < length; i++) {
        this[i] = elems[i];
      }
    }

    return this;
  }

  function cash(selector, context) {
    return new Init(selector, context);
  }

  var fn = cash.fn = cash.prototype = Init.prototype = {
    // jshint ignore:line
    cash: true,
    length: 0,
    push: push,
    splice: ArrayProto.splice,
    map: ArrayProto.map,
    init: Init
  };
  Object.defineProperty(fn, "constructor", {
    value: cash
  });
  cash.parseHTML = parseHTML;
  cash.noop = noop;
  cash.isFunction = isFunction;
  cash.isString = isString;

  cash.extend = fn.extend = function (target) {
    target = target || {};
    var args = slice.call(arguments),
        length = args.length,
        i = 1;

    if (args.length === 1) {
      target = this;
      i = 0;
    }

    for (; i < length; i++) {
      if (!args[i]) {
        continue;
      }

      for (var key in args[i]) {
        if (args[i].hasOwnProperty(key)) {
          target[key] = args[i][key];
        }
      }
    }

    return target;
  };

  function _each(collection, callback) {
    var l = collection.length,
        i = 0;

    for (; i < l; i++) {
      if (callback.call(collection[i], collection[i], i, collection) === false) {
        break;
      }
    }
  }

  function matches(el, selector) {
    var m = el && (el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector);
    return !!m && m.call(el, selector);
  }

  function getCompareFunction(selector) {
    return (
      /* Use browser's `matches` function if string */
      isString(selector) ? matches :
      /* Match a cash element */
      selector.cash ? function (el) {
        return selector.is(el);
      } :
      /* Direct comparison */
      function (el, selector) {
        return el === selector;
      }
    );
  }

  function unique(collection) {
    return cash(slice.call(collection).filter(function (item, index, self) {
      return self.indexOf(item) === index;
    }));
  }

  cash.extend({
    merge: function merge(first, second) {
      var len = +second.length,
          i = first.length,
          j = 0;

      for (; j < len; i++, j++) {
        first[i] = second[j];
      }

      first.length = i;
      return first;
    },
    each: _each,
    matches: matches,
    unique: unique,
    isArray: Array.isArray,
    isNumeric: function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
  });
  var uid = cash.uid = "_cash" + Date.now();

  function getDataCache(node) {
    return node[uid] = node[uid] || {};
  }

  function setData(node, key, value) {
    return getDataCache(node)[key] = value;
  }

  function getData(node, key) {
    var c = getDataCache(node);

    if (c[key] === undefined) {
      c[key] = node.dataset ? node.dataset[key] : cash(node).attr("data-" + key);
    }

    return c[key];
  }

  function _removeData(node, key) {
    var c = getDataCache(node);

    if (c) {
      delete c[key];
    } else if (node.dataset) {
      delete node.dataset[key];
    } else {
      cash(node).removeAttr("data-" + name);
    }
  }

  fn.extend({
    data: function data(name, value) {
      if (isString(name)) {
        return value === undefined ? getData(this[0], name) : this.each(function (v) {
          return setData(v, name, value);
        });
      }

      for (var key in name) {
        this.data(key, name[key]);
      }

      return this;
    },
    removeData: function removeData(key) {
      return this.each(function (v) {
        return _removeData(v, key);
      });
    }
  });
  var notWhiteMatch = /\S+/g;

  function getClasses(c) {
    return isString(c) && c.match(notWhiteMatch);
  }

  function _hasClass(v, c) {
    return v.classList ? v.classList.contains(c) : new RegExp("(^| )" + c + "( |$)", "gi").test(v.className);
  }

  function _addClass(v, c, spacedName) {
    if (v.classList) {
      v.classList.add(c);
    } else if (spacedName.indexOf(" " + c + " ")) {
      v.className += " " + c;
    }
  }

  function _removeClass(v, c) {
    if (v.classList) {
      v.classList.remove(c);
    } else {
      v.className = v.className.replace(c, "");
    }
  }

  fn.extend({
    addClass: function addClass(c) {
      var classes = getClasses(c);
      return classes ? this.each(function (v) {
        var spacedName = " " + v.className + " ";

        _each(classes, function (c) {
          _addClass(v, c, spacedName);
        });
      }) : this;
    },
    attr: function attr(name, value) {
      if (!name) {
        return undefined;
      }

      if (isString(name)) {
        if (value === undefined) {
          return this[0] ? this[0].getAttribute ? this[0].getAttribute(name) : this[0][name] : undefined;
        }

        return this.each(function (v) {
          if (v.setAttribute) {
            v.setAttribute(name, value);
          } else {
            v[name] = value;
          }
        });
      }

      for (var key in name) {
        this.attr(key, name[key]);
      }

      return this;
    },
    hasClass: function hasClass(c) {
      var check = false,
          classes = getClasses(c);

      if (classes && classes.length) {
        this.each(function (v) {
          check = _hasClass(v, classes[0]);
          return !check;
        });
      }

      return check;
    },
    prop: function prop(name, value) {
      if (isString(name)) {
        return value === undefined ? this[0][name] : this.each(function (v) {
          v[name] = value;
        });
      }

      for (var key in name) {
        this.prop(key, name[key]);
      }

      return this;
    },
    removeAttr: function removeAttr(name) {
      return this.each(function (v) {
        if (v.removeAttribute) {
          v.removeAttribute(name);
        } else {
          delete v[name];
        }
      });
    },
    removeClass: function removeClass(c) {
      if (!arguments.length) {
        return this.attr("class", "");
      }

      var classes = getClasses(c);
      return classes ? this.each(function (v) {
        _each(classes, function (c) {
          _removeClass(v, c);
        });
      }) : this;
    },
    removeProp: function removeProp(name) {
      return this.each(function (v) {
        delete v[name];
      });
    },
    toggleClass: function toggleClass(c, state) {
      if (state !== undefined) {
        return this[state ? "addClass" : "removeClass"](c);
      }

      var classes = getClasses(c);
      return classes ? this.each(function (v) {
        var spacedName = " " + v.className + " ";

        _each(classes, function (c) {
          if (_hasClass(v, c)) {
            _removeClass(v, c);
          } else {
            _addClass(v, c, spacedName);
          }
        });
      }) : this;
    }
  });
  fn.extend({
    add: function add(selector, context) {
      return unique(cash.merge(this, cash(selector, context)));
    },
    each: function each(callback) {
      _each(this, callback);

      return this;
    },
    eq: function eq(index) {
      return cash(this.get(index));
    },
    filter: function filter(selector) {
      if (!selector) {
        return this;
      }

      var comparator = isFunction(selector) ? selector : getCompareFunction(selector);
      return cash(_filter.call(this, function (e) {
        return comparator(e, selector);
      }));
    },
    first: function first() {
      return this.eq(0);
    },
    get: function get(index) {
      if (index === undefined) {
        return slice.call(this);
      }

      return index < 0 ? this[index + this.length] : this[index];
    },
    index: function index(elem) {
      var child = elem ? cash(elem)[0] : this[0],
          collection = elem ? this : cash(child).parent().children();
      return slice.call(collection).indexOf(child);
    },
    last: function last() {
      return this.eq(-1);
    }
  });

  var camelCase = function () {
    var camelRegex = /(?:^\w|[A-Z]|\b\w)/g,
        whiteSpace = /[\s-_]+/g;
    return function (str) {
      return str.replace(camelRegex, function (letter, index) {
        return letter[index === 0 ? "toLowerCase" : "toUpperCase"]();
      }).replace(whiteSpace, "");
    };
  }();

  var getPrefixedProp = function () {
    var cache = {},
        doc = document,
        div = doc.createElement("div"),
        style = div.style;
    return function (prop) {
      prop = camelCase(prop);

      if (cache[prop]) {
        return cache[prop];
      }

      var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
          prefixes = ["webkit", "moz", "ms", "o"],
          props = (prop + " " + prefixes.join(ucProp + " ") + ucProp).split(" ");

      _each(props, function (p) {
        if (p in style) {
          cache[p] = prop = cache[prop] = p;
          return false;
        }
      });

      return cache[prop];
    };
  }();

  cash.prefixedProp = getPrefixedProp;
  cash.camelCase = camelCase;
  fn.extend({
    css: function css(prop, value) {
      if (isString(prop)) {
        prop = getPrefixedProp(prop);
        return arguments.length > 1 ? this.each(function (v) {
          return v.style[prop] = value;
        }) : win.getComputedStyle(this[0])[prop];
      }

      for (var key in prop) {
        this.css(key, prop[key]);
      }

      return this;
    }
  });

  function compute(el, prop) {
    return parseInt(win.getComputedStyle(el[0], null)[prop], 10) || 0;
  }

  _each(["Width", "Height"], function (v) {
    var lower = v.toLowerCase();

    fn[lower] = function () {
      return this[0].getBoundingClientRect()[lower];
    };

    fn["inner" + v] = function () {
      return this[0]["client" + v];
    };

    fn["outer" + v] = function (margins) {
      return this[0]["offset" + v] + (margins ? compute(this, "margin" + (v === "Width" ? "Left" : "Top")) + compute(this, "margin" + (v === "Width" ? "Right" : "Bottom")) : 0);
    };
  });

  function registerEvent(node, eventName, callback) {
    var eventCache = getData(node, "_cashEvents") || setData(node, "_cashEvents", {});
    eventCache[eventName] = eventCache[eventName] || [];
    eventCache[eventName].push(callback);
    node.addEventListener(eventName, callback);
  }

  function removeEvent(node, eventName, callback) {
    var events = getData(node, "_cashEvents"),
        eventCache = events && events[eventName],
        index;

    if (!eventCache) {
      return;
    }

    if (callback) {
      node.removeEventListener(eventName, callback);
      index = eventCache.indexOf(callback);

      if (index >= 0) {
        eventCache.splice(index, 1);
      }
    } else {
      _each(eventCache, function (event) {
        node.removeEventListener(eventName, event);
      });

      eventCache = [];
    }
  }

  fn.extend({
    off: function off(eventName, callback) {
      return this.each(function (v) {
        return removeEvent(v, eventName, callback);
      });
    },
    on: function on(eventName, delegate, callback, runOnce) {
      // jshint ignore:line
      var originalCallback;

      if (!isString(eventName)) {
        for (var key in eventName) {
          this.on(key, delegate, eventName[key]);
        }

        return this;
      }

      if (isFunction(delegate)) {
        callback = delegate;
        delegate = null;
      }

      if (eventName === "ready") {
        onReady(callback);
        return this;
      }

      if (delegate) {
        originalCallback = callback;

        callback = function callback(e) {
          var t = e.target;

          while (!matches(t, delegate)) {
            if (t === this || t === null) {
              return t = false;
            }

            t = t.parentNode;
          }

          if (t) {
            originalCallback.call(t, e);
          }
        };
      }

      return this.each(function (v) {
        var _finalCallback = callback;

        if (runOnce) {
          _finalCallback = function finalCallback() {
            callback.apply(this, arguments);
            removeEvent(v, eventName, _finalCallback);
          };
        }

        registerEvent(v, eventName, _finalCallback);
      });
    },
    one: function one(eventName, delegate, callback) {
      return this.on(eventName, delegate, callback, true);
    },
    ready: onReady,

    /**
     * Modified
     * Triggers browser event
     * @param String eventName
     * @param Object data - Add properties to event object
     */
    trigger: function trigger(eventName, data) {
      if (document.createEvent) {
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent(eventName, true, false);
        evt = this.extend(evt, data);
        return this.each(function (v) {
          return v.dispatchEvent(evt);
        });
      }
    }
  });

  function encode(name, value) {
    return "&" + encodeURIComponent(name) + "=" + encodeURIComponent(value).replace(/%20/g, "+");
  }

  function getSelectMultiple_(el) {
    var values = [];

    _each(el.options, function (o) {
      if (o.selected) {
        values.push(o.value);
      }
    });

    return values.length ? values : null;
  }

  function getSelectSingle_(el) {
    var selectedIndex = el.selectedIndex;
    return selectedIndex >= 0 ? el.options[selectedIndex].value : null;
  }

  function getValue(el) {
    var type = el.type;

    if (!type) {
      return null;
    }

    switch (type.toLowerCase()) {
      case "select-one":
        return getSelectSingle_(el);

      case "select-multiple":
        return getSelectMultiple_(el);

      case "radio":
        return el.checked ? el.value : null;

      case "checkbox":
        return el.checked ? el.value : null;

      default:
        return el.value ? el.value : null;
    }
  }

  fn.extend({
    serialize: function serialize() {
      var query = "";

      _each(this[0].elements || this, function (el) {
        if (el.disabled || el.tagName === "FIELDSET") {
          return;
        }

        var name = el.name;

        switch (el.type.toLowerCase()) {
          case "file":
          case "reset":
          case "submit":
          case "button":
            break;

          case "select-multiple":
            var values = getValue(el);

            if (values !== null) {
              _each(values, function (value) {
                query += encode(name, value);
              });
            }

            break;

          default:
            var value = getValue(el);

            if (value !== null) {
              query += encode(name, value);
            }

        }
      });

      return query.substr(1);
    },
    val: function val(value) {
      if (value === undefined) {
        return getValue(this[0]);
      }

      return this.each(function (v) {
        return v.value = value;
      });
    }
  });

  function insertElement(el, child, prepend) {
    if (prepend) {
      var first = el.childNodes[0];
      el.insertBefore(child, first);
    } else {
      el.appendChild(child);
    }
  }

  function insertContent(parent, child, prepend) {
    var str = isString(child);

    if (!str && child.length) {
      _each(child, function (v) {
        return insertContent(parent, v, prepend);
      });

      return;
    }

    _each(parent, str ? function (v) {
      return v.insertAdjacentHTML(prepend ? "afterbegin" : "beforeend", child);
    } : function (v, i) {
      return insertElement(v, i === 0 ? child : child.cloneNode(true), prepend);
    });
  }

  fn.extend({
    after: function after(selector) {
      cash(selector).insertAfter(this);
      return this;
    },
    append: function append(content) {
      insertContent(this, content);
      return this;
    },
    appendTo: function appendTo(parent) {
      insertContent(cash(parent), this);
      return this;
    },
    before: function before(selector) {
      cash(selector).insertBefore(this);
      return this;
    },
    clone: function clone() {
      return cash(this.map(function (v) {
        return v.cloneNode(true);
      }));
    },
    empty: function empty() {
      this.html("");
      return this;
    },
    html: function html(content) {
      if (content === undefined) {
        return this[0].innerHTML;
      }

      var source = content.nodeType ? content[0].outerHTML : content;
      return this.each(function (v) {
        return v.innerHTML = source;
      });
    },
    insertAfter: function insertAfter(selector) {
      var _this = this;

      cash(selector).each(function (el, i) {
        var parent = el.parentNode,
            sibling = el.nextSibling;

        _this.each(function (v) {
          parent.insertBefore(i === 0 ? v : v.cloneNode(true), sibling);
        });
      });
      return this;
    },
    insertBefore: function insertBefore(selector) {
      var _this2 = this;

      cash(selector).each(function (el, i) {
        var parent = el.parentNode;

        _this2.each(function (v) {
          parent.insertBefore(i === 0 ? v : v.cloneNode(true), el);
        });
      });
      return this;
    },
    prepend: function prepend(content) {
      insertContent(this, content, true);
      return this;
    },
    prependTo: function prependTo(parent) {
      insertContent(cash(parent), this, true);
      return this;
    },
    remove: function remove() {
      return this.each(function (v) {
        if (!!v.parentNode) {
          return v.parentNode.removeChild(v);
        }
      });
    },
    text: function text(content) {
      if (content === undefined) {
        return this[0].textContent;
      }

      return this.each(function (v) {
        return v.textContent = content;
      });
    }
  });
  var docEl = doc.documentElement;
  fn.extend({
    position: function position() {
      var el = this[0];
      return {
        left: el.offsetLeft,
        top: el.offsetTop
      };
    },
    offset: function offset() {
      var rect = this[0].getBoundingClientRect();
      return {
        top: rect.top + win.pageYOffset - docEl.clientTop,
        left: rect.left + win.pageXOffset - docEl.clientLeft
      };
    },
    offsetParent: function offsetParent() {
      return cash(this[0].offsetParent);
    }
  });
  fn.extend({
    children: function children(selector) {
      var elems = [];
      this.each(function (el) {
        push.apply(elems, el.children);
      });
      elems = unique(elems);
      return !selector ? elems : elems.filter(function (v) {
        return matches(v, selector);
      });
    },
    closest: function closest(selector) {
      if (!selector || this.length < 1) {
        return cash();
      }

      if (this.is(selector)) {
        return this.filter(selector);
      }

      return this.parent().closest(selector);
    },
    is: function is(selector) {
      if (!selector) {
        return false;
      }

      var match = false,
          comparator = getCompareFunction(selector);
      this.each(function (el) {
        match = comparator(el, selector);
        return !match;
      });
      return match;
    },
    find: function find(selector) {
      if (!selector || selector.nodeType) {
        return cash(selector && this.has(selector).length ? selector : null);
      }

      var elems = [];
      this.each(function (el) {
        push.apply(elems, _find(selector, el));
      });
      return unique(elems);
    },
    has: function has(selector) {
      var comparator = isString(selector) ? function (el) {
        return _find(selector, el).length !== 0;
      } : function (el) {
        return el.contains(selector);
      };
      return this.filter(comparator);
    },
    next: function next() {
      return cash(this[0].nextElementSibling);
    },
    not: function not(selector) {
      if (!selector) {
        return this;
      }

      var comparator = getCompareFunction(selector);
      return this.filter(function (el) {
        return !comparator(el, selector);
      });
    },
    parent: function parent() {
      var result = [];
      this.each(function (item) {
        if (item && item.parentNode) {
          result.push(item.parentNode);
        }
      });
      return unique(result);
    },
    parents: function parents(selector) {
      var last,
          result = [];
      this.each(function (item) {
        last = item;

        while (last && last.parentNode && last !== doc.body.parentNode) {
          last = last.parentNode;

          if (!selector || selector && matches(last, selector)) {
            result.push(last);
          }
        }
      });
      return unique(result);
    },
    prev: function prev() {
      return cash(this[0].previousElementSibling);
    },
    siblings: function siblings(selector) {
      var collection = this.parent().children(selector),
          el = this[0];
      return collection.filter(function (i) {
        return i !== el;
      });
    }
  });
  return cash;
});

;

var Component = function () {
  /**
   * Generic constructor for all components
   * @constructor
   * @param {Element} el
   * @param {Object} options
   */
  function Component(classDef, el, options) {
    _classCallCheck(this, Component); // Display error if el is valid HTML Element


    if (!(el instanceof Element)) {
      console.error(Error(el + ' is not an HTML Element'));
    } // If exists, destroy and reinitialize in child


    var ins = classDef.getInstance(el);

    if (!!ins) {
      ins.destroy();
    }

    this.el = el;
    this.$el = cash(el);
  }
  /**
   * Initializes components
   * @param {class} classDef
   * @param {Element | NodeList | jQuery} els
   * @param {Object} options
   */


  _createClass(Component, null, [{
    key: "init",
    value: function init(classDef, els, options) {
      var instances = null;

      if (els instanceof Element) {
        instances = new classDef(els, options);
      } else if (!!els && (els.jquery || els.cash || els instanceof NodeList)) {
        var instancesArr = [];

        for (var i = 0; i < els.length; i++) {
          instancesArr.push(new classDef(els[i], options));
        }

        instances = instancesArr;
      }

      return instances;
    }
  }]);

  return Component;
}();

; // Required for Meteor package, the use of window prevents export by Meteor

(function (window) {
  if (window.Package) {
    M = {};
  } else {
    window.M = {};
  } // Check for jQuery


  M.jQueryLoaded = !!window.jQuery;
})(window); // AMD


if (true) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return M;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // Common JS
} else {}

M.version = '1.0.0';
M.keys = {
  TAB: 9,
  ENTER: 13,
  ESC: 27,
  ARROW_UP: 38,
  ARROW_DOWN: 40
};
/**
 * TabPress Keydown handler
 */

M.tabPressed = false;
M.keyDown = false;

var docHandleKeydown = function docHandleKeydown(e) {
  M.keyDown = true;

  if (e.which === M.keys.TAB || e.which === M.keys.ARROW_DOWN || e.which === M.keys.ARROW_UP) {
    M.tabPressed = true;
  }
};

var docHandleKeyup = function docHandleKeyup(e) {
  M.keyDown = false;

  if (e.which === M.keys.TAB || e.which === M.keys.ARROW_DOWN || e.which === M.keys.ARROW_UP) {
    M.tabPressed = false;
  }
};

var docHandleFocus = function docHandleFocus(e) {
  if (M.keyDown) {
    document.body.classList.add('keyboard-focused');
  }
};

var docHandleBlur = function docHandleBlur(e) {
  document.body.classList.remove('keyboard-focused');
};

document.addEventListener('keydown', docHandleKeydown, true);
document.addEventListener('keyup', docHandleKeyup, true);
document.addEventListener('focus', docHandleFocus, true);
document.addEventListener('blur', docHandleBlur, true);
/**
 * Initialize jQuery wrapper for plugin
 * @param {Class} plugin  javascript class
 * @param {string} pluginName  jQuery plugin name
 * @param {string} classRef  Class reference name
 */

M.initializeJqueryWrapper = function (plugin, pluginName, classRef) {
  jQuery.fn[pluginName] = function (methodOrOptions) {
    // Call plugin method if valid method name is passed in
    if (plugin.prototype[methodOrOptions]) {
      var params = Array.prototype.slice.call(arguments, 1); // Getter methods

      if (methodOrOptions.slice(0, 3) === 'get') {
        var instance = this.first()[0][classRef];
        return instance[methodOrOptions].apply(instance, params);
      } // Void methods


      return this.each(function () {
        var instance = this[classRef];
        instance[methodOrOptions].apply(instance, params);
      }); // Initialize plugin if options or no argument is passed in
    } else if (_typeof(methodOrOptions) === 'object' || !methodOrOptions) {
      plugin.init(this, arguments[0]);
      return this;
    } // Return error if an unrecognized  method name is passed in


    jQuery.error("Method " + methodOrOptions + " does not exist on jQuery." + pluginName);
  };
};
/**
 * Automatically initialize components
 * @param {Element} context  DOM Element to search within for components
 */


M.AutoInit = function (context) {
  // Use document.body if no context is given
  var root = !!context ? context : document.body;
  var registry = {
    Autocomplete: root.querySelectorAll('.autocomplete:not(.no-autoinit)'),
    Carousel: root.querySelectorAll('.carousel:not(.no-autoinit)'),
    Chips: root.querySelectorAll('.chips:not(.no-autoinit)'),
    Collapsible: root.querySelectorAll('.collapsible:not(.no-autoinit)'),
    Datepicker: root.querySelectorAll('.datepicker:not(.no-autoinit)'),
    Dropdown: root.querySelectorAll('.dropdown-trigger:not(.no-autoinit)'),
    Materialbox: root.querySelectorAll('.materialboxed:not(.no-autoinit)'),
    Modal: root.querySelectorAll('.modal:not(.no-autoinit)'),
    Parallax: root.querySelectorAll('.parallax:not(.no-autoinit)'),
    Pushpin: root.querySelectorAll('.pushpin:not(.no-autoinit)'),
    ScrollSpy: root.querySelectorAll('.scrollspy:not(.no-autoinit)'),
    FormSelect: root.querySelectorAll('select:not(.no-autoinit)'),
    Sidenav: root.querySelectorAll('.sidenav:not(.no-autoinit)'),
    Tabs: root.querySelectorAll('.tabs:not(.no-autoinit)'),
    TapTarget: root.querySelectorAll('.tap-target:not(.no-autoinit)'),
    Timepicker: root.querySelectorAll('.timepicker:not(.no-autoinit)'),
    Tooltip: root.querySelectorAll('.tooltipped:not(.no-autoinit)'),
    FloatingActionButton: root.querySelectorAll('.fixed-action-btn:not(.no-autoinit)')
  };

  for (var pluginName in registry) {
    var plugin = M[pluginName];
    plugin.init(registry[pluginName]);
  }
};
/**
 * Generate approximated selector string for a jQuery object
 * @param {jQuery} obj  jQuery object to be parsed
 * @returns {string}
 */


M.objectSelectorString = function (obj) {
  var tagStr = obj.prop('tagName') || '';
  var idStr = obj.attr('id') || '';
  var classStr = obj.attr('class') || '';
  return (tagStr + idStr + classStr).replace(/\s/g, '');
}; // Unique Random ID


M.guid = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return function () {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  };
}();
/**
 * Escapes hash from special characters
 * @param {string} hash  String returned from this.hash
 * @returns {string}
 */


M.escapeHash = function (hash) {
  return hash.replace(/(:|\.|\[|\]|,|=|\/)/g, '\\$1');
};

M.elementOrParentIsFixed = function (element) {
  var $element = $(element);
  var $checkElements = $element.add($element.parents());
  var isFixed = false;
  $checkElements.each(function () {
    if ($(this).css('position') === 'fixed') {
      isFixed = true;
      return false;
    }
  });
  return isFixed;
};
/**
 * @typedef {Object} Edges
 * @property {Boolean} top  If the top edge was exceeded
 * @property {Boolean} right  If the right edge was exceeded
 * @property {Boolean} bottom  If the bottom edge was exceeded
 * @property {Boolean} left  If the left edge was exceeded
 */

/**
 * @typedef {Object} Bounding
 * @property {Number} left  left offset coordinate
 * @property {Number} top  top offset coordinate
 * @property {Number} width
 * @property {Number} height
 */

/**
 * Escapes hash from special characters
 * @param {Element} container  Container element that acts as the boundary
 * @param {Bounding} bounding  element bounding that is being checked
 * @param {Number} offset  offset from edge that counts as exceeding
 * @returns {Edges}
 */


M.checkWithinContainer = function (container, bounding, offset) {
  var edges = {
    top: false,
    right: false,
    bottom: false,
    left: false
  };
  var containerRect = container.getBoundingClientRect(); // If body element is smaller than viewport, use viewport height instead.

  var containerBottom = container === document.body ? Math.max(containerRect.bottom, window.innerHeight) : containerRect.bottom;
  var scrollLeft = container.scrollLeft;
  var scrollTop = container.scrollTop;
  var scrolledX = bounding.left - scrollLeft;
  var scrolledY = bounding.top - scrollTop; // Check for container and viewport for each edge

  if (scrolledX < containerRect.left + offset || scrolledX < offset) {
    edges.left = true;
  }

  if (scrolledX + bounding.width > containerRect.right - offset || scrolledX + bounding.width > window.innerWidth - offset) {
    edges.right = true;
  }

  if (scrolledY < containerRect.top + offset || scrolledY < offset) {
    edges.top = true;
  }

  if (scrolledY + bounding.height > containerBottom - offset || scrolledY + bounding.height > window.innerHeight - offset) {
    edges.bottom = true;
  }

  return edges;
};

M.checkPossibleAlignments = function (el, container, bounding, offset) {
  var canAlign = {
    top: true,
    right: true,
    bottom: true,
    left: true,
    spaceOnTop: null,
    spaceOnRight: null,
    spaceOnBottom: null,
    spaceOnLeft: null
  };
  var containerAllowsOverflow = getComputedStyle(container).overflow === 'visible';
  var containerRect = container.getBoundingClientRect();
  var containerHeight = Math.min(containerRect.height, window.innerHeight);
  var containerWidth = Math.min(containerRect.width, window.innerWidth);
  var elOffsetRect = el.getBoundingClientRect();
  var scrollLeft = container.scrollLeft;
  var scrollTop = container.scrollTop;
  var scrolledX = bounding.left - scrollLeft;
  var scrolledYTopEdge = bounding.top - scrollTop;
  var scrolledYBottomEdge = bounding.top + elOffsetRect.height - scrollTop; // Check for container and viewport for left

  canAlign.spaceOnRight = !containerAllowsOverflow ? containerWidth - (scrolledX + bounding.width) : window.innerWidth - (elOffsetRect.left + bounding.width);

  if (canAlign.spaceOnRight < 0) {
    canAlign.left = false;
  } // Check for container and viewport for Right


  canAlign.spaceOnLeft = !containerAllowsOverflow ? scrolledX - bounding.width + elOffsetRect.width : elOffsetRect.right - bounding.width;

  if (canAlign.spaceOnLeft < 0) {
    canAlign.right = false;
  } // Check for container and viewport for Top


  canAlign.spaceOnBottom = !containerAllowsOverflow ? containerHeight - (scrolledYTopEdge + bounding.height + offset) : window.innerHeight - (elOffsetRect.top + bounding.height + offset);

  if (canAlign.spaceOnBottom < 0) {
    canAlign.top = false;
  } // Check for container and viewport for Bottom


  canAlign.spaceOnTop = !containerAllowsOverflow ? scrolledYBottomEdge - (bounding.height - offset) : elOffsetRect.bottom - (bounding.height + offset);

  if (canAlign.spaceOnTop < 0) {
    canAlign.bottom = false;
  }

  return canAlign;
};

M.getOverflowParent = function (element) {
  if (element == null) {
    return null;
  }

  if (element === document.body || getComputedStyle(element).overflow !== 'visible') {
    return element;
  }

  return M.getOverflowParent(element.parentElement);
};
/**
 * Gets id of component from a trigger
 * @param {Element} trigger  trigger
 * @returns {string}
 */


M.getIdFromTrigger = function (trigger) {
  var id = trigger.getAttribute('data-target');

  if (!id) {
    id = trigger.getAttribute('href');

    if (id) {
      id = id.slice(1);
    } else {
      id = '';
    }
  }

  return id;
};
/**
 * Multi browser support for document scroll top
 * @returns {Number}
 */


M.getDocumentScrollTop = function () {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};
/**
 * Multi browser support for document scroll left
 * @returns {Number}
 */


M.getDocumentScrollLeft = function () {
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
};
/**
 * @typedef {Object} Edges
 * @property {Boolean} top  If the top edge was exceeded
 * @property {Boolean} right  If the right edge was exceeded
 * @property {Boolean} bottom  If the bottom edge was exceeded
 * @property {Boolean} left  If the left edge was exceeded
 */

/**
 * @typedef {Object} Bounding
 * @property {Number} left  left offset coordinate
 * @property {Number} top  top offset coordinate
 * @property {Number} width
 * @property {Number} height
 */

/**
 * Get time in ms
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @type {function}
 * @return {number}
 */


var getTime = Date.now || function () {
  return new Date().getTime();
};
/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @param {function} func
 * @param {number} wait
 * @param {Object=} options
 * @returns {Function}
 */


M.throttle = function (func, wait, options) {
  var context = void 0,
      args = void 0,
      result = void 0;
  var timeout = null;
  var previous = 0;
  options || (options = {});

  var later = function later() {
    previous = options.leading === false ? 0 : getTime();
    timeout = null;
    result = func.apply(context, args);
    context = args = null;
  };

  return function () {
    var now = getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;

    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };
};

;
/*
v2.2.0
2017 Julian Garnier
Released under the MIT license
*/

var $jscomp = {
  scope: {}
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (e, r, p) {
  if (p.get || p.set) throw new TypeError("ES3 does not support getters and setters.");
  e != Array.prototype && e != Object.prototype && (e[r] = p.value);
};

$jscomp.getGlobal = function (e) {
  return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e;
};

$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";

$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};

  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};

$jscomp.symbolCounter_ = 0;

$jscomp.Symbol = function (e) {
  return $jscomp.SYMBOL_PREFIX + (e || "") + $jscomp.symbolCounter_++;
};

$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();
  var e = $jscomp.global.Symbol.iterator;
  e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
  "function" != typeof Array.prototype[e] && $jscomp.defineProperty(Array.prototype, e, {
    configurable: !0,
    writable: !0,
    value: function value() {
      return $jscomp.arrayIterator(this);
    }
  });

  $jscomp.initSymbolIterator = function () {};
};

$jscomp.arrayIterator = function (e) {
  var r = 0;
  return $jscomp.iteratorPrototype(function () {
    return r < e.length ? {
      done: !1,
      value: e[r++]
    } : {
      done: !0
    };
  });
};

$jscomp.iteratorPrototype = function (e) {
  $jscomp.initSymbolIterator();
  e = {
    next: e
  };

  e[$jscomp.global.Symbol.iterator] = function () {
    return this;
  };

  return e;
};

$jscomp.array = $jscomp.array || {};

$jscomp.iteratorFromArray = function (e, r) {
  $jscomp.initSymbolIterator();
  e instanceof String && (e += "");
  var p = 0,
      m = {
    next: function next() {
      if (p < e.length) {
        var u = p++;
        return {
          value: r(u, e[u]),
          done: !1
        };
      }

      m.next = function () {
        return {
          done: !0,
          value: void 0
        };
      };

      return m.next();
    }
  };

  m[Symbol.iterator] = function () {
    return m;
  };

  return m;
};

$jscomp.polyfill = function (e, r, p, m) {
  if (r) {
    p = $jscomp.global;
    e = e.split(".");

    for (m = 0; m < e.length - 1; m++) {
      var u = e[m];
      u in p || (p[u] = {});
      p = p[u];
    }

    e = e[e.length - 1];
    m = p[e];
    r = r(m);
    r != m && null != r && $jscomp.defineProperty(p, e, {
      configurable: !0,
      writable: !0,
      value: r
    });
  }
};

$jscomp.polyfill("Array.prototype.keys", function (e) {
  return e ? e : function () {
    return $jscomp.iteratorFromArray(this, function (e) {
      return e;
    });
  };
}, "es6-impl", "es3");
var $jscomp$this = this;

(function (r) {
  M.anime = r();
})(function () {
  function e(a) {
    if (!h.col(a)) try {
      return document.querySelectorAll(a);
    } catch (c) {}
  }

  function r(a, c) {
    for (var d = a.length, b = 2 <= arguments.length ? arguments[1] : void 0, f = [], n = 0; n < d; n++) {
      if (n in a) {
        var k = a[n];
        c.call(b, k, n, a) && f.push(k);
      }
    }

    return f;
  }

  function p(a) {
    return a.reduce(function (a, d) {
      return a.concat(h.arr(d) ? p(d) : d);
    }, []);
  }

  function m(a) {
    if (h.arr(a)) return a;
    h.str(a) && (a = e(a) || a);
    return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a];
  }

  function u(a, c) {
    return a.some(function (a) {
      return a === c;
    });
  }

  function C(a) {
    var c = {},
        d;

    for (d in a) {
      c[d] = a[d];
    }

    return c;
  }

  function D(a, c) {
    var d = C(a),
        b;

    for (b in a) {
      d[b] = c.hasOwnProperty(b) ? c[b] : a[b];
    }

    return d;
  }

  function z(a, c) {
    var d = C(a),
        b;

    for (b in c) {
      d[b] = h.und(a[b]) ? c[b] : a[b];
    }

    return d;
  }

  function T(a) {
    a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, c, d, k) {
      return c + c + d + d + k + k;
    });
    var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    a = parseInt(c[1], 16);
    var d = parseInt(c[2], 16),
        c = parseInt(c[3], 16);
    return "rgba(" + a + "," + d + "," + c + ",1)";
  }

  function U(a) {
    function c(a, c, b) {
      0 > b && (b += 1);
      1 < b && --b;
      return b < 1 / 6 ? a + 6 * (c - a) * b : .5 > b ? c : b < 2 / 3 ? a + (c - a) * (2 / 3 - b) * 6 : a;
    }

    var d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);
    a = parseInt(d[1]) / 360;
    var b = parseInt(d[2]) / 100,
        f = parseInt(d[3]) / 100,
        d = d[4] || 1;
    if (0 == b) f = b = a = f;else {
      var n = .5 > f ? f * (1 + b) : f + b - f * b,
          k = 2 * f - n,
          f = c(k, n, a + 1 / 3),
          b = c(k, n, a);
      a = c(k, n, a - 1 / 3);
    }
    return "rgba(" + 255 * f + "," + 255 * b + "," + 255 * a + "," + d + ")";
  }

  function y(a) {
    if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a)) return a[2];
  }

  function V(a) {
    if (-1 < a.indexOf("translate") || "perspective" === a) return "px";
    if (-1 < a.indexOf("rotate") || -1 < a.indexOf("skew")) return "deg";
  }

  function I(a, c) {
    return h.fnc(a) ? a(c.target, c.id, c.total) : a;
  }

  function E(a, c) {
    if (c in a.style) return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0";
  }

  function J(a, c) {
    if (h.dom(a) && u(W, c)) return "transform";
    if (h.dom(a) && (a.getAttribute(c) || h.svg(a) && a[c])) return "attribute";
    if (h.dom(a) && "transform" !== c && E(a, c)) return "css";
    if (null != a[c]) return "object";
  }

  function X(a, c) {
    var d = V(c),
        d = -1 < c.indexOf("scale") ? 1 : 0 + d;
    a = a.style.transform;
    if (!a) return d;

    for (var b = [], f = [], n = [], k = /(\w+)\((.+?)\)/g; b = k.exec(a);) {
      f.push(b[1]), n.push(b[2]);
    }

    a = r(n, function (a, b) {
      return f[b] === c;
    });
    return a.length ? a[0] : d;
  }

  function K(a, c) {
    switch (J(a, c)) {
      case "transform":
        return X(a, c);

      case "css":
        return E(a, c);

      case "attribute":
        return a.getAttribute(c);
    }

    return a[c] || 0;
  }

  function L(a, c) {
    var d = /^(\*=|\+=|-=)/.exec(a);
    if (!d) return a;
    var b = y(a) || 0;
    c = parseFloat(c);
    a = parseFloat(a.replace(d[0], ""));

    switch (d[0][0]) {
      case "+":
        return c + a + b;

      case "-":
        return c - a + b;

      case "*":
        return c * a + b;
    }
  }

  function F(a, c) {
    return Math.sqrt(Math.pow(c.x - a.x, 2) + Math.pow(c.y - a.y, 2));
  }

  function M(a) {
    a = a.points;

    for (var c = 0, d, b = 0; b < a.numberOfItems; b++) {
      var f = a.getItem(b);
      0 < b && (c += F(d, f));
      d = f;
    }

    return c;
  }

  function N(a) {
    if (a.getTotalLength) return a.getTotalLength();

    switch (a.tagName.toLowerCase()) {
      case "circle":
        return 2 * Math.PI * a.getAttribute("r");

      case "rect":
        return 2 * a.getAttribute("width") + 2 * a.getAttribute("height");

      case "line":
        return F({
          x: a.getAttribute("x1"),
          y: a.getAttribute("y1")
        }, {
          x: a.getAttribute("x2"),
          y: a.getAttribute("y2")
        });

      case "polyline":
        return M(a);

      case "polygon":
        var c = a.points;
        return M(a) + F(c.getItem(c.numberOfItems - 1), c.getItem(0));
    }
  }

  function Y(a, c) {
    function d(b) {
      b = void 0 === b ? 0 : b;
      return a.el.getPointAtLength(1 <= c + b ? c + b : 0);
    }

    var b = d(),
        f = d(-1),
        n = d(1);

    switch (a.property) {
      case "x":
        return b.x;

      case "y":
        return b.y;

      case "angle":
        return 180 * Math.atan2(n.y - f.y, n.x - f.x) / Math.PI;
    }
  }

  function O(a, c) {
    var d = /-?\d*\.?\d+/g,
        b;
    b = h.pth(a) ? a.totalLength : a;

    if (h.col(b)) {
      if (h.rgb(b)) {
        var f = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);
        b = f ? "rgba(" + f[1] + ",1)" : b;
      } else b = h.hex(b) ? T(b) : h.hsl(b) ? U(b) : void 0;
    } else f = (f = y(b)) ? b.substr(0, b.length - f.length) : b, b = c && !/\s/g.test(b) ? f + c : f;

    b += "";
    return {
      original: b,
      numbers: b.match(d) ? b.match(d).map(Number) : [0],
      strings: h.str(a) || c ? b.split(d) : []
    };
  }

  function P(a) {
    a = a ? p(h.arr(a) ? a.map(m) : m(a)) : [];
    return r(a, function (a, d, b) {
      return b.indexOf(a) === d;
    });
  }

  function Z(a) {
    var c = P(a);
    return c.map(function (a, b) {
      return {
        target: a,
        id: b,
        total: c.length
      };
    });
  }

  function aa(a, c) {
    var d = C(c);

    if (h.arr(a)) {
      var b = a.length;
      2 !== b || h.obj(a[0]) ? h.fnc(c.duration) || (d.duration = c.duration / b) : a = {
        value: a
      };
    }

    return m(a).map(function (a, b) {
      b = b ? 0 : c.delay;
      a = h.obj(a) && !h.pth(a) ? a : {
        value: a
      };
      h.und(a.delay) && (a.delay = b);
      return a;
    }).map(function (a) {
      return z(a, d);
    });
  }

  function ba(a, c) {
    var d = {},
        b;

    for (b in a) {
      var f = I(a[b], c);
      h.arr(f) && (f = f.map(function (a) {
        return I(a, c);
      }), 1 === f.length && (f = f[0]));
      d[b] = f;
    }

    d.duration = parseFloat(d.duration);
    d.delay = parseFloat(d.delay);
    return d;
  }

  function ca(a) {
    return h.arr(a) ? A.apply(this, a) : Q[a];
  }

  function da(a, c) {
    var d;
    return a.tweens.map(function (b) {
      b = ba(b, c);
      var f = b.value,
          e = K(c.target, a.name),
          k = d ? d.to.original : e,
          k = h.arr(f) ? f[0] : k,
          w = L(h.arr(f) ? f[1] : f, k),
          e = y(w) || y(k) || y(e);
      b.from = O(k, e);
      b.to = O(w, e);
      b.start = d ? d.end : a.offset;
      b.end = b.start + b.delay + b.duration;
      b.easing = ca(b.easing);
      b.elasticity = (1E3 - Math.min(Math.max(b.elasticity, 1), 999)) / 1E3;
      b.isPath = h.pth(f);
      b.isColor = h.col(b.from.original);
      b.isColor && (b.round = 1);
      return d = b;
    });
  }

  function ea(a, c) {
    return r(p(a.map(function (a) {
      return c.map(function (b) {
        var c = J(a.target, b.name);

        if (c) {
          var d = da(b, a);
          b = {
            type: c,
            property: b.name,
            animatable: a,
            tweens: d,
            duration: d[d.length - 1].end,
            delay: d[0].delay
          };
        } else b = void 0;

        return b;
      });
    })), function (a) {
      return !h.und(a);
    });
  }

  function R(a, c, d, b) {
    var f = "delay" === a;
    return c.length ? (f ? Math.min : Math.max).apply(Math, c.map(function (b) {
      return b[a];
    })) : f ? b.delay : d.offset + b.delay + b.duration;
  }

  function fa(a) {
    var c = D(ga, a),
        d = D(S, a),
        b = Z(a.targets),
        f = [],
        e = z(c, d),
        k;

    for (k in a) {
      e.hasOwnProperty(k) || "targets" === k || f.push({
        name: k,
        offset: e.offset,
        tweens: aa(a[k], d)
      });
    }

    a = ea(b, f);
    return z(c, {
      children: [],
      animatables: b,
      animations: a,
      duration: R("duration", a, c, d),
      delay: R("delay", a, c, d)
    });
  }

  function q(a) {
    function c() {
      return window.Promise && new Promise(function (a) {
        return p = a;
      });
    }

    function d(a) {
      return g.reversed ? g.duration - a : a;
    }

    function b(a) {
      for (var b = 0, c = {}, d = g.animations, f = d.length; b < f;) {
        var e = d[b],
            k = e.animatable,
            h = e.tweens,
            n = h.length - 1,
            l = h[n];
        n && (l = r(h, function (b) {
          return a < b.end;
        })[0] || l);

        for (var h = Math.min(Math.max(a - l.start - l.delay, 0), l.duration) / l.duration, w = isNaN(h) ? 1 : l.easing(h, l.elasticity), h = l.to.strings, p = l.round, n = [], m = void 0, m = l.to.numbers.length, t = 0; t < m; t++) {
          var x = void 0,
              x = l.to.numbers[t],
              q = l.from.numbers[t],
              x = l.isPath ? Y(l.value, w * x) : q + w * (x - q);
          p && (l.isColor && 2 < t || (x = Math.round(x * p) / p));
          n.push(x);
        }

        if (l = h.length) for (m = h[0], w = 0; w < l; w++) {
          p = h[w + 1], t = n[w], isNaN(t) || (m = p ? m + (t + p) : m + (t + " "));
        } else m = n[0];
        ha[e.type](k.target, e.property, m, c, k.id);
        e.currentValue = m;
        b++;
      }

      if (b = Object.keys(c).length) for (d = 0; d < b; d++) {
        H || (H = E(document.body, "transform") ? "transform" : "-webkit-transform"), g.animatables[d].target.style[H] = c[d].join(" ");
      }
      g.currentTime = a;
      g.progress = a / g.duration * 100;
    }

    function f(a) {
      if (g[a]) g[a](g);
    }

    function e() {
      g.remaining && !0 !== g.remaining && g.remaining--;
    }

    function k(a) {
      var k = g.duration,
          n = g.offset,
          w = n + g.delay,
          r = g.currentTime,
          x = g.reversed,
          q = d(a);

      if (g.children.length) {
        var u = g.children,
            v = u.length;
        if (q >= g.currentTime) for (var G = 0; G < v; G++) {
          u[G].seek(q);
        } else for (; v--;) {
          u[v].seek(q);
        }
      }

      if (q >= w || !k) g.began || (g.began = !0, f("begin")), f("run");
      if (q > n && q < k) b(q);else if (q <= n && 0 !== r && (b(0), x && e()), q >= k && r !== k || !k) b(k), x || e();
      f("update");
      a >= k && (g.remaining ? (t = h, "alternate" === g.direction && (g.reversed = !g.reversed)) : (g.pause(), g.completed || (g.completed = !0, f("complete"), "Promise" in window && (p(), m = c()))), l = 0);
    }

    a = void 0 === a ? {} : a;
    var h,
        t,
        l = 0,
        p = null,
        m = c(),
        g = fa(a);

    g.reset = function () {
      var a = g.direction,
          c = g.loop;
      g.currentTime = 0;
      g.progress = 0;
      g.paused = !0;
      g.began = !1;
      g.completed = !1;
      g.reversed = "reverse" === a;
      g.remaining = "alternate" === a && 1 === c ? 2 : c;
      b(0);

      for (a = g.children.length; a--;) {
        g.children[a].reset();
      }
    };

    g.tick = function (a) {
      h = a;
      t || (t = h);
      k((l + h - t) * q.speed);
    };

    g.seek = function (a) {
      k(d(a));
    };

    g.pause = function () {
      var a = v.indexOf(g);
      -1 < a && v.splice(a, 1);
      g.paused = !0;
    };

    g.play = function () {
      g.paused && (g.paused = !1, t = 0, l = d(g.currentTime), v.push(g), B || ia());
    };

    g.reverse = function () {
      g.reversed = !g.reversed;
      t = 0;
      l = d(g.currentTime);
    };

    g.restart = function () {
      g.pause();
      g.reset();
      g.play();
    };

    g.finished = m;
    g.reset();
    g.autoplay && g.play();
    return g;
  }

  var ga = {
    update: void 0,
    begin: void 0,
    run: void 0,
    complete: void 0,
    loop: 1,
    direction: "normal",
    autoplay: !0,
    offset: 0
  },
      S = {
    duration: 1E3,
    delay: 0,
    easing: "easeOutElastic",
    elasticity: 500,
    round: 0
  },
      W = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),
      H,
      h = {
    arr: function arr(a) {
      return Array.isArray(a);
    },
    obj: function obj(a) {
      return -1 < Object.prototype.toString.call(a).indexOf("Object");
    },
    pth: function pth(a) {
      return h.obj(a) && a.hasOwnProperty("totalLength");
    },
    svg: function svg(a) {
      return a instanceof SVGElement;
    },
    dom: function dom(a) {
      return a.nodeType || h.svg(a);
    },
    str: function str(a) {
      return "string" === typeof a;
    },
    fnc: function fnc(a) {
      return "function" === typeof a;
    },
    und: function und(a) {
      return "undefined" === typeof a;
    },
    hex: function hex(a) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
    },
    rgb: function rgb(a) {
      return /^rgb/.test(a);
    },
    hsl: function hsl(a) {
      return /^hsl/.test(a);
    },
    col: function col(a) {
      return h.hex(a) || h.rgb(a) || h.hsl(a);
    }
  },
      A = function () {
    function a(a, d, b) {
      return (((1 - 3 * b + 3 * d) * a + (3 * b - 6 * d)) * a + 3 * d) * a;
    }

    return function (c, d, b, f) {
      if (0 <= c && 1 >= c && 0 <= b && 1 >= b) {
        var e = new Float32Array(11);
        if (c !== d || b !== f) for (var k = 0; 11 > k; ++k) {
          e[k] = a(.1 * k, c, b);
        }
        return function (k) {
          if (c === d && b === f) return k;
          if (0 === k) return 0;
          if (1 === k) return 1;

          for (var h = 0, l = 1; 10 !== l && e[l] <= k; ++l) {
            h += .1;
          }

          --l;
          var l = h + (k - e[l]) / (e[l + 1] - e[l]) * .1,
              n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c;

          if (.001 <= n) {
            for (h = 0; 4 > h; ++h) {
              n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c;
              if (0 === n) break;
              var m = a(l, c, b) - k,
                  l = l - m / n;
            }

            k = l;
          } else if (0 === n) k = l;else {
            var l = h,
                h = h + .1,
                g = 0;

            do {
              m = l + (h - l) / 2, n = a(m, c, b) - k, 0 < n ? h = m : l = m;
            } while (1e-7 < Math.abs(n) && 10 > ++g);

            k = m;
          }

          return a(k, d, f);
        };
      }
    };
  }(),
      Q = function () {
    function a(a, b) {
      return 0 === a || 1 === a ? a : -Math.pow(2, 10 * (a - 1)) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b);
    }

    var c = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
        d = {
      In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], a],
      Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function (b, c) {
        return 1 - a(1 - b, c);
      }],
      InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function (b, c) {
        return .5 > b ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2;
      }]
    },
        b = {
      linear: A(.25, .25, .75, .75)
    },
        f = {},
        e;

    for (e in d) {
      f.type = e, d[f.type].forEach(function (a) {
        return function (d, f) {
          b["ease" + a.type + c[f]] = h.fnc(d) ? d : A.apply($jscomp$this, d);
        };
      }(f)), f = {
        type: f.type
      };
    }

    return b;
  }(),
      ha = {
    css: function css(a, c, d) {
      return a.style[c] = d;
    },
    attribute: function attribute(a, c, d) {
      return a.setAttribute(c, d);
    },
    object: function object(a, c, d) {
      return a[c] = d;
    },
    transform: function transform(a, c, d, b, f) {
      b[f] || (b[f] = []);
      b[f].push(c + "(" + d + ")");
    }
  },
      v = [],
      B = 0,
      ia = function () {
    function a() {
      B = requestAnimationFrame(c);
    }

    function c(c) {
      var b = v.length;

      if (b) {
        for (var d = 0; d < b;) {
          v[d] && v[d].tick(c), d++;
        }

        a();
      } else cancelAnimationFrame(B), B = 0;
    }

    return a;
  }();

  q.version = "2.2.0";
  q.speed = 1;
  q.running = v;

  q.remove = function (a) {
    a = P(a);

    for (var c = v.length; c--;) {
      for (var d = v[c], b = d.animations, f = b.length; f--;) {
        u(a, b[f].animatable.target) && (b.splice(f, 1), b.length || d.pause());
      }
    }
  };

  q.getValue = K;

  q.path = function (a, c) {
    var d = h.str(a) ? e(a)[0] : a,
        b = c || 100;
    return function (a) {
      return {
        el: d,
        property: a,
        totalLength: N(d) * (b / 100)
      };
    };
  };

  q.setDashoffset = function (a) {
    var c = N(a);
    a.setAttribute("stroke-dasharray", c);
    return c;
  };

  q.bezier = A;
  q.easings = Q;

  q.timeline = function (a) {
    var c = q(a);
    c.pause();
    c.duration = 0;

    c.add = function (d) {
      c.children.forEach(function (a) {
        a.began = !0;
        a.completed = !0;
      });
      m(d).forEach(function (b) {
        var d = z(b, D(S, a || {}));
        d.targets = d.targets || a.targets;
        b = c.duration;
        var e = d.offset;
        d.autoplay = !1;
        d.direction = c.direction;
        d.offset = h.und(e) ? b : L(e, b);
        c.began = !0;
        c.completed = !0;
        c.seek(d.offset);
        d = q(d);
        d.began = !0;
        d.completed = !0;
        d.duration > b && (c.duration = d.duration);
        c.children.push(d);
      });
      c.seek(0);
      c.reset();
      c.autoplay && c.restart();
      return c;
    };

    return c;
  };

  q.random = function (a, c) {
    return Math.floor(Math.random() * (c - a + 1)) + a;
  };

  return q;
});

;

(function ($, anim) {
  'use strict';

  var _defaults = {
    accordion: true,
    onOpenStart: undefined,
    onOpenEnd: undefined,
    onCloseStart: undefined,
    onCloseEnd: undefined,
    inDuration: 300,
    outDuration: 300
  };
  /**
   * @class
   *
   */

  var Collapsible = function (_Component) {
    _inherits(Collapsible, _Component);
    /**
     * Construct Collapsible instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */


    function Collapsible(el, options) {
      _classCallCheck(this, Collapsible);

      var _this3 = _possibleConstructorReturn(this, (Collapsible.__proto__ || Object.getPrototypeOf(Collapsible)).call(this, Collapsible, el, options));

      _this3.el.M_Collapsible = _this3;
      /**
       * Options for the collapsible
       * @member Collapsible#options
       * @prop {Boolean} [accordion=false] - Type of the collapsible
       * @prop {Function} onOpenStart - Callback function called before collapsible is opened
       * @prop {Function} onOpenEnd - Callback function called after collapsible is opened
       * @prop {Function} onCloseStart - Callback function called before collapsible is closed
       * @prop {Function} onCloseEnd - Callback function called after collapsible is closed
       * @prop {Number} inDuration - Transition in duration in milliseconds.
       * @prop {Number} outDuration - Transition duration in milliseconds.
       */

      _this3.options = $.extend({}, Collapsible.defaults, options); // Setup tab indices

      _this3.$headers = _this3.$el.children('li').children('.collapsible-header');

      _this3.$headers.attr('tabindex', 0);

      _this3._setupEventHandlers(); // Open first active


      var $activeBodies = _this3.$el.children('li.active').children('.collapsible-body');

      if (_this3.options.accordion) {
        // Handle Accordion
        $activeBodies.first().css('display', 'block');
      } else {
        // Handle Expandables
        $activeBodies.css('display', 'block');
      }

      return _this3;
    }

    _createClass(Collapsible, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();

        this.el.M_Collapsible = undefined;
      }
      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        var _this4 = this;

        this._handleCollapsibleClickBound = this._handleCollapsibleClick.bind(this);
        this._handleCollapsibleKeydownBound = this._handleCollapsibleKeydown.bind(this);
        this.el.addEventListener('click', this._handleCollapsibleClickBound);
        this.$headers.each(function (header) {
          header.addEventListener('keydown', _this4._handleCollapsibleKeydownBound);
        });
      }
      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        var _this5 = this;

        this.el.removeEventListener('click', this._handleCollapsibleClickBound);
        this.$headers.each(function (header) {
          header.removeEventListener('keydown', _this5._handleCollapsibleKeydownBound);
        });
      }
      /**
       * Handle Collapsible Click
       * @param {Event} e
       */

    }, {
      key: "_handleCollapsibleClick",
      value: function _handleCollapsibleClick(e) {
        var $header = $(e.target).closest('.collapsible-header');

        if (e.target && $header.length) {
          var $collapsible = $header.closest('.collapsible');

          if ($collapsible[0] === this.el) {
            var $collapsibleLi = $header.closest('li');
            var $collapsibleLis = $collapsible.children('li');
            var isActive = $collapsibleLi[0].classList.contains('active');
            var index = $collapsibleLis.index($collapsibleLi);

            if (isActive) {
              this.close(index);
            } else {
              this.open(index);
            }
          }
        }
      }
      /**
       * Handle Collapsible Keydown
       * @param {Event} e
       */

    }, {
      key: "_handleCollapsibleKeydown",
      value: function _handleCollapsibleKeydown(e) {
        if (e.keyCode === 13) {
          this._handleCollapsibleClickBound(e);
        }
      }
      /**
       * Animate in collapsible slide
       * @param {Number} index - 0th index of slide
       */

    }, {
      key: "_animateIn",
      value: function _animateIn(index) {
        var _this6 = this;

        var $collapsibleLi = this.$el.children('li').eq(index);

        if ($collapsibleLi.length) {
          var $body = $collapsibleLi.children('.collapsible-body');
          anim.remove($body[0]);
          $body.css({
            display: 'block',
            overflow: 'hidden',
            height: 0,
            paddingTop: '',
            paddingBottom: ''
          });
          var pTop = $body.css('padding-top');
          var pBottom = $body.css('padding-bottom');
          var finalHeight = $body[0].scrollHeight;
          $body.css({
            paddingTop: 0,
            paddingBottom: 0
          });
          anim({
            targets: $body[0],
            height: finalHeight,
            paddingTop: pTop,
            paddingBottom: pBottom,
            duration: this.options.inDuration,
            easing: 'easeInOutCubic',
            complete: function complete(anim) {
              $body.css({
                overflow: '',
                paddingTop: '',
                paddingBottom: '',
                height: ''
              }); // onOpenEnd callback

              if (typeof _this6.options.onOpenEnd === 'function') {
                _this6.options.onOpenEnd.call(_this6, $collapsibleLi[0]);
              }
            }
          });
        }
      }
      /**
       * Animate out collapsible slide
       * @param {Number} index - 0th index of slide to open
       */

    }, {
      key: "_animateOut",
      value: function _animateOut(index) {
        var _this7 = this;

        var $collapsibleLi = this.$el.children('li').eq(index);

        if ($collapsibleLi.length) {
          var $body = $collapsibleLi.children('.collapsible-body');
          anim.remove($body[0]);
          $body.css('overflow', 'hidden');
          anim({
            targets: $body[0],
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            duration: this.options.outDuration,
            easing: 'easeInOutCubic',
            complete: function complete() {
              $body.css({
                height: '',
                overflow: '',
                padding: '',
                display: ''
              }); // onCloseEnd callback

              if (typeof _this7.options.onCloseEnd === 'function') {
                _this7.options.onCloseEnd.call(_this7, $collapsibleLi[0]);
              }
            }
          });
        }
      }
      /**
       * Open Collapsible
       * @param {Number} index - 0th index of slide
       */

    }, {
      key: "open",
      value: function open(index) {
        var _this8 = this;

        var $collapsibleLi = this.$el.children('li').eq(index);

        if ($collapsibleLi.length && !$collapsibleLi[0].classList.contains('active')) {
          // onOpenStart callback
          if (typeof this.options.onOpenStart === 'function') {
            this.options.onOpenStart.call(this, $collapsibleLi[0]);
          } // Handle accordion behavior


          if (this.options.accordion) {
            var $collapsibleLis = this.$el.children('li');
            var $activeLis = this.$el.children('li.active');
            $activeLis.each(function (el) {
              var index = $collapsibleLis.index($(el));

              _this8.close(index);
            });
          } // Animate in


          $collapsibleLi[0].classList.add('active');

          this._animateIn(index);
        }
      }
      /**
       * Close Collapsible
       * @param {Number} index - 0th index of slide
       */

    }, {
      key: "close",
      value: function close(index) {
        var $collapsibleLi = this.$el.children('li').eq(index);

        if ($collapsibleLi.length && $collapsibleLi[0].classList.contains('active')) {
          // onCloseStart callback
          if (typeof this.options.onCloseStart === 'function') {
            this.options.onCloseStart.call(this, $collapsibleLi[0]);
          } // Animate out


          $collapsibleLi[0].classList.remove('active');

          this._animateOut(index);
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Collapsible.__proto__ || Object.getPrototypeOf(Collapsible), "init", this).call(this, this, els, options);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Collapsible;
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return Collapsible;
  }(Component);

  M.Collapsible = Collapsible;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Collapsible, 'collapsible', 'M_Collapsible');
  }
})(cash, M.anime);

;

(function ($, anim) {
  'use strict';

  var _defaults = {
    alignment: 'left',
    autoFocus: true,
    constrainWidth: true,
    container: null,
    coverTrigger: true,
    closeOnClick: true,
    hover: false,
    inDuration: 150,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    onItemClick: null
  };
  /**
   * @class
   */

  var Dropdown = function (_Component2) {
    _inherits(Dropdown, _Component2);

    function Dropdown(el, options) {
      _classCallCheck(this, Dropdown);

      var _this9 = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, Dropdown, el, options));

      _this9.el.M_Dropdown = _this9;

      Dropdown._dropdowns.push(_this9);

      _this9.id = M.getIdFromTrigger(el);
      _this9.dropdownEl = document.getElementById(_this9.id);
      _this9.$dropdownEl = $(_this9.dropdownEl);
      /**
       * Options for the dropdown
       * @member Dropdown#options
       * @prop {String} [alignment='left'] - Edge which the dropdown is aligned to
       * @prop {Boolean} [autoFocus=true] - Automatically focus dropdown el for keyboard
       * @prop {Boolean} [constrainWidth=true] - Constrain width to width of the button
       * @prop {Element} container - Container element to attach dropdown to (optional)
       * @prop {Boolean} [coverTrigger=true] - Place dropdown over trigger
       * @prop {Boolean} [closeOnClick=true] - Close on click of dropdown item
       * @prop {Boolean} [hover=false] - Open dropdown on hover
       * @prop {Number} [inDuration=150] - Duration of open animation in ms
       * @prop {Number} [outDuration=250] - Duration of close animation in ms
       * @prop {Function} onOpenStart - Function called when dropdown starts opening
       * @prop {Function} onOpenEnd - Function called when dropdown finishes opening
       * @prop {Function} onCloseStart - Function called when dropdown starts closing
       * @prop {Function} onCloseEnd - Function called when dropdown finishes closing
       */

      _this9.options = $.extend({}, Dropdown.defaults, options);
      /**
       * Describes open/close state of dropdown
       * @type {Boolean}
       */

      _this9.isOpen = false;
      /**
       * Describes if dropdown content is scrollable
       * @type {Boolean}
       */

      _this9.isScrollable = false;
      /**
       * Describes if touch moving on dropdown content
       * @type {Boolean}
       */

      _this9.isTouchMoving = false;
      _this9.focusedIndex = -1;
      _this9.filterQuery = []; // Move dropdown-content after dropdown-trigger

      if (!!_this9.options.container) {
        $(_this9.options.container).append(_this9.dropdownEl);
      } else {
        _this9.$el.after(_this9.dropdownEl);
      }

      _this9._makeDropdownFocusable();

      _this9._resetFilterQueryBound = _this9._resetFilterQuery.bind(_this9);
      _this9._handleDocumentClickBound = _this9._handleDocumentClick.bind(_this9);
      _this9._handleDocumentTouchmoveBound = _this9._handleDocumentTouchmove.bind(_this9);
      _this9._handleDropdownClickBound = _this9._handleDropdownClick.bind(_this9);
      _this9._handleDropdownKeydownBound = _this9._handleDropdownKeydown.bind(_this9);
      _this9._handleTriggerKeydownBound = _this9._handleTriggerKeydown.bind(_this9);

      _this9._setupEventHandlers();

      return _this9;
    }

    _createClass(Dropdown, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        this._resetDropdownStyles();

        this._removeEventHandlers();

        Dropdown._dropdowns.splice(Dropdown._dropdowns.indexOf(this), 1);

        this.el.M_Dropdown = undefined;
      }
      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        // Trigger keydown handler
        this.el.addEventListener('keydown', this._handleTriggerKeydownBound); // Item click handler

        this.dropdownEl.addEventListener('click', this._handleDropdownClickBound); // Hover event handlers

        if (this.options.hover) {
          this._handleMouseEnterBound = this._handleMouseEnter.bind(this);
          this.el.addEventListener('mouseenter', this._handleMouseEnterBound);
          this._handleMouseLeaveBound = this._handleMouseLeave.bind(this);
          this.el.addEventListener('mouseleave', this._handleMouseLeaveBound);
          this.dropdownEl.addEventListener('mouseleave', this._handleMouseLeaveBound); // Click event handlers
        } else {
          this._handleClickBound = this._handleClick.bind(this);
          this.el.addEventListener('click', this._handleClickBound);
        }
      }
      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('keydown', this._handleTriggerKeydownBound);
        this.dropdownEl.removeEventListener('click', this._handleDropdownClickBound);

        if (this.options.hover) {
          this.el.removeEventListener('mouseenter', this._handleMouseEnterBound);
          this.el.removeEventListener('mouseleave', this._handleMouseLeaveBound);
          this.dropdownEl.removeEventListener('mouseleave', this._handleMouseLeaveBound);
        } else {
          this.el.removeEventListener('click', this._handleClickBound);
        }
      }
    }, {
      key: "_setupTemporaryEventHandlers",
      value: function _setupTemporaryEventHandlers() {
        // Use capture phase event handler to prevent click
        document.body.addEventListener('click', this._handleDocumentClickBound, true);
        document.body.addEventListener('touchend', this._handleDocumentClickBound);
        document.body.addEventListener('touchmove', this._handleDocumentTouchmoveBound);
        this.dropdownEl.addEventListener('keydown', this._handleDropdownKeydownBound);
      }
    }, {
      key: "_removeTemporaryEventHandlers",
      value: function _removeTemporaryEventHandlers() {
        // Use capture phase event handler to prevent click
        document.body.removeEventListener('click', this._handleDocumentClickBound, true);
        document.body.removeEventListener('touchend', this._handleDocumentClickBound);
        document.body.removeEventListener('touchmove', this._handleDocumentTouchmoveBound);
        this.dropdownEl.removeEventListener('keydown', this._handleDropdownKeydownBound);
      }
    }, {
      key: "_handleClick",
      value: function _handleClick(e) {
        e.preventDefault();
        this.open();
      }
    }, {
      key: "_handleMouseEnter",
      value: function _handleMouseEnter() {
        this.open();
      }
    }, {
      key: "_handleMouseLeave",
      value: function _handleMouseLeave(e) {
        var toEl = e.toElement || e.relatedTarget;
        var leaveToDropdownContent = !!$(toEl).closest('.dropdown-content').length;
        var leaveToActiveDropdownTrigger = false;
        var $closestTrigger = $(toEl).closest('.dropdown-trigger');

        if ($closestTrigger.length && !!$closestTrigger[0].M_Dropdown && $closestTrigger[0].M_Dropdown.isOpen) {
          leaveToActiveDropdownTrigger = true;
        } // Close hover dropdown if mouse did not leave to either active dropdown-trigger or dropdown-content


        if (!leaveToActiveDropdownTrigger && !leaveToDropdownContent) {
          this.close();
        }
      }
    }, {
      key: "_handleDocumentClick",
      value: function _handleDocumentClick(e) {
        var _this10 = this;

        var $target = $(e.target);

        if (this.options.closeOnClick && $target.closest('.dropdown-content').length && !this.isTouchMoving) {
          // isTouchMoving to check if scrolling on mobile.
          setTimeout(function () {
            _this10.close();
          }, 0);
        } else if ($target.closest('.dropdown-trigger').length || !$target.closest('.dropdown-content').length) {
          setTimeout(function () {
            _this10.close();
          }, 0);
        }

        this.isTouchMoving = false;
      }
    }, {
      key: "_handleTriggerKeydown",
      value: function _handleTriggerKeydown(e) {
        // ARROW DOWN OR ENTER WHEN SELECT IS CLOSED - open Dropdown
        if ((e.which === M.keys.ARROW_DOWN || e.which === M.keys.ENTER) && !this.isOpen) {
          e.preventDefault();
          this.open();
        }
      }
      /**
       * Handle Document Touchmove
       * @param {Event} e
       */

    }, {
      key: "_handleDocumentTouchmove",
      value: function _handleDocumentTouchmove(e) {
        var $target = $(e.target);

        if ($target.closest('.dropdown-content').length) {
          this.isTouchMoving = true;
        }
      }
      /**
       * Handle Dropdown Click
       * @param {Event} e
       */

    }, {
      key: "_handleDropdownClick",
      value: function _handleDropdownClick(e) {
        // onItemClick callback
        if (typeof this.options.onItemClick === 'function') {
          var itemEl = $(e.target).closest('li')[0];
          this.options.onItemClick.call(this, itemEl);
        }
      }
      /**
       * Handle Dropdown Keydown
       * @param {Event} e
       */

    }, {
      key: "_handleDropdownKeydown",
      value: function _handleDropdownKeydown(e) {
        if (e.which === M.keys.TAB) {
          e.preventDefault();
          this.close(); // Navigate down dropdown list
        } else if ((e.which === M.keys.ARROW_DOWN || e.which === M.keys.ARROW_UP) && this.isOpen) {
          e.preventDefault();
          var direction = e.which === M.keys.ARROW_DOWN ? 1 : -1;
          var newFocusedIndex = this.focusedIndex;
          var foundNewIndex = false;

          do {
            newFocusedIndex = newFocusedIndex + direction;

            if (!!this.dropdownEl.children[newFocusedIndex] && this.dropdownEl.children[newFocusedIndex].tabIndex !== -1) {
              foundNewIndex = true;
              break;
            }
          } while (newFocusedIndex < this.dropdownEl.children.length && newFocusedIndex >= 0);

          if (foundNewIndex) {
            this.focusedIndex = newFocusedIndex;

            this._focusFocusedItem();
          } // ENTER selects choice on focused item

        } else if (e.which === M.keys.ENTER && this.isOpen) {
          // Search for <a> and <button>
          var focusedElement = this.dropdownEl.children[this.focusedIndex];
          var $activatableElement = $(focusedElement).find('a, button').first(); // Click a or button tag if exists, otherwise click li tag

          if (!!$activatableElement.length) {
            $activatableElement[0].click();
          } else if (!!focusedElement) {
            focusedElement.click();
          } // Close dropdown on ESC

        } else if (e.which === M.keys.ESC && this.isOpen) {
          e.preventDefault();
          this.close();
        } // CASE WHEN USER TYPE LETTERS


        var letter = String.fromCharCode(e.which).toLowerCase(),
            nonLetters = [9, 13, 27, 38, 40];

        if (letter && nonLetters.indexOf(e.which) === -1) {
          this.filterQuery.push(letter);
          var string = this.filterQuery.join(''),
              newOptionEl = $(this.dropdownEl).find('li').filter(function (el) {
            return $(el).text().toLowerCase().indexOf(string) === 0;
          })[0];

          if (newOptionEl) {
            this.focusedIndex = $(newOptionEl).index();

            this._focusFocusedItem();
          }
        }

        this.filterTimeout = setTimeout(this._resetFilterQueryBound, 1000);
      }
      /**
       * Setup dropdown
       */

    }, {
      key: "_resetFilterQuery",
      value: function _resetFilterQuery() {
        this.filterQuery = [];
      }
    }, {
      key: "_resetDropdownStyles",
      value: function _resetDropdownStyles() {
        this.$dropdownEl.css({
          display: '',
          width: '',
          height: '',
          left: '',
          top: '',
          'transform-origin': '',
          transform: '',
          opacity: ''
        });
      }
    }, {
      key: "_makeDropdownFocusable",
      value: function _makeDropdownFocusable() {
        // Needed for arrow key navigation
        this.dropdownEl.tabIndex = 0; // Only set tabindex if it hasn't been set by user

        $(this.dropdownEl).children().each(function (el) {
          if (!el.getAttribute('tabindex')) {
            el.setAttribute('tabindex', 0);
          }
        });
      }
    }, {
      key: "_focusFocusedItem",
      value: function _focusFocusedItem() {
        if (this.focusedIndex >= 0 && this.focusedIndex < this.dropdownEl.children.length && this.options.autoFocus) {
          this.dropdownEl.children[this.focusedIndex].focus();
        }
      }
    }, {
      key: "_getDropdownPosition",
      value: function _getDropdownPosition() {
        var offsetParentBRect = this.el.offsetParent.getBoundingClientRect();
        var triggerBRect = this.el.getBoundingClientRect();
        var dropdownBRect = this.dropdownEl.getBoundingClientRect();
        var idealHeight = dropdownBRect.height;
        var idealWidth = dropdownBRect.width;
        var idealXPos = triggerBRect.left - dropdownBRect.left;
        var idealYPos = triggerBRect.top - dropdownBRect.top;
        var dropdownBounds = {
          left: idealXPos,
          top: idealYPos,
          height: idealHeight,
          width: idealWidth
        }; // Countainer here will be closest ancestor with overflow: hidden

        var closestOverflowParent = !!this.dropdownEl.offsetParent ? this.dropdownEl.offsetParent : this.dropdownEl.parentNode;
        var alignments = M.checkPossibleAlignments(this.el, closestOverflowParent, dropdownBounds, this.options.coverTrigger ? 0 : triggerBRect.height);
        var verticalAlignment = 'top';
        var horizontalAlignment = this.options.alignment;
        idealYPos += this.options.coverTrigger ? 0 : triggerBRect.height; // Reset isScrollable

        this.isScrollable = false;

        if (!alignments.top) {
          if (alignments.bottom) {
            verticalAlignment = 'bottom';
          } else {
            this.isScrollable = true; // Determine which side has most space and cutoff at correct height

            if (alignments.spaceOnTop > alignments.spaceOnBottom) {
              verticalAlignment = 'bottom';
              idealHeight += alignments.spaceOnTop;
              idealYPos -= alignments.spaceOnTop;
            } else {
              idealHeight += alignments.spaceOnBottom;
            }
          }
        } // If preferred horizontal alignment is possible


        if (!alignments[horizontalAlignment]) {
          var oppositeAlignment = horizontalAlignment === 'left' ? 'right' : 'left';

          if (alignments[oppositeAlignment]) {
            horizontalAlignment = oppositeAlignment;
          } else {
            // Determine which side has most space and cutoff at correct height
            if (alignments.spaceOnLeft > alignments.spaceOnRight) {
              horizontalAlignment = 'right';
              idealWidth += alignments.spaceOnLeft;
              idealXPos -= alignments.spaceOnLeft;
            } else {
              horizontalAlignment = 'left';
              idealWidth += alignments.spaceOnRight;
            }
          }
        }

        if (verticalAlignment === 'bottom') {
          idealYPos = idealYPos - dropdownBRect.height + (this.options.coverTrigger ? triggerBRect.height : 0);
        }

        if (horizontalAlignment === 'right') {
          idealXPos = idealXPos - dropdownBRect.width + triggerBRect.width;
        }

        return {
          x: idealXPos,
          y: idealYPos,
          verticalAlignment: verticalAlignment,
          horizontalAlignment: horizontalAlignment,
          height: idealHeight,
          width: idealWidth
        };
      }
      /**
       * Animate in dropdown
       */

    }, {
      key: "_animateIn",
      value: function _animateIn() {
        var _this11 = this;

        anim.remove(this.dropdownEl);
        anim({
          targets: this.dropdownEl,
          opacity: {
            value: [0, 1],
            easing: 'easeOutQuad'
          },
          scaleX: [0.3, 1],
          scaleY: [0.3, 1],
          duration: this.options.inDuration,
          easing: 'easeOutQuint',
          complete: function complete(anim) {
            if (_this11.options.autoFocus) {
              _this11.dropdownEl.focus();
            } // onOpenEnd callback


            if (typeof _this11.options.onOpenEnd === 'function') {
              _this11.options.onOpenEnd.call(_this11, _this11.el);
            }
          }
        });
      }
      /**
       * Animate out dropdown
       */

    }, {
      key: "_animateOut",
      value: function _animateOut() {
        var _this12 = this;

        anim.remove(this.dropdownEl);
        anim({
          targets: this.dropdownEl,
          opacity: {
            value: 0,
            easing: 'easeOutQuint'
          },
          scaleX: 0.3,
          scaleY: 0.3,
          duration: this.options.outDuration,
          easing: 'easeOutQuint',
          complete: function complete(anim) {
            _this12._resetDropdownStyles(); // onCloseEnd callback


            if (typeof _this12.options.onCloseEnd === 'function') {
              _this12.options.onCloseEnd.call(_this12, _this12.el);
            }
          }
        });
      }
      /**
       * Place dropdown
       */

    }, {
      key: "_placeDropdown",
      value: function _placeDropdown() {
        // Set width before calculating positionInfo
        var idealWidth = this.options.constrainWidth ? this.el.getBoundingClientRect().width : this.dropdownEl.getBoundingClientRect().width;
        this.dropdownEl.style.width = idealWidth + 'px';

        var positionInfo = this._getDropdownPosition();

        this.dropdownEl.style.left = positionInfo.x + 'px';
        this.dropdownEl.style.top = positionInfo.y + 'px';
        this.dropdownEl.style.height = positionInfo.height + 'px';
        this.dropdownEl.style.width = positionInfo.width + 'px';
        this.dropdownEl.style.transformOrigin = (positionInfo.horizontalAlignment === 'left' ? '0' : '100%') + " " + (positionInfo.verticalAlignment === 'top' ? '0' : '100%');
      }
      /**
       * Open Dropdown
       */

    }, {
      key: "open",
      value: function open() {
        if (this.isOpen) {
          return;
        }

        this.isOpen = true; // onOpenStart callback

        if (typeof this.options.onOpenStart === 'function') {
          this.options.onOpenStart.call(this, this.el);
        } // Reset styles


        this._resetDropdownStyles();

        this.dropdownEl.style.display = 'block';

        this._placeDropdown();

        this._animateIn();

        this._setupTemporaryEventHandlers();
      }
      /**
       * Close Dropdown
       */

    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        this.isOpen = false;
        this.focusedIndex = -1; // onCloseStart callback

        if (typeof this.options.onCloseStart === 'function') {
          this.options.onCloseStart.call(this, this.el);
        }

        this._animateOut();

        this._removeTemporaryEventHandlers();

        if (this.options.autoFocus) {
          this.el.focus();
        }
      }
      /**
       * Recalculate dimensions
       */

    }, {
      key: "recalculateDimensions",
      value: function recalculateDimensions() {
        if (this.isOpen) {
          this.$dropdownEl.css({
            width: '',
            height: '',
            left: '',
            top: '',
            'transform-origin': ''
          });

          this._placeDropdown();
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Dropdown.__proto__ || Object.getPrototypeOf(Dropdown), "init", this).call(this, this, els, options);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Dropdown;
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return Dropdown;
  }(Component);
  /**
   * @static
   * @memberof Dropdown
   */


  Dropdown._dropdowns = [];
  M.Dropdown = Dropdown;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Dropdown, 'dropdown', 'M_Dropdown');
  }
})(cash, M.anime);

;

(function ($, anim) {
  'use strict';

  var _defaults = {
    opacity: 0.5,
    inDuration: 250,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true,
    dismissible: true,
    startingTop: '4%',
    endingTop: '10%'
  };
  /**
   * @class
   *
   */

  var Modal = function (_Component3) {
    _inherits(Modal, _Component3);
    /**
     * Construct Modal instance and set up overlay
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */


    function Modal(el, options) {
      _classCallCheck(this, Modal);

      var _this13 = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, Modal, el, options));

      _this13.el.M_Modal = _this13;
      /**
       * Options for the modal
       * @member Modal#options
       * @prop {Number} [opacity=0.5] - Opacity of the modal overlay
       * @prop {Number} [inDuration=250] - Length in ms of enter transition
       * @prop {Number} [outDuration=250] - Length in ms of exit transition
       * @prop {Function} onOpenStart - Callback function called before modal is opened
       * @prop {Function} onOpenEnd - Callback function called after modal is opened
       * @prop {Function} onCloseStart - Callback function called before modal is closed
       * @prop {Function} onCloseEnd - Callback function called after modal is closed
       * @prop {Boolean} [dismissible=true] - Allow modal to be dismissed by keyboard or overlay click
       * @prop {String} [startingTop='4%'] - startingTop
       * @prop {String} [endingTop='10%'] - endingTop
       */

      _this13.options = $.extend({}, Modal.defaults, options);
      /**
       * Describes open/close state of modal
       * @type {Boolean}
       */

      _this13.isOpen = false;
      _this13.id = _this13.$el.attr('id');
      _this13._openingTrigger = undefined;
      _this13.$overlay = $('<div class="modal-overlay"></div>');
      _this13.el.tabIndex = 0;
      _this13._nthModalOpened = 0;
      Modal._count++;

      _this13._setupEventHandlers();

      return _this13;
    }

    _createClass(Modal, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        Modal._count--;

        this._removeEventHandlers();

        this.el.removeAttribute('style');
        this.$overlay.remove();
        this.el.M_Modal = undefined;
      }
      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleOverlayClickBound = this._handleOverlayClick.bind(this);
        this._handleModalCloseClickBound = this._handleModalCloseClick.bind(this);

        if (Modal._count === 1) {
          document.body.addEventListener('click', this._handleTriggerClick);
        }

        this.$overlay[0].addEventListener('click', this._handleOverlayClickBound);
        this.el.addEventListener('click', this._handleModalCloseClickBound);
      }
      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        if (Modal._count === 0) {
          document.body.removeEventListener('click', this._handleTriggerClick);
        }

        this.$overlay[0].removeEventListener('click', this._handleOverlayClickBound);
        this.el.removeEventListener('click', this._handleModalCloseClickBound);
      }
      /**
       * Handle Trigger Click
       * @param {Event} e
       */

    }, {
      key: "_handleTriggerClick",
      value: function _handleTriggerClick(e) {
        var $trigger = $(e.target).closest('.modal-trigger');

        if ($trigger.length) {
          var modalId = M.getIdFromTrigger($trigger[0]);
          var modalInstance = document.getElementById(modalId).M_Modal;

          if (modalInstance) {
            modalInstance.open($trigger);
          }

          e.preventDefault();
        }
      }
      /**
       * Handle Overlay Click
       */

    }, {
      key: "_handleOverlayClick",
      value: function _handleOverlayClick() {
        if (this.options.dismissible) {
          this.close();
        }
      }
      /**
       * Handle Modal Close Click
       * @param {Event} e
       */

    }, {
      key: "_handleModalCloseClick",
      value: function _handleModalCloseClick(e) {
        var $closeTrigger = $(e.target).closest('.modal-close');

        if ($closeTrigger.length) {
          this.close();
        }
      }
      /**
       * Handle Keydown
       * @param {Event} e
       */

    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(e) {
        // ESC key
        if (e.keyCode === 27 && this.options.dismissible) {
          this.close();
        }
      }
      /**
       * Handle Focus
       * @param {Event} e
       */

    }, {
      key: "_handleFocus",
      value: function _handleFocus(e) {
        // Only trap focus if this modal is the last model opened (prevents loops in nested modals).
        if (!this.el.contains(e.target) && this._nthModalOpened === Modal._modalsOpen) {
          this.el.focus();
        }
      }
      /**
       * Animate in modal
       */

    }, {
      key: "_animateIn",
      value: function _animateIn() {
        var _this14 = this; // Set initial styles


        $.extend(this.el.style, {
          display: 'block',
          opacity: 0
        });
        $.extend(this.$overlay[0].style, {
          display: 'block',
          opacity: 0
        }); // Animate overlay

        anim({
          targets: this.$overlay[0],
          opacity: this.options.opacity,
          duration: this.options.inDuration,
          easing: 'easeOutQuad'
        }); // Define modal animation options

        var enterAnimOptions = {
          targets: this.el,
          duration: this.options.inDuration,
          easing: 'easeOutCubic',
          // Handle modal onOpenEnd callback
          complete: function complete() {
            if (typeof _this14.options.onOpenEnd === 'function') {
              _this14.options.onOpenEnd.call(_this14, _this14.el, _this14._openingTrigger);
            }
          }
        }; // Bottom sheet animation

        if (this.el.classList.contains('bottom-sheet')) {
          $.extend(enterAnimOptions, {
            bottom: 0,
            opacity: 1
          });
          anim(enterAnimOptions); // Normal modal animation
        } else {
          $.extend(enterAnimOptions, {
            top: [this.options.startingTop, this.options.endingTop],
            opacity: 1,
            scaleX: [0.8, 1],
            scaleY: [0.8, 1]
          });
          anim(enterAnimOptions);
        }
      }
      /**
       * Animate out modal
       */

    }, {
      key: "_animateOut",
      value: function _animateOut() {
        var _this15 = this; // Animate overlay


        anim({
          targets: this.$overlay[0],
          opacity: 0,
          duration: this.options.outDuration,
          easing: 'easeOutQuart'
        }); // Define modal animation options

        var exitAnimOptions = {
          targets: this.el,
          duration: this.options.outDuration,
          easing: 'easeOutCubic',
          // Handle modal ready callback
          complete: function complete() {
            _this15.el.style.display = 'none';

            _this15.$overlay.remove(); // Call onCloseEnd callback


            if (typeof _this15.options.onCloseEnd === 'function') {
              _this15.options.onCloseEnd.call(_this15, _this15.el);
            }
          }
        }; // Bottom sheet animation

        if (this.el.classList.contains('bottom-sheet')) {
          $.extend(exitAnimOptions, {
            bottom: '-100%',
            opacity: 0
          });
          anim(exitAnimOptions); // Normal modal animation
        } else {
          $.extend(exitAnimOptions, {
            top: [this.options.endingTop, this.options.startingTop],
            opacity: 0,
            scaleX: 0.8,
            scaleY: 0.8
          });
          anim(exitAnimOptions);
        }
      }
      /**
       * Open Modal
       * @param {cash} [$trigger]
       */

    }, {
      key: "open",
      value: function open($trigger) {
        if (this.isOpen) {
          return;
        }

        this.isOpen = true;
        Modal._modalsOpen++;
        this._nthModalOpened = Modal._modalsOpen; // Set Z-Index based on number of currently open modals

        this.$overlay[0].style.zIndex = 1000 + Modal._modalsOpen * 2;
        this.el.style.zIndex = 1000 + Modal._modalsOpen * 2 + 1; // Set opening trigger, undefined indicates modal was opened by javascript

        this._openingTrigger = !!$trigger ? $trigger[0] : undefined; // onOpenStart callback

        if (typeof this.options.onOpenStart === 'function') {
          this.options.onOpenStart.call(this, this.el, this._openingTrigger);
        }

        if (this.options.preventScrolling) {
          document.body.style.overflow = 'hidden';
        }

        this.el.classList.add('open');
        this.el.insertAdjacentElement('afterend', this.$overlay[0]);

        if (this.options.dismissible) {
          this._handleKeydownBound = this._handleKeydown.bind(this);
          this._handleFocusBound = this._handleFocus.bind(this);
          document.addEventListener('keydown', this._handleKeydownBound);
          document.addEventListener('focus', this._handleFocusBound, true);
        }

        anim.remove(this.el);
        anim.remove(this.$overlay[0]);

        this._animateIn(); // Focus modal


        this.el.focus();
        return this;
      }
      /**
       * Close Modal
       */

    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        this.isOpen = false;
        Modal._modalsOpen--;
        this._nthModalOpened = 0; // Call onCloseStart callback

        if (typeof this.options.onCloseStart === 'function') {
          this.options.onCloseStart.call(this, this.el);
        }

        this.el.classList.remove('open'); // Enable body scrolling only if there are no more modals open.

        if (Modal._modalsOpen === 0) {
          document.body.style.overflow = '';
        }

        if (this.options.dismissible) {
          document.removeEventListener('keydown', this._handleKeydownBound);
          document.removeEventListener('focus', this._handleFocusBound, true);
        }

        anim.remove(this.el);
        anim.remove(this.$overlay[0]);

        this._animateOut();

        return this;
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Modal.__proto__ || Object.getPrototypeOf(Modal), "init", this).call(this, this, els, options);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Modal;
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return Modal;
  }(Component);
  /**
   * @static
   * @memberof Modal
   */


  Modal._modalsOpen = 0;
  /**
   * @static
   * @memberof Modal
   */

  Modal._count = 0;
  M.Modal = Modal;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Modal, 'modal', 'M_Modal');
  }
})(cash, M.anime);

;

(function ($, anim) {
  'use strict';

  var _defaults = {
    inDuration: 275,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null
  };
  /**
   * @class
   *
   */

  var Materialbox = function (_Component4) {
    _inherits(Materialbox, _Component4);
    /**
     * Construct Materialbox instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */


    function Materialbox(el, options) {
      _classCallCheck(this, Materialbox);

      var _this16 = _possibleConstructorReturn(this, (Materialbox.__proto__ || Object.getPrototypeOf(Materialbox)).call(this, Materialbox, el, options));

      _this16.el.M_Materialbox = _this16;
      /**
       * Options for the modal
       * @member Materialbox#options
       * @prop {Number} [inDuration=275] - Length in ms of enter transition
       * @prop {Number} [outDuration=200] - Length in ms of exit transition
       * @prop {Function} onOpenStart - Callback function called before materialbox is opened
       * @prop {Function} onOpenEnd - Callback function called after materialbox is opened
       * @prop {Function} onCloseStart - Callback function called before materialbox is closed
       * @prop {Function} onCloseEnd - Callback function called after materialbox is closed
       */

      _this16.options = $.extend({}, Materialbox.defaults, options);
      _this16.overlayActive = false;
      _this16.doneAnimating = true;
      _this16.placeholder = $('<div></div>').addClass('material-placeholder');
      _this16.originalWidth = 0;
      _this16.originalHeight = 0;
      _this16.originInlineStyles = _this16.$el.attr('style');
      _this16.caption = _this16.el.getAttribute('data-caption') || ''; // Wrap

      _this16.$el.before(_this16.placeholder);

      _this16.placeholder.append(_this16.$el);

      _this16._setupEventHandlers();

      return _this16;
    }

    _createClass(Materialbox, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();

        this.el.M_Materialbox = undefined; // Unwrap image

        $(this.placeholder).after(this.el).remove();
        this.$el.removeAttr('style');
      }
      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleMaterialboxClickBound = this._handleMaterialboxClick.bind(this);
        this.el.addEventListener('click', this._handleMaterialboxClickBound);
      }
      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('click', this._handleMaterialboxClickBound);
      }
      /**
       * Handle Materialbox Click
       * @param {Event} e
       */

    }, {
      key: "_handleMaterialboxClick",
      value: function _handleMaterialboxClick(e) {
        // If already modal, return to original
        if (this.doneAnimating === false || this.overlayActive && this.doneAnimating) {
          this.close();
        } else {
          this.open();
        }
      }
      /**
       * Handle Window Scroll
       */

    }, {
      key: "_handleWindowScroll",
      value: function _handleWindowScroll() {
        if (this.overlayActive) {
          this.close();
        }
      }
      /**
       * Handle Window Resize
       */

    }, {
      key: "_handleWindowResize",
      value: function _handleWindowResize() {
        if (this.overlayActive) {
          this.close();
        }
      }
      /**
       * Handle Window Resize
       * @param {Event} e
       */

    }, {
      key: "_handleWindowEscape",
      value: function _handleWindowEscape(e) {
        // ESC key
        if (e.keyCode === 27 && this.doneAnimating && this.overlayActive) {
          this.close();
        }
      }
      /**
       * Find ancestors with overflow: hidden; and make visible
       */

    }, {
      key: "_makeAncestorsOverflowVisible",
      value: function _makeAncestorsOverflowVisible() {
        this.ancestorsChanged = $();
        var ancestor = this.placeholder[0].parentNode;

        while (ancestor !== null && !$(ancestor).is(document)) {
          var curr = $(ancestor);

          if (curr.css('overflow') !== 'visible') {
            curr.css('overflow', 'visible');

            if (this.ancestorsChanged === undefined) {
              this.ancestorsChanged = curr;
            } else {
              this.ancestorsChanged = this.ancestorsChanged.add(curr);
            }
          }

          ancestor = ancestor.parentNode;
        }
      }
      /**
       * Animate image in
       */

    }, {
      key: "_animateImageIn",
      value: function _animateImageIn() {
        var _this17 = this;

        var animOptions = {
          targets: this.el,
          height: [this.originalHeight, this.newHeight],
          width: [this.originalWidth, this.newWidth],
          left: M.getDocumentScrollLeft() + this.windowWidth / 2 - this.placeholder.offset().left - this.newWidth / 2,
          top: M.getDocumentScrollTop() + this.windowHeight / 2 - this.placeholder.offset().top - this.newHeight / 2,
          duration: this.options.inDuration,
          easing: 'easeOutQuad',
          complete: function complete() {
            _this17.doneAnimating = true; // onOpenEnd callback

            if (typeof _this17.options.onOpenEnd === 'function') {
              _this17.options.onOpenEnd.call(_this17, _this17.el);
            }
          }
        }; // Override max-width or max-height if needed

        this.maxWidth = this.$el.css('max-width');
        this.maxHeight = this.$el.css('max-height');

        if (this.maxWidth !== 'none') {
          animOptions.maxWidth = this.newWidth;
        }

        if (this.maxHeight !== 'none') {
          animOptions.maxHeight = this.newHeight;
        }

        anim(animOptions);
      }
      /**
       * Animate image out
       */

    }, {
      key: "_animateImageOut",
      value: function _animateImageOut() {
        var _this18 = this;

        var animOptions = {
          targets: this.el,
          width: this.originalWidth,
          height: this.originalHeight,
          left: 0,
          top: 0,
          duration: this.options.outDuration,
          easing: 'easeOutQuad',
          complete: function complete() {
            _this18.placeholder.css({
              height: '',
              width: '',
              position: '',
              top: '',
              left: ''
            }); // Revert to width or height attribute


            if (_this18.attrWidth) {
              _this18.$el.attr('width', _this18.attrWidth);
            }

            if (_this18.attrHeight) {
              _this18.$el.attr('height', _this18.attrHeight);
            }

            _this18.$el.removeAttr('style');

            _this18.originInlineStyles && _this18.$el.attr('style', _this18.originInlineStyles); // Remove class

            _this18.$el.removeClass('active');

            _this18.doneAnimating = true; // Remove overflow overrides on ancestors

            if (_this18.ancestorsChanged.length) {
              _this18.ancestorsChanged.css('overflow', '');
            } // onCloseEnd callback


            if (typeof _this18.options.onCloseEnd === 'function') {
              _this18.options.onCloseEnd.call(_this18, _this18.el);
            }
          }
        };
        anim(animOptions);
      }
      /**
       * Update open and close vars
       */

    }, {
      key: "_updateVars",
      value: function _updateVars() {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        this.caption = this.el.getAttribute('data-caption') || '';
      }
      /**
       * Open Materialbox
       */

    }, {
      key: "open",
      value: function open() {
        var _this19 = this;

        this._updateVars();

        this.originalWidth = this.el.getBoundingClientRect().width;
        this.originalHeight = this.el.getBoundingClientRect().height; // Set states

        this.doneAnimating = false;
        this.$el.addClass('active');
        this.overlayActive = true; // onOpenStart callback

        if (typeof this.options.onOpenStart === 'function') {
          this.options.onOpenStart.call(this, this.el);
        } // Set positioning for placeholder


        this.placeholder.css({
          width: this.placeholder[0].getBoundingClientRect().width + 'px',
          height: this.placeholder[0].getBoundingClientRect().height + 'px',
          position: 'relative',
          top: 0,
          left: 0
        });

        this._makeAncestorsOverflowVisible(); // Set css on origin


        this.$el.css({
          position: 'absolute',
          'z-index': 1000,
          'will-change': 'left, top, width, height'
        }); // Change from width or height attribute to css

        this.attrWidth = this.$el.attr('width');
        this.attrHeight = this.$el.attr('height');

        if (this.attrWidth) {
          this.$el.css('width', this.attrWidth + 'px');
          this.$el.removeAttr('width');
        }

        if (this.attrHeight) {
          this.$el.css('width', this.attrHeight + 'px');
          this.$el.removeAttr('height');
        } // Add overlay


        this.$overlay = $('<div id="materialbox-overlay"></div>').css({
          opacity: 0
        }).one('click', function () {
          if (_this19.doneAnimating) {
            _this19.close();
          }
        }); // Put before in origin image to preserve z-index layering.

        this.$el.before(this.$overlay); // Set dimensions if needed

        var overlayOffset = this.$overlay[0].getBoundingClientRect();
        this.$overlay.css({
          width: this.windowWidth + 'px',
          height: this.windowHeight + 'px',
          left: -1 * overlayOffset.left + 'px',
          top: -1 * overlayOffset.top + 'px'
        });
        anim.remove(this.el);
        anim.remove(this.$overlay[0]); // Animate Overlay

        anim({
          targets: this.$overlay[0],
          opacity: 1,
          duration: this.options.inDuration,
          easing: 'easeOutQuad'
        }); // Add and animate caption if it exists

        if (this.caption !== '') {
          if (this.$photocaption) {
            anim.remove(this.$photoCaption[0]);
          }

          this.$photoCaption = $('<div class="materialbox-caption"></div>');
          this.$photoCaption.text(this.caption);
          $('body').append(this.$photoCaption);
          this.$photoCaption.css({
            display: 'inline'
          });
          anim({
            targets: this.$photoCaption[0],
            opacity: 1,
            duration: this.options.inDuration,
            easing: 'easeOutQuad'
          });
        } // Resize Image


        var ratio = 0;
        var widthPercent = this.originalWidth / this.windowWidth;
        var heightPercent = this.originalHeight / this.windowHeight;
        this.newWidth = 0;
        this.newHeight = 0;

        if (widthPercent > heightPercent) {
          ratio = this.originalHeight / this.originalWidth;
          this.newWidth = this.windowWidth * 0.9;
          this.newHeight = this.windowWidth * 0.9 * ratio;
        } else {
          ratio = this.originalWidth / this.originalHeight;
          this.newWidth = this.windowHeight * 0.9 * ratio;
          this.newHeight = this.windowHeight * 0.9;
        }

        this._animateImageIn(); // Handle Exit triggers


        this._handleWindowScrollBound = this._handleWindowScroll.bind(this);
        this._handleWindowResizeBound = this._handleWindowResize.bind(this);
        this._handleWindowEscapeBound = this._handleWindowEscape.bind(this);
        window.addEventListener('scroll', this._handleWindowScrollBound);
        window.addEventListener('resize', this._handleWindowResizeBound);
        window.addEventListener('keyup', this._handleWindowEscapeBound);
      }
      /**
       * Close Materialbox
       */

    }, {
      key: "close",
      value: function close() {
        var _this20 = this;

        this._updateVars();

        this.doneAnimating = false; // onCloseStart callback

        if (typeof this.options.onCloseStart === 'function') {
          this.options.onCloseStart.call(this, this.el);
        }

        anim.remove(this.el);
        anim.remove(this.$overlay[0]);

        if (this.caption !== '') {
          anim.remove(this.$photoCaption[0]);
        } // disable exit handlers


        window.removeEventListener('scroll', this._handleWindowScrollBound);
        window.removeEventListener('resize', this._handleWindowResizeBound);
        window.removeEventListener('keyup', this._handleWindowEscapeBound);
        anim({
          targets: this.$overlay[0],
          opacity: 0,
          duration: this.options.outDuration,
          easing: 'easeOutQuad',
          complete: function complete() {
            _this20.overlayActive = false;

            _this20.$overlay.remove();
          }
        });

        this._animateImageOut(); // Remove Caption + reset css settings on image


        if (this.caption !== '') {
          anim({
            targets: this.$photoCaption[0],
            opacity: 0,
            duration: this.options.outDuration,
            easing: 'easeOutQuad',
            complete: function complete() {
              _this20.$photoCaption.remove();
            }
          });
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Materialbox.__proto__ || Object.getPrototypeOf(Materialbox), "init", this).call(this, this, els, options);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Materialbox;
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return Materialbox;
  }(Component);

  M.Materialbox = Materialbox;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Materialbox, 'materialbox', 'M_Materialbox');
  }
})(cash, M.anime);

;

(function ($) {
  'use strict';

  var _defaults = {
    responsiveThreshold: 0 // breakpoint for swipeable

  };

  var Parallax = function (_Component5) {
    _inherits(Parallax, _Component5);

    function Parallax(el, options) {
      _classCallCheck(this, Parallax);

      var _this21 = _possibleConstructorReturn(this, (Parallax.__proto__ || Object.getPrototypeOf(Parallax)).call(this, Parallax, el, options));

      _this21.el.M_Parallax = _this21;
      /**
       * Options for the Parallax
       * @member Parallax#options
       * @prop {Number} responsiveThreshold
       */

      _this21.options = $.extend({}, Parallax.defaults, options);
      _this21._enabled = window.innerWidth > _this21.options.responsiveThreshold;
      _this21.$img = _this21.$el.find('img').first();

      _this21.$img.each(function () {
        var el = this;
        if (el.complete) $(el).trigger('load');
      });

      _this21._updateParallax();

      _this21._setupEventHandlers();

      _this21._setupStyles();

      Parallax._parallaxes.push(_this21);

      return _this21;
    }

    _createClass(Parallax, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        Parallax._parallaxes.splice(Parallax._parallaxes.indexOf(this), 1);

        this.$img[0].style.transform = '';

        this._removeEventHandlers();

        this.$el[0].M_Parallax = undefined;
      }
    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleImageLoadBound = this._handleImageLoad.bind(this);
        this.$img[0].addEventListener('load', this._handleImageLoadBound);

        if (Parallax._parallaxes.length === 0) {
          Parallax._handleScrollThrottled = M.throttle(Parallax._handleScroll, 5);
          window.addEventListener('scroll', Parallax._handleScrollThrottled);
          Parallax._handleWindowResizeThrottled = M.throttle(Parallax._handleWindowResize, 5);
          window.addEventListener('resize', Parallax._handleWindowResizeThrottled);
        }
      }
    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.$img[0].removeEventListener('load', this._handleImageLoadBound);

        if (Parallax._parallaxes.length === 0) {
          window.removeEventListener('scroll', Parallax._handleScrollThrottled);
          window.removeEventListener('resize', Parallax._handleWindowResizeThrottled);
        }
      }
    }, {
      key: "_setupStyles",
      value: function _setupStyles() {
        this.$img[0].style.opacity = 1;
      }
    }, {
      key: "_handleImageLoad",
      value: function _handleImageLoad() {
        this._updateParallax();
      }
    }, {
      key: "_updateParallax",
      value: function _updateParallax() {
        var containerHeight = this.$el.height() > 0 ? this.el.parentNode.offsetHeight : 500;
        var imgHeight = this.$img[0].offsetHeight;
        var parallaxDist = imgHeight - containerHeight;
        var bottom = this.$el.offset().top + containerHeight;
        var top = this.$el.offset().top;
        var scrollTop = M.getDocumentScrollTop();
        var windowHeight = window.innerHeight;
        var windowBottom = scrollTop + windowHeight;
        var percentScrolled = (windowBottom - top) / (containerHeight + windowHeight);
        var parallax = parallaxDist * percentScrolled;

        if (!this._enabled) {
          this.$img[0].style.transform = '';
        } else if (bottom > scrollTop && top < scrollTop + windowHeight) {
          this.$img[0].style.transform = "translate3D(-50%, " + parallax + "px, 0)";
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Parallax.__proto__ || Object.getPrototypeOf(Parallax), "init", this).call(this, this, els, options);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Parallax;
      }
    }, {
      key: "_handleScroll",
      value: function _handleScroll() {
        for (var i = 0; i < Parallax._parallaxes.length; i++) {
          var parallaxInstance = Parallax._parallaxes[i];

          parallaxInstance._updateParallax.call(parallaxInstance);
        }
      }
    }, {
      key: "_handleWindowResize",
      value: function _handleWindowResize() {
        for (var i = 0; i < Parallax._parallaxes.length; i++) {
          var parallaxInstance = Parallax._parallaxes[i];
          parallaxInstance._enabled = window.innerWidth > parallaxInstance.options.responsiveThreshold;
        }
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return Parallax;
  }(Component);
  /**
   * @static
   * @memberof Parallax
   */


  Parallax._parallaxes = [];
  M.Parallax = Parallax;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Parallax, 'parallax', 'M_Parallax');
  }
})(cash);

;

(function ($, anim) {
  'use strict';

  var _defaults = {
    duration: 300,
    onShow: null,
    swipeable: false,
    responsiveThreshold: Infinity // breakpoint for swipeable

  };
  /**
   * @class
   *
   */

  var Tabs = function (_Component6) {
    _inherits(Tabs, _Component6);
    /**
     * Construct Tabs instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */


    function Tabs(el, options) {
      _classCallCheck(this, Tabs);

      var _this22 = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, Tabs, el, options));

      _this22.el.M_Tabs = _this22;
      /**
       * Options for the Tabs
       * @member Tabs#options
       * @prop {Number} duration
       * @prop {Function} onShow
       * @prop {Boolean} swipeable
       * @prop {Number} responsiveThreshold
       */

      _this22.options = $.extend({}, Tabs.defaults, options); // Setup

      _this22.$tabLinks = _this22.$el.children('li.tab').children('a');
      _this22.index = 0;

      _this22._setupActiveTabLink(); // Setup tabs content


      if (_this22.options.swipeable) {
        _this22._setupSwipeableTabs();
      } else {
        _this22._setupNormalTabs();
      } // Setup tabs indicator after content to ensure accurate widths


      _this22._setTabsAndTabWidth();

      _this22._createIndicator();

      _this22._setupEventHandlers();

      return _this22;
    }

    _createClass(Tabs, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();

        this._indicator.parentNode.removeChild(this._indicator);

        if (this.options.swipeable) {
          this._teardownSwipeableTabs();
        } else {
          this._teardownNormalTabs();
        }

        this.$el[0].M_Tabs = undefined;
      }
      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleWindowResizeBound = this._handleWindowResize.bind(this);
        window.addEventListener('resize', this._handleWindowResizeBound);
        this._handleTabClickBound = this._handleTabClick.bind(this);
        this.el.addEventListener('click', this._handleTabClickBound);
      }
      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        window.removeEventListener('resize', this._handleWindowResizeBound);
        this.el.removeEventListener('click', this._handleTabClickBound);
      }
      /**
       * Handle window Resize
       */

    }, {
      key: "_handleWindowResize",
      value: function _handleWindowResize() {
        this._setTabsAndTabWidth();

        if (this.tabWidth !== 0 && this.tabsWidth !== 0) {
          this._indicator.style.left = this._calcLeftPos(this.$activeTabLink) + 'px';
          this._indicator.style.right = this._calcRightPos(this.$activeTabLink) + 'px';
        }
      }
      /**
       * Handle tab click
       * @param {Event} e
       */

    }, {
      key: "_handleTabClick",
      value: function _handleTabClick(e) {
        var _this23 = this;

        var tab = $(e.target).closest('li.tab');
        var tabLink = $(e.target).closest('a'); // Handle click on tab link only

        if (!tabLink.length || !tabLink.parent().hasClass('tab')) {
          return;
        }

        if (tab.hasClass('disabled')) {
          e.preventDefault();
          return;
        } // Act as regular link if target attribute is specified.


        if (!!tabLink.attr('target')) {
          return;
        } // Make the old tab inactive.


        this.$activeTabLink.removeClass('active');
        var $oldContent = this.$content; // Update the variables with the new link and content

        this.$activeTabLink = tabLink;
        this.$content = $(M.escapeHash(tabLink[0].hash));
        this.$tabLinks = this.$el.children('li.tab').children('a'); // Make the tab active.

        this.$activeTabLink.addClass('active');
        var prevIndex = this.index;
        this.index = Math.max(this.$tabLinks.index(tabLink), 0); // Swap content

        if (this.options.swipeable) {
          if (this._tabsCarousel) {
            this._tabsCarousel.set(this.index, function () {
              if (typeof _this23.options.onShow === 'function') {
                _this23.options.onShow.call(_this23, _this23.$content[0]);
              }
            });
          }
        } else {
          if (this.$content.length) {
            this.$content[0].style.display = 'block';
            this.$content.addClass('active');

            if (typeof this.options.onShow === 'function') {
              this.options.onShow.call(this, this.$content[0]);
            }

            if ($oldContent.length && !$oldContent.is(this.$content)) {
              $oldContent[0].style.display = 'none';
              $oldContent.removeClass('active');
            }
          }
        } // Update widths after content is swapped (scrollbar bugfix)


        this._setTabsAndTabWidth(); // Update indicator


        this._animateIndicator(prevIndex); // Prevent the anchor's default click action


        e.preventDefault();
      }
      /**
       * Generate elements for tab indicator.
       */

    }, {
      key: "_createIndicator",
      value: function _createIndicator() {
        var _this24 = this;

        var indicator = document.createElement('li');
        indicator.classList.add('indicator');
        this.el.appendChild(indicator);
        this._indicator = indicator;
        setTimeout(function () {
          _this24._indicator.style.left = _this24._calcLeftPos(_this24.$activeTabLink) + 'px';
          _this24._indicator.style.right = _this24._calcRightPos(_this24.$activeTabLink) + 'px';
        }, 0);
      }
      /**
       * Setup first active tab link.
       */

    }, {
      key: "_setupActiveTabLink",
      value: function _setupActiveTabLink() {
        // If the location.hash matches one of the links, use that as the active tab.
        this.$activeTabLink = $(this.$tabLinks.filter('[href="' + location.hash + '"]')); // If no match is found, use the first link or any with class 'active' as the initial active tab.

        if (this.$activeTabLink.length === 0) {
          this.$activeTabLink = this.$el.children('li.tab').children('a.active').first();
        }

        if (this.$activeTabLink.length === 0) {
          this.$activeTabLink = this.$el.children('li.tab').children('a').first();
        }

        this.$tabLinks.removeClass('active');
        this.$activeTabLink[0].classList.add('active');
        this.index = Math.max(this.$tabLinks.index(this.$activeTabLink), 0);

        if (this.$activeTabLink.length) {
          this.$content = $(M.escapeHash(this.$activeTabLink[0].hash));
          this.$content.addClass('active');
        }
      }
      /**
       * Setup swipeable tabs
       */

    }, {
      key: "_setupSwipeableTabs",
      value: function _setupSwipeableTabs() {
        var _this25 = this; // Change swipeable according to responsive threshold


        if (window.innerWidth > this.options.responsiveThreshold) {
          this.options.swipeable = false;
        }

        var $tabsContent = $();
        this.$tabLinks.each(function (link) {
          var $currContent = $(M.escapeHash(link.hash));
          $currContent.addClass('carousel-item');
          $tabsContent = $tabsContent.add($currContent);
        });
        var $tabsWrapper = $('<div class="tabs-content carousel carousel-slider"></div>');
        $tabsContent.first().before($tabsWrapper);
        $tabsWrapper.append($tabsContent);
        $tabsContent[0].style.display = ''; // Keep active tab index to set initial carousel slide

        var activeTabIndex = this.$activeTabLink.closest('.tab').index();
        this._tabsCarousel = M.Carousel.init($tabsWrapper[0], {
          fullWidth: true,
          noWrap: true,
          onCycleTo: function onCycleTo(item) {
            var prevIndex = _this25.index;
            _this25.index = $(item).index();

            _this25.$activeTabLink.removeClass('active');

            _this25.$activeTabLink = _this25.$tabLinks.eq(_this25.index);

            _this25.$activeTabLink.addClass('active');

            _this25._animateIndicator(prevIndex);

            if (typeof _this25.options.onShow === 'function') {
              _this25.options.onShow.call(_this25, _this25.$content[0]);
            }
          }
        }); // Set initial carousel slide to active tab

        this._tabsCarousel.set(activeTabIndex);
      }
      /**
       * Teardown normal tabs.
       */

    }, {
      key: "_teardownSwipeableTabs",
      value: function _teardownSwipeableTabs() {
        var $tabsWrapper = this._tabsCarousel.$el;

        this._tabsCarousel.destroy(); // Unwrap


        $tabsWrapper.after($tabsWrapper.children());
        $tabsWrapper.remove();
      }
      /**
       * Setup normal tabs.
       */

    }, {
      key: "_setupNormalTabs",
      value: function _setupNormalTabs() {
        // Hide Tabs Content
        this.$tabLinks.not(this.$activeTabLink).each(function (link) {
          if (!!link.hash) {
            var $currContent = $(M.escapeHash(link.hash));

            if ($currContent.length) {
              $currContent[0].style.display = 'none';
            }
          }
        });
      }
      /**
       * Teardown normal tabs.
       */

    }, {
      key: "_teardownNormalTabs",
      value: function _teardownNormalTabs() {
        // show Tabs Content
        this.$tabLinks.each(function (link) {
          if (!!link.hash) {
            var $currContent = $(M.escapeHash(link.hash));

            if ($currContent.length) {
              $currContent[0].style.display = '';
            }
          }
        });
      }
      /**
       * set tabs and tab width
       */

    }, {
      key: "_setTabsAndTabWidth",
      value: function _setTabsAndTabWidth() {
        this.tabsWidth = this.$el.width();
        this.tabWidth = Math.max(this.tabsWidth, this.el.scrollWidth) / this.$tabLinks.length;
      }
      /**
       * Finds right attribute for indicator based on active tab.
       * @param {cash} el
       */

    }, {
      key: "_calcRightPos",
      value: function _calcRightPos(el) {
        return Math.ceil(this.tabsWidth - el.position().left - el[0].getBoundingClientRect().width);
      }
      /**
       * Finds left attribute for indicator based on active tab.
       * @param {cash} el
       */

    }, {
      key: "_calcLeftPos",
      value: function _calcLeftPos(el) {
        return Math.floor(el.position().left);
      }
    }, {
      key: "updateTabIndicator",
      value: function updateTabIndicator() {
        this._setTabsAndTabWidth();

        this._animateIndicator(this.index);
      }
      /**
       * Animates Indicator to active tab.
       * @param {Number} prevIndex
       */

    }, {
      key: "_animateIndicator",
      value: function _animateIndicator(prevIndex) {
        var leftDelay = 0,
            rightDelay = 0;

        if (this.index - prevIndex >= 0) {
          leftDelay = 90;
        } else {
          rightDelay = 90;
        } // Animate


        var animOptions = {
          targets: this._indicator,
          left: {
            value: this._calcLeftPos(this.$activeTabLink),
            delay: leftDelay
          },
          right: {
            value: this._calcRightPos(this.$activeTabLink),
            delay: rightDelay
          },
          duration: this.options.duration,
          easing: 'easeOutQuad'
        };
        anim.remove(this._indicator);
        anim(animOptions);
      }
      /**
       * Select tab.
       * @param {String} tabId
       */

    }, {
      key: "select",
      value: function select(tabId) {
        var tab = this.$tabLinks.filter('[href="#' + tabId + '"]');

        if (tab.length) {
          tab.trigger('click');
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Tabs.__proto__ || Object.getPrototypeOf(Tabs), "init", this).call(this, this, els, options);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Tabs;
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return Tabs;
  }(Component);

  M.Tabs = Tabs;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Tabs, 'tabs', 'M_Tabs');
  }
})(cash, M.anime);

;

(function ($, anim) {
  'use strict';

  var _defaults = {
    exitDelay: 200,
    enterDelay: 0,
    html: null,
    margin: 5,
    inDuration: 250,
    outDuration: 200,
    position: 'bottom',
    transitionMovement: 10
  };
  /**
   * @class
   *
   */

  var Tooltip = function (_Component7) {
    _inherits(Tooltip, _Component7);
    /**
     * Construct Tooltip instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */


    function Tooltip(el, options) {
      _classCallCheck(this, Tooltip);

      var _this26 = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, Tooltip, el, options));

      _this26.el.M_Tooltip = _this26;
      _this26.options = $.extend({}, Tooltip.defaults, options);
      _this26.isOpen = false;
      _this26.isHovered = false;
      _this26.isFocused = false;

      _this26._appendTooltipEl();

      _this26._setupEventHandlers();

      return _this26;
    }

    _createClass(Tooltip, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        $(this.tooltipEl).remove();

        this._removeEventHandlers();

        this.el.M_Tooltip = undefined;
      }
    }, {
      key: "_appendTooltipEl",
      value: function _appendTooltipEl() {
        var tooltipEl = document.createElement('div');
        tooltipEl.classList.add('material-tooltip');
        this.tooltipEl = tooltipEl;
        var tooltipContentEl = document.createElement('div');
        tooltipContentEl.classList.add('tooltip-content');
        tooltipContentEl.innerHTML = this.options.html;
        tooltipEl.appendChild(tooltipContentEl);
        document.body.appendChild(tooltipEl);
      }
    }, {
      key: "_updateTooltipContent",
      value: function _updateTooltipContent() {
        this.tooltipEl.querySelector('.tooltip-content').innerHTML = this.options.html;
      }
    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleMouseEnterBound = this._handleMouseEnter.bind(this);
        this._handleMouseLeaveBound = this._handleMouseLeave.bind(this);
        this._handleFocusBound = this._handleFocus.bind(this);
        this._handleBlurBound = this._handleBlur.bind(this);
        this.el.addEventListener('mouseenter', this._handleMouseEnterBound);
        this.el.addEventListener('mouseleave', this._handleMouseLeaveBound);
        this.el.addEventListener('focus', this._handleFocusBound, true);
        this.el.addEventListener('blur', this._handleBlurBound, true);
      }
    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('mouseenter', this._handleMouseEnterBound);
        this.el.removeEventListener('mouseleave', this._handleMouseLeaveBound);
        this.el.removeEventListener('focus', this._handleFocusBound, true);
        this.el.removeEventListener('blur', this._handleBlurBound, true);
      }
    }, {
      key: "open",
      value: function open(isManual) {
        if (this.isOpen) {
          return;
        }

        isManual = isManual === undefined ? true : undefined; // Default value true

        this.isOpen = true; // Update tooltip content with HTML attribute options

        this.options = $.extend({}, this.options, this._getAttributeOptions());

        this._updateTooltipContent();

        this._setEnterDelayTimeout(isManual);
      }
    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        this.isHovered = false;
        this.isFocused = false;
        this.isOpen = false;

        this._setExitDelayTimeout();
      }
      /**
       * Create timeout which delays when the tooltip closes
       */

    }, {
      key: "_setExitDelayTimeout",
      value: function _setExitDelayTimeout() {
        var _this27 = this;

        clearTimeout(this._exitDelayTimeout);
        this._exitDelayTimeout = setTimeout(function () {
          if (_this27.isHovered || _this27.isFocused) {
            return;
          }

          _this27._animateOut();
        }, this.options.exitDelay);
      }
      /**
       * Create timeout which delays when the toast closes
       */

    }, {
      key: "_setEnterDelayTimeout",
      value: function _setEnterDelayTimeout(isManual) {
        var _this28 = this;

        clearTimeout(this._enterDelayTimeout);
        this._enterDelayTimeout = setTimeout(function () {
          if (!_this28.isHovered && !_this28.isFocused && !isManual) {
            return;
          }

          _this28._animateIn();
        }, this.options.enterDelay);
      }
    }, {
      key: "_positionTooltip",
      value: function _positionTooltip() {
        var origin = this.el,
            tooltip = this.tooltipEl,
            originHeight = origin.offsetHeight,
            originWidth = origin.offsetWidth,
            tooltipHeight = tooltip.offsetHeight,
            tooltipWidth = tooltip.offsetWidth,
            newCoordinates = void 0,
            margin = this.options.margin,
            targetTop = void 0,
            targetLeft = void 0;
        this.xMovement = 0, this.yMovement = 0;
        targetTop = origin.getBoundingClientRect().top + M.getDocumentScrollTop();
        targetLeft = origin.getBoundingClientRect().left + M.getDocumentScrollLeft();

        if (this.options.position === 'top') {
          targetTop += -tooltipHeight - margin;
          targetLeft += originWidth / 2 - tooltipWidth / 2;
          this.yMovement = -this.options.transitionMovement;
        } else if (this.options.position === 'right') {
          targetTop += originHeight / 2 - tooltipHeight / 2;
          targetLeft += originWidth + margin;
          this.xMovement = this.options.transitionMovement;
        } else if (this.options.position === 'left') {
          targetTop += originHeight / 2 - tooltipHeight / 2;
          targetLeft += -tooltipWidth - margin;
          this.xMovement = -this.options.transitionMovement;
        } else {
          targetTop += originHeight + margin;
          targetLeft += originWidth / 2 - tooltipWidth / 2;
          this.yMovement = this.options.transitionMovement;
        }

        newCoordinates = this._repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
        $(tooltip).css({
          top: newCoordinates.y + 'px',
          left: newCoordinates.x + 'px'
        });
      }
    }, {
      key: "_repositionWithinScreen",
      value: function _repositionWithinScreen(x, y, width, height) {
        var scrollLeft = M.getDocumentScrollLeft();
        var scrollTop = M.getDocumentScrollTop();
        var newX = x - scrollLeft;
        var newY = y - scrollTop;
        var bounding = {
          left: newX,
          top: newY,
          width: width,
          height: height
        };
        var offset = this.options.margin + this.options.transitionMovement;
        var edges = M.checkWithinContainer(document.body, bounding, offset);

        if (edges.left) {
          newX = offset;
        } else if (edges.right) {
          newX -= newX + width - window.innerWidth;
        }

        if (edges.top) {
          newY = offset;
        } else if (edges.bottom) {
          newY -= newY + height - window.innerHeight;
        }

        return {
          x: newX + scrollLeft,
          y: newY + scrollTop
        };
      }
    }, {
      key: "_animateIn",
      value: function _animateIn() {
        this._positionTooltip();

        this.tooltipEl.style.visibility = 'visible';
        anim.remove(this.tooltipEl);
        anim({
          targets: this.tooltipEl,
          opacity: 1,
          translateX: this.xMovement,
          translateY: this.yMovement,
          duration: this.options.inDuration,
          easing: 'easeOutCubic'
        });
      }
    }, {
      key: "_animateOut",
      value: function _animateOut() {
        anim.remove(this.tooltipEl);
        anim({
          targets: this.tooltipEl,
          opacity: 0,
          translateX: 0,
          translateY: 0,
          duration: this.options.outDuration,
          easing: 'easeOutCubic'
        });
      }
    }, {
      key: "_handleMouseEnter",
      value: function _handleMouseEnter() {
        this.isHovered = true;
        this.isFocused = false; // Allows close of tooltip when opened by focus.

        this.open(false);
      }
    }, {
      key: "_handleMouseLeave",
      value: function _handleMouseLeave() {
        this.isHovered = false;
        this.isFocused = false; // Allows close of tooltip when opened by focus.

        this.close();
      }
    }, {
      key: "_handleFocus",
      value: function _handleFocus() {
        if (M.tabPressed) {
          this.isFocused = true;
          this.open(false);
        }
      }
    }, {
      key: "_handleBlur",
      value: function _handleBlur() {
        this.isFocused = false;
        this.close();
      }
    }, {
      key: "_getAttributeOptions",
      value: function _getAttributeOptions() {
        var attributeOptions = {};
        var tooltipTextOption = this.el.getAttribute('data-tooltip');
        var positionOption = this.el.getAttribute('data-position');

        if (tooltipTextOption) {
          attributeOptions.html = tooltipTextOption;
        }

        if (positionOption) {
          attributeOptions.position = positionOption;
        }

        return attributeOptions;
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Tooltip.__proto__ || Object.getPrototypeOf(Tooltip), "init", this).call(this, this, els, options);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Tooltip;
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return Tooltip;
  }(Component);

  M.Tooltip = Tooltip;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Tooltip, 'tooltip', 'M_Tooltip');
  }
})(cash, M.anime);

;
/*!
* Waves v0.6.4
* http://fian.my.id/Waves
*
* Copyright 2014 Alfiana E. Sibuea and other contributors
* Released under the MIT license
* https://github.com/fians/Waves/blob/master/LICENSE
*/

;

(function (window) {
  'use strict';

  var Waves = Waves || {};
  var $$ = document.querySelectorAll.bind(document); // Find exact position of element

  function isWindow(obj) {
    return obj !== null && obj === obj.window;
  }

  function getWindow(elem) {
    return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
  }

  function offset(elem) {
    var docElem,
        win,
        box = {
      top: 0,
      left: 0
    },
        doc = elem && elem.ownerDocument;
    docElem = doc.documentElement;

    if (_typeof(elem.getBoundingClientRect) !== ( true ? "undefined" : undefined)) {
      box = elem.getBoundingClientRect();
    }

    win = getWindow(doc);
    return {
      top: box.top + win.pageYOffset - docElem.clientTop,
      left: box.left + win.pageXOffset - docElem.clientLeft
    };
  }

  function convertStyle(obj) {
    var style = '';

    for (var a in obj) {
      if (obj.hasOwnProperty(a)) {
        style += a + ':' + obj[a] + ';';
      }
    }

    return style;
  }

  var Effect = {
    // Effect delay
    duration: 750,
    show: function show(e, element) {
      // Disable right click
      if (e.button === 2) {
        return false;
      }

      var el = element || this; // Create ripple

      var ripple = document.createElement('div');
      ripple.className = 'waves-ripple';
      el.appendChild(ripple); // Get click coordinate and element witdh

      var pos = offset(el);
      var relativeY = e.pageY - pos.top;
      var relativeX = e.pageX - pos.left;
      var scale = 'scale(' + el.clientWidth / 100 * 10 + ')'; // Support for touch devices

      if ('touches' in e) {
        relativeY = e.touches[0].pageY - pos.top;
        relativeX = e.touches[0].pageX - pos.left;
      } // Attach data to element


      ripple.setAttribute('data-hold', Date.now());
      ripple.setAttribute('data-scale', scale);
      ripple.setAttribute('data-x', relativeX);
      ripple.setAttribute('data-y', relativeY); // Set ripple position

      var rippleStyle = {
        'top': relativeY + 'px',
        'left': relativeX + 'px'
      };
      ripple.className = ripple.className + ' waves-notransition';
      ripple.setAttribute('style', convertStyle(rippleStyle));
      ripple.className = ripple.className.replace('waves-notransition', ''); // Scale the ripple

      rippleStyle['-webkit-transform'] = scale;
      rippleStyle['-moz-transform'] = scale;
      rippleStyle['-ms-transform'] = scale;
      rippleStyle['-o-transform'] = scale;
      rippleStyle.transform = scale;
      rippleStyle.opacity = '1';
      rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
      rippleStyle['-moz-transition-duration'] = Effect.duration + 'ms';
      rippleStyle['-o-transition-duration'] = Effect.duration + 'ms';
      rippleStyle['transition-duration'] = Effect.duration + 'ms';
      rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      rippleStyle['-moz-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      rippleStyle['-o-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      rippleStyle['transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      ripple.setAttribute('style', convertStyle(rippleStyle));
    },
    hide: function hide(e) {
      TouchHandler.touchup(e);
      var el = this;
      var width = el.clientWidth * 1.4; // Get first ripple

      var ripple = null;
      var ripples = el.getElementsByClassName('waves-ripple');

      if (ripples.length > 0) {
        ripple = ripples[ripples.length - 1];
      } else {
        return false;
      }

      var relativeX = ripple.getAttribute('data-x');
      var relativeY = ripple.getAttribute('data-y');
      var scale = ripple.getAttribute('data-scale'); // Get delay beetween mousedown and mouse leave

      var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
      var delay = 350 - diff;

      if (delay < 0) {
        delay = 0;
      } // Fade out ripple after delay


      setTimeout(function () {
        var style = {
          'top': relativeY + 'px',
          'left': relativeX + 'px',
          'opacity': '0',
          // Duration
          '-webkit-transition-duration': Effect.duration + 'ms',
          '-moz-transition-duration': Effect.duration + 'ms',
          '-o-transition-duration': Effect.duration + 'ms',
          'transition-duration': Effect.duration + 'ms',
          '-webkit-transform': scale,
          '-moz-transform': scale,
          '-ms-transform': scale,
          '-o-transform': scale,
          'transform': scale
        };
        ripple.setAttribute('style', convertStyle(style));
        setTimeout(function () {
          try {
            el.removeChild(ripple);
          } catch (e) {
            return false;
          }
        }, Effect.duration);
      }, delay);
    },
    // Little hack to make <input> can perform waves effect
    wrapInput: function wrapInput(elements) {
      for (var a = 0; a < elements.length; a++) {
        var el = elements[a];

        if (el.tagName.toLowerCase() === 'input') {
          var parent = el.parentNode; // If input already have parent just pass through

          if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
            continue;
          } // Put element class and style to the specified parent


          var wrapper = document.createElement('i');
          wrapper.className = el.className + ' waves-input-wrapper';
          var elementStyle = el.getAttribute('style');

          if (!elementStyle) {
            elementStyle = '';
          }

          wrapper.setAttribute('style', elementStyle);
          el.className = 'waves-button-input';
          el.removeAttribute('style'); // Put element as child

          parent.replaceChild(wrapper, el);
          wrapper.appendChild(el);
        }
      }
    }
  };
  /**
   * Disable mousedown event for 500ms during and after touch
   */

  var TouchHandler = {
    /* uses an integer rather than bool so there's no issues with
     * needing to clear timeouts if another touch event occurred
     * within the 500ms. Cannot mouseup between touchstart and
     * touchend, nor in the 500ms after touchend. */
    touches: 0,
    allowEvent: function allowEvent(e) {
      var allow = true;

      if (e.type === 'touchstart') {
        TouchHandler.touches += 1; //push
      } else if (e.type === 'touchend' || e.type === 'touchcancel') {
        setTimeout(function () {
          if (TouchHandler.touches > 0) {
            TouchHandler.touches -= 1; //pop after 500ms
          }
        }, 500);
      } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
        allow = false;
      }

      return allow;
    },
    touchup: function touchup(e) {
      TouchHandler.allowEvent(e);
    }
  };
  /**
   * Delegated click handler for .waves-effect element.
   * returns null when .waves-effect element not in "click tree"
   */

  function getWavesEffectElement(e) {
    if (TouchHandler.allowEvent(e) === false) {
      return null;
    }

    var element = null;
    var target = e.target || e.srcElement;

    while (target.parentNode !== null) {
      if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
        element = target;
        break;
      }

      target = target.parentNode;
    }

    return element;
  }
  /**
   * Bubble the click and show effect if .waves-effect elem was found
   */


  function showEffect(e) {
    var element = getWavesEffectElement(e);

    if (element !== null) {
      Effect.show(e, element);

      if ('ontouchstart' in window) {
        element.addEventListener('touchend', Effect.hide, false);
        element.addEventListener('touchcancel', Effect.hide, false);
      }

      element.addEventListener('mouseup', Effect.hide, false);
      element.addEventListener('mouseleave', Effect.hide, false);
      element.addEventListener('dragend', Effect.hide, false);
    }
  }

  Waves.displayEffect = function (options) {
    options = options || {};

    if ('duration' in options) {
      Effect.duration = options.duration;
    } //Wrap input inside <i> tag


    Effect.wrapInput($$('.waves-effect'));

    if ('ontouchstart' in window) {
      document.body.addEventListener('touchstart', showEffect, false);
    }

    document.body.addEventListener('mousedown', showEffect, false);
  };
  /**
   * Attach Waves to an input element (or any element which doesn't
   * bubble mouseup/mousedown events).
   *   Intended to be used with dynamically loaded forms/inputs, or
   * where the user doesn't want a delegated click handler.
   */


  Waves.attach = function (element) {
    //FUTURE: automatically add waves classes and allow users
    // to specify them with an options param? Eg. light/classic/button
    if (element.tagName.toLowerCase() === 'input') {
      Effect.wrapInput([element]);
      element = element.parentNode;
    }

    if ('ontouchstart' in window) {
      element.addEventListener('touchstart', showEffect, false);
    }

    element.addEventListener('mousedown', showEffect, false);
  };

  window.Waves = Waves;
  document.addEventListener('DOMContentLoaded', function () {
    Waves.displayEffect();
  }, false);
})(window);

;

(function ($, anim) {
  'use strict';

  var _defaults = {
    html: '',
    displayLength: 4000,
    inDuration: 300,
    outDuration: 375,
    classes: '',
    completeCallback: null,
    activationPercent: 0.8
  };

  var Toast = function () {
    function Toast(options) {
      _classCallCheck(this, Toast);
      /**
       * Options for the toast
       * @member Toast#options
       */


      this.options = $.extend({}, Toast.defaults, options);
      this.message = this.options.html;
      /**
       * Describes current pan state toast
       * @type {Boolean}
       */

      this.panning = false;
      /**
       * Time remaining until toast is removed
       */

      this.timeRemaining = this.options.displayLength;

      if (Toast._toasts.length === 0) {
        Toast._createContainer();
      } // Create new toast


      Toast._toasts.push(this);

      var toastElement = this._createToast();

      toastElement.M_Toast = this;
      this.el = toastElement;
      this.$el = $(toastElement);

      this._animateIn();

      this._setTimer();
    }

    _createClass(Toast, [{
      key: "_createToast",

      /**
       * Create toast and append it to toast container
       */
      value: function _createToast() {
        var toast = document.createElement('div');
        toast.classList.add('toast'); // Add custom classes onto toast

        if (!!this.options.classes.length) {
          $(toast).addClass(this.options.classes);
        } // Set content


        if ((typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === 'object' ? this.message instanceof HTMLElement : this.message && _typeof(this.message) === 'object' && this.message !== null && this.message.nodeType === 1 && typeof this.message.nodeName === 'string') {
          toast.appendChild(this.message); // Check if it is jQuery object
        } else if (!!this.message.jquery) {
          $(toast).append(this.message[0]); // Insert as html;
        } else {
          toast.innerHTML = this.message;
        } // Append toasft


        Toast._container.appendChild(toast);

        return toast;
      }
      /**
       * Animate in toast
       */

    }, {
      key: "_animateIn",
      value: function _animateIn() {
        // Animate toast in
        anim({
          targets: this.el,
          top: 0,
          opacity: 1,
          duration: this.options.inDuration,
          easing: 'easeOutCubic'
        });
      }
      /**
       * Create setInterval which automatically removes toast when timeRemaining >= 0
       * has been reached
       */

    }, {
      key: "_setTimer",
      value: function _setTimer() {
        var _this29 = this;

        if (this.timeRemaining !== Infinity) {
          this.counterInterval = setInterval(function () {
            // If toast is not being dragged, decrease its time remaining
            if (!_this29.panning) {
              _this29.timeRemaining -= 20;
            } // Animate toast out


            if (_this29.timeRemaining <= 0) {
              _this29.dismiss();
            }
          }, 20);
        }
      }
      /**
       * Dismiss toast with animation
       */

    }, {
      key: "dismiss",
      value: function dismiss() {
        var _this30 = this;

        window.clearInterval(this.counterInterval);
        var activationDistance = this.el.offsetWidth * this.options.activationPercent;

        if (this.wasSwiped) {
          this.el.style.transition = 'transform .05s, opacity .05s';
          this.el.style.transform = "translateX(" + activationDistance + "px)";
          this.el.style.opacity = 0;
        }

        anim({
          targets: this.el,
          opacity: 0,
          marginTop: -40,
          duration: this.options.outDuration,
          easing: 'easeOutExpo',
          complete: function complete() {
            // Call the optional callback
            if (typeof _this30.options.completeCallback === 'function') {
              _this30.options.completeCallback();
            } // Remove toast from DOM


            _this30.$el.remove();

            Toast._toasts.splice(Toast._toasts.indexOf(_this30), 1);

            if (Toast._toasts.length === 0) {
              Toast._removeContainer();
            }
          }
        });
      }
    }], [{
      key: "getInstance",

      /**
       * Get Instance
       */
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Toast;
      }
      /**
       * Append toast container and add event handlers
       */

    }, {
      key: "_createContainer",
      value: function _createContainer() {
        var container = document.createElement('div');
        container.setAttribute('id', 'toast-container'); // Add event handler

        container.addEventListener('touchstart', Toast._onDragStart);
        container.addEventListener('touchmove', Toast._onDragMove);
        container.addEventListener('touchend', Toast._onDragEnd);
        container.addEventListener('mousedown', Toast._onDragStart);
        document.addEventListener('mousemove', Toast._onDragMove);
        document.addEventListener('mouseup', Toast._onDragEnd);
        document.body.appendChild(container);
        Toast._container = container;
      }
      /**
       * Remove toast container and event handlers
       */

    }, {
      key: "_removeContainer",
      value: function _removeContainer() {
        // Add event handler
        document.removeEventListener('mousemove', Toast._onDragMove);
        document.removeEventListener('mouseup', Toast._onDragEnd);
        $(Toast._container).remove();
        Toast._container = null;
      }
      /**
       * Begin drag handler
       * @param {Event} e
       */

    }, {
      key: "_onDragStart",
      value: function _onDragStart(e) {
        if (e.target && $(e.target).closest('.toast').length) {
          var $toast = $(e.target).closest('.toast');
          var toast = $toast[0].M_Toast;
          toast.panning = true;
          Toast._draggedToast = toast;
          toast.el.classList.add('panning');
          toast.el.style.transition = '';
          toast.startingXPos = Toast._xPos(e);
          toast.time = Date.now();
          toast.xPos = Toast._xPos(e);
        }
      }
      /**
       * Drag move handler
       * @param {Event} e
       */

    }, {
      key: "_onDragMove",
      value: function _onDragMove(e) {
        if (!!Toast._draggedToast) {
          e.preventDefault();
          var toast = Toast._draggedToast;
          toast.deltaX = Math.abs(toast.xPos - Toast._xPos(e));
          toast.xPos = Toast._xPos(e);
          toast.velocityX = toast.deltaX / (Date.now() - toast.time);
          toast.time = Date.now();
          var totalDeltaX = toast.xPos - toast.startingXPos;
          var activationDistance = toast.el.offsetWidth * toast.options.activationPercent;
          toast.el.style.transform = "translateX(" + totalDeltaX + "px)";
          toast.el.style.opacity = 1 - Math.abs(totalDeltaX / activationDistance);
        }
      }
      /**
       * End drag handler
       */

    }, {
      key: "_onDragEnd",
      value: function _onDragEnd() {
        if (!!Toast._draggedToast) {
          var toast = Toast._draggedToast;
          toast.panning = false;
          toast.el.classList.remove('panning');
          var totalDeltaX = toast.xPos - toast.startingXPos;
          var activationDistance = toast.el.offsetWidth * toast.options.activationPercent;
          var shouldBeDismissed = Math.abs(totalDeltaX) > activationDistance || toast.velocityX > 1; // Remove toast

          if (shouldBeDismissed) {
            toast.wasSwiped = true;
            toast.dismiss(); // Animate toast back to original position
          } else {
            toast.el.style.transition = 'transform .2s, opacity .2s';
            toast.el.style.transform = '';
            toast.el.style.opacity = '';
          }

          Toast._draggedToast = null;
        }
      }
      /**
       * Get x position of mouse or touch event
       * @param {Event} e
       */

    }, {
      key: "_xPos",
      value: function _xPos(e) {
        if (e.targetTouches && e.targetTouches.length >= 1) {
          return e.targetTouches[0].clientX;
        } // mouse event


        return e.clientX;
      }
      /**
       * Remove all toasts
       */

    }, {
      key: "dismissAll",
      value: function dismissAll() {
        for (var toastIndex in Toast._toasts) {
          Toast._toasts[toastIndex].dismiss();
        }
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return Toast;
  }();
  /**
   * @static
   * @memberof Toast
   * @type {Array.<Toast>}
   */


  Toast._toasts = [];
  /**
   * @static
   * @memberof Toast
   */

  Toast._container = null;
  /**
   * @static
   * @memberof Toast
   * @type {Toast}
   */

  Toast._draggedToast = null;
  M.Toast = Toast;

  M.toast = function (options) {
    return new Toast(options);
  };
})(cash, M.anime);

;

(function ($, anim) {
  'use strict';

  var _defaults = {
    edge: 'left',
    draggable: true,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true
  };
  /**
   * @class
   */

  var Sidenav = function (_Component8) {
    _inherits(Sidenav, _Component8);
    /**
     * Construct Sidenav instance and set up overlay
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */


    function Sidenav(el, options) {
      _classCallCheck(this, Sidenav);

      var _this31 = _possibleConstructorReturn(this, (Sidenav.__proto__ || Object.getPrototypeOf(Sidenav)).call(this, Sidenav, el, options));

      _this31.el.M_Sidenav = _this31;
      _this31.id = _this31.$el.attr('id');
      /**
       * Options for the Sidenav
       * @member Sidenav#options
       * @prop {String} [edge='left'] - Side of screen on which Sidenav appears
       * @prop {Boolean} [draggable=true] - Allow swipe gestures to open/close Sidenav
       * @prop {Number} [inDuration=250] - Length in ms of enter transition
       * @prop {Number} [outDuration=200] - Length in ms of exit transition
       * @prop {Function} onOpenStart - Function called when sidenav starts entering
       * @prop {Function} onOpenEnd - Function called when sidenav finishes entering
       * @prop {Function} onCloseStart - Function called when sidenav starts exiting
       * @prop {Function} onCloseEnd - Function called when sidenav finishes exiting
       */

      _this31.options = $.extend({}, Sidenav.defaults, options);
      /**
       * Describes open/close state of Sidenav
       * @type {Boolean}
       */

      _this31.isOpen = false;
      /**
       * Describes if Sidenav is fixed
       * @type {Boolean}
       */

      _this31.isFixed = _this31.el.classList.contains('sidenav-fixed');
      /**
       * Describes if Sidenav is being draggeed
       * @type {Boolean}
       */

      _this31.isDragged = false; // Window size variables for window resize checks

      _this31.lastWindowWidth = window.innerWidth;
      _this31.lastWindowHeight = window.innerHeight;

      _this31._createOverlay();

      _this31._createDragTarget();

      _this31._setupEventHandlers();

      _this31._setupClasses();

      _this31._setupFixed();

      Sidenav._sidenavs.push(_this31);

      return _this31;
    }

    _createClass(Sidenav, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();

        this._enableBodyScrolling();

        this._overlay.parentNode.removeChild(this._overlay);

        this.dragTarget.parentNode.removeChild(this.dragTarget);
        this.el.M_Sidenav = undefined;
        this.el.style.transform = '';

        var index = Sidenav._sidenavs.indexOf(this);

        if (index >= 0) {
          Sidenav._sidenavs.splice(index, 1);
        }
      }
    }, {
      key: "_createOverlay",
      value: function _createOverlay() {
        var overlay = document.createElement('div');
        this._closeBound = this.close.bind(this);
        overlay.classList.add('sidenav-overlay');
        overlay.addEventListener('click', this._closeBound);
        document.body.appendChild(overlay);
        this._overlay = overlay;
      }
    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        if (Sidenav._sidenavs.length === 0) {
          document.body.addEventListener('click', this._handleTriggerClick);
        }

        this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this);
        this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this);
        this._handleCloseDragBound = this._handleCloseDrag.bind(this);
        this._handleCloseReleaseBound = this._handleCloseRelease.bind(this);
        this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind(this);
        this.dragTarget.addEventListener('touchmove', this._handleDragTargetDragBound);
        this.dragTarget.addEventListener('touchend', this._handleDragTargetReleaseBound);

        this._overlay.addEventListener('touchmove', this._handleCloseDragBound);

        this._overlay.addEventListener('touchend', this._handleCloseReleaseBound);

        this.el.addEventListener('touchmove', this._handleCloseDragBound);
        this.el.addEventListener('touchend', this._handleCloseReleaseBound);
        this.el.addEventListener('click', this._handleCloseTriggerClickBound); // Add resize for side nav fixed

        if (this.isFixed) {
          this._handleWindowResizeBound = this._handleWindowResize.bind(this);
          window.addEventListener('resize', this._handleWindowResizeBound);
        }
      }
    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        if (Sidenav._sidenavs.length === 1) {
          document.body.removeEventListener('click', this._handleTriggerClick);
        }

        this.dragTarget.removeEventListener('touchmove', this._handleDragTargetDragBound);
        this.dragTarget.removeEventListener('touchend', this._handleDragTargetReleaseBound);

        this._overlay.removeEventListener('touchmove', this._handleCloseDragBound);

        this._overlay.removeEventListener('touchend', this._handleCloseReleaseBound);

        this.el.removeEventListener('touchmove', this._handleCloseDragBound);
        this.el.removeEventListener('touchend', this._handleCloseReleaseBound);
        this.el.removeEventListener('click', this._handleCloseTriggerClickBound); // Remove resize for side nav fixed

        if (this.isFixed) {
          window.removeEventListener('resize', this._handleWindowResizeBound);
        }
      }
      /**
       * Handle Trigger Click
       * @param {Event} e
       */

    }, {
      key: "_handleTriggerClick",
      value: function _handleTriggerClick(e) {
        var $trigger = $(e.target).closest('.sidenav-trigger');

        if (e.target && $trigger.length) {
          var sidenavId = M.getIdFromTrigger($trigger[0]);
          var sidenavInstance = document.getElementById(sidenavId).M_Sidenav;

          if (sidenavInstance) {
            sidenavInstance.open($trigger);
          }

          e.preventDefault();
        }
      }
      /**
       * Set variables needed at the beggining of drag
       * and stop any current transition.
       * @param {Event} e
       */

    }, {
      key: "_startDrag",
      value: function _startDrag(e) {
        var clientX = e.targetTouches[0].clientX;
        this.isDragged = true;
        this._startingXpos = clientX;
        this._xPos = this._startingXpos;
        this._time = Date.now();
        this._width = this.el.getBoundingClientRect().width;
        this._overlay.style.display = 'block';
        this._initialScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
        this._verticallyScrolling = false;
        anim.remove(this.el);
        anim.remove(this._overlay);
      }
      /**
       * Set variables needed at each drag move update tick
       * @param {Event} e
       */

    }, {
      key: "_dragMoveUpdate",
      value: function _dragMoveUpdate(e) {
        var clientX = e.targetTouches[0].clientX;
        var currentScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
        this.deltaX = Math.abs(this._xPos - clientX);
        this._xPos = clientX;
        this.velocityX = this.deltaX / (Date.now() - this._time);
        this._time = Date.now();

        if (this._initialScrollTop !== currentScrollTop) {
          this._verticallyScrolling = true;
        }
      }
      /**
       * Handles Dragging of Sidenav
       * @param {Event} e
       */

    }, {
      key: "_handleDragTargetDrag",
      value: function _handleDragTargetDrag(e) {
        // Check if draggable
        if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) {
          return;
        } // If not being dragged, set initial drag start variables


        if (!this.isDragged) {
          this._startDrag(e);
        } // Run touchmove updates


        this._dragMoveUpdate(e); // Calculate raw deltaX


        var totalDeltaX = this._xPos - this._startingXpos; // dragDirection is the attempted user drag direction

        var dragDirection = totalDeltaX > 0 ? 'right' : 'left'; // Don't allow totalDeltaX to exceed Sidenav width or be dragged in the opposite direction

        totalDeltaX = Math.min(this._width, Math.abs(totalDeltaX));

        if (this.options.edge === dragDirection) {
          totalDeltaX = 0;
        }
        /**
         * transformX is the drag displacement
         * transformPrefix is the initial transform placement
         * Invert values if Sidenav is right edge
         */


        var transformX = totalDeltaX;
        var transformPrefix = 'translateX(-100%)';

        if (this.options.edge === 'right') {
          transformPrefix = 'translateX(100%)';
          transformX = -transformX;
        } // Calculate open/close percentage of sidenav, with open = 1 and close = 0


        this.percentOpen = Math.min(1, totalDeltaX / this._width); // Set transform and opacity styles

        this.el.style.transform = transformPrefix + " translateX(" + transformX + "px)";
        this._overlay.style.opacity = this.percentOpen;
      }
      /**
       * Handle Drag Target Release
       */

    }, {
      key: "_handleDragTargetRelease",
      value: function _handleDragTargetRelease() {
        if (this.isDragged) {
          if (this.percentOpen > 0.2) {
            this.open();
          } else {
            this._animateOut();
          }

          this.isDragged = false;
          this._verticallyScrolling = false;
        }
      }
      /**
       * Handle Close Drag
       * @param {Event} e
       */

    }, {
      key: "_handleCloseDrag",
      value: function _handleCloseDrag(e) {
        if (this.isOpen) {
          // Check if draggable
          if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) {
            return;
          } // If not being dragged, set initial drag start variables


          if (!this.isDragged) {
            this._startDrag(e);
          } // Run touchmove updates


          this._dragMoveUpdate(e); // Calculate raw deltaX


          var totalDeltaX = this._xPos - this._startingXpos; // dragDirection is the attempted user drag direction

          var dragDirection = totalDeltaX > 0 ? 'right' : 'left'; // Don't allow totalDeltaX to exceed Sidenav width or be dragged in the opposite direction

          totalDeltaX = Math.min(this._width, Math.abs(totalDeltaX));

          if (this.options.edge !== dragDirection) {
            totalDeltaX = 0;
          }

          var transformX = -totalDeltaX;

          if (this.options.edge === 'right') {
            transformX = -transformX;
          } // Calculate open/close percentage of sidenav, with open = 1 and close = 0


          this.percentOpen = Math.min(1, 1 - totalDeltaX / this._width); // Set transform and opacity styles

          this.el.style.transform = "translateX(" + transformX + "px)";
          this._overlay.style.opacity = this.percentOpen;
        }
      }
      /**
       * Handle Close Release
       */

    }, {
      key: "_handleCloseRelease",
      value: function _handleCloseRelease() {
        if (this.isOpen && this.isDragged) {
          if (this.percentOpen > 0.8) {
            this._animateIn();
          } else {
            this.close();
          }

          this.isDragged = false;
          this._verticallyScrolling = false;
        }
      }
      /**
       * Handles closing of Sidenav when element with class .sidenav-close
       */

    }, {
      key: "_handleCloseTriggerClick",
      value: function _handleCloseTriggerClick(e) {
        var $closeTrigger = $(e.target).closest('.sidenav-close');

        if ($closeTrigger.length && !this._isCurrentlyFixed()) {
          this.close();
        }
      }
      /**
       * Handle Window Resize
       */

    }, {
      key: "_handleWindowResize",
      value: function _handleWindowResize() {
        // Only handle horizontal resizes
        if (this.lastWindowWidth !== window.innerWidth) {
          if (window.innerWidth > 992) {
            this.open();
          } else {
            this.close();
          }
        }

        this.lastWindowWidth = window.innerWidth;
        this.lastWindowHeight = window.innerHeight;
      }
    }, {
      key: "_setupClasses",
      value: function _setupClasses() {
        if (this.options.edge === 'right') {
          this.el.classList.add('right-aligned');
          this.dragTarget.classList.add('right-aligned');
        }
      }
    }, {
      key: "_removeClasses",
      value: function _removeClasses() {
        this.el.classList.remove('right-aligned');
        this.dragTarget.classList.remove('right-aligned');
      }
    }, {
      key: "_setupFixed",
      value: function _setupFixed() {
        if (this._isCurrentlyFixed()) {
          this.open();
        }
      }
    }, {
      key: "_isCurrentlyFixed",
      value: function _isCurrentlyFixed() {
        return this.isFixed && window.innerWidth > 992;
      }
    }, {
      key: "_createDragTarget",
      value: function _createDragTarget() {
        var dragTarget = document.createElement('div');
        dragTarget.classList.add('drag-target');
        document.body.appendChild(dragTarget);
        this.dragTarget = dragTarget;
      }
    }, {
      key: "_preventBodyScrolling",
      value: function _preventBodyScrolling() {
        var body = document.body;
        body.style.overflow = 'hidden';
      }
    }, {
      key: "_enableBodyScrolling",
      value: function _enableBodyScrolling() {
        var body = document.body;
        body.style.overflow = '';
      }
    }, {
      key: "open",
      value: function open() {
        if (this.isOpen === true) {
          return;
        }

        this.isOpen = true; // Run onOpenStart callback

        if (typeof this.options.onOpenStart === 'function') {
          this.options.onOpenStart.call(this, this.el);
        } // Handle fixed Sidenav


        if (this._isCurrentlyFixed()) {
          anim.remove(this.el);
          anim({
            targets: this.el,
            translateX: 0,
            duration: 0,
            easing: 'easeOutQuad'
          });

          this._enableBodyScrolling();

          this._overlay.style.display = 'none'; // Handle non-fixed Sidenav
        } else {
          if (this.options.preventScrolling) {
            this._preventBodyScrolling();
          }

          if (!this.isDragged || this.percentOpen != 1) {
            this._animateIn();
          }
        }
      }
    }, {
      key: "close",
      value: function close() {
        if (this.isOpen === false) {
          return;
        }

        this.isOpen = false; // Run onCloseStart callback

        if (typeof this.options.onCloseStart === 'function') {
          this.options.onCloseStart.call(this, this.el);
        } // Handle fixed Sidenav


        if (this._isCurrentlyFixed()) {
          var transformX = this.options.edge === 'left' ? '-105%' : '105%';
          this.el.style.transform = "translateX(" + transformX + ")"; // Handle non-fixed Sidenav
        } else {
          this._enableBodyScrolling();

          if (!this.isDragged || this.percentOpen != 0) {
            this._animateOut();
          } else {
            this._overlay.style.display = 'none';
          }
        }
      }
    }, {
      key: "_animateIn",
      value: function _animateIn() {
        this._animateSidenavIn();

        this._animateOverlayIn();
      }
    }, {
      key: "_animateSidenavIn",
      value: function _animateSidenavIn() {
        var _this32 = this;

        var slideOutPercent = this.options.edge === 'left' ? -1 : 1;

        if (this.isDragged) {
          slideOutPercent = this.options.edge === 'left' ? slideOutPercent + this.percentOpen : slideOutPercent - this.percentOpen;
        }

        anim.remove(this.el);
        anim({
          targets: this.el,
          translateX: [slideOutPercent * 100 + "%", 0],
          duration: this.options.inDuration,
          easing: 'easeOutQuad',
          complete: function complete() {
            // Run onOpenEnd callback
            if (typeof _this32.options.onOpenEnd === 'function') {
              _this32.options.onOpenEnd.call(_this32, _this32.el);
            }
          }
        });
      }
    }, {
      key: "_animateOverlayIn",
      value: function _animateOverlayIn() {
        var start = 0;

        if (this.isDragged) {
          start = this.percentOpen;
        } else {
          $(this._overlay).css({
            display: 'block'
          });
        }

        anim.remove(this._overlay);
        anim({
          targets: this._overlay,
          opacity: [start, 1],
          duration: this.options.inDuration,
          easing: 'easeOutQuad'
        });
      }
    }, {
      key: "_animateOut",
      value: function _animateOut() {
        this._animateSidenavOut();

        this._animateOverlayOut();
      }
    }, {
      key: "_animateSidenavOut",
      value: function _animateSidenavOut() {
        var _this33 = this;

        var endPercent = this.options.edge === 'left' ? -1 : 1;
        var slideOutPercent = 0;

        if (this.isDragged) {
          slideOutPercent = this.options.edge === 'left' ? endPercent + this.percentOpen : endPercent - this.percentOpen;
        }

        anim.remove(this.el);
        anim({
          targets: this.el,
          translateX: [slideOutPercent * 100 + "%", endPercent * 105 + "%"],
          duration: this.options.outDuration,
          easing: 'easeOutQuad',
          complete: function complete() {
            // Run onOpenEnd callback
            if (typeof _this33.options.onCloseEnd === 'function') {
              _this33.options.onCloseEnd.call(_this33, _this33.el);
            }
          }
        });
      }
    }, {
      key: "_animateOverlayOut",
      value: function _animateOverlayOut() {
        var _this34 = this;

        anim.remove(this._overlay);
        anim({
          targets: this._overlay,
          opacity: 0,
          duration: this.options.outDuration,
          easing: 'easeOutQuad',
          complete: function complete() {
            $(_this34._overlay).css('display', 'none');
          }
        });
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Sidenav.__proto__ || Object.getPrototypeOf(Sidenav), "init", this).call(this, this, els, options);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Sidenav;
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return Sidenav;
  }(Component);
  /**
   * @static
   * @memberof Sidenav
   * @type {Array.<Sidenav>}
   */


  Sidenav._sidenavs = [];
  M.Sidenav = Sidenav;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Sidenav, 'sidenav', 'M_Sidenav');
  }
})(cash, M.anime);

;

(function ($, anim) {
  'use strict';

  var _defaults = {
    throttle: 100,
    scrollOffset: 200,
    // offset - 200 allows elements near bottom of page to scroll
    activeClass: 'active',
    getActiveElement: function getActiveElement(id) {
      return 'a[href="#' + id + '"]';
    }
  };
  /**
   * @class
   *
   */

  var ScrollSpy = function (_Component9) {
    _inherits(ScrollSpy, _Component9);
    /**
     * Construct ScrollSpy instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */


    function ScrollSpy(el, options) {
      _classCallCheck(this, ScrollSpy);

      var _this35 = _possibleConstructorReturn(this, (ScrollSpy.__proto__ || Object.getPrototypeOf(ScrollSpy)).call(this, ScrollSpy, el, options));

      _this35.el.M_ScrollSpy = _this35;
      /**
       * Options for the modal
       * @member Modal#options
       * @prop {Number} [throttle=100] - Throttle of scroll handler
       * @prop {Number} [scrollOffset=200] - Offset for centering element when scrolled to
       * @prop {String} [activeClass='active'] - Class applied to active elements
       * @prop {Function} [getActiveElement] - Used to find active element
       */

      _this35.options = $.extend({}, ScrollSpy.defaults, options); // setup

      ScrollSpy._elements.push(_this35);

      ScrollSpy._count++;
      ScrollSpy._increment++;
      _this35.tickId = -1;
      _this35.id = ScrollSpy._increment;

      _this35._setupEventHandlers();

      _this35._handleWindowScroll();

      return _this35;
    }

    _createClass(ScrollSpy, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        ScrollSpy._elements.splice(ScrollSpy._elements.indexOf(this), 1);

        ScrollSpy._elementsInView.splice(ScrollSpy._elementsInView.indexOf(this), 1);

        ScrollSpy._visibleElements.splice(ScrollSpy._visibleElements.indexOf(this.$el), 1);

        ScrollSpy._count--;

        this._removeEventHandlers();

        $(this.options.getActiveElement(this.$el.attr('id'))).removeClass(this.options.activeClass);
        this.el.M_ScrollSpy = undefined;
      }
      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        var throttledResize = M.throttle(this._handleWindowScroll, 200);
        this._handleThrottledResizeBound = throttledResize.bind(this);
        this._handleWindowScrollBound = this._handleWindowScroll.bind(this);

        if (ScrollSpy._count === 1) {
          window.addEventListener('scroll', this._handleWindowScrollBound);
          window.addEventListener('resize', this._handleThrottledResizeBound);
          document.body.addEventListener('click', this._handleTriggerClick);
        }
      }
      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        if (ScrollSpy._count === 0) {
          window.removeEventListener('scroll', this._handleWindowScrollBound);
          window.removeEventListener('resize', this._handleThrottledResizeBound);
          document.body.removeEventListener('click', this._handleTriggerClick);
        }
      }
      /**
       * Handle Trigger Click
       * @param {Event} e
       */

    }, {
      key: "_handleTriggerClick",
      value: function _handleTriggerClick(e) {
        var $trigger = $(e.target);

        for (var i = ScrollSpy._elements.length - 1; i >= 0; i--) {
          var scrollspy = ScrollSpy._elements[i];

          if ($trigger.is('a[href="#' + scrollspy.$el.attr('id') + '"]')) {
            e.preventDefault();
            var offset = scrollspy.$el.offset().top + 1;
            anim({
              targets: [document.documentElement, document.body],
              scrollTop: offset - scrollspy.options.scrollOffset,
              duration: 400,
              easing: 'easeOutCubic'
            });
            break;
          }
        }
      }
      /**
       * Handle Window Scroll
       */

    }, {
      key: "_handleWindowScroll",
      value: function _handleWindowScroll() {
        // unique tick id
        ScrollSpy._ticks++; // viewport rectangle

        var top = M.getDocumentScrollTop(),
            left = M.getDocumentScrollLeft(),
            right = left + window.innerWidth,
            bottom = top + window.innerHeight; // determine which elements are in view

        var intersections = ScrollSpy._findElements(top, right, bottom, left);

        for (var i = 0; i < intersections.length; i++) {
          var scrollspy = intersections[i];
          var lastTick = scrollspy.tickId;

          if (lastTick < 0) {
            // entered into view
            scrollspy._enter();
          } // update tick id


          scrollspy.tickId = ScrollSpy._ticks;
        }

        for (var _i = 0; _i < ScrollSpy._elementsInView.length; _i++) {
          var _scrollspy = ScrollSpy._elementsInView[_i];
          var _lastTick = _scrollspy.tickId;

          if (_lastTick >= 0 && _lastTick !== ScrollSpy._ticks) {
            // exited from view
            _scrollspy._exit();

            _scrollspy.tickId = -1;
          }
        } // remember elements in view for next tick


        ScrollSpy._elementsInView = intersections;
      }
      /**
       * Find elements that are within the boundary
       * @param {number} top
       * @param {number} right
       * @param {number} bottom
       * @param {number} left
       * @return {Array.<ScrollSpy>}   A collection of elements
       */

    }, {
      key: "_enter",
      value: function _enter() {
        ScrollSpy._visibleElements = ScrollSpy._visibleElements.filter(function (value) {
          return value.height() != 0;
        });

        if (ScrollSpy._visibleElements[0]) {
          $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).removeClass(this.options.activeClass);

          if (ScrollSpy._visibleElements[0][0].M_ScrollSpy && this.id < ScrollSpy._visibleElements[0][0].M_ScrollSpy.id) {
            ScrollSpy._visibleElements.unshift(this.$el);
          } else {
            ScrollSpy._visibleElements.push(this.$el);
          }
        } else {
          ScrollSpy._visibleElements.push(this.$el);
        }

        $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).addClass(this.options.activeClass);
      }
    }, {
      key: "_exit",
      value: function _exit() {
        var _this36 = this;

        ScrollSpy._visibleElements = ScrollSpy._visibleElements.filter(function (value) {
          return value.height() != 0;
        });

        if (ScrollSpy._visibleElements[0]) {
          $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).removeClass(this.options.activeClass);
          ScrollSpy._visibleElements = ScrollSpy._visibleElements.filter(function (el) {
            return el.attr('id') != _this36.$el.attr('id');
          });

          if (ScrollSpy._visibleElements[0]) {
            // Check if empty
            $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).addClass(this.options.activeClass);
          }
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(ScrollSpy.__proto__ || Object.getPrototypeOf(ScrollSpy), "init", this).call(this, this, els, options);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_ScrollSpy;
      }
    }, {
      key: "_findElements",
      value: function _findElements(top, right, bottom, left) {
        var hits = [];

        for (var i = 0; i < ScrollSpy._elements.length; i++) {
          var scrollspy = ScrollSpy._elements[i];
          var currTop = top + scrollspy.options.scrollOffset || 200;

          if (scrollspy.$el.height() > 0) {
            var elTop = scrollspy.$el.offset().top,
                elLeft = scrollspy.$el.offset().left,
                elRight = elLeft + scrollspy.$el.width(),
                elBottom = elTop + scrollspy.$el.height();
            var isIntersect = !(elLeft > right || elRight < left || elTop > bottom || elBottom < currTop);

            if (isIntersect) {
              hits.push(scrollspy);
            }
          }
        }

        return hits;
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return ScrollSpy;
  }(Component);
  /**
   * @static
   * @memberof ScrollSpy
   * @type {Array.<ScrollSpy>}
   */


  ScrollSpy._elements = [];
  /**
   * @static
   * @memberof ScrollSpy
   * @type {Array.<ScrollSpy>}
   */

  ScrollSpy._elementsInView = [];
  /**
   * @static
   * @memberof ScrollSpy
   * @type {Array.<cash>}
   */

  ScrollSpy._visibleElements = [];
  /**
   * @static
   * @memberof ScrollSpy
   */

  ScrollSpy._count = 0;
  /**
   * @static
   * @memberof ScrollSpy
   */

  ScrollSpy._increment = 0;
  /**
   * @static
   * @memberof ScrollSpy
   */

  ScrollSpy._ticks = 0;
  M.ScrollSpy = ScrollSpy;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(ScrollSpy, 'scrollSpy', 'M_ScrollSpy');
  }
})(cash, M.anime);

;

(function ($) {
  'use strict';

  var _defaults = {
    data: {},
    // Autocomplete data set
    limit: Infinity,
    // Limit of results the autocomplete shows
    onAutocomplete: null,
    // Callback for when autocompleted
    minLength: 1,
    // Min characters before autocomplete starts
    sortFunction: function sortFunction(a, b, inputString) {
      // Sort function for sorting autocomplete results
      return a.indexOf(inputString) - b.indexOf(inputString);
    }
  };
  /**
   * @class
   *
   */

  var Autocomplete = function (_Component10) {
    _inherits(Autocomplete, _Component10);
    /**
     * Construct Autocomplete instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */


    function Autocomplete(el, options) {
      _classCallCheck(this, Autocomplete);

      var _this37 = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, Autocomplete, el, options));

      _this37.el.M_Autocomplete = _this37;
      /**
       * Options for the autocomplete
       * @member Autocomplete#options
       * @prop {Number} duration
       * @prop {Number} dist
       * @prop {number} shift
       * @prop {number} padding
       * @prop {Boolean} fullWidth
       * @prop {Boolean} indicators
       * @prop {Boolean} noWrap
       * @prop {Function} onCycleTo
       */

      _this37.options = $.extend({}, Autocomplete.defaults, options); // Setup

      _this37.isOpen = false;
      _this37.count = 0;
      _this37.activeIndex = -1;
      _this37.oldVal;
      _this37.$inputField = _this37.$el.closest('.input-field');
      _this37.$active = $();
      _this37._mousedown = false;

      _this37._setupDropdown();

      _this37._setupEventHandlers();

      return _this37;
    }

    _createClass(Autocomplete, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();

        this._removeDropdown();

        this.el.M_Autocomplete = undefined;
      }
      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleInputBlurBound = this._handleInputBlur.bind(this);
        this._handleInputKeyupAndFocusBound = this._handleInputKeyupAndFocus.bind(this);
        this._handleInputKeydownBound = this._handleInputKeydown.bind(this);
        this._handleInputClickBound = this._handleInputClick.bind(this);
        this._handleContainerMousedownAndTouchstartBound = this._handleContainerMousedownAndTouchstart.bind(this);
        this._handleContainerMouseupAndTouchendBound = this._handleContainerMouseupAndTouchend.bind(this);
        this.el.addEventListener('blur', this._handleInputBlurBound);
        this.el.addEventListener('keyup', this._handleInputKeyupAndFocusBound);
        this.el.addEventListener('focus', this._handleInputKeyupAndFocusBound);
        this.el.addEventListener('keydown', this._handleInputKeydownBound);
        this.el.addEventListener('click', this._handleInputClickBound);
        this.container.addEventListener('mousedown', this._handleContainerMousedownAndTouchstartBound);
        this.container.addEventListener('mouseup', this._handleContainerMouseupAndTouchendBound);

        if (typeof window.ontouchstart !== 'undefined') {
          this.container.addEventListener('touchstart', this._handleContainerMousedownAndTouchstartBound);
          this.container.addEventListener('touchend', this._handleContainerMouseupAndTouchendBound);
        }
      }
      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('blur', this._handleInputBlurBound);
        this.el.removeEventListener('keyup', this._handleInputKeyupAndFocusBound);
        this.el.removeEventListener('focus', this._handleInputKeyupAndFocusBound);
        this.el.removeEventListener('keydown', this._handleInputKeydownBound);
        this.el.removeEventListener('click', this._handleInputClickBound);
        this.container.removeEventListener('mousedown', this._handleContainerMousedownAndTouchstartBound);
        this.container.removeEventListener('mouseup', this._handleContainerMouseupAndTouchendBound);

        if (typeof window.ontouchstart !== 'undefined') {
          this.container.removeEventListener('touchstart', this._handleContainerMousedownAndTouchstartBound);
          this.container.removeEventListener('touchend', this._handleContainerMouseupAndTouchendBound);
        }
      }
      /**
       * Setup dropdown
       */

    }, {
      key: "_setupDropdown",
      value: function _setupDropdown() {
        var _this38 = this;

        this.container = document.createElement('ul');
        this.container.id = "autocomplete-options-" + M.guid();
        $(this.container).addClass('autocomplete-content dropdown-content');
        this.$inputField.append(this.container);
        this.el.setAttribute('data-target', this.container.id);
        this.dropdown = M.Dropdown.init(this.el, {
          autoFocus: false,
          closeOnClick: false,
          coverTrigger: false,
          onItemClick: function onItemClick(itemEl) {
            _this38.selectOption($(itemEl));
          }
        }); // Sketchy removal of dropdown click handler

        this.el.removeEventListener('click', this.dropdown._handleClickBound);
      }
      /**
       * Remove dropdown
       */

    }, {
      key: "_removeDropdown",
      value: function _removeDropdown() {
        this.container.parentNode.removeChild(this.container);
      }
      /**
       * Handle Input Blur
       */

    }, {
      key: "_handleInputBlur",
      value: function _handleInputBlur() {
        if (!this._mousedown) {
          this.close();

          this._resetAutocomplete();
        }
      }
      /**
       * Handle Input Keyup and Focus
       * @param {Event} e
       */

    }, {
      key: "_handleInputKeyupAndFocus",
      value: function _handleInputKeyupAndFocus(e) {
        if (e.type === 'keyup') {
          Autocomplete._keydown = false;
        }

        this.count = 0;
        var val = this.el.value.toLowerCase(); // Don't capture enter or arrow key usage.

        if (e.keyCode === 13 || e.keyCode === 38 || e.keyCode === 40) {
          return;
        } // Check if the input isn't empty
        // Check if focus triggered by tab


        if (this.oldVal !== val && (M.tabPressed || e.type !== 'focus')) {
          this.open();
        } // Update oldVal


        this.oldVal = val;
      }
      /**
       * Handle Input Keydown
       * @param {Event} e
       */

    }, {
      key: "_handleInputKeydown",
      value: function _handleInputKeydown(e) {
        Autocomplete._keydown = true; // Arrow keys and enter key usage

        var keyCode = e.keyCode,
            liElement = void 0,
            numItems = $(this.container).children('li').length; // select element on Enter

        if (keyCode === M.keys.ENTER && this.activeIndex >= 0) {
          liElement = $(this.container).children('li').eq(this.activeIndex);

          if (liElement.length) {
            this.selectOption(liElement);
            e.preventDefault();
          }

          return;
        } // Capture up and down key


        if (keyCode === M.keys.ARROW_UP || keyCode === M.keys.ARROW_DOWN) {
          e.preventDefault();

          if (keyCode === M.keys.ARROW_UP && this.activeIndex > 0) {
            this.activeIndex--;
          }

          if (keyCode === M.keys.ARROW_DOWN && this.activeIndex < numItems - 1) {
            this.activeIndex++;
          }

          this.$active.removeClass('active');

          if (this.activeIndex >= 0) {
            this.$active = $(this.container).children('li').eq(this.activeIndex);
            this.$active.addClass('active');
          }
        }
      }
      /**
       * Handle Input Click
       * @param {Event} e
       */

    }, {
      key: "_handleInputClick",
      value: function _handleInputClick(e) {
        this.open();
      }
      /**
       * Handle Container Mousedown and Touchstart
       * @param {Event} e
       */

    }, {
      key: "_handleContainerMousedownAndTouchstart",
      value: function _handleContainerMousedownAndTouchstart(e) {
        this._mousedown = true;
      }
      /**
       * Handle Container Mouseup and Touchend
       * @param {Event} e
       */

    }, {
      key: "_handleContainerMouseupAndTouchend",
      value: function _handleContainerMouseupAndTouchend(e) {
        this._mousedown = false;
      }
      /**
       * Highlight partial match
       */

    }, {
      key: "_highlight",
      value: function _highlight(string, $el) {
        var img = $el.find('img');
        var matchStart = $el.text().toLowerCase().indexOf('' + string.toLowerCase() + ''),
            matchEnd = matchStart + string.length - 1,
            beforeMatch = $el.text().slice(0, matchStart),
            matchText = $el.text().slice(matchStart, matchEnd + 1),
            afterMatch = $el.text().slice(matchEnd + 1);
        $el.html("<span>" + beforeMatch + "<span class='highlight'>" + matchText + "</span>" + afterMatch + "</span>");

        if (img.length) {
          $el.prepend(img);
        }
      }
      /**
       * Reset current element position
       */

    }, {
      key: "_resetCurrentElement",
      value: function _resetCurrentElement() {
        this.activeIndex = -1;
        this.$active.removeClass('active');
      }
      /**
       * Reset autocomplete elements
       */

    }, {
      key: "_resetAutocomplete",
      value: function _resetAutocomplete() {
        $(this.container).empty();

        this._resetCurrentElement();

        this.oldVal = null;
        this.isOpen = false;
        this._mousedown = false;
      }
      /**
       * Select autocomplete option
       * @param {Element} el  Autocomplete option list item element
       */

    }, {
      key: "selectOption",
      value: function selectOption(el) {
        var text = el.text().trim();
        this.el.value = text;
        this.$el.trigger('change');

        this._resetAutocomplete();

        this.close(); // Handle onAutocomplete callback.

        if (typeof this.options.onAutocomplete === 'function') {
          this.options.onAutocomplete.call(this, text);
        }
      }
      /**
       * Render dropdown content
       * @param {Object} data  data set
       * @param {String} val  current input value
       */

    }, {
      key: "_renderDropdown",
      value: function _renderDropdown(data, val) {
        var _this39 = this;

        this._resetAutocomplete();

        var matchingData = []; // Gather all matching data

        for (var key in data) {
          if (data.hasOwnProperty(key) && key.toLowerCase().indexOf(val) !== -1) {
            // Break if past limit
            if (this.count >= this.options.limit) {
              break;
            }

            var entry = {
              data: data[key],
              key: key
            };
            matchingData.push(entry);
            this.count++;
          }
        } // Sort


        if (this.options.sortFunction) {
          var sortFunctionBound = function sortFunctionBound(a, b) {
            return _this39.options.sortFunction(a.key.toLowerCase(), b.key.toLowerCase(), val.toLowerCase());
          };

          matchingData.sort(sortFunctionBound);
        } // Render


        for (var i = 0; i < matchingData.length; i++) {
          var _entry = matchingData[i];
          var $autocompleteOption = $('<li></li>');

          if (!!_entry.data) {
            $autocompleteOption.append("<img src=\"" + _entry.data + "\" class=\"right circle\"><span>" + _entry.key + "</span>");
          } else {
            $autocompleteOption.append('<span>' + _entry.key + '</span>');
          }

          $(this.container).append($autocompleteOption);

          this._highlight(val, $autocompleteOption);
        }
      }
      /**
       * Open Autocomplete Dropdown
       */

    }, {
      key: "open",
      value: function open() {
        var val = this.el.value.toLowerCase();

        this._resetAutocomplete();

        if (val.length >= this.options.minLength) {
          this.isOpen = true;

          this._renderDropdown(this.options.data, val);
        } // Open dropdown


        if (!this.dropdown.isOpen) {
          this.dropdown.open();
        } else {
          // Recalculate dropdown when its already open
          this.dropdown.recalculateDimensions();
        }
      }
      /**
       * Close Autocomplete Dropdown
       */

    }, {
      key: "close",
      value: function close() {
        this.dropdown.close();
      }
      /**
       * Update Data
       * @param {Object} data
       */

    }, {
      key: "updateData",
      value: function updateData(data) {
        var val = this.el.value.toLowerCase();
        this.options.data = data;

        if (this.isOpen) {
          this._renderDropdown(data, val);
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete), "init", this).call(this, this, els, options);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Autocomplete;
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return Autocomplete;
  }(Component);
  /**
   * @static
   * @memberof Autocomplete
   */


  Autocomplete._keydown = false;
  M.Autocomplete = Autocomplete;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Autocomplete, 'autocomplete', 'M_Autocomplete');
  }
})(cash);

;

(function ($) {
  // Function to update labels of text fields
  M.updateTextFields = function () {
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea';
    $(input_selector).each(function (element, index) {
      var $this = $(this);

      if (element.value.length > 0 || $(element).is(':focus') || element.autofocus || $this.attr('placeholder') !== null) {
        $this.siblings('label').addClass('active');
      } else if (element.validity) {
        $this.siblings('label').toggleClass('active', element.validity.badInput === true);
      } else {
        $this.siblings('label').removeClass('active');
      }
    });
  };

  M.validate_field = function (object) {
    var hasLength = object.attr('data-length') !== null;
    var lenAttr = parseInt(object.attr('data-length'));
    var len = object[0].value.length;

    if (len === 0 && object[0].validity.badInput === false && !object.is(':required')) {
      if (object.hasClass('validate')) {
        object.removeClass('valid');
        object.removeClass('invalid');
      }
    } else {
      if (object.hasClass('validate')) {
        // Check for character counter attributes
        if (object.is(':valid') && hasLength && len <= lenAttr || object.is(':valid') && !hasLength) {
          object.removeClass('invalid');
          object.addClass('valid');
        } else {
          object.removeClass('valid');
          object.addClass('invalid');
        }
      }
    }
  };

  M.textareaAutoResize = function ($textarea) {
    // Wrap if native element
    if ($textarea instanceof Element) {
      $textarea = $($textarea);
    }

    if (!$textarea.length) {
      console.error('No textarea element found');
      return;
    } // Textarea Auto Resize


    var hiddenDiv = $('.hiddendiv').first();

    if (!hiddenDiv.length) {
      hiddenDiv = $('<div class="hiddendiv common"></div>');
      $('body').append(hiddenDiv);
    } // Set font properties of hiddenDiv


    var fontFamily = $textarea.css('font-family');
    var fontSize = $textarea.css('font-size');
    var lineHeight = $textarea.css('line-height'); // Firefox can't handle padding shorthand.

    var paddingTop = $textarea.css('padding-top');
    var paddingRight = $textarea.css('padding-right');
    var paddingBottom = $textarea.css('padding-bottom');
    var paddingLeft = $textarea.css('padding-left');

    if (fontSize) {
      hiddenDiv.css('font-size', fontSize);
    }

    if (fontFamily) {
      hiddenDiv.css('font-family', fontFamily);
    }

    if (lineHeight) {
      hiddenDiv.css('line-height', lineHeight);
    }

    if (paddingTop) {
      hiddenDiv.css('padding-top', paddingTop);
    }

    if (paddingRight) {
      hiddenDiv.css('padding-right', paddingRight);
    }

    if (paddingBottom) {
      hiddenDiv.css('padding-bottom', paddingBottom);
    }

    if (paddingLeft) {
      hiddenDiv.css('padding-left', paddingLeft);
    } // Set original-height, if none


    if (!$textarea.data('original-height')) {
      $textarea.data('original-height', $textarea.height());
    }

    if ($textarea.attr('wrap') === 'off') {
      hiddenDiv.css('overflow-wrap', 'normal').css('white-space', 'pre');
    }

    hiddenDiv.text($textarea[0].value + '\n');
    var content = hiddenDiv.html().replace(/\n/g, '<br>');
    hiddenDiv.html(content); // When textarea is hidden, width goes crazy.
    // Approximate with half of window size

    if ($textarea[0].offsetWidth > 0 && $textarea[0].offsetHeight > 0) {
      hiddenDiv.css('width', $textarea.width() + 'px');
    } else {
      hiddenDiv.css('width', window.innerWidth / 2 + 'px');
    }
    /**
     * Resize if the new height is greater than the
     * original height of the textarea
     */


    if ($textarea.data('original-height') <= hiddenDiv.innerHeight()) {
      $textarea.css('height', hiddenDiv.innerHeight() + 'px');
    } else if ($textarea[0].value.length < $textarea.data('previous-length')) {
      /**
       * In case the new height is less than original height, it
       * means the textarea has less text than before
       * So we set the height to the original one
       */
      $textarea.css('height', $textarea.data('original-height') + 'px');
    }

    $textarea.data('previous-length', $textarea[0].value.length);
  };

  $(document).ready(function () {
    // Text based inputs
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea'; // Add active if form auto complete

    $(document).on('change', input_selector, function () {
      if (this.value.length !== 0 || $(this).attr('placeholder') !== null) {
        $(this).siblings('label').addClass('active');
      }

      M.validate_field($(this));
    }); // Add active if input element has been pre-populated on document ready

    $(document).ready(function () {
      M.updateTextFields();
    }); // HTML DOM FORM RESET handling

    $(document).on('reset', function (e) {
      var formReset = $(e.target);

      if (formReset.is('form')) {
        formReset.find(input_selector).removeClass('valid').removeClass('invalid');
        formReset.find(input_selector).each(function (e) {
          if (this.value.length) {
            $(this).siblings('label').removeClass('active');
          }
        }); // Reset select (after native reset)

        setTimeout(function () {
          formReset.find('select').each(function () {
            // check if initialized
            if (this.M_FormSelect) {
              $(this).trigger('change');
            }
          });
        }, 0);
      }
    });
    /**
     * Add active when element has focus
     * @param {Event} e
     */

    document.addEventListener('focus', function (e) {
      if ($(e.target).is(input_selector)) {
        $(e.target).siblings('label, .prefix').addClass('active');
      }
    }, true);
    /**
     * Remove active when element is blurred
     * @param {Event} e
     */

    document.addEventListener('blur', function (e) {
      var $inputElement = $(e.target);

      if ($inputElement.is(input_selector)) {
        var selector = '.prefix';

        if ($inputElement[0].value.length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === null) {
          selector += ', label';
        }

        $inputElement.siblings(selector).removeClass('active');
        M.validate_field($inputElement);
      }
    }, true); // Radio and Checkbox focus class

    var radio_checkbox = 'input[type=radio], input[type=checkbox]';
    $(document).on('keyup', radio_checkbox, function (e) {
      // TAB, check if tabbing to radio or checkbox.
      if (e.which === M.keys.TAB) {
        $(this).addClass('tabbed');
        var $this = $(this);
        $this.one('blur', function (e) {
          $(this).removeClass('tabbed');
        });
        return;
      }
    });
    var text_area_selector = '.materialize-textarea';
    $(text_area_selector).each(function () {
      var $textarea = $(this);
      /**
       * Resize textarea on document load after storing
       * the original height and the original length
       */

      $textarea.data('original-height', $textarea.height());
      $textarea.data('previous-length', this.value.length);
      M.textareaAutoResize($textarea);
    });
    $(document).on('keyup', text_area_selector, function () {
      M.textareaAutoResize($(this));
    });
    $(document).on('keydown', text_area_selector, function () {
      M.textareaAutoResize($(this));
    }); // File Input Path

    $(document).on('change', '.file-field input[type="file"]', function () {
      var file_field = $(this).closest('.file-field');
      var path_input = file_field.find('input.file-path');
      var files = $(this)[0].files;
      var file_names = [];

      for (var i = 0; i < files.length; i++) {
        file_names.push(files[i].name);
      }

      path_input[0].value = file_names.join(', ');
      path_input.trigger('change');
    });
  }); // End of $(document).ready
})(cash);

;

(function ($, anim) {
  'use strict';

  var _defaults = {
    indicators: true,
    height: 400,
    duration: 500,
    interval: 6000
  };
  /**
   * @class
   *
   */

  var Slider = function (_Component11) {
    _inherits(Slider, _Component11);
    /**
     * Construct Slider instance and set up overlay
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */


    function Slider(el, options) {
      _classCallCheck(this, Slider);

      var _this40 = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, Slider, el, options));

      _this40.el.M_Slider = _this40;
      /**
       * Options for the modal
       * @member Slider#options
       * @prop {Boolean} [indicators=true] - Show indicators
       * @prop {Number} [height=400] - height of slider
       * @prop {Number} [duration=500] - Length in ms of slide transition
       * @prop {Number} [interval=6000] - Length in ms of slide interval
       */

      _this40.options = $.extend({}, Slider.defaults, options); // setup

      _this40.$slider = _this40.$el.find('.slides');
      _this40.$slides = _this40.$slider.children('li');
      _this40.activeIndex = _this40.$slides.filter(function (item) {
        return $(item).hasClass('active');
      }).first().index();

      if (_this40.activeIndex != -1) {
        _this40.$active = _this40.$slides.eq(_this40.activeIndex);
      }

      _this40._setSliderHeight(); // Set initial positions of captions


      _this40.$slides.find('.caption').each(function (el) {
        _this40._animateCaptionIn(el, 0);
      }); // Move img src into background-image


      _this40.$slides.find('img').each(function (el) {
        var placeholderBase64 = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

        if ($(el).attr('src') !== placeholderBase64) {
          $(el).css('background-image', 'url("' + $(el).attr('src') + '")');
          $(el).attr('src', placeholderBase64);
        }
      });

      _this40._setupIndicators(); // Show active slide


      if (_this40.$active) {
        _this40.$active.css('display', 'block');
      } else {
        _this40.$slides.first().addClass('active');

        anim({
          targets: _this40.$slides.first()[0],
          opacity: 1,
          duration: _this40.options.duration,
          easing: 'easeOutQuad'
        });
        _this40.activeIndex = 0;
        _this40.$active = _this40.$slides.eq(_this40.activeIndex); // Update indicators

        if (_this40.options.indicators) {
          _this40.$indicators.eq(_this40.activeIndex).addClass('active');
        }
      } // Adjust height to current slide


      _this40.$active.find('img').each(function (el) {
        anim({
          targets: _this40.$active.find('.caption')[0],
          opacity: 1,
          translateX: 0,
          translateY: 0,
          duration: _this40.options.duration,
          easing: 'easeOutQuad'
        });
      });

      _this40._setupEventHandlers(); // auto scroll


      _this40.start();

      return _this40;
    }

    _createClass(Slider, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        this.pause();

        this._removeIndicators();

        this._removeEventHandlers();

        this.el.M_Slider = undefined;
      }
      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        var _this41 = this;

        this._handleIntervalBound = this._handleInterval.bind(this);
        this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this);

        if (this.options.indicators) {
          this.$indicators.each(function (el) {
            el.addEventListener('click', _this41._handleIndicatorClickBound);
          });
        }
      }
      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        var _this42 = this;

        if (this.options.indicators) {
          this.$indicators.each(function (el) {
            el.removeEventListener('click', _this42._handleIndicatorClickBound);
          });
        }
      }
      /**
       * Handle indicator click
       * @param {Event} e
       */

    }, {
      key: "_handleIndicatorClick",
      value: function _handleIndicatorClick(e) {
        var currIndex = $(e.target).index();
        this.set(currIndex);
      }
      /**
       * Handle Interval
       */

    }, {
      key: "_handleInterval",
      value: function _handleInterval() {
        var newActiveIndex = this.$slider.find('.active').index();
        if (this.$slides.length === newActiveIndex + 1) newActiveIndex = 0; // loop to start
        else newActiveIndex += 1;
        this.set(newActiveIndex);
      }
      /**
       * Animate in caption
       * @param {Element} caption
       * @param {Number} duration
       */

    }, {
      key: "_animateCaptionIn",
      value: function _animateCaptionIn(caption, duration) {
        var animOptions = {
          targets: caption,
          opacity: 0,
          duration: duration,
          easing: 'easeOutQuad'
        };

        if ($(caption).hasClass('center-align')) {
          animOptions.translateY = -100;
        } else if ($(caption).hasClass('right-align')) {
          animOptions.translateX = 100;
        } else if ($(caption).hasClass('left-align')) {
          animOptions.translateX = -100;
        }

        anim(animOptions);
      }
      /**
       * Set height of slider
       */

    }, {
      key: "_setSliderHeight",
      value: function _setSliderHeight() {
        // If fullscreen, do nothing
        if (!this.$el.hasClass('fullscreen')) {
          if (this.options.indicators) {
            // Add height if indicators are present
            this.$el.css('height', this.options.height + 40 + 'px');
          } else {
            this.$el.css('height', this.options.height + 'px');
          }

          this.$slider.css('height', this.options.height + 'px');
        }
      }
      /**
       * Setup indicators
       */

    }, {
      key: "_setupIndicators",
      value: function _setupIndicators() {
        var _this43 = this;

        if (this.options.indicators) {
          this.$indicators = $('<ul class="indicators"></ul>');
          this.$slides.each(function (el, index) {
            var $indicator = $('<li class="indicator-item"></li>');

            _this43.$indicators.append($indicator[0]);
          });
          this.$el.append(this.$indicators[0]);
          this.$indicators = this.$indicators.children('li.indicator-item');
        }
      }
      /**
       * Remove indicators
       */

    }, {
      key: "_removeIndicators",
      value: function _removeIndicators() {
        this.$el.find('ul.indicators').remove();
      }
      /**
       * Cycle to nth item
       * @param {Number} index
       */

    }, {
      key: "set",
      value: function set(index) {
        var _this44 = this; // Wrap around indices.


        if (index >= this.$slides.length) index = 0;else if (index < 0) index = this.$slides.length - 1; // Only do if index changes

        if (this.activeIndex != index) {
          this.$active = this.$slides.eq(this.activeIndex);
          var $caption = this.$active.find('.caption');
          this.$active.removeClass('active');
          anim({
            targets: this.$active[0],
            opacity: 0,
            duration: this.options.duration,
            easing: 'easeOutQuad',
            complete: function complete() {
              _this44.$slides.not('.active').each(function (el) {
                anim({
                  targets: el,
                  opacity: 0,
                  translateX: 0,
                  translateY: 0,
                  duration: 0,
                  easing: 'easeOutQuad'
                });
              });
            }
          });

          this._animateCaptionIn($caption[0], this.options.duration); // Update indicators


          if (this.options.indicators) {
            this.$indicators.eq(this.activeIndex).removeClass('active');
            this.$indicators.eq(index).addClass('active');
          }

          anim({
            targets: this.$slides.eq(index)[0],
            opacity: 1,
            duration: this.options.duration,
            easing: 'easeOutQuad'
          });
          anim({
            targets: this.$slides.eq(index).find('.caption')[0],
            opacity: 1,
            translateX: 0,
            translateY: 0,
            duration: this.options.duration,
            delay: this.options.duration,
            easing: 'easeOutQuad'
          });
          this.$slides.eq(index).addClass('active');
          this.activeIndex = index; // Reset interval

          this.start();
        }
      }
      /**
       * Pause slider interval
       */

    }, {
      key: "pause",
      value: function pause() {
        clearInterval(this.interval);
      }
      /**
       * Start slider interval
       */

    }, {
      key: "start",
      value: function start() {
        clearInterval(this.interval);
        this.interval = setInterval(this._handleIntervalBound, this.options.duration + this.options.interval);
      }
      /**
       * Move to next slide
       */

    }, {
      key: "next",
      value: function next() {
        var newIndex = this.activeIndex + 1; // Wrap around indices.

        if (newIndex >= this.$slides.length) newIndex = 0;else if (newIndex < 0) newIndex = this.$slides.length - 1;
        this.set(newIndex);
      }
      /**
       * Move to previous slide
       */

    }, {
      key: "prev",
      value: function prev() {
        var newIndex = this.activeIndex - 1; // Wrap around indices.

        if (newIndex >= this.$slides.length) newIndex = 0;else if (newIndex < 0) newIndex = this.$slides.length - 1;
        this.set(newIndex);
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Slider.__proto__ || Object.getPrototypeOf(Slider), "init", this).call(this, this, els, options);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Slider;
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return Slider;
  }(Component);

  M.Slider = Slider;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Slider, 'slider', 'M_Slider');
  }
})(cash, M.anime);

;

(function ($, anim) {
  $(document).on('click', '.card', function (e) {
    if ($(this).children('.card-reveal').length) {
      var $card = $(e.target).closest('.card');

      if ($card.data('initialOverflow') === undefined) {
        $card.data('initialOverflow', $card.css('overflow') === undefined ? '' : $card.css('overflow'));
      }

      var $cardReveal = $(this).find('.card-reveal');

      if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
        // Make Reveal animate down and display none
        anim({
          targets: $cardReveal[0],
          translateY: 0,
          duration: 225,
          easing: 'easeInOutQuad',
          complete: function complete(anim) {
            var el = anim.animatables[0].target;
            $(el).css({
              display: 'none'
            });
            $card.css('overflow', $card.data('initialOverflow'));
          }
        });
      } else if ($(e.target).is($('.card .activator')) || $(e.target).is($('.card .activator i'))) {
        $card.css('overflow', 'hidden');
        $cardReveal.css({
          display: 'block'
        });
        anim({
          targets: $cardReveal[0],
          translateY: '-100%',
          duration: 300,
          easing: 'easeInOutQuad'
        });
      }
    }
  });
})(cash, M.anime);

;

(function ($) {
  'use strict';

  var _defaults = {
    data: [],
    placeholder: '',
    secondaryPlaceholder: '',
    autocompleteOptions: {},
    limit: Infinity,
    onChipAdd: null,
    onChipSelect: null,
    onChipDelete: null
  };
  /**
   * @typedef {Object} chip
   * @property {String} tag  chip tag string
   * @property {String} [image]  chip avatar image string
   */

  /**
   * @class
   *
   */

  var Chips = function (_Component12) {
    _inherits(Chips, _Component12);
    /**
     * Construct Chips instance and set up overlay
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */


    function Chips(el, options) {
      _classCallCheck(this, Chips);

      var _this45 = _possibleConstructorReturn(this, (Chips.__proto__ || Object.getPrototypeOf(Chips)).call(this, Chips, el, options));

      _this45.el.M_Chips = _this45;
      /**
       * Options for the modal
       * @member Chips#options
       * @prop {Array} data
       * @prop {String} placeholder
       * @prop {String} secondaryPlaceholder
       * @prop {Object} autocompleteOptions
       */

      _this45.options = $.extend({}, Chips.defaults, options);

      _this45.$el.addClass('chips input-field');

      _this45.chipsData = [];
      _this45.$chips = $();

      _this45._setupInput();

      _this45.hasAutocomplete = Object.keys(_this45.options.autocompleteOptions).length > 0; // Set input id

      if (!_this45.$input.attr('id')) {
        _this45.$input.attr('id', M.guid());
      } // Render initial chips


      if (_this45.options.data.length) {
        _this45.chipsData = _this45.options.data;

        _this45._renderChips(_this45.chipsData);
      } // Setup autocomplete if needed


      if (_this45.hasAutocomplete) {
        _this45._setupAutocomplete();
      }

      _this45._setPlaceholder();

      _this45._setupLabel();

      _this45._setupEventHandlers();

      return _this45;
    }

    _createClass(Chips, [{
      key: "getData",

      /**
       * Get Chips Data
       */
      value: function getData() {
        return this.chipsData;
      }
      /**
       * Teardown component
       */

    }, {
      key: "destroy",
      value: function destroy() {
        this._removeEventHandlers();

        this.$chips.remove();
        this.el.M_Chips = undefined;
      }
      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleChipClickBound = this._handleChipClick.bind(this);
        this._handleInputKeydownBound = this._handleInputKeydown.bind(this);
        this._handleInputFocusBound = this._handleInputFocus.bind(this);
        this._handleInputBlurBound = this._handleInputBlur.bind(this);
        this.el.addEventListener('click', this._handleChipClickBound);
        document.addEventListener('keydown', Chips._handleChipsKeydown);
        document.addEventListener('keyup', Chips._handleChipsKeyup);
        this.el.addEventListener('blur', Chips._handleChipsBlur, true);
        this.$input[0].addEventListener('focus', this._handleInputFocusBound);
        this.$input[0].addEventListener('blur', this._handleInputBlurBound);
        this.$input[0].addEventListener('keydown', this._handleInputKeydownBound);
      }
      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('click', this._handleChipClickBound);
        document.removeEventListener('keydown', Chips._handleChipsKeydown);
        document.removeEventListener('keyup', Chips._handleChipsKeyup);
        this.el.removeEventListener('blur', Chips._handleChipsBlur, true);
        this.$input[0].removeEventListener('focus', this._handleInputFocusBound);
        this.$input[0].removeEventListener('blur', this._handleInputBlurBound);
        this.$input[0].removeEventListener('keydown', this._handleInputKeydownBound);
      }
      /**
       * Handle Chip Click
       * @param {Event} e
       */

    }, {
      key: "_handleChipClick",
      value: function _handleChipClick(e) {
        var $chip = $(e.target).closest('.chip');
        var clickedClose = $(e.target).is('.close');

        if ($chip.length) {
          var index = $chip.index();

          if (clickedClose) {
            // delete chip
            this.deleteChip(index);
            this.$input[0].focus();
          } else {
            // select chip
            this.selectChip(index);
          } // Default handle click to focus on input

        } else {
          this.$input[0].focus();
        }
      }
      /**
       * Handle Chips Keydown
       * @param {Event} e
       */

    }, {
      key: "_handleInputFocus",

      /**
       * Handle Input Focus
       */
      value: function _handleInputFocus() {
        this.$el.addClass('focus');
      }
      /**
       * Handle Input Blur
       */

    }, {
      key: "_handleInputBlur",
      value: function _handleInputBlur() {
        this.$el.removeClass('focus');
      }
      /**
       * Handle Input Keydown
       * @param {Event} e
       */

    }, {
      key: "_handleInputKeydown",
      value: function _handleInputKeydown(e) {
        Chips._keydown = true; // enter

        if (e.keyCode === 13) {
          // Override enter if autocompleting.
          if (this.hasAutocomplete && this.autocomplete && this.autocomplete.isOpen) {
            return;
          }

          e.preventDefault();
          this.addChip({
            tag: this.$input[0].value
          });
          this.$input[0].value = ''; // delete or left
        } else if ((e.keyCode === 8 || e.keyCode === 37) && this.$input[0].value === '' && this.chipsData.length) {
          e.preventDefault();
          this.selectChip(this.chipsData.length - 1);
        }
      }
      /**
       * Render Chip
       * @param {chip} chip
       * @return {Element}
       */

    }, {
      key: "_renderChip",
      value: function _renderChip(chip) {
        if (!chip.tag) {
          return;
        }

        var renderedChip = document.createElement('div');
        var closeIcon = document.createElement('i');
        renderedChip.classList.add('chip');
        renderedChip.textContent = chip.tag;
        renderedChip.setAttribute('tabindex', 0);
        $(closeIcon).addClass('material-icons close');
        closeIcon.textContent = 'close'; // attach image if needed

        if (chip.image) {
          var img = document.createElement('img');
          img.setAttribute('src', chip.image);
          renderedChip.insertBefore(img, renderedChip.firstChild);
        }

        renderedChip.appendChild(closeIcon);
        return renderedChip;
      }
      /**
       * Render Chips
       */

    }, {
      key: "_renderChips",
      value: function _renderChips() {
        this.$chips.remove();

        for (var i = 0; i < this.chipsData.length; i++) {
          var chipEl = this._renderChip(this.chipsData[i]);

          this.$el.append(chipEl);
          this.$chips.add(chipEl);
        } // move input to end


        this.$el.append(this.$input[0]);
      }
      /**
       * Setup Autocomplete
       */

    }, {
      key: "_setupAutocomplete",
      value: function _setupAutocomplete() {
        var _this46 = this;

        this.options.autocompleteOptions.onAutocomplete = function (val) {
          _this46.addChip({
            tag: val
          });

          _this46.$input[0].value = '';

          _this46.$input[0].focus();
        };

        this.autocomplete = M.Autocomplete.init(this.$input[0], this.options.autocompleteOptions);
      }
      /**
       * Setup Input
       */

    }, {
      key: "_setupInput",
      value: function _setupInput() {
        this.$input = this.$el.find('input');

        if (!this.$input.length) {
          this.$input = $('<input></input>');
          this.$el.append(this.$input);
        }

        this.$input.addClass('input');
      }
      /**
       * Setup Label
       */

    }, {
      key: "_setupLabel",
      value: function _setupLabel() {
        this.$label = this.$el.find('label');

        if (this.$label.length) {
          this.$label.setAttribute('for', this.$input.attr('id'));
        }
      }
      /**
       * Set placeholder
       */

    }, {
      key: "_setPlaceholder",
      value: function _setPlaceholder() {
        if (this.chipsData !== undefined && !this.chipsData.length && this.options.placeholder) {
          $(this.$input).prop('placeholder', this.options.placeholder);
        } else if ((this.chipsData === undefined || !!this.chipsData.length) && this.options.secondaryPlaceholder) {
          $(this.$input).prop('placeholder', this.options.secondaryPlaceholder);
        }
      }
      /**
       * Check if chip is valid
       * @param {chip} chip
       */

    }, {
      key: "_isValid",
      value: function _isValid(chip) {
        if (chip.hasOwnProperty('tag') && chip.tag !== '') {
          var exists = false;

          for (var i = 0; i < this.chipsData.length; i++) {
            if (this.chipsData[i].tag === chip.tag) {
              exists = true;
              break;
            }
          }

          return !exists;
        }

        return false;
      }
      /**
       * Add chip
       * @param {chip} chip
       */

    }, {
      key: "addChip",
      value: function addChip(chip) {
        if (!this._isValid(chip) || this.chipsData.length >= this.options.limit) {
          return;
        }

        var renderedChip = this._renderChip(chip);

        this.$chips.add(renderedChip);
        this.chipsData.push(chip);
        $(this.$input).before(renderedChip);

        this._setPlaceholder(); // fire chipAdd callback


        if (typeof this.options.onChipAdd === 'function') {
          this.options.onChipAdd.call(this, this.$el, renderedChip);
        }
      }
      /**
       * Delete chip
       * @param {Number} chip
       */

    }, {
      key: "deleteChip",
      value: function deleteChip(chipIndex) {
        var $chip = this.$chips.eq(chipIndex);
        this.$chips.eq(chipIndex).remove();
        this.$chips = this.$chips.filter(function (el) {
          return $(el).index() >= 0;
        });
        this.chipsData.splice(chipIndex, 1);

        this._setPlaceholder(); // fire chipDelete callback


        if (typeof this.options.onChipDelete === 'function') {
          this.options.onChipDelete.call(this, this.$el, $chip[0]);
        }
      }
      /**
       * Select chip
       * @param {Number} chip
       */

    }, {
      key: "selectChip",
      value: function selectChip(chipIndex) {
        var $chip = this.$chips.eq(chipIndex);
        this._selectedChip = $chip;
        $chip[0].focus(); // fire chipSelect callback

        if (typeof this.options.onChipSelect === 'function') {
          this.options.onChipSelect.call(this, this.$el, $chip[0]);
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Chips.__proto__ || Object.getPrototypeOf(Chips), "init", this).call(this, this, els, options);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Chips;
      }
    }, {
      key: "_handleChipsKeydown",
      value: function _handleChipsKeydown(e) {
        Chips._keydown = true;
        var $chips = $(e.target).closest('.chips');
        var chipsKeydown = e.target && $chips.length; // Don't handle keydown inputs on input and textarea

        if ($(e.target).is('input, textarea') || !chipsKeydown) {
          return;
        }

        var currChips = $chips[0].M_Chips; // backspace and delete

        if (e.keyCode === 8 || e.keyCode === 46) {
          e.preventDefault();
          var selectIndex = currChips.chipsData.length;

          if (currChips._selectedChip) {
            var index = currChips._selectedChip.index();

            currChips.deleteChip(index);
            currChips._selectedChip = null; // Make sure selectIndex doesn't go negative

            selectIndex = Math.max(index - 1, 0);
          }

          if (currChips.chipsData.length) {
            currChips.selectChip(selectIndex);
          } // left arrow key

        } else if (e.keyCode === 37) {
          if (currChips._selectedChip) {
            var _selectIndex = currChips._selectedChip.index() - 1;

            if (_selectIndex < 0) {
              return;
            }

            currChips.selectChip(_selectIndex);
          } // right arrow key

        } else if (e.keyCode === 39) {
          if (currChips._selectedChip) {
            var _selectIndex2 = currChips._selectedChip.index() + 1;

            if (_selectIndex2 >= currChips.chipsData.length) {
              currChips.$input[0].focus();
            } else {
              currChips.selectChip(_selectIndex2);
            }
          }
        }
      }
      /**
       * Handle Chips Keyup
       * @param {Event} e
       */

    }, {
      key: "_handleChipsKeyup",
      value: function _handleChipsKeyup(e) {
        Chips._keydown = false;
      }
      /**
       * Handle Chips Blur
       * @param {Event} e
       */

    }, {
      key: "_handleChipsBlur",
      value: function _handleChipsBlur(e) {
        if (!Chips._keydown) {
          var $chips = $(e.target).closest('.chips');
          var currChips = $chips[0].M_Chips;
          currChips._selectedChip = null;
        }
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return Chips;
  }(Component);
  /**
   * @static
   * @memberof Chips
   */


  Chips._keydown = false;
  M.Chips = Chips;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Chips, 'chips', 'M_Chips');
  }

  $(document).ready(function () {
    // Handle removal of static chips.
    $(document.body).on('click', '.chip .close', function () {
      var $chips = $(this).closest('.chips');

      if ($chips.length && $chips[0].M_Chips) {
        return;
      }

      $(this).closest('.chip').remove();
    });
  });
})(cash);

;

(function ($) {
  'use strict';

  var _defaults = {
    top: 0,
    bottom: Infinity,
    offset: 0,
    onPositionChange: null
  };
  /**
   * @class
   *
   */

  var Pushpin = function (_Component13) {
    _inherits(Pushpin, _Component13);
    /**
     * Construct Pushpin instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */


    function Pushpin(el, options) {
      _classCallCheck(this, Pushpin);

      var _this47 = _possibleConstructorReturn(this, (Pushpin.__proto__ || Object.getPrototypeOf(Pushpin)).call(this, Pushpin, el, options));

      _this47.el.M_Pushpin = _this47;
      /**
       * Options for the modal
       * @member Pushpin#options
       */

      _this47.options = $.extend({}, Pushpin.defaults, options);
      _this47.originalOffset = _this47.el.offsetTop;

      Pushpin._pushpins.push(_this47);

      _this47._setupEventHandlers();

      _this47._updatePosition();

      return _this47;
    }

    _createClass(Pushpin, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        this.el.style.top = null;

        this._removePinClasses();

        this._removeEventHandlers(); // Remove pushpin Inst


        var index = Pushpin._pushpins.indexOf(this);

        Pushpin._pushpins.splice(index, 1);
      }
    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        document.addEventListener('scroll', Pushpin._updateElements);
      }
    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        document.removeEventListener('scroll', Pushpin._updateElements);
      }
    }, {
      key: "_updatePosition",
      value: function _updatePosition() {
        var scrolled = M.getDocumentScrollTop() + this.options.offset;

        if (this.options.top <= scrolled && this.options.bottom >= scrolled && !this.el.classList.contains('pinned')) {
          this._removePinClasses();

          this.el.style.top = this.options.offset + "px";
          this.el.classList.add('pinned'); // onPositionChange callback

          if (typeof this.options.onPositionChange === 'function') {
            this.options.onPositionChange.call(this, 'pinned');
          }
        } // Add pin-top (when scrolled position is above top)


        if (scrolled < this.options.top && !this.el.classList.contains('pin-top')) {
          this._removePinClasses();

          this.el.style.top = 0;
          this.el.classList.add('pin-top'); // onPositionChange callback

          if (typeof this.options.onPositionChange === 'function') {
            this.options.onPositionChange.call(this, 'pin-top');
          }
        } // Add pin-bottom (when scrolled position is below bottom)


        if (scrolled > this.options.bottom && !this.el.classList.contains('pin-bottom')) {
          this._removePinClasses();

          this.el.classList.add('pin-bottom');
          this.el.style.top = this.options.bottom - this.originalOffset + "px"; // onPositionChange callback

          if (typeof this.options.onPositionChange === 'function') {
            this.options.onPositionChange.call(this, 'pin-bottom');
          }
        }
      }
    }, {
      key: "_removePinClasses",
      value: function _removePinClasses() {
        // IE 11 bug (can't remove multiple classes in one line)
        this.el.classList.remove('pin-top');
        this.el.classList.remove('pinned');
        this.el.classList.remove('pin-bottom');
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Pushpin.__proto__ || Object.getPrototypeOf(Pushpin), "init", this).call(this, this, els, options);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Pushpin;
      }
    }, {
      key: "_updateElements",
      value: function _updateElements() {
        for (var elIndex in Pushpin._pushpins) {
          var pInstance = Pushpin._pushpins[elIndex];

          pInstance._updatePosition();
        }
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return Pushpin;
  }(Component);
  /**
   * @static
   * @memberof Pushpin
   */


  Pushpin._pushpins = [];
  M.Pushpin = Pushpin;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Pushpin, 'pushpin', 'M_Pushpin');
  }
})(cash);

;

(function ($, anim) {
  'use strict';

  var _defaults = {
    direction: 'top',
    hoverEnabled: true,
    toolbarEnabled: false
  };
  $.fn.reverse = [].reverse;
  /**
   * @class
   *
   */

  var FloatingActionButton = function (_Component14) {
    _inherits(FloatingActionButton, _Component14);
    /**
     * Construct FloatingActionButton instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */


    function FloatingActionButton(el, options) {
      _classCallCheck(this, FloatingActionButton);

      var _this48 = _possibleConstructorReturn(this, (FloatingActionButton.__proto__ || Object.getPrototypeOf(FloatingActionButton)).call(this, FloatingActionButton, el, options));

      _this48.el.M_FloatingActionButton = _this48;
      /**
       * Options for the fab
       * @member FloatingActionButton#options
       * @prop {Boolean} [direction] - Direction fab menu opens
       * @prop {Boolean} [hoverEnabled=true] - Enable hover vs click
       * @prop {Boolean} [toolbarEnabled=false] - Enable toolbar transition
       */

      _this48.options = $.extend({}, FloatingActionButton.defaults, options);
      _this48.isOpen = false;
      _this48.$anchor = _this48.$el.children('a').first();
      _this48.$menu = _this48.$el.children('ul').first();
      _this48.$floatingBtns = _this48.$el.find('ul .btn-floating');
      _this48.$floatingBtnsReverse = _this48.$el.find('ul .btn-floating').reverse();
      _this48.offsetY = 0;
      _this48.offsetX = 0;

      _this48.$el.addClass("direction-" + _this48.options.direction);

      if (_this48.options.direction === 'top') {
        _this48.offsetY = 40;
      } else if (_this48.options.direction === 'right') {
        _this48.offsetX = -40;
      } else if (_this48.options.direction === 'bottom') {
        _this48.offsetY = -40;
      } else {
        _this48.offsetX = 40;
      }

      _this48._setupEventHandlers();

      return _this48;
    }

    _createClass(FloatingActionButton, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();

        this.el.M_FloatingActionButton = undefined;
      }
      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleFABClickBound = this._handleFABClick.bind(this);
        this._handleOpenBound = this.open.bind(this);
        this._handleCloseBound = this.close.bind(this);

        if (this.options.hoverEnabled && !this.options.toolbarEnabled) {
          this.el.addEventListener('mouseenter', this._handleOpenBound);
          this.el.addEventListener('mouseleave', this._handleCloseBound);
        } else {
          this.el.addEventListener('click', this._handleFABClickBound);
        }
      }
      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        if (this.options.hoverEnabled && !this.options.toolbarEnabled) {
          this.el.removeEventListener('mouseenter', this._handleOpenBound);
          this.el.removeEventListener('mouseleave', this._handleCloseBound);
        } else {
          this.el.removeEventListener('click', this._handleFABClickBound);
        }
      }
      /**
       * Handle FAB Click
       */

    }, {
      key: "_handleFABClick",
      value: function _handleFABClick() {
        if (this.isOpen) {
          this.close();
        } else {
          this.open();
        }
      }
      /**
       * Handle Document Click
       * @param {Event} e
       */

    }, {
      key: "_handleDocumentClick",
      value: function _handleDocumentClick(e) {
        if (!$(e.target).closest(this.$menu).length) {
          this.close();
        }
      }
      /**
       * Open FAB
       */

    }, {
      key: "open",
      value: function open() {
        if (this.isOpen) {
          return;
        }

        if (this.options.toolbarEnabled) {
          this._animateInToolbar();
        } else {
          this._animateInFAB();
        }

        this.isOpen = true;
      }
      /**
       * Close FAB
       */

    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        if (this.options.toolbarEnabled) {
          window.removeEventListener('scroll', this._handleCloseBound, true);
          document.body.removeEventListener('click', this._handleDocumentClickBound, true);

          this._animateOutToolbar();
        } else {
          this._animateOutFAB();
        }

        this.isOpen = false;
      }
      /**
       * Classic FAB Menu open
       */

    }, {
      key: "_animateInFAB",
      value: function _animateInFAB() {
        var _this49 = this;

        this.$el.addClass('active');
        var time = 0;
        this.$floatingBtnsReverse.each(function (el) {
          anim({
            targets: el,
            opacity: 1,
            scale: [0.4, 1],
            translateY: [_this49.offsetY, 0],
            translateX: [_this49.offsetX, 0],
            duration: 275,
            delay: time,
            easing: 'easeInOutQuad'
          });
          time += 40;
        });
      }
      /**
       * Classic FAB Menu close
       */

    }, {
      key: "_animateOutFAB",
      value: function _animateOutFAB() {
        var _this50 = this;

        this.$floatingBtnsReverse.each(function (el) {
          anim.remove(el);
          anim({
            targets: el,
            opacity: 0,
            scale: 0.4,
            translateY: _this50.offsetY,
            translateX: _this50.offsetX,
            duration: 175,
            easing: 'easeOutQuad',
            complete: function complete() {
              _this50.$el.removeClass('active');
            }
          });
        });
      }
      /**
       * Toolbar transition Menu open
       */

    }, {
      key: "_animateInToolbar",
      value: function _animateInToolbar() {
        var _this51 = this;

        var scaleFactor = void 0;
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var btnRect = this.el.getBoundingClientRect();
        var backdrop = $('<div class="fab-backdrop"></div>');
        var fabColor = this.$anchor.css('background-color');
        this.$anchor.append(backdrop);
        this.offsetX = btnRect.left - windowWidth / 2 + btnRect.width / 2;
        this.offsetY = windowHeight - btnRect.bottom;
        scaleFactor = windowWidth / backdrop[0].clientWidth;
        this.btnBottom = btnRect.bottom;
        this.btnLeft = btnRect.left;
        this.btnWidth = btnRect.width; // Set initial state

        this.$el.addClass('active');
        this.$el.css({
          'text-align': 'center',
          width: '100%',
          bottom: 0,
          left: 0,
          transform: 'translateX(' + this.offsetX + 'px)',
          transition: 'none'
        });
        this.$anchor.css({
          transform: 'translateY(' + -this.offsetY + 'px)',
          transition: 'none'
        });
        backdrop.css({
          'background-color': fabColor
        });
        setTimeout(function () {
          _this51.$el.css({
            transform: '',
            transition: 'transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s'
          });

          _this51.$anchor.css({
            overflow: 'visible',
            transform: '',
            transition: 'transform .2s'
          });

          setTimeout(function () {
            _this51.$el.css({
              overflow: 'hidden',
              'background-color': fabColor
            });

            backdrop.css({
              transform: 'scale(' + scaleFactor + ')',
              transition: 'transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)'
            });

            _this51.$menu.children('li').children('a').css({
              opacity: 1
            }); // Scroll to close.


            _this51._handleDocumentClickBound = _this51._handleDocumentClick.bind(_this51);
            window.addEventListener('scroll', _this51._handleCloseBound, true);
            document.body.addEventListener('click', _this51._handleDocumentClickBound, true);
          }, 100);
        }, 0);
      }
      /**
       * Toolbar transition Menu close
       */

    }, {
      key: "_animateOutToolbar",
      value: function _animateOutToolbar() {
        var _this52 = this;

        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var backdrop = this.$el.find('.fab-backdrop');
        var fabColor = this.$anchor.css('background-color');
        this.offsetX = this.btnLeft - windowWidth / 2 + this.btnWidth / 2;
        this.offsetY = windowHeight - this.btnBottom; // Hide backdrop

        this.$el.removeClass('active');
        this.$el.css({
          'background-color': 'transparent',
          transition: 'none'
        });
        this.$anchor.css({
          transition: 'none'
        });
        backdrop.css({
          transform: 'scale(0)',
          'background-color': fabColor
        });
        this.$menu.children('li').children('a').css({
          opacity: ''
        });
        setTimeout(function () {
          backdrop.remove(); // Set initial state.

          _this52.$el.css({
            'text-align': '',
            width: '',
            bottom: '',
            left: '',
            overflow: '',
            'background-color': '',
            transform: 'translate3d(' + -_this52.offsetX + 'px,0,0)'
          });

          _this52.$anchor.css({
            overflow: '',
            transform: 'translate3d(0,' + _this52.offsetY + 'px,0)'
          });

          setTimeout(function () {
            _this52.$el.css({
              transform: 'translate3d(0,0,0)',
              transition: 'transform .2s'
            });

            _this52.$anchor.css({
              transform: 'translate3d(0,0,0)',
              transition: 'transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)'
            });
          }, 20);
        }, 200);
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(FloatingActionButton.__proto__ || Object.getPrototypeOf(FloatingActionButton), "init", this).call(this, this, els, options);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_FloatingActionButton;
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return FloatingActionButton;
  }(Component);

  M.FloatingActionButton = FloatingActionButton;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(FloatingActionButton, 'floatingActionButton', 'M_FloatingActionButton');
  }
})(cash, M.anime);

;

(function ($) {
  'use strict';

  var _defaults = {
    // Close when date is selected
    autoClose: false,
    // the default output format for the input field value
    format: 'mmm dd, yyyy',
    // Used to create date object from current input string
    parse: null,
    // The initial date to view when first opened
    defaultDate: null,
    // Make the `defaultDate` the initial selected value
    setDefaultDate: false,
    disableWeekends: false,
    disableDayFn: null,
    // First day of week (0: Sunday, 1: Monday etc)
    firstDay: 0,
    // The earliest date that can be selected
    minDate: null,
    // Thelatest date that can be selected
    maxDate: null,
    // Number of years either side, or array of upper/lower range
    yearRange: 10,
    // used internally (don't config outside)
    minYear: 0,
    maxYear: 9999,
    minMonth: undefined,
    maxMonth: undefined,
    startRange: null,
    endRange: null,
    isRTL: false,
    // Render the month after year in the calendar title
    showMonthAfterYear: false,
    // Render days of the calendar grid that fall in the next or previous month
    showDaysInNextAndPreviousMonths: false,
    // Specify a DOM element to render the calendar in
    container: null,
    // Show clear button
    showClearBtn: false,
    // internationalization
    i18n: {
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok',
      previousMonth: '‹',
      nextMonth: '›',
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      weekdaysAbbrev: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    },
    // events array
    events: [],
    // callback function
    onSelect: null,
    onOpen: null,
    onClose: null,
    onDraw: null
  };
  /**
   * @class
   *
   */

  var Datepicker = function (_Component15) {
    _inherits(Datepicker, _Component15);
    /**
     * Construct Datepicker instance and set up overlay
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */


    function Datepicker(el, options) {
      _classCallCheck(this, Datepicker);

      var _this53 = _possibleConstructorReturn(this, (Datepicker.__proto__ || Object.getPrototypeOf(Datepicker)).call(this, Datepicker, el, options));

      _this53.el.M_Datepicker = _this53;
      _this53.options = $.extend({}, Datepicker.defaults, options); // make sure i18n defaults are not lost when only few i18n option properties are passed

      if (!!options && options.hasOwnProperty('i18n') && _typeof(options.i18n) === 'object') {
        _this53.options.i18n = $.extend({}, Datepicker.defaults.i18n, options.i18n);
      } // Remove time component from minDate and maxDate options


      if (_this53.options.minDate) _this53.options.minDate.setHours(0, 0, 0, 0);
      if (_this53.options.maxDate) _this53.options.maxDate.setHours(0, 0, 0, 0);
      _this53.id = M.guid();

      _this53._setupVariables();

      _this53._insertHTMLIntoDOM();

      _this53._setupModal();

      _this53._setupEventHandlers();

      if (!_this53.options.defaultDate) {
        _this53.options.defaultDate = new Date(Date.parse(_this53.el.value));
      }

      var defDate = _this53.options.defaultDate;

      if (Datepicker._isDate(defDate)) {
        if (_this53.options.setDefaultDate) {
          _this53.setDate(defDate, true);

          _this53.setInputValue();
        } else {
          _this53.gotoDate(defDate);
        }
      } else {
        _this53.gotoDate(new Date());
      }
      /**
       * Describes open/close state of datepicker
       * @type {Boolean}
       */


      _this53.isOpen = false;
      return _this53;
    }

    _createClass(Datepicker, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();

        this.modal.destroy();
        $(this.modalEl).remove();
        this.destroySelects();
        this.el.M_Datepicker = undefined;
      }
    }, {
      key: "destroySelects",
      value: function destroySelects() {
        var oldYearSelect = this.calendarEl.querySelector('.orig-select-year');

        if (oldYearSelect) {
          M.FormSelect.getInstance(oldYearSelect).destroy();
        }

        var oldMonthSelect = this.calendarEl.querySelector('.orig-select-month');

        if (oldMonthSelect) {
          M.FormSelect.getInstance(oldMonthSelect).destroy();
        }
      }
    }, {
      key: "_insertHTMLIntoDOM",
      value: function _insertHTMLIntoDOM() {
        if (this.options.showClearBtn) {
          $(this.clearBtn).css({
            visibility: ''
          });
          this.clearBtn.innerHTML = this.options.i18n.clear;
        }

        this.doneBtn.innerHTML = this.options.i18n.done;
        this.cancelBtn.innerHTML = this.options.i18n.cancel;

        if (this.options.container) {
          this.$modalEl.appendTo(this.options.container);
        } else {
          this.$modalEl.insertBefore(this.el);
        }
      }
    }, {
      key: "_setupModal",
      value: function _setupModal() {
        var _this54 = this;

        this.modalEl.id = 'modal-' + this.id;
        this.modal = M.Modal.init(this.modalEl, {
          onCloseEnd: function onCloseEnd() {
            _this54.isOpen = false;
          }
        });
      }
    }, {
      key: "toString",
      value: function toString(format) {
        var _this55 = this;

        format = format || this.options.format;

        if (!Datepicker._isDate(this.date)) {
          return '';
        }

        var formatArray = format.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
        var formattedDate = formatArray.map(function (label) {
          if (_this55.formats[label]) {
            return _this55.formats[label]();
          }

          return label;
        }).join('');
        return formattedDate;
      }
    }, {
      key: "setDate",
      value: function setDate(date, preventOnSelect) {
        if (!date) {
          this.date = null;

          this._renderDateDisplay();

          return this.draw();
        }

        if (typeof date === 'string') {
          date = new Date(Date.parse(date));
        }

        if (!Datepicker._isDate(date)) {
          return;
        }

        var min = this.options.minDate,
            max = this.options.maxDate;

        if (Datepicker._isDate(min) && date < min) {
          date = min;
        } else if (Datepicker._isDate(max) && date > max) {
          date = max;
        }

        this.date = new Date(date.getTime());

        this._renderDateDisplay();

        Datepicker._setToStartOfDay(this.date);

        this.gotoDate(this.date);

        if (!preventOnSelect && typeof this.options.onSelect === 'function') {
          this.options.onSelect.call(this, this.date);
        }
      }
    }, {
      key: "setInputValue",
      value: function setInputValue() {
        this.el.value = this.toString();
        this.$el.trigger('change', {
          firedBy: this
        });
      }
    }, {
      key: "_renderDateDisplay",
      value: function _renderDateDisplay() {
        var displayDate = Datepicker._isDate(this.date) ? this.date : new Date();
        var i18n = this.options.i18n;
        var day = i18n.weekdaysShort[displayDate.getDay()];
        var month = i18n.monthsShort[displayDate.getMonth()];
        var date = displayDate.getDate();
        this.yearTextEl.innerHTML = displayDate.getFullYear();
        this.dateTextEl.innerHTML = day + ", " + month + " " + date;
      }
      /**
       * change view to a specific date
       */

    }, {
      key: "gotoDate",
      value: function gotoDate(date) {
        var newCalendar = true;

        if (!Datepicker._isDate(date)) {
          return;
        }

        if (this.calendars) {
          var firstVisibleDate = new Date(this.calendars[0].year, this.calendars[0].month, 1),
              lastVisibleDate = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1),
              visibleDate = date.getTime(); // get the end of the month

          lastVisibleDate.setMonth(lastVisibleDate.getMonth() + 1);
          lastVisibleDate.setDate(lastVisibleDate.getDate() - 1);
          newCalendar = visibleDate < firstVisibleDate.getTime() || lastVisibleDate.getTime() < visibleDate;
        }

        if (newCalendar) {
          this.calendars = [{
            month: date.getMonth(),
            year: date.getFullYear()
          }];
        }

        this.adjustCalendars();
      }
    }, {
      key: "adjustCalendars",
      value: function adjustCalendars() {
        this.calendars[0] = this.adjustCalendar(this.calendars[0]);
        this.draw();
      }
    }, {
      key: "adjustCalendar",
      value: function adjustCalendar(calendar) {
        if (calendar.month < 0) {
          calendar.year -= Math.ceil(Math.abs(calendar.month) / 12);
          calendar.month += 12;
        }

        if (calendar.month > 11) {
          calendar.year += Math.floor(Math.abs(calendar.month) / 12);
          calendar.month -= 12;
        }

        return calendar;
      }
    }, {
      key: "nextMonth",
      value: function nextMonth() {
        this.calendars[0].month++;
        this.adjustCalendars();
      }
    }, {
      key: "prevMonth",
      value: function prevMonth() {
        this.calendars[0].month--;
        this.adjustCalendars();
      }
    }, {
      key: "render",
      value: function render(year, month, randId) {
        var opts = this.options,
            now = new Date(),
            days = Datepicker._getDaysInMonth(year, month),
            before = new Date(year, month, 1).getDay(),
            data = [],
            row = [];

        Datepicker._setToStartOfDay(now);

        if (opts.firstDay > 0) {
          before -= opts.firstDay;

          if (before < 0) {
            before += 7;
          }
        }

        var previousMonth = month === 0 ? 11 : month - 1,
            nextMonth = month === 11 ? 0 : month + 1,
            yearOfPreviousMonth = month === 0 ? year - 1 : year,
            yearOfNextMonth = month === 11 ? year + 1 : year,
            daysInPreviousMonth = Datepicker._getDaysInMonth(yearOfPreviousMonth, previousMonth);

        var cells = days + before,
            after = cells;

        while (after > 7) {
          after -= 7;
        }

        cells += 7 - after;
        var isWeekSelected = false;

        for (var i = 0, r = 0; i < cells; i++) {
          var day = new Date(year, month, 1 + (i - before)),
              isSelected = Datepicker._isDate(this.date) ? Datepicker._compareDates(day, this.date) : false,
              isToday = Datepicker._compareDates(day, now),
              hasEvent = opts.events.indexOf(day.toDateString()) !== -1 ? true : false,
              isEmpty = i < before || i >= days + before,
              dayNumber = 1 + (i - before),
              monthNumber = month,
              yearNumber = year,
              isStartRange = opts.startRange && Datepicker._compareDates(opts.startRange, day),
              isEndRange = opts.endRange && Datepicker._compareDates(opts.endRange, day),
              isInRange = opts.startRange && opts.endRange && opts.startRange < day && day < opts.endRange,
              isDisabled = opts.minDate && day < opts.minDate || opts.maxDate && day > opts.maxDate || opts.disableWeekends && Datepicker._isWeekend(day) || opts.disableDayFn && opts.disableDayFn(day);

          if (isEmpty) {
            if (i < before) {
              dayNumber = daysInPreviousMonth + dayNumber;
              monthNumber = previousMonth;
              yearNumber = yearOfPreviousMonth;
            } else {
              dayNumber = dayNumber - days;
              monthNumber = nextMonth;
              yearNumber = yearOfNextMonth;
            }
          }

          var dayConfig = {
            day: dayNumber,
            month: monthNumber,
            year: yearNumber,
            hasEvent: hasEvent,
            isSelected: isSelected,
            isToday: isToday,
            isDisabled: isDisabled,
            isEmpty: isEmpty,
            isStartRange: isStartRange,
            isEndRange: isEndRange,
            isInRange: isInRange,
            showDaysInNextAndPreviousMonths: opts.showDaysInNextAndPreviousMonths
          };
          row.push(this.renderDay(dayConfig));

          if (++r === 7) {
            data.push(this.renderRow(row, opts.isRTL, isWeekSelected));
            row = [];
            r = 0;
            isWeekSelected = false;
          }
        }

        return this.renderTable(opts, data, randId);
      }
    }, {
      key: "renderDay",
      value: function renderDay(opts) {
        var arr = [];
        var ariaSelected = 'false';

        if (opts.isEmpty) {
          if (opts.showDaysInNextAndPreviousMonths) {
            arr.push('is-outside-current-month');
            arr.push('is-selection-disabled');
          } else {
            return '<td class="is-empty"></td>';
          }
        }

        if (opts.isDisabled) {
          arr.push('is-disabled');
        }

        if (opts.isToday) {
          arr.push('is-today');
        }

        if (opts.isSelected) {
          arr.push('is-selected');
          ariaSelected = 'true';
        }

        if (opts.hasEvent) {
          arr.push('has-event');
        }

        if (opts.isInRange) {
          arr.push('is-inrange');
        }

        if (opts.isStartRange) {
          arr.push('is-startrange');
        }

        if (opts.isEndRange) {
          arr.push('is-endrange');
        }

        return "<td data-day=\"" + opts.day + "\" class=\"" + arr.join(' ') + "\" aria-selected=\"" + ariaSelected + "\">" + ("<button class=\"datepicker-day-button\" type=\"button\" data-year=\"" + opts.year + "\" data-month=\"" + opts.month + "\" data-day=\"" + opts.day + "\">" + opts.day + "</button>") + '</td>';
      }
    }, {
      key: "renderRow",
      value: function renderRow(days, isRTL, isRowSelected) {
        return '<tr class="datepicker-row' + (isRowSelected ? ' is-selected' : '') + '">' + (isRTL ? days.reverse() : days).join('') + '</tr>';
      }
    }, {
      key: "renderTable",
      value: function renderTable(opts, data, randId) {
        return '<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="' + randId + '">' + this.renderHead(opts) + this.renderBody(data) + '</table></div>';
      }
    }, {
      key: "renderHead",
      value: function renderHead(opts) {
        var i = void 0,
            arr = [];

        for (i = 0; i < 7; i++) {
          arr.push("<th scope=\"col\"><abbr title=\"" + this.renderDayName(opts, i) + "\">" + this.renderDayName(opts, i, true) + "</abbr></th>");
        }

        return '<thead><tr>' + (opts.isRTL ? arr.reverse() : arr).join('') + '</tr></thead>';
      }
    }, {
      key: "renderBody",
      value: function renderBody(rows) {
        return '<tbody>' + rows.join('') + '</tbody>';
      }
    }, {
      key: "renderTitle",
      value: function renderTitle(instance, c, year, month, refYear, randId) {
        var i = void 0,
            j = void 0,
            arr = void 0,
            opts = this.options,
            isMinYear = year === opts.minYear,
            isMaxYear = year === opts.maxYear,
            html = '<div id="' + randId + '" class="datepicker-controls" role="heading" aria-live="assertive">',
            monthHtml = void 0,
            yearHtml = void 0,
            prev = true,
            next = true;

        for (arr = [], i = 0; i < 12; i++) {
          arr.push('<option value="' + (year === refYear ? i - c : 12 + i - c) + '"' + (i === month ? ' selected="selected"' : '') + (isMinYear && i < opts.minMonth || isMaxYear && i > opts.maxMonth ? 'disabled="disabled"' : '') + '>' + opts.i18n.months[i] + '</option>');
        }

        monthHtml = '<select class="datepicker-select orig-select-month" tabindex="-1">' + arr.join('') + '</select>';

        if ($.isArray(opts.yearRange)) {
          i = opts.yearRange[0];
          j = opts.yearRange[1] + 1;
        } else {
          i = year - opts.yearRange;
          j = 1 + year + opts.yearRange;
        }

        for (arr = []; i < j && i <= opts.maxYear; i++) {
          if (i >= opts.minYear) {
            arr.push("<option value=\"" + i + "\" " + (i === year ? 'selected="selected"' : '') + ">" + i + "</option>");
          }
        }

        yearHtml = "<select class=\"datepicker-select orig-select-year\" tabindex=\"-1\">" + arr.join('') + "</select>";
        var leftArrow = '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg>';
        html += "<button class=\"month-prev" + (prev ? '' : ' is-disabled') + "\" type=\"button\">" + leftArrow + "</button>";
        html += '<div class="selects-container">';

        if (opts.showMonthAfterYear) {
          html += yearHtml + monthHtml;
        } else {
          html += monthHtml + yearHtml;
        }

        html += '</div>';

        if (isMinYear && (month === 0 || opts.minMonth >= month)) {
          prev = false;
        }

        if (isMaxYear && (month === 11 || opts.maxMonth <= month)) {
          next = false;
        }

        var rightArrow = '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg>';
        html += "<button class=\"month-next" + (next ? '' : ' is-disabled') + "\" type=\"button\">" + rightArrow + "</button>";
        return html += '</div>';
      }
      /**
       * refresh the HTML
       */

    }, {
      key: "draw",
      value: function draw(force) {
        if (!this.isOpen && !force) {
          return;
        }

        var opts = this.options,
            minYear = opts.minYear,
            maxYear = opts.maxYear,
            minMonth = opts.minMonth,
            maxMonth = opts.maxMonth,
            html = '',
            randId = void 0;

        if (this._y <= minYear) {
          this._y = minYear;

          if (!isNaN(minMonth) && this._m < minMonth) {
            this._m = minMonth;
          }
        }

        if (this._y >= maxYear) {
          this._y = maxYear;

          if (!isNaN(maxMonth) && this._m > maxMonth) {
            this._m = maxMonth;
          }
        }

        randId = 'datepicker-title-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2);

        for (var c = 0; c < 1; c++) {
          this._renderDateDisplay();

          html += this.renderTitle(this, c, this.calendars[c].year, this.calendars[c].month, this.calendars[0].year, randId) + this.render(this.calendars[c].year, this.calendars[c].month, randId);
        }

        this.destroySelects();
        this.calendarEl.innerHTML = html; // Init Materialize Select

        var yearSelect = this.calendarEl.querySelector('.orig-select-year');
        var monthSelect = this.calendarEl.querySelector('.orig-select-month');
        M.FormSelect.init(yearSelect, {
          classes: 'select-year',
          dropdownOptions: {
            container: document.body,
            constrainWidth: false
          }
        });
        M.FormSelect.init(monthSelect, {
          classes: 'select-month',
          dropdownOptions: {
            container: document.body,
            constrainWidth: false
          }
        }); // Add change handlers for select

        yearSelect.addEventListener('change', this._handleYearChange.bind(this));
        monthSelect.addEventListener('change', this._handleMonthChange.bind(this));

        if (typeof this.options.onDraw === 'function') {
          this.options.onDraw(this);
        }
      }
      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleInputKeydownBound = this._handleInputKeydown.bind(this);
        this._handleInputClickBound = this._handleInputClick.bind(this);
        this._handleInputChangeBound = this._handleInputChange.bind(this);
        this._handleCalendarClickBound = this._handleCalendarClick.bind(this);
        this._finishSelectionBound = this._finishSelection.bind(this);
        this._handleMonthChange = this._handleMonthChange.bind(this);
        this._closeBound = this.close.bind(this);
        this.el.addEventListener('click', this._handleInputClickBound);
        this.el.addEventListener('keydown', this._handleInputKeydownBound);
        this.el.addEventListener('change', this._handleInputChangeBound);
        this.calendarEl.addEventListener('click', this._handleCalendarClickBound);
        this.doneBtn.addEventListener('click', this._finishSelectionBound);
        this.cancelBtn.addEventListener('click', this._closeBound);

        if (this.options.showClearBtn) {
          this._handleClearClickBound = this._handleClearClick.bind(this);
          this.clearBtn.addEventListener('click', this._handleClearClickBound);
        }
      }
    }, {
      key: "_setupVariables",
      value: function _setupVariables() {
        var _this56 = this;

        this.$modalEl = $(Datepicker._template);
        this.modalEl = this.$modalEl[0];
        this.calendarEl = this.modalEl.querySelector('.datepicker-calendar');
        this.yearTextEl = this.modalEl.querySelector('.year-text');
        this.dateTextEl = this.modalEl.querySelector('.date-text');

        if (this.options.showClearBtn) {
          this.clearBtn = this.modalEl.querySelector('.datepicker-clear');
        }

        this.doneBtn = this.modalEl.querySelector('.datepicker-done');
        this.cancelBtn = this.modalEl.querySelector('.datepicker-cancel');
        this.formats = {
          d: function d() {
            return _this56.date.getDate();
          },
          dd: function dd() {
            var d = _this56.date.getDate();

            return (d < 10 ? '0' : '') + d;
          },
          ddd: function ddd() {
            return _this56.options.i18n.weekdaysShort[_this56.date.getDay()];
          },
          dddd: function dddd() {
            return _this56.options.i18n.weekdays[_this56.date.getDay()];
          },
          m: function m() {
            return _this56.date.getMonth() + 1;
          },
          mm: function mm() {
            var m = _this56.date.getMonth() + 1;
            return (m < 10 ? '0' : '') + m;
          },
          mmm: function mmm() {
            return _this56.options.i18n.monthsShort[_this56.date.getMonth()];
          },
          mmmm: function mmmm() {
            return _this56.options.i18n.months[_this56.date.getMonth()];
          },
          yy: function yy() {
            return ('' + _this56.date.getFullYear()).slice(2);
          },
          yyyy: function yyyy() {
            return _this56.date.getFullYear();
          }
        };
      }
      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('click', this._handleInputClickBound);
        this.el.removeEventListener('keydown', this._handleInputKeydownBound);
        this.el.removeEventListener('change', this._handleInputChangeBound);
        this.calendarEl.removeEventListener('click', this._handleCalendarClickBound);
      }
    }, {
      key: "_handleInputClick",
      value: function _handleInputClick() {
        this.open();
      }
    }, {
      key: "_handleInputKeydown",
      value: function _handleInputKeydown(e) {
        if (e.which === M.keys.ENTER) {
          e.preventDefault();
          this.open();
        }
      }
    }, {
      key: "_handleCalendarClick",
      value: function _handleCalendarClick(e) {
        if (!this.isOpen) {
          return;
        }

        var $target = $(e.target);

        if (!$target.hasClass('is-disabled')) {
          if ($target.hasClass('datepicker-day-button') && !$target.hasClass('is-empty') && !$target.parent().hasClass('is-disabled')) {
            this.setDate(new Date(e.target.getAttribute('data-year'), e.target.getAttribute('data-month'), e.target.getAttribute('data-day')));

            if (this.options.autoClose) {
              this._finishSelection();
            }
          } else if ($target.closest('.month-prev').length) {
            this.prevMonth();
          } else if ($target.closest('.month-next').length) {
            this.nextMonth();
          }
        }
      }
    }, {
      key: "_handleClearClick",
      value: function _handleClearClick() {
        this.date = null;
        this.setInputValue();
        this.close();
      }
    }, {
      key: "_handleMonthChange",
      value: function _handleMonthChange(e) {
        this.gotoMonth(e.target.value);
      }
    }, {
      key: "_handleYearChange",
      value: function _handleYearChange(e) {
        this.gotoYear(e.target.value);
      }
      /**
       * change view to a specific month (zero-index, e.g. 0: January)
       */

    }, {
      key: "gotoMonth",
      value: function gotoMonth(month) {
        if (!isNaN(month)) {
          this.calendars[0].month = parseInt(month, 10);
          this.adjustCalendars();
        }
      }
      /**
       * change view to a specific full year (e.g. "2012")
       */

    }, {
      key: "gotoYear",
      value: function gotoYear(year) {
        if (!isNaN(year)) {
          this.calendars[0].year = parseInt(year, 10);
          this.adjustCalendars();
        }
      }
    }, {
      key: "_handleInputChange",
      value: function _handleInputChange(e) {
        var date = void 0; // Prevent change event from being fired when triggered by the plugin

        if (e.firedBy === this) {
          return;
        }

        if (this.options.parse) {
          date = this.options.parse(this.el.value, this.options.format);
        } else {
          date = new Date(Date.parse(this.el.value));
        }

        if (Datepicker._isDate(date)) {
          this.setDate(date);
        }
      }
    }, {
      key: "renderDayName",
      value: function renderDayName(opts, day, abbr) {
        day += opts.firstDay;

        while (day >= 7) {
          day -= 7;
        }

        return abbr ? opts.i18n.weekdaysAbbrev[day] : opts.i18n.weekdays[day];
      }
      /**
       * Set input value to the selected date and close Datepicker
       */

    }, {
      key: "_finishSelection",
      value: function _finishSelection() {
        this.setInputValue();
        this.close();
      }
      /**
       * Open Datepicker
       */

    }, {
      key: "open",
      value: function open() {
        if (this.isOpen) {
          return;
        }

        this.isOpen = true;

        if (typeof this.options.onOpen === 'function') {
          this.options.onOpen.call(this);
        }

        this.draw();
        this.modal.open();
        return this;
      }
      /**
       * Close Datepicker
       */

    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        this.isOpen = false;

        if (typeof this.options.onClose === 'function') {
          this.options.onClose.call(this);
        }

        this.modal.close();
        return this;
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Datepicker.__proto__ || Object.getPrototypeOf(Datepicker), "init", this).call(this, this, els, options);
      }
    }, {
      key: "_isDate",
      value: function _isDate(obj) {
        return /Date/.test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime());
      }
    }, {
      key: "_isWeekend",
      value: function _isWeekend(date) {
        var day = date.getDay();
        return day === 0 || day === 6;
      }
    }, {
      key: "_setToStartOfDay",
      value: function _setToStartOfDay(date) {
        if (Datepicker._isDate(date)) date.setHours(0, 0, 0, 0);
      }
    }, {
      key: "_getDaysInMonth",
      value: function _getDaysInMonth(year, month) {
        return [31, Datepicker._isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
      }
    }, {
      key: "_isLeapYear",
      value: function _isLeapYear(year) {
        // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      }
    }, {
      key: "_compareDates",
      value: function _compareDates(a, b) {
        // weak date comparison (use setToStartOfDay(date) to ensure correct result)
        return a.getTime() === b.getTime();
      }
    }, {
      key: "_setToStartOfDay",
      value: function _setToStartOfDay(date) {
        if (Datepicker._isDate(date)) date.setHours(0, 0, 0, 0);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Datepicker;
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return Datepicker;
  }(Component);

  Datepicker._template = ['<div class= "modal datepicker-modal">', '<div class="modal-content datepicker-container">', '<div class="datepicker-date-display">', '<span class="year-text"></span>', '<span class="date-text"></span>', '</div>', '<div class="datepicker-calendar-container">', '<div class="datepicker-calendar"></div>', '<div class="datepicker-footer">', '<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>', '<div class="confirmation-btns">', '<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>', '<button class="btn-flat datepicker-done waves-effect" type="button"></button>', '</div>', '</div>', '</div>', '</div>', '</div>'].join('');
  M.Datepicker = Datepicker;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Datepicker, 'datepicker', 'M_Datepicker');
  }
})(cash);

;

(function ($) {
  'use strict';

  var _defaults = {
    dialRadius: 135,
    outerRadius: 105,
    innerRadius: 70,
    tickRadius: 20,
    duration: 350,
    container: null,
    defaultTime: 'now',
    // default time, 'now' or '13:14' e.g.
    fromNow: 0,
    // Millisecond offset from the defaultTime
    showClearBtn: false,
    // internationalization
    i18n: {
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok'
    },
    autoClose: false,
    // auto close when minute is selected
    twelveHour: true,
    // change to 12 hour AM/PM clock from 24 hour
    vibrate: true,
    // vibrate the device when dragging clock hand
    // Callbacks
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    onSelect: null
  };
  /**
   * @class
   *
   */

  var Timepicker = function (_Component16) {
    _inherits(Timepicker, _Component16);

    function Timepicker(el, options) {
      _classCallCheck(this, Timepicker);

      var _this57 = _possibleConstructorReturn(this, (Timepicker.__proto__ || Object.getPrototypeOf(Timepicker)).call(this, Timepicker, el, options));

      _this57.el.M_Timepicker = _this57;
      _this57.options = $.extend({}, Timepicker.defaults, options);
      _this57.id = M.guid();

      _this57._insertHTMLIntoDOM();

      _this57._setupModal();

      _this57._setupVariables();

      _this57._setupEventHandlers();

      _this57._clockSetup();

      _this57._pickerSetup();

      return _this57;
    }

    _createClass(Timepicker, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();

        this.modal.destroy();
        $(this.modalEl).remove();
        this.el.M_Timepicker = undefined;
      }
      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleInputKeydownBound = this._handleInputKeydown.bind(this);
        this._handleInputClickBound = this._handleInputClick.bind(this);
        this._handleClockClickStartBound = this._handleClockClickStart.bind(this);
        this._handleDocumentClickMoveBound = this._handleDocumentClickMove.bind(this);
        this._handleDocumentClickEndBound = this._handleDocumentClickEnd.bind(this);
        this.el.addEventListener('click', this._handleInputClickBound);
        this.el.addEventListener('keydown', this._handleInputKeydownBound);
        this.plate.addEventListener('mousedown', this._handleClockClickStartBound);
        this.plate.addEventListener('touchstart', this._handleClockClickStartBound);
        $(this.spanHours).on('click', this.showView.bind(this, 'hours'));
        $(this.spanMinutes).on('click', this.showView.bind(this, 'minutes'));
      }
    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('click', this._handleInputClickBound);
        this.el.removeEventListener('keydown', this._handleInputKeydownBound);
      }
    }, {
      key: "_handleInputClick",
      value: function _handleInputClick() {
        this.open();
      }
    }, {
      key: "_handleInputKeydown",
      value: function _handleInputKeydown(e) {
        if (e.which === M.keys.ENTER) {
          e.preventDefault();
          this.open();
        }
      }
    }, {
      key: "_handleClockClickStart",
      value: function _handleClockClickStart(e) {
        e.preventDefault();
        var clockPlateBR = this.plate.getBoundingClientRect();
        var offset = {
          x: clockPlateBR.left,
          y: clockPlateBR.top
        };
        this.x0 = offset.x + this.options.dialRadius;
        this.y0 = offset.y + this.options.dialRadius;
        this.moved = false;

        var clickPos = Timepicker._Pos(e);

        this.dx = clickPos.x - this.x0;
        this.dy = clickPos.y - this.y0; // Set clock hands

        this.setHand(this.dx, this.dy, false); // Mousemove on document

        document.addEventListener('mousemove', this._handleDocumentClickMoveBound);
        document.addEventListener('touchmove', this._handleDocumentClickMoveBound); // Mouseup on document

        document.addEventListener('mouseup', this._handleDocumentClickEndBound);
        document.addEventListener('touchend', this._handleDocumentClickEndBound);
      }
    }, {
      key: "_handleDocumentClickMove",
      value: function _handleDocumentClickMove(e) {
        e.preventDefault();

        var clickPos = Timepicker._Pos(e);

        var x = clickPos.x - this.x0;
        var y = clickPos.y - this.y0;
        this.moved = true;
        this.setHand(x, y, false, true);
      }
    }, {
      key: "_handleDocumentClickEnd",
      value: function _handleDocumentClickEnd(e) {
        var _this58 = this;

        e.preventDefault();
        document.removeEventListener('mouseup', this._handleDocumentClickEndBound);
        document.removeEventListener('touchend', this._handleDocumentClickEndBound);

        var clickPos = Timepicker._Pos(e);

        var x = clickPos.x - this.x0;
        var y = clickPos.y - this.y0;

        if (this.moved && x === this.dx && y === this.dy) {
          this.setHand(x, y);
        }

        if (this.currentView === 'hours') {
          this.showView('minutes', this.options.duration / 2);
        } else if (this.options.autoClose) {
          $(this.minutesView).addClass('timepicker-dial-out');
          setTimeout(function () {
            _this58.done();
          }, this.options.duration / 2);
        }

        if (typeof this.options.onSelect === 'function') {
          this.options.onSelect.call(this, this.hours, this.minutes);
        } // Unbind mousemove event


        document.removeEventListener('mousemove', this._handleDocumentClickMoveBound);
        document.removeEventListener('touchmove', this._handleDocumentClickMoveBound);
      }
    }, {
      key: "_insertHTMLIntoDOM",
      value: function _insertHTMLIntoDOM() {
        this.$modalEl = $(Timepicker._template);
        this.modalEl = this.$modalEl[0];
        this.modalEl.id = 'modal-' + this.id; // Append popover to input by default

        var containerEl = document.querySelector(this.options.container);

        if (this.options.container && !!containerEl) {
          this.$modalEl.appendTo(containerEl);
        } else {
          this.$modalEl.insertBefore(this.el);
        }
      }
    }, {
      key: "_setupModal",
      value: function _setupModal() {
        var _this59 = this;

        this.modal = M.Modal.init(this.modalEl, {
          onOpenStart: this.options.onOpenStart,
          onOpenEnd: this.options.onOpenEnd,
          onCloseStart: this.options.onCloseStart,
          onCloseEnd: function onCloseEnd() {
            if (typeof _this59.options.onCloseEnd === 'function') {
              _this59.options.onCloseEnd.call(_this59);
            }

            _this59.isOpen = false;
          }
        });
      }
    }, {
      key: "_setupVariables",
      value: function _setupVariables() {
        this.currentView = 'hours';
        this.vibrate = navigator.vibrate ? 'vibrate' : navigator.webkitVibrate ? 'webkitVibrate' : null;
        this._canvas = this.modalEl.querySelector('.timepicker-canvas');
        this.plate = this.modalEl.querySelector('.timepicker-plate');
        this.hoursView = this.modalEl.querySelector('.timepicker-hours');
        this.minutesView = this.modalEl.querySelector('.timepicker-minutes');
        this.spanHours = this.modalEl.querySelector('.timepicker-span-hours');
        this.spanMinutes = this.modalEl.querySelector('.timepicker-span-minutes');
        this.spanAmPm = this.modalEl.querySelector('.timepicker-span-am-pm');
        this.footer = this.modalEl.querySelector('.timepicker-footer');
        this.amOrPm = 'PM';
      }
    }, {
      key: "_pickerSetup",
      value: function _pickerSetup() {
        var $clearBtn = $("<button class=\"btn-flat timepicker-clear waves-effect\" style=\"visibility: hidden;\" type=\"button\" tabindex=\"" + (this.options.twelveHour ? '3' : '1') + "\">" + this.options.i18n.clear + "</button>").appendTo(this.footer).on('click', this.clear.bind(this));

        if (this.options.showClearBtn) {
          $clearBtn.css({
            visibility: ''
          });
        }

        var confirmationBtnsContainer = $('<div class="confirmation-btns"></div>');
        $('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? '3' : '1') + '">' + this.options.i18n.cancel + '</button>').appendTo(confirmationBtnsContainer).on('click', this.close.bind(this));
        $('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? '3' : '1') + '">' + this.options.i18n.done + '</button>').appendTo(confirmationBtnsContainer).on('click', this.done.bind(this));
        confirmationBtnsContainer.appendTo(this.footer);
      }
    }, {
      key: "_clockSetup",
      value: function _clockSetup() {
        if (this.options.twelveHour) {
          this.$amBtn = $('<div class="am-btn">AM</div>');
          this.$pmBtn = $('<div class="pm-btn">PM</div>');
          this.$amBtn.on('click', this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm);
          this.$pmBtn.on('click', this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm);
        }

        this._buildHoursView();

        this._buildMinutesView();

        this._buildSVGClock();
      }
    }, {
      key: "_buildSVGClock",
      value: function _buildSVGClock() {
        // Draw clock hands and others
        var dialRadius = this.options.dialRadius;
        var tickRadius = this.options.tickRadius;
        var diameter = dialRadius * 2;

        var svg = Timepicker._createSVGEl('svg');

        svg.setAttribute('class', 'timepicker-svg');
        svg.setAttribute('width', diameter);
        svg.setAttribute('height', diameter);

        var g = Timepicker._createSVGEl('g');

        g.setAttribute('transform', 'translate(' + dialRadius + ',' + dialRadius + ')');

        var bearing = Timepicker._createSVGEl('circle');

        bearing.setAttribute('class', 'timepicker-canvas-bearing');
        bearing.setAttribute('cx', 0);
        bearing.setAttribute('cy', 0);
        bearing.setAttribute('r', 4);

        var hand = Timepicker._createSVGEl('line');

        hand.setAttribute('x1', 0);
        hand.setAttribute('y1', 0);

        var bg = Timepicker._createSVGEl('circle');

        bg.setAttribute('class', 'timepicker-canvas-bg');
        bg.setAttribute('r', tickRadius);
        g.appendChild(hand);
        g.appendChild(bg);
        g.appendChild(bearing);
        svg.appendChild(g);

        this._canvas.appendChild(svg);

        this.hand = hand;
        this.bg = bg;
        this.bearing = bearing;
        this.g = g;
      }
    }, {
      key: "_buildHoursView",
      value: function _buildHoursView() {
        var $tick = $('<div class="timepicker-tick"></div>'); // Hours view

        if (this.options.twelveHour) {
          for (var i = 1; i < 13; i += 1) {
            var tick = $tick.clone();
            var radian = i / 6 * Math.PI;
            var radius = this.options.outerRadius;
            tick.css({
              left: this.options.dialRadius + Math.sin(radian) * radius - this.options.tickRadius + 'px',
              top: this.options.dialRadius - Math.cos(radian) * radius - this.options.tickRadius + 'px'
            });
            tick.html(i === 0 ? '00' : i);
            this.hoursView.appendChild(tick[0]); // tick.on(mousedownEvent, mousedown);
          }
        } else {
          for (var _i2 = 0; _i2 < 24; _i2 += 1) {
            var _tick = $tick.clone();

            var _radian = _i2 / 6 * Math.PI;

            var inner = _i2 > 0 && _i2 < 13;

            var _radius = inner ? this.options.innerRadius : this.options.outerRadius;

            _tick.css({
              left: this.options.dialRadius + Math.sin(_radian) * _radius - this.options.tickRadius + 'px',
              top: this.options.dialRadius - Math.cos(_radian) * _radius - this.options.tickRadius + 'px'
            });

            _tick.html(_i2 === 0 ? '00' : _i2);

            this.hoursView.appendChild(_tick[0]); // tick.on(mousedownEvent, mousedown);
          }
        }
      }
    }, {
      key: "_buildMinutesView",
      value: function _buildMinutesView() {
        var $tick = $('<div class="timepicker-tick"></div>'); // Minutes view

        for (var i = 0; i < 60; i += 5) {
          var tick = $tick.clone();
          var radian = i / 30 * Math.PI;
          tick.css({
            left: this.options.dialRadius + Math.sin(radian) * this.options.outerRadius - this.options.tickRadius + 'px',
            top: this.options.dialRadius - Math.cos(radian) * this.options.outerRadius - this.options.tickRadius + 'px'
          });
          tick.html(Timepicker._addLeadingZero(i));
          this.minutesView.appendChild(tick[0]);
        }
      }
    }, {
      key: "_handleAmPmClick",
      value: function _handleAmPmClick(e) {
        var $btnClicked = $(e.target);
        this.amOrPm = $btnClicked.hasClass('am-btn') ? 'AM' : 'PM';

        this._updateAmPmView();
      }
    }, {
      key: "_updateAmPmView",
      value: function _updateAmPmView() {
        if (this.options.twelveHour) {
          this.$amBtn.toggleClass('text-primary', this.amOrPm === 'AM');
          this.$pmBtn.toggleClass('text-primary', this.amOrPm === 'PM');
        }
      }
    }, {
      key: "_updateTimeFromInput",
      value: function _updateTimeFromInput() {
        // Get the time
        var value = ((this.el.value || this.options.defaultTime || '') + '').split(':');

        if (this.options.twelveHour && !(typeof value[1] === 'undefined')) {
          if (value[1].toUpperCase().indexOf('AM') > 0) {
            this.amOrPm = 'AM';
          } else {
            this.amOrPm = 'PM';
          }

          value[1] = value[1].replace('AM', '').replace('PM', '');
        }

        if (value[0] === 'now') {
          var now = new Date(+new Date() + this.options.fromNow);
          value = [now.getHours(), now.getMinutes()];

          if (this.options.twelveHour) {
            this.amOrPm = value[0] >= 12 && value[0] < 24 ? 'PM' : 'AM';
          }
        }

        this.hours = +value[0] || 0;
        this.minutes = +value[1] || 0;
        this.spanHours.innerHTML = this.hours;
        this.spanMinutes.innerHTML = Timepicker._addLeadingZero(this.minutes);

        this._updateAmPmView();
      }
    }, {
      key: "showView",
      value: function showView(view, delay) {
        if (view === 'minutes' && $(this.hoursView).css('visibility') === 'visible') {// raiseCallback(this.options.beforeHourSelect);
        }

        var isHours = view === 'hours',
            nextView = isHours ? this.hoursView : this.minutesView,
            hideView = isHours ? this.minutesView : this.hoursView;
        this.currentView = view;
        $(this.spanHours).toggleClass('text-primary', isHours);
        $(this.spanMinutes).toggleClass('text-primary', !isHours); // Transition view

        hideView.classList.add('timepicker-dial-out');
        $(nextView).css('visibility', 'visible').removeClass('timepicker-dial-out'); // Reset clock hand

        this.resetClock(delay); // After transitions ended

        clearTimeout(this.toggleViewTimer);
        this.toggleViewTimer = setTimeout(function () {
          $(hideView).css('visibility', 'hidden');
        }, this.options.duration);
      }
    }, {
      key: "resetClock",
      value: function resetClock(delay) {
        var view = this.currentView,
            value = this[view],
            isHours = view === 'hours',
            unit = Math.PI / (isHours ? 6 : 30),
            radian = value * unit,
            radius = isHours && value > 0 && value < 13 ? this.options.innerRadius : this.options.outerRadius,
            x = Math.sin(radian) * radius,
            y = -Math.cos(radian) * radius,
            self = this;

        if (delay) {
          $(this.canvas).addClass('timepicker-canvas-out');
          setTimeout(function () {
            $(self.canvas).removeClass('timepicker-canvas-out');
            self.setHand(x, y);
          }, delay);
        } else {
          this.setHand(x, y);
        }
      }
    }, {
      key: "setHand",
      value: function setHand(x, y, roundBy5) {
        var _this60 = this;

        var radian = Math.atan2(x, -y),
            isHours = this.currentView === 'hours',
            unit = Math.PI / (isHours || roundBy5 ? 6 : 30),
            z = Math.sqrt(x * x + y * y),
            inner = isHours && z < (this.options.outerRadius + this.options.innerRadius) / 2,
            radius = inner ? this.options.innerRadius : this.options.outerRadius;

        if (this.options.twelveHour) {
          radius = this.options.outerRadius;
        } // Radian should in range [0, 2PI]


        if (radian < 0) {
          radian = Math.PI * 2 + radian;
        } // Get the round value


        var value = Math.round(radian / unit); // Get the round radian

        radian = value * unit; // Correct the hours or minutes

        if (this.options.twelveHour) {
          if (isHours) {
            if (value === 0) value = 12;
          } else {
            if (roundBy5) value *= 5;
            if (value === 60) value = 0;
          }
        } else {
          if (isHours) {
            if (value === 12) {
              value = 0;
            }

            value = inner ? value === 0 ? 12 : value : value === 0 ? 0 : value + 12;
          } else {
            if (roundBy5) {
              value *= 5;
            }

            if (value === 60) {
              value = 0;
            }
          }
        } // Once hours or minutes changed, vibrate the device


        if (this[this.currentView] !== value) {
          if (this.vibrate && this.options.vibrate) {
            // Do not vibrate too frequently
            if (!this.vibrateTimer) {
              navigator[this.vibrate](10);
              this.vibrateTimer = setTimeout(function () {
                _this60.vibrateTimer = null;
              }, 100);
            }
          }
        }

        this[this.currentView] = value;

        if (isHours) {
          this['spanHours'].innerHTML = value;
        } else {
          this['spanMinutes'].innerHTML = Timepicker._addLeadingZero(value);
        } // Set clock hand and others' position


        var cx1 = Math.sin(radian) * (radius - this.options.tickRadius),
            cy1 = -Math.cos(radian) * (radius - this.options.tickRadius),
            cx2 = Math.sin(radian) * radius,
            cy2 = -Math.cos(radian) * radius;
        this.hand.setAttribute('x2', cx1);
        this.hand.setAttribute('y2', cy1);
        this.bg.setAttribute('cx', cx2);
        this.bg.setAttribute('cy', cy2);
      }
    }, {
      key: "open",
      value: function open() {
        if (this.isOpen) {
          return;
        }

        this.isOpen = true;

        this._updateTimeFromInput();

        this.showView('hours');
        this.modal.open();
      }
    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        this.isOpen = false;
        this.modal.close();
      }
      /**
       * Finish timepicker selection.
       */

    }, {
      key: "done",
      value: function done(e, clearValue) {
        // Set input value
        var last = this.el.value;
        var value = clearValue ? '' : Timepicker._addLeadingZero(this.hours) + ':' + Timepicker._addLeadingZero(this.minutes);
        this.time = value;

        if (!clearValue && this.options.twelveHour) {
          value = value + " " + this.amOrPm;
        }

        this.el.value = value; // Trigger change event

        if (value !== last) {
          this.$el.trigger('change');
        }

        this.close();
        this.el.focus();
      }
    }, {
      key: "clear",
      value: function clear() {
        this.done(null, true);
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Timepicker.__proto__ || Object.getPrototypeOf(Timepicker), "init", this).call(this, this, els, options);
      }
    }, {
      key: "_addLeadingZero",
      value: function _addLeadingZero(num) {
        return (num < 10 ? '0' : '') + num;
      }
    }, {
      key: "_createSVGEl",
      value: function _createSVGEl(name) {
        var svgNS = 'http://www.w3.org/2000/svg';
        return document.createElementNS(svgNS, name);
      }
      /**
       * @typedef {Object} Point
       * @property {number} x The X Coordinate
       * @property {number} y The Y Coordinate
       */

      /**
       * Get x position of mouse or touch event
       * @param {Event} e
       * @return {Point} x and y location
       */

    }, {
      key: "_Pos",
      value: function _Pos(e) {
        if (e.targetTouches && e.targetTouches.length >= 1) {
          return {
            x: e.targetTouches[0].clientX,
            y: e.targetTouches[0].clientY
          };
        } // mouse event


        return {
          x: e.clientX,
          y: e.clientY
        };
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Timepicker;
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return Timepicker;
  }(Component);

  Timepicker._template = ['<div class= "modal timepicker-modal">', '<div class="modal-content timepicker-container">', '<div class="timepicker-digital-display">', '<div class="timepicker-text-container">', '<div class="timepicker-display-column">', '<span class="timepicker-span-hours text-primary"></span>', ':', '<span class="timepicker-span-minutes"></span>', '</div>', '<div class="timepicker-display-column timepicker-display-am-pm">', '<div class="timepicker-span-am-pm"></div>', '</div>', '</div>', '</div>', '<div class="timepicker-analog-display">', '<div class="timepicker-plate">', '<div class="timepicker-canvas"></div>', '<div class="timepicker-dial timepicker-hours"></div>', '<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>', '</div>', '<div class="timepicker-footer"></div>', '</div>', '</div>', '</div>'].join('');
  M.Timepicker = Timepicker;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Timepicker, 'timepicker', 'M_Timepicker');
  }
})(cash);

;

(function ($) {
  'use strict';

  var _defaults = {};
  /**
   * @class
   *
   */

  var CharacterCounter = function (_Component17) {
    _inherits(CharacterCounter, _Component17);
    /**
     * Construct CharacterCounter instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */


    function CharacterCounter(el, options) {
      _classCallCheck(this, CharacterCounter);

      var _this61 = _possibleConstructorReturn(this, (CharacterCounter.__proto__ || Object.getPrototypeOf(CharacterCounter)).call(this, CharacterCounter, el, options));

      _this61.el.M_CharacterCounter = _this61;
      /**
       * Options for the character counter
       */

      _this61.options = $.extend({}, CharacterCounter.defaults, options);
      _this61.isInvalid = false;
      _this61.isValidLength = false;

      _this61._setupCounter();

      _this61._setupEventHandlers();

      return _this61;
    }

    _createClass(CharacterCounter, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();

        this.el.CharacterCounter = undefined;

        this._removeCounter();
      }
      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleUpdateCounterBound = this.updateCounter.bind(this);
        this.el.addEventListener('focus', this._handleUpdateCounterBound, true);
        this.el.addEventListener('input', this._handleUpdateCounterBound, true);
      }
      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('focus', this._handleUpdateCounterBound, true);
        this.el.removeEventListener('input', this._handleUpdateCounterBound, true);
      }
      /**
       * Setup counter element
       */

    }, {
      key: "_setupCounter",
      value: function _setupCounter() {
        this.counterEl = document.createElement('span');
        $(this.counterEl).addClass('character-counter').css({
          "float": 'right',
          'font-size': '12px',
          height: 1
        });
        this.$el.parent().append(this.counterEl);
      }
      /**
       * Remove counter element
       */

    }, {
      key: "_removeCounter",
      value: function _removeCounter() {
        $(this.counterEl).remove();
      }
      /**
       * Update counter
       */

    }, {
      key: "updateCounter",
      value: function updateCounter() {
        var maxLength = +this.$el.attr('data-length'),
            actualLength = this.el.value.length;
        this.isValidLength = actualLength <= maxLength;
        var counterString = actualLength;

        if (maxLength) {
          counterString += '/' + maxLength;

          this._validateInput();
        }

        $(this.counterEl).html(counterString);
      }
      /**
       * Add validation classes
       */

    }, {
      key: "_validateInput",
      value: function _validateInput() {
        if (this.isValidLength && this.isInvalid) {
          this.isInvalid = false;
          this.$el.removeClass('invalid');
        } else if (!this.isValidLength && !this.isInvalid) {
          this.isInvalid = true;
          this.$el.removeClass('valid');
          this.$el.addClass('invalid');
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(CharacterCounter.__proto__ || Object.getPrototypeOf(CharacterCounter), "init", this).call(this, this, els, options);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_CharacterCounter;
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return CharacterCounter;
  }(Component);

  M.CharacterCounter = CharacterCounter;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(CharacterCounter, 'characterCounter', 'M_CharacterCounter');
  }
})(cash);

;

(function ($) {
  'use strict';

  var _defaults = {
    duration: 200,
    // ms
    dist: -100,
    // zoom scale TODO: make this more intuitive as an option
    shift: 0,
    // spacing for center image
    padding: 0,
    // Padding between non center items
    numVisible: 5,
    // Number of visible items in carousel
    fullWidth: false,
    // Change to full width styles
    indicators: false,
    // Toggle indicators
    noWrap: false,
    // Don't wrap around and cycle through items.
    onCycleTo: null // Callback for when a new slide is cycled to.

  };
  /**
   * @class
   *
   */

  var Carousel = function (_Component18) {
    _inherits(Carousel, _Component18);
    /**
     * Construct Carousel instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */


    function Carousel(el, options) {
      _classCallCheck(this, Carousel);

      var _this62 = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, Carousel, el, options));

      _this62.el.M_Carousel = _this62;
      /**
       * Options for the carousel
       * @member Carousel#options
       * @prop {Number} duration
       * @prop {Number} dist
       * @prop {Number} shift
       * @prop {Number} padding
       * @prop {Number} numVisible
       * @prop {Boolean} fullWidth
       * @prop {Boolean} indicators
       * @prop {Boolean} noWrap
       * @prop {Function} onCycleTo
       */

      _this62.options = $.extend({}, Carousel.defaults, options); // Setup

      _this62.hasMultipleSlides = _this62.$el.find('.carousel-item').length > 1;
      _this62.showIndicators = _this62.options.indicators && _this62.hasMultipleSlides;
      _this62.noWrap = _this62.options.noWrap || !_this62.hasMultipleSlides;
      _this62.pressed = false;
      _this62.dragged = false;
      _this62.offset = _this62.target = 0;
      _this62.images = [];
      _this62.itemWidth = _this62.$el.find('.carousel-item').first().innerWidth();
      _this62.itemHeight = _this62.$el.find('.carousel-item').first().innerHeight();
      _this62.dim = _this62.itemWidth * 2 + _this62.options.padding || 1; // Make sure dim is non zero for divisions.

      _this62._autoScrollBound = _this62._autoScroll.bind(_this62);
      _this62._trackBound = _this62._track.bind(_this62); // Full Width carousel setup

      if (_this62.options.fullWidth) {
        _this62.options.dist = 0;

        _this62._setCarouselHeight(); // Offset fixed items when indicators.


        if (_this62.showIndicators) {
          _this62.$el.find('.carousel-fixed-item').addClass('with-indicators');
        }
      } // Iterate through slides


      _this62.$indicators = $('<ul class="indicators"></ul>');

      _this62.$el.find('.carousel-item').each(function (el, i) {
        _this62.images.push(el);

        if (_this62.showIndicators) {
          var $indicator = $('<li class="indicator-item"></li>'); // Add active to first by default.

          if (i === 0) {
            $indicator[0].classList.add('active');
          }

          _this62.$indicators.append($indicator);
        }
      });

      if (_this62.showIndicators) {
        _this62.$el.append(_this62.$indicators);
      }

      _this62.count = _this62.images.length; // Cap numVisible at count

      _this62.options.numVisible = Math.min(_this62.count, _this62.options.numVisible); // Setup cross browser string

      _this62.xform = 'transform';
      ['webkit', 'Moz', 'O', 'ms'].every(function (prefix) {
        var e = prefix + 'Transform';

        if (typeof document.body.style[e] !== 'undefined') {
          _this62.xform = e;
          return false;
        }

        return true;
      });

      _this62._setupEventHandlers();

      _this62._scroll(_this62.offset);

      return _this62;
    }

    _createClass(Carousel, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();

        this.el.M_Carousel = undefined;
      }
      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        var _this63 = this;

        this._handleCarouselTapBound = this._handleCarouselTap.bind(this);
        this._handleCarouselDragBound = this._handleCarouselDrag.bind(this);
        this._handleCarouselReleaseBound = this._handleCarouselRelease.bind(this);
        this._handleCarouselClickBound = this._handleCarouselClick.bind(this);

        if (typeof window.ontouchstart !== 'undefined') {
          this.el.addEventListener('touchstart', this._handleCarouselTapBound);
          this.el.addEventListener('touchmove', this._handleCarouselDragBound);
          this.el.addEventListener('touchend', this._handleCarouselReleaseBound);
        }

        this.el.addEventListener('mousedown', this._handleCarouselTapBound);
        this.el.addEventListener('mousemove', this._handleCarouselDragBound);
        this.el.addEventListener('mouseup', this._handleCarouselReleaseBound);
        this.el.addEventListener('mouseleave', this._handleCarouselReleaseBound);
        this.el.addEventListener('click', this._handleCarouselClickBound);

        if (this.showIndicators && this.$indicators) {
          this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this);
          this.$indicators.find('.indicator-item').each(function (el, i) {
            el.addEventListener('click', _this63._handleIndicatorClickBound);
          });
        } // Resize


        var throttledResize = M.throttle(this._handleResize, 200);
        this._handleThrottledResizeBound = throttledResize.bind(this);
        window.addEventListener('resize', this._handleThrottledResizeBound);
      }
      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        var _this64 = this;

        if (typeof window.ontouchstart !== 'undefined') {
          this.el.removeEventListener('touchstart', this._handleCarouselTapBound);
          this.el.removeEventListener('touchmove', this._handleCarouselDragBound);
          this.el.removeEventListener('touchend', this._handleCarouselReleaseBound);
        }

        this.el.removeEventListener('mousedown', this._handleCarouselTapBound);
        this.el.removeEventListener('mousemove', this._handleCarouselDragBound);
        this.el.removeEventListener('mouseup', this._handleCarouselReleaseBound);
        this.el.removeEventListener('mouseleave', this._handleCarouselReleaseBound);
        this.el.removeEventListener('click', this._handleCarouselClickBound);

        if (this.showIndicators && this.$indicators) {
          this.$indicators.find('.indicator-item').each(function (el, i) {
            el.removeEventListener('click', _this64._handleIndicatorClickBound);
          });
        }

        window.removeEventListener('resize', this._handleThrottledResizeBound);
      }
      /**
       * Handle Carousel Tap
       * @param {Event} e
       */

    }, {
      key: "_handleCarouselTap",
      value: function _handleCarouselTap(e) {
        // Fixes firefox draggable image bug
        if (e.type === 'mousedown' && $(e.target).is('img')) {
          e.preventDefault();
        }

        this.pressed = true;
        this.dragged = false;
        this.verticalDragged = false;
        this.reference = this._xpos(e);
        this.referenceY = this._ypos(e);
        this.velocity = this.amplitude = 0;
        this.frame = this.offset;
        this.timestamp = Date.now();
        clearInterval(this.ticker);
        this.ticker = setInterval(this._trackBound, 100);
      }
      /**
       * Handle Carousel Drag
       * @param {Event} e
       */

    }, {
      key: "_handleCarouselDrag",
      value: function _handleCarouselDrag(e) {
        var x = void 0,
            y = void 0,
            delta = void 0,
            deltaY = void 0;

        if (this.pressed) {
          x = this._xpos(e);
          y = this._ypos(e);
          delta = this.reference - x;
          deltaY = Math.abs(this.referenceY - y);

          if (deltaY < 30 && !this.verticalDragged) {
            // If vertical scrolling don't allow dragging.
            if (delta > 2 || delta < -2) {
              this.dragged = true;
              this.reference = x;

              this._scroll(this.offset + delta);
            }
          } else if (this.dragged) {
            // If dragging don't allow vertical scroll.
            e.preventDefault();
            e.stopPropagation();
            return false;
          } else {
            // Vertical scrolling.
            this.verticalDragged = true;
          }
        }

        if (this.dragged) {
          // If dragging don't allow vertical scroll.
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }
      /**
       * Handle Carousel Release
       * @param {Event} e
       */

    }, {
      key: "_handleCarouselRelease",
      value: function _handleCarouselRelease(e) {
        if (this.pressed) {
          this.pressed = false;
        } else {
          return;
        }

        clearInterval(this.ticker);
        this.target = this.offset;

        if (this.velocity > 10 || this.velocity < -10) {
          this.amplitude = 0.9 * this.velocity;
          this.target = this.offset + this.amplitude;
        }

        this.target = Math.round(this.target / this.dim) * this.dim; // No wrap of items.

        if (this.noWrap) {
          if (this.target >= this.dim * (this.count - 1)) {
            this.target = this.dim * (this.count - 1);
          } else if (this.target < 0) {
            this.target = 0;
          }
        }

        this.amplitude = this.target - this.offset;
        this.timestamp = Date.now();
        requestAnimationFrame(this._autoScrollBound);

        if (this.dragged) {
          e.preventDefault();
          e.stopPropagation();
        }

        return false;
      }
      /**
       * Handle Carousel CLick
       * @param {Event} e
       */

    }, {
      key: "_handleCarouselClick",
      value: function _handleCarouselClick(e) {
        // Disable clicks if carousel was dragged.
        if (this.dragged) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        } else if (!this.options.fullWidth) {
          var clickedIndex = $(e.target).closest('.carousel-item').index();
          var diff = this._wrap(this.center) - clickedIndex; // Disable clicks if carousel was shifted by click

          if (diff !== 0) {
            e.preventDefault();
            e.stopPropagation();
          }

          this._cycleTo(clickedIndex);
        }
      }
      /**
       * Handle Indicator CLick
       * @param {Event} e
       */

    }, {
      key: "_handleIndicatorClick",
      value: function _handleIndicatorClick(e) {
        e.stopPropagation();
        var indicator = $(e.target).closest('.indicator-item');

        if (indicator.length) {
          this._cycleTo(indicator.index());
        }
      }
      /**
       * Handle Throttle Resize
       * @param {Event} e
       */

    }, {
      key: "_handleResize",
      value: function _handleResize(e) {
        if (this.options.fullWidth) {
          this.itemWidth = this.$el.find('.carousel-item').first().innerWidth();
          this.imageHeight = this.$el.find('.carousel-item.active').height();
          this.dim = this.itemWidth * 2 + this.options.padding;
          this.offset = this.center * 2 * this.itemWidth;
          this.target = this.offset;

          this._setCarouselHeight(true);
        } else {
          this._scroll();
        }
      }
      /**
       * Set carousel height based on first slide
       * @param {Booleam} imageOnly - true for image slides
       */

    }, {
      key: "_setCarouselHeight",
      value: function _setCarouselHeight(imageOnly) {
        var _this65 = this;

        var firstSlide = this.$el.find('.carousel-item.active').length ? this.$el.find('.carousel-item.active').first() : this.$el.find('.carousel-item').first();
        var firstImage = firstSlide.find('img').first();

        if (firstImage.length) {
          if (firstImage[0].complete) {
            // If image won't trigger the load event
            var imageHeight = firstImage.height();

            if (imageHeight > 0) {
              this.$el.css('height', imageHeight + 'px');
            } else {
              // If image still has no height, use the natural dimensions to calculate
              var naturalWidth = firstImage[0].naturalWidth;
              var naturalHeight = firstImage[0].naturalHeight;
              var adjustedHeight = this.$el.width() / naturalWidth * naturalHeight;
              this.$el.css('height', adjustedHeight + 'px');
            }
          } else {
            // Get height when image is loaded normally
            firstImage.one('load', function (el, i) {
              _this65.$el.css('height', el.offsetHeight + 'px');
            });
          }
        } else if (!imageOnly) {
          var slideHeight = firstSlide.height();
          this.$el.css('height', slideHeight + 'px');
        }
      }
      /**
       * Get x position from event
       * @param {Event} e
       */

    }, {
      key: "_xpos",
      value: function _xpos(e) {
        // touch event
        if (e.targetTouches && e.targetTouches.length >= 1) {
          return e.targetTouches[0].clientX;
        } // mouse event


        return e.clientX;
      }
      /**
       * Get y position from event
       * @param {Event} e
       */

    }, {
      key: "_ypos",
      value: function _ypos(e) {
        // touch event
        if (e.targetTouches && e.targetTouches.length >= 1) {
          return e.targetTouches[0].clientY;
        } // mouse event


        return e.clientY;
      }
      /**
       * Wrap index
       * @param {Number} x
       */

    }, {
      key: "_wrap",
      value: function _wrap(x) {
        return x >= this.count ? x % this.count : x < 0 ? this._wrap(this.count + x % this.count) : x;
      }
      /**
       * Tracks scrolling information
       */

    }, {
      key: "_track",
      value: function _track() {
        var now = void 0,
            elapsed = void 0,
            delta = void 0,
            v = void 0;
        now = Date.now();
        elapsed = now - this.timestamp;
        this.timestamp = now;
        delta = this.offset - this.frame;
        this.frame = this.offset;
        v = 1000 * delta / (1 + elapsed);
        this.velocity = 0.8 * v + 0.2 * this.velocity;
      }
      /**
       * Auto scrolls to nearest carousel item.
       */

    }, {
      key: "_autoScroll",
      value: function _autoScroll() {
        var elapsed = void 0,
            delta = void 0;

        if (this.amplitude) {
          elapsed = Date.now() - this.timestamp;
          delta = this.amplitude * Math.exp(-elapsed / this.options.duration);

          if (delta > 2 || delta < -2) {
            this._scroll(this.target - delta);

            requestAnimationFrame(this._autoScrollBound);
          } else {
            this._scroll(this.target);
          }
        }
      }
      /**
       * Scroll to target
       * @param {Number} x
       */

    }, {
      key: "_scroll",
      value: function _scroll(x) {
        var _this66 = this; // Track scrolling state


        if (!this.$el.hasClass('scrolling')) {
          this.el.classList.add('scrolling');
        }

        if (this.scrollingTimeout != null) {
          window.clearTimeout(this.scrollingTimeout);
        }

        this.scrollingTimeout = window.setTimeout(function () {
          _this66.$el.removeClass('scrolling');
        }, this.options.duration); // Start actual scroll

        var i = void 0,
            half = void 0,
            delta = void 0,
            dir = void 0,
            tween = void 0,
            el = void 0,
            alignment = void 0,
            zTranslation = void 0,
            tweenedOpacity = void 0,
            centerTweenedOpacity = void 0;
        var lastCenter = this.center;
        var numVisibleOffset = 1 / this.options.numVisible;
        this.offset = typeof x === 'number' ? x : this.offset;
        this.center = Math.floor((this.offset + this.dim / 2) / this.dim);
        delta = this.offset - this.center * this.dim;
        dir = delta < 0 ? 1 : -1;
        tween = -dir * delta * 2 / this.dim;
        half = this.count >> 1;

        if (this.options.fullWidth) {
          alignment = 'translateX(0)';
          centerTweenedOpacity = 1;
        } else {
          alignment = 'translateX(' + (this.el.clientWidth - this.itemWidth) / 2 + 'px) ';
          alignment += 'translateY(' + (this.el.clientHeight - this.itemHeight) / 2 + 'px)';
          centerTweenedOpacity = 1 - numVisibleOffset * tween;
        } // Set indicator active


        if (this.showIndicators) {
          var diff = this.center % this.count;
          var activeIndicator = this.$indicators.find('.indicator-item.active');

          if (activeIndicator.index() !== diff) {
            activeIndicator.removeClass('active');
            this.$indicators.find('.indicator-item').eq(diff)[0].classList.add('active');
          }
        } // center
        // Don't show wrapped items.


        if (!this.noWrap || this.center >= 0 && this.center < this.count) {
          el = this.images[this._wrap(this.center)]; // Add active class to center item.

          if (!$(el).hasClass('active')) {
            this.$el.find('.carousel-item').removeClass('active');
            el.classList.add('active');
          }

          var transformString = alignment + " translateX(" + -delta / 2 + "px) translateX(" + dir * this.options.shift * tween * i + "px) translateZ(" + this.options.dist * tween + "px)";

          this._updateItemStyle(el, centerTweenedOpacity, 0, transformString);
        }

        for (i = 1; i <= half; ++i) {
          // right side
          if (this.options.fullWidth) {
            zTranslation = this.options.dist;
            tweenedOpacity = i === half && delta < 0 ? 1 - tween : 1;
          } else {
            zTranslation = this.options.dist * (i * 2 + tween * dir);
            tweenedOpacity = 1 - numVisibleOffset * (i * 2 + tween * dir);
          } // Don't show wrapped items.


          if (!this.noWrap || this.center + i < this.count) {
            el = this.images[this._wrap(this.center + i)];

            var _transformString = alignment + " translateX(" + (this.options.shift + (this.dim * i - delta) / 2) + "px) translateZ(" + zTranslation + "px)";

            this._updateItemStyle(el, tweenedOpacity, -i, _transformString);
          } // left side


          if (this.options.fullWidth) {
            zTranslation = this.options.dist;
            tweenedOpacity = i === half && delta > 0 ? 1 - tween : 1;
          } else {
            zTranslation = this.options.dist * (i * 2 - tween * dir);
            tweenedOpacity = 1 - numVisibleOffset * (i * 2 - tween * dir);
          } // Don't show wrapped items.


          if (!this.noWrap || this.center - i >= 0) {
            el = this.images[this._wrap(this.center - i)];

            var _transformString2 = alignment + " translateX(" + (-this.options.shift + (-this.dim * i - delta) / 2) + "px) translateZ(" + zTranslation + "px)";

            this._updateItemStyle(el, tweenedOpacity, -i, _transformString2);
          }
        } // center
        // Don't show wrapped items.


        if (!this.noWrap || this.center >= 0 && this.center < this.count) {
          el = this.images[this._wrap(this.center)];

          var _transformString3 = alignment + " translateX(" + -delta / 2 + "px) translateX(" + dir * this.options.shift * tween + "px) translateZ(" + this.options.dist * tween + "px)";

          this._updateItemStyle(el, centerTweenedOpacity, 0, _transformString3);
        } // onCycleTo callback


        var $currItem = this.$el.find('.carousel-item').eq(this._wrap(this.center));

        if (lastCenter !== this.center && typeof this.options.onCycleTo === 'function') {
          this.options.onCycleTo.call(this, $currItem[0], this.dragged);
        } // One time callback


        if (typeof this.oneTimeCallback === 'function') {
          this.oneTimeCallback.call(this, $currItem[0], this.dragged);
          this.oneTimeCallback = null;
        }
      }
      /**
       * Cycle to target
       * @param {Element} el
       * @param {Number} opacity
       * @param {Number} zIndex
       * @param {String} transform
       */

    }, {
      key: "_updateItemStyle",
      value: function _updateItemStyle(el, opacity, zIndex, transform) {
        el.style[this.xform] = transform;
        el.style.zIndex = zIndex;
        el.style.opacity = opacity;
        el.style.visibility = 'visible';
      }
      /**
       * Cycle to target
       * @param {Number} n
       * @param {Function} callback
       */

    }, {
      key: "_cycleTo",
      value: function _cycleTo(n, callback) {
        var diff = this.center % this.count - n; // Account for wraparound.

        if (!this.noWrap) {
          if (diff < 0) {
            if (Math.abs(diff + this.count) < Math.abs(diff)) {
              diff += this.count;
            }
          } else if (diff > 0) {
            if (Math.abs(diff - this.count) < diff) {
              diff -= this.count;
            }
          }
        }

        this.target = this.dim * Math.round(this.offset / this.dim); // Next

        if (diff < 0) {
          this.target += this.dim * Math.abs(diff); // Prev
        } else if (diff > 0) {
          this.target -= this.dim * diff;
        } // Set one time callback


        if (typeof callback === 'function') {
          this.oneTimeCallback = callback;
        } // Scroll


        if (this.offset !== this.target) {
          this.amplitude = this.target - this.offset;
          this.timestamp = Date.now();
          requestAnimationFrame(this._autoScrollBound);
        }
      }
      /**
       * Cycle to next item
       * @param {Number} [n]
       */

    }, {
      key: "next",
      value: function next(n) {
        if (n === undefined || isNaN(n)) {
          n = 1;
        }

        var index = this.center + n;

        if (index >= this.count || index < 0) {
          if (this.noWrap) {
            return;
          }

          index = this._wrap(index);
        }

        this._cycleTo(index);
      }
      /**
       * Cycle to previous item
       * @param {Number} [n]
       */

    }, {
      key: "prev",
      value: function prev(n) {
        if (n === undefined || isNaN(n)) {
          n = 1;
        }

        var index = this.center - n;

        if (index >= this.count || index < 0) {
          if (this.noWrap) {
            return;
          }

          index = this._wrap(index);
        }

        this._cycleTo(index);
      }
      /**
       * Cycle to nth item
       * @param {Number} [n]
       * @param {Function} callback
       */

    }, {
      key: "set",
      value: function set(n, callback) {
        if (n === undefined || isNaN(n)) {
          n = 0;
        }

        if (n > this.count || n < 0) {
          if (this.noWrap) {
            return;
          }

          n = this._wrap(n);
        }

        this._cycleTo(n, callback);
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Carousel.__proto__ || Object.getPrototypeOf(Carousel), "init", this).call(this, this, els, options);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Carousel;
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return Carousel;
  }(Component);

  M.Carousel = Carousel;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Carousel, 'carousel', 'M_Carousel');
  }
})(cash);

;

(function ($) {
  'use strict';

  var _defaults = {
    onOpen: undefined,
    onClose: undefined
  };
  /**
   * @class
   *
   */

  var TapTarget = function (_Component19) {
    _inherits(TapTarget, _Component19);
    /**
     * Construct TapTarget instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */


    function TapTarget(el, options) {
      _classCallCheck(this, TapTarget);

      var _this67 = _possibleConstructorReturn(this, (TapTarget.__proto__ || Object.getPrototypeOf(TapTarget)).call(this, TapTarget, el, options));

      _this67.el.M_TapTarget = _this67;
      /**
       * Options for the select
       * @member TapTarget#options
       * @prop {Function} onOpen - Callback function called when feature discovery is opened
       * @prop {Function} onClose - Callback function called when feature discovery is closed
       */

      _this67.options = $.extend({}, TapTarget.defaults, options);
      _this67.isOpen = false; // setup

      _this67.$origin = $('#' + _this67.$el.attr('data-target'));

      _this67._setup();

      _this67._calculatePositioning();

      _this67._setupEventHandlers();

      return _this67;
    }

    _createClass(TapTarget, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();

        this.el.TapTarget = undefined;
      }
      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleDocumentClickBound = this._handleDocumentClick.bind(this);
        this._handleTargetClickBound = this._handleTargetClick.bind(this);
        this._handleOriginClickBound = this._handleOriginClick.bind(this);
        this.el.addEventListener('click', this._handleTargetClickBound);
        this.originEl.addEventListener('click', this._handleOriginClickBound); // Resize

        var throttledResize = M.throttle(this._handleResize, 200);
        this._handleThrottledResizeBound = throttledResize.bind(this);
        window.addEventListener('resize', this._handleThrottledResizeBound);
      }
      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('click', this._handleTargetClickBound);
        this.originEl.removeEventListener('click', this._handleOriginClickBound);
        window.removeEventListener('resize', this._handleThrottledResizeBound);
      }
      /**
       * Handle Target Click
       * @param {Event} e
       */

    }, {
      key: "_handleTargetClick",
      value: function _handleTargetClick(e) {
        this.open();
      }
      /**
       * Handle Origin Click
       * @param {Event} e
       */

    }, {
      key: "_handleOriginClick",
      value: function _handleOriginClick(e) {
        this.close();
      }
      /**
       * Handle Resize
       * @param {Event} e
       */

    }, {
      key: "_handleResize",
      value: function _handleResize(e) {
        this._calculatePositioning();
      }
      /**
       * Handle Resize
       * @param {Event} e
       */

    }, {
      key: "_handleDocumentClick",
      value: function _handleDocumentClick(e) {
        if (!$(e.target).closest('.tap-target-wrapper').length) {
          this.close();
          e.preventDefault();
          e.stopPropagation();
        }
      }
      /**
       * Setup Tap Target
       */

    }, {
      key: "_setup",
      value: function _setup() {
        // Creating tap target
        this.wrapper = this.$el.parent()[0];
        this.waveEl = $(this.wrapper).find('.tap-target-wave')[0];
        this.originEl = $(this.wrapper).find('.tap-target-origin')[0];
        this.contentEl = this.$el.find('.tap-target-content')[0]; // Creating wrapper

        if (!$(this.wrapper).hasClass('.tap-target-wrapper')) {
          this.wrapper = document.createElement('div');
          this.wrapper.classList.add('tap-target-wrapper');
          this.$el.before($(this.wrapper));
          this.wrapper.append(this.el);
        } // Creating content


        if (!this.contentEl) {
          this.contentEl = document.createElement('div');
          this.contentEl.classList.add('tap-target-content');
          this.$el.append(this.contentEl);
        } // Creating foreground wave


        if (!this.waveEl) {
          this.waveEl = document.createElement('div');
          this.waveEl.classList.add('tap-target-wave'); // Creating origin

          if (!this.originEl) {
            this.originEl = this.$origin.clone(true, true);
            this.originEl.addClass('tap-target-origin');
            this.originEl.removeAttr('id');
            this.originEl.removeAttr('style');
            this.originEl = this.originEl[0];
            this.waveEl.append(this.originEl);
          }

          this.wrapper.append(this.waveEl);
        }
      }
      /**
       * Calculate positioning
       */

    }, {
      key: "_calculatePositioning",
      value: function _calculatePositioning() {
        // Element or parent is fixed position?
        var isFixed = this.$origin.css('position') === 'fixed';

        if (!isFixed) {
          var parents = this.$origin.parents();

          for (var i = 0; i < parents.length; i++) {
            isFixed = $(parents[i]).css('position') == 'fixed';

            if (isFixed) {
              break;
            }
          }
        } // Calculating origin


        var originWidth = this.$origin.outerWidth();
        var originHeight = this.$origin.outerHeight();
        var originTop = isFixed ? this.$origin.offset().top - M.getDocumentScrollTop() : this.$origin.offset().top;
        var originLeft = isFixed ? this.$origin.offset().left - M.getDocumentScrollLeft() : this.$origin.offset().left; // Calculating screen

        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var centerX = windowWidth / 2;
        var centerY = windowHeight / 2;
        var isLeft = originLeft <= centerX;
        var isRight = originLeft > centerX;
        var isTop = originTop <= centerY;
        var isBottom = originTop > centerY;
        var isCenterX = originLeft >= windowWidth * 0.25 && originLeft <= windowWidth * 0.75; // Calculating tap target

        var tapTargetWidth = this.$el.outerWidth();
        var tapTargetHeight = this.$el.outerHeight();
        var tapTargetTop = originTop + originHeight / 2 - tapTargetHeight / 2;
        var tapTargetLeft = originLeft + originWidth / 2 - tapTargetWidth / 2;
        var tapTargetPosition = isFixed ? 'fixed' : 'absolute'; // Calculating content

        var tapTargetTextWidth = isCenterX ? tapTargetWidth : tapTargetWidth / 2 + originWidth;
        var tapTargetTextHeight = tapTargetHeight / 2;
        var tapTargetTextTop = isTop ? tapTargetHeight / 2 : 0;
        var tapTargetTextBottom = 0;
        var tapTargetTextLeft = isLeft && !isCenterX ? tapTargetWidth / 2 - originWidth : 0;
        var tapTargetTextRight = 0;
        var tapTargetTextPadding = originWidth;
        var tapTargetTextAlign = isBottom ? 'bottom' : 'top'; // Calculating wave

        var tapTargetWaveWidth = originWidth > originHeight ? originWidth * 2 : originWidth * 2;
        var tapTargetWaveHeight = tapTargetWaveWidth;
        var tapTargetWaveTop = tapTargetHeight / 2 - tapTargetWaveHeight / 2;
        var tapTargetWaveLeft = tapTargetWidth / 2 - tapTargetWaveWidth / 2; // Setting tap target

        var tapTargetWrapperCssObj = {};
        tapTargetWrapperCssObj.top = isTop ? tapTargetTop + 'px' : '';
        tapTargetWrapperCssObj.right = isRight ? windowWidth - tapTargetLeft - tapTargetWidth + 'px' : '';
        tapTargetWrapperCssObj.bottom = isBottom ? windowHeight - tapTargetTop - tapTargetHeight + 'px' : '';
        tapTargetWrapperCssObj.left = isLeft ? tapTargetLeft + 'px' : '';
        tapTargetWrapperCssObj.position = tapTargetPosition;
        $(this.wrapper).css(tapTargetWrapperCssObj); // Setting content

        $(this.contentEl).css({
          width: tapTargetTextWidth + 'px',
          height: tapTargetTextHeight + 'px',
          top: tapTargetTextTop + 'px',
          right: tapTargetTextRight + 'px',
          bottom: tapTargetTextBottom + 'px',
          left: tapTargetTextLeft + 'px',
          padding: tapTargetTextPadding + 'px',
          verticalAlign: tapTargetTextAlign
        }); // Setting wave

        $(this.waveEl).css({
          top: tapTargetWaveTop + 'px',
          left: tapTargetWaveLeft + 'px',
          width: tapTargetWaveWidth + 'px',
          height: tapTargetWaveHeight + 'px'
        });
      }
      /**
       * Open TapTarget
       */

    }, {
      key: "open",
      value: function open() {
        if (this.isOpen) {
          return;
        } // onOpen callback


        if (typeof this.options.onOpen === 'function') {
          this.options.onOpen.call(this, this.$origin[0]);
        }

        this.isOpen = true;
        this.wrapper.classList.add('open');
        document.body.addEventListener('click', this._handleDocumentClickBound, true);
        document.body.addEventListener('touchend', this._handleDocumentClickBound);
      }
      /**
       * Close Tap Target
       */

    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        } // onClose callback


        if (typeof this.options.onClose === 'function') {
          this.options.onClose.call(this, this.$origin[0]);
        }

        this.isOpen = false;
        this.wrapper.classList.remove('open');
        document.body.removeEventListener('click', this._handleDocumentClickBound, true);
        document.body.removeEventListener('touchend', this._handleDocumentClickBound);
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(TapTarget.__proto__ || Object.getPrototypeOf(TapTarget), "init", this).call(this, this, els, options);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_TapTarget;
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return TapTarget;
  }(Component);

  M.TapTarget = TapTarget;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(TapTarget, 'tapTarget', 'M_TapTarget');
  }
})(cash);

;

(function ($) {
  'use strict';

  var _defaults = {
    classes: '',
    dropdownOptions: {}
  };
  /**
   * @class
   *
   */

  var FormSelect = function (_Component20) {
    _inherits(FormSelect, _Component20);
    /**
     * Construct FormSelect instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */


    function FormSelect(el, options) {
      _classCallCheck(this, FormSelect); // Don't init if browser default version


      var _this68 = _possibleConstructorReturn(this, (FormSelect.__proto__ || Object.getPrototypeOf(FormSelect)).call(this, FormSelect, el, options));

      if (_this68.$el.hasClass('browser-default')) {
        return _possibleConstructorReturn(_this68);
      }

      _this68.el.M_FormSelect = _this68;
      /**
       * Options for the select
       * @member FormSelect#options
       */

      _this68.options = $.extend({}, FormSelect.defaults, options);
      _this68.isMultiple = _this68.$el.prop('multiple'); // Setup

      _this68.el.tabIndex = -1;
      _this68._keysSelected = {};
      _this68._valueDict = {}; // Maps key to original and generated option element.

      _this68._setupDropdown();

      _this68._setupEventHandlers();

      return _this68;
    }

    _createClass(FormSelect, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();

        this._removeDropdown();

        this.el.M_FormSelect = undefined;
      }
      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        var _this69 = this;

        this._handleSelectChangeBound = this._handleSelectChange.bind(this);
        this._handleOptionClickBound = this._handleOptionClick.bind(this);
        this._handleInputClickBound = this._handleInputClick.bind(this);
        $(this.dropdownOptions).find('li:not(.optgroup)').each(function (el) {
          el.addEventListener('click', _this69._handleOptionClickBound);
        });
        this.el.addEventListener('change', this._handleSelectChangeBound);
        this.input.addEventListener('click', this._handleInputClickBound);
      }
      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        var _this70 = this;

        $(this.dropdownOptions).find('li:not(.optgroup)').each(function (el) {
          el.removeEventListener('click', _this70._handleOptionClickBound);
        });
        this.el.removeEventListener('change', this._handleSelectChangeBound);
        this.input.removeEventListener('click', this._handleInputClickBound);
      }
      /**
       * Handle Select Change
       * @param {Event} e
       */

    }, {
      key: "_handleSelectChange",
      value: function _handleSelectChange(e) {
        this._setValueToInput();
      }
      /**
       * Handle Option Click
       * @param {Event} e
       */

    }, {
      key: "_handleOptionClick",
      value: function _handleOptionClick(e) {
        e.preventDefault();
        var option = $(e.target).closest('li')[0];
        var key = option.id;

        if (!$(option).hasClass('disabled') && !$(option).hasClass('optgroup') && key.length) {
          var selected = true;

          if (this.isMultiple) {
            // Deselect placeholder option if still selected.
            var placeholderOption = $(this.dropdownOptions).find('li.disabled.selected');

            if (placeholderOption.length) {
              placeholderOption.removeClass('selected');
              placeholderOption.find('input[type="checkbox"]').prop('checked', false);

              this._toggleEntryFromArray(placeholderOption[0].id);
            }

            selected = this._toggleEntryFromArray(key);
          } else {
            $(this.dropdownOptions).find('li').removeClass('selected');
            $(option).toggleClass('selected', selected);
          } // Set selected on original select option
          // Only trigger if selected state changed


          var prevSelected = $(this._valueDict[key].el).prop('selected');

          if (prevSelected !== selected) {
            $(this._valueDict[key].el).prop('selected', selected);
            this.$el.trigger('change');
          }
        }

        e.stopPropagation();
      }
      /**
       * Handle Input Click
       */

    }, {
      key: "_handleInputClick",
      value: function _handleInputClick() {
        if (this.dropdown && this.dropdown.isOpen) {
          this._setValueToInput();

          this._setSelectedStates();
        }
      }
      /**
       * Setup dropdown
       */

    }, {
      key: "_setupDropdown",
      value: function _setupDropdown() {
        var _this71 = this;

        this.wrapper = document.createElement('div');
        $(this.wrapper).addClass('select-wrapper ' + this.options.classes);
        this.$el.before($(this.wrapper));
        this.wrapper.appendChild(this.el);

        if (this.el.disabled) {
          this.wrapper.classList.add('disabled');
        } // Create dropdown


        this.$selectOptions = this.$el.children('option, optgroup');
        this.dropdownOptions = document.createElement('ul');
        this.dropdownOptions.id = "select-options-" + M.guid();
        $(this.dropdownOptions).addClass('dropdown-content select-dropdown ' + (this.isMultiple ? 'multiple-select-dropdown' : '')); // Create dropdown structure.

        if (this.$selectOptions.length) {
          this.$selectOptions.each(function (el) {
            if ($(el).is('option')) {
              // Direct descendant option.
              var optionEl = void 0;

              if (_this71.isMultiple) {
                optionEl = _this71._appendOptionWithIcon(_this71.$el, el, 'multiple');
              } else {
                optionEl = _this71._appendOptionWithIcon(_this71.$el, el);
              }

              _this71._addOptionToValueDict(el, optionEl);
            } else if ($(el).is('optgroup')) {
              // Optgroup.
              var selectOptions = $(el).children('option');
              $(_this71.dropdownOptions).append($('<li class="optgroup"><span>' + el.getAttribute('label') + '</span></li>')[0]);
              selectOptions.each(function (el) {
                var optionEl = _this71._appendOptionWithIcon(_this71.$el, el, 'optgroup-option');

                _this71._addOptionToValueDict(el, optionEl);
              });
            }
          });
        }

        this.$el.after(this.dropdownOptions); // Add input dropdown

        this.input = document.createElement('input');
        $(this.input).addClass('select-dropdown dropdown-trigger');
        this.input.setAttribute('type', 'text');
        this.input.setAttribute('readonly', 'true');
        this.input.setAttribute('data-target', this.dropdownOptions.id);

        if (this.el.disabled) {
          $(this.input).prop('disabled', 'true');
        }

        this.$el.before(this.input);

        this._setValueToInput(); // Add caret


        var dropdownIcon = $('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
        this.$el.before(dropdownIcon[0]); // Initialize dropdown

        if (!this.el.disabled) {
          var dropdownOptions = $.extend({}, this.options.dropdownOptions); // Add callback for centering selected option when dropdown content is scrollable

          dropdownOptions.onOpenEnd = function (el) {
            var selectedOption = $(_this71.dropdownOptions).find('.selected').first();

            if (selectedOption.length) {
              // Focus selected option in dropdown
              M.keyDown = true;
              _this71.dropdown.focusedIndex = selectedOption.index();

              _this71.dropdown._focusFocusedItem();

              M.keyDown = false; // Handle scrolling to selected option

              if (_this71.dropdown.isScrollable) {
                var scrollOffset = selectedOption[0].getBoundingClientRect().top - _this71.dropdownOptions.getBoundingClientRect().top; // scroll to selected option


                scrollOffset -= _this71.dropdownOptions.clientHeight / 2; // center in dropdown

                _this71.dropdownOptions.scrollTop = scrollOffset;
              }
            }
          };

          if (this.isMultiple) {
            dropdownOptions.closeOnClick = false;
          }

          this.dropdown = M.Dropdown.init(this.input, dropdownOptions);
        } // Add initial selections


        this._setSelectedStates();
      }
      /**
       * Add option to value dict
       * @param {Element} el  original option element
       * @param {Element} optionEl  generated option element
       */

    }, {
      key: "_addOptionToValueDict",
      value: function _addOptionToValueDict(el, optionEl) {
        var index = Object.keys(this._valueDict).length;
        var key = this.dropdownOptions.id + index;
        var obj = {};
        optionEl.id = key;
        obj.el = el;
        obj.optionEl = optionEl;
        this._valueDict[key] = obj;
      }
      /**
       * Remove dropdown
       */

    }, {
      key: "_removeDropdown",
      value: function _removeDropdown() {
        $(this.wrapper).find('.caret').remove();
        $(this.input).remove();
        $(this.dropdownOptions).remove();
        $(this.wrapper).before(this.$el);
        $(this.wrapper).remove();
      }
      /**
       * Setup dropdown
       * @param {Element} select  select element
       * @param {Element} option  option element from select
       * @param {String} type
       * @return {Element}  option element added
       */

    }, {
      key: "_appendOptionWithIcon",
      value: function _appendOptionWithIcon(select, option, type) {
        // Add disabled attr if disabled
        var disabledClass = option.disabled ? 'disabled ' : '';
        var optgroupClass = type === 'optgroup-option' ? 'optgroup-option ' : '';
        var multipleCheckbox = this.isMultiple ? "<label><input type=\"checkbox\"" + disabledClass + "\"/><span>" + option.innerHTML + "</span></label>" : option.innerHTML;
        var liEl = $('<li></li>');
        var spanEl = $('<span></span>');
        spanEl.html(multipleCheckbox);
        liEl.addClass(disabledClass + " " + optgroupClass);
        liEl.append(spanEl); // add icons

        var iconUrl = option.getAttribute('data-icon');

        if (!!iconUrl) {
          var imgEl = $("<img alt=\"\" src=\"" + iconUrl + "\">");
          liEl.prepend(imgEl);
        } // Check for multiple type.


        $(this.dropdownOptions).append(liEl[0]);
        return liEl[0];
      }
      /**
       * Toggle entry from option
       * @param {String} key  Option key
       * @return {Boolean}  if entry was added or removed
       */

    }, {
      key: "_toggleEntryFromArray",
      value: function _toggleEntryFromArray(key) {
        var notAdded = !this._keysSelected.hasOwnProperty(key);
        var $optionLi = $(this._valueDict[key].optionEl);

        if (notAdded) {
          this._keysSelected[key] = true;
        } else {
          delete this._keysSelected[key];
        }

        $optionLi.toggleClass('selected', notAdded); // Set checkbox checked value

        $optionLi.find('input[type="checkbox"]').prop('checked', notAdded); // use notAdded instead of true (to detect if the option is selected or not)

        $optionLi.prop('selected', notAdded);
        return notAdded;
      }
      /**
       * Set text value to input
       */

    }, {
      key: "_setValueToInput",
      value: function _setValueToInput() {
        var values = [];
        var options = this.$el.find('option');
        options.each(function (el) {
          if ($(el).prop('selected')) {
            var text = $(el).text();
            values.push(text);
          }
        });

        if (!values.length) {
          var firstDisabled = this.$el.find('option:disabled').eq(0);

          if (firstDisabled.length && firstDisabled[0].value === '') {
            values.push(firstDisabled.text());
          }
        }

        this.input.value = values.join(', ');
      }
      /**
       * Set selected state of dropdown to match actual select element
       */

    }, {
      key: "_setSelectedStates",
      value: function _setSelectedStates() {
        this._keysSelected = {};

        for (var key in this._valueDict) {
          var option = this._valueDict[key];
          var optionIsSelected = $(option.el).prop('selected');
          $(option.optionEl).find('input[type="checkbox"]').prop('checked', optionIsSelected);

          if (optionIsSelected) {
            this._activateOption($(this.dropdownOptions), $(option.optionEl));

            this._keysSelected[key] = true;
          } else {
            $(option.optionEl).removeClass('selected');
          }
        }
      }
      /**
       * Make option as selected and scroll to selected position
       * @param {jQuery} collection  Select options jQuery element
       * @param {Element} newOption  element of the new option
       */

    }, {
      key: "_activateOption",
      value: function _activateOption(collection, newOption) {
        if (newOption) {
          if (!this.isMultiple) {
            collection.find('li.selected').removeClass('selected');
          }

          var option = $(newOption);
          option.addClass('selected');
        }
      }
      /**
       * Get Selected Values
       * @return {Array}  Array of selected values
       */

    }, {
      key: "getSelectedValues",
      value: function getSelectedValues() {
        var selectedValues = [];

        for (var key in this._keysSelected) {
          selectedValues.push(this._valueDict[key].el.value);
        }

        return selectedValues;
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(FormSelect.__proto__ || Object.getPrototypeOf(FormSelect), "init", this).call(this, this, els, options);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_FormSelect;
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return FormSelect;
  }(Component);

  M.FormSelect = FormSelect;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(FormSelect, 'formSelect', 'M_FormSelect');
  }
})(cash);

;

(function ($, anim) {
  'use strict';

  var _defaults = {};
  /**
   * @class
   *
   */

  var Range = function (_Component21) {
    _inherits(Range, _Component21);
    /**
     * Construct Range instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */


    function Range(el, options) {
      _classCallCheck(this, Range);

      var _this72 = _possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).call(this, Range, el, options));

      _this72.el.M_Range = _this72;
      /**
       * Options for the range
       * @member Range#options
       */

      _this72.options = $.extend({}, Range.defaults, options);
      _this72._mousedown = false; // Setup

      _this72._setupThumb();

      _this72._setupEventHandlers();

      return _this72;
    }

    _createClass(Range, [{
      key: "destroy",

      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();

        this._removeThumb();

        this.el.M_Range = undefined;
      }
      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleRangeChangeBound = this._handleRangeChange.bind(this);
        this._handleRangeMousedownTouchstartBound = this._handleRangeMousedownTouchstart.bind(this);
        this._handleRangeInputMousemoveTouchmoveBound = this._handleRangeInputMousemoveTouchmove.bind(this);
        this._handleRangeMouseupTouchendBound = this._handleRangeMouseupTouchend.bind(this);
        this._handleRangeBlurMouseoutTouchleaveBound = this._handleRangeBlurMouseoutTouchleave.bind(this);
        this.el.addEventListener('change', this._handleRangeChangeBound);
        this.el.addEventListener('mousedown', this._handleRangeMousedownTouchstartBound);
        this.el.addEventListener('touchstart', this._handleRangeMousedownTouchstartBound);
        this.el.addEventListener('input', this._handleRangeInputMousemoveTouchmoveBound);
        this.el.addEventListener('mousemove', this._handleRangeInputMousemoveTouchmoveBound);
        this.el.addEventListener('touchmove', this._handleRangeInputMousemoveTouchmoveBound);
        this.el.addEventListener('mouseup', this._handleRangeMouseupTouchendBound);
        this.el.addEventListener('touchend', this._handleRangeMouseupTouchendBound);
        this.el.addEventListener('blur', this._handleRangeBlurMouseoutTouchleaveBound);
        this.el.addEventListener('mouseout', this._handleRangeBlurMouseoutTouchleaveBound);
        this.el.addEventListener('touchleave', this._handleRangeBlurMouseoutTouchleaveBound);
      }
      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('change', this._handleRangeChangeBound);
        this.el.removeEventListener('mousedown', this._handleRangeMousedownTouchstartBound);
        this.el.removeEventListener('touchstart', this._handleRangeMousedownTouchstartBound);
        this.el.removeEventListener('input', this._handleRangeInputMousemoveTouchmoveBound);
        this.el.removeEventListener('mousemove', this._handleRangeInputMousemoveTouchmoveBound);
        this.el.removeEventListener('touchmove', this._handleRangeInputMousemoveTouchmoveBound);
        this.el.removeEventListener('mouseup', this._handleRangeMouseupTouchendBound);
        this.el.removeEventListener('touchend', this._handleRangeMouseupTouchendBound);
        this.el.removeEventListener('blur', this._handleRangeBlurMouseoutTouchleaveBound);
        this.el.removeEventListener('mouseout', this._handleRangeBlurMouseoutTouchleaveBound);
        this.el.removeEventListener('touchleave', this._handleRangeBlurMouseoutTouchleaveBound);
      }
      /**
       * Handle Range Change
       * @param {Event} e
       */

    }, {
      key: "_handleRangeChange",
      value: function _handleRangeChange() {
        $(this.value).html(this.$el.val());

        if (!$(this.thumb).hasClass('active')) {
          this._showRangeBubble();
        }

        var offsetLeft = this._calcRangeOffset();

        $(this.thumb).addClass('active').css('left', offsetLeft + 'px');
      }
      /**
       * Handle Range Mousedown and Touchstart
       * @param {Event} e
       */

    }, {
      key: "_handleRangeMousedownTouchstart",
      value: function _handleRangeMousedownTouchstart(e) {
        // Set indicator value
        $(this.value).html(this.$el.val());
        this._mousedown = true;
        this.$el.addClass('active');

        if (!$(this.thumb).hasClass('active')) {
          this._showRangeBubble();
        }

        if (e.type !== 'input') {
          var offsetLeft = this._calcRangeOffset();

          $(this.thumb).addClass('active').css('left', offsetLeft + 'px');
        }
      }
      /**
       * Handle Range Input, Mousemove and Touchmove
       */

    }, {
      key: "_handleRangeInputMousemoveTouchmove",
      value: function _handleRangeInputMousemoveTouchmove() {
        if (this._mousedown) {
          if (!$(this.thumb).hasClass('active')) {
            this._showRangeBubble();
          }

          var offsetLeft = this._calcRangeOffset();

          $(this.thumb).addClass('active').css('left', offsetLeft + 'px');
          $(this.value).html(this.$el.val());
        }
      }
      /**
       * Handle Range Mouseup and Touchend
       */

    }, {
      key: "_handleRangeMouseupTouchend",
      value: function _handleRangeMouseupTouchend() {
        this._mousedown = false;
        this.$el.removeClass('active');
      }
      /**
       * Handle Range Blur, Mouseout and Touchleave
       */

    }, {
      key: "_handleRangeBlurMouseoutTouchleave",
      value: function _handleRangeBlurMouseoutTouchleave() {
        if (!this._mousedown) {
          var paddingLeft = parseInt(this.$el.css('padding-left'));
          var marginLeft = 7 + paddingLeft + 'px';

          if ($(this.thumb).hasClass('active')) {
            anim.remove(this.thumb);
            anim({
              targets: this.thumb,
              height: 0,
              width: 0,
              top: 10,
              easing: 'easeOutQuad',
              marginLeft: marginLeft,
              duration: 100
            });
          }

          $(this.thumb).removeClass('active');
        }
      }
      /**
       * Setup dropdown
       */

    }, {
      key: "_setupThumb",
      value: function _setupThumb() {
        this.thumb = document.createElement('span');
        this.value = document.createElement('span');
        $(this.thumb).addClass('thumb');
        $(this.value).addClass('value');
        $(this.thumb).append(this.value);
        this.$el.after(this.thumb);
      }
      /**
       * Remove dropdown
       */

    }, {
      key: "_removeThumb",
      value: function _removeThumb() {
        $(this.thumb).remove();
      }
      /**
       * morph thumb into bubble
       */

    }, {
      key: "_showRangeBubble",
      value: function _showRangeBubble() {
        var paddingLeft = parseInt($(this.thumb).parent().css('padding-left'));
        var marginLeft = -7 + paddingLeft + 'px'; // TODO: fix magic number?

        anim.remove(this.thumb);
        anim({
          targets: this.thumb,
          height: 30,
          width: 30,
          top: -30,
          marginLeft: marginLeft,
          duration: 300,
          easing: 'easeOutQuint'
        });
      }
      /**
       * Calculate the offset of the thumb
       * @return {Number}  offset in pixels
       */

    }, {
      key: "_calcRangeOffset",
      value: function _calcRangeOffset() {
        var width = this.$el.width() - 15;
        var max = parseFloat(this.$el.attr('max')) || 100; // Range default max

        var min = parseFloat(this.$el.attr('min')) || 0; // Range default min

        var percent = (parseFloat(this.$el.val()) - min) / (max - min);
        return percent * width;
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Range.__proto__ || Object.getPrototypeOf(Range), "init", this).call(this, this, els, options);
      }
      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Range;
      }
    }, {
      key: "defaults",
      get: function get() {
        return _defaults;
      }
    }]);

    return Range;
  }(Component);

  M.Range = Range;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Range, 'range', 'M_Range');
  }

  Range.init($('input[type=range]'));
})(cash, M.anime);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/*! exports provided: saveClub, deleteClub, tampilsemuafav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveClub", function() { return saveClub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteClub", function() { return deleteClub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tampilsemuafav", function() { return tampilsemuafav; });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ "./src/js/db.js");

function saveClub() {
  var image = document.getElementById('image_team').src;
  var name = document.getElementById('title_team').textContent = response.name;
  var urlParams = new URLSearchParams("?" + window.location.hash.split("?")[1]);
  var id = urlParams.get("id");
  var data = {
    id: id,
    image: image,
    name: name
  };
  Object(_db__WEBPACK_IMPORTED_MODULE_0__["save"])(data).then(function () {
    alert('Club ' + name + ' Berhasil ditambahkan ke favorit anda!');
  })["catch"](function () {
    alert('Club gagal disimpan menjadi favorit');
  });
}
function deleteClub(id) {
  return Object(_db__WEBPACK_IMPORTED_MODULE_0__["del"])(id).then(function () {
    // alert('Club ' + name + ' Berhasil dihapus dari daftar favorit anda');
    return true;
  })["catch"](function () {
    alert('Club gagal dihapus dari daftar favorit anda');
    return false;
  });
}
function tampilsemuafav() {
  Object(_db__WEBPACK_IMPORTED_MODULE_0__["getall"])().then(function (res) {
    console.log(res);

    if (!res.length == 0) {
      var insertrow = function insertrow(item, index) {
        var table = document.getElementById('allclub');
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerText = item.name;

        if (item.image == null) {
          cell2.innerHTML = '<a href="#team?id=' + item.id + '"><img src="https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png" class="responsive-img"></a>';
        } else {
          cell2.innerHTML = '<a href="#team?id=' + item.id + '"><img src="' + item.image + '" class="responsive-img"></a>';
        }
      };

      res.forEach(insertrow);
    } else {
      document.getElementById('status').innerText = "Club Favorit kamu Kosong!";
    }
  });
}

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  // Activate sidebar nav
  var elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems);
  loadNav();

  function loadNav() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status != 200) return; // Muat daftar tautan menu

        document.querySelectorAll(".topnav, .sidenav").forEach(function (elm) {
          elm.innerHTML = xhttp.responseText;
        }); // Daftarkan event listener untuk setiap tautan menu

        document.querySelectorAll(".sidenav a, .topnav a").forEach(function (elm) {
          elm.addEventListener("click", function (event) {
            // Tutup sidenav
            var sidenav = document.querySelector(".sidenav");
            M.Sidenav.getInstance(sidenav).close(); // Code setelah ini dihapus, digantikan dengan window.onhashchange pada index.js
          });
        });
      }
    };

    xhttp.open("GET", "nav.html", true);
    xhttp.send();
  }
});

/***/ }),

/***/ "./src/js/pages.js":
/*!*************************!*\
  !*** ./src/js/pages.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadPage; });
function loadPage(page) {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      var content = document.querySelector("#body-content");

      if (this.status == 200) {
        content.innerHTML = xhttp.responseText;
      } else if (this.status == 404) {
        content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
      } else {
        content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
      }
    }
  };

  xhttp.open("GET", "pages/" + page + ".html", true);
  xhttp.send();
}

/***/ })

/******/ });