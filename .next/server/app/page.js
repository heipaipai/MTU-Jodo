(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 9274:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 852:
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 8421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRouter": () => (/* binding */ AppRouter),
/* harmony export */   "LayoutRouter": () => (/* binding */ LayoutRouter),
/* harmony export */   "RenderFromTemplateContext": () => (/* binding */ RenderFromTemplateContext),
/* harmony export */   "__next_app_webpack_require__": () => (/* binding */ __next_app_webpack_require__),
/* harmony export */   "pages": () => (/* binding */ pages),
/* harmony export */   "renderToReadableStream": () => (/* binding */ renderToReadableStream),
/* harmony export */   "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
/* harmony export */   "serverHooks": () => (/* binding */ serverHooks),
/* harmony export */   "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
/* harmony export */   "tree": () => (/* binding */ tree)
/* harmony export */ });

    const tree = {
      children: [
        '',
        {
      children: ['', {}, {layoutOrPagePath: "/Users/riverjames/Github/Jōdō/MTU-Jodo/app/page.tsx", page: () => __webpack_require__(1208)}]
    },
        {
          layoutOrPagePath: "/Users/riverjames/Github/Jōdō/MTU-Jodo/app/layout.tsx",'layout': () => __webpack_require__(8514),
        }
      ]
    }.children;
    const pages = ["/Users/riverjames/Github/Jōdō/MTU-Jodo/app/page.tsx"]

    const AppRouter = (__webpack_require__(2315)["default"])
    const LayoutRouter = (__webpack_require__(2333)["default"])
    const RenderFromTemplateContext = (__webpack_require__(2885)["default"])

    const staticGenerationAsyncStorage = (__webpack_require__(683).staticGenerationAsyncStorage)
    const requestAsyncStorage = (__webpack_require__(3269).requestAsyncStorage)

    const serverHooks = __webpack_require__(5746)

    const renderToReadableStream = (__webpack_require__(8208).renderToReadableStream)
    const __next_app_webpack_require__ = __webpack_require__
  

/***/ }),

/***/ 3259:
/***/ (() => {



/***/ }),

/***/ 1208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5468);


function Home() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row text-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-md-12 mt-5",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jumbotron",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            className: "display-4",
                            children: [
                                "Welcome to ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("u", {
                                        children: "MTU Jōdō"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "lead",
                            children: "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [999,499,546], () => (__webpack_exec__(8421)));
module.exports = __webpack_exports__;

})();