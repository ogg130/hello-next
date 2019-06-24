(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\imagechangeonmouseover.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fimagechangeonmouseover&absolutePagePath=D%3A%5Crepos%5Chello-next%5Cpages%5Cimagechangeonmouseover.js!./":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fimagechangeonmouseover&absolutePagePath=D%3A%5Crepos%5Chello-next%5Cpages%5Cimagechangeonmouseover.js ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/imagechangeonmouseover", function() {
      var page = __webpack_require__(/*! ./pages/imagechangeonmouseover.js */ "./pages/imagechangeonmouseover.js")
      if(true) {
        module.hot.accept(/*! ./pages/imagechangeonmouseover.js */ "./pages/imagechangeonmouseover.js", function() {
          if(!next.router.components["/imagechangeonmouseover"]) return
          var updatedPage = __webpack_require__(/*! ./pages/imagechangeonmouseover.js */ "./pages/imagechangeonmouseover.js")
          next.router.update("/imagechangeonmouseover", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_6dc2816e14fab51b8269 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_6dc2816e14fab51b8269 */ "dll-reference dll_6dc2816e14fab51b8269"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/imagechangeonmouseover.js":
/*!*****************************************!*\
  !*** ./pages/imagechangeonmouseover.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageToggleOnMouseOver */ "./src/ImageToggleOnMouseOver.js");
var _jsxFileName = "D:\\repos\\hello-next\\pages\\imagechangeonmouseover.js";

/* useRef example  - change black and white picture to color
on mouseover */



var ImageChangeOnMouseOver = function ImageChangeOnMouseOver() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "/static/speakers/bw/Speaker-187.jpg",
    secondaryImg: "/static/speakers/Speaker-187.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), "\xA0\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "/static/speakers/bw/Speaker-1124.jpg",
    secondaryImg: "/static/speakers/Speaker-1124.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnMouseOver);

/***/ }),

/***/ "./src/ImageToggleOnMouseOver.js":
/*!***************************************!*\
  !*** ./src/ImageToggleOnMouseOver.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\repos\\hello-next\\src\\ImageToggleOnMouseOver.js";


var ImageTogglerOnMouseOver = function ImageTogglerOnMouseOver(_ref) {
  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;

  /* Initialize state of imageRef to null - when the component renders
    it assignes imageRef to our constant, then we can use imageRef.current
    to get to our image attributes */
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onMouseOver: function onMouseOver() {
      imageRef.current.src = secondaryImg;
    },
    onMouseOut: function onMouseOut() {
      imageRef.current.src = primaryImg;
    },
    src: primaryImg,
    alt: "",
    ref: imageRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageTogglerOnMouseOver);

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fimagechangeonmouseover&absolutePagePath=D%3A%5Crepos%5Chello-next%5Cpages%5Cimagechangeonmouseover.js ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fimagechangeonmouseover&absolutePagePath=D%3A%5Crepos%5Chello-next%5Cpages%5Cimagechangeonmouseover.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fimagechangeonmouseover&absolutePagePath=D%3A%5Crepos%5Chello-next%5Cpages%5Cimagechangeonmouseover.js!./");


/***/ }),

/***/ "dll-reference dll_6dc2816e14fab51b8269":
/*!*******************************************!*\
  !*** external "dll_6dc2816e14fab51b8269" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_6dc2816e14fab51b8269;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=imagechangeonmouseover.js.map