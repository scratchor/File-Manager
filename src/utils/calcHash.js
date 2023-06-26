import path from "path";
import { stat } from "fs/promises";
import { createReadStream } from "fs";
import { Writable } from "node:stream";
import { pipeline } from "stream/promises";
import preparePath from "./preparePath.js";
import checkAccess from "./checkAccess.js";

const { createHash } = await import("crypto");

export default async (pathToFile) => {
    const filePath = preparePath(path.normalize(pathToFile));
    const pathStat = await stat(filePath);
    const isUserHaveAccess = await checkAccess(filePath);

    if (pathStat.isFile() && isUserHaveAccess) {
        const hash = createHash("sha256");
        const inputFileStream = createReadStream(filePath);
        const outStream = new Writable({
            decodeStrings: false,
            write(chunk, encoding, callback) {
                console.log(chunk);
                callback();
            },
        });

        await pipeline(inputFileStream, hash.setEncoding("hex"), outStream);
    }
};
