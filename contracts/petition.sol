pragma solidity^0.7.0;

// petition smart contract

contract petition {

    address owner;
    address[] signers;

    mapping(address => bool) kycComplete;
    mapping(address => bool) hasSigned;

    constructor () {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Must be contract owner");
        _;
    }

    function addKyc (address _address) public onlyOwner {
        kycComplete[_address] = true;
    }

    function sign () public {
        require(kycComplete[msg.sender]==true, "You must complete KYC before signing.");
        require(hasSigned[msg.sender]==false, "You have already signed this petition.");
        hasSigned[msg.sender] = true;
        signers.push(msg.sender);
    }

    function getNumberOfSignitures () public view returns(uint) {
        return signers.length;
    }

}