import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { arbitrum, bsc, mainnet, polygon, avalanche } from "wagmi/chains";

export const metadata = {
  name: "Shido",
  description: "Shido",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

export const projectId = "4b6c5a37d94dc1cd55aae4056bd850ae";

export const chains = [mainnet, bsc, polygon, avalanche, arbitrum] as const;

export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});
