import path from "path";
import state from "../state.js";
import { stat } from "fs/promises";
import preparePath from "./preparePath.js";

export default async (pathToDirectory) => {
  const resolvedPath = path.normalize(pathToDirectory.join(" "));

  if (path.isAbsolute(resolvedPath)) {
    if (path.parse(resolvedPath).root === state.getRoot) {
      const pathStat = await stat(resolvedPath);

      if (pathStat.isDirectory()) {
        state.setDirname = resolvedPath;
      }
    }
  } else {
    const finalPath = preparePath(resolvedPath);
    const pathStat = await stat(finalPath);

    if (pathStat.isDirectory()) {
      state.setDirname = finalPath;
    }
  }
};
