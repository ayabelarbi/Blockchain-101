import { EX9_CONTRACT_ADDRESS } from "../constants/contract.js";
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
        name: "_lazyStudent",
        type: "address",
      },
    ],
    name: "aLazyStudent",
    type: "event",
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
        name: "_aValueToInput",
        type: "uint256",
      },
    ],
    name: "collectYourPoints",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_aValueToInput",
        type: "uint256",
      },
    ],
    name: "collectYourPointsAgain",
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
]

async function main() {
  const contract = new web3.eth.Contract(abi, EX9_CONTRACT_ADDRESS);
  const me = account[0].address;

  try {
    const collectYourPoints = await contract.methods
      .collectYourPoints(982738)
      .send({ from: me });
    console.log("collectYourPoints:", collectYourPoints);
  } catch (error) {
    console.error("Error in collectYourPoints:", error);
  }

  try {
    const collectYourPointsAgain = await contract.methods
      .collectYourPointsAgain(972738)
      .send({ from: me });
    console.log("collectYourPointsAgain:", collectYourPointsAgain);
  } catch (error) {
    console.error("Error in collectYourPointsAgain:", error);
  }
}

main();
