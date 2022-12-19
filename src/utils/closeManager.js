import getUserName from "./getUserName.js";

export default () => {
  console.log(`Thank you for using File Manager, ${getUserName()}, goodbye!`);
  process.exit();
};
