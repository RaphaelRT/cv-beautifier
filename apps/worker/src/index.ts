import { sleep } from "@cv-beautifier/shared";

async function main() {
  console.log("Worker started");
  await sleep(100);
  console.log("Worker completed");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
