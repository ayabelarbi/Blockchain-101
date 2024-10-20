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
    name: "aValueToInput",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_valueToInput",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_newValue",
        type: "uint256",
      },
    ],
    name: "askForPoints",
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

async function exo12() {
  const EX12_CONTRACT_ADDRESS = "0x5F4b16E7eE338E04736D9E105ee5Fe1780daB97f";
  const me = account[0].address;
  const contract = new web3.eth.Contract(abi, EX12_CONTRACT_ADDRESS);

  console.log("Contract Address:", EX12_CONTRACT_ADDRESS);
  console.log("Caller Address:", me);

  try {
    console.log("Asking for points");
    const pointOK = await contract.methods.askForPoints(0, 9201).send({ from: me });
    console.log("point done", pointOK);
  } catch (error) {
    console.error("Error in askForPoints:", error);
  }
}

exo12();
