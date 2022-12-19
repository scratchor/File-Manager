import EventEmitter from "events";
import logCurrentDir from "./utils/logCurrentDir.js";

const emitter = new EventEmitter();

emitter.on("logDir", () => logCurrentDir());

export { emitter };
