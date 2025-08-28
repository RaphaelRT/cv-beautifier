import { sleep } from "@cv-beautifier/shared";

async function main() {
  console.log("Worker démarré");
  await sleep(100);
  console.log("Worker terminé");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
