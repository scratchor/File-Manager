import { readdir } from "fs/promises";
import state from "../state.js";

export default async () => {
  const files = await readdir(state.getDirname);

  if (files.length) {
    for (const file of files) {
      console.log(file);
    }
  } else {
    console.log("Folder is empty");
  }
};
