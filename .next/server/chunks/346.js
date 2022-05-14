"use strict";
exports.id = 346;
exports.ids = [346];
exports.modules = {

/***/ 6346:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ WatchContextProvider),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);
uuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const WatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function WatchContextProvider(props) {
    const { 0: watch , 1: setWatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: date , 1: setDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("3month");
    const { 0: searchWatch , 1: setSearchWatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: filteredSearchWatch , 1: setFilteredSearchWatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: graphInfo , 1: setGraphInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: sortWatch , 1: setSortWatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("recent");
    // Date Range for Api
    const findDateRange = ()=>{
        const todayDate = new Date();
        let todayYear = todayDate.getFullYear();
        let todayMonth = todayDate.getMonth() + 1;
        if (todayMonth < 10) {
            todayMonth = `0${todayMonth}`;
        }
        let todayDay = todayDate.getDate();
        if (todayDay < 10) {
            todayDay = `0${todayDay}`;
        }
        let lastYearMonths;
        let lastYear;
        if (date === "month") {
            if (todayMonth - 1 <= 0) {
                lastYearMonths = todayMonth - 1 + 12;
                lastYear = todayYear - 1;
            } else {
                lastYearMonths = todayMonth - 1;
                lastYear = todayYear;
            }
        }
        if (date === "3month") {
            if (todayMonth - 3 <= 0) {
                lastYearMonths = todayMonth - 3 + 12;
                lastYear = todayYear - 1;
            } else {
                lastYearMonths = todayMonth - 3;
                lastYear = todayYear;
            }
        }
        if (date === "6month") {
            if (todayMonth - 6 <= 0) {
                lastYearMonths = todayMonth - 6 + 12;
                lastYear = todayYear - 1;
            } else {
                lastYearMonths = todayMonth - 6;
                lastYear = todayYear;
            }
        }
        if (date === "year") {
            lastYearMonths = todayMonth;
            lastYear = todayYear - 1;
        }
        return `from=${lastYear}-${lastYearMonths}-${todayDay}&to=${todayYear}-${todayMonth}-${todayDay}`;
    };
    const context = {
        watchlist: watch,
        setWatchlist: setWatch,
        graphInfo,
        setGraphInfo,
        date: date,
        setDateRange: setDate,
        getDate: findDateRange,
        searchWatch,
        setSearchWatch,
        filteredSearchWatch,
        setFilteredSearchWatch,
        sortWatch: sortWatch,
        setSortWatch: setSortWatch
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WatchContext.Provider, {
        value: context,
        children: props.children
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WatchContext);

});

/***/ })

};
;