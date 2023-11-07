"use strict";
exports.id = 309;
exports.ids = [309];
exports.modules = {

/***/ 7523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ COSMOS_MAINNET_CHAINS),
/* harmony export */   "O": () => (/* binding */ COSMOS_SIGNING_METHODS)
/* harmony export */ });
/**
 * Chains
 */ const COSMOS_MAINNET_CHAINS = {
    "cosmos:cosmoshub-4": {
        chainId: "cosmoshub-4",
        name: "Cosmos Hub",
        logo: "/chain-logos/cosmos-cosmoshub-4.png",
        rgb: "107, 111, 147",
        rpc: "",
        namespace: "cosmos"
    }
};
/**
 * Methods
 */ const COSMOS_SIGNING_METHODS = {
    COSMOS_SIGN_DIRECT: "cosmos_signDirect",
    COSMOS_SIGN_AMINO: "cosmos_signAmino"
};


/***/ }),

/***/ 8157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cn": () => (/* binding */ EIP155_CHAINS),
/* harmony export */   "ES": () => (/* binding */ EIP155_TEST_CHAINS),
/* harmony export */   "lh": () => (/* binding */ EIP155_MAINNET_CHAINS),
/* harmony export */   "xy": () => (/* binding */ EIP155_SIGNING_METHODS)
/* harmony export */ });
/**
 * Chains
 */ const EIP155_MAINNET_CHAINS = {
    "eip155:1": {
        chainId: 1,
        name: "Ethereum",
        logo: "/chain-logos/eip155-1.png",
        rgb: "99, 125, 234",
        rpc: "https://cloudflare-eth.com/",
        namespace: "eip155"
    },
    "eip155:43114": {
        chainId: 43114,
        name: "Avalanche C-Chain",
        logo: "/chain-logos/eip155-43113.png",
        rgb: "232, 65, 66",
        rpc: "https://api.avax.network/ext/bc/C/rpc",
        namespace: "eip155"
    },
    "eip155:137": {
        chainId: 137,
        name: "Polygon",
        logo: "/chain-logos/eip155-137.png",
        rgb: "130, 71, 229",
        rpc: "https://polygon-rpc.com/",
        namespace: "eip155"
    },
    "eip155:10": {
        chainId: 10,
        name: "Optimism",
        logo: "/chain-logos/eip155-10.png",
        rgb: "235, 0, 25",
        rpc: "https://mainnet.optimism.io",
        namespace: "eip155"
    },
    "eip155:324": {
        chainId: 324,
        name: "zkSync Era",
        logo: "/chain-logos/eip155-324.svg",
        rgb: "242, 242, 242",
        rpc: "https://mainnet.era.zksync.io/",
        namespace: "eip155"
    }
};
const EIP155_TEST_CHAINS = {
    "eip155:5": {
        chainId: 5,
        name: "Ethereum Goerli",
        logo: "/chain-logos/eip155-1.png",
        rgb: "99, 125, 234",
        rpc: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        namespace: "eip155"
    },
    "eip155:43113": {
        chainId: 43113,
        name: "Avalanche Fuji",
        logo: "/chain-logos/eip155-43113.png",
        rgb: "232, 65, 66",
        rpc: "https://api.avax-test.network/ext/bc/C/rpc",
        namespace: "eip155"
    },
    "eip155:80001": {
        chainId: 80001,
        name: "Polygon Mumbai",
        logo: "/chain-logos/eip155-137.png",
        rgb: "130, 71, 229",
        rpc: "https://polygon-mumbai.infura.io/v3/b6bd0befdacb406fadf345421777cf38",
        namespace: "eip155"
    },
    "eip155:420": {
        chainId: 420,
        name: "Optimism Goerli",
        logo: "/chain-logos/eip155-10.png",
        rgb: "235, 0, 25",
        rpc: "https://goerli.optimism.io",
        namespace: "eip155"
    },
    "eip155:280": {
        chainId: 280,
        name: "zkSync Era Testnet",
        logo: "/chain-logos/eip155-324.svg",
        rgb: "242, 242, 242",
        rpc: "https://testnet.era.zksync.dev/",
        namespace: "eip155"
    }
};
const EIP155_CHAINS = {
    ...EIP155_MAINNET_CHAINS,
    ...EIP155_TEST_CHAINS
};
/**
 * Methods
 */ const EIP155_SIGNING_METHODS = {
    PERSONAL_SIGN: "personal_sign",
    ETH_SIGN: "eth_sign",
    ETH_SIGN_TRANSACTION: "eth_signTransaction",
    ETH_SIGN_TYPED_DATA: "eth_signTypedData",
    ETH_SIGN_TYPED_DATA_V3: "eth_signTypedData_v3",
    ETH_SIGN_TYPED_DATA_V4: "eth_signTypedData_v4",
    ETH_SEND_RAW_TRANSACTION: "eth_sendRawTransaction",
    ETH_SEND_TRANSACTION: "eth_sendTransaction"
};


/***/ }),

/***/ 7284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hk": () => (/* binding */ KADENA_TEST_CHAINS),
/* harmony export */   "NQ": () => (/* binding */ KADENA_MAINNET_CHAINS),
/* harmony export */   "Rf": () => (/* binding */ KADENA_SIGNING_METHODS),
/* harmony export */   "ph": () => (/* binding */ KADENA_CHAINS)
/* harmony export */ });
/**
 * Chains
 */ const KADENA_MAINNET_CHAINS = {
    "kadena:mainnet01": {
        chainId: "mainnet01",
        name: "Kadena",
        logo: "/chain-logos/kadena.png",
        rgb: "237, 9, 143",
        namespace: "kadena"
    }
};
const KADENA_TEST_CHAINS = {
    "kadena:testnet04": {
        chainId: "testnet04",
        name: "Kadena Testnet",
        logo: "/chain-logos/kadena.png",
        rgb: "237, 9, 143",
        namespace: "kadena"
    }
};
const KADENA_CHAINS = {
    ...KADENA_MAINNET_CHAINS,
    ...KADENA_TEST_CHAINS
};
/**
 * Methods
 */ const KADENA_SIGNING_METHODS = {
    KADENA_GET_ACCOUNTS: "kadena_getAccounts_v1",
    KADENA_SIGN: "kadena_sign_v1",
    KADENA_QUICKSIGN: "kadena_quicksign_v1"
};


/***/ }),

/***/ 5366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jk": () => (/* binding */ MULTIVERSX_CHAINS),
/* harmony export */   "XJ": () => (/* binding */ MULTIVERSX_TEST_CHAINS),
/* harmony export */   "Zo": () => (/* binding */ MULTIVERSX_MAINNET_CHAINS),
/* harmony export */   "wq": () => (/* binding */ MULTIVERSX_SIGNING_METHODS)
/* harmony export */ });
/**
 * Chains
 */ const MULTIVERSX_MAINNET_CHAINS = {
    "mvx:1": {
        chainId: "1",
        name: "MultiversX",
        logo: "/chain-logos/multiversx-1.svg",
        rgb: "43, 45, 46",
        rpc: "",
        namespace: "mvx"
    }
};
const MULTIVERSX_TEST_CHAINS = {
    "mvx:D": {
        chainId: "D",
        name: "MultiversX Devnet",
        logo: "/chain-logos/multiversx-1.svg",
        rgb: "43, 45, 46",
        rpc: "",
        namespace: "mvx"
    }
};
const MULTIVERSX_CHAINS = {
    ...MULTIVERSX_MAINNET_CHAINS,
    ...MULTIVERSX_TEST_CHAINS
};
/**
 * Methods
 */ const MULTIVERSX_SIGNING_METHODS = {
    MULTIVERSX_SIGN_TRANSACTION: "mvx_signTransaction",
    MULTIVERSX_SIGN_TRANSACTIONS: "mvx_signTransactions",
    MULTIVERSX_SIGN_MESSAGE: "mvx_signMessage",
    MULTIVERSX_SIGN_LOGIN_TOKEN: "mvx_signLoginToken",
    MULTIVERSX_SIGN_NATIVE_AUTH_TOKEN: "mvx_signNativeAuthToken",
    MULTIVERSX_CANCEL_ACTION: "mvx_cancelAction"
};


/***/ }),

/***/ 5519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cu": () => (/* binding */ NEAR_SIGNING_METHODS),
/* harmony export */   "EE": () => (/* binding */ NEAR_CHAINS),
/* harmony export */   "nG": () => (/* binding */ NEAR_TEST_CHAINS)
/* harmony export */ });
/* unused harmony export NEAR_MAINNET_CHAINS */
/**
 * Chains
 */ const NEAR_MAINNET_CHAINS = {
};
const NEAR_TEST_CHAINS = {
    "near:testnet": {
        chainId: "testnet",
        name: "NEAR Testnet",
        logo: "/chain-logos/near.png",
        rgb: "99, 125, 234",
        rpc: "https://rpc.testnet.near.org",
        namespace: "near"
    }
};
const NEAR_CHAINS = {
    ...NEAR_MAINNET_CHAINS,
    ...NEAR_TEST_CHAINS
};
/**
 * Methods
 */ const NEAR_SIGNING_METHODS = {
    NEAR_SIGN_IN: "near_signIn",
    NEAR_SIGN_OUT: "near_signOut",
    NEAR_GET_ACCOUNTS: "near_getAccounts",
    NEAR_SIGN_TRANSACTION: "near_signTransaction",
    NEAR_SIGN_AND_SEND_TRANSACTION: "near_signAndSendTransaction",
    NEAR_SIGN_TRANSACTIONS: "near_signTransactions",
    NEAR_SIGN_AND_SEND_TRANSACTIONS: "near_signAndSendTransactions",
    NEAR_VERIFY_OWNER: "near_verifyOwner",
    NEAR_SIGN_MESSAGE: "near_signMessage"
};


/***/ }),

/***/ 5443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CZ": () => (/* binding */ POLKADOT_MAINNET_CHAINS),
/* harmony export */   "H7": () => (/* binding */ POLKADOT_CHAINS),
/* harmony export */   "_7": () => (/* binding */ POLKADOT_SIGNING_METHODS),
/* harmony export */   "v3": () => (/* binding */ POLKADOT_TEST_CHAINS)
/* harmony export */ });
/**
 * Chains
 */ const POLKADOT_MAINNET_CHAINS = {
    "polkadot:91b171bb158e2d3848fa23a9f1c25182": {
        chainId: "91b171bb158e2d3848fa23a9f1c25182",
        name: "Polkadot",
        logo: "/chain-logos/polkadot.svg",
        rgb: "230, 1, 122",
        rpc: "",
        namespace: "polkadot"
    }
};
const POLKADOT_TEST_CHAINS = {
    "polkadot:e143f23803ac50e8f6f8e62695d1ce9e": {
        chainId: "e143f23803ac50e8f6f8e62695d1ce9e",
        name: "Polkadot Westend",
        logo: "/chain-logos/westend.svg",
        rgb: "218, 104, 167",
        rpc: "",
        namespace: "polkadot"
    }
};
const POLKADOT_CHAINS = {
    ...POLKADOT_MAINNET_CHAINS,
    ...POLKADOT_TEST_CHAINS
};
/**
 * Methods
 */ const POLKADOT_SIGNING_METHODS = {
    POLKADOT_SIGN_TRANSACTION: "polkadot_signTransaction",
    POLKADOT_SIGN_MESSAGE: "polkadot_signMessage"
};


/***/ }),

/***/ 2234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ SOLANA_CHAINS),
/* harmony export */   "Cb": () => (/* binding */ SOLANA_MAINNET_CHAINS),
/* harmony export */   "RT": () => (/* binding */ SOLANA_SIGNING_METHODS),
/* harmony export */   "mV": () => (/* binding */ SOLANA_TEST_CHAINS)
/* harmony export */ });
/**
 * Chains
 */ const SOLANA_MAINNET_CHAINS = {
    "solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ": {
        chainId: "4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ",
        name: "Solana",
        logo: "/chain-logos/solana-4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ.png",
        rgb: "30, 240, 166",
        rpc: "",
        namespace: "solana"
    }
};
const SOLANA_TEST_CHAINS = {
    "solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K": {
        chainId: "8E9rvCKLFQia2Y35HXjjpWzj8weVo44K",
        name: "Solana Devnet",
        logo: "/chain-logos/solana-4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ.png",
        rgb: "30, 240, 166",
        rpc: "",
        namespace: "solana"
    }
};
const SOLANA_CHAINS = {
    ...SOLANA_MAINNET_CHAINS,
    ...SOLANA_TEST_CHAINS
};
/**
 * Methods
 */ const SOLANA_SIGNING_METHODS = {
    SOLANA_SIGN_TRANSACTION: "solana_signTransaction",
    SOLANA_SIGN_MESSAGE: "solana_signMessage"
};


/***/ }),

/***/ 8734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B$": () => (/* binding */ TEZOS_CHAINS),
/* harmony export */   "IM": () => (/* binding */ TEZOS_MAINNET_CHAINS),
/* harmony export */   "PQ": () => (/* binding */ TEZOS_SIGNING_METHODS),
/* harmony export */   "qT": () => (/* binding */ TEZOS_TEST_CHAINS)
/* harmony export */ });
/**
 * Chains
 */ const TEZOS_MAINNET_CHAINS = {
    "tezos:mainnet": {
        chainId: "mainnet",
        name: "Tezos",
        logo: "/chain-logos/tezos.svg",
        rgb: "44, 125, 247",
        rpc: "https://mainnet.api.tez.ie",
        namespace: "tezos"
    }
};
const TEZOS_TEST_CHAINS = {
    "tezos:testnet": {
        chainId: "testnet",
        name: "Tezos Testnet",
        logo: "/chain-logos/tezos.svg",
        rgb: "44, 125, 247",
        rpc: "https://ghostnet.ecadinfra.com",
        namespace: "tezos"
    }
};
const TEZOS_CHAINS = {
    ...TEZOS_MAINNET_CHAINS,
    ...TEZOS_TEST_CHAINS
};
/**
 * Methods
 */ const TEZOS_SIGNING_METHODS = {
    TEZOS_GET_ACCOUNTS: "tezos_getAccounts",
    TEZOS_SEND: "tezos_send",
    TEZOS_SIGN: "tezos_sign"
};


/***/ }),

/***/ 5842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TT": () => (/* binding */ TRON_SIGNING_METHODS),
/* harmony export */   "Yj": () => (/* binding */ TRON_TEST_CHAINS),
/* harmony export */   "qU": () => (/* binding */ TRON_CHAINS),
/* harmony export */   "s0": () => (/* binding */ TRON_MAINNET_CHAINS)
/* harmony export */ });
/**
 * Chains
 */ const TRON_MAINNET_CHAINS = {
    "tron:0x2b6653dc": {
        chainId: "0x2b6653dc",
        name: "Tron",
        logo: "https://tronscan.io/static/media/TRON.4a760cebd163969b2ee874abf2415e9a.svg",
        rgb: "183, 62, 49",
        fullNode: "https://api.trongrid.io",
        namespace: "tron"
    }
};
const TRON_TEST_CHAINS = {
    "tron:0xcd8690dc": {
        chainId: "0xcd8690dc",
        name: "Tron Testnet",
        logo: "https://tronscan.io/static/media/TRON.4a760cebd163969b2ee874abf2415e9a.svg",
        rgb: "183, 62, 49",
        fullNode: "https://nile.trongrid.io/",
        namespace: "tron"
    }
};
const TRON_CHAINS = {
    ...TRON_MAINNET_CHAINS,
    ...TRON_TEST_CHAINS
};
/**
 * Methods
 */ const TRON_SIGNING_METHODS = {
    TRON_SIGN_TRANSACTION: "tron_signTransaction",
    TRON_SIGN_MESSAGE: "tron_signMessage"
};


/***/ }),

/***/ 7002:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$G": () => (/* binding */ truncate),
/* harmony export */   "$m": () => (/* binding */ getSignParamsMessage),
/* harmony export */   "Bw": () => (/* binding */ getWalletAddressFromParams),
/* harmony export */   "VE": () => (/* binding */ styledToast),
/* harmony export */   "dE": () => (/* binding */ getSignTypedDataParamsData),
/* harmony export */   "eI": () => (/* binding */ formatChainName),
/* harmony export */   "wE": () => (/* binding */ convertHexToUtf8)
/* harmony export */ });
/* unused harmony exports isEIP155Chain, isCosmosChain, isSolanaChain, isPolkadotChain, isNearChain, isKadenaChain, isMultiversxChain, isTronChain, isTezosChain */
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6201);
/* harmony import */ var _data_COSMOSData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7523);
/* harmony import */ var _data_EIP155Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8157);
/* harmony import */ var _data_MultiversxData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5366);
/* harmony import */ var _data_NEARData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5519);
/* harmony import */ var _data_PolkadotData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5443);
/* harmony import */ var _data_SolanaData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2234);
/* harmony import */ var _data_TezosData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8734);
/* harmony import */ var _data_TronData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5842);
/* harmony import */ var _data_KadenaData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7284);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_0__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











/**
 * Truncates string (in the middle) via given lenght value
 */ function truncate(value, length) {
    if ((value === null || value === void 0 ? void 0 : value.length) <= length) {
        return value;
    }
    const separator = "...";
    const stringLength = length - separator.length;
    const frontLength = Math.ceil(stringLength / 2);
    const backLength = Math.floor(stringLength / 2);
    return value.substring(0, frontLength) + separator + value.substring(value.length - backLength);
}
/**
 * Converts hex to utf8 string if it is valid bytes
 */ function convertHexToUtf8(value) {
    if (ethers__WEBPACK_IMPORTED_MODULE_10__.utils.isHexString(value)) {
        return ethers__WEBPACK_IMPORTED_MODULE_10__.utils.toUtf8String(value);
    }
    return value;
}
/**
 * Gets message from various signing request methods by filtering out
 * a value that is not an address (thus is a message).
 * If it is a hex string, it gets converted to utf8 string
 */ function getSignParamsMessage(params) {
    const message = params.filter((p)=>!ethers__WEBPACK_IMPORTED_MODULE_10__.utils.isAddress(p)
    )[0];
    return convertHexToUtf8(message);
}
/**
 * Gets data from various signTypedData request methods by filtering out
 * a value that is not an address (thus is data).
 * If data is a string convert it to object
 */ function getSignTypedDataParamsData(params) {
    const data = params.filter((p)=>!ethers__WEBPACK_IMPORTED_MODULE_10__.utils.isAddress(p)
    )[0];
    if (typeof data === "string") {
        return JSON.parse(data);
    }
    return data;
}
/**
 * Get our address from params checking if params string contains one
 * of our wallet addresses
 */ function getWalletAddressFromParams(addresses, params) {
    const paramsString = JSON.stringify(params);
    let address = "";
    addresses.forEach((addr)=>{
        if (paramsString.toLowerCase().includes(addr.toLowerCase())) {
            address = addr;
        }
    });
    return address;
}
/**
 * Check if chain is part of EIP155 standard
 */ function isEIP155Chain(chain) {
    return chain.includes("eip155");
}
/**
 * Check if chain is part of COSMOS standard
 */ function isCosmosChain(chain) {
    return chain.includes("cosmos");
}
/**
 * Check if chain is part of SOLANA standard
 */ function isSolanaChain(chain) {
    return chain.includes("solana");
}
/**
 * Check if chain is part of POLKADOT standard
 */ function isPolkadotChain(chain) {
    return chain.includes("polkadot");
}
/**
 * Check if chain is part of NEAR standard
 */ function isNearChain(chain) {
    return chain.includes("near");
}
/**
 * Check if chain is part of KADENA standard
 */ function isKadenaChain(chain) {
    return chain.includes("kadena");
}
/**
 * Check if chain is part of MULTIVERSX standard
 */ function isMultiversxChain(chain) {
    return chain.includes("mvx");
}
/**
 * Check if chain is part of TRON standard
 */ function isTronChain(chain) {
    return chain.includes("tron");
}
/**
 * Check if chain is part of Tezos standard
 */ function isTezosChain(chain) {
    return chain.includes("tezos");
}
/**
 * Formats chainId to its name
 */ function formatChainName(chainId) {
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8;
    var ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17;
    return (ref17 = (ref16 = (ref15 = (ref14 = (ref13 = (ref12 = (ref11 = (ref10 = (ref9 = (ref = _data_COSMOSData__WEBPACK_IMPORTED_MODULE_1__/* .COSMOS_MAINNET_CHAINS */ .G[chainId]) === null || ref === void 0 ? void 0 : ref.name) !== null && ref9 !== void 0 ? ref9 : (ref1 = _data_EIP155Data__WEBPACK_IMPORTED_MODULE_2__/* .EIP155_CHAINS */ .Cn[chainId]) === null || ref1 === void 0 ? void 0 : ref1.name) !== null && ref10 !== void 0 ? ref10 : (ref2 = _data_MultiversxData__WEBPACK_IMPORTED_MODULE_3__/* .MULTIVERSX_CHAINS */ .Jk[chainId]) === null || ref2 === void 0 ? void 0 : ref2.name) !== null && ref11 !== void 0 ? ref11 : (ref3 = _data_NEARData__WEBPACK_IMPORTED_MODULE_4__/* .NEAR_TEST_CHAINS */ .nG[chainId]) === null || ref3 === void 0 ? void 0 : ref3.name) !== null && ref12 !== void 0 ? ref12 : (ref4 = _data_PolkadotData__WEBPACK_IMPORTED_MODULE_5__/* .POLKADOT_CHAINS */ .H7[chainId]) === null || ref4 === void 0 ? void 0 : ref4.name) !== null && ref13 !== void 0 ? ref13 : (ref5 = _data_SolanaData__WEBPACK_IMPORTED_MODULE_6__/* .SOLANA_CHAINS */ .$[chainId]) === null || ref5 === void 0 ? void 0 : ref5.name) !== null && ref14 !== void 0 ? ref14 : (ref6 = _data_TronData__WEBPACK_IMPORTED_MODULE_8__/* .TRON_CHAINS */ .qU[chainId]) === null || ref6 === void 0 ? void 0 : ref6.name) !== null && ref15 !== void 0 ? ref15 : (ref7 = _data_TezosData__WEBPACK_IMPORTED_MODULE_7__/* .TEZOS_CHAINS */ .B$[chainId]) === null || ref7 === void 0 ? void 0 : ref7.name) !== null && ref16 !== void 0 ? ref16 : (ref8 = _data_KadenaData__WEBPACK_IMPORTED_MODULE_9__/* .KADENA_CHAINS */ .ph[chainId]) === null || ref8 === void 0 ? void 0 : ref8.name) !== null && ref17 !== void 0 ? ref17 : chainId;
}
function styledToast(message, type) {
    if (type === "success") {
        react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"].success(message, {
            position: "bottom-left",
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff"
            }
        });
    } else if (type === "error") {
        react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"].error(message, {
            position: "bottom-left",
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff"
            }
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E3": () => (/* binding */ updateSignClientChainId),
/* harmony export */   "uz": () => (/* binding */ createWeb3Wallet),
/* harmony export */   "zF": () => (/* binding */ web3wallet)
/* harmony export */ });
/* harmony import */ var _walletconnect_web3wallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3584);
/* harmony import */ var _walletconnect_web3wallet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_web3wallet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _walletconnect_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4814);
/* harmony import */ var _walletconnect_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_core__WEBPACK_IMPORTED_MODULE_1__);


let web3wallet;
async function createWeb3Wallet(relayerRegionURL) {
    const core = new _walletconnect_core__WEBPACK_IMPORTED_MODULE_1__.Core({
        projectId: "3ec074656c050f34ab1a590dbdfb3a7a",
        relayUrl: relayerRegionURL !== null && relayerRegionURL !== void 0 ? relayerRegionURL : "wss://relay.walletconnect.com"
    });
    web3wallet = await _walletconnect_web3wallet__WEBPACK_IMPORTED_MODULE_0__.Web3Wallet.init({
        core,
        metadata: {
            name: "React Wallet Example",
            description: "React Wallet for WalletConnect",
            url: "https://walletconnect.com/",
            icons: [
                "https://avatars.githubusercontent.com/u/37784886"
            ]
        }
    });
    try {
        const clientId = await web3wallet.engine.signClient.core.crypto.getClientId();
        console.log("WalletConnect ClientID: ", clientId);
        localStorage.setItem("WALLETCONNECT_CLIENT_ID", clientId);
    } catch (error) {
        console.error("Failed to set WalletConnect clientId in localStorage: ", error);
    }
}
async function updateSignClientChainId(chainId, address) {
    console.log("chainId", chainId, address);
    // get most recent session
    const sessions = web3wallet.getActiveSessions();
    if (!sessions) return;
    const namespace = chainId.split(":")[0];
    Object.values(sessions).forEach(async (session)=>{
        await web3wallet.updateSession({
            topic: session.topic,
            namespaces: {
                ...session.namespaces,
                [namespace]: {
                    ...session.namespaces[namespace],
                    chains: [
                        ...new Set([
                            chainId
                        ].concat(Array.from(session.namespaces[namespace].chains || [])))
                    ],
                    accounts: [
                        ...new Set([
                            `${chainId}:${address}`
                        ].concat(Array.from(session.namespaces[namespace].accounts)))
                    ]
                }
            }
        });
        await new Promise((resolve)=>setTimeout(resolve, 1000)
        );
        const chainChanged = {
            topic: session.topic,
            event: {
                name: "chainChanged",
                data: parseInt(chainId.split(":")[1])
            },
            chainId: chainId
        };
        const accountsChanged = {
            topic: session.topic,
            event: {
                name: "accountsChanged",
                data: [
                    `${chainId}:${address}`
                ]
            },
            chainId
        };
        await web3wallet.emitSessionEvent(chainChanged);
        await web3wallet.emitSessionEvent(accountsChanged);
    });
}


/***/ })

};
;