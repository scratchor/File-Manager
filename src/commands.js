import up from "./utils/up.js";
import list from "./utils/list.js";
import changeDirectory from "./utils/changeDirectory.js";
import readFileContent from "./utils/readFileContent.js";
import addFile from "./utils/addFile.js";
import renameFile from "./utils/renameFile.js";
import copyFile from "./utils/copyFile.js";
import moveFile from "./utils/moveFile.js";
import calcHash from "./utils/calcHash.js";
import compress from "./utils/compress.js";
import chooseOsInfo from "./utils/chooseOsInfo.js";
import removeFile from "./utils/removeFile.js";
import closeManager from "./utils/closeManager.js";

export default {
  [".exit"]: async () => closeManager(),
  up: () => up(),
  cd: async (...pathToDirectory) => await changeDirectory(pathToDirectory),
  ls: async () => await list(),
  cat: async (pathToFile) => await readFileContent(pathToFile),
  add: async (...fileName) => await addFile(fileName),
  rn: async (pathToFile, newFileName) =>
    await renameFile(pathToFile, newFileName),
  cp: async (pathToFile, pathToNewDirectory) =>
    await copyFile(pathToFile, pathToNewDirectory),
  mv: async (pathToFile, pathToNewDirectory) =>
    await moveFile(pathToFile, pathToNewDirectory),
  rm: async (pathToFile) => await removeFile(pathToFile),
  hash: async (pathToFile) => await calcHash(pathToFile),
  compress: async (pathToFile) => await compress(pathToFile),
  os: async (cmdKey) => await chooseOsInfo(cmdKey),
};
