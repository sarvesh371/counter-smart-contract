import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.23',
  },
  networks: {
    // for mainnet
    // 'base-mainnet': {
    //   url: 'https://mainnet.base.org',
    //   accounts: [process.env.WALLET_KEY as string],
    //   gasPrice: 1000000000,
    // },
    // for testnet
    'base-sepolia': {
      url: 'https://sepolia.base.org',
      accounts: ["ACCOUNT_PRIVATE_KEY"],
      gasPrice: 1000000000,
    },
    // for local dev environment
    // 'base-local': {
    //   url: 'http://localhost:8545',
    //   accounts: [""],
    //   gasPrice: 1000000000,
    // },
  },
  etherscan: {
    apiKey: {
     "base-sepolia": "BASESCAN_API_KEY"
    },
    customChains: [
      {
        network: "base-sepolia",
        chainId: 84532,
        urls: {
         apiURL: "https://api-sepolia.basescan.org/api",
         browserURL: "https://sepolia.basescan.org"
        }
      }
    ]
  },
  defaultNetwork: 'hardhat',
};

export default config;