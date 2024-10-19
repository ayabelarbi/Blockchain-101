import { EX6_CONTRACT_ADDRESS } from "../constants/contract.js";
import { web3, account } from "./web3.js";

const abi =[
  {
    "inputs": [
      {
        "internalType": "contract ERC20TD",
        "name": "_TDERC20",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "erc20Address",
        "type": "address"
      }
    ],
    "name": "constructedCorrectly",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "duplicatePrivateValueInPublic",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "exerciseWasStarted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "hasCompletedExercise",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nextValueStoreRank",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "publicValues",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[20]",
        "name": "_randomValuesStore",
        "type": "uint256[20]"
      }
    ],
    "name": "setRandomValueStore",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_privateValue",
        "type": "uint256"
      }
    ],
    "name": "showYouKnowPrivateValue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "startExercise",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

async function main() {
  const contractAddress = EX6_CONTRACT_ADDRESS;
  const contract = new web3.eth.Contract(abi, contractAddress);

  const startExercise = await contract.methods.startExercise().send({from: account[0].address});
  console.log("Start exercise", startExercise);

  await contract.methods.duplicatePrivateValueInPublic().send({ from: account[0].address });
  console.log('Private value duplicated in public for account:', account[0].address);

  const publicValue = await contract.methods.publicValues(account[0].address).call();
  console.log('Public value for account:', publicValue);

  const privateValue = BigInt(publicValue) - BigInt(85);
  await contract.methods.showYouKnowPrivateValue(privateValue).send({ from: account[0].address });
  console.log('Private value verified for account:', account[0].address);

}

main();
