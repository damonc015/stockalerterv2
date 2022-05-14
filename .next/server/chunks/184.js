exports.id = 184;
exports.ids = [184];
exports.modules = {

/***/ 3371:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Alert_container__5f45c",
	"bell": "Alert_bell__AZbfT",
	"bellAlt": "Alert_bellAlt__eH_NW"
};


/***/ }),

/***/ 9755:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Icon_container__5HA_S",
	"icon": "Icon_icon__AjpdP",
	"word": "Icon_word__ZJLBM"
};


/***/ }),

/***/ 3848:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Iconlist_container__eXYzC"
};


/***/ }),

/***/ 4507:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Logo_container__9E6dg"
};


/***/ }),

/***/ 5258:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "navbar_container__AkUMw"
};


/***/ }),

/***/ 8983:
/***/ ((module) => {

// Exports
module.exports = {
	"nightContainer": "Night_nightContainer__FiLjl",
	"moon": "Night_moon__EqKco",
	"toggleContainer": "Night_toggleContainer__zkq8B",
	"toggleBackground": "Night_toggleBackground__7lwZJ",
	"toggle": "Night_toggle__L7vFh"
};


/***/ }),

/***/ 8809:
/***/ ((module) => {

// Exports
module.exports = {
	"searchContainer": "Searchbar_searchContainer__mmT2r",
	"searchBar": "Searchbar_searchBar__ZOIXA",
	"searchBarInput": "Searchbar_searchBarInput__hlAOP",
	"searchResultsContainer": "Searchbar_searchResultsContainer__E7x2G",
	"searchItem": "Searchbar_searchItem__EJju_"
};


/***/ }),

/***/ 5240:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "topbar_container__LcOdT"
};


/***/ }),

/***/ 7904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/sidebars/navbar/index.module.css
var index_module = __webpack_require__(5258);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./components/sidebars/navbar/Logo.module.css
var Logo_module = __webpack_require__(4507);
var Logo_module_default = /*#__PURE__*/__webpack_require__.n(Logo_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-icons/vsc"
var vsc_ = __webpack_require__(382);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./store/globalProvider.js
var globalProvider = __webpack_require__(5901);
// EXTERNAL MODULE: ./components/sidebars/navbar/Alert.module.css
var Alert_module = __webpack_require__(3371);
var Alert_module_default = /*#__PURE__*/__webpack_require__.n(Alert_module);
;// CONCATENATED MODULE: ./components/sidebars/navbar/Alert.js





const Alert = ()=>{
    const { alert  } = (0,external_react_.useContext)(globalProvider/* default */.Z);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Alert_module_default()).container,
        children: alert ? /*#__PURE__*/ jsx_runtime_.jsx(vsc_.VscBellDot, {
            className: (Alert_module_default()).bellAlt
        }) : /*#__PURE__*/ jsx_runtime_.jsx(vsc_.VscBell, {
            className: (Alert_module_default()).bell
        })
    }));
};
/* harmony default export */ const navbar_Alert = (Alert);

;// CONCATENATED MODULE: ./components/sidebars/navbar/Logo.js




const logo = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Logo_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Stock Alerter"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar_Alert, {})
        ]
    }));
};
/* harmony default export */ const Logo = (logo);

// EXTERNAL MODULE: ./components/sidebars/navbar/Iconlist.module.css
var Iconlist_module = __webpack_require__(3848);
var Iconlist_module_default = /*#__PURE__*/__webpack_require__.n(Iconlist_module);
// EXTERNAL MODULE: ./components/sidebars/navbar/Icon.module.css
var Icon_module = __webpack_require__(9755);
var Icon_module_default = /*#__PURE__*/__webpack_require__.n(Icon_module);
;// CONCATENATED MODULE: ./components/sidebars/navbar/Icon.js





const Icon = (props)=>{
    const { symbol , name  } = props;
    const { isNight  } = (0,external_react_.useContext)(globalProvider/* default */.Z);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Icon_module_default()).container,
        style: isNight ? {
            color: "#CACACB"
        } : null,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Icon_module_default()).icon,
                children: symbol
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Icon_module_default()).word,
                children: name
            })
        ]
    }));
};
/* harmony default export */ const navbar_Icon = (Icon);

// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: external "react-icons/im"
var im_ = __webpack_require__(924);
// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__(8098);
;// CONCATENATED MODULE: ./components/sidebars/navbar/IconList.js








const IconList = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Iconlist_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(navbar_Icon, {
                        symbol: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiTwotoneHome, {}),
                        name: "Dashboard"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/about",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(navbar_Icon, {
                        symbol: /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsInfoCircleFill, {}),
                        name: "About"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/news",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(navbar_Icon, {
                        symbol: /*#__PURE__*/ jsx_runtime_.jsx(im_.ImNewspaper, {}),
                        name: "News"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/logout",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(navbar_Icon, {
                        symbol: /*#__PURE__*/ jsx_runtime_.jsx(ri_.RiLogoutBoxRLine, {}),
                        name: "Logout"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const navbar_IconList = (IconList);

;// CONCATENATED MODULE: ./components/sidebars/navbar/index.js







const Navbar = (props)=>{
    const { isNight  } = (0,external_react_.useContext)(globalProvider/* default */.Z);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: (index_module_default()).container,
                style: isNight ? {
                    backgroundColor: "#424242",
                    color: "#CACACB"
                } : null,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Logo, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(navbar_IconList, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: props.children
            })
        ]
    }));
};
/* harmony default export */ const navbar = (Navbar);


/***/ }),

/***/ 7103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ topbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/sidebars/topbar/Searchbar.module.css
var Searchbar_module = __webpack_require__(8809);
var Searchbar_module_default = /*#__PURE__*/__webpack_require__.n(Searchbar_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./store/searchProvider.js
var searchProvider = __webpack_require__(8595);
;// CONCATENATED MODULE: ./components/sidebars/topbar/Searchbar.js





const Searchbar = (props)=>{
    const { placeholder , page  } = props;
    const { 0: search , 1: setSearch  } = (0,external_react_.useState)("");
    const { 0: searchResults , 1: setSearchResults  } = (0,external_react_.useState)([]);
    const { allStocks , setStockHome , setStockNews , scrollTop  } = (0,external_react_.useContext)(searchProvider/* default */.Z);
    const defaultSelect = (e)=>{
        e.preventDefault();
        setSearch("");
    };
    const handleSearch = (e)=>{
        setSearch(e.target.value);
    };
    const selectStock = (selectedStock)=>{
        if (page === "dashboard") {
            scrollTop();
            setStockHome(selectedStock);
        }
        if (page === "news") {
            setStockNews(selectedStock);
        }
        setSearch("");
    };
    (0,external_react_.useEffect)(()=>{
        // Search Filter
        (function filterNames() {
            try {
                setSearchResults(allStocks.filter((val)=>{
                    if (search === "") {
                        return null;
                    } else if (val.symbol.toLowerCase().includes(search.toLowerCase()) || val.name.toLowerCase().includes(search.toLowerCase())) {
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
        search
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Searchbar_module_default()).searchContainer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                className: (Searchbar_module_default()).searchBar,
                autoComplete: "off",
                onSubmit: defaultSelect,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "navSearch"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: (Searchbar_module_default()).searchBarInput,
                        id: "navSearch",
                        type: "search",
                        value: search,
                        placeholder: placeholder,
                        onChange: handleSearch,
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Searchbar_module_default()).searchResultsContainer,
                children: page === "news" ? /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: searchResults.slice(0, 8).map((stock)=>{
                        const { name , symbol  } = stock;
                        return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/news/" + symbol,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Searchbar_module_default()).searchItem,
                                onClick: ()=>selectStock(stock)
                                ,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        name,
                                        " (",
                                        symbol,
                                        ")"
                                    ]
                                })
                            })
                        }, symbol));
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: searchResults.slice(0, 8).map((stock)=>{
                        const { name , symbol  } = stock;
                        return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: `/${symbol}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Searchbar_module_default()).searchItem,
                                onClick: ()=>selectStock(stock)
                                ,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        name,
                                        " (",
                                        symbol,
                                        ")"
                                    ]
                                })
                            }, symbol)
                        }, symbol));
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const topbar_Searchbar = (Searchbar);

// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: ./components/sidebars/topbar/Night.module.css
var Night_module = __webpack_require__(8983);
var Night_module_default = /*#__PURE__*/__webpack_require__.n(Night_module);
// EXTERNAL MODULE: ./store/globalProvider.js
var globalProvider = __webpack_require__(5901);
;// CONCATENATED MODULE: ./components/sidebars/topbar/Night.js





const Night = ()=>{
    const globalCtx = (0,external_react_.useContext)(globalProvider/* default */.Z);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Night_module_default()).nightContainer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(md_.MdNightlight, {
                className: (Night_module_default()).moon
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: (Night_module_default()).toggleContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: (Night_module_default()).toggle,
                        type: "checkbox",
                        onClick: globalCtx.changeNight
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Night_module_default()).toggleBackground
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const topbar_Night = (Night);

// EXTERNAL MODULE: ./components/sidebars/topbar/index.module.css
var index_module = __webpack_require__(5240);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./components/sidebars/topbar/index.js






const Topbar = (props)=>{
    const { searchPlaceholder , page  } = props;
    const globalCtx = (0,external_react_.useContext)(globalProvider/* default */.Z);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).container,
        style: globalCtx.isNight ? {
            backgroundColor: "rgb(66,66,66)",
            color: "#FAFAFA"
        } : null,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(topbar_Searchbar, {
                placeholder: searchPlaceholder,
                page: page
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(topbar_Night, {})
        ]
    }));
};
/* harmony default export */ const topbar = (Topbar);


/***/ })

};
;