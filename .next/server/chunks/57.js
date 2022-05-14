"use strict";
exports.id = 57;
exports.ids = [57];
exports.modules = {

/***/ 5901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ GlobalContextProvider),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function GlobalContextProvider(props) {
    const { 0: night , 1: setNight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: alert , 1: setAlert  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const apiKeyFinnhubOne = "4c403e64075f1d5283c4aaef93a6fab6";
    const apiKeyFinnhubTwo = "0aba0cc10f259f7f99c4762c7b5aa6ae";
    const newsApiKey = "YXZ3J3Px3aMVE1bSLY9LUOatT6I9arcoxTfQg7wl";
    const websocketKey = "wss://ws.finnhub.io?token=c868vsaad3i9fvji44qg";
    function nightHandler() {
        setNight(!night);
    }
    const context = {
        isNight: night,
        changeNight: nightHandler,
        alert,
        setAlert
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GlobalContext.Provider, {
        value: context,
        children: props.children
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalContext);


/***/ }),

/***/ 8595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ SearchContextProvider),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SearchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function SearchContextProvider(props) {
    const { 0: stocklist , 1: setStocklist  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: selectedStockHome , 1: setSelectedStockHome  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: selectedStockNews , 1: setSelectedStockNews  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const topPage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const scrollTop = ()=>topPage.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    ;
    const context = {
        allStocks: stocklist,
        setAllStocks: setStocklist,
        stockHome: selectedStockHome,
        setStockHome: setSelectedStockHome,
        stockNews: selectedStockNews,
        setStockNews: setSelectedStockNews,
        topPageRef: topPage,
        scrollTop: scrollTop
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchContext.Provider, {
        value: context,
        children: props.children
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchContext);


/***/ })

};
;