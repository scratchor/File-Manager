import path from "path";
import state from "../state.js";

export default (initialPath) => path.join(state.getDirname, initialPath);
