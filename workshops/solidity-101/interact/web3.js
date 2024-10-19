import { Web3 } from "web3";
import dotenv from "dotenv";
dotenv.config();

export const web3 = new Web3(
  `https://eth-sepolia.g.alchemy.com/v2/${TOKEN_ALCHEMY}`
);

if (`${PRIVATE_KEY}`) {
  console.error("Private key not found in environment variables");
  process.exit(1);
}

export const account = web3.eth.accounts.wallet.add(`${PRIVATE_KEY}`);