exports.id = 546;
exports.ids = [546];
exports.modules = {

/***/ 636:
/***/ ((module) => {

// Exports
module.exports = {
	"chartContainer": "Chart_chartContainer__bEbTk"
};


/***/ }),

/***/ 4247:
/***/ ((module) => {

// Exports
module.exports = {
	"infoContainer": "Info_infoContainer__6_A8z",
	"hideContainer": "Info_hideContainer__Xtdty",
	"infoIcon": "Info_infoIcon__GGJ2F",
	"infoTitle": "Info_infoTitle__BrW_2",
	"columnNbutton": "Info_columnNbutton__0bbk4",
	"hideColNButton": "Info_hideColNButton__2SGrJ",
	"columns": "Info_columns__P6Tll",
	"column": "Info_column__VF5yP",
	"columnItem": "Info_columnItem__JhTM7",
	"columnItemWord": "Info_columnItemWord__Mfhab",
	"columnItemValue": "Info_columnItemValue__LBjtl",
	"buttonContainer": "Info_buttonContainer__e28iN",
	"button": "Info_button__sdAbd"
};


/***/ }),

/***/ 8724:
/***/ ((module) => {

// Exports
module.exports = {
	"titleContainer": "Title_titleContainer___RZnb",
	"title": "Title_title__qarsq",
	"date": "Title_date__wO9xh",
	"calendar": "Title_calendar__oQimn"
};


/***/ }),

/***/ 2815:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "graphInfo_container__rFqq_",
	"chartNinfo": "graphInfo_chartNinfo__CQ_yb"
};


/***/ }),

/***/ 9887:
/***/ ((module) => {

// Exports
module.exports = {
	"listitem": "Listitem_listitem__DFHkh",
	"listitemAlt": "Listitem_listitemAlt__iw_qy",
	"listitemComp": "Listitem_listitemComp__IfCEp"
};


/***/ }),

/***/ 7525:
/***/ ((module) => {

// Exports
module.exports = {
	"sortContainer": "Sortmenu_sortContainer__63ny4",
	"searchIcon": "Sortmenu_searchIcon__9jlrf",
	"searchWatch": "Sortmenu_searchWatch__i208D",
	"searchWatchNight": "Sortmenu_searchWatchNight__vNoAB",
	"formContainer": "Sortmenu_formContainer__kjvq1",
	"label": "Sortmenu_label__7Wdta",
	"watchlistSelect": "Sortmenu_watchlistSelect__wAvEl"
};


/***/ }),

/***/ 7593:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "watchlist_container__qAWQO",
	"listContainer": "watchlist_listContainer__1_OJB",
	"title": "watchlist_title__2lu0w"
};


/***/ }),

/***/ 9171:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "list_container__dW3a8"
};


/***/ }),

/***/ 3269:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7051);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5732);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js_auto__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Chart_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(636);
/* harmony import */ var _Chart_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Chart_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_searchProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8595);
/* harmony import */ var _store_watchlistProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6346);
/* harmony import */ var _store_globalProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5901);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_watchlistProvider__WEBPACK_IMPORTED_MODULE_5__]);
_store_watchlistProvider__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const Chart = ()=>{
    const { 0: graphData , 1: setGraphData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_globalProvider__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
    const { stockHome  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_searchProvider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const { date , getDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_watchlistProvider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!stockHome) return;
        fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/${stockHome.symbol}?${getDate()}&apikey=0aba0cc10f259f7f99c4762c7b5aa6ae`).then((response)=>response.json()
        ).then((data)=>setGraphData(data.historical)
        ).catch((e)=>console.log(e)
        );
    }, [
        stockHome,
        date
    ]);
    if (!graphData) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            textAlign: "center"
        },
        children: "Stock data not available, try again later"
    }));
    function filterGraphLabels() {
        if (!graphData) return;
        let graphLabels = graphData.map((item)=>{
            return item.label;
        });
        return graphLabels.reverse();
    }
    function filterGraphPrices() {
        if (!graphData) return;
        let graphPrices = graphData.map((item)=>{
            return Number.parseFloat(item.close).toFixed(2);
        });
        return graphPrices.reverse();
    }
    const lineOptions = {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 2,
        scales: {
            x: {
                ticks: {
                    color: isNight ? "rgb(180,180,180)" : "black"
                },
                grid: {
                    color: isNight ? "rgba(120,120,120)" : "rgb(202, 202, 203)"
                },
                display: true
            },
            y: {
                ticks: {
                    color: isNight ? "rgb(180,180,180)" : "black"
                },
                grid: {
                    color: isNight ? "rgb(120,120,120)" : "rgb(202, 202, 203)"
                },
                display: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };
    function lineColor() {
        if (graphData[0] > graphData[graphData.length - 1]) return "#52ad59";
        return "red";
    }
    const lineData = {
        labels: filterGraphLabels(),
        datasets: [
            {
                label: stockHome ? stockHome.symbol : "Stock Symbol",
                data: filterGraphPrices(),
                pointRadius: 0,
                fill: false,
                backgroundColor: isNight ? "red" : "blue",
                borderColor: lineColor(),
                color: isNight ? "red" : "blue"
            }, 
        ]
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Chart_module_css__WEBPACK_IMPORTED_MODULE_7___default().chartContainer),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, {
            data: lineData,
            options: lineOptions
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chart);

});

/***/ }),

/***/ 1262:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_globalProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5901);
/* harmony import */ var _store_searchProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8595);
/* harmony import */ var _store_watchlistProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6346);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Info_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4247);
/* harmony import */ var _Info_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Info_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_6__, _store_watchlistProvider__WEBPACK_IMPORTED_MODULE_4__]);
([uuid__WEBPACK_IMPORTED_MODULE_6__, _store_watchlistProvider__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








const Info = ()=>{
    const { 0: showInfo , 1: setShowInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_globalProvider__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    const { stockHome  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_searchProvider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const { watchlist , setWatchlist , graphInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_watchlistProvider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    function addWatch() {
        if (watchlist.filter((item)=>item.name === stockHome.name
        ).length > 0) return;
        let copyWatch = [
            ...watchlist
        ];
        copyWatch.push({
            name: stockHome.name,
            symbol: stockHome.symbol,
            price: stockHome.price,
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v4)()
        });
        return setWatchlist(copyWatch);
    }
    function numComma(x) {
        if (!x) return;
        return x.toLocaleString();
    }
    if (!graphInfo) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                padding: "2rem"
            },
            children: "Stock information not available try again later"
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: showInfo ? (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().infoContainer) : (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().hideContainer),
        style: isNight && showInfo ? {
            backgroundColor: "rgb(66,66,66)",
            color: "#FAFAFA"
        } : null,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().infoTitle),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().infoIcon),
                        onClick: ()=>{
                            setShowInfo((prev)=>!prev
                            );
                        },
                        children: showInfo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineMinus, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlinePlus, {})
                    }),
                    graphInfo.symbol
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: showInfo ? (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnNbutton) : (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().hideColNButton),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columns),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().column),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItem),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemWord),
                                                children: "Price"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemValue),
                                                children: graphInfo.price ? "$" + Number.parseFloat(graphInfo.price) : "N/A"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItem),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemWord),
                                                children: " Market Cap"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemValue),
                                                children: graphInfo.marketCap ? "$" + numComma(graphInfo.marketCap) : "N/A"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItem),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemWord),
                                                children: "Volume"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemValue),
                                                children: graphInfo.volume ? numComma(graphInfo.volume) : "N/A"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItem),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemWord),
                                                children: " Avg Volume"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemValue),
                                                children: graphInfo.avgVolume ? numComma(graphInfo.avgVolume) : "N/A"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItem),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemWord),
                                                children: "Total Shares"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemValue),
                                                children: graphInfo.sharesOutstanding ? numComma(graphInfo.sharesOutstanding) : "N/A"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItem),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemWord),
                                                children: "P/E Ratio"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemValue),
                                                children: graphInfo.pe ? Number.parseFloat(graphInfo.pe).toFixed(3) : "N/A"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().column),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItem),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemWord),
                                                children: "Price Avg 50D"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemValue),
                                                children: [
                                                    "$",
                                                    Number.parseFloat(graphInfo.priceAvg50).toFixed(2)
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItem),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemWord),
                                                children: "Price Avg 200D"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemValue),
                                                children: [
                                                    "$",
                                                    Number.parseFloat(graphInfo.priceAvg200).toFixed(2)
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItem),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemWord),
                                                children: "Year High"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemValue),
                                                children: [
                                                    "$",
                                                    Number.parseFloat(graphInfo.yearHigh).toFixed(2)
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItem),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemWord),
                                                children: " Year Low"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemValue),
                                                children: [
                                                    "$",
                                                    Number.parseFloat(graphInfo.yearLow).toFixed(2)
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItem),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemWord),
                                                children: " Day High"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemValue),
                                                children: [
                                                    "$",
                                                    Number.parseFloat(graphInfo.dayHigh).toFixed(2)
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItem),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemWord),
                                                children: "Day Low"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().columnItemValue),
                                                children: [
                                                    "$",
                                                    Number.parseFloat(graphInfo.dayLow).toFixed(2)
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonContainer),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_Info_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),
                            onClick: addWatch,
                            children: "Add to Watchlist"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Info);

});

/***/ }),

/***/ 5877:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_globalProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5901);
/* harmony import */ var _store_searchProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8595);
/* harmony import */ var _store_watchlistProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6346);
/* harmony import */ var _Title_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8724);
/* harmony import */ var _Title_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Title_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_watchlistProvider__WEBPACK_IMPORTED_MODULE_5__]);
_store_watchlistProvider__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







const Title = ()=>{
    const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_globalProvider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const { stockHome  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_searchProvider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const { date , setDateRange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_watchlistProvider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    function changeDate(x) {
        setDateRange(x);
    }
    if (!stockHome) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Title_module_css__WEBPACK_IMPORTED_MODULE_6___default().titleContainer),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Title_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {})
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Title_module_css__WEBPACK_IMPORTED_MODULE_6___default().date),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsCalendar, {
                            className: (_Title_module_css__WEBPACK_IMPORTED_MODULE_6___default().calendar)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                value: date,
                                onChange: (event)=>changeDate(event.target.value)
                                ,
                                style: isNight ? {
                                    color: "white"
                                } : {
                                    color: "black"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "month",
                                        children: "1M"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "3month",
                                        children: "3M"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "6month",
                                        children: "6M"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "year",
                                        children: "1Y"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Title_module_css__WEBPACK_IMPORTED_MODULE_6___default().titleContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Title_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: stockHome.name
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Title_module_css__WEBPACK_IMPORTED_MODULE_6___default().date),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsCalendar, {
                        className: (_Title_module_css__WEBPACK_IMPORTED_MODULE_6___default().calendar)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            value: date,
                            onChange: (event)=>changeDate(event.target.value)
                            ,
                            style: isNight ? {
                                color: "white"
                            } : {
                                color: "black"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "month",
                                    children: "1M"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "3month",
                                    children: "3M"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "6month",
                                    children: "6M"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "year",
                                    children: "1Y"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

});

/***/ }),

/***/ 7166:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2815);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5877);
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3269);
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1262);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_searchProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8595);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Info__WEBPACK_IMPORTED_MODULE_3__, _Chart__WEBPACK_IMPORTED_MODULE_2__, _Title__WEBPACK_IMPORTED_MODULE_1__]);
([_Info__WEBPACK_IMPORTED_MODULE_3__, _Chart__WEBPACK_IMPORTED_MODULE_2__, _Title__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







const Graph = ()=>{
    const { topPageRef  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_store_searchProvider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: topPageRef,
                style: {
                    position: "absolute",
                    height: "8vh",
                    top: "0"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Title__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().chartNinfo),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Chart__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Info__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graph);

});

/***/ }),

/***/ 885:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_globalProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5901);
/* harmony import */ var _store_watchlistProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6346);
/* harmony import */ var _Listitem_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9887);
/* harmony import */ var _Listitem_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Listitem_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_watchlistProvider__WEBPACK_IMPORTED_MODULE_4__]);
_store_watchlistProvider__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const Listitem = (props)=>{
    const { id: id1 , index , symbol , name , price  } = props;
    const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_globalProvider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const { watchlist , setWatchlist  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_watchlistProvider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    function removeWatch(id) {
        let copyWatch = [
            ...watchlist
        ];
        let x = copyWatch.filter((item)=>{
            if (item.id !== id) return item;
        });
        setWatchlist(x);
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: index % 2 !== 0 ? (_Listitem_module_css__WEBPACK_IMPORTED_MODULE_5___default().listitem) : (_Listitem_module_css__WEBPACK_IMPORTED_MODULE_5___default().listitemAlt),
        style: index % 2 !== 0 ? null : isNight ? {
            backgroundColor: "#252525"
        } : null,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Listitem_module_css__WEBPACK_IMPORTED_MODULE_5___default().listitemComp),
                children: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Listitem_module_css__WEBPACK_IMPORTED_MODULE_5___default().listitemComp),
                children: symbol
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Listitem_module_css__WEBPACK_IMPORTED_MODULE_5___default().listitemComp),
                children: price
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTrash, {
                    onClick: ()=>removeWatch(id1)
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Listitem);

});

/***/ }),

/***/ 3421:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Sortmenu_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7525);
/* harmony import */ var _Sortmenu_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Sortmenu_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_watchlistProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6346);
/* harmony import */ var _store_globalProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5901);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_watchlistProvider__WEBPACK_IMPORTED_MODULE_3__]);
_store_watchlistProvider__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const Sortmenu = ()=>{
    const { watchlist , searchWatch , setSearchWatch , filteredSearchWatch , setFilteredSearchWatch , sortWatch , setSortWatch ,  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_watchlistProvider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_globalProvider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const defaultSelect = (e)=>{
        e.preventDefault();
        setSearchWatch("");
    };
    const handleSearch = (e)=>{
        setSearchWatch(e.target.value);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Search Filter
        (function filterWatch() {
            try {
                setFilteredSearchWatch(watchlist.filter((val)=>{
                    if (searchWatch === "") {
                        return null;
                    } else if (val.symbol.toLowerCase().includes(searchWatch.toLowerCase()) || val.name.toLowerCase().includes(searchWatch.toLowerCase())) {
                        return val;
                    } else {
                        return null;
                    }
                }));
            } catch  {
                console.log("did not connect to api");
            }
        })();
    }, [
        searchWatch
    ]);
    const sortList = (e)=>{
        setSortWatch(e);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Sortmenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().sortContainer),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: (_Sortmenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().formContainer),
                autoComplete: "off",
                onSubmit: defaultSelect,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "searchWatch",
                        className: (_Sortmenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().label),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsSearch, {
                            className: (_Sortmenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().searchIcon),
                            style: isNight ? {
                                color: "white"
                            } : null
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "search",
                        name: "searchWatch",
                        id: "searchWatch",
                        value: searchWatch,
                        onChange: handleSearch,
                        className: isNight ? (_Sortmenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().searchWatchNight) : (_Sortmenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().searchWatch),
                        placeholder: "Search watchlist..."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: (_Sortmenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().formContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "sortWatch",
                        className: (_Sortmenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().label),
                        style: isNight ? {
                            color: "white"
                        } : null,
                        children: "Sort by"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        id: "sortWatch",
                        value: sortWatch,
                        onChange: (event)=>sortList(event.target.value)
                        ,
                        className: (_Sortmenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().watchlistSelect),
                        style: isNight ? {
                            color: "white"
                        } : null,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "recent",
                                children: "Recently Added"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "first",
                                children: "First Added"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortmenu);

});

/***/ }),

/***/ 4786:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4102);
/* harmony import */ var _Sortmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3421);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7593);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_globalProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5901);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_list__WEBPACK_IMPORTED_MODULE_1__, _Sortmenu__WEBPACK_IMPORTED_MODULE_2__]);
([_list__WEBPACK_IMPORTED_MODULE_1__, _Sortmenu__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const index = ()=>{
    const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_store_globalProvider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const socket = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)("");
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (socket.current === "") {
            socket.current = new WebSocket(`wss://ws.finnhub.io?token=c868vsaad3i9fvji44qg`);
        }
        socket.current.onopen = ()=>{
            console.log("ws connected");
            socket.current.send(JSON.stringify({
                'type': 'subscribe',
                'symbol': 'AAPL'
            }));
        };
        socket.current.onmessage = (e)=>{
            const msg = JSON.parse(e.data);
            console.log(msg);
        };
        return ()=>socket.current.close()
        ;
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().listContainer),
            style: isNight ? {
                backgroundColor: "rgb(66,66,66)"
            } : null,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Watchlist"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sortmenu__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_list__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

});

/***/ }),

/***/ 4102:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Listitem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(885);
/* harmony import */ var _store_watchlistProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6346);
/* harmony import */ var _list_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9171);
/* harmony import */ var _list_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_list_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Listitem__WEBPACK_IMPORTED_MODULE_2__, _store_watchlistProvider__WEBPACK_IMPORTED_MODULE_3__]);
([_Listitem__WEBPACK_IMPORTED_MODULE_2__, _store_watchlistProvider__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





const List = ()=>{
    const { watchlist , searchWatch , filteredSearchWatch , sortWatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_watchlistProvider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    if (!watchlist) return;
    let reverseWatchlist = [
        ...watchlist
    ].reverse();
    let reverseFilterlist = [
        ...filteredSearchWatch
    ].reverse();
    if (sortWatch === "first") {
        if (searchWatch && filteredSearchWatch.length > 0) {
            return filteredSearchWatch.map((item, index)=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Listitem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    id: item.id,
                    index: index,
                    symbol: item.symbol,
                    name: item.name,
                    price: item.price
                }, item.id));
            });
        }
        if (searchWatch) {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Could not find a match"
            }));
        }
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_list_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
            children: watchlist.map((item, index)=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Listitem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    id: item.id,
                    index: index,
                    symbol: item.symbol,
                    name: item.name,
                    price: item.price
                }, item.id));
            })
        }));
    }
    if (sortWatch === "recent") {
        if (searchWatch && filteredSearchWatch.length > 0) {
            return reverseFilterlist.map((item, index)=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Listitem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    id: item.id,
                    index: index,
                    symbol: item.symbol,
                    name: item.name,
                    price: item.price
                }, item.id));
            });
        }
        if (searchWatch) {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Could not find a match"
            }));
        }
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_list_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
            children: reverseWatchlist.map((item, index)=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Listitem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    id: item.id,
                    index: index,
                    symbol: item.symbol,
                    name: item.name,
                    price: item.price
                }, item.id));
            })
        }));
    }
    return;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

});

/***/ })

};
;