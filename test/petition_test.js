const petition = artifacts.require("petition");

contract('petition', (accounts) => {

    before(async () => {
        instance = await petition.deployed();
    });


    it('Should return number of signitures as 0', async() => {
        const result = await instance.getNumberOfSignitures();
        assert(result.toNumber() == 0);
    });

    it('Should be no completed kyc addresses', async() => {
        const result = await instance.checkKyc();
        console.log(result);
        assert(!result);

    });

    it('Should add an address to the kyc mapping', async() => {
        instance.addKyc(accounts[0]);
        const result = await instance.checkKyc();
        console.log(result);
        assert(result);
    });

    !it('Should sign the petition', async() => {
        instance.sign();
        const result = await instance.checkIfSigned();
        // console.log(result);
        assert(result);
    });

});