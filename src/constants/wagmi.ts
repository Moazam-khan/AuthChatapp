import Bnb from "../assets/TokenIcon/Bnb.png";
import Arbit from "../assets/TokenIcon/Arbit.png";
import Avalanche from "../assets/TokenIcon/Avalanche.png";
import Eth from "../assets/TokenIcon/Eth.png";
import Polygon from "../assets/TokenIcon/Polygon.png";
import { OneInchToken } from "@/types";

export const supportedChains = [
  {
    name: "Ethereum",
    chainId: 1,
    icon: Eth,
    symbol: "Eth",
  },
  {
    name: "BSC Smart Chain",
    chainId: 56,
    icon: Bnb,
    symbol: "BNB",
  },
  {
    name: "Polygon",
    chainId: 137,
    icon: Polygon,
    symbol: "MATIC",
  },
  {
    name: "Avalanche",
    chainId: 43114,
    icon: Avalanche,
    symbol: "AVAX",
  },
  {
    name: "Arbitrum",
    chainId: 42161,
    icon: Arbit,
    symbol: "ETH",
    tokenIcon: Eth,
  },
];

export const TOP_TOKENS = ["BNB", "ETH", "DAI", "USDC", "USDT", "WBTC", "WETH"];

export const defaultChainTokens: Record<number, OneInchToken> =
  supportedChains.reduce((acc: any, chain) => {
    let tokenInfo: OneInchToken = {
      name: chain.name,
      tags: ["tokens"],
      symbol: chain.symbol,
      address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      eip2612: false,
      logoURI: chain?.tokenIcon || chain.icon,
      decimals: 18,
    };

    acc[chain.chainId] = tokenInfo;
    return acc;
  }, {});

export const defaultStableCoins: Record<number, OneInchToken> = {
  1: {
    name: "Tether USD",
    tags: ["PEG:USD", "tokens"],
    symbol: "USDT",
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    eip2612: false,
    logoURI:
      "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
    decimals: 6,
  },
  56: {
    name: "Tether USD",
    tags: ["PEG:USD", "tokens"],
    symbol: "USDT",
    address: "0x55d398326f99059ff775485246999027b3197955",
    eip2612: false,
    logoURI:
      "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
    decimals: 18,
  },

  137: {
    name: "Tether USD",
    tags: ["PEG:USD", "tokens"],
    symbol: "USDT",
    address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    eip2612: false,
    logoURI:
      "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
    decimals: 6,
  },

  43114: {
    name: "TetherToken",
    tags: ["PEG:USD", "tokens"],
    symbol: "USDt",
    address: "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
    eip2612: true,
    logoURI:
      "https://tokens.1inch.io/0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7.png",
    decimals: 6,
  },

  42161: {
    name: "Tether USD",
    tags: ["PEG:USD", "tokens"],
    symbol: "USDT",
    address: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    eip2612: false,
    logoURI:
      "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
    decimals: 6,
  },
};
