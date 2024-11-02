import Web3 from "web3";
import BigNumber from "bignumber.js";

export const getTokenBalance = async (
  wallet_address: any,
  tokenAddress: any,
  web3: Web3
) => {
  try {
    const abi = [
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ name: "", type: "uint8" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ name: "_owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "balance", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ];

    if (
      tokenAddress !== "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" &&
      tokenAddress !== "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    ) {
      const tokenContract = new web3.eth.Contract(abi, tokenAddress);

      const decimals: number = await tokenContract.methods.decimals().call();

      const balance: number = await tokenContract.methods
        .balanceOf(wallet_address)
        .call();

      const result = BigNumber(balance)
        .div(BigNumber(10).pow(decimals))
        .toString();
      return result;
    } else {
      const balance = await web3.eth.getBalance(wallet_address);
      const formatedBalance = web3.utils.fromWei(balance, "ether");

      return formatedBalance;
    }
  } catch (error) {
    console.log("Error in getTokenBalanceFull =>", error);
    return 0;
  }
};

export function fromReadableAmount(amount: any, decimals: number) {
  return BigNumber(amount).multipliedBy(BigNumber(10).pow(decimals)).toString();
}

export function toReadableAmount(rawAmount: string, decimals: number) {
  return BigNumber(rawAmount).div(BigNumber(10).pow(decimals)).toString();
}
