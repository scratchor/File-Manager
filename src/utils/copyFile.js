import path from "path";
import { open, stat } from "fs/promises";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import checkAccess from "./checkAccess.js";
import preparePath from "./preparePath.js";

export default async (pathToFile, pathToNewDirectory) => {
  const oldPath = preparePath(path.normalize(pathToFile));
  const newPath = preparePath(
    path.normalize(path.join(pathToNewDirectory, path.parse(oldPath).base))
  );
  const pathStat = await stat(oldPath);
  const isUserHaveAccess = await checkAccess(oldPath);

  if (pathStat.isFile() && isUserHaveAccess) {
    await open(newPath, "wx");

    const readStream = createReadStream(oldPath);
    const writeStream = createWriteStream(newPath);

    await pipeline(readStream, writeStream);
  }
};
