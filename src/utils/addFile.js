import { writeFile } from "fs/promises";
import preparePath from "./preparePath.js";

export default async (fileName) => {
  try {
    await writeFile(preparePath(fileName.join(" ")), "", { flag: "ax" });
  } catch (e) {
    console.log(e, "File already exist");
  }
};
