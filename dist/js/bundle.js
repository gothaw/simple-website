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
/******/ 	__webpack_require__.p = "/dist/js";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/modules/_aboutsUs.css":
/*!***************************************!*\
  !*** ./src/css/modules/_aboutsUs.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/modules/_aboutsUs.css?");

/***/ }),

/***/ "./src/css/modules/_careers.css":
/*!**************************************!*\
  !*** ./src/css/modules/_careers.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/modules/_careers.css?");

/***/ }),

/***/ "./src/css/modules/_findUs.css":
/*!*************************************!*\
  !*** ./src/css/modules/_findUs.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/modules/_findUs.css?");

/***/ }),

/***/ "./src/css/modules/_general.css":
/*!**************************************!*\
  !*** ./src/css/modules/_general.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/modules/_general.css?");

/***/ }),

/***/ "./src/css/modules/_home.css":
/*!***********************************!*\
  !*** ./src/css/modules/_home.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/modules/_home.css?");

/***/ }),

/***/ "./src/css/modules/_media.css":
/*!************************************!*\
  !*** ./src/css/modules/_media.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/modules/_media.css?");

/***/ }),

/***/ "./src/css/modules/_news.css":
/*!***********************************!*\
  !*** ./src/css/modules/_news.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/modules/_news.css?");

/***/ }),

/***/ "./src/css/modules/_projects.css":
/*!***************************************!*\
  !*** ./src/css/modules/_projects.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/modules/_projects.css?");

/***/ }),

/***/ "./src/css/modules/_readMoreButton.css":
/*!*********************************************!*\
  !*** ./src/css/modules/_readMoreButton.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/modules/_readMoreButton.css?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_modules_general_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/modules/_general.css */ \"./src/css/modules/_general.css\");\n/* harmony import */ var _css_modules_general_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_modules_general_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_modules_readMoreButton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/modules/_readMoreButton.css */ \"./src/css/modules/_readMoreButton.css\");\n/* harmony import */ var _css_modules_readMoreButton_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_modules_readMoreButton_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_modules_home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/modules/_home.css */ \"./src/css/modules/_home.css\");\n/* harmony import */ var _css_modules_home_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_modules_home_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_modules_projects_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/modules/_projects.css */ \"./src/css/modules/_projects.css\");\n/* harmony import */ var _css_modules_projects_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_modules_projects_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_modules_news_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/modules/_news.css */ \"./src/css/modules/_news.css\");\n/* harmony import */ var _css_modules_news_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_modules_news_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_modules_aboutsUs_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/modules/_aboutsUs.css */ \"./src/css/modules/_aboutsUs.css\");\n/* harmony import */ var _css_modules_aboutsUs_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_modules_aboutsUs_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_modules_careers_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/modules/_careers.css */ \"./src/css/modules/_careers.css\");\n/* harmony import */ var _css_modules_careers_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_modules_careers_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _css_modules_findUs_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/modules/_findUs.css */ \"./src/css/modules/_findUs.css\");\n/* harmony import */ var _css_modules_findUs_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_modules_findUs_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _css_modules_media_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/modules/_media.css */ \"./src/css/modules/_media.css\");\n/* harmony import */ var _css_modules_media_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_modules_media_css__WEBPACK_IMPORTED_MODULE_8__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/_aboutUs.js":
/*!************************************!*\
  !*** ./src/js/modules/_aboutUs.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\r\n    if($('#aboutUsId').length)\r\n    {\r\n        const $frontFace        = $('.front');\r\n        const $backFace         = $('.back');\r\n        const $flipper          = $('.flipper');\r\n\r\n        /**\r\n         * @name  showTeamMemberDescription\r\n         * @desc  shows a team member description when the image is clicked, it closes all other descriptions\r\n         */\r\n        function showTeamMemberDescription () {\r\n            $frontFace.on(\"click\", function (e) {\r\n                const targetDiv = $(e.target).closest($flipper);\r\n                ($flipper).not(targetDiv).removeClass(\"flip\");\r\n                targetDiv.addClass(\"flip\");\r\n            });\r\n        } //showTeamMemberDescription\r\n\r\n        /**\r\n         * @name  closeTeamMemberDescription\r\n         * @desc  closes a team member description when description area is clicked\r\n         */\r\n        function closeTeamMemberDescription () {\r\n            $backFace.on(\"click\", function (e) {\r\n                const targetDiv = $(e.target).closest($flipper);\r\n                targetDiv.removeClass(\"flip\");\r\n            });\r\n        } //closeTeamMemberDescription\r\n\r\n        function init() {\r\n            showTeamMemberDescription();\r\n            closeTeamMemberDescription();\r\n        } //init\r\n\r\n        $(document).ready(init);\r\n    }\r\n\r\n\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/js/modules/_aboutUs.js?");

/***/ }),

/***/ "./src/js/modules/_careers.js":
/*!************************************!*\
  !*** ./src/js/modules/_careers.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\r\n    if ($('#careersId').length)\r\n    {\r\n        const $jobTitle            = $('.jobTitle, .toggleSymbolJobDescription');\r\n        const $jobDescription      = $('.jobDescription');\r\n        const $toggleSymbol        = $('.toggleSymbolJobDescription');\r\n\r\n        /**\r\n         * @name  hideJobDescription\r\n         * @desc  hides job descriptions for open positions\r\n         */\r\n        function hideJobDescription() {\r\n            $jobDescription.hide();\r\n        } //hideJobDescription\r\n\r\n        /**\r\n         * @name  toggleJobDescription\r\n         * @desc  toggles job descriptions when user clicks on the title, rotates plus symbol by 45 degrees and also hides other job descriptions if they were previously opened\r\n         */\r\n        function toggleJobDescription () {\r\n            $jobTitle.on(\"click\", function (e) {\r\n                const targetDiv = $(e.target).parent().find($jobDescription);\r\n                const targetSymbol = $(e.target).parent().find($toggleSymbol);\r\n                $jobDescription.not(targetDiv).slideUp();\r\n                $toggleSymbol.not(targetSymbol).removeClass(\"rotateToggleSymbol\");\r\n                targetDiv.slideToggle();\r\n                targetSymbol.toggleClass(\"rotateToggleSymbol\");\r\n            });\r\n        } //toggleJobDescription\r\n\r\n        function init() {\r\n            toggleJobDescription();\r\n            hideJobDescription();\r\n        } //init\r\n\r\n        $(document).ready(init);\r\n    }\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/js/modules/_careers.js?");

/***/ }),

/***/ "./src/js/modules/_home.js":
/*!*********************************!*\
  !*** ./src/js/modules/_home.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\r\n    if($('#homeId').length)\r\n    {\r\n        //variables for showImg\r\n        const thumbnails        = document.getElementById(\"thumbnailsProjectsHome\").getElementsByTagName(\"IMG\");\r\n        const projects          = document.getElementsByClassName(\"projectHome\");\r\n        //variables for nextSlide and prevSlide\r\n        const opinions          = document.getElementById(\"sliderWrap\");\r\n        const opinionSlides     = opinions.getElementsByTagName(\"LI\");\r\n        const numberOfSlides    = opinionSlides.length;\r\n        const prev              = document.getElementById(\"prev\");\r\n        const next              = document.getElementById(\"next\");\r\n\r\n        //index of a slide that is displayed\r\n        let count               = 2;\r\n\r\n        /**\r\n         * @name  showImg\r\n         * @desc  displays project image upon clicking on a thumbnail, changes of opacity of the selected thumbnail to 1.0 and the rest of the thumbnails to 0.5\r\n         * @param imgIndex - image index in thumbnails array-like object\r\n         */\r\n        function showImg(imgIndex) {\r\n            for(let i=0;i<thumbnails.length;i++){\r\n                if(i===imgIndex)\r\n                {\r\n                    thumbnails[i].style.opacity=\"1.0\";\r\n                    projects[i].style.display=\"block\";\r\n                }\r\n                else\r\n                {\r\n                    thumbnails[i].style.opacity=\"0.5\";\r\n                    projects[i].style.display=\"none\";\r\n                }\r\n            }\r\n        } //showImg\r\n        /**\r\n         * @name  nextSlide\r\n         * @desc  switches to next slide in clients' opinions section by decreasing position: left. If on last slide, the first slide is displayed upon switching.\r\n         */\r\n        function nextSlide() {\r\n            if(count < numberOfSlides) {\r\n                opinions.style.left = `-${100*count}%`;\r\n                count++;\r\n            }\r\n            else if(count === numberOfSlides) {\r\n                opinions.style.left = \"0\";\r\n                count = 1;\r\n            }\r\n        } //nextSlide\r\n        /**\r\n         * @name  prevSlide\r\n         * @desc  switches to previous slide in clients opinion section by increasing position: left. If on first slide, the last slide is displayed upon switching.\r\n         */\r\n        function prevSlide() {\r\n            if(count > 1) {\r\n                opinions.style.left = `-${100*(count-2)}%`;\r\n                count--;\r\n            }\r\n            else if(count === 1) {\r\n                opinions.style.left = `-${100*(numberOfSlides-1)}%`;\r\n                count=numberOfSlides;\r\n            }\r\n        } //prevSlide\r\n\r\n        function eventHandler() {\r\n            next.addEventListener(\"click\",nextSlide);\r\n            prev.addEventListener(\"click\",prevSlide);\r\n            thumbnails[0].addEventListener(\"click\",function () {\r\n                showImg(0);\r\n            });\r\n            thumbnails[1].addEventListener(\"click\",function () {\r\n                showImg(1);\r\n            });\r\n            thumbnails[2].addEventListener(\"click\",function () {\r\n                showImg(2);\r\n            });\r\n            thumbnails[3].addEventListener(\"click\",function () {\r\n                showImg(3);\r\n            });\r\n        } //eventHandler\r\n\r\n        function init() {\r\n            eventHandler();\r\n        } //init\r\n\r\n        window.addEventListener(\"load\", init);\r\n    }\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/js/modules/_home.js?");

/***/ }),

/***/ "./src/js/modules/_projects.js":
/*!*************************************!*\
  !*** ./src/js/modules/_projects.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\r\n    if ($('#projectsId').length)\r\n    {\r\n        const $appDescription        = $('.appDescription');\r\n        const $appThumb              = $('.appThumbnail');\r\n        const $appCloseDescription   = $('.closeAppDescription');\r\n\r\n\r\n        /**\r\n         * @name  showAppDescription\r\n         * @desc  shows an app description when the image is clicked, it closes all other app descriptions\r\n         */\r\n        function showAppDescription () {\r\n            $appThumb.on(\"click\", function (e) {\r\n                const targetDiv = $(e.target).siblings();\r\n                ($appDescription).not(targetDiv).removeClass(\"bottomZero\");\r\n                targetDiv.addClass(\"bottomZero\");\r\n            });\r\n        } //showAppDescription\r\n\r\n        /**\r\n         * @name  closeAppDescription\r\n         * @desc  closes an app description when close button is clicked\r\n         */\r\n        function closeAppDescription() {\r\n            $appCloseDescription.on(\"click\", function (e) {\r\n                const targetDiv = $(e.target).closest(\".appDescription\");\r\n                targetDiv.removeClass(\"bottomZero\");\r\n            });\r\n        } //closeAppDescription\r\n\r\n        /**\r\n         * @name  checkSizeLayoutC\r\n         * @desc  if window size is less than 1350px i.e. if the .appLayoutC is displayed as a grid using media query in CSS, .appC is moved to a separate row #layoutC1\r\n         *        if window size is greater than 1350px .appC are displayed in first and second row of the app gallery (#layoutA1 and #layoutA2)\r\n         */\r\n        function checkSizeLayoutC () {\r\n            if ($('.appLayoutC').css(\"display\")===\"grid\") {\r\n                if($('#layoutC1').is(':empty')){\r\n                    $('.appC').appendTo('#layoutC1');\r\n                }\r\n            }\r\n            else {\r\n                if($('#layoutC1').not(':empty')){\r\n                    $('#layoutC1App1').appendTo('#layoutA1');\r\n                    $('#layoutC1App2').appendTo('#layoutA2');\r\n                }\r\n            }\r\n        } //checkSizeLayoutC\r\n\r\n        function init() {\r\n            showAppDescription();\r\n            closeAppDescription();\r\n            $(window).resize(checkSizeLayoutC).trigger('resize');\r\n        } //init\r\n\r\n        $(document).ready(init);\r\n    }\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/js/modules/_projects.js?");

/***/ }),

/***/ 0:
/*!*************************************************************************************************************************************************!*\
  !*** multi ./src/js/index.js ./src/js/modules/_home.js ./src/js/modules/_careers.js ./src/js/modules/_aboutUs.js ./src/js/modules/_projects.js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\Dokumenty\\Training Dragon\\Web Design\\_git\\simple-website\\src\\js\\index.js */\"./src/js/index.js\");\n__webpack_require__(/*! D:\\Dokumenty\\Training Dragon\\Web Design\\_git\\simple-website\\src\\js\\modules\\_home.js */\"./src/js/modules/_home.js\");\n__webpack_require__(/*! D:\\Dokumenty\\Training Dragon\\Web Design\\_git\\simple-website\\src\\js\\modules\\_careers.js */\"./src/js/modules/_careers.js\");\n__webpack_require__(/*! D:\\Dokumenty\\Training Dragon\\Web Design\\_git\\simple-website\\src\\js\\modules\\_aboutUs.js */\"./src/js/modules/_aboutUs.js\");\nmodule.exports = __webpack_require__(/*! D:\\Dokumenty\\Training Dragon\\Web Design\\_git\\simple-website\\src\\js\\modules\\_projects.js */\"./src/js/modules/_projects.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/js/modules/_home.js_./src/js/modules/_careers.js_./src/js/modules/_aboutUs.js_./src/js/modules/_projects.js?");

/***/ })

/******/ });