import { CheckOutlined, CopyOutlined } from "@ant-design/icons";
import { colors } from "./constants";
import { ethers } from "ethers";

export const renderHtmlString = (str: string) => (
  <div dangerouslySetInnerHTML={{ __html: str }} />
);

export const copyable = (color: string = colors.primary500) => ({
  icon: [
    <CopyOutlined style={{ color }} />,
    <CheckOutlined style={{ color }} />,
  ],
});

export function getCookie(name: string) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return undefined;
}

export function openUrlInNewTab(url: string) {
  const newTab = window.open(url, "_blank", "noopener,noreferrer");
  if (newTab) newTab.opener = null;
}

export function leftPad(number: number, targetLength: number) {
  var output = number + "";
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return output;
}

export function addEllipsisToText(address: any, beforeLength: number) {
  const length = address.length;
  const start = address.slice(0, beforeLength);
  const end = address.slice(length - 3, length);
  return `${start}...${end}`;
}

export const getRemInPixels = (rem: number = 1) => {
  const temporaryElement = document.createElement("div");
  temporaryElement.style.width = `${rem}rem`;
  document.body.appendChild(temporaryElement);
  const itemWidthPixels = temporaryElement.offsetWidth;
  document.body.removeChild(temporaryElement);
  return itemWidthPixels;
};

export const maskAddressOrEmail = (input: any): string => {
  if (!input) return "";
  const MASK_CHAR = "*";
  if (input.includes("@")) {
    // For email addresses
    const [localPart, domain] = input.split("@");
    const maskedLocalPart =
      localPart.substring(0, 2) + MASK_CHAR.repeat(4) + localPart.slice(-2);
    return `${maskedLocalPart}@${domain}`;
  } else if (input.startsWith("0x")) {
    // For wallet addresses
    const maskedAddress =
      input.substring(0, 6) + MASK_CHAR.repeat(4) + input.slice(-4);
    return maskedAddress;
  }

  return input; // Return unchanged if not recognized as email or wallet address
};

export const clean = (obj: any) => {
  for (let propName in obj) {
    if (
      obj[propName] === "" ||
      obj[propName] === null ||
      obj[propName] === undefined
    ) {
      delete obj[propName];
    }
  }
  return obj;
};

export const toCustomFixed = (num: any, fixed: any) => {
  const re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
  return num?.toString().match(re)[0];
};

export const decimalFormatWithoutRoundOffCrypto = (value: number) => {
  if (value === 0) {
    return 0.0;
  } else if ((value > 0 && value <= 9) || (value < 0 && value >= -9)) {
    return toCustomFixed(value, 5);
  } else if ((value > 9 && value <= 99) || (value < -9 && value >= -99)) {
    return toCustomFixed(value, 4);
  } else if ((value > 99 && value <= 999) || (value < -99 && value >= -999)) {
    return toCustomFixed(value, 3);
  } else if (
    (value > 999 && value <= 9999) ||
    (value < -999 && value >= -9999)
  ) {
    return toCustomFixed(value, 2);
  } else if (value > 9999 || value < -9999) {
    return value?.toFixed();
  }
};

export function formatTransactionHash(hash: string) {
  if (!hash || hash.length <= 12) {
    return hash;
  }
  const prefixLength = 6;
  const suffixLength = 6;
  return `${hash.slice(0, prefixLength)}...${hash.slice(-suffixLength)}`;
}

export function getTimeDifference(createdAt: string) {
  const now = new Date();
  const then = new Date(createdAt);

  // @ts-ignore
  const diffMs = Math.abs(now - then); // Get absolute difference in milliseconds
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)); // Days
  const diffHours = Math.floor(
    (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ); // Hours
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60)); // Minutes

  if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  } else if (diffHours > 0) {
    return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  } else if (diffMinutes > 0) {
    return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;
  } else {
    return "Just now";
  }
}


export function fromReadableAmount(amount: any, decimals: number): ethers.BigNumber {
  const amountStr = amount.toString();
  
  // Split the amount into integer and fractional parts
  const [integerPart, fractionalPart] = amountStr.split(".");

  if (fractionalPart && fractionalPart.length > decimals) {
    throw new Error(`Amount exceeds the token's decimal precision of ${decimals} decimals`);
  }

  return ethers.utils.parseUnits(amountStr, decimals);
}

export function roundToDecimals(amount: number, decimals: number) {
  const rounded = Math.round(amount * Math.pow(10, decimals)) / Math.pow(10, decimals);
  const roundedStr = rounded.toFixed(decimals); // Convert to string with correct decimal places
  return parseFloat(roundedStr); // Convert back to number
};

const CHAIN_WRAPPED_NATIVE: any = {
  1: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  56: "0xbb4cdb5dbf16e6cec1dedee27a2a1a3980f3388a",
  137: "0x0d500b2d5d8af5bf4af8e8288b2c5e88a783e2c9",
  250: "0x1de55e7de2dcfaa29fee7e14feadbefb6c9b44e8",
  43114: "0x8dFfEaB7E161BD98e3C689bC940f9A6C02aefc28",
};

export function getWrappedTokenAddress(chainId: number): string {
  if (!CHAIN_WRAPPED_NATIVE[chainId]) {
    throw new Error(`Unsupported chain ID: ${chainId}`);
  }

  return CHAIN_WRAPPED_NATIVE[chainId];
}
