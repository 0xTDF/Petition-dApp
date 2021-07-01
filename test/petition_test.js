const petition = artifacts.require("petition");

contract('petition', async() => {

    it('Should deploy smart contract', async () => {
        const instance = await petition.deployed();
        assert(instance.address !== '');
    });

    it('Should return number of signitures as 0', async() => {
        const instance = await petition.deployed();
        const result = await instance.getNumberOfSignitures();
        assert(result.toNumber() == 0);
    });

});