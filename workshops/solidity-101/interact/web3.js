import { Web3 } from "web3";
import dotenv from "dotenv";
dotenv.config();

const { TOKEN_ALCHEMY, PRIVATE_KEY } = process.env;

export const web3 = new Web3(
  `https://eth-sepolia.g.alchemy.com/v2/${TOKEN_ALCHEMY}`
);

export const account = web3.eth.accounts.wallet.add(`${PRIVATE_KEY}`);