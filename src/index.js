import readline from "readline";
import commands from "./commands.js";
import { getUserName } from "./utils.js";
import { emitter } from "./emitter.js";
import state from "./state.js";

process.on("uncaughtException", (err) => {
  console.error("Operation failed", err);
  emitter.emit("logDir");
});

try {
  console.log(`Welcome to the File Manager, ${getUserName()}!`);
  emitter.emit("logDir", state.getDirname);

  const rl = readline.createInterface({
    input: process.stdin,
    // output: process.stdout,
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

  // rl.question("What do you think of Node.js? ", (answer) => {
  //   // TODO: Log the answer in a database
  //   // console.log(`Thank you for your valuable feedback: ${answer}`);
  //   // rl.close();
  // });
} catch (err) {
  console.error("Try_Catch_Operation failed", err);
}
