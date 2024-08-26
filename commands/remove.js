const fs = require("fs/promises");
const path = require("path");

async function main() {
  const webDir = path.join(__dirname, "../web");
  const distDir = path.join(__dirname, "../dist");
  console.log("Start Deleting Web");
  try {
    await fs.rm(webDir, { recursive: true, force: true });
  } catch (e) {
    console.log(e);
  }
  console.log("Start Deleting Lib");
  try {
    await fs.rm(distDir, { recursive: true, force: true });
  } catch (e) {
    console.log(e);
  }
}

main().then(() => {
  console.log("remove the web and dist with succ 😀");
});
