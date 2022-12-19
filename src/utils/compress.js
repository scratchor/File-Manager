import path from "path";
import { stat } from "fs/promises";
import { createReadStream } from "fs";
import { pipeline } from "stream/promises";
import checkAccess from "./checkAccess.js";
import preparePath from "./preparePath.js";

const { createHash } = await import("crypto");

export default async (pathToFile) => {
  const filePath = preparePath(path.normalize(pathToFile));
  const pathStat = await stat(filePath);
  const isUserHaveAccess = await checkAccess(filePath);

  if (pathStat.isFile() && isUserHaveAccess) {
    const hash = createHash("sha256");
    const inputFileStream = createReadStream(filePath);

    await pipeline(inputFileStream, hash.setEncoding("hex"), process.stdout);
  }
};
