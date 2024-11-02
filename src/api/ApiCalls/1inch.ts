import { OneInchToken } from "@/types";
import axios from "axios";

const REACT_APP_ONEINCH_API_BASE_URL =
  process.env.REACT_APP_ONEINCH_API_BASE_URL ||
  "https://dev.api.shido.baboons.tech/api/swap";

export const fetchTokens = async (chainId: number): Promise<OneInchToken[]> => {
  return axios
    .get(`${REACT_APP_ONEINCH_API_BASE_URL}/tokens/${chainId}`)
    .then((res) => res.data);
};

export const fetchQuote = async (
  chainId: number,
  fromToken: string,
  toToken: string,
  amount: string
) => {
  return axios
    .get(`${REACT_APP_ONEINCH_API_BASE_URL}/swap_quote/${chainId}`, {
      params: { from_token: fromToken, to_token: toToken, amount },
    })
    .then((res) => res.data);
};

export const fetchApprovalTransaction = async (
  chainId: number,
  tokenAddress: string,
  amount: string
) => {
  return axios
    .get(`${REACT_APP_ONEINCH_API_BASE_URL}/approve_transaction/${chainId}`, {
      params: { tokenAddress, amount },
    })
    .then((res) => res.data);
};

export const fetchTokenPrices = async (
  chainId: number,
  fromToken: string,
  toToken: string
): Promise<any> => {
  const addresses = `${fromToken},${toToken}`;
  const url = `${REACT_APP_ONEINCH_API_BASE_URL}/prices/${chainId}/${addresses}`;
  return axios
    .get(url, { params: { currency: "USD" } })
    .then((res) => {
      const prices = res.data;
      return {
        fromPrice: parseFloat(prices[fromToken]) || 0,
        toPrice: parseFloat(prices[toToken]) || 0,
      };
    })
    .catch((error) => {
      console.error("Error fetching token prices:", error);
      throw new Error("Failed to fetch token prices");
    });
};

export const fetchTokenAllowance = async (
  chainId: number,
  tokenAddress: string,
  walletAddress: string
) => {
  return axios
    .get(`${REACT_APP_ONEINCH_API_BASE_URL}/allowance/${chainId}`, {
      params: { tokenAddress, walletAddress },
    })
    .then((res) => res.data);
};

export const initiateSwap = async (
  chainId: number,
  src: string,
  dst: string,
  amount: string,
  fromAddress: string,
  slippage: string
) => {
  return axios
    .get(`${REACT_APP_ONEINCH_API_BASE_URL}/${chainId}`, {
      params: { src, dst, amount, from: fromAddress, slippage },
    })
    .then((res) => res.data);
};

const ONE_INCH_URL = "https://limit-orders.1inch.io";

export const getActiveLimitOrders1nch = async (
  chainId: number,
  address: string,
  page?: number
) => {
  const limit = 20;
  const endpoint = `/v4.0/${chainId}/address/${address}?statuses=1&limit=${limit}&page=${
    page || 1
  }`;

  try {
    const result = await axios.get(`${ONE_INCH_URL}${endpoint}`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    throw new Error("Failed to fetch active limit orders");
  }
};

export const getTemporaryInvalidOrders1inch = async (
  chainId: number,
  address: `0x${string}` | undefined,
  page?: number
) => {
  const limit = 20;
  const endpoint = `/v4.0/${chainId}/address/${address}?statuses=2&limit=${limit}&page=${
    page || 1
  }`;

  try {
    const result = await axios.get(`${ONE_INCH_URL}${endpoint}`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    throw new Error("Failed to fetch active limit orders");
  }
};

export const getLimitOrdersHistory1nch = async (
  chainId: number,
  address: string,
  page?: number
) => {
  const limit = 20;
  const endpoint = `/v4.0/${chainId}/address/${address}?statuses=3&limit=${limit}&page=${
    page || 1
  }`;

  try {
    const result = await axios.get(`${ONE_INCH_URL}${endpoint}`);

    return result.data;
  } catch (error) {
    throw new Error("Failed to fetch limit orders history");
  }
};

export const submitLimitOrderToAPI1nch = async (
  chainId: number,
  payload: any
) => {
  const endpoint = `/v4.0/${chainId}`;

  try {
    const result = await axios.post(`${ONE_INCH_URL}${endpoint}`, payload);
    return result.data;
  } catch (error) {
    throw new Error("Failed to submit limit order to API");
  }
};

export const getEventsForOrderHash = async (
  chainId: number,
  orderHash: string
) => {
  const endpoint = `/order-events/?chain_id=${chainId}&order_hash=${orderHash}`;

  try {
    const result = await axios.get(
      `${REACT_APP_ONEINCH_API_BASE_URL}${endpoint}`
    );
    return result;
  } catch (error) {
    console.error("Failed to get events for order hash:", error);
    throw new Error("Failed to get events for order hash");
  }
};
