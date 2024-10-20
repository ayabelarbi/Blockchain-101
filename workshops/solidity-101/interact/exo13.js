import { EX13_CONTRACT_ADDRESS } from "../constants/contract.js";
import { web3, account } from "./web3.js";

const abi = [
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
      "name": "aValueToCompare",
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
          "internalType": "uint256",
          "name": "_valueToCompute",
          "type": "uint256"
        }
      ],
      "name": "computeAndSubmit",
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
    }
]

async function exo13() {
    const address = EX13_CONTRACT_ADDRESS;
    const contract = new web3.eth.Contract(abi, address);
    const me = account[0].address;
    
    const compute = await contract.methods.computeAndSubmit(148).send({ from: me });
    console.log(compute);
}

exo13();