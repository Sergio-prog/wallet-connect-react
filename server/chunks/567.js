"use strict";
exports.id = 567;
exports.ids = [567];
exports.modules = {

/***/ 6567:
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
    testNets: typeof localStorage !== "undefined" ? Boolean(localStorage.getItem("TEST_NETS")) : true,
    account: 0,
    activeChainId: "1",
    eip155Address: "",
    cosmosAddress: "",
    solanaAddress: "",
    polkadotAddress: "",
    nearAddress: "",
    multiversxAddress: "",
    tronAddress: "",
    tezosAddress: "",
    kadenaAddress: "",
    relayerRegionURL: ""
});
/**
 * Store / Actions
 */ const SettingsStore = {
    state,
    setAccount (value) {
        state.account = value;
    },
    setEIP155Address (eip155Address) {
        state.eip155Address = eip155Address;
    },
    setCosmosAddress (cosmosAddresses) {
        state.cosmosAddress = cosmosAddresses;
    },
    setSolanaAddress (solanaAddress) {
        state.solanaAddress = solanaAddress;
    },
    setPolkadotAddress (polkadotAddress) {
        state.polkadotAddress = polkadotAddress;
    },
    setNearAddress (nearAddress) {
        state.nearAddress = nearAddress;
    },
    setKadenaAddress (kadenaAddress) {
        state.kadenaAddress = kadenaAddress;
    },
    setRelayerRegionURL (relayerRegionURL) {
        state.relayerRegionURL = relayerRegionURL;
    },
    setMultiversxAddress (multiversxAddress) {
        state.multiversxAddress = multiversxAddress;
    },
    setTronAddress (tronAddress) {
        state.tronAddress = tronAddress;
    },
    setTezosAddress (tezosAddress) {
        state.tezosAddress = tezosAddress;
    },
    setActiveChainId (value) {
        state.activeChainId = value;
    },
    setCurrentRequestVerifyContext (context) {
        state.currentRequestVerifyContext = context;
    },
    toggleTestNets () {
        state.testNets = !state.testNets;
        if (state.testNets) {
            localStorage.setItem("TEST_NETS", "YES");
        } else {
            localStorage.removeItem("TEST_NETS");
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;