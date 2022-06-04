require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food curve rice machine mistake coral light army genuine'; 
let testAccounts = [
"0x3b49150b47eab375eaae04bbd11b9726ccdf0bdff922ffd1d8c6bf495c9a5053",
"0x061cd59a306fbdbee59b01328e368512e05d2c1df613f89821b2e26275607fef",
"0x1e3b1aa495483cb2c88a91ed35db3e6c579b9de7a3d85b0bb70bef49f53ff2c2",
"0x03125cc19efe15c71c3843f5a16bc975a7ee9dbe65d0e403f9cc2ad68d78a3a4",
"0x8f6538804dbe4a304662143342e44d384a969f2dab58497350b6a0d818e7528f",
"0x3f388ec895e17a7c911f654b914439874e68b15969ca0f9db310239a126df594",
"0xd2cfb0aff5262f711f35ea97717bf174a3b3b6ce8e41f2912bb8a73d8f62adb0",
"0x25bf5aa52ce76e2b93638a49f708f47dc3d1019f4305d167f5aa4f1ef9872c59",
"0x0a57d1e09e12c1871ef3b2b8da993df24182031a708e6bd75de481b111869d29",
"0xd4e264ba3936c8eaa1f298a084456b68e4c68b43938c3e3918949a4aa44b3cb5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

