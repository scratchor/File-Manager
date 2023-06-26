import copyFile from "./copyFile.js";
import removeFile from "./removeFile.js";

export default async (pathToFile, pathToNewDirectory) => {
    await copyFile(pathToFile, pathToNewDirectory);
    await removeFile(pathToFile);
};
