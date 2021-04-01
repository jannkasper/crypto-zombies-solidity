require('dotenv').config()

// Initialize HDWalletProvider
const HDWalletProvider = require("truffle-hdwallet-provider");

// Initialize LoomTruffleProvider
// const LoomTruffleProvider = require('loom-truffle-provider');

// Set your own mnemonic here
const privateKey = process.env.METAMASK_PRIVATE_KEY;

// Module exports to make this configuration available to Truffle itself
module.exports = {
    // Object with configuration for each network
    networks: {
        // Configuration for mainnet
        mainnet: {
            provider: function () {
                // Setting the provider with the Infura Rinkeby address and Token
                return new HDWalletProvider(privateKey, "https://mainnet.infura.io/v3/" + process.env.INFURA_KEY)
            },
            network_id: "1"
        },
        // Configuration for rinkeby network
        rinkeby: {
            // Special function to setup the provider
            provider: function () {
                // Setting the provider with the Infura Rinkeby address and Token
                return new HDWalletProvider(privateKey, "https://rinkeby.infura.io/v3/" + process.env.INFURA_KEY)
            },
            // Network id is 4 for Rinkeby
            network_id: 4
        },
        // Configuration for ropsten network
        ropsten: {
            // Special function to setup the provider
            provider: function () {
                // Setting the provider with the Infura Rinkeby address and Token
                return new HDWalletProvider(privateKey, "https://ropsten.infura.io/v3/" + process.env.INFURA_KEY)
            },
            // Network id is 4 for Ropsten
            network_id: 3
        },
        // loom_testnet: {
        //     provider: function() {
        //         const privateKey = process.env.LOOM_PRIVATE_KEY;
        //         const chainId = 'extdev-plasma-us1';
        //         const writeUrl = 'http://extdev-plasma-us1.dappchains.com:80/rpc';
        //         const readUrl = 'http://extdev-plasma-us1.dappchains.com:80/query';
        //         return new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey);
        //     },
        //     network_id: '9545242630824'
        // },
        test: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        }
    }
};