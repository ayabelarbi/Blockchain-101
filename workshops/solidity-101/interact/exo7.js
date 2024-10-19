import { EX7_CONTRACT_ADDRESS } from "../constants/contract.js";
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
        name: "myVariable",
        type: "uint256",
      },
    ],
    name: "showPrivateVariableInEvent",
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
    inputs: [],
    name: "fireEvent",
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

async function main() {
  const contractAddress = EX7_CONTRACT_ADDRESS;
  const contract = new web3.eth.Contract(abi, contractAddress);

  await contract.methods.assignRank().send({ from: account[0].address });
  await contract.methods.fireEvent().send({ from: account[0].address });
  const events = await contract.getPastEvents("showPrivateVariableInEvent", {
    fromBlock: 0,
    toBlock: "latest",
  });
  console.log("Event", events);

  if (events.length > 0) {
    const lastEvent = events[events.length - 1];
    console.log("Last Event:", lastEvent);

    const privateValue =
      BigInt(lastEvent.returnValues.myVariable) -
      BigInt(32);
    console.log("Private value", privateValue);

    const result = await contract.methods.showYouKnowPrivateValue(privateValue).send({from: account[0].address})

    console.log('result todo ben', result)
  } else {
    console.log("No events found");
  }
  //

  //   const showYouKnowPrivateValue = await contract.methods
  //     .showYouKnowPrivateValue(privateValue)
  //     .send({ from: account[0].address });

  //   console.log("Show you know private value", showYouKnowPrivateValue);
}

main();
