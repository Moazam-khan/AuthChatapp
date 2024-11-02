import { fetchTokens } from "@/api/ApiCalls/1inch";
import { TOP_TOKENS } from "@/constants/wagmi";
import { OneInchToken } from "@/types";
import React, { createContext, useState, useEffect, useContext } from "react";
import { useChainId } from "wagmi";

interface TokenContextProps {
  tokens: OneInchToken[];
  loading: boolean;
  topTokens: OneInchToken[];
  searchTokens: any;
  allChainTokens: OneInchToken[];
}

const TokenContext = createContext<TokenContextProps | undefined>(undefined);

export const TokenProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tokens, setTokens] = useState<OneInchToken[]>([]);
  const [allChainTokens, setAllChainTokens] = useState<OneInchToken[]>([]);
  const [topTokens, setTopTokens] = useState<OneInchToken[]>([]);
  const [loading, setLoading] = useState(false);
  const chainId = useChainId();

  useEffect(() => {
    const loadTokens = async () => {
      setLoading(true);
      const response = await fetchTokens(chainId);
      setTokens(response.splice(0, 30));
      setAllChainTokens(response);
      setTopTokens(
        response.filter((token: any) => TOP_TOKENS.includes(token.symbol))
      );
      setLoading(false);
    };

    if (chainId) {
      loadTokens();
    }
  }, [chainId]);

  const searchTokens = (query: string) => {
    return allChainTokens.filter(
      (token: any) =>
        token.name.toLowerCase().includes(query.toLowerCase()) ||
        token.address.toLowerCase().includes(query.toLowerCase()) ||
        token.symbol.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <TokenContext.Provider value={{ tokens, allChainTokens, loading, topTokens, searchTokens }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useTokens = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useTokens must be used within a TokenProvider");
  }
  return context;
};
