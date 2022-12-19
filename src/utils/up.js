import state from "../state.js";
import * as path from "path";

export default () => {
  const dirname = state.getDirname;
  if (state.getRoot !== dirname) {
    state.setDirname = path.resolve(
      ...dirname.split(`${path.sep}`).slice(0, -1)
    );
  }
};
