const ethers = require("ethers");
require("dotenv").config();

async function main() {
  const url = process.env.solana_url;
  let artifacts = await hre.artifacts.readArtifact("Faucet");
  const provider = new ethers.providers.JsonRpcBatchProvider();
  let privateKey = process.env.PRIVATE_KEY;
  let wallet = new ethers.Wallet(privateKey, provider);

  // Create an instance of a Faucet Factory
  let factory = new ethers.ContractFactory(
    artifacts.abi,
    artifacts.bytecode,
    wallet
  );

  let fauset = await factory.deploy();

  console.log("Faucet address:", faucet.address);

  await fauset.deployed();
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
