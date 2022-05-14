"use strict";
(() => {
var exports = {};
exports.id = 11;
exports.ids = [11];
exports.modules = {

/***/ 1289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./store/database.js

async function connect() {
    const client = await MongoClient.connect();
    return client;
}

;// CONCATENATED MODULE: ./pages/api/auth/signup.js

async function handler(req, res) {
    const data = req.body;
    const { user , password  } = data;
    if (!user || !password || password.trim().length < 7) {
        res.status(422).json({
            message: "Error password"
        });
    }
    const client = await conntectToDatabase();
    const db = client.db();
    db.collection("users");
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1289));
module.exports = __webpack_exports__;

})();