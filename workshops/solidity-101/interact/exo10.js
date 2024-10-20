import { EX10_CONTRACT_ADDRESS } from "../constants/contract.js";
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "myVariable",
        type: "uint256",
      },
    ],
    name: "showPrivateVariableInEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "showUserRank",
    type: "event",
  },
  {
    inputs: [],
    name: "assignRank",
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
    name: "exerciseWasStarted",
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
    name: "nextValueStoreRank",
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
        internalType: "uint256[20]",
        name: "_randomValuesStore",
        type: "uint256[20]",
      },
    ],
    name: "setRandomValueStore",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_privateValue",
        type: "uint256",
      },
    ],
    name: "showYouKnowPrivateValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

async function exo10() {
  const contract = new web3.eth.Contract(abi, EX10_CONTRACT_ADDRESS);
  const me = account[0].address;

  const assignRank = await contract.methods.assignRank().send({ from: me });
  console.log("assignRank:", assignRank);
  const event = await contract.getPastEvents("showUserRank", {
    fromBlock: "latest",
    toBlock: "latest",
  });
  console.log("event:", event);

  //   _randomValuesStore[0] = 1159,    _randomValuesStore[1] = 8984,    _randomValuesStore[2] = 3195
  const showYouKnowPrivateValue = await contract.methods
    .showYouKnowPrivateValue(3195)
    .call({ from: me });
  console.log("showYouKnowPrivateValue:", showYouKnowPrivateValue);
}

exo10();
