import { EX2_CONTRACT_ADDRESS } from "../constants/contract.js";
import { web3, account } from "./web3.js";

async function main() {
  const contractAddress = EX2_CONTRACT_ADDRESS;

  const result1 = await web3.eth.sendTransaction({
    from: account[0].address,
    to: contractAddress,
    value: web3.utils.toWei("0.01", "ether"),
  });

  console.log("result1", result1);
}

main();
