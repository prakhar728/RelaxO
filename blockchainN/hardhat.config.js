require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

const PRIVATE_KEY = process.env.PRIVATE_KEY
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
        chainId: 31337
    },
    Hyperspace: {
        chainId: 3141,
        url: "https://api.hyperspace.node.glif.io/rpc/v1",
        accounts: [PRIVATE_KEY],
        timeout: 1000000
    },
    FilecoinMainnet: {
        chainId: 314,
        url: "https://api.node.glif.io",
        accounts: [PRIVATE_KEY]
    },
    Mumbai: {
        chainId: 80001,
        url: "https://matic-mumbai.chainstacklabs.com",
        accounts: [PRIVATE_KEY]
    },
    liberty: {
        url: "https://liberty20.shardeum.org",
        chainId: 8081,
        accounts:[PRIVATE_KEY]
    },
    mantle: {
        url: "https://rpc.testnet.mantle.xyz",
        chainId: 5001,
        accounts: [PRIVATE_KEY]
    }
}
};
