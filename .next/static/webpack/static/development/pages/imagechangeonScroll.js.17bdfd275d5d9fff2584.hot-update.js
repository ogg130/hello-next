webpackHotUpdate("static\\development\\pages\\imagechangeonScroll.js",{

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\repos\\hello-next\\src\\ImageToggleOnScroll.js";


var ImageTogglerOnScroll = function ImageTogglerOnScroll(_ref) {
  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;

  /* Initialize state of imageRef to null - when the component renders
    it assignes imageRef to our constant, then we can use imageRef.current
    to get to our image attributes */
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];
  /* add scrollEvent listener using useEffect when component mounts 
    first param = function that gets exectuted when component mounts*/


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener("scroll", scrollHandler);
    setInView(isInView());
    setIsLoading(false);
    /* second param - removes it when component unmounts */

    return function () {
      window.removeEventListener("scroll", scrollHandler);
    }, [isLoading];
  });
  /* tracks whether componant (image) is completely in browser showing window,
  not in view by default(false)*/

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      inView = _useState4[0],
      setInView = _useState4[1];

  var isInView = function isInView() {
    if (imageRef.current) {
      /* magic code that returns whether image is showing in
          scrollable area */
      var rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    return false;
  };
  /* set the inview state whether the image is in view.
  Each time page scrolls, it gets calculated again */


  var scrollHandler = function scrollHandler() {
    setInView(function () {
      return isInView();
    });
  };

  return isLoading ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: inView ? secondaryImg : primaryImg,
    alt: "",
    ref: imageRef,
    width: "200",
    height: "200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageTogglerOnScroll);

/***/ })

})
//# sourceMappingURL=imagechangeonScroll.js.17bdfd275d5d9fff2584.hot-update.js.map