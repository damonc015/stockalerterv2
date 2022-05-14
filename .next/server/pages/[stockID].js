"use strict";
(() => {
var exports = {};
exports.id = 918;
exports.ids = [918];
exports.modules = {

/***/ 1796:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Stockpage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_sidebars_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7904);
/* harmony import */ var _components_sidebars_topbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7103);
/* harmony import */ var _components_watchlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4786);
/* harmony import */ var _components_graphInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7166);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_globalProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5901);
/* harmony import */ var _store_searchProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8595);
/* harmony import */ var _store_watchlistProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6346);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5566);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _api_calls_apiCalls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8047);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_watchlist__WEBPACK_IMPORTED_MODULE_4__, _components_graphInfo__WEBPACK_IMPORTED_MODULE_5__, _store_watchlistProvider__WEBPACK_IMPORTED_MODULE_9__]);
([_components_watchlist__WEBPACK_IMPORTED_MODULE_4__, _components_graphInfo__WEBPACK_IMPORTED_MODULE_5__, _store_watchlistProvider__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);












function Stockpage(props) {
    const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_store_globalProvider__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
    const { allStocks , setAllStocks , stockHome  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_store_searchProvider__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);
    const { graphInfo , setGraphInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_store_watchlistProvider__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z);
    let { id , test  } = props;
    console.log((0,_api_calls_apiCalls__WEBPACK_IMPORTED_MODULE_11__/* .getStockNames */ .D6)());
    console.log(test);
    //   if (stocklist === 1 || !targetStock === 1)
    //     return <ErrorPage statusCode={505} />;
    //   useEffect(() => {
    //     if (allStocks) return;
    //     setAllStocks(stocklist);
    //   }, [allStocks]);
    //   useEffect(() => {
    //     if (!stockHome) return;
    //     fetch(
    //       `https://financialmodelingprep.com/api/v3/quote/${stockHome.symbol}?apikey=4c403e64075f1d5283c4aaef93a6fab6`
    //     )
    //       .then((response) => response.json())
    //       .then((data) => setGraphInfo(data[0]))
    //       .catch((e) => console.log("Graph Data unavailable"));
    //   }, [stockHome]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{}, [
        graphInfo
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container",
        style: isNight ? {
            backgroundColor: "rgb(50,50,50)",
            color: "#FAFAFA"
        } : null,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Stock Alerter"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "A web application to alert stock price changes"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                style: isNight ? {
                    backgroundColor: "#141518",
                    color: "#FAFAFA"
                } : null,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sidebars_navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "topContainer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sidebars_topbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                searchPlaceholder: "Search up a stock to add",
                                page: "dashboard"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "graphContainer",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_graphInfo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_watchlist__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
async function getServerSideProps(context) {
    const id = context.params.stockID;
    const test = process.env.FMP_KEY;
    //   try {
    //     const res = await fetch(
    //       "https://financialmodelingprep.com/api/v3/available-traded/list?apikey=4c403e64075f1d5283c4aaef93a6fab6"
    //     );
    //     stocklist = await res.json();
    //   } catch (e) {
    //     console.log(e);
    //   }
    //   try {
    //     const res = await fetch(
    //       `https://financialmodelingprep.com/api/v3/quote/${id}?apikey=4c403e64075f1d5283c4aaef93a6fab6`
    //     );
    //     targetStock = await res.json();
    //   } catch (e) {
    //     console.log(e);
    //   }
    return {
        props: {
            id,
            test
        }
    };
}

});

/***/ }),

/***/ 8047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D6": () => (/* binding */ getStockNames)
/* harmony export */ });
/* unused harmony exports getStockPriceHistory, getStockData */
const axios = __webpack_require__(2167);
async function getStockNames() {
    const URL = `https://financialmodelingprep.com/api/v3/available-traded/list?apikey=${process.env.FMP_KEY}`;
    let data;
    try {
        const response = await axios.get(URL);
        data = response.data;
    } catch (e) {
        data = "error";
    }
    return data;
}
async function getStockPriceHistory(symbol, date) {
    const URL = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?${date}&apikey=${process.env.FMPTWO_KEY}`;
    let data;
    try {
        const response = await axios.get(URL);
        data = response.data;
    } catch (e) {
        data = "error";
    }
    return data;
}
async function getStockData(id) {
    const URL = `https://financialmodelingprep.com/api/v3/quote/${id}?apikey=${process.env.FMPTWO_KEY}`;
    let data;
    try {
        const response = await axios.get(URL);
        data = response.data;
    } catch (e) {
        data = "error";
    }
    return data;
}


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("chart.js/auto");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 5566:
/***/ ((module) => {

module.exports = require("next/error");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7051:
/***/ ((module) => {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 924:
/***/ ((module) => {

module.exports = require("react-icons/im");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 8098:
/***/ ((module) => {

module.exports = require("react-icons/ri");

/***/ }),

/***/ 382:
/***/ ((module) => {

module.exports = require("react-icons/vsc");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,57,184,346,546], () => (__webpack_exec__(1796)));
module.exports = __webpack_exports__;

})();