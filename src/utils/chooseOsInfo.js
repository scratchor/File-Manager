import os from "os";
import showCpusInfo from "./showCpusInfo.js";

export default async (cmdKey) => {
  const infoKey = cmdKey.replace(/--/, "");

  switch (infoKey) {
    case "EOL":
      console.log(os.EOL);
      break;
    case "cpus":
      showCpusInfo(os.cpus());
      break;
    case "homedir":
      console.log(os.homedir());
      break;
    case "username":
      console.log(os.userInfo().username);
      break;
    case "architecture":
      console.log(os.arch());
      break;
    default:
      console.error("Invalid input");
  }
};
