import { program } from "commander";
import swapCommands from "../commands/swap";
import { SwapInfo } from "../lib/types";

program
  .command("quote")
  .description("fetch quote for a token pair swap")
  .requiredOption("-s, --sellToken <name>", "token you will be selling")
  .requiredOption("-b, --buyToken <name>", "token you will be buying")
  .requiredOption(
    "-a, --amount <number>",
    "amount of sell token you'll be selling"
  )
  .action(({ sellToken, buyToken, amount }: SwapInfo) =>
    swapCommands.findBestQuote(sellToken, buyToken, amount)
  );

program
  .command("swap")
  .description("execute swap on chain via whitelisted liquidity sources")
  .requiredOption("-s, --sellToken <name>", "token you will be selling")
  .requiredOption("-b, --buyToken <name>", "token you will be buying")
  .requiredOption(
    "-a, --amount <number>",
    "amount of sell token you'll be selling"
  )
  .requiredOption("-n --network <network>", "network to perform the swap on")
  .action(({ sellToken, buyToken, amount, network }: SwapInfo) =>
    console.log(
      `sellToken=${sellToken}, buyToken=${buyToken}, amount=${amount}, network=${network}`
    )
  );

program.parse(process.argv);
