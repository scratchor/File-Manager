import readline from "readline";
import commands from "./commands.js";
import getUserName from "./utils/getUserName.js";
import closeManager from "./utils/closeManager.js";
import { emitter } from "./emitter.js";
import state from "./state.js";

process.on("uncaughtException", (err) => {
  console.error("Operation failed", err);
  emitter.emit("logDir");
});

process.on("SIGINT", () => closeManager());

try {
  console.log(`Welcome to the File Manager, ${getUserName()}!`);
  emitter.emit("logDir", state.getDirname);

  const rl = readline.createInterface({
    input: process.stdin,
  });

  rl.setPrompt("Please, enter you command\n");
  rl.prompt(true);

  rl.on("line", async (cmd) => {
    const cmsToArr = cmd.trim().split(/\s+/);
    const action = cmsToArr.shift();

    if (commands[action]) {
      await commands[action](...cmsToArr);
      emitter.emit("logDir");
    } else {
      console.error("Invalid input");
      emitter.emit("logDir");
    }
  });
} catch (err) {
  console.error("Operation failed", err);
}
