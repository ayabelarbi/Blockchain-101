import { EX4_CONTRACT_ADDRESS } from "../constants/contract.js";
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
    inputs: [],
    name: "decrementCounter",
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
  {
    inputs: [],
    name: "incrementCounter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "resetCounter",
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
    name: "studentsCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "validateCounter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

async function main() {
  const contractAddress = EX4_CONTRACT_ADDRESS;
  const contract = new web3.eth.Contract(abi, contractAddress);

  // loop to increment the counter 3 times
  for (let i = 0; i < 3; i++) {
    await contract.methods
      .incrementCounter()
      .send({ from: account[0].address });
  }

  // loop to decrement the counter 1 times
  for (let i = 0; i < 1; i++) {
    await contract.methods
      .decrementCounter()
      .send({ from: account[0].address });
  }
  console.log(
    "Students counter",
    await contract.methods.studentsCounter(account[0].address).call()
  );

  // if counter is 5, validate the exercise, else reset the counter
  if (
    (await contract.methods.studentsCounter(account[0].address).call()) === 5
  ) {
    await contract.methods.validateCounter().send({ from: account[0].address });
  } else {
    await contract.methods.resetCounter().send({ from: account[0].address });
  }
}

main();
