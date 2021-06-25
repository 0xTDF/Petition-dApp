const Migrations = artifacts.require("Migrations");
const petition = artifacts.require("petition");


module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(petition);
  
};
