import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const usdcAddress = "0x6145974f28645F58767D799E858a4A90724926e4";

const deployUSDCContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;
  const initialSupply = 1000000000000000;

  await deploy("USDC", {
    from: deployer,
    args: [initialSupply],
    log: true,
    autoMine: true,
  });

  const usdcContract = await hre.ethers.getContract<Contract>("USDC", deployer);
  console.log("USDC contract address:", await usdcContract.getAddress());
};

const deployConConfianzaContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("ConConfianza", {
    from: deployer,
    args: [usdcAddress],
    log: true,
    autoMine: true,
  });

  const conConfianzaContract = await hre.ethers.getContract<Contract>("ConConfianza", deployer);
  console.log("ConConfianza contract address:", await conConfianzaContract.getAddress());
};

// export default deployUSDCContract;
export default deployConConfianzaContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployUSDCContract.tags = ["USDC"];
deployConConfianzaContract.tags = ["ConConfianza"];
