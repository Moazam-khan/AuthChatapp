export function shortenWalletAddress(str: string) {
  if (str.length <= 10) {
    return str;
  }

  const firstPart = str.slice(0, 5);
  const lastPart = str.slice(-5);

  return `${firstPart}...${lastPart}`;
}
