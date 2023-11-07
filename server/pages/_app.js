"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ChainAddressMini)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);


function ChainAddressMini({ address  }) {
    if (!address) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                style: {
                    marginLeft: "5px"
                },
                children: [
                    address.substring(0, 6),
                    "...",
                    address.substring(address.length - 6)
                ]
            })
        })
    });
};


/***/ }),

/***/ 6129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ChainDataMini)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_chainsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7688);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




// const StyledLogo = styled(Image, {})
function ChainDataMini({ chainId  }) {
    const chainData = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>(0,_data_chainsUtil__WEBPACK_IMPORTED_MODULE_1__/* .getChainData */ .f)(chainId)
    , [
        chainId
    ]);
    console.log(chainData);
    if (!chainData) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Row, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                    size: "xs",
                    src: chainData.logo
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        marginLeft: "5px"
                    },
                    children: chainData.name
                })
            ]
        })
    });
};


/***/ }),

/***/ 6964:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8653);
/* harmony import */ var _components_RouteTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1280);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_RouteTransition__WEBPACK_IMPORTED_MODULE_2__]);
_components_RouteTransition__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





/**
 * Container
 */ function Layout({ children , initialized  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
        display: "flex",
        justify: "center",
        alignItems: "center",
        css: {
            width: "100vw",
            height: "100vh",
            paddingLeft: 0,
            paddingRight: 0
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Card, {
            bordered: {
                "@initial": false,
                "@xs": true
            },
            borderWeight: {
                "@initial": "light",
                "@xs": "light"
            },
            css: {
                height: "100%",
                width: "100%",
                justifyContent: initialized ? "normal" : "center",
                alignItems: initialized ? "normal" : "center",
                borderRadius: 0,
                paddingBottom: 5,
                "@xs": {
                    borderRadius: "$lg",
                    height: "95vh",
                    maxWidth: "450px"
                }
            },
            children: initialized ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RouteTransition__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Card.Body, {
                            css: {
                                display: "block",
                                paddingLeft: 2,
                                paddingRight: 2,
                                paddingBottom: "40px",
                                "@xs": {
                                    padding: "20px",
                                    paddingBottom: "40px"
                                }
                            },
                            children: children
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Card.Footer, {
                        css: {
                            height: "85px",
                            minHeight: "85px",
                            position: "sticky",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                            boxShadow: "0 -30px 20px #111111",
                            backgroundColor: "#111111",
                            zIndex: 200,
                            bottom: 0,
                            left: 0
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Loading, {})
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8820:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_ModalStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(462);
/* harmony import */ var _views_SessionProposalModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5670);
/* harmony import */ var _views_SessionSendTransactionModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(532);
/* harmony import */ var _views_SessionSignCosmosModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6988);
/* harmony import */ var _views_SessionSignModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6793);
/* harmony import */ var _views_SessionSignNearModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4642);
/* harmony import */ var _views_SessionSignPolkadotModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9000);
/* harmony import */ var _views_SessionSignSolanaModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7778);
/* harmony import */ var _views_SessionSignMultiversxModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8455);
/* harmony import */ var _views_SessionSignTronModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3817);
/* harmony import */ var _views_SessionSignTezosModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2661);
/* harmony import */ var _views_SessionSignKadenaModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1051);
/* harmony import */ var _views_SessionSignTypedDataModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2483);
/* harmony import */ var _views_SessionUnsuportedMethodModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4763);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4019);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _views_AuthRequestModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_ModalStore__WEBPACK_IMPORTED_MODULE_1__, _views_SessionProposalModal__WEBPACK_IMPORTED_MODULE_2__, _views_SessionSendTransactionModal__WEBPACK_IMPORTED_MODULE_3__, _views_SessionSignCosmosModal__WEBPACK_IMPORTED_MODULE_4__, _views_SessionSignModal__WEBPACK_IMPORTED_MODULE_5__, _views_SessionSignNearModal__WEBPACK_IMPORTED_MODULE_6__, _views_SessionSignPolkadotModal__WEBPACK_IMPORTED_MODULE_7__, _views_SessionSignSolanaModal__WEBPACK_IMPORTED_MODULE_8__, _views_SessionSignMultiversxModal__WEBPACK_IMPORTED_MODULE_9__, _views_SessionSignTronModal__WEBPACK_IMPORTED_MODULE_10__, _views_SessionSignTezosModal__WEBPACK_IMPORTED_MODULE_11__, _views_SessionSignKadenaModal__WEBPACK_IMPORTED_MODULE_12__, _views_SessionSignTypedDataModal__WEBPACK_IMPORTED_MODULE_13__, _views_SessionUnsuportedMethodModal__WEBPACK_IMPORTED_MODULE_14__, valtio__WEBPACK_IMPORTED_MODULE_16__, _views_AuthRequestModal__WEBPACK_IMPORTED_MODULE_18__]);
([_store_ModalStore__WEBPACK_IMPORTED_MODULE_1__, _views_SessionProposalModal__WEBPACK_IMPORTED_MODULE_2__, _views_SessionSendTransactionModal__WEBPACK_IMPORTED_MODULE_3__, _views_SessionSignCosmosModal__WEBPACK_IMPORTED_MODULE_4__, _views_SessionSignModal__WEBPACK_IMPORTED_MODULE_5__, _views_SessionSignNearModal__WEBPACK_IMPORTED_MODULE_6__, _views_SessionSignPolkadotModal__WEBPACK_IMPORTED_MODULE_7__, _views_SessionSignSolanaModal__WEBPACK_IMPORTED_MODULE_8__, _views_SessionSignMultiversxModal__WEBPACK_IMPORTED_MODULE_9__, _views_SessionSignTronModal__WEBPACK_IMPORTED_MODULE_10__, _views_SessionSignTezosModal__WEBPACK_IMPORTED_MODULE_11__, _views_SessionSignKadenaModal__WEBPACK_IMPORTED_MODULE_12__, _views_SessionSignTypedDataModal__WEBPACK_IMPORTED_MODULE_13__, _views_SessionUnsuportedMethodModal__WEBPACK_IMPORTED_MODULE_14__, valtio__WEBPACK_IMPORTED_MODULE_16__, _views_AuthRequestModal__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















function Modal() {
    const { open , view  } = (0,valtio__WEBPACK_IMPORTED_MODULE_16__.useSnapshot)(_store_ModalStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].state */ .Z.state);
    // handle the modal being closed by click outside
    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_17__.useCallback)(()=>{
        if (open) {
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].close */ .Z.close();
        }
    }, [
        open
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_15__.Modal, {
        blur: true,
        onClose: onClose,
        open: open,
        style: {
            border: "1px solid rgba(139, 139, 139, 0.4)"
        },
        children: [
            view === "SessionProposalModal" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_SessionProposalModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            view === "SessionSignModal" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_SessionSignModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            view === "SessionSignTypedDataModal" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_SessionSignTypedDataModal__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
            view === "SessionSendTransactionModal" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_SessionSendTransactionModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            view === "SessionUnsuportedMethodModal" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_SessionUnsuportedMethodModal__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
            view === "SessionSignCosmosModal" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_SessionSignCosmosModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            view === "SessionSignSolanaModal" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_SessionSignSolanaModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            view === "SessionSignPolkadotModal" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_SessionSignPolkadotModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            view === "SessionSignNearModal" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_SessionSignNearModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            view === "SessionSignMultiversxModal" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_SessionSignMultiversxModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            view === "SessionSignTronModal" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_SessionSignTronModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
            view === "SessionSignTezosModal" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_SessionSignTezosModal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
            view === "SessionSignKadenaModal" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_SessionSignKadenaModal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
            view === "AuthRequestModal" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_AuthRequestModal__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6926:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalFooter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6567);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4019);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_SettingsStore__WEBPACK_IMPORTED_MODULE_1__, valtio__WEBPACK_IMPORTED_MODULE_4__]);
([_store_SettingsStore__WEBPACK_IMPORTED_MODULE_1__, valtio__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function ModalFooter({ onApprove , onReject , infoBoxCondition , infoBoxText , disabledApprove  }) {
    const { currentRequestVerifyContext  } = (0,valtio__WEBPACK_IMPORTED_MODULE_4__.useSnapshot)(_store_SettingsStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].state */ .Z.state);
    const validation = currentRequestVerifyContext === null || currentRequestVerifyContext === void 0 ? void 0 : currentRequestVerifyContext.verified.validation;
    const approveButtonColor = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        switch(validation){
            case "INVALID":
                return "error";
            case "UNKNOWN":
                return "warning";
            default:
                return "success";
        }
    }, [
        validation
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Footer, {
        children: [
            infoBoxCondition && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Row, {
                style: {
                    textAlign: "initial"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: infoBoxText || ""
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Row, {
                justify: "space-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        auto: true,
                        flat: true,
                        style: {
                            color: "white",
                            backgroundColor: "grey"
                        },
                        onPress: onReject,
                        "data-testid": "session-reject-button",
                        children: "Reject"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        auto: true,
                        flat: true,
                        color: approveButtonColor,
                        disabled: disabledApprove,
                        onPress: onApprove,
                        "data-testid": "session-approve-button",
                        children: "Approve"
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




function Navigation() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
        justify: "space-between",
        align: "center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "navLink",
                    "data-testid": "accounts",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        alt: "accounts icon",
                        src: "/icons/accounts-icon.svg",
                        width: 27,
                        height: 27
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/sessions",
                passHref: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "navLink",
                    "data-testid": "sessions",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        alt: "sessions icon",
                        src: "/icons/sessions-icon.svg",
                        width: 27,
                        height: 27
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/walletconnect",
                passHref: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "navLink",
                    "data-testid": "wc-connect",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                        size: "lg",
                        css: {
                            cursor: "pointer"
                        },
                        color: "gradient",
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            alt: "wallet connect icon",
                            src: "/wallet-connect-logo.svg",
                            width: 30,
                            height: 30
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/pairings",
                passHref: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "navLink",
                    "data-testid": "pairings",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        alt: "pairings icon",
                        src: "/icons/pairings-icon.svg",
                        width: 25,
                        height: 25
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/settings",
                passHref: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "navLink",
                    "data-testid": "settings",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        alt: "settings icon",
                        src: "/icons/settings-icon.svg",
                        width: 27,
                        height: 27
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 9344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ RequestDataCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
;// CONCATENATED MODULE: external "react-code-blocks"
const external_react_code_blocks_namespaceObject = require("react-code-blocks");
;// CONCATENATED MODULE: ./src/components/RequestDataCard.tsx



/**
 * Component
 */ function RequestDataCard({ data  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Row, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Col, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    h5: true,
                    children: "Data"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_code_blocks_namespaceObject.CodeBlock, {
                    showLineNumbers: false,
                    text: JSON.stringify(data, null, 2),
                    theme: external_react_code_blocks_namespaceObject.codepen,
                    language: "json"
                })
            ]
        })
    });
};


/***/ }),

/***/ 3602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RequestDetailsCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_COSMOSData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7523);
/* harmony import */ var _data_EIP155Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8157);
/* harmony import */ var _data_KadenaData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7284);
/* harmony import */ var _data_NEARData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5519);
/* harmony import */ var _data_SolanaData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2234);
/* harmony import */ var _data_MultiversxData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5366);
/* harmony import */ var _data_TronData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5842);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);










/**
 * Component
 */ function RequestDetailsCard({ chains , protocol  }) {
    var ref, ref1, ref2, ref3, ref4, ref5, ref6;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.Row, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.Col, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.Text, {
                            h5: true,
                            children: "Blockchain(s)"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.Text, {
                            color: "$gray400",
                            "data-testid": "request-details-chain",
                            children: chains.map((chain)=>{
                                var ref13, ref7, ref8, ref9, ref10, ref11, ref12;
                                return (ref6 = (ref5 = (ref4 = (ref3 = (ref2 = (ref1 = (ref = (ref13 = _data_EIP155Data__WEBPACK_IMPORTED_MODULE_2__/* .EIP155_CHAINS */ .Cn[chain]) === null || ref13 === void 0 ? void 0 : ref13.name) !== null && ref !== void 0 ? ref : (ref7 = _data_COSMOSData__WEBPACK_IMPORTED_MODULE_1__/* .COSMOS_MAINNET_CHAINS */ .G[chain]) === null || ref7 === void 0 ? void 0 : ref7.name) !== null && ref1 !== void 0 ? ref1 : (ref8 = _data_SolanaData__WEBPACK_IMPORTED_MODULE_5__/* .SOLANA_CHAINS */ .$[chain]) === null || ref8 === void 0 ? void 0 : ref8.name) !== null && ref2 !== void 0 ? ref2 : (ref9 = _data_NEARData__WEBPACK_IMPORTED_MODULE_4__/* .NEAR_TEST_CHAINS */ .nG[chain]) === null || ref9 === void 0 ? void 0 : ref9.name) !== null && ref3 !== void 0 ? ref3 : (ref10 = _data_MultiversxData__WEBPACK_IMPORTED_MODULE_6__/* .MULTIVERSX_CHAINS */ .Jk[chain]) === null || ref10 === void 0 ? void 0 : ref10.name) !== null && ref4 !== void 0 ? ref4 : (ref11 = _data_TronData__WEBPACK_IMPORTED_MODULE_7__/* .TRON_CHAINS */ .qU[chain]) === null || ref11 === void 0 ? void 0 : ref11.name) !== null && ref5 !== void 0 ? ref5 : (ref12 = _data_KadenaData__WEBPACK_IMPORTED_MODULE_3__/* .KADENA_CHAINS */ .ph[chain]) === null || ref12 === void 0 ? void 0 : ref12.name) !== null && ref6 !== void 0 ? ref6 : chain;
                            }).join(", ")
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.Divider, {
                y: 2
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.Row, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.Col, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.Text, {
                            h5: true,
                            children: "Relay Protocol"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.Text, {
                            color: "$gray400",
                            "data-testid": "request-detauls-realy-protocol",
                            children: protocol
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RequestMethodCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Component
 */ function RequestMethodCard({ methods  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Col, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    h5: true,
                    children: "Methods"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    color: "$gray400",
                    "data-testid": "request-methods",
                    children: methods.map((method)=>method
                    ).join(", ")
                })
            ]
        })
    });
};


/***/ }),

/***/ 6867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RequestModalContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Component
 */ function RequestModalContainer({ children , title  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            title ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Header, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    h3: true,
                    children: title
                })
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                    css: {
                        padding: 0
                    },
                    children: children
                })
            })
        ]
    });
};


/***/ }),

/***/ 1280:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RouteTransition)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



/**
 * Components
 */ function RouteTransition({ children  }) {
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
        exitBeforeEnter: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
            className: "routeTransition",
            initial: {
                opacity: 0,
                translateY: 7
            },
            animate: {
                opacity: 1,
                translateY: 0
            },
            exit: {
                opacity: 0,
                translateY: 7
            },
            transition: {
                duration: 0.18
            },
            children: children
        }, pathname)
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7978:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VerifyInfobox)
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







const StyledContainer = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.styled)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Row, {
    padding: "7px",
    borderRadius: "30px",
    marginTop: "10px",
    marginBottom: "10px"
});
const StyledUnknownRow = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.styled)(StyledContainer, {
    color: "$warning",
    border: "0.5px solid $warning"
});
const StyledUnknownContainer = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.styled)("div", {
    textAlign: "initial"
});
const StyledInvalidRow = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.styled)(StyledContainer, {
    color: "$error",
    border: "0.5px solid $error"
});
const StyledInvalidContainer = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.styled)("div", {
    textAlign: "initial"
});
const StyledDescription = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.styled)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Text, {
    lineHeight: "20px",
    fontSize: "15px"
});
/**
 * Components
 */ function VerifyInfobox({ metadata  }) {
    const { currentRequestVerifyContext  } = (0,valtio__WEBPACK_IMPORTED_MODULE_1__.useSnapshot)(_store_SettingsStore__WEBPACK_IMPORTED_MODULE_2__/* ["default"].state */ .Z.state);
    const validation = currentRequestVerifyContext === null || currentRequestVerifyContext === void 0 ? void 0 : currentRequestVerifyContext.verified.validation;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            textAlign: "center"
        },
        children: (currentRequestVerifyContext === null || currentRequestVerifyContext === void 0 ? void 0 : currentRequestVerifyContext.verified.isScam) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledInvalidRow, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Col, {
                    style: {
                        margin: "auto"
                    },
                    span: 2,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_NewReleases__WEBPACK_IMPORTED_MODULE_5___default()), {
                        style: {
                            verticalAlign: "bottom"
                        }
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Col, {
                    style: {
                        margin: "auto"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Row, {
                            children: "Known secury risk"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Row, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledInvalidContainer, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledDescription, {
                                    children: "This website is flagged as unsafe by multiple security reports. Leave immediately to protect your assets."
                                })
                            })
                        })
                    ]
                })
            ]
        }) : validation == "UNKNOWN" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledUnknownRow, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Col, {
                    style: {
                        margin: "auto"
                    },
                    span: 2,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Report__WEBPACK_IMPORTED_MODULE_3___default()), {
                        style: {
                            verticalAlign: "bottom"
                        }
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Col, {
                    style: {
                        margin: "auto"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Row, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledUnknownContainer, {
                                children: "Unknown domain"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Row, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledUnknownContainer, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledDescription, {
                                    children: "This domain cannot be verified. Please check the request carefully before approving."
                                })
                            })
                        })
                    ]
                })
            ]
        }) : validation == "INVALID" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledInvalidRow, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Col, {
                    style: {
                        margin: "auto"
                    },
                    span: 2,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ReportProblem__WEBPACK_IMPORTED_MODULE_4___default()), {
                        style: {
                            verticalAlign: "bottom"
                        }
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Col, {
                    style: {
                        margin: "auto"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Row, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: "Domain mismatch"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Row, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledInvalidContainer, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledDescription, {
                                    children: "This website has a domain that does not match the sender of this request. Approving may lead to loss of funds."
                                })
                            })
                        })
                    ]
                })
            ]
        }) : null
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ getChainData)
/* harmony export */ });
/* unused harmony export ALL_CHAINS */
/* harmony import */ var _COSMOSData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7523);
/* harmony import */ var _EIP155Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8157);
/* harmony import */ var _KadenaData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7284);
/* harmony import */ var _MultiversxData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5366);
/* harmony import */ var _NEARData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5519);
/* harmony import */ var _PolkadotData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5443);
/* harmony import */ var _SolanaData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2234);
/* harmony import */ var _TezosData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8734);
/* harmony import */ var _TronData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5842);









const ALL_CHAINS = {
    ..._EIP155Data__WEBPACK_IMPORTED_MODULE_1__/* .EIP155_CHAINS */ .Cn,
    ..._COSMOSData__WEBPACK_IMPORTED_MODULE_0__/* .COSMOS_MAINNET_CHAINS */ .G,
    ..._KadenaData__WEBPACK_IMPORTED_MODULE_2__/* .KADENA_CHAINS */ .ph,
    ..._MultiversxData__WEBPACK_IMPORTED_MODULE_3__/* .MULTIVERSX_CHAINS */ .Jk,
    ..._NEARData__WEBPACK_IMPORTED_MODULE_4__/* .NEAR_CHAINS */ .EE,
    ..._PolkadotData__WEBPACK_IMPORTED_MODULE_5__/* .POLKADOT_CHAINS */ .H7,
    ..._SolanaData__WEBPACK_IMPORTED_MODULE_6__/* .SOLANA_CHAINS */ .$,
    ..._TezosData__WEBPACK_IMPORTED_MODULE_7__/* .TEZOS_CHAINS */ .B$,
    ..._TronData__WEBPACK_IMPORTED_MODULE_8__/* .TRON_CHAINS */ .qU
};
function getChainData(chainId) {
    if (!chainId) return;
    const [namespace, reference] = chainId.toString().split(":");
    return Object.values(ALL_CHAINS).find((chain)=>chain.chainId == reference && chain.namespace === namespace
    );
}


/***/ }),

/***/ 9756:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useInitialization)
/* harmony export */ });
/* harmony import */ var _store_SettingsStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6567);
/* harmony import */ var _utils_CosmosWalletUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(492);
/* harmony import */ var _utils_EIP155WalletUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6007);
/* harmony import */ var _utils_SolanaWalletUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7369);
/* harmony import */ var _utils_PolkadotWalletUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8209);
/* harmony import */ var _utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9873);
/* harmony import */ var _utils_MultiversxWalletUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(444);
/* harmony import */ var _utils_TronWalletUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6787);
/* harmony import */ var _utils_TezosWalletUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5974);
/* harmony import */ var _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(132);
/* harmony import */ var _utils_KadenaWalletUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5705);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4019);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_SettingsStore__WEBPACK_IMPORTED_MODULE_0__, _utils_PolkadotWalletUtil__WEBPACK_IMPORTED_MODULE_4__, _utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_5__, valtio__WEBPACK_IMPORTED_MODULE_12__]);
([_store_SettingsStore__WEBPACK_IMPORTED_MODULE_0__, _utils_PolkadotWalletUtil__WEBPACK_IMPORTED_MODULE_4__, _utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_5__, valtio__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function useInitialization() {
    const { 0: initialized , 1: setInitialized  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false);
    const prevRelayerURLValue = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)("");
    const { relayerRegionURL  } = (0,valtio__WEBPACK_IMPORTED_MODULE_12__.useSnapshot)(_store_SettingsStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].state */ .Z.state);
    const onInitialize = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(async ()=>{
        try {
            const { eip155Addresses  } = (0,_utils_EIP155WalletUtil__WEBPACK_IMPORTED_MODULE_2__/* .createOrRestoreEIP155Wallet */ .W_)();
            const { cosmosAddresses  } = await (0,_utils_CosmosWalletUtil__WEBPACK_IMPORTED_MODULE_1__/* .createOrRestoreCosmosWallet */ .QP)();
            const { solanaAddresses  } = await (0,_utils_SolanaWalletUtil__WEBPACK_IMPORTED_MODULE_3__/* .createOrRestoreSolanaWallet */ .fs)();
            const { polkadotAddresses  } = await (0,_utils_PolkadotWalletUtil__WEBPACK_IMPORTED_MODULE_4__/* .createOrRestorePolkadotWallet */ .ID)();
            const { nearAddresses  } = await (0,_utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_5__/* .createOrRestoreNearWallet */ .Vl)();
            const { multiversxAddresses  } = await (0,_utils_MultiversxWalletUtil__WEBPACK_IMPORTED_MODULE_6__/* .createOrRestoreMultiversxWallet */ .cO)();
            const { tronAddresses  } = await (0,_utils_TronWalletUtil__WEBPACK_IMPORTED_MODULE_7__/* .createOrRestoreTronWallet */ .mR)();
            const { tezosAddresses  } = await (0,_utils_TezosWalletUtil__WEBPACK_IMPORTED_MODULE_8__/* .createOrRestoreTezosWallet */ .zq)();
            const { kadenaAddresses  } = await (0,_utils_KadenaWalletUtil__WEBPACK_IMPORTED_MODULE_10__/* .createOrRestoreKadenaWallet */ .Qv)();
            _store_SettingsStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].setEIP155Address */ .Z.setEIP155Address(eip155Addresses[0]);
            _store_SettingsStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].setCosmosAddress */ .Z.setCosmosAddress(cosmosAddresses[0]);
            _store_SettingsStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].setSolanaAddress */ .Z.setSolanaAddress(solanaAddresses[0]);
            _store_SettingsStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].setPolkadotAddress */ .Z.setPolkadotAddress(polkadotAddresses[0]);
            _store_SettingsStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].setNearAddress */ .Z.setNearAddress(nearAddresses[0]);
            _store_SettingsStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].setMultiversxAddress */ .Z.setMultiversxAddress(multiversxAddresses[0]);
            _store_SettingsStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].setTronAddress */ .Z.setTronAddress(tronAddresses[0]);
            _store_SettingsStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].setTezosAddress */ .Z.setTezosAddress(tezosAddresses[0]);
            _store_SettingsStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].setKadenaAddress */ .Z.setKadenaAddress(kadenaAddresses[0]);
            await (0,_utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_9__/* .createWeb3Wallet */ .uz)(relayerRegionURL);
            setInitialized(true);
        } catch (err) {
            alert(err);
        }
    }, [
        relayerRegionURL
    ]);
    // restart transport if relayer region changes
    const onRelayerRegionChange = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(()=>{
        try {
            _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_9__/* .web3wallet.core.relayer.restartTransport */ .zF.core.relayer.restartTransport(relayerRegionURL);
            prevRelayerURLValue.current = relayerRegionURL;
        } catch (err) {
            alert(err);
        }
    }, [
        relayerRegionURL
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{
        if (!initialized) {
            onInitialize();
        }
        if (prevRelayerURLValue.current !== relayerRegionURL) {
            onRelayerRegionChange();
        }
    }, [
        initialized,
        onInitialize,
        relayerRegionURL,
        onRelayerRegionChange
    ]);
    return initialized;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3424:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useWalletConnectEventsManager)
/* harmony export */ });
/* harmony import */ var _data_COSMOSData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7523);
/* harmony import */ var _data_EIP155Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8157);
/* harmony import */ var _data_SolanaData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2234);
/* harmony import */ var _data_PolkadotData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5443);
/* harmony import */ var _data_MultiversxData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5366);
/* harmony import */ var _data_TronData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5842);
/* harmony import */ var _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(462);
/* harmony import */ var _store_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6567);
/* harmony import */ var _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(132);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _data_NEARData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5519);
/* harmony import */ var _utils_NearRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2751);
/* harmony import */ var _data_TezosData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8734);
/* harmony import */ var _data_KadenaData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7284);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_ModalStore__WEBPACK_IMPORTED_MODULE_6__, _store_SettingsStore__WEBPACK_IMPORTED_MODULE_7__, _utils_NearRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_11__]);
([_store_ModalStore__WEBPACK_IMPORTED_MODULE_6__, _store_SettingsStore__WEBPACK_IMPORTED_MODULE_7__, _utils_NearRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function useWalletConnectEventsManager(initialized) {
    /******************************************************************************
   * 1. Open session proposal modal for confirmation / rejection
   *****************************************************************************/ const onSessionProposal = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)((proposal)=>{
        // set the verify context so it can be displayed in the projectInfoCard
        _store_SettingsStore__WEBPACK_IMPORTED_MODULE_7__/* ["default"].setCurrentRequestVerifyContext */ .Z.setCurrentRequestVerifyContext(proposal.verifyContext);
        _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].open */ .Z.open("SessionProposalModal", {
            proposal
        });
    }, []);
    /******************************************************************************
   * 2. Open Auth modal for confirmation / rejection
   *****************************************************************************/ const onAuthRequest = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)((request)=>{
        _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].open */ .Z.open("AuthRequestModal", {
            request
        });
    }, []);
    /******************************************************************************
   * 3. Open request handling modal based on method that was used
   *****************************************************************************/ const onSessionRequest = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(async (requestEvent)=>{
        console.log("session_request", requestEvent);
        const { topic , params , verifyContext  } = requestEvent;
        const { request  } = params;
        const requestSession = _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.engine.signClient.session.get */ .zF.engine.signClient.session.get(topic);
        // set the verify context so it can be displayed in the projectInfoCard
        _store_SettingsStore__WEBPACK_IMPORTED_MODULE_7__/* ["default"].setCurrentRequestVerifyContext */ .Z.setCurrentRequestVerifyContext(verifyContext);
        switch(request.method){
            case _data_EIP155Data__WEBPACK_IMPORTED_MODULE_1__/* .EIP155_SIGNING_METHODS.ETH_SIGN */ .xy.ETH_SIGN:
            case _data_EIP155Data__WEBPACK_IMPORTED_MODULE_1__/* .EIP155_SIGNING_METHODS.PERSONAL_SIGN */ .xy.PERSONAL_SIGN:
                return _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].open */ .Z.open("SessionSignModal", {
                    requestEvent,
                    requestSession
                });
            case _data_EIP155Data__WEBPACK_IMPORTED_MODULE_1__/* .EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA */ .xy.ETH_SIGN_TYPED_DATA:
            case _data_EIP155Data__WEBPACK_IMPORTED_MODULE_1__/* .EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA_V3 */ .xy.ETH_SIGN_TYPED_DATA_V3:
            case _data_EIP155Data__WEBPACK_IMPORTED_MODULE_1__/* .EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA_V4 */ .xy.ETH_SIGN_TYPED_DATA_V4:
                return _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].open */ .Z.open("SessionSignTypedDataModal", {
                    requestEvent,
                    requestSession
                });
            case _data_EIP155Data__WEBPACK_IMPORTED_MODULE_1__/* .EIP155_SIGNING_METHODS.ETH_SEND_TRANSACTION */ .xy.ETH_SEND_TRANSACTION:
            case _data_EIP155Data__WEBPACK_IMPORTED_MODULE_1__/* .EIP155_SIGNING_METHODS.ETH_SIGN_TRANSACTION */ .xy.ETH_SIGN_TRANSACTION:
                return _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].open */ .Z.open("SessionSendTransactionModal", {
                    requestEvent,
                    requestSession
                });
            case _data_COSMOSData__WEBPACK_IMPORTED_MODULE_0__/* .COSMOS_SIGNING_METHODS.COSMOS_SIGN_DIRECT */ .O.COSMOS_SIGN_DIRECT:
            case _data_COSMOSData__WEBPACK_IMPORTED_MODULE_0__/* .COSMOS_SIGNING_METHODS.COSMOS_SIGN_AMINO */ .O.COSMOS_SIGN_AMINO:
                return _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].open */ .Z.open("SessionSignCosmosModal", {
                    requestEvent,
                    requestSession
                });
            case _data_SolanaData__WEBPACK_IMPORTED_MODULE_2__/* .SOLANA_SIGNING_METHODS.SOLANA_SIGN_MESSAGE */ .RT.SOLANA_SIGN_MESSAGE:
            case _data_SolanaData__WEBPACK_IMPORTED_MODULE_2__/* .SOLANA_SIGNING_METHODS.SOLANA_SIGN_TRANSACTION */ .RT.SOLANA_SIGN_TRANSACTION:
                return _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].open */ .Z.open("SessionSignSolanaModal", {
                    requestEvent,
                    requestSession
                });
            case _data_PolkadotData__WEBPACK_IMPORTED_MODULE_3__/* .POLKADOT_SIGNING_METHODS.POLKADOT_SIGN_MESSAGE */ ._7.POLKADOT_SIGN_MESSAGE:
            case _data_PolkadotData__WEBPACK_IMPORTED_MODULE_3__/* .POLKADOT_SIGNING_METHODS.POLKADOT_SIGN_TRANSACTION */ ._7.POLKADOT_SIGN_TRANSACTION:
                return _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].open */ .Z.open("SessionSignPolkadotModal", {
                    requestEvent,
                    requestSession
                });
            case _data_NEARData__WEBPACK_IMPORTED_MODULE_10__/* .NEAR_SIGNING_METHODS.NEAR_SIGN_IN */ .Cu.NEAR_SIGN_IN:
            case _data_NEARData__WEBPACK_IMPORTED_MODULE_10__/* .NEAR_SIGNING_METHODS.NEAR_SIGN_OUT */ .Cu.NEAR_SIGN_OUT:
            case _data_NEARData__WEBPACK_IMPORTED_MODULE_10__/* .NEAR_SIGNING_METHODS.NEAR_SIGN_TRANSACTION */ .Cu.NEAR_SIGN_TRANSACTION:
            case _data_NEARData__WEBPACK_IMPORTED_MODULE_10__/* .NEAR_SIGNING_METHODS.NEAR_SIGN_AND_SEND_TRANSACTION */ .Cu.NEAR_SIGN_AND_SEND_TRANSACTION:
            case _data_NEARData__WEBPACK_IMPORTED_MODULE_10__/* .NEAR_SIGNING_METHODS.NEAR_SIGN_TRANSACTIONS */ .Cu.NEAR_SIGN_TRANSACTIONS:
            case _data_NEARData__WEBPACK_IMPORTED_MODULE_10__/* .NEAR_SIGNING_METHODS.NEAR_SIGN_AND_SEND_TRANSACTIONS */ .Cu.NEAR_SIGN_AND_SEND_TRANSACTIONS:
            case _data_NEARData__WEBPACK_IMPORTED_MODULE_10__/* .NEAR_SIGNING_METHODS.NEAR_VERIFY_OWNER */ .Cu.NEAR_VERIFY_OWNER:
            case _data_NEARData__WEBPACK_IMPORTED_MODULE_10__/* .NEAR_SIGNING_METHODS.NEAR_SIGN_MESSAGE */ .Cu.NEAR_SIGN_MESSAGE:
                return _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].open */ .Z.open("SessionSignNearModal", {
                    requestEvent,
                    requestSession
                });
            case _data_MultiversxData__WEBPACK_IMPORTED_MODULE_4__/* .MULTIVERSX_SIGNING_METHODS.MULTIVERSX_SIGN_MESSAGE */ .wq.MULTIVERSX_SIGN_MESSAGE:
            case _data_MultiversxData__WEBPACK_IMPORTED_MODULE_4__/* .MULTIVERSX_SIGNING_METHODS.MULTIVERSX_SIGN_TRANSACTION */ .wq.MULTIVERSX_SIGN_TRANSACTION:
            case _data_MultiversxData__WEBPACK_IMPORTED_MODULE_4__/* .MULTIVERSX_SIGNING_METHODS.MULTIVERSX_SIGN_TRANSACTIONS */ .wq.MULTIVERSX_SIGN_TRANSACTIONS:
            case _data_MultiversxData__WEBPACK_IMPORTED_MODULE_4__/* .MULTIVERSX_SIGNING_METHODS.MULTIVERSX_SIGN_LOGIN_TOKEN */ .wq.MULTIVERSX_SIGN_LOGIN_TOKEN:
            case _data_MultiversxData__WEBPACK_IMPORTED_MODULE_4__/* .MULTIVERSX_SIGNING_METHODS.MULTIVERSX_SIGN_NATIVE_AUTH_TOKEN */ .wq.MULTIVERSX_SIGN_NATIVE_AUTH_TOKEN:
                return _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].open */ .Z.open("SessionSignMultiversxModal", {
                    requestEvent,
                    requestSession
                });
            case _data_NEARData__WEBPACK_IMPORTED_MODULE_10__/* .NEAR_SIGNING_METHODS.NEAR_GET_ACCOUNTS */ .Cu.NEAR_GET_ACCOUNTS:
                return _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response: await (0,_utils_NearRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_11__/* .approveNearRequest */ .I)(requestEvent)
                });
            case _data_TronData__WEBPACK_IMPORTED_MODULE_5__/* .TRON_SIGNING_METHODS.TRON_SIGN_MESSAGE */ .TT.TRON_SIGN_MESSAGE:
            case _data_TronData__WEBPACK_IMPORTED_MODULE_5__/* .TRON_SIGNING_METHODS.TRON_SIGN_TRANSACTION */ .TT.TRON_SIGN_TRANSACTION:
                return _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].open */ .Z.open("SessionSignTronModal", {
                    requestEvent,
                    requestSession
                });
            case _data_TezosData__WEBPACK_IMPORTED_MODULE_12__/* .TEZOS_SIGNING_METHODS.TEZOS_GET_ACCOUNTS */ .PQ.TEZOS_GET_ACCOUNTS:
            case _data_TezosData__WEBPACK_IMPORTED_MODULE_12__/* .TEZOS_SIGNING_METHODS.TEZOS_SEND */ .PQ.TEZOS_SEND:
            case _data_TezosData__WEBPACK_IMPORTED_MODULE_12__/* .TEZOS_SIGNING_METHODS.TEZOS_SIGN */ .PQ.TEZOS_SIGN:
                return _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].open */ .Z.open("SessionSignTezosModal", {
                    requestEvent,
                    requestSession
                });
            case _data_KadenaData__WEBPACK_IMPORTED_MODULE_13__/* .KADENA_SIGNING_METHODS.KADENA_GET_ACCOUNTS */ .Rf.KADENA_GET_ACCOUNTS:
            case _data_KadenaData__WEBPACK_IMPORTED_MODULE_13__/* .KADENA_SIGNING_METHODS.KADENA_SIGN */ .Rf.KADENA_SIGN:
            case _data_KadenaData__WEBPACK_IMPORTED_MODULE_13__/* .KADENA_SIGNING_METHODS.KADENA_QUICKSIGN */ .Rf.KADENA_QUICKSIGN:
                return _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].open */ .Z.open("SessionSignKadenaModal", {
                    requestEvent,
                    requestSession
                });
            default:
                return _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].open */ .Z.open("SessionUnsuportedMethodModal", {
                    requestEvent,
                    requestSession
                });
        }
    }, []);
    /******************************************************************************
   * Set up WalletConnect event listeners
   *****************************************************************************/ (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        if (initialized) {
            //sign
            _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.on */ .zF.on("session_proposal", onSessionProposal);
            _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.on */ .zF.on("session_request", onSessionRequest);
            // auth
            _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.on */ .zF.on("auth_request", onAuthRequest);
            // TODOs
            _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.engine.signClient.events.on */ .zF.engine.signClient.events.on("session_ping", (data)=>console.log("ping", data)
            );
            _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.on */ .zF.on("session_delete", (data)=>console.log("delete", data)
            );
        }
    }, [
        initialized,
        onAuthRequest,
        onSessionProposal,
        onSessionRequest
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3855:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PolkadotLib)
/* harmony export */ });
/* harmony import */ var _polkadot_keyring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8963);
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1763);
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4588);
/* harmony import */ var _polkadot_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_polkadot_keyring__WEBPACK_IMPORTED_MODULE_0__, _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_1__, _polkadot_util__WEBPACK_IMPORTED_MODULE_2__, _polkadot_types__WEBPACK_IMPORTED_MODULE_3__]);
([_polkadot_keyring__WEBPACK_IMPORTED_MODULE_0__, _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_1__, _polkadot_util__WEBPACK_IMPORTED_MODULE_2__, _polkadot_types__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




/**
 * Library
 */ class PolkadotLib {
    constructor(keypair, mnemonic){
        this.keypair = keypair;
        this.mnemonic = mnemonic;
        this.registry = new _polkadot_types__WEBPACK_IMPORTED_MODULE_3__.TypeRegistry();
    }
    static async init({ mnemonic  }) {
        // wait till  WASM is initialized, in case it is not initialized already (WASM is required for 'sr25519').
        await (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_1__.cryptoWaitReady)();
        // create a keyring to load the account.
        const keyring = new _polkadot_keyring__WEBPACK_IMPORTED_MODULE_0__.Keyring({
            type: "sr25519",
            ss58Format: 1
        });
        mnemonic = mnemonic || (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_1__.mnemonicGenerate)();
        const keypair = keyring.createFromUri(mnemonic);
        return new PolkadotLib(keypair, mnemonic);
    }
    getAddress() {
        return this.keypair.address;
    }
    getMnemonic() {
        return this.mnemonic;
    }
    async signMessage(message) {
        return {
            signature: (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_2__.u8aToHex)(this.keypair.sign(message))
        };
    }
    async signTransaction(payload) {
        this.registry.setSignedExtensions(payload.signedExtensions);
        const txPayload = this.registry.createType("ExtrinsicPayload", payload, {
            version: payload.version
        });
        const { signature  } = txPayload.sign(this.keypair);
        return {
            signature
        };
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6201);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6964);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8820);
/* harmony import */ var _hooks_useInitialization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9756);
/* harmony import */ var _hooks_useWalletConnectEventsManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3424);
/* harmony import */ var _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(132);
/* harmony import */ var _walletconnect_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4814);
/* harmony import */ var _walletconnect_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7002);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_1__, _components_Layout__WEBPACK_IMPORTED_MODULE_4__, _components_Modal__WEBPACK_IMPORTED_MODULE_5__, _hooks_useInitialization__WEBPACK_IMPORTED_MODULE_6__, _hooks_useWalletConnectEventsManager__WEBPACK_IMPORTED_MODULE_7__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_10__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_1__, _components_Layout__WEBPACK_IMPORTED_MODULE_4__, _components_Modal__WEBPACK_IMPORTED_MODULE_5__, _hooks_useInitialization__WEBPACK_IMPORTED_MODULE_6__, _hooks_useWalletConnectEventsManager__WEBPACK_IMPORTED_MODULE_7__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function App({ Component , pageProps  }) {
    // Step 1 - Initialize wallets and wallet connect client
    const initialized = (0,_hooks_useInitialization__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    // Step 2 - Once initialized, set up wallet connect event manager
    (0,_hooks_useWalletConnectEventsManager__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(initialized);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!initialized) return;
        _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.core.relayer.on */ .zF.core.relayer.on(_walletconnect_core__WEBPACK_IMPORTED_MODULE_9__.RELAYER_EVENTS.connect, ()=>{
            (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_10__/* .styledToast */ .VE)("Network connection is restored!", "success");
        });
        _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.core.relayer.on */ .zF.core.relayer.on(_walletconnect_core__WEBPACK_IMPORTED_MODULE_9__.RELAYER_EVENTS.disconnect, ()=>{
            (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_10__/* .styledToast */ .VE)("Network connection lost.", "error");
        });
    }, [
        initialized
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.NextUIProvider, {
        theme: (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.createTheme)({
            type: "dark"
        }),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                initialized: initialized,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.Toaster, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 462:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4019);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([valtio__WEBPACK_IMPORTED_MODULE_0__]);
valtio__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/**
 * State
 */ const state = (0,valtio__WEBPACK_IMPORTED_MODULE_0__.proxy)({
    open: false
});
/**
 * Store / Actions
 */ const ModalStore = {
    state,
    open (view, data) {
        state.view = view;
        state.data = data;
        state.open = true;
    },
    close () {
        state.open = false;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4709:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ rejectCosmosRequest),
/* harmony export */   "y": () => (/* binding */ approveCosmosRequest)
/* harmony export */ });
/* harmony import */ var _data_COSMOSData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7523);
/* harmony import */ var _utils_CosmosWalletUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(492);
/* harmony import */ var _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7002);
/* harmony import */ var _json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3562);
/* harmony import */ var _json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5286);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cosmos_wallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1558);
/* harmony import */ var cosmos_wallet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cosmos_wallet__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_2__]);
_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






async function approveCosmosRequest(requestEvent) {
    const { params , id  } = requestEvent;
    const { request  } = params;
    const wallet = _utils_CosmosWalletUtil__WEBPACK_IMPORTED_MODULE_1__/* .cosmosWallets */ .B8[(0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_2__/* .getWalletAddressFromParams */ .Bw)(_utils_CosmosWalletUtil__WEBPACK_IMPORTED_MODULE_1__/* .cosmosAddresses */ .Vh, params)];
    switch(request.method){
        case _data_COSMOSData__WEBPACK_IMPORTED_MODULE_0__/* .COSMOS_SIGNING_METHODS.COSMOS_SIGN_DIRECT */ .O.COSMOS_SIGN_DIRECT:
            const signedDirect = await wallet.signDirect(request.params.signerAddress, (0,cosmos_wallet__WEBPACK_IMPORTED_MODULE_5__.parseSignDocValues)(request.params.signDoc));
            return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcResult)(id, signedDirect.signature);
        case _data_COSMOSData__WEBPACK_IMPORTED_MODULE_0__/* .COSMOS_SIGNING_METHODS.COSMOS_SIGN_AMINO */ .O.COSMOS_SIGN_AMINO:
            const signedAmino = await wallet.signAmino(request.params.signerAddress, request.params.signDoc);
            return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcResult)(id, signedAmino.signature);
        default:
            throw new Error((0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__.getSdkError)("INVALID_METHOD").message);
    }
}
function rejectCosmosRequest(request) {
    const { id  } = request;
    return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcError)(id, (0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__.getSdkError)("USER_REJECTED_METHODS").message);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6033:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ approveEIP155Request),
/* harmony export */   "u": () => (/* binding */ rejectEIP155Request)
/* harmony export */ });
/* harmony import */ var _data_EIP155Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8157);
/* harmony import */ var _utils_EIP155WalletUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6007);
/* harmony import */ var _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7002);
/* harmony import */ var _json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3562);
/* harmony import */ var _json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5286);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_2__]);
_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






async function approveEIP155Request(requestEvent) {
    const { params , id  } = requestEvent;
    const { chainId , request  } = params;
    const wallet = _utils_EIP155WalletUtil__WEBPACK_IMPORTED_MODULE_1__/* .eip155Wallets */ .ag[(0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_2__/* .getWalletAddressFromParams */ .Bw)(_utils_EIP155WalletUtil__WEBPACK_IMPORTED_MODULE_1__/* .eip155Addresses */ .sW, params)];
    switch(request.method){
        case _data_EIP155Data__WEBPACK_IMPORTED_MODULE_0__/* .EIP155_SIGNING_METHODS.PERSONAL_SIGN */ .xy.PERSONAL_SIGN:
        case _data_EIP155Data__WEBPACK_IMPORTED_MODULE_0__/* .EIP155_SIGNING_METHODS.ETH_SIGN */ .xy.ETH_SIGN:
            try {
                const message = (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_2__/* .getSignParamsMessage */ .$m)(request.params);
                const signedMessage = await wallet.signMessage(message);
                return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcResult)(id, signedMessage);
            } catch (error) {
                console.error(error);
                alert(error.message);
                return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcError)(id, error.message);
            }
        case _data_EIP155Data__WEBPACK_IMPORTED_MODULE_0__/* .EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA */ .xy.ETH_SIGN_TYPED_DATA:
        case _data_EIP155Data__WEBPACK_IMPORTED_MODULE_0__/* .EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA_V3 */ .xy.ETH_SIGN_TYPED_DATA_V3:
        case _data_EIP155Data__WEBPACK_IMPORTED_MODULE_0__/* .EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA_V4 */ .xy.ETH_SIGN_TYPED_DATA_V4:
            try {
                const { domain , types , message: data  } = (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_2__/* .getSignTypedDataParamsData */ .dE)(request.params);
                // https://github.com/ethers-io/ethers.js/issues/687#issuecomment-714069471
                delete types.EIP712Domain;
                const signedData = await wallet._signTypedData(domain, types, data);
                return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcResult)(id, signedData);
            } catch (error1) {
                console.error(error1);
                alert(error1.message);
                return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcError)(id, error1.message);
            }
        case _data_EIP155Data__WEBPACK_IMPORTED_MODULE_0__/* .EIP155_SIGNING_METHODS.ETH_SEND_TRANSACTION */ .xy.ETH_SEND_TRANSACTION:
            try {
                const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.providers.JsonRpcProvider(_data_EIP155Data__WEBPACK_IMPORTED_MODULE_0__/* .EIP155_CHAINS */ .Cn[chainId].rpc);
                const sendTransaction = request.params[0];
                if ("gas" in sendTransaction) {
                    sendTransaction["gasLimit"] = sendTransaction["gas"];
                    delete sendTransaction["gas"];
                }
                const connectedWallet = wallet.connect(provider);
                const { hash  } = await connectedWallet.sendTransaction(sendTransaction);
                return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcResult)(id, hash);
            } catch (error2) {
                console.error(error2);
                alert(error2.message);
                return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcError)(id, error2.message);
            }
        case _data_EIP155Data__WEBPACK_IMPORTED_MODULE_0__/* .EIP155_SIGNING_METHODS.ETH_SIGN_TRANSACTION */ .xy.ETH_SIGN_TRANSACTION:
            try {
                const signTransaction = request.params[0];
                const signature = await wallet.signTransaction(signTransaction);
                return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcResult)(id, signature);
            } catch (error3) {
                console.error(error3);
                alert(error3.message);
                return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcError)(id, error3.message);
            }
        default:
            throw new Error((0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__.getSdkError)("INVALID_METHOD").message);
    }
}
function rejectEIP155Request(request) {
    const { id  } = request;
    return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcError)(id, (0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__.getSdkError)("USER_REJECTED").message);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ approveKadenaRequest),
/* harmony export */   "j": () => (/* binding */ rejectKadenaRequest)
/* harmony export */ });
/* harmony import */ var _data_KadenaData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7284);
/* harmony import */ var _json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3562);
/* harmony import */ var _json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5286);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HelperUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7002);
/* harmony import */ var _KadenaWalletUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5705);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HelperUtil__WEBPACK_IMPORTED_MODULE_3__]);
_HelperUtil__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





async function approveKadenaRequest(requestEvent) {
    const { params , id  } = requestEvent;
    const { request  } = params;
    const account = (0,_HelperUtil__WEBPACK_IMPORTED_MODULE_3__/* .getWalletAddressFromParams */ .Bw)(_KadenaWalletUtil__WEBPACK_IMPORTED_MODULE_4__/* .kadenaAddresses */ .WE, params);
    const wallet = _KadenaWalletUtil__WEBPACK_IMPORTED_MODULE_4__/* .kadenaWallets */ .rO[account];
    switch(request.method){
        case _data_KadenaData__WEBPACK_IMPORTED_MODULE_0__/* .KADENA_SIGNING_METHODS.KADENA_GET_ACCOUNTS */ .Rf.KADENA_GET_ACCOUNTS:
            const mockAccount = `k:${account}`;
            return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1__.formatJsonRpcResult)(id, {
                accounts: [
                    {
                        account: mockAccount,
                        publicKey: account,
                        kadenaAccounts: [
                            {
                                name: mockAccount,
                                contract: "coin",
                                chains: [
                                    "2",
                                    "4",
                                    "7",
                                    "18"
                                ]
                            },
                            {
                                name: "w:abcdabcdabcdabcd",
                                contract: "coin",
                                chains: [
                                    "8",
                                    "17"
                                ]
                            }
                        ]
                    }
                ]
            });
        case _data_KadenaData__WEBPACK_IMPORTED_MODULE_0__/* .KADENA_SIGNING_METHODS.KADENA_SIGN */ .Rf.KADENA_SIGN:
            const signedRequest = wallet.signRequest(request.params);
            return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1__.formatJsonRpcResult)(id, signedRequest);
        case _data_KadenaData__WEBPACK_IMPORTED_MODULE_0__/* .KADENA_SIGNING_METHODS.KADENA_QUICKSIGN */ .Rf.KADENA_QUICKSIGN:
            const signedMessage = wallet.quicksignRequest(request.params);
            return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1__.formatJsonRpcResult)(id, signedMessage);
        default:
            throw new Error((0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_2__.getSdkError)("UNSUPPORTED_METHODS").message);
    }
}
function rejectKadenaRequest(request) {
    const { id  } = request;
    return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1__.formatJsonRpcError)(id, (0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_2__.getSdkError)("USER_REJECTED_METHODS").message);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7445:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ rejectMultiversxRequest),
/* harmony export */   "l": () => (/* binding */ approveMultiversxRequest)
/* harmony export */ });
/* harmony import */ var _data_MultiversxData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5366);
/* harmony import */ var _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7002);
/* harmony import */ var _utils_MultiversxWalletUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(444);
/* harmony import */ var _json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3562);
/* harmony import */ var _json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5286);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_1__]);
_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





async function approveMultiversxRequest(requestEvent) {
    const { params , id  } = requestEvent;
    const { request  } = params;
    const account = (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_1__/* .getWalletAddressFromParams */ .Bw)(_utils_MultiversxWalletUtil__WEBPACK_IMPORTED_MODULE_2__/* .multiversxAddresses */ .$k, params);
    const wallet = _utils_MultiversxWalletUtil__WEBPACK_IMPORTED_MODULE_2__/* .multiversxWallets */ .hU[account];
    switch(request.method){
        case _data_MultiversxData__WEBPACK_IMPORTED_MODULE_0__/* .MULTIVERSX_SIGNING_METHODS.MULTIVERSX_SIGN_MESSAGE */ .wq.MULTIVERSX_SIGN_MESSAGE:
            const signedMessage = await wallet.signMessage(request.params.message);
            return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcResult)(id, signedMessage);
        case _data_MultiversxData__WEBPACK_IMPORTED_MODULE_0__/* .MULTIVERSX_SIGNING_METHODS.MULTIVERSX_SIGN_TRANSACTION */ .wq.MULTIVERSX_SIGN_TRANSACTION:
            const signTransaction = request.params.transaction;
            // Transactions must be signed with the Sender's Private Key before submitting them to the MultiversX Network.
            // Signing is performed with the Ed25519 algorithm.
            const signature = await wallet.signTransaction(signTransaction);
            return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcResult)(id, signature);
        case _data_MultiversxData__WEBPACK_IMPORTED_MODULE_0__/* .MULTIVERSX_SIGNING_METHODS.MULTIVERSX_SIGN_TRANSACTIONS */ .wq.MULTIVERSX_SIGN_TRANSACTIONS:
            // MultiversX Allows for a Batch of Transactions to be signed
            const signTransactions = request.params.transactions;
            const signatures = await wallet.signTransactions(signTransactions);
            return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcResult)(id, signatures);
        case _data_MultiversxData__WEBPACK_IMPORTED_MODULE_0__/* .MULTIVERSX_SIGNING_METHODS.MULTIVERSX_SIGN_LOGIN_TOKEN */ .wq.MULTIVERSX_SIGN_LOGIN_TOKEN:
        case _data_MultiversxData__WEBPACK_IMPORTED_MODULE_0__/* .MULTIVERSX_SIGNING_METHODS.MULTIVERSX_SIGN_NATIVE_AUTH_TOKEN */ .wq.MULTIVERSX_SIGN_NATIVE_AUTH_TOKEN:
            // Sometimes a dApp (and its backend) might want to reliably assign an off-chain user identity to a MultiversX address.
            // On this purpose, the signing providers allow a login token to be used within the login flow  - this token is signed using the wallet of the user.
            // Afterwards, a backend application would normally verify the signature of the token
            const message = `${account}${request.params.token}`;
            const { signature: signedLoginToken  } = await wallet.signMessage(message);
            return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcResult)(id, {
                signature: signedLoginToken
            });
        default:
            throw new Error((0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__.getSdkError)("UNSUPPORTED_METHODS").message);
    }
}
function rejectMultiversxRequest(request) {
    const { id  } = request;
    return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcError)(id, (0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__.getSdkError)("USER_REJECTED_METHODS").message);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2751:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ approveNearRequest),
/* harmony export */   "l": () => (/* binding */ rejectNearRequest)
/* harmony export */ });
/* harmony import */ var _data_NEARData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5519);
/* harmony import */ var _json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3562);
/* harmony import */ var _json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5286);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9873);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7606);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _near_wallet_selector_wallet_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5350);
/* harmony import */ var _near_wallet_selector_wallet_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_near_wallet_selector_wallet_utils__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_3__]);
_utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






async function approveNearRequest(requestEvent) {
    const { params , id , topic  } = requestEvent;
    const { chainId , request  } = params;
    switch(request.method){
        case _data_NEARData__WEBPACK_IMPORTED_MODULE_0__/* .NEAR_SIGNING_METHODS.NEAR_SIGN_IN */ .Cu.NEAR_SIGN_IN:
            {
                console.log("approve", {
                    id,
                    params
                });
                if (!chainId) {
                    throw new Error("Invalid chain id");
                }
                const accounts = await _utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_3__/* .nearWallet.signIn */ .Md.signIn({
                    chainId,
                    topic,
                    permission: request.params.permission,
                    accounts: request.params.accounts
                });
                return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1__.formatJsonRpcResult)(id, accounts);
            }
        case _data_NEARData__WEBPACK_IMPORTED_MODULE_0__/* .NEAR_SIGNING_METHODS.NEAR_SIGN_OUT */ .Cu.NEAR_SIGN_OUT:
            {
                console.log("approve", {
                    id,
                    params
                });
                if (!chainId) {
                    throw new Error("Invalid chain id");
                }
                const accounts = await _utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_3__/* .nearWallet.signOut */ .Md.signOut({
                    chainId,
                    topic,
                    accounts: request.params.accounts
                });
                return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1__.formatJsonRpcResult)(id, accounts);
            }
        case _data_NEARData__WEBPACK_IMPORTED_MODULE_0__/* .NEAR_SIGNING_METHODS.NEAR_GET_ACCOUNTS */ .Cu.NEAR_GET_ACCOUNTS:
            {
                console.log("approve", {
                    id,
                    params
                });
                if (!chainId) {
                    throw new Error("Invalid chain id");
                }
                const accounts = await _utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_3__/* .nearWallet.getAccounts */ .Md.getAccounts({
                    topic
                });
                return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1__.formatJsonRpcResult)(id, accounts);
            }
        case _data_NEARData__WEBPACK_IMPORTED_MODULE_0__/* .NEAR_SIGNING_METHODS.NEAR_SIGN_TRANSACTION */ .Cu.NEAR_SIGN_TRANSACTION:
            {
                console.log("approve", {
                    id,
                    params
                });
                if (!chainId) {
                    throw new Error("Invalid chain id");
                }
                const [signedTx] = await _utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_3__/* .nearWallet.signTransactions */ .Md.signTransactions({
                    chainId,
                    topic,
                    transactions: [
                        near_api_js__WEBPACK_IMPORTED_MODULE_4__.transactions.Transaction.decode(Buffer.from(request.params.transaction))
                    ]
                });
                return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1__.formatJsonRpcResult)(id, signedTx.encode());
            }
        case _data_NEARData__WEBPACK_IMPORTED_MODULE_0__/* .NEAR_SIGNING_METHODS.NEAR_SIGN_AND_SEND_TRANSACTION */ .Cu.NEAR_SIGN_AND_SEND_TRANSACTION:
            {
                console.log("approve", {
                    id,
                    params
                });
                if (!chainId) {
                    throw new Error("Invalid chain id");
                }
                const [transaction] = await _utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_3__/* .nearWallet.createTransactions */ .Md.createTransactions({
                    chainId,
                    transactions: [
                        {
                            ...params.request.params.transaction,
                            actions: params.request.params.transaction.actions.map(_near_wallet_selector_wallet_utils__WEBPACK_IMPORTED_MODULE_5__.createAction)
                        }
                    ]
                });
                const result = await _utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_3__/* .nearWallet.signAndSendTransaction */ .Md.signAndSendTransaction({
                    chainId,
                    topic,
                    transaction
                });
                return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1__.formatJsonRpcResult)(id, result);
            }
        case _data_NEARData__WEBPACK_IMPORTED_MODULE_0__/* .NEAR_SIGNING_METHODS.NEAR_SIGN_TRANSACTIONS */ .Cu.NEAR_SIGN_TRANSACTIONS:
            {
                console.log("approve", {
                    id,
                    params
                });
                if (!chainId) {
                    throw new Error("Invalid chain id");
                }
                const signedTxs = await _utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_3__/* .nearWallet.signTransactions */ .Md.signTransactions({
                    chainId,
                    topic,
                    transactions: params.request.params.transactions.map((tx)=>{
                        return near_api_js__WEBPACK_IMPORTED_MODULE_4__.transactions.Transaction.decode(Buffer.from(tx));
                    })
                });
                return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1__.formatJsonRpcResult)(id, signedTxs.map((x)=>x.encode()
                ));
            }
        case _data_NEARData__WEBPACK_IMPORTED_MODULE_0__/* .NEAR_SIGNING_METHODS.NEAR_VERIFY_OWNER */ .Cu.NEAR_VERIFY_OWNER:
            {
                console.log("approve", {
                    id,
                    params
                });
                if (!chainId) {
                    throw new Error("Invalid chain id");
                }
                const accounts = await _utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_3__/* .nearWallet.getAllAccounts */ .Md.getAllAccounts();
                const account = accounts.find((acc)=>acc.accountId === params.request.params.accountId
                );
                if (!account) {
                    throw new Error(`Did not find account with id: ${params.request.params.accountId}`);
                }
                if (!_data_NEARData__WEBPACK_IMPORTED_MODULE_0__/* .NEAR_TEST_CHAINS */ .nG[chainId]) {
                    throw new Error("Invalid chain id");
                }
                const signer = new near_api_js__WEBPACK_IMPORTED_MODULE_4__.InMemorySigner(_utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_3__/* .nearWallet.getKeyStore */ .Md.getKeyStore());
                const networkId = chainId.split(":")[1];
                const connection = near_api_js__WEBPACK_IMPORTED_MODULE_4__.Connection.fromConfig({
                    networkId,
                    provider: {
                        type: "JsonRpcProvider",
                        args: {
                            url: _data_NEARData__WEBPACK_IMPORTED_MODULE_0__/* .NEAR_TEST_CHAINS */ .nG[chainId].rpc
                        }
                    },
                    signer
                });
                const blockInfo = await connection.provider.block({
                    finality: "final"
                });
                const publicKey = near_api_js__WEBPACK_IMPORTED_MODULE_4__.utils.PublicKey.from(account.publicKey);
                const data = {
                    accountId: account.accountId,
                    message: params.request.params.message,
                    blockId: blockInfo.header.hash,
                    publicKey: Buffer.from(publicKey.data).toString("base64"),
                    keyType: publicKey.keyType
                };
                const encoded = new Uint8Array(Buffer.from(JSON.stringify(data)));
                const signed = await signer.signMessage(encoded, account.accountId, networkId);
                return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1__.formatJsonRpcResult)(id, {
                    ...data,
                    signature: Buffer.from(signed.signature).toString("base64"),
                    keyType: signed.publicKey.keyType
                });
            }
        case _data_NEARData__WEBPACK_IMPORTED_MODULE_0__/* .NEAR_SIGNING_METHODS.NEAR_SIGN_MESSAGE */ .Cu.NEAR_SIGN_MESSAGE:
            {
                console.log("approve", {
                    id,
                    params
                });
                if (!chainId) {
                    throw new Error("Invalid chain id");
                }
                const { accountId , publicKey , signature  } = await _utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_3__/* .nearWallet.signMessage */ .Md.signMessage({
                    chainId,
                    messageParams: params.request.params
                });
                return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1__.formatJsonRpcResult)(id, {
                    accountId,
                    publicKey,
                    signature
                });
            }
        case _data_NEARData__WEBPACK_IMPORTED_MODULE_0__/* .NEAR_SIGNING_METHODS.NEAR_SIGN_AND_SEND_TRANSACTIONS */ .Cu.NEAR_SIGN_AND_SEND_TRANSACTIONS:
            {
                console.log("approve", {
                    id,
                    params
                });
                if (!chainId) {
                    throw new Error("Invalid chain id");
                }
                const transactions1 = await _utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_3__/* .nearWallet.createTransactions */ .Md.createTransactions({
                    chainId,
                    transactions: params.request.params.transactions.map((transaction)=>({
                            ...transaction,
                            actions: transaction.actions.map(_near_wallet_selector_wallet_utils__WEBPACK_IMPORTED_MODULE_5__.createAction)
                        })
                    )
                });
                const result = await _utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_3__/* .nearWallet.signAndSendTransactions */ .Md.signAndSendTransactions({
                    chainId,
                    topic,
                    transactions: transactions1
                });
                return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1__.formatJsonRpcResult)(id, result);
            }
        default:
            throw new Error((0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_2__.getSdkError)("INVALID_METHOD").message);
    }
}
function rejectNearRequest(request) {
    const { id  } = request;
    return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_1__.formatJsonRpcError)(id, (0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_2__.getSdkError)("USER_REJECTED_METHODS").message);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4793:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ rejectPolkadotRequest),
/* harmony export */   "e": () => (/* binding */ approvePolkadotRequest)
/* harmony export */ });
/* harmony import */ var _data_PolkadotData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5443);
/* harmony import */ var _utils_PolkadotWalletUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8209);
/* harmony import */ var _json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3562);
/* harmony import */ var _json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5286);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_utils__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_PolkadotWalletUtil__WEBPACK_IMPORTED_MODULE_1__]);
_utils_PolkadotWalletUtil__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




async function approvePolkadotRequest(requestEvent) {
    var ref;
    const { params , id  } = requestEvent;
    const { request  } = params;
    const address = (ref = request.params) === null || ref === void 0 ? void 0 : ref.address;
    const wallet = (0,_utils_PolkadotWalletUtil__WEBPACK_IMPORTED_MODULE_1__/* .getPolkadotWallet */ .nC)(address);
    if (!wallet) {
        throw new Error("Polkadot wallet does not exist");
    }
    switch(request.method){
        case _data_PolkadotData__WEBPACK_IMPORTED_MODULE_0__/* .POLKADOT_SIGNING_METHODS.POLKADOT_SIGN_MESSAGE */ ._7.POLKADOT_SIGN_MESSAGE:
            const signature = await wallet.signMessage(request.params.message);
            return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_2__.formatJsonRpcResult)(id, signature);
        case _data_PolkadotData__WEBPACK_IMPORTED_MODULE_0__/* .POLKADOT_SIGNING_METHODS.POLKADOT_SIGN_TRANSACTION */ ._7.POLKADOT_SIGN_TRANSACTION:
            const signedTx = await (wallet === null || wallet === void 0 ? void 0 : wallet.signTransaction(request.params.transactionPayload));
            return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_2__.formatJsonRpcResult)(id, signedTx);
        default:
            throw new Error((0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_3__.getSdkError)("INVALID_METHOD").message);
    }
}
function rejectPolkadotRequest(request) {
    const { id  } = request;
    return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_2__.formatJsonRpcError)(id, (0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_3__.getSdkError)("USER_REJECTED_METHODS").message);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8209:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Di": () => (/* binding */ polkadotAddresses),
/* harmony export */   "ID": () => (/* binding */ createOrRestorePolkadotWallet),
/* harmony export */   "nC": () => (/* binding */ getPolkadotWallet)
/* harmony export */ });
/* unused harmony exports wallet1, wallet2, polkadotWallets */
/* harmony import */ var _lib_PolkadotLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3855);
/* harmony import */ var _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1763);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_PolkadotLib__WEBPACK_IMPORTED_MODULE_0__, _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_1__]);
([_lib_PolkadotLib__WEBPACK_IMPORTED_MODULE_0__, _polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


let wallet1;
let wallet2;
let polkadotWallets;
let polkadotAddresses;
let address1;
let address2;
/**
 * Utilities
 */ function getPolkadotWallet(address) {
    let wallet = Object.entries(polkadotWallets).find(([walletAddress, _])=>{
        return (0,_polkadot_util_crypto__WEBPACK_IMPORTED_MODULE_1__.addressEq)(address, walletAddress);
    });
    return wallet === null || wallet === void 0 ? void 0 : wallet[1];
}
async function createOrRestorePolkadotWallet() {
    const mnemonic1 = localStorage.getItem("POLKADOT_MNEMONIC_1");
    const mnemonic2 = localStorage.getItem("POLKADOT_MNEMONIC_2");
    if (mnemonic1 && mnemonic2) {
        wallet1 = await _lib_PolkadotLib__WEBPACK_IMPORTED_MODULE_0__/* ["default"].init */ .Z.init({
            mnemonic: mnemonic1
        });
        wallet2 = await _lib_PolkadotLib__WEBPACK_IMPORTED_MODULE_0__/* ["default"].init */ .Z.init({
            mnemonic: mnemonic2
        });
    } else {
        wallet1 = await _lib_PolkadotLib__WEBPACK_IMPORTED_MODULE_0__/* ["default"].init */ .Z.init({});
        wallet2 = await _lib_PolkadotLib__WEBPACK_IMPORTED_MODULE_0__/* ["default"].init */ .Z.init({});
        // Don't store mnemonic in local storage in a production project!
        localStorage.setItem("POLKADOT_MNEMONIC_1", wallet1.getMnemonic());
        localStorage.setItem("POLKADOT_MNEMONIC_2", wallet2.getMnemonic());
    }
    address1 = wallet1.getAddress();
    address2 = wallet2.getAddress();
    polkadotWallets = {
        [address1]: wallet1,
        [address2]: wallet2
    };
    polkadotAddresses = Object.keys(polkadotWallets);
    return {
        polkadotWallets,
        polkadotAddresses
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6876:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ approveSolanaRequest),
/* harmony export */   "p": () => (/* binding */ rejectSolanaRequest)
/* harmony export */ });
/* harmony import */ var _data_SolanaData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2234);
/* harmony import */ var _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7002);
/* harmony import */ var _utils_SolanaWalletUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7369);
/* harmony import */ var _json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3562);
/* harmony import */ var _json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5286);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_1__]);
_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





async function approveSolanaRequest(requestEvent) {
    const { params , id  } = requestEvent;
    const { request  } = params;
    const wallet = _utils_SolanaWalletUtil__WEBPACK_IMPORTED_MODULE_2__/* .solanaWallets */ .b$[(0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_1__/* .getWalletAddressFromParams */ .Bw)(_utils_SolanaWalletUtil__WEBPACK_IMPORTED_MODULE_2__/* .solanaAddresses */ .zS, params)];
    switch(request.method){
        case _data_SolanaData__WEBPACK_IMPORTED_MODULE_0__/* .SOLANA_SIGNING_METHODS.SOLANA_SIGN_MESSAGE */ .RT.SOLANA_SIGN_MESSAGE:
            const signedMessage = await wallet.signMessage(request.params.message);
            return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcResult)(id, signedMessage);
        case _data_SolanaData__WEBPACK_IMPORTED_MODULE_0__/* .SOLANA_SIGNING_METHODS.SOLANA_SIGN_TRANSACTION */ .RT.SOLANA_SIGN_TRANSACTION:
            const signedTransaction = await wallet.signTransaction(request.params.feePayer, request.params.recentBlockhash, request.params.instructions);
            return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcResult)(id, signedTransaction);
        default:
            throw new Error((0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__.getSdkError)("INVALID_METHOD").message);
    }
}
function rejectSolanaRequest(request) {
    const { id  } = request;
    return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcError)(id, (0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__.getSdkError)("USER_REJECTED_METHODS").message);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ approveTezosRequest),
/* harmony export */   "q": () => (/* binding */ rejectTezosRequest)
/* harmony export */ });
/* harmony import */ var _data_TezosData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8734);
/* harmony import */ var _utils_TezosWalletUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5974);
/* harmony import */ var _json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3562);
/* harmony import */ var _json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5286);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_utils__WEBPACK_IMPORTED_MODULE_3__);




async function approveTezosRequest(requestEvent) {
    const { params , id  } = requestEvent;
    const { request  } = params;
    var _account;
    const wallet1 = _utils_TezosWalletUtil__WEBPACK_IMPORTED_MODULE_1__/* .tezosWallets */ .f3[(_account = request.params.account) !== null && _account !== void 0 ? _account : Object.keys(_utils_TezosWalletUtil__WEBPACK_IMPORTED_MODULE_1__/* .tezosWallets */ .f3)[0]];
    const allWallets = Object.keys(_utils_TezosWalletUtil__WEBPACK_IMPORTED_MODULE_1__/* .tezosWallets */ .f3).map((key)=>_utils_TezosWalletUtil__WEBPACK_IMPORTED_MODULE_1__/* .tezosWallets */ .f3[key]
    );
    switch(request.method){
        case _data_TezosData__WEBPACK_IMPORTED_MODULE_0__/* .TEZOS_SIGNING_METHODS.TEZOS_GET_ACCOUNTS */ .PQ.TEZOS_GET_ACCOUNTS:
            return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_2__.formatJsonRpcResult)(id, allWallets.map((wallet)=>({
                    algo: wallet.getCurve(),
                    address: wallet.getAddress(),
                    pubkey: wallet.getPublicKey()
                })
            ));
        case _data_TezosData__WEBPACK_IMPORTED_MODULE_0__/* .TEZOS_SIGNING_METHODS.TEZOS_SEND */ .PQ.TEZOS_SEND:
            const sendResponse = await wallet1.signTransaction(request.params.operations);
            return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_2__.formatJsonRpcResult)(id, {
                hash: sendResponse
            });
        case _data_TezosData__WEBPACK_IMPORTED_MODULE_0__/* .TEZOS_SIGNING_METHODS.TEZOS_SIGN */ .PQ.TEZOS_SIGN:
            const signResponse = await wallet1.signPayload(request.params.payload);
            return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_2__.formatJsonRpcResult)(id, {
                signature: signResponse.prefixSig
            });
        default:
            throw new Error((0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_3__.getSdkError)("INVALID_METHOD").message);
    }
}
function rejectTezosRequest(request) {
    const { id  } = request;
    return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_2__.formatJsonRpcError)(id, (0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_3__.getSdkError)("USER_REJECTED_METHODS").message);
}


/***/ }),

/***/ 2917:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ approveTronRequest),
/* harmony export */   "c": () => (/* binding */ rejectTronRequest)
/* harmony export */ });
/* harmony import */ var _data_TronData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5842);
/* harmony import */ var _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7002);
/* harmony import */ var _utils_TronWalletUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6787);
/* harmony import */ var _json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3562);
/* harmony import */ var _json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5286);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_1__]);
_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





async function approveTronRequest(requestEvent) {
    const { params , id  } = requestEvent;
    const { request  } = params;
    const wallet = _utils_TronWalletUtil__WEBPACK_IMPORTED_MODULE_2__/* .tronWallets */ .uj[(0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_1__/* .getWalletAddressFromParams */ .Bw)(_utils_TronWalletUtil__WEBPACK_IMPORTED_MODULE_2__/* .tronAddresses */ .kf, params)];
    if (_data_TronData__WEBPACK_IMPORTED_MODULE_0__/* .TRON_MAINNET_CHAINS */ .s0[params.chainId]) {
        wallet.setFullNode(_data_TronData__WEBPACK_IMPORTED_MODULE_0__/* .TRON_MAINNET_CHAINS */ .s0[params.chainId].fullNode);
    } else if (_data_TronData__WEBPACK_IMPORTED_MODULE_0__/* .TRON_TEST_CHAINS */ .Yj[params.chainId]) {
        wallet.setFullNode(_data_TronData__WEBPACK_IMPORTED_MODULE_0__/* .TRON_TEST_CHAINS */ .Yj[params.chainId].fullNode);
    } else {
        throw new Error("Invalid chain id");
    }
    switch(request.method){
        case _data_TronData__WEBPACK_IMPORTED_MODULE_0__/* .TRON_SIGNING_METHODS.TRON_SIGN_MESSAGE */ .TT.TRON_SIGN_MESSAGE:
            const signedMessage = await wallet.signMessage(request.params.message);
            const res = {
                signature: signedMessage
            };
            return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcResult)(id, res);
        case _data_TronData__WEBPACK_IMPORTED_MODULE_0__/* .TRON_SIGNING_METHODS.TRON_SIGN_TRANSACTION */ .TT.TRON_SIGN_TRANSACTION:
            const signedTransaction = await wallet.signTransaction(request.params.transaction);
            const resData = {
                result: signedTransaction
            };
            return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcResult)(id, resData);
        default:
            throw new Error((0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__.getSdkError)("INVALID_METHOD").message);
    }
}
function rejectTronRequest(request) {
    const { id  } = request;
    return (0,_json_rpc_tools_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcError)(id, (0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_4__.getSdkError)("USER_REJECTED_METHODS").message);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3912:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AuthRequestModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4019);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5286);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_ModalStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(462);
/* harmony import */ var _store_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6567);
/* harmony import */ var _utils_EIP155WalletUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6007);
/* harmony import */ var _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(132);
/* harmony import */ var _RequestModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([valtio__WEBPACK_IMPORTED_MODULE_1__, _store_ModalStore__WEBPACK_IMPORTED_MODULE_4__, _store_SettingsStore__WEBPACK_IMPORTED_MODULE_5__, _RequestModal__WEBPACK_IMPORTED_MODULE_8__]);
([valtio__WEBPACK_IMPORTED_MODULE_1__, _store_ModalStore__WEBPACK_IMPORTED_MODULE_4__, _store_SettingsStore__WEBPACK_IMPORTED_MODULE_5__, _RequestModal__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function AuthRequestModal() {
    var ref;
    const { account  } = (0,valtio__WEBPACK_IMPORTED_MODULE_1__.useSnapshot)(_store_SettingsStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].state */ .Z.state);
    console.log("modal data", _store_ModalStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"].state.data */ .Z.state.data, account);
    // Get request and wallet data from store
    const request = (ref = _store_ModalStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"].state.data */ .Z.state.data) === null || ref === void 0 ? void 0 : ref.request;
    // Ensure request and wallet are defined
    if (!request) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
            children: "Missing request data"
        });
    }
    const address = _utils_EIP155WalletUtil__WEBPACK_IMPORTED_MODULE_6__/* .eip155Addresses */ .sW[account];
    const iss = `did:pkh:eip155:1:${address}`;
    // Get required request data
    const { params  } = request;
    const message = _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_7__/* .web3wallet.formatMessage */ .zF.formatMessage(params.cacaoPayload, iss);
    // Handle approve action (logic varies based on request method)
    async function onApprove() {
        if (request) {
            const signature = await _utils_EIP155WalletUtil__WEBPACK_IMPORTED_MODULE_6__/* .eip155Wallets */ .ag[address].signMessage(message);
            await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_7__/* .web3wallet.respondAuthRequest */ .zF.respondAuthRequest({
                id: request.id,
                signature: {
                    s: signature,
                    t: "eip191"
                }
            }, iss);
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"].close */ .Z.close();
        }
    }
    // Handle reject action
    async function onReject() {
        if (request) {
            await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_7__/* .web3wallet.respondAuthRequest */ .zF.respondAuthRequest({
                id: request.id,
                error: (0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_3__.getSdkError)("USER_REJECTED")
            }, iss);
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"].close */ .Z.close();
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RequestModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        intention: "request a signature",
        metadata: request.params.requester.metadata,
        onApprove: onApprove,
        onReject: onReject,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Row, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Col, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        h5: true,
                        children: "Message"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Code, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            color: "$gray400",
                            children: message
                        })
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RequestModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ModalFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6926);
/* harmony import */ var _components_ProjectInfoCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3224);
/* harmony import */ var _components_RequestModalContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6867);
/* harmony import */ var _components_VerifyInfobox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7978);
/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4019);
/* harmony import */ var _store_SettingsStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6567);
/* harmony import */ var _TheatPrompt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8424);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ModalFooter__WEBPACK_IMPORTED_MODULE_3__, _components_ProjectInfoCard__WEBPACK_IMPORTED_MODULE_4__, _components_VerifyInfobox__WEBPACK_IMPORTED_MODULE_6__, valtio__WEBPACK_IMPORTED_MODULE_7__, _store_SettingsStore__WEBPACK_IMPORTED_MODULE_8__]);
([_components_ModalFooter__WEBPACK_IMPORTED_MODULE_3__, _components_ProjectInfoCard__WEBPACK_IMPORTED_MODULE_4__, _components_VerifyInfobox__WEBPACK_IMPORTED_MODULE_6__, valtio__WEBPACK_IMPORTED_MODULE_7__, _store_SettingsStore__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function RequestModal({ children , metadata , onApprove , onReject , intention , infoBoxCondition , infoBoxText , disabledApprove  }) {
    const { currentRequestVerifyContext  } = (0,valtio__WEBPACK_IMPORTED_MODULE_7__.useSnapshot)(_store_SettingsStore__WEBPACK_IMPORTED_MODULE_8__/* ["default"].state */ .Z.state);
    const isScam = currentRequestVerifyContext === null || currentRequestVerifyContext === void 0 ? void 0 : currentRequestVerifyContext.verified.isScam;
    const { 0: threatAcknowledged , 1: setThreatAcknowledged  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const threatPromptContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TheatPrompt__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            metadata: metadata,
            onApprove: ()=>setThreatAcknowledged(true)
            ,
            onReject: onReject
        });
    }, [
        metadata,
        onReject
    ]);
    const modalContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_RequestModalContainer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    title: "",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProjectInfoCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            metadata: metadata,
                            intention: intention
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                            y: 1
                        }),
                        children,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                            y: 1
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VerifyInfobox__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            metadata: metadata
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ModalFooter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    onApprove: onApprove,
                    onReject: onReject,
                    infoBoxCondition: infoBoxCondition,
                    infoBoxText: infoBoxText,
                    disabledApprove: disabledApprove
                })
            ]
        });
    }, [
        children,
        disabledApprove,
        infoBoxCondition,
        infoBoxText,
        intention,
        metadata,
        onApprove,
        onReject
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: isScam && !threatAcknowledged ? threatPromptContent : modalContent
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5670:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SessionProposalModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5286);
/* harmony import */ var _walletconnect_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2494);
/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(462);
/* harmony import */ var _utils_CosmosWalletUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(492);
/* harmony import */ var _utils_EIP155WalletUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6007);
/* harmony import */ var _utils_PolkadotWalletUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8209);
/* harmony import */ var _utils_MultiversxWalletUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(444);
/* harmony import */ var _utils_TronWalletUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6787);
/* harmony import */ var _utils_TezosWalletUtil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5974);
/* harmony import */ var _utils_SolanaWalletUtil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7369);
/* harmony import */ var _utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9873);
/* harmony import */ var _utils_KadenaWalletUtil__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5705);
/* harmony import */ var _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7002);
/* harmony import */ var _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(132);
/* harmony import */ var _data_EIP155Data__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8157);
/* harmony import */ var _data_COSMOSData__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7523);
/* harmony import */ var _data_KadenaData__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7284);
/* harmony import */ var _data_MultiversxData__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5366);
/* harmony import */ var _data_NEARData__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(5519);
/* harmony import */ var _data_PolkadotData__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(5443);
/* harmony import */ var _data_SolanaData__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2234);
/* harmony import */ var _data_TezosData__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(8734);
/* harmony import */ var _data_TronData__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(5842);
/* harmony import */ var _components_ChainDataMini__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(6129);
/* harmony import */ var _components_ChainAddressMini__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(1299);
/* harmony import */ var _data_chainsUtil__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(7688);
/* harmony import */ var _RequestModal__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(2149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_ModalStore__WEBPACK_IMPORTED_MODULE_6__, _utils_PolkadotWalletUtil__WEBPACK_IMPORTED_MODULE_9__, _utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_14__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_16__, _RequestModal__WEBPACK_IMPORTED_MODULE_30__]);
([_store_ModalStore__WEBPACK_IMPORTED_MODULE_6__, _utils_PolkadotWalletUtil__WEBPACK_IMPORTED_MODULE_9__, _utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_14__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_16__, _RequestModal__WEBPACK_IMPORTED_MODULE_30__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);































const StyledText = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.styled)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
    fontWeight: 400
});
const StyledSpan = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.styled)("span", {
    fontWeight: 400
});
function SessionProposalModal() {
    var ref;
    // Get proposal data and wallet address from store
    const proposal = (ref = _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].state.data */ .Z.state.data) === null || ref === void 0 ? void 0 : ref.proposal;
    console.log("proposal", proposal);
    const supportedNamespaces = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        // eip155
        const eip155Chains = Object.keys(_data_EIP155Data__WEBPACK_IMPORTED_MODULE_18__/* .EIP155_CHAINS */ .Cn);
        const eip155Methods = Object.values(_data_EIP155Data__WEBPACK_IMPORTED_MODULE_18__/* .EIP155_SIGNING_METHODS */ .xy);
        // cosmos
        const cosmosChains = Object.keys(_data_COSMOSData__WEBPACK_IMPORTED_MODULE_19__/* .COSMOS_MAINNET_CHAINS */ .G);
        const cosmosMethods = Object.values(_data_COSMOSData__WEBPACK_IMPORTED_MODULE_19__/* .COSMOS_SIGNING_METHODS */ .O);
        // Kadena
        const kadenaChains = Object.keys(_data_KadenaData__WEBPACK_IMPORTED_MODULE_20__/* .KADENA_CHAINS */ .ph);
        const kadenaMethods = Object.values(_data_KadenaData__WEBPACK_IMPORTED_MODULE_20__/* .KADENA_SIGNING_METHODS */ .Rf);
        // multiversx
        const multiversxChains = Object.keys(_data_MultiversxData__WEBPACK_IMPORTED_MODULE_21__/* .MULTIVERSX_CHAINS */ .Jk);
        const multiversxMethods = Object.values(_data_MultiversxData__WEBPACK_IMPORTED_MODULE_21__/* .MULTIVERSX_SIGNING_METHODS */ .wq);
        // near
        const nearChains = Object.keys(_data_NEARData__WEBPACK_IMPORTED_MODULE_22__/* .NEAR_CHAINS */ .EE);
        const nearMethods = Object.values(_data_NEARData__WEBPACK_IMPORTED_MODULE_22__/* .NEAR_SIGNING_METHODS */ .Cu);
        // polkadot
        const polkadotChains = Object.keys(_data_PolkadotData__WEBPACK_IMPORTED_MODULE_23__/* .POLKADOT_CHAINS */ .H7);
        const polkadotMethods = Object.values(_data_PolkadotData__WEBPACK_IMPORTED_MODULE_23__/* .POLKADOT_SIGNING_METHODS */ ._7);
        // solana
        const solanaChains = Object.keys(_data_SolanaData__WEBPACK_IMPORTED_MODULE_24__/* .SOLANA_CHAINS */ .$);
        const solanaMethods = Object.values(_data_SolanaData__WEBPACK_IMPORTED_MODULE_24__/* .SOLANA_SIGNING_METHODS */ .RT);
        // tezos
        const tezosChains = Object.keys(_data_TezosData__WEBPACK_IMPORTED_MODULE_25__/* .TEZOS_CHAINS */ .B$);
        const tezosMethods = Object.values(_data_TezosData__WEBPACK_IMPORTED_MODULE_25__/* .TEZOS_SIGNING_METHODS */ .PQ);
        // tron
        const tronChains = Object.keys(_data_TronData__WEBPACK_IMPORTED_MODULE_26__/* .TRON_CHAINS */ .qU);
        const tronMethods = Object.values(_data_TronData__WEBPACK_IMPORTED_MODULE_26__/* .TRON_SIGNING_METHODS */ .TT);
        return {
            eip155: {
                chains: eip155Chains,
                methods: eip155Methods,
                events: [
                    "accountsChanged",
                    "chainChanged"
                ],
                accounts: eip155Chains.map((chain)=>`${chain}:${_utils_EIP155WalletUtil__WEBPACK_IMPORTED_MODULE_8__/* .eip155Addresses[0] */ .sW[0]}`
                ).flat()
            },
            cosmos: {
                chains: cosmosChains,
                methods: cosmosMethods,
                events: [],
                accounts: cosmosChains.map((chain)=>`${chain}:${_utils_CosmosWalletUtil__WEBPACK_IMPORTED_MODULE_7__/* .cosmosAddresses[0] */ .Vh[0]}`
                ).flat()
            },
            kadena: {
                chains: kadenaChains,
                methods: kadenaMethods,
                events: [],
                accounts: kadenaChains.map((chain)=>`${chain}:${_utils_KadenaWalletUtil__WEBPACK_IMPORTED_MODULE_15__/* .kadenaAddresses[0] */ .WE[0]}`
                ).flat()
            },
            mvx: {
                chains: multiversxChains,
                methods: multiversxMethods,
                events: [],
                accounts: multiversxChains.map((chain)=>`${chain}:${_utils_MultiversxWalletUtil__WEBPACK_IMPORTED_MODULE_10__/* .multiversxAddresses[0] */ .$k[0]}`
                ).flat()
            },
            near: {
                chains: nearChains,
                methods: nearMethods,
                events: [
                    "accountsChanged",
                    "chainChanged"
                ],
                accounts: nearChains.map((chain)=>`${chain}:${_utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_14__/* .nearAddresses[0] */ .v3[0]}`
                ).flat()
            },
            polkadot: {
                chains: polkadotChains,
                methods: polkadotMethods,
                events: [],
                accounts: polkadotChains.map((chain)=>_utils_PolkadotWalletUtil__WEBPACK_IMPORTED_MODULE_9__/* .polkadotAddresses.map */ .Di.map((address)=>`${chain}:${address}`
                    )
                ).flat()
            },
            solana: {
                chains: solanaChains,
                methods: solanaMethods,
                events: [],
                accounts: solanaChains.map((chain)=>_utils_SolanaWalletUtil__WEBPACK_IMPORTED_MODULE_13__/* .solanaAddresses.map */ .zS.map((address)=>`${chain}:${address}`
                    )
                ).flat()
            },
            tezos: {
                chains: tezosChains,
                methods: tezosMethods,
                events: [],
                accounts: tezosChains.map((chain)=>_utils_TezosWalletUtil__WEBPACK_IMPORTED_MODULE_12__/* .tezosAddresses.map */ .eA.map((address)=>`${chain}:${address}`
                    )
                ).flat()
            },
            tron: {
                chains: tronChains,
                methods: tronMethods,
                events: [],
                accounts: tronChains.map((chain)=>`${chain}:${_utils_TronWalletUtil__WEBPACK_IMPORTED_MODULE_11__/* .tronAddresses[0] */ .kf[0]}`
                )
            }
        };
    }, []);
    console.log("supportedNamespaces", supportedNamespaces, _utils_EIP155WalletUtil__WEBPACK_IMPORTED_MODULE_8__/* .eip155Addresses */ .sW);
    const requestedChains = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (!proposal) return [];
        const required = [];
        for (const [key, values] of Object.entries(proposal.params.requiredNamespaces)){
            const chains = key.includes(":") ? key : values.chains;
            required.push(chains);
        }
        const optional = [];
        for (const [key1, values1] of Object.entries(proposal.params.optionalNamespaces)){
            const chains = key1.includes(":") ? key1 : values1.chains;
            optional.push(chains);
        }
        console.log("requestedChains", [
            ...new Set([
                ...required.flat(),
                ...optional.flat()
            ])
        ]);
        return [
            ...new Set([
                ...required.flat(),
                ...optional.flat()
            ])
        ];
    }, [
        proposal
    ]);
    // the chains that are supported by the wallet from the proposal
    const supportedChains = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>requestedChains.map((chain)=>(0,_data_chainsUtil__WEBPACK_IMPORTED_MODULE_29__/* .getChainData */ .f)(chain)
        )
    , [
        requestedChains
    ]);
    // get required chains that are not supported by the wallet
    const notSupportedChains = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (!proposal) return [];
        const required = [];
        for (const [key, values] of Object.entries(proposal.params.requiredNamespaces)){
            const chains = key.includes(":") ? key : values.chains;
            required.push(chains);
        }
        return required.flat().filter((chain)=>{
            return !supportedChains.map((supportedChain)=>{
                return `${supportedChain === null || supportedChain === void 0 ? void 0 : supportedChain.namespace}:${supportedChain === null || supportedChain === void 0 ? void 0 : supportedChain.chainId}`;
            }).includes(chain);
        });
    }, [
        proposal,
        supportedChains
    ]);
    console.log("notSupportedChains", notSupportedChains);
    const getAddress = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((namespace)=>{
        if (!namespace) return "N/A";
        switch(namespace){
            case "eip155":
                return _utils_EIP155WalletUtil__WEBPACK_IMPORTED_MODULE_8__/* .eip155Addresses[0] */ .sW[0];
            case "cosmos":
                return _utils_CosmosWalletUtil__WEBPACK_IMPORTED_MODULE_7__/* .cosmosAddresses[0] */ .Vh[0];
            case "kadena":
                return _utils_KadenaWalletUtil__WEBPACK_IMPORTED_MODULE_15__/* .kadenaAddresses[0] */ .WE[0];
            case "mvx":
                return _utils_MultiversxWalletUtil__WEBPACK_IMPORTED_MODULE_10__/* .multiversxAddresses[0] */ .$k[0];
            case "near":
                return _utils_NearWalletUtil__WEBPACK_IMPORTED_MODULE_14__/* .nearAddresses[0] */ .v3[0];
            case "polkadot":
                return _utils_PolkadotWalletUtil__WEBPACK_IMPORTED_MODULE_9__/* .polkadotAddresses[0] */ .Di[0];
            case "solana":
                return _utils_SolanaWalletUtil__WEBPACK_IMPORTED_MODULE_13__/* .solanaAddresses[0] */ .zS[0];
            case "tezos":
                return _utils_TezosWalletUtil__WEBPACK_IMPORTED_MODULE_12__/* .tezosAddresses[0] */ .eA[0];
            case "tron":
                return _utils_TronWalletUtil__WEBPACK_IMPORTED_MODULE_11__/* .tronAddresses[0] */ .kf[0];
        }
    }, []);
    const approveButtonColor = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        switch(proposal === null || proposal === void 0 ? void 0 : proposal.verifyContext.verified.validation){
            case "INVALID":
                return "error";
            case "UNKNOWN":
                return "warning";
            default:
                return "success";
        }
    }, [
        proposal
    ]);
    // Ensure proposal is defined
    if (!proposal) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: "Missing proposal data"
        });
    }
    // Get required proposal data
    const { id , params  } = proposal;
    const { proposer , relays  } = params;
    // Hanlde approve action, construct session namespace
    async function onApprove() {
        if (proposal) {
            const namespaces = (0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_3__.buildApprovedNamespaces)({
                proposal: proposal.params,
                supportedNamespaces
            });
            console.log("approving namespaces:", namespaces);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_17__/* .web3wallet.approveSession */ .zF.approveSession({
                    id,
                    relayProtocol: relays[0].protocol,
                    namespaces
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_16__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
        }
        _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].close */ .Z.close();
    }
    // Hanlde reject action
    async function onReject() {
        if (proposal) {
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_17__/* .web3wallet.rejectSession */ .zF.rejectSession({
                    id,
                    reason: (0,_walletconnect_utils__WEBPACK_IMPORTED_MODULE_3__.getSdkError)("USER_REJECTED_METHODS")
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_16__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
        }
        _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].close */ .Z.close();
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_RequestModal__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
        metadata: proposal.params.proposer.metadata,
        onApprove: onApprove,
        onReject: onReject,
        infoBoxCondition: notSupportedChains.length > 0,
        infoBoxText: `The following required chains are not supported by your wallet - ${notSupportedChains.toString()}`,
        disabledApprove: notSupportedChains.length > 0,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledText, {
                        h4: true,
                        children: "Requested permissions"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_4___default()), {
                            style: {
                                verticalAlign: "bottom"
                            }
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledSpan, {
                            children: "View your balance and activity"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_4___default()), {
                            style: {
                                verticalAlign: "bottom"
                            }
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledSpan, {
                            children: "Send approval requests"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    style: {
                        color: "gray"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5___default()), {
                            style: {
                                verticalAlign: "bottom"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledSpan, {
                            children: "Move funds without permission"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Container, {
                style: {
                    marginBottom: "10px",
                    marginTop: "10px"
                },
                justify: "space-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                style: {
                                    color: "GrayText"
                                },
                                children: "Accounts"
                            }),
                            supportedChains.length && supportedChains.map((chain, i)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ChainAddressMini__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                        address: getAddress(chain === null || chain === void 0 ? void 0 : chain.namespace)
                                    }, i)
                                }, i);
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                style: {
                                    color: "GrayText"
                                },
                                justify: "flex-end",
                                children: "Chains"
                            }),
                            supportedChains.length && supportedChains.map((chain, i)=>{
                                if (!chain) {
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
                                }
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ChainDataMini__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                                        chainId: `${chain === null || chain === void 0 ? void 0 : chain.namespace}:${chain === null || chain === void 0 ? void 0 : chain.chainId}`
                                    }, i)
                                }, i);
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 532:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SessionSendTransactionModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_RequestDataCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9344);
/* harmony import */ var _components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3602);
/* harmony import */ var _components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(218);
/* harmony import */ var _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(462);
/* harmony import */ var _utils_EIP155RequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6033);
/* harmony import */ var _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7002);
/* harmony import */ var _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(132);
/* harmony import */ var _RequestModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_ModalStore__WEBPACK_IMPORTED_MODULE_6__, _utils_EIP155RequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_8__, _RequestModal__WEBPACK_IMPORTED_MODULE_10__]);
([_store_ModalStore__WEBPACK_IMPORTED_MODULE_6__, _utils_EIP155RequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_8__, _RequestModal__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function SessionSendTransactionModal() {
    var ref, ref1;
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Get request and wallet data from store
    const requestEvent = (ref = _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].state.data */ .Z.state.data) === null || ref === void 0 ? void 0 : ref.requestEvent;
    const requestSession = (ref1 = _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].state.data */ .Z.state.data) === null || ref1 === void 0 ? void 0 : ref1.requestSession;
    // Ensure request and wallet are defined
    if (!requestEvent || !requestSession) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
            children: "Missing request data"
        });
    }
    // Get required proposal data
    const { topic , params  } = requestEvent;
    const { request , chainId  } = params;
    const transaction = request.params[0];
    // Handle approve action
    async function onApprove() {
        if (requestEvent) {
            setLoading(true);
            try {
                const response = await (0,_utils_EIP155RequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__/* .approveEIP155Request */ .S)(requestEvent);
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_9__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_8__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].close */ .Z.close();
        }
    }
    // Handle reject action
    async function onReject() {
        if (requestEvent) {
            const response = (0,_utils_EIP155RequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__/* .rejectEIP155Request */ .u)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_9__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_8__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].close */ .Z.close();
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_RequestModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        intention: "sign a transaction",
        metadata: requestSession.peer.metadata,
        onApprove: onApprove,
        onReject: onReject,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDataCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                data: transaction
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                y: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                chains: [
                    chainId !== null && chainId !== void 0 ? chainId : ""
                ],
                protocol: requestSession.relay.protocol
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                y: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                methods: [
                    request.method
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6988:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SessionSignCosmosModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RequestDataCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var _components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3602);
/* harmony import */ var _components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(218);
/* harmony import */ var _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(462);
/* harmony import */ var _utils_CosmosRequestHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4709);
/* harmony import */ var _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7002);
/* harmony import */ var _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(132);
/* harmony import */ var _RequestModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_ModalStore__WEBPACK_IMPORTED_MODULE_5__, _utils_CosmosRequestHandler__WEBPACK_IMPORTED_MODULE_6__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_7__, _RequestModal__WEBPACK_IMPORTED_MODULE_9__]);
([_store_ModalStore__WEBPACK_IMPORTED_MODULE_5__, _utils_CosmosRequestHandler__WEBPACK_IMPORTED_MODULE_6__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_7__, _RequestModal__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function SessionSignCosmosModal() {
    var ref, ref1;
    // Get request and wallet data from store
    const requestEvent = (ref = _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].state.data */ .Z.state.data) === null || ref === void 0 ? void 0 : ref.requestEvent;
    const requestSession = (ref1 = _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].state.data */ .Z.state.data) === null || ref1 === void 0 ? void 0 : ref1.requestSession;
    // Ensure request and wallet are defined
    if (!requestEvent || !requestSession) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: "Missing request data"
        });
    }
    // Get required request data
    const { topic , params  } = requestEvent;
    const { chainId , request  } = params;
    // Handle approve action (logic varies based on request method)
    async function onApprove() {
        if (requestEvent) {
            const response = await (0,_utils_CosmosRequestHandler__WEBPACK_IMPORTED_MODULE_6__/* .approveCosmosRequest */ .y)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_7__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].close */ .Z.close();
        }
    }
    // Handle reject action
    async function onReject() {
        if (requestEvent) {
            const response = (0,_utils_CosmosRequestHandler__WEBPACK_IMPORTED_MODULE_6__/* .rejectCosmosRequest */ .L)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_7__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].close */ .Z.close();
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_RequestModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        intention: "sign Cosmos transaction",
        metadata: requestSession.peer.metadata,
        onApprove: onApprove,
        onReject: onReject,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                chains: [
                    chainId !== null && chainId !== void 0 ? chainId : ""
                ],
                protocol: requestSession.relay.protocol
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                y: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDataCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                data: params
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                y: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                methods: [
                    request.method
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1051:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SessionSignKadenaModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RequestDataCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var _components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3602);
/* harmony import */ var _store_ModalStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(462);
/* harmony import */ var _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7002);
/* harmony import */ var _utils_KadenaRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49);
/* harmony import */ var _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(132);
/* harmony import */ var _RequestModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_ModalStore__WEBPACK_IMPORTED_MODULE_4__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_5__, _utils_KadenaRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_6__, _RequestModal__WEBPACK_IMPORTED_MODULE_8__]);
([_store_ModalStore__WEBPACK_IMPORTED_MODULE_4__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_5__, _utils_KadenaRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_6__, _RequestModal__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function SessionSignKadenaModal() {
    var ref, ref1;
    // Get request and wallet data from store
    const requestEvent = (ref = _store_ModalStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"].state.data */ .Z.state.data) === null || ref === void 0 ? void 0 : ref.requestEvent;
    const requestSession = (ref1 = _store_ModalStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"].state.data */ .Z.state.data) === null || ref1 === void 0 ? void 0 : ref1.requestSession;
    // Ensure request and wallet are defined
    if (!requestEvent || !requestSession) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: "Missing request data"
        });
    }
    // Get required request data
    const { topic , params  } = requestEvent;
    const { request , chainId  } = params;
    // Get message, convert it to UTF8 string if it is valid hex
    const message = (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_5__/* .convertHexToUtf8 */ .wE)(request.params.message);
    // Handle approve action (logic varies based on request method)
    async function onApprove() {
        if (requestEvent) {
            const response = await (0,_utils_KadenaRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_6__/* .approveKadenaRequest */ .O)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_7__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_5__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"].close */ .Z.close();
        }
    }
    // Handle reject action
    async function onReject() {
        if (requestEvent) {
            const response = (0,_utils_KadenaRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_6__/* .rejectKadenaRequest */ .j)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_7__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_5__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"].close */ .Z.close();
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_RequestModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        intention: "sign a Kadena message",
        metadata: requestSession.peer.metadata,
        onApprove: onApprove,
        onReject: onReject,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                chains: [
                    chainId !== null && chainId !== void 0 ? chainId : ""
                ],
                protocol: requestSession.relay.protocol
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                y: 1
            }),
            message && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Col, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    h5: true,
                                    children: "Message"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    color: "$gray400",
                                    children: message
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                        y: 1
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDataCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                data: params
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6793:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SessionSignModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3602);
/* harmony import */ var _store_ModalStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(462);
/* harmony import */ var _utils_EIP155RequestHandlerUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6033);
/* harmony import */ var _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7002);
/* harmony import */ var _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(132);
/* harmony import */ var _RequestModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_ModalStore__WEBPACK_IMPORTED_MODULE_3__, _utils_EIP155RequestHandlerUtil__WEBPACK_IMPORTED_MODULE_4__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_5__, _RequestModal__WEBPACK_IMPORTED_MODULE_7__]);
([_store_ModalStore__WEBPACK_IMPORTED_MODULE_3__, _utils_EIP155RequestHandlerUtil__WEBPACK_IMPORTED_MODULE_4__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_5__, _RequestModal__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function SessionSignModal() {
    var ref, ref1;
    // Get request and wallet data from store
    const requestEvent = (ref = _store_ModalStore__WEBPACK_IMPORTED_MODULE_3__/* ["default"].state.data */ .Z.state.data) === null || ref === void 0 ? void 0 : ref.requestEvent;
    const requestSession = (ref1 = _store_ModalStore__WEBPACK_IMPORTED_MODULE_3__/* ["default"].state.data */ .Z.state.data) === null || ref1 === void 0 ? void 0 : ref1.requestSession;
    // Ensure request and wallet are defined
    if (!requestEvent || !requestSession) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: "Missing request data"
        });
    }
    // Get required request data
    const { topic , params  } = requestEvent;
    const { request , chainId  } = params;
    // Get message, convert it to UTF8 string if it is valid hex
    const message = (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_5__/* .getSignParamsMessage */ .$m)(request.params);
    // Handle approve action (logic varies based on request method)
    async function onApprove() {
        if (requestEvent) {
            const response = await (0,_utils_EIP155RequestHandlerUtil__WEBPACK_IMPORTED_MODULE_4__/* .approveEIP155Request */ .S)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_6__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_5__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_3__/* ["default"].close */ .Z.close();
        }
    }
    // Handle reject action
    async function onReject() {
        if (requestEvent) {
            const response = (0,_utils_EIP155RequestHandlerUtil__WEBPACK_IMPORTED_MODULE_4__/* .rejectEIP155Request */ .u)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_6__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_5__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_3__/* ["default"].close */ .Z.close();
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_RequestModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        intention: "request a signature",
        metadata: requestSession.peer.metadata,
        onApprove: onApprove,
        onReject: onReject,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                chains: [
                    chainId !== null && chainId !== void 0 ? chainId : ""
                ],
                protocol: requestSession.relay.protocol
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                y: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            h5: true,
                            children: "Message"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            color: "$gray400",
                            "data-testid": "request-message-text",
                            children: message
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8455:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SessionSignMultiversxModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RequestDataCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var _components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3602);
/* harmony import */ var _components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(218);
/* harmony import */ var _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(462);
/* harmony import */ var _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7002);
/* harmony import */ var _utils_MultiversxRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7445);
/* harmony import */ var _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(132);
/* harmony import */ var _RequestModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_ModalStore__WEBPACK_IMPORTED_MODULE_5__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__, _utils_MultiversxRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__, _RequestModal__WEBPACK_IMPORTED_MODULE_9__]);
([_store_ModalStore__WEBPACK_IMPORTED_MODULE_5__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__, _utils_MultiversxRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__, _RequestModal__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function SessionSignMultiversxModal() {
    var ref, ref1;
    // Get request and wallet data from store
    const requestEvent = (ref = _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].state.data */ .Z.state.data) === null || ref === void 0 ? void 0 : ref.requestEvent;
    const requestSession = (ref1 = _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].state.data */ .Z.state.data) === null || ref1 === void 0 ? void 0 : ref1.requestSession;
    // Ensure request and wallet are defined
    if (!requestEvent || !requestSession) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: "Missing request data"
        });
    }
    // Get required request data
    const { topic , params  } = requestEvent;
    const { request , chainId  } = params;
    // Handle approve action (logic varies based on request method)
    async function onApprove() {
        if (requestEvent) {
            const response = await (0,_utils_MultiversxRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__/* .approveMultiversxRequest */ .l)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].close */ .Z.close();
        }
    }
    // Handle reject action
    async function onReject() {
        if (requestEvent) {
            const response = (0,_utils_MultiversxRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__/* .rejectMultiversxRequest */ .g)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].close */ .Z.close();
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_RequestModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        intention: "sign a MultiversX message",
        metadata: requestSession.peer.metadata,
        onApprove: onApprove,
        onReject: onReject,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                chains: [
                    chainId !== null && chainId !== void 0 ? chainId : ""
                ],
                protocol: requestSession.relay.protocol
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                y: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDataCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                data: params
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                y: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                methods: [
                    request.method
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4642:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SessionSignNearModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7606);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_RequestDataCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9344);
/* harmony import */ var _components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3602);
/* harmony import */ var _components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(218);
/* harmony import */ var _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(462);
/* harmony import */ var _utils_NearRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2751);
/* harmony import */ var _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(132);
/* harmony import */ var _data_NEARData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5519);
/* harmony import */ var _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7002);
/* harmony import */ var _RequestModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_ModalStore__WEBPACK_IMPORTED_MODULE_6__, _utils_NearRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_10__, _RequestModal__WEBPACK_IMPORTED_MODULE_11__]);
([_store_ModalStore__WEBPACK_IMPORTED_MODULE_6__, _utils_NearRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_10__, _RequestModal__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function SessionSignNearModal() {
    var ref, ref1;
    // Get request and wallet data from store
    const requestEvent = (ref = _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].state.data */ .Z.state.data) === null || ref === void 0 ? void 0 : ref.requestEvent;
    const requestSession = (ref1 = _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].state.data */ .Z.state.data) === null || ref1 === void 0 ? void 0 : ref1.requestSession;
    // Ensure request and wallet are defined
    if (!requestEvent || !requestSession) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
            children: "Missing request data"
        });
    }
    // Get required request data
    const { topic , params  } = requestEvent;
    const { request , chainId  } = params;
    const formatTransaction = (transaction)=>{
        const tx = near_api_js__WEBPACK_IMPORTED_MODULE_1__.transactions.Transaction.decode(Buffer.from(transaction));
        return {
            signerId: tx.signerId,
            receiverId: tx.receiverId,
            publicKey: tx.publicKey.toString(),
            actions: tx.actions.map((action)=>{
                switch(action.enum){
                    case "createAccount":
                        {
                            return {
                                type: "CreateAccount",
                                params: action.createAccount
                            };
                        }
                    case "deployContract":
                        {
                            return {
                                type: "DeployContract",
                                params: {
                                    ...action.deployContract,
                                    args: Buffer.from(action.deployContract.code).toString()
                                }
                            };
                        }
                    case "functionCall":
                        {
                            return {
                                type: "FunctionCall",
                                params: {
                                    ...action.functionCall,
                                    args: JSON.parse(Buffer.from(action.functionCall.args).toString())
                                }
                            };
                        }
                    case "transfer":
                        {
                            return {
                                type: "Transfer",
                                params: action.transfer
                            };
                        }
                    case "stake":
                        {
                            return {
                                type: "Stake",
                                params: {
                                    ...action.stake,
                                    publicKey: action.stake.publicKey.toString()
                                }
                            };
                        }
                    case "addKey":
                        {
                            return {
                                type: "AddKey",
                                params: {
                                    ...action.addKey,
                                    publicKey: action.addKey.publicKey.toString()
                                }
                            };
                        }
                    case "deleteKey":
                        {
                            return {
                                type: "DeleteKey",
                                params: {
                                    ...action.deleteKey,
                                    publicKey: action.deleteKey.publicKey.toString()
                                }
                            };
                        }
                    case "deleteAccount":
                        {
                            return {
                                type: "DeleteAccount",
                                params: action.deleteAccount
                            };
                        }
                    default:
                        return {
                            type: action.enum,
                            params: {}
                        };
                }
            })
        };
    };
    const formatParams = ()=>{
        switch(params.request.method){
            case _data_NEARData__WEBPACK_IMPORTED_MODULE_9__/* .NEAR_SIGNING_METHODS.NEAR_SIGN_TRANSACTION */ .Cu.NEAR_SIGN_TRANSACTION:
                return {
                    ...params,
                    request: {
                        ...params.request,
                        params: {
                            ...params.request.params,
                            transaction: formatTransaction(params.request.params.transaction)
                        }
                    }
                };
            case _data_NEARData__WEBPACK_IMPORTED_MODULE_9__/* .NEAR_SIGNING_METHODS.NEAR_SIGN_TRANSACTIONS */ .Cu.NEAR_SIGN_TRANSACTIONS:
                return {
                    ...params,
                    request: {
                        ...params.request,
                        params: {
                            ...params.request.params,
                            transactions: params.request.params.transactions.map(formatTransaction)
                        }
                    }
                };
            default:
                return params;
        }
    };
    // Handle approve action (logic varies based on request method)
    async function onApprove() {
        if (requestEvent) {
            const response = await (0,_utils_NearRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__/* .approveNearRequest */ .I)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_10__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].close */ .Z.close();
        }
    }
    // Handle reject action
    async function onReject() {
        if (requestEvent) {
            const response = (0,_utils_NearRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__/* .rejectNearRequest */ .l)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_10__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].close */ .Z.close();
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_RequestModal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        intention: "sign NEAR message",
        metadata: requestSession.peer.metadata,
        onApprove: onApprove,
        onReject: onReject,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                chains: [
                    chainId !== null && chainId !== void 0 ? chainId : ""
                ],
                protocol: requestSession.relay.protocol
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                y: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDataCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                data: formatParams()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                y: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                methods: [
                    request.method
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9000:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SessionSignPolkadotModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RequestDataCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var _components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3602);
/* harmony import */ var _components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(218);
/* harmony import */ var _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(462);
/* harmony import */ var _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7002);
/* harmony import */ var _utils_PolkadotRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4793);
/* harmony import */ var _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(132);
/* harmony import */ var _RequestModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_ModalStore__WEBPACK_IMPORTED_MODULE_5__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__, _utils_PolkadotRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__, _RequestModal__WEBPACK_IMPORTED_MODULE_9__]);
([_store_ModalStore__WEBPACK_IMPORTED_MODULE_5__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__, _utils_PolkadotRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__, _RequestModal__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function SessionSignPolkadotModal() {
    var ref, ref1;
    // Get request and wallet data from store
    const requestEvent = (ref = _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].state.data */ .Z.state.data) === null || ref === void 0 ? void 0 : ref.requestEvent;
    const requestSession = (ref1 = _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].state.data */ .Z.state.data) === null || ref1 === void 0 ? void 0 : ref1.requestSession;
    // Ensure request and wallet are defined
    if (!requestEvent || !requestSession) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: "Missing request data"
        });
    }
    // Get required request data
    const { topic , params  } = requestEvent;
    const { request , chainId  } = params;
    // Handle approve action (logic varies based on request method)
    async function onApprove() {
        if (requestEvent) {
            const response = await (0,_utils_PolkadotRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__/* .approvePolkadotRequest */ .e)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].close */ .Z.close();
        }
    }
    // Handle reject action
    async function onReject() {
        if (requestEvent) {
            const response = (0,_utils_PolkadotRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__/* .rejectPolkadotRequest */ .$)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].close */ .Z.close();
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_RequestModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        intention: "sign a Polkadot message",
        metadata: requestSession.peer.metadata,
        onApprove: onApprove,
        onReject: onReject,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                chains: [
                    chainId !== null && chainId !== void 0 ? chainId : ""
                ],
                protocol: requestSession.relay.protocol
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                y: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDataCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                data: params
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                y: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                methods: [
                    request.method
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7778:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SessionSignSolanaModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RequestDataCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var _components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3602);
/* harmony import */ var _components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(218);
/* harmony import */ var _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(462);
/* harmony import */ var _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7002);
/* harmony import */ var _utils_SolanaRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6876);
/* harmony import */ var _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(132);
/* harmony import */ var _RequestModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_ModalStore__WEBPACK_IMPORTED_MODULE_5__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__, _utils_SolanaRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__, _RequestModal__WEBPACK_IMPORTED_MODULE_9__]);
([_store_ModalStore__WEBPACK_IMPORTED_MODULE_5__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__, _utils_SolanaRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__, _RequestModal__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function SessionSignSolanaModal() {
    var ref, ref1;
    // Get request and wallet data from store
    const requestEvent = (ref = _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].state.data */ .Z.state.data) === null || ref === void 0 ? void 0 : ref.requestEvent;
    const requestSession = (ref1 = _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].state.data */ .Z.state.data) === null || ref1 === void 0 ? void 0 : ref1.requestSession;
    // Ensure request and wallet are defined
    if (!requestEvent || !requestSession) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: "Missing request data"
        });
    }
    // Get required request data
    const { topic , params  } = requestEvent;
    const { request , chainId  } = params;
    // Handle approve action (logic varies based on request method)
    async function onApprove() {
        if (requestEvent) {
            const response = await (0,_utils_SolanaRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__/* .approveSolanaRequest */ .V)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].close */ .Z.close();
        }
    }
    // Handle reject action
    async function onReject() {
        if (requestEvent) {
            const response = (0,_utils_SolanaRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__/* .rejectSolanaRequest */ .p)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].close */ .Z.close();
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_RequestModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        intention: "sign a Solana message",
        metadata: requestSession.peer.metadata,
        onApprove: onApprove,
        onReject: onReject,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                chains: [
                    chainId !== null && chainId !== void 0 ? chainId : ""
                ],
                protocol: requestSession.relay.protocol
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                y: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDataCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                data: params
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                y: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                methods: [
                    request.method
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SessionSignTezosModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RequestDataCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var _components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3602);
/* harmony import */ var _components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(218);
/* harmony import */ var _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(462);
/* harmony import */ var _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7002);
/* harmony import */ var _utils_TezosRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5294);
/* harmony import */ var _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(132);
/* harmony import */ var _RequestModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_ModalStore__WEBPACK_IMPORTED_MODULE_5__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__, _RequestModal__WEBPACK_IMPORTED_MODULE_9__]);
([_store_ModalStore__WEBPACK_IMPORTED_MODULE_5__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__, _RequestModal__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function SessionSignTezosModal() {
    var ref, ref1;
    // Get request and wallet data from store
    const requestEvent = (ref = _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].state.data */ .Z.state.data) === null || ref === void 0 ? void 0 : ref.requestEvent;
    const requestSession = (ref1 = _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].state.data */ .Z.state.data) === null || ref1 === void 0 ? void 0 : ref1.requestSession;
    // Ensure request and wallet are defined
    if (!requestEvent || !requestSession) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: "Missing request data"
        });
    }
    // Get required request data
    const { topic , params  } = requestEvent;
    const { request , chainId  } = params;
    // Handle approve action (logic varies based on request method)
    async function onApprove() {
        if (requestEvent) {
            const response = await (0,_utils_TezosRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__/* .approveTezosRequest */ .H)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].close */ .Z.close();
        }
    }
    // Handle reject action
    async function onReject() {
        if (requestEvent) {
            const response = (0,_utils_TezosRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__/* .rejectTezosRequest */ .q)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].close */ .Z.close();
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_RequestModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        intention: "sign a Tezos message",
        metadata: requestSession.peer.metadata,
        onApprove: onApprove,
        onReject: onReject,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                chains: [
                    chainId !== null && chainId !== void 0 ? chainId : ""
                ],
                protocol: requestSession.relay.protocol
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                y: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDataCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                data: params
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                y: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                methods: [
                    request.method
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3817:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SessionSignTronModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RequestDataCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var _components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3602);
/* harmony import */ var _components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(218);
/* harmony import */ var _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(462);
/* harmony import */ var _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7002);
/* harmony import */ var _utils_TronRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2917);
/* harmony import */ var _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(132);
/* harmony import */ var _RequestModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_ModalStore__WEBPACK_IMPORTED_MODULE_5__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__, _utils_TronRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__, _RequestModal__WEBPACK_IMPORTED_MODULE_9__]);
([_store_ModalStore__WEBPACK_IMPORTED_MODULE_5__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__, _utils_TronRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__, _RequestModal__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function SessionSignTronModal() {
    var ref, ref1;
    // Get request and wallet data from store
    const requestEvent = (ref = _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].state.data */ .Z.state.data) === null || ref === void 0 ? void 0 : ref.requestEvent;
    const requestSession = (ref1 = _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].state.data */ .Z.state.data) === null || ref1 === void 0 ? void 0 : ref1.requestSession;
    // Ensure request and wallet are defined
    if (!requestEvent || !requestSession) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: "Missing request data"
        });
    }
    // Get required request data
    const { topic , params  } = requestEvent;
    const { request , chainId  } = params;
    // Handle approve action (logic varies based on request method)
    async function onApprove() {
        if (requestEvent) {
            const response = await (0,_utils_TronRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__/* .approveTronRequest */ .V)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].close */ .Z.close();
        }
    }
    // Handle reject action
    async function onReject() {
        if (requestEvent) {
            const response = (0,_utils_TronRequestHandlerUtil__WEBPACK_IMPORTED_MODULE_7__/* .rejectTronRequest */ .c)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_6__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].close */ .Z.close();
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_RequestModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        intention: "sign a Tron message",
        metadata: requestSession.peer.metadata,
        onApprove: onApprove,
        onReject: onReject,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                chains: [
                    chainId !== null && chainId !== void 0 ? chainId : ""
                ],
                protocol: requestSession.relay.protocol
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                y: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDataCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                data: params
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                y: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                methods: [
                    request.method
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2483:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SessionSignTypedDataModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RequestDataCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var _components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3602);
/* harmony import */ var _components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(218);
/* harmony import */ var _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(462);
/* harmony import */ var _utils_EIP155RequestHandlerUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6033);
/* harmony import */ var _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7002);
/* harmony import */ var _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(132);
/* harmony import */ var _RequestModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_ModalStore__WEBPACK_IMPORTED_MODULE_5__, _utils_EIP155RequestHandlerUtil__WEBPACK_IMPORTED_MODULE_6__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_7__, _RequestModal__WEBPACK_IMPORTED_MODULE_9__]);
([_store_ModalStore__WEBPACK_IMPORTED_MODULE_5__, _utils_EIP155RequestHandlerUtil__WEBPACK_IMPORTED_MODULE_6__, _utils_HelperUtil__WEBPACK_IMPORTED_MODULE_7__, _RequestModal__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function SessionSignTypedDataModal() {
    var ref, ref1;
    // Get request and wallet data from store
    const requestEvent = (ref = _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].state.data */ .Z.state.data) === null || ref === void 0 ? void 0 : ref.requestEvent;
    const requestSession = (ref1 = _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].state.data */ .Z.state.data) === null || ref1 === void 0 ? void 0 : ref1.requestSession;
    // Ensure request and wallet are defined
    if (!requestEvent || !requestSession) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: "Missing request data"
        });
    }
    // Get required request data
    const { topic , params  } = requestEvent;
    const { request , chainId  } = params;
    // Get data
    const data = (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_7__/* .getSignTypedDataParamsData */ .dE)(request.params);
    // Handle approve action (logic varies based on request method)
    async function onApprove() {
        if (requestEvent) {
            const response = await (0,_utils_EIP155RequestHandlerUtil__WEBPACK_IMPORTED_MODULE_6__/* .approveEIP155Request */ .S)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_7__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].close */ .Z.close();
        }
    }
    // Handle reject action
    async function onReject() {
        if (requestEvent) {
            const response = (0,_utils_EIP155RequestHandlerUtil__WEBPACK_IMPORTED_MODULE_6__/* .rejectEIP155Request */ .u)(requestEvent);
            try {
                await _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_8__/* .web3wallet.respondSessionRequest */ .zF.respondSessionRequest({
                    topic,
                    response
                });
            } catch (e) {
                (0,_utils_HelperUtil__WEBPACK_IMPORTED_MODULE_7__/* .styledToast */ .VE)(e.message, "error");
                return;
            }
            _store_ModalStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].close */ .Z.close();
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_RequestModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        intention: "sign a message",
        metadata: requestSession.peer.metadata,
        onApprove: onApprove,
        onReject: onReject,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                chains: [
                    chainId !== null && chainId !== void 0 ? chainId : ""
                ],
                protocol: requestSession.relay.protocol
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                y: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDataCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                data: data
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                y: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                methods: [
                    request.method
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4763:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SessionUnsuportedMethodModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ProjectInfoCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3224);
/* harmony import */ var _components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3602);
/* harmony import */ var _components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(218);
/* harmony import */ var _components_RequestModalContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6867);
/* harmony import */ var _store_ModalStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(462);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ProjectInfoCard__WEBPACK_IMPORTED_MODULE_3__, _store_ModalStore__WEBPACK_IMPORTED_MODULE_7__]);
([_components_ProjectInfoCard__WEBPACK_IMPORTED_MODULE_3__, _store_ModalStore__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function SessionUnsuportedMethodModal() {
    var ref, ref1;
    // Get request and wallet data from store
    const requestEvent = (ref = _store_ModalStore__WEBPACK_IMPORTED_MODULE_7__/* ["default"].state.data */ .Z.state.data) === null || ref === void 0 ? void 0 : ref.requestEvent;
    const requestSession = (ref1 = _store_ModalStore__WEBPACK_IMPORTED_MODULE_7__/* ["default"].state.data */ .Z.state.data) === null || ref1 === void 0 ? void 0 : ref1.requestSession;
    // Ensure request and wallet are defined
    if (!requestEvent || !requestSession) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: "Missing request data"
        });
    }
    // Get required request data
    const { topic , params  } = requestEvent;
    const { chainId , request  } = params;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_RequestModalContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                title: "Unsuported Method",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProjectInfoCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        metadata: requestSession.peer.metadata
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                        y: 1
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestDetalilsCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        chains: [
                            chainId !== null && chainId !== void 0 ? chainId : ""
                        ],
                        protocol: requestSession.relay.protocol
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                        y: 1
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestMethodCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        methods: [
                            request.method
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    auto: true,
                    flat: true,
                    color: "error",
                    onClick: _store_ModalStore__WEBPACK_IMPORTED_MODULE_7__/* ["default"].close */ .Z.close,
                    children: "Close"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ThreatPrompt)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_NewReleases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7569);
/* harmony import */ var _mui_icons_material_NewReleases__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_NewReleases__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_RequestModalContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6867);




const StyledLink = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.styled)("span", {
    color: "#697177"
});
const StyledProceedButton = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.styled)("p", {
    margin: "10px auto",
    padding: "10px",
    color: "$error",
    cursor: "pointer"
});
const StyledCloseButton = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.styled)("p", {
    margin: "auto",
    padding: "10px",
    border: "1px solid $error",
    borderRadius: "30px"
});
function ThreatPrompt({ metadata , onApprove , onReject  }) {
    const { icons , name , url  } = metadata;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestModalContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        title: "",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                textAlign: "center",
                padding: "20px"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Col, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_NewReleases__WEBPACK_IMPORTED_MODULE_2___default()), {
                            sx: {
                                fontSize: "55px",
                                color: "$error"
                            },
                            color: "error"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    align: "center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Col, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            h3: true,
                            children: "Website flagged"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    align: "center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Col, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                            style: {
                                verticalAlign: "middle"
                            },
                            href: url,
                            "data-testid": "session-info-card-url",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLink, {
                                children: url
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                            y: 1
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            children: "This website you`re trying to connect is flagged as malicious by multiple security providers. Approving may lead to loss of funds."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledProceedButton, {
                                color: "$error",
                                onClick: onApprove,
                                children: "Proceed anyway"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                span: 10,
                                style: {
                                    margin: "auto",
                                    cursor: "pointer"
                                },
                                onClick: onReject,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledCloseButton, {
                                    children: "Close"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 246:
/***/ ((module) => {

module.exports = require("@cosmjs/amino");

/***/ }),

/***/ 7567:
/***/ ((module) => {

module.exports = require("@cosmjs/encoding");

/***/ }),

/***/ 9236:
/***/ ((module) => {

module.exports = require("@cosmjs/proto-signing");

/***/ }),

/***/ 3562:
/***/ ((module) => {

module.exports = require("@json-rpc-tools/utils");

/***/ }),

/***/ 4199:
/***/ ((module) => {

module.exports = require("@kadena/cryptography-utils");

/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 2494:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Done");

/***/ }),

/***/ 7569:
/***/ ((module) => {

module.exports = require("@mui/icons-material/NewReleases");

/***/ }),

/***/ 7604:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Report");

/***/ }),

/***/ 4527:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ReportProblem");

/***/ }),

/***/ 8220:
/***/ ((module) => {

module.exports = require("@multiversx/sdk-core");

/***/ }),

/***/ 765:
/***/ ((module) => {

module.exports = require("@multiversx/sdk-wallet");

/***/ }),

/***/ 5350:
/***/ ((module) => {

module.exports = require("@near-wallet-selector/wallet-utils");

/***/ }),

/***/ 6735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ 7831:
/***/ ((module) => {

module.exports = require("@solana/web3.js");

/***/ }),

/***/ 6650:
/***/ ((module) => {

module.exports = require("@taquito/local-forging");

/***/ }),

/***/ 1165:
/***/ ((module) => {

module.exports = require("@taquito/signer");

/***/ }),

/***/ 6176:
/***/ ((module) => {

module.exports = require("@taquito/taquito");

/***/ }),

/***/ 4814:
/***/ ((module) => {

module.exports = require("@walletconnect/core");

/***/ }),

/***/ 5286:
/***/ ((module) => {

module.exports = require("@walletconnect/utils");

/***/ }),

/***/ 3584:
/***/ ((module) => {

module.exports = require("@walletconnect/web3wallet");

/***/ }),

/***/ 390:
/***/ ((module) => {

module.exports = require("bs58");

/***/ }),

/***/ 1558:
/***/ ((module) => {

module.exports = require("cosmos-wallet");

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 5048:
/***/ ((module) => {

module.exports = require("mnemonic-keyring");

/***/ }),

/***/ 7606:
/***/ ((module) => {

module.exports = require("near-api-js");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1069:
/***/ ((module) => {

module.exports = require("solana-wallet");

/***/ }),

/***/ 3643:
/***/ ((module) => {

module.exports = require("tronweb");

/***/ }),

/***/ 1707:
/***/ ((module) => {

module.exports = require("tweetnacl");

/***/ }),

/***/ 8963:
/***/ ((module) => {

module.exports = import("@polkadot/keyring");;

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@polkadot/types");;

/***/ }),

/***/ 4588:
/***/ ((module) => {

module.exports = import("@polkadot/util");;

/***/ }),

/***/ 1763:
/***/ ((module) => {

module.exports = import("@polkadot/util-crypto");;

/***/ }),

/***/ 7783:
/***/ ((module) => {

module.exports = import("borsh");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ }),

/***/ 4019:
/***/ ((module) => {

module.exports = import("valtio");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,676,664,309,567,292,873,224], () => (__webpack_exec__(6505)));
module.exports = __webpack_exports__;

})();