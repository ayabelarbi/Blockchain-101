import { EX3_CONTRACT_ADDRESS } from "../constants/contract.js";
import { web3, account } from "./web3.js";

const abi = [
  {
    inputs: [
      {
        internalType: "contract ERC20TD",
        name: "_TDERC20",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "erc20Address",
        type: "address",
      },
    ],
    name: "constructedCorrectly",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_studentUint",
        type: "uint256",
      },
    ],
    name: "claimPoints",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "hasCompletedExercise",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

async function main() {
  const contractAddress = EX3_CONTRACT_ADDRESS;
  const contract = new web3.eth.Contract(abi, contractAddress);

  const result = await contract.methods
    .claimPoints(180618)
    .send({ from: account[0].address });

  console.log("result", result);
}

main();
