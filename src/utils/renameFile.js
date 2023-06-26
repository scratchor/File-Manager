import path from "path";
import { rename, stat } from "fs/promises";
import preparePath from "./preparePath.js";
import checkAccess from "./checkAccess.js";

export default async (pathToFile, newFileName) => {
    try {
        const oldPath = preparePath(path.normalize(pathToFile));
        const pathStat = await stat(oldPath);
        const isUserHaveAccess = await checkAccess(oldPath);

        if (pathStat.isFile() && isUserHaveAccess) {
            const newPath = path.format({
                ...path.parse(oldPath),
                base: newFileName,
            });

            await rename(oldPath, newPath);
        }
    } catch (e) {
        console.log("can't rename");
    }
};
