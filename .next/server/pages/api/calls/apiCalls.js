"use strict";
(() => {
var exports = {};
exports.id = 115;
exports.ids = [115];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStockNames": () => (/* binding */ getStockNames),
/* harmony export */   "getStockPriceHistory": () => (/* binding */ getStockPriceHistory),
/* harmony export */   "getStockData": () => (/* binding */ getStockData)
/* harmony export */ });
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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2665));
module.exports = __webpack_exports__;

})();