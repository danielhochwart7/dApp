require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/2WoulqyNPJd3Mo9olM94HsLQ02t0iweJ",
      accounts: ["364d6126a108aa223533668615617d61396072308919bfee48de73d2cde75840"]
    }
  }
}