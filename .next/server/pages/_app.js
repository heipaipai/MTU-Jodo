(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "react-bootstrap"
const external_react_bootstrap_namespaceObject = require("react-bootstrap");
;// CONCATENATED MODULE: external "react-bootstrap/Container"
const Container_namespaceObject = require("react-bootstrap/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Nav"
const Nav_namespaceObject = require("react-bootstrap/Nav");
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Navbar"
const Navbar_namespaceObject = require("react-bootstrap/Navbar");
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/NavDropdown"
const NavDropdown_namespaceObject = require("react-bootstrap/NavDropdown");
var NavDropdown_default = /*#__PURE__*/__webpack_require__.n(NavDropdown_namespaceObject);
;// CONCATENATED MODULE: ./components/Nav/index.tsx





function GlobalNav() {
    return /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()), {
        collapseOnSelect: true,
        expand: "lg",
        bg: "dark",
        variant: "dark",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Brand, {
                    href: "/",
                    children: "MTU Jōdō"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                    "aria-controls": "responsive-navbar-nav"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Navbar_default()).Collapse, {
                    id: "responsive-navbar-nav",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Nav_default()), {
                            className: "me-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                    href: "/about",
                                    children: "About"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((NavDropdown_default()), {
                                    title: "Competition",
                                    id: "collasible-nav-dropdown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((NavDropdown_default()).Item, {
                                            href: "/competition/addCompetitor",
                                            children: "Add Competitor"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((NavDropdown_default()).Item, {
                                            href: "/competition/viewCompetitor",
                                            children: "View Competitor"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((NavDropdown_default()).Divider, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx((NavDropdown_default()).Item, {
                                            href: "/competition/generatePools",
                                            children: "Generate Pools"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                href: "/login",
                                children: "Login"
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const Nav = (GlobalNav);

;// CONCATENATED MODULE: ./components/Footer/index.tsx


function Footer() {
    return(// bootstrap footer at bottom of page
    /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "footer mt-auto py-3 bg-light fixed-bottom",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-muted",
                    children: "Copyright \xa9 Munster Technological University 2022"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-muted",
                    children: "Created by: Andrew Ashe, River James, Heidi Paimen, Valeriia Shapoval"
                })
            ]
        })
    }));
}
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(90);
;// CONCATENATED MODULE: ./pages/_app.tsx







function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.SSRProvider, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Nav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 90:
/***/ (() => {



/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(558));
module.exports = __webpack_exports__;

})();