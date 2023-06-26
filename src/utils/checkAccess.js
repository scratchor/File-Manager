import {access} from "fs/promises";
import {constants} from "fs";

export default async (filePath) => {
    try {
        await access(filePath, constants.R_OK | constants.W_OK);
        return true;
    } catch {
        return false;
    }
};
