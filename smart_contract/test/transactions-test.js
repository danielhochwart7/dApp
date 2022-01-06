const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transactions", function () {
  it("Should return 0 transactions for newly created contracts", async function () {
    const Transactions = await ethers.getContractFactory("Transactions");
    const transactions = await Transactions.deploy();
    await transactions.deployed();

    expect(await transactions.getTransactionCount()).to.equal(0);
  });
});
