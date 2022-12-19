export default () => {
  const args = process.argv.slice(2);

  if (args.length) {
    return args.join().match(/=+\w+/g).shift().replace("=", "");
  } else {
    return "Unknown";
  }
};
