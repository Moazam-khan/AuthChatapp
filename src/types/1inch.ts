export interface OneInchToken {
  name: string;
  tags: string[];
  symbol: string;
  address: string;
  eip2612: boolean;
  logoURI: string;
  decimals: number;
  balance?: number;
}
