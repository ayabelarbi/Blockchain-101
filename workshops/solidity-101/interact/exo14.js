import { web3, account } from "./web3.js";

const abi = [
  {
    inputs: [
      {
        internalType: "contract ERC20TD",
        name: "_TDERC20",
        type: "address",
      },
      {
        internalType: "contract Ex14",
        name: "_ex14",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "TDERC20",
    outputs: [
      {
        internalType: "contract ERC20TD",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "completeWorkshop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "completeWorkshopInterface",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ex14",
    outputs: [
      {
        internalType: "contract Ex14",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "iex14Solution",
    outputs: [
      {
        internalType: "contract IEx14Solution",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

// SAME FOR EXO 15
async function exo14() {
  const EX14SOlution = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const contract = new web3.eth.Contract(abi, EX14SOlution);

  const me = account[0].address;

  const result = await contract.methods
    .completeWorkshopInterface()
    .send({ from: me });
  console.log(result);
}

exo14();
