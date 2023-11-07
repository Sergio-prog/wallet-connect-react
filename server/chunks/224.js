"use strict";
exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 3224:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProjectInfoCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4019);
/* harmony import */ var _store_SettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6567);
/* harmony import */ var _mui_icons_material_Report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7604);
/* harmony import */ var _mui_icons_material_Report__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Report__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_ReportProblem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4527);
/* harmony import */ var _mui_icons_material_ReportProblem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ReportProblem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_NewReleases__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7569);
/* harmony import */ var _mui_icons_material_NewReleases__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_NewReleases__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([valtio__WEBPACK_IMPORTED_MODULE_1__, _store_SettingsStore__WEBPACK_IMPORTED_MODULE_2__]);
([valtio__WEBPACK_IMPORTED_MODULE_1__, _store_SettingsStore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const StyledLink = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.styled)("span", {
    color: "#697177"
});
const StyledVerifiedIcon = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.styled)("img", {
    verticalAlign: "middle",
    marginRight: "5px"
});
const StyledUnknownRow = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.styled)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Row, {
    color: "$warning"
});
const StyledUnknownContainer = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.styled)("div", {
    padding: "7px"
});
const StyledInvalidRow = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.styled)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Row, {
    color: "$error"
});
const StyledInvalidContainer = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.styled)("div", {
    padding: "7px"
});
/**
 * Components
 */ function ProjectInfoCard({ metadata , intention  }) {
    const { currentRequestVerifyContext  } = (0,valtio__WEBPACK_IMPORTED_MODULE_1__.useSnapshot)(_store_SettingsStore__WEBPACK_IMPORTED_MODULE_2__/* ["default"].state */ .Z.state);
    const validation = currentRequestVerifyContext === null || currentRequestVerifyContext === void 0 ? void 0 : currentRequestVerifyContext.verified.validation;
    const { icons , name , url  } = metadata;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            textAlign: "center"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Row, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Col, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Avatar, {
                        style: {
                            margin: "auto"
                        },
                        src: icons[0],
                        size: "xl"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Row, {
                align: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Col, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Text, {
                        h3: true,
                        "data-testid": "session-info-card-text",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: name
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Text, {
                                h4: true,
                                children: [
                                    " wants to ",
                                    intention ? intention : "connect"
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Row, {
                align: "center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Col, {
                    children: [
                        validation == "VALID" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledVerifiedIcon, {
                            src: "/icons/verified-domain.svg"
                        }) : null,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Link, {
                            style: {
                                verticalAlign: "middle"
                            },
                            href: url,
                            "data-testid": "session-info-card-url",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLink, {
                                children: url
                            })
                        })
                    ]
                })
            }),
            (currentRequestVerifyContext === null || currentRequestVerifyContext === void 0 ? void 0 : currentRequestVerifyContext.verified.isScam) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledInvalidRow, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Col, {
                    style: {
                        margin: "auto"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledInvalidContainer, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_NewReleases__WEBPACK_IMPORTED_MODULE_5___default()), {
                                style: {
                                    verticalAlign: "bottom"
                                }
                            }),
                            "Potential threat"
                        ]
                    })
                })
            }) : validation == "UNKNOWN" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledUnknownRow, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Col, {
                    style: {
                        margin: "auto"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledUnknownContainer, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Report__WEBPACK_IMPORTED_MODULE_3___default()), {
                                style: {
                                    verticalAlign: "bottom"
                                }
                            }),
                            "Cannot Verify"
                        ]
                    })
                })
            }) : validation == "INVALID" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledInvalidRow, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Col, {
                    style: {
                        margin: "auto"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledInvalidContainer, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ReportProblem__WEBPACK_IMPORTED_MODULE_4___default()), {
                                style: {
                                    verticalAlign: "bottom",
                                    marginRight: "2px"
                                }
                            }),
                            "Invalid Domain"
                        ]
                    })
                })
            }) : null
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;