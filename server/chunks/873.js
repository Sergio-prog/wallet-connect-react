"use strict";
exports.id = 873;
exports.ids = [873];
exports.modules = {

/***/ 4798:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q4": () => (/* binding */ NearWallet)
/* harmony export */ });
/* unused harmony exports MessagePayload, payloadSchema */
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7606);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(132);
/* harmony import */ var _data_NEARData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5519);
/* harmony import */ var borsh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7783);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([borsh__WEBPACK_IMPORTED_MODULE_3__]);
borsh__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const MAX_ACCOUNTS = 2;
class MessagePayload {
    constructor(data){
        // The tag's value is a hardcoded value as per
        // defined in the NEP [NEP413](https://github.com/near/NEPs/blob/master/neps/nep-0413.md)
        this.tag = 2147484061;
        this.message = data.message;
        this.nonce = data.nonce;
        this.recipient = data.recipient;
        if (data.callbackUrl) {
            this.callbackUrl = data.callbackUrl;
        }
    }
}
const payloadSchema = {
    struct: {
        tag: "u32",
        message: "string",
        nonce: {
            array: {
                type: "u8",
                len: 32
            }
        },
        recipient: "string",
        callbackUrl: {
            option: "string"
        }
    }
};
class NearWallet {
    static async init(networkId) {
        const keyStore = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.keyStores.BrowserLocalStorageKeyStore();
        const accounts = await keyStore.getAccounts(networkId);
        for(let i = 0; i < Math.max(MAX_ACCOUNTS - accounts.length, 0); i += 1){
            const { accountId , keyPair  } = await NearWallet.createDevAccount();
            await keyStore.setKey(networkId, accountId, keyPair);
        }
        return new NearWallet(networkId, keyStore);
    }
    static async createDevAccount() {
        const keyPair = near_api_js__WEBPACK_IMPORTED_MODULE_0__.utils.KeyPair.fromRandom("ed25519");
        const randomNumber = Math.floor(Math.random() * (99999999999999 - 10000000000000) + 10000000000000);
        const accountId = `dev-${Date.now()}-${randomNumber}`;
        const publicKey = keyPair.getPublicKey().toString();
        fetch(`https://helper.testnet.near.org/account`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                newAccountId: accountId,
                newAccountPublicKey: publicKey
            })
        }).catch((error)=>{
            console.error("Failed to create NEAR dev account: ", error);
        });
        return {
            accountId,
            keyPair
        };
    }
    constructor(networkId, keyStore){
        this.networkId = networkId;
        this.keyStore = keyStore;
    }
    getKeyStore() {
        return this.keyStore;
    }
    // Retrieve all imported accounts from wallet.
    async getAllAccounts() {
        const accountIds = await this.keyStore.getAccounts(this.networkId);
        return Promise.all(accountIds.map(async (accountId)=>{
            const keyPair = await this.keyStore.getKey(this.networkId, accountId);
            return {
                accountId,
                publicKey: keyPair.getPublicKey().toString()
            };
        }));
    }
    isAccountsValid(topic, accounts) {
        const session = _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_1__/* .web3wallet.engine.signClient.session.get */ .zF.engine.signClient.session.get(topic);
        const validAccountIds = session.namespaces.near.accounts.map((accountId)=>{
            return accountId.split(":")[2];
        });
        return accounts.every(({ accountId  })=>{
            return validAccountIds.includes(accountId);
        });
    }
    isTransactionsValid(topic, transactions) {
        const accounts = transactions.map(({ signerId  })=>({
                accountId: signerId
            })
        );
        return this.isAccountsValid(topic, accounts);
    }
    async createTransactions({ chainId , transactions  }) {
        const provider = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.providers.JsonRpcProvider(_data_NEARData__WEBPACK_IMPORTED_MODULE_2__/* .NEAR_TEST_CHAINS */ .nG[chainId].rpc);
        const txs = [];
        const [block, accounts] = await Promise.all([
            provider.block({
                finality: "final"
            }),
            this.getAllAccounts()
        ]);
        for(let i = 0; i < transactions.length; i += 1){
            const transaction = transactions[i];
            const account = accounts.find((x)=>x.accountId === transaction.signerId
            );
            if (!account) {
                throw new Error("Invalid signer id");
            }
            const accessKey = await provider.query({
                request_type: "view_access_key",
                finality: "final",
                account_id: transaction.signerId,
                public_key: account.publicKey
            });
            txs.push(near_api_js__WEBPACK_IMPORTED_MODULE_0__.transactions.createTransaction(transaction.signerId, near_api_js__WEBPACK_IMPORTED_MODULE_0__.utils.PublicKey.from(account.publicKey), transaction.receiverId, accessKey.nonce + i + 1, transaction.actions, near_api_js__WEBPACK_IMPORTED_MODULE_0__.utils.serialize.base_decode(block.header.hash)));
        }
        return txs;
    }
    async getAccounts({ topic  }) {
        const session = _utils_WalletConnectUtil__WEBPACK_IMPORTED_MODULE_1__/* .web3wallet.engine.signClient.session.get */ .zF.engine.signClient.session.get(topic);
        return Promise.all(session.namespaces.near.accounts.map(async (account)=>{
            const accountId = account.split(":")[2];
            const keyPair = await this.keyStore.getKey(this.networkId, accountId);
            return {
                accountId,
                publicKey: keyPair.getPublicKey().toString()
            };
        }));
    }
    async signIn({ chainId , topic , permission , accounts  }) {
        if (!this.isAccountsValid(topic, accounts)) {
            throw new Error("Invalid accounts");
        }
        const result = [];
        for(let i = 0; i < accounts.length; i += 1){
            const account = accounts[i];
            try {
                const [transaction] = await this.createTransactions({
                    chainId,
                    transactions: [
                        {
                            signerId: account.accountId,
                            receiverId: account.accountId,
                            actions: [
                                near_api_js__WEBPACK_IMPORTED_MODULE_0__.transactions.addKey(near_api_js__WEBPACK_IMPORTED_MODULE_0__.utils.PublicKey.from(account.publicKey), near_api_js__WEBPACK_IMPORTED_MODULE_0__.transactions.functionCallAccessKey(permission.receiverId, permission.methodNames, permission.allowance))
                            ]
                        }
                    ]
                });
                await this.signAndSendTransaction({
                    chainId,
                    topic,
                    transaction
                });
                result.push(account);
            } catch (err) {
                console.log(`Failed to create FunctionCall access key for ${account.accountId}`);
                console.error(err);
            }
        }
        return result;
    }
    async signOut({ chainId , topic , accounts  }) {
        if (!this.isAccountsValid(topic, accounts)) {
            throw new Error("Invalid accounts");
        }
        const result = [];
        for(let i = 0; i < accounts.length; i += 1){
            const account = accounts[i];
            try {
                const [transaction] = await this.createTransactions({
                    chainId,
                    transactions: [
                        {
                            signerId: account.accountId,
                            receiverId: account.accountId,
                            actions: [
                                near_api_js__WEBPACK_IMPORTED_MODULE_0__.transactions.deleteKey(near_api_js__WEBPACK_IMPORTED_MODULE_0__.utils.PublicKey.from(account.publicKey))
                            ]
                        }
                    ]
                });
                await this.signAndSendTransaction({
                    chainId,
                    topic,
                    transaction
                });
            } catch (err) {
                console.log(`Failed to remove FunctionCall access key for ${account.accountId}`);
                console.error(err);
                result.push(account);
            }
        }
        return result;
    }
    async signTransactions({ chainId , topic , transactions  }) {
        const networkId = chainId.split(":")[1];
        const signer = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.InMemorySigner(this.keyStore);
        const signedTxs = [];
        if (!this.isTransactionsValid(topic, transactions)) {
            throw new Error("Invalid transactions");
        }
        for(let i = 0; i < transactions.length; i += 1){
            const transaction = transactions[i];
            const [, signedTx] = await near_api_js__WEBPACK_IMPORTED_MODULE_0__.transactions.signTransaction(transaction, signer, transaction.signerId, networkId);
            signedTxs.push(signedTx);
        }
        return signedTxs;
    }
    async signAndSendTransaction({ chainId , topic , transaction  }) {
        const provider = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.providers.JsonRpcProvider(_data_NEARData__WEBPACK_IMPORTED_MODULE_2__/* .NEAR_TEST_CHAINS */ .nG[chainId].rpc);
        const [signedTx] = await this.signTransactions({
            chainId,
            topic,
            transactions: [
                transaction
            ]
        });
        return provider.sendTransaction(signedTx);
    }
    async signAndSendTransactions({ chainId , topic , transactions  }) {
        const provider = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.providers.JsonRpcProvider(_data_NEARData__WEBPACK_IMPORTED_MODULE_2__/* .NEAR_TEST_CHAINS */ .nG[chainId].rpc);
        const signedTxs = await this.signTransactions({
            chainId,
            topic,
            transactions
        });
        const results = [];
        for(let i = 0; i < signedTxs.length; i += 1){
            const signedTx = signedTxs[i];
            results.push(await provider.sendTransaction(signedTx));
        }
        return results;
    }
    async signMessage({ chainId , messageParams  }) {
        const { message , nonce , recipient , callbackUrl , state , accountId  } = messageParams;
        const nonceArray = Buffer.from(nonce);
        if (nonceArray.length !== 32) {
            throw Error("Expected nonce to be a 32 bytes buffer");
        }
        const accounts = await this.getAllAccounts();
        const account = accounts.find((acc)=>acc.accountId === accountId
        );
        // If no accountId is provided in params default to the first accountId in accounts.
        // in a real wallet it would default to the `active/selected` account
        // this is because we should be able to use `signMessage` without `signIn`.
        const accId = account ? account.accountId : accounts[0].accountId;
        const signer = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.InMemorySigner(this.getKeyStore());
        const networkId = chainId.split(":")[1];
        // Create the message payload and sign it
        const payload = new MessagePayload({
            message,
            nonce: nonceArray,
            recipient,
            callbackUrl
        });
        const encodedPayload = (0,borsh__WEBPACK_IMPORTED_MODULE_3__.serialize)(payloadSchema, payload);
        const signed = await signer.signMessage(encodedPayload, accId, networkId);
        return {
            accountId: accId,
            publicKey: signed.publicKey.toString(),
            signature: Buffer.from(signed.signature).toString("base64")
        };
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9873:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Md": () => (/* binding */ nearWallet),
/* harmony export */   "Vl": () => (/* binding */ createOrRestoreNearWallet),
/* harmony export */   "v3": () => (/* binding */ nearAddresses)
/* harmony export */ });
/* harmony import */ var _lib_NearLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4798);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_NearLib__WEBPACK_IMPORTED_MODULE_0__]);
_lib_NearLib__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

let nearAddresses;
let nearWallet;
/**
 * Utilities
 */ async function createOrRestoreNearWallet() {
    // NEAR only supports dev accounts in testnet.
    const wallet = await _lib_NearLib__WEBPACK_IMPORTED_MODULE_0__/* .NearWallet.init */ .Q4.init("testnet");
    const accounts = await wallet.getAllAccounts();
    nearAddresses = accounts.map((x)=>x.accountId
    );
    nearWallet = wallet;
    return {
        nearWallet,
        nearAddresses
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;