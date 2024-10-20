import { ethers } from "hardhat";

async function main() {
  const ERC20_ADDRESS = "0xcc5F0c56130c45d238BdeAC6e704dCc90a791e3C";
  const EX14_CONTRACT_ADDRESS = "0xeE600E31727c566Ae790cB6C7db879034463D8FD";
  
  const Ex14Solution = await ethers.getContractFactory("Ex14Solution");
  const Ex14SolutionContract = await Ex14Solution.deploy(ERC20_ADDRESS, EX14_CONTRACT_ADDRESS);

  await Ex14SolutionContract.waitForDeployment();
  console.log(
    `Ex14SolutionContract deployed at: ${(Ex14SolutionContract as any).target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
