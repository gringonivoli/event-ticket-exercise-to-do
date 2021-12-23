import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { DefaultEventTickets } from "../typechain";

describe("DefaultEventTickets Contract", function () {
    let DefaultEventTickets;
    let defaultEventTickets: DefaultEventTickets;
    let owner: SignerWithAddress;
    let addr1: SignerWithAddress;
    let addr2: SignerWithAddress;
    let addrs: SignerWithAddress[];

    beforeEach(async () => {
        DefaultEventTickets = await ethers.getContractFactory("DefaultEventTickets");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        defaultEventTickets = (await DefaultEventTickets.deploy()) as DefaultEventTickets;
    });

    it('should be deployed', () => {
        expect(defaultEventTickets).to.be.not.null;
    })

});