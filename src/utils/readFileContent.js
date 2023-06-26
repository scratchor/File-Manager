import path from "path";
import { stat } from "fs/promises";
import { createReadStream } from "fs";
import preparePath from "./preparePath.js";
import checkAccess from "./checkAccess.js";

export default async (pathToFile) => {
    const finalPath = preparePath(path.normalize(pathToFile));
    const pathStat = await stat(finalPath);
    const isUserHaveAccess = await checkAccess(finalPath);

    if (pathStat.isFile() && isUserHaveAccess) {
        const readStream = () => {
            return new Promise((res, rej) => {
                const inputFileStream = createReadStream(finalPath);

                inputFileStream.on("error", (err) => {
                    rej(err);
                    console.log();
                });

                inputFileStream.on("end", () => {
                    res();
                    console.log();
                });

                inputFileStream.pipe(process.stdout);
            });
        };
        await readStream();
    }
};
