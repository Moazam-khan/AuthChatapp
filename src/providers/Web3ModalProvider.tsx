import { projectId } from "@/utils";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { WagmiProvider, http, createConfig } from "wagmi";
import { mainnet, avalanche, bsc, polygon, arbitrum } from "wagmi/chains";

const wagmiConfig = createConfig({
  chains: [mainnet, avalanche, bsc, polygon, arbitrum],
  transports: {
    [mainnet.id]: http(),
    [avalanche.id]: http(),
    [bsc.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
  },
});

createWeb3Modal({
  wagmiConfig,
  projectId,
  enableAnalytics: true,
  enableOnramp: true,
  themeMode: "dark",
  // themeVariables: {
  //   '--w3m-color-mix': '#FB5951',
  //   '--w3m-color-mix-strength': 35,
  //   '--w3m-font-family':
  //     '"Avenir Next LT Pro bold", "Avenir Next LT Pro", "Helvetica Neue",sans-serif',
  //   '--w3m-accent': '#0672B5',
  // },
});

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  return <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>;
}
