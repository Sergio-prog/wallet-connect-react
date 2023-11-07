"use strict";
exports.id = 292;
exports.ids = [292];
exports.modules = {

/***/ 492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Vh": () => (/* binding */ cosmosAddresses),
  "B8": () => (/* binding */ cosmosWallets),
  "QP": () => (/* binding */ createOrRestoreCosmosWallet)
});

// UNUSED EXPORTS: wallet1, wallet2

// EXTERNAL MODULE: external "@cosmjs/amino"
var amino_ = __webpack_require__(246);
// EXTERNAL MODULE: external "@cosmjs/encoding"
var encoding_ = __webpack_require__(7567);
// EXTERNAL MODULE: external "@cosmjs/proto-signing"
var proto_signing_ = __webpack_require__(9236);
// EXTERNAL MODULE: external "mnemonic-keyring"
var external_mnemonic_keyring_ = __webpack_require__(5048);
var external_mnemonic_keyring_default = /*#__PURE__*/__webpack_require__.n(external_mnemonic_keyring_);
;// CONCATENATED MODULE: ./src/lib/CosmosLib.ts




/**
 * Constants
 */ const DEFAULT_PATH = "m/44'/118'/0'/0/0";
const DEFAULT_PREFIX = "cosmos";
/**
 * Library
 */ class CosmosLib {
    constructor(keyring, directSigner, aminoSigner){
        this.directSigner = directSigner;
        this.keyring = keyring;
        this.aminoSigner = aminoSigner;
    }
    static async init({ mnemonic , path , prefix  }) {
        const keyring = await external_mnemonic_keyring_default().init({
            mnemonic: mnemonic !== null && mnemonic !== void 0 ? mnemonic : external_mnemonic_keyring_default().generateMnemonic()
        });
        const privateKey = (0,encoding_.fromHex)(keyring.getPrivateKey(path !== null && path !== void 0 ? path : DEFAULT_PATH));
        const directSigner = await proto_signing_.DirectSecp256k1Wallet.fromKey(privateKey, prefix !== null && prefix !== void 0 ? prefix : DEFAULT_PREFIX);
        const aminoSigner = await amino_.Secp256k1Wallet.fromKey(privateKey, prefix !== null && prefix !== void 0 ? prefix : DEFAULT_PREFIX);
        return new CosmosLib(keyring, directSigner, aminoSigner);
    }
    getMnemonic() {
        return this.keyring.mnemonic;
    }
    async getAddress() {
        const account = await this.directSigner.getAccounts();
        return account[0].address;
    }
    async signDirect(address, signDoc) {
        return await this.directSigner.signDirect(address, signDoc);
    }
    async signAmino(address, signDoc) {
        return await this.aminoSigner.signAmino(address, signDoc);
    }
};

;// CONCATENATED MODULE: ./src/utils/CosmosWalletUtil.ts

let wallet1;
let wallet2;
let cosmosWallets;
let cosmosAddresses;
let address1;
let address2;
/**
 * Utilities
 */ async function createOrRestoreCosmosWallet() {
    const mnemonic1 = localStorage.getItem("COSMOS_MNEMONIC_1");
    const mnemonic2 = localStorage.getItem("COSMOS_MNEMONIC_2");
    if (mnemonic1 && mnemonic2) {
        wallet1 = await CosmosLib.init({
            mnemonic: mnemonic1
        });
        wallet2 = await CosmosLib.init({
            mnemonic: mnemonic2
        });
    } else {
        wallet1 = await CosmosLib.init({});
        wallet2 = await CosmosLib.init({});
        // Don't store mnemonic in local storage in a production project!
        localStorage.setItem("COSMOS_MNEMONIC_1", wallet1.getMnemonic());
        localStorage.setItem("COSMOS_MNEMONIC_2", wallet2.getMnemonic());
    }
    address1 = await wallet1.getAddress();
    address2 = await wallet2.getAddress();
    cosmosWallets = {
        [address1]: wallet1,
        [address2]: wallet2
    };
    cosmosAddresses = Object.keys(cosmosWallets);
    return {
        cosmosWallets,
        cosmosAddresses
    };
}


/***/ }),

/***/ 6007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W_": () => (/* binding */ createOrRestoreEIP155Wallet),
  "sW": () => (/* binding */ eip155Addresses),
  "ag": () => (/* binding */ eip155Wallets)
});

// UNUSED EXPORTS: wallet1, wallet2

// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
;// CONCATENATED MODULE: ./src/lib/EIP155Lib.ts

/**
 * Library
 */ class EIP155Lib {
    constructor(wallet){
        this.wallet = wallet;
    }
    static init({ mnemonic  }) {
        const wallet = mnemonic ? external_ethers_.Wallet.fromMnemonic(mnemonic) : external_ethers_.Wallet.createRandom();
        return new EIP155Lib(wallet);
    }
    getMnemonic() {
        return this.wallet.mnemonic.phrase;
    }
    getAddress() {
        return this.wallet.address;
    }
    signMessage(message) {
        return this.wallet.signMessage(message);
    }
    _signTypedData(domain, types, data) {
        return this.wallet._signTypedData(domain, types, data);
    }
    connect(provider) {
        return this.wallet.connect(provider);
    }
    signTransaction(transaction) {
        return this.wallet.signTransaction(transaction);
    }
};

;// CONCATENATED MODULE: ./src/utils/EIP155WalletUtil.ts

let wallet1;
let wallet2;
let eip155Wallets;
let eip155Addresses;
let address1;
let address2;
/**
 * Utilities
 */ function createOrRestoreEIP155Wallet() {
    const mnemonic1 = localStorage.getItem("EIP155_MNEMONIC_1");
    const mnemonic2 = localStorage.getItem("EIP155_MNEMONIC_2");
    if (mnemonic1 && mnemonic2) {
        wallet1 = EIP155Lib.init({
            mnemonic: mnemonic1
        });
        wallet2 = EIP155Lib.init({
            mnemonic: mnemonic2
        });
    } else {
        wallet1 = EIP155Lib.init({});
        wallet2 = EIP155Lib.init({});
        // Don't store mnemonic in local storage in a production project!
        localStorage.setItem("EIP155_MNEMONIC_1", wallet1.getMnemonic());
        localStorage.setItem("EIP155_MNEMONIC_2", wallet2.getMnemonic());
    }
    address1 = wallet1.getAddress();
    address2 = wallet2.getAddress();
    eip155Wallets = {
        [address1]: wallet1,
        [address2]: wallet2
    };
    eip155Addresses = Object.keys(eip155Wallets);
    return {
        eip155Wallets,
        eip155Addresses
    };
}


/***/ }),

/***/ 5705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Qv": () => (/* binding */ createOrRestoreKadenaWallet),
  "WE": () => (/* binding */ kadenaAddresses),
  "rO": () => (/* binding */ kadenaWallets)
});

// UNUSED EXPORTS: wallet

// EXTERNAL MODULE: external "@kadena/cryptography-utils"
var cryptography_utils_ = __webpack_require__(4199);
;// CONCATENATED MODULE: ./src/lib/KadenaLib.ts

class KadenaLib {
    constructor(keyPair){
        this.keyPair = keyPair;
    }
    static init({ secretKey  }) {
        const keyPair = secretKey ? (0,cryptography_utils_.restoreKeyPairFromSecretKey)(secretKey) : (0,cryptography_utils_.genKeyPair)();
        return new KadenaLib(keyPair);
    }
    getAddress() {
        return this.keyPair.publicKey;
    }
    getSecretKey() {
        return this.keyPair.secretKey;
    }
    signRequest(transaction) {
        const signResponse = (0,cryptography_utils_.sign)(transaction.toString(), this.keyPair);
        return {
            body: {
                cmd: transaction,
                sigs: [
                    signResponse.sig
                ]
            }
        };
    }
    quicksignRequest(transactions) {
        const transaction = transactions.commandSigDatas[0].cmd;
        const signResponse = (0,cryptography_utils_.sign)(transaction.toString(), this.keyPair);
        return {
            responses: [
                {
                    outcome: {
                        result: "success",
                        hash: signResponse.hash
                    },
                    commandSigData: {
                        sigs: [
                            {
                                sig: signResponse.sig,
                                pubKey: this.keyPair.publicKey
                            }
                        ]
                    }
                }
            ]
        };
    }
};

;// CONCATENATED MODULE: ./src/utils/KadenaWalletUtil.ts

let wallet;
let kadenaWallets;
let kadenaAddresses;
/**
 * Utilities
 */ async function createOrRestoreKadenaWallet() {
    const secretKey = localStorage.getItem("KADENA_SECRET_KEY");
    if (secretKey) {
        wallet = KadenaLib.init({
            secretKey
        });
    } else {
        wallet = KadenaLib.init({});
    }
    if (wallet.getSecretKey()) {
        localStorage.setItem("KADENA_SECRET_KEY", wallet.getSecretKey());
    }
    const address = wallet.getAddress();
    kadenaAddresses = [
        address
    ];
    kadenaWallets = {
        [address]: wallet
    };
    return {
        kadenaWallets,
        kadenaAddresses
    };
}


/***/ }),

/***/ 444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "cO": () => (/* binding */ createOrRestoreMultiversxWallet),
  "$k": () => (/* binding */ multiversxAddresses),
  "hU": () => (/* binding */ multiversxWallets)
});

// UNUSED EXPORTS: wallet1, wallet2

// EXTERNAL MODULE: external "@multiversx/sdk-core"
var sdk_core_ = __webpack_require__(8220);
// EXTERNAL MODULE: external "@multiversx/sdk-wallet"
var sdk_wallet_ = __webpack_require__(765);
;// CONCATENATED MODULE: ./src/lib/MultiversxLib.ts


/**
 * Library
 */ class MultiversxLib {
    constructor(mnemonic){
        this.mnemonic = mnemonic;
        this.password = "password" // test purposes only
        ;
        this.wallet = sdk_wallet_.UserWallet.fromMnemonic({
            password: this.password,
            mnemonic: mnemonic.toString()
        });
    }
    static init({ mnemonic  }) {
        const mnemonicObj = mnemonic ? sdk_wallet_.Mnemonic.fromString(mnemonic) : sdk_wallet_.Mnemonic.generate();
        return new MultiversxLib(mnemonicObj);
    }
    getMnemonic() {
        const secretKey = this.mnemonic.getWords().join(" ");
        return secretKey;
    }
    getAddress() {
        const secretKey = sdk_wallet_.UserWallet.decryptSecretKey(this.wallet.toJSON(), this.password);
        const address = secretKey.generatePublicKey().toAddress().bech32();
        return address;
    }
    async signMessage(message) {
        const secretKey = sdk_wallet_.UserWallet.decryptSecretKey(this.wallet.toJSON(), this.password);
        const secretKeyHex = secretKey.hex();
        const signMessage = new sdk_core_.SignableMessage({
            message: Buffer.from(message)
        });
        const signer = new sdk_wallet_.UserSigner(sdk_wallet_.UserSecretKey.fromString(secretKeyHex));
        const signature = await signer.sign(signMessage.serializeForSigning());
        return {
            signature: signature.toString("hex")
        };
    }
    async signTransaction(transaction) {
        const secretKey = sdk_wallet_.UserWallet.decryptSecretKey(this.wallet.toJSON(), this.password);
        const secretKeyHex = secretKey.hex();
        const signTransaction = sdk_core_.Transaction.fromPlainObject(transaction);
        const signer = new sdk_wallet_.UserSigner(sdk_wallet_.UserSecretKey.fromString(secretKeyHex));
        const signature = await signer.sign(signTransaction.serializeForSigning());
        return {
            signature: signature.toString("hex")
        };
    }
    async signTransactions(transactions) {
        const secretKey = sdk_wallet_.UserWallet.decryptSecretKey(this.wallet.toJSON(), this.password);
        const secretKeyHex = secretKey.hex();
        const signatures = await Promise.all(transactions.map(async (transaction)=>{
            const signTransaction = sdk_core_.Transaction.fromPlainObject(transaction);
            const signer = new sdk_wallet_.UserSigner(sdk_wallet_.UserSecretKey.fromString(secretKeyHex));
            const signature = await signer.sign(signTransaction.serializeForSigning());
            return {
                signature: signature.toString("hex")
            };
        }));
        return {
            signatures
        };
    }
};

;// CONCATENATED MODULE: ./src/utils/MultiversxWalletUtil.ts

let wallet1;
let wallet2;
let multiversxWallets;
let multiversxAddresses;
let address1;
let address2;
/**
 * Utilities
 */ async function createOrRestoreMultiversxWallet() {
    const mnemonic1 = localStorage.getItem("MULTIVERSX_MNEMONIC_1");
    const mnemonic2 = localStorage.getItem("MULTIVERSX_MNEMONIC_2");
    if (mnemonic1 && mnemonic2) {
        wallet1 = await MultiversxLib.init({
            mnemonic: mnemonic1
        });
        wallet2 = await MultiversxLib.init({
            mnemonic: mnemonic2
        });
    } else {
        wallet1 = await MultiversxLib.init({});
        wallet2 = await MultiversxLib.init({});
        // Don't store mnemonic in local storage in a production project!
        localStorage.setItem("MULTIVERSX_MNEMONIC_1", wallet1.getMnemonic());
        localStorage.setItem("MULTIVERSX_MNEMONIC_2", wallet2.getMnemonic());
    }
    address1 = await wallet1.getAddress();
    address2 = await wallet2.getAddress();
    multiversxWallets = {
        [address1]: wallet1,
        [address2]: wallet2
    };
    multiversxAddresses = Object.keys(multiversxWallets);
    return {
        multiversxWallets,
        multiversxAddresses
    };
}


/***/ }),

/***/ 7369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fs": () => (/* binding */ createOrRestoreSolanaWallet),
  "zS": () => (/* binding */ solanaAddresses),
  "b$": () => (/* binding */ solanaWallets)
});

// UNUSED EXPORTS: wallet1, wallet2

// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(7831);
// EXTERNAL MODULE: external "bs58"
var external_bs58_ = __webpack_require__(390);
var external_bs58_default = /*#__PURE__*/__webpack_require__.n(external_bs58_);
// EXTERNAL MODULE: external "tweetnacl"
var external_tweetnacl_ = __webpack_require__(1707);
var external_tweetnacl_default = /*#__PURE__*/__webpack_require__.n(external_tweetnacl_);
// EXTERNAL MODULE: external "solana-wallet"
var external_solana_wallet_ = __webpack_require__(1069);
var external_solana_wallet_default = /*#__PURE__*/__webpack_require__.n(external_solana_wallet_);
;// CONCATENATED MODULE: ./src/lib/SolanaLib.ts




/**
 * Library
 */ class SolanaLib {
    constructor(keypair){
        this.keypair = keypair;
        this.solanaWallet = new (external_solana_wallet_default())(Buffer.from(keypair.secretKey));
    }
    static init({ secretKey  }) {
        const keypair = secretKey ? web3_js_.Keypair.fromSecretKey(secretKey) : web3_js_.Keypair.generate();
        return new SolanaLib(keypair);
    }
    async getAddress() {
        return await this.keypair.publicKey.toBase58();
    }
    getSecretKey() {
        return this.keypair.secretKey.toString();
    }
    async signMessage(message) {
        const signature = external_tweetnacl_default().sign.detached(external_bs58_default().decode(message), this.keypair.secretKey);
        const bs58Signature = external_bs58_default().encode(signature);
        return {
            signature: bs58Signature
        };
    }
    async signTransaction(feePayer, recentBlockhash, instructions, partialSignatures) {
        const { signature  } = await this.solanaWallet.signTransaction(feePayer, {
            feePayer,
            instructions,
            recentBlockhash,
            partialSignatures: partialSignatures !== null && partialSignatures !== void 0 ? partialSignatures : []
        });
        return {
            signature
        };
    }
};

;// CONCATENATED MODULE: ./src/utils/SolanaWalletUtil.ts

let wallet1;
let wallet2;
let solanaWallets;
let solanaAddresses;
let address1;
let address2;
/**
 * Utilities
 */ async function createOrRestoreSolanaWallet() {
    const secretKey1 = localStorage.getItem("SOLANA_SECRET_KEY_1");
    const secretKey2 = localStorage.getItem("SOLANA_SECRET_KEY_2");
    if (secretKey1 && secretKey2) {
        const secretArray1 = Object.values(JSON.parse(secretKey1));
        const secretArray2 = Object.values(JSON.parse(secretKey2));
        wallet1 = SolanaLib.init({
            secretKey: Uint8Array.from(secretArray1)
        });
        wallet2 = SolanaLib.init({
            secretKey: Uint8Array.from(secretArray2)
        });
    } else {
        wallet1 = SolanaLib.init({});
        wallet2 = SolanaLib.init({});
        // Don't store secretKey in local storage in a production project!
        localStorage.setItem("SOLANA_SECRET_KEY_1", JSON.stringify(Array.from(wallet1.keypair.secretKey)));
        localStorage.setItem("SOLANA_SECRET_KEY_2", JSON.stringify(Array.from(wallet2.keypair.secretKey)));
    }
    address1 = await wallet1.getAddress();
    address2 = await wallet2.getAddress();
    solanaWallets = {
        [address1]: wallet1,
        [address2]: wallet2
    };
    solanaAddresses = Object.keys(solanaWallets);
    return {
        solanaWallets,
        solanaAddresses
    };
}


/***/ }),

/***/ 5974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zq": () => (/* binding */ createOrRestoreTezosWallet),
  "eA": () => (/* binding */ tezosAddresses),
  "f3": () => (/* binding */ tezosWallets)
});

// UNUSED EXPORTS: getTezosWallet, wallet1, wallet2

// EXTERNAL MODULE: external "@taquito/taquito"
var taquito_ = __webpack_require__(6176);
// EXTERNAL MODULE: external "@taquito/signer"
var signer_ = __webpack_require__(1165);
// EXTERNAL MODULE: external "@taquito/local-forging"
var local_forging_ = __webpack_require__(6650);
// EXTERNAL MODULE: external "mnemonic-keyring"
var external_mnemonic_keyring_ = __webpack_require__(5048);
var external_mnemonic_keyring_default = /*#__PURE__*/__webpack_require__.n(external_mnemonic_keyring_);
;// CONCATENATED MODULE: ./src/lib/TezosLib.ts




/**
 * Constants
 */ const DEFAULT_PATH = "m/44'/1729'/0'/0'";
const DEFAULT_CURVE = "ed25519";
/**
 * Library
 */ class TezosLib {
    constructor(tezos, mnemonic, signer, secretKey, publicKey, address, curve){
        this.tezos = tezos;
        this.mnemonic = mnemonic;
        this.signer = signer;
        this.secretKey = secretKey;
        this.publicKey = publicKey;
        this.address = address;
        this.curve = curve;
    }
    static async init({ mnemonic , path , curve  }) {
        const params = {
            mnemonic: mnemonic !== null && mnemonic !== void 0 ? mnemonic : external_mnemonic_keyring_default().generateMnemonic(),
            derivationPath: path !== null && path !== void 0 ? path : DEFAULT_PATH,
            curve: curve !== null && curve !== void 0 ? curve : DEFAULT_CURVE
        };
        const Tezos = new taquito_.TezosToolkit("https://mainnet.api.tez.ie");
        const signer = signer_.InMemorySigner.fromMnemonic(params);
        Tezos.setSignerProvider(signer);
        const secretKey = await signer.secretKey();
        const publicKey = await signer.publicKey();
        const address = await signer.publicKeyHash();
        return new TezosLib(Tezos, params.mnemonic, signer, secretKey, publicKey, address, params.curve);
    }
    getMnemonic() {
        return this.mnemonic;
    }
    getPublicKey() {
        return this.publicKey;
    }
    getCurve() {
        return this.curve;
    }
    getAddress() {
        return this.address;
    }
    async signTransaction(transaction) {
        const prepared = await this.tezos.prepare.batch(transaction.map((tx)=>({
                amount: tx.amount,
                to: tx.destination,
                kind: tx.kind,
                mutez: true
            })
        ));
        const forged = await local_forging_.localForger.forge(prepared.opOb);
        const tx1 = await this.signer.sign(forged, new Uint8Array([
            3
        ]));
        const hash = await this.tezos.rpc.injectOperation(tx1.sbytes);
        return hash;
    }
    async signPayload(payload) {
        return await this.signer.sign(payload);
    }
};

;// CONCATENATED MODULE: ./src/utils/TezosWalletUtil.ts

let wallet1;
let wallet2;
let tezosWallets;
let tezosAddresses;
let address1;
let address2;
/**
 * Utilities
 */ function getTezosWallet(address) {
    let wallet = Object.entries(tezosWallets).find(([walletAddress, _])=>{
        return address === walletAddress;
    });
    return wallet === null || wallet === void 0 ? void 0 : wallet[1];
}
async function createOrRestoreTezosWallet() {
    const mnemonic1 = localStorage.getItem("TEZOS_MNEMONIC_1");
    const mnemonic2 = localStorage.getItem("TEZOS_MNEMONIC_2");
    if (mnemonic1 && mnemonic2) {
        wallet1 = await TezosLib.init({
            mnemonic: mnemonic1
        });
        wallet2 = await TezosLib.init({
            mnemonic: mnemonic2
        });
    } else {
        wallet1 = await TezosLib.init({});
        wallet2 = await TezosLib.init({});
        // Don't store mnemonic in local storage in a production project!
        localStorage.setItem("TEZOS_MNEMONIC_1", wallet1.getMnemonic());
        localStorage.setItem("TEZOS_MNEMONIC_2", wallet2.getMnemonic());
    }
    address1 = wallet1.getAddress();
    address2 = wallet2.getAddress();
    tezosWallets = {
        [address1]: wallet1,
        [address2]: wallet2
    };
    tezosAddresses = Object.keys(tezosWallets);
    return {
        tezosWallets,
        tezosAddresses
    };
}


/***/ }),

/***/ 6787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mR": () => (/* binding */ createOrRestoreTronWallet),
  "kf": () => (/* binding */ tronAddresses),
  "uj": () => (/* binding */ tronWallets)
});

// UNUSED EXPORTS: tronWeb1, tronWeb2

// EXTERNAL MODULE: external "tronweb"
var external_tronweb_ = __webpack_require__(3643);
var external_tronweb_default = /*#__PURE__*/__webpack_require__.n(external_tronweb_);
;// CONCATENATED MODULE: ./src/lib/TronLib.ts
// @ts-ignore

/**
 * Library
 */ class TronLib {
    constructor(privateKey){
        this.privateKey = privateKey;
        this.tronWeb = new (external_tronweb_default())({
            // Nile TestNet, if you want to use in MainNet, change the fullHost to 'https://api.trongrid.io', or use tronWeb.setFullNode
            fullHost: "https://nile.trongrid.io/",
            privateKey: privateKey
        });
    }
    static async init({ privateKey  }) {
        if (!privateKey) {
            const account = external_tronweb_default().utils.accounts.generateAccount();
            return new TronLib(account.privateKey);
        } else {
            return new TronLib(privateKey);
        }
    }
    getAddress() {
        return this.tronWeb.defaultAddress.base58;
    }
    createAccount() {
        return this.tronWeb.createAccount();
    }
    setFullNode(node) {
        return this.tronWeb.setFullNode(node);
    }
    async signMessage(message) {
        const signedtxn = await this.tronWeb.trx.signMessageV2(message);
        return signedtxn;
    }
    async signTransaction(transaction) {
        const signedtxn = await this.tronWeb.trx.sign(transaction.transaction);
        return signedtxn;
    }
};

;// CONCATENATED MODULE: ./src/utils/TronWalletUtil.ts

let tronWeb1;
let tronWeb2;
let tronWallets;
let tronAddresses;
let address1;
let address2;
/**
 * Utilities
 */ async function createOrRestoreTronWallet() {
    const privateKey1 = localStorage.getItem("TRON_PrivateKey_1");
    const privateKey2 = localStorage.getItem("TRON_PrivateKey_2");
    if (privateKey1 && privateKey2) {
        tronWeb1 = await TronLib.init({
            privateKey: privateKey1
        });
        tronWeb2 = await TronLib.init({
            privateKey: privateKey2
        });
    } else {
        tronWeb1 = await TronLib.init({
            privateKey: ""
        });
        tronWeb2 = await TronLib.init({
            privateKey: ""
        });
        // Don't store privateKey in local storage in a production project!
        localStorage.setItem("TRON_PrivateKey_1", tronWeb1.privateKey);
        localStorage.setItem("TRON_PrivateKey_2", tronWeb2.privateKey);
    }
    address1 = tronWeb1.getAddress();
    address2 = tronWeb2.getAddress();
    tronWallets = {
        [address1]: tronWeb1,
        [address2]: tronWeb2
    };
    tronAddresses = Object.keys(tronWallets);
    return {
        tronWallets,
        tronAddresses
    };
}


/***/ })

};
;