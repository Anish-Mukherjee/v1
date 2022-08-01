Moralis.Cloud.define("getExperts", async (request) => {
  const query = new Moralis.Query("_EthAddress");
  const results = await query.find({ useMasterKey: true });
  return results;
});

