export default (cpuData) => {
  console.log(`Overall amount of CPUS: ${cpuData.length}`);
  cpuData.forEach((e) => {
    console.log(`Model: ${e.model}, clock rate: ${e.speed * 0.001}GHz `);
  });
};
