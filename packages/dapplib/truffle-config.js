require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan razor sister smile hope clog slot gasp'; 
let testAccounts = [
"0xb1c15867e2fa0dd0c02a5cf0453e8bcd73ab6c540cdb4c6d63ff156c15fbab5a",
"0xe6cbf40b92b0a885f8c303613cf96899f7cc468b7cd0ff83c0cdc07b76f7f863",
"0x6a4bc7f9fd07239817b607fab921b5410a2842f94a6fdbba08cc412debbb2c44",
"0xfc58f0005abd351437e239c67293bed692e9a272c0bca71e5cd98442a29f21f0",
"0x23ed50341b532a7c56661b81eb6e3b9576abfba867a9164ba07e29c382feeeef",
"0xb991fb6d8f2607fe37f04ef46c1fe1c4557c2863c8c1bff46ddad265bc46b869",
"0x6e8b003aacc743d762a2201f8b609b30bb7919a9b9746569b7325ab621924a23",
"0x50a43e2f7ba0d84a4ba3c231eb05f2771eda6ea90f738d507658fe1cbe18730a",
"0x3d953b4ad96b970c6ee94c112b8bcd02380cb69f4c2149db31ad8d2c10832d43",
"0x4d3c924ff73beb6e628abc428a63211c1b8056b1acc8a16e34b4e263d2996323"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


