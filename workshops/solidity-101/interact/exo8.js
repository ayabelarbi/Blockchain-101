import { EX8_CONTRACT_ADDRESS } from "../constants/contract.js";
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
        name: "objectNumber",
        type: "uint256",
      },
    ],
    name: "createdAnObject",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_objectNumber",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "changeObjectName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_objectNumber",
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
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "createObject",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "studentObjects",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "bool",
        name: "hasBeenModified",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_objectNumber",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

async function main() {
  const contractAddress = EX8_CONTRACT_ADDRESS;
  const contract = new web3.eth.Contract(abi, contractAddress);
  const me = account[0].address;

  const createObject = await contract.methods
    .createObject("My Object")
    .send({ from: me });
  console.log("object created", createObject);
  const events = await contract.getPastEvents("createdAnObject", {
    fromBlock: "latest",
  });
  const objectNumber = events[0].returnValues.objectNumber;
  console.log("Event", events);

  const changeObjectName = await contract.methods
    .changeObjectName(objectNumber, "My Object changed name")
    .send({ from: me });
  console.log("object name changed", changeObjectName);
  const TEACHER_ADDRESS = "0x34B61572D0aFA11C1Ae1078dfaC5230CAD9b8e2C";

 
  const transfer = await contract.methods
    .transfer(objectNumber, TEACHER_ADDRESS)
    .send({ from: me });
  console.log("object transferred", transfer);

  const claimPoints = await contract.methods.claimPoints(objectNumber).send({ from: me });
  console.log("points claimed", claimPoints);
}

main();
