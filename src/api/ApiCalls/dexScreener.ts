import axios from "axios";

export const searchTokenPairs = async (
  fromToken: string,
  toToken: string
): Promise<any> => {
  // if fromTokem or ToToken is a native token like Eth or BNB use WETH and WBNB
  if (fromToken === "ETH") {
    fromToken = "WETH";
  }
  if (toToken === "ETH") {
    toToken = "WETH";
  }
  if (fromToken === "BNB") {
    fromToken = "WBNB";
  }
  if (toToken === "BNB") {
    toToken = "WBNB";
  }

  if (fromToken === "AVAX") {
    fromToken = "AVAXC";
  }
  if (toToken === "AVAX") {
    toToken = "AVAXC";
  }
  if (fromToken === "ARBITRUM") {
    fromToken = "ARB";
  }
  if (toToken === "ARBITRUM") {
    toToken = "ARB";
  }
  if (fromToken === "POLYGON") {
    fromToken = "MATIC";
  }
  if (toToken === "POLYGON") {
    toToken = "MATIC";
  }

  const url = `https://api.dexscreener.com/latest/dex/search?q=${fromToken}%20${toToken}`;

  return axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error("Error fetching token prices:", error);
      throw new Error("Failed to fetch token prices");
    });
};
