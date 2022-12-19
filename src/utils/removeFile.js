import path from "path";
import { unlink } from "fs/promises";
import preparePath from "./preparePath.js";

export default async (pathToFile) => {
  const finalPath = preparePath(path.normalize(pathToFile));
  await unlink(finalPath);
};
