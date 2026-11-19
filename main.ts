// Entrypoint for the gta6-meme-x-01 entry.
//
// The entry itself is a post on X; this program only hands the post's
// address to the grader. It copies POST.json from the repository into the
// output directory, creating that directory first. Nothing else is written.
//
// The grader runs this twice in a fresh sandbox and expects the two runs
// to produce identical bytes, so the copy is a plain byte-for-byte copy
// with no timestamps or generated content added.

import { copyFile, mkdir, stat } from "node:fs/promises";
import { join } from "node:path";

const REPO_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const POST_FILE = "POST.json";

async function main(): Promise<void> {
  const source = join(REPO_DIR, POST_FILE);
  const target = join(OUT_DIR, POST_FILE);

  const info = await stat(source);
  if (!info.isFile()) {
    throw new Error(`${POST_FILE} is not a regular file at ${source}`);
  }

  await mkdir(OUT_DIR, { recursive: true });
  await copyFile(source, target);

  // Confirm the copy landed whole: a partial write would hand the grader
  // a truncated post address, so compare sizes before reporting success.
  const copied = await stat(target);
  if (copied.size !== info.size) {
    throw new Error(
      `${POST_FILE} copied ${copied.size} of ${info.size} bytes to ${target}`,
    );
  }
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`failed to hand in ${POST_FILE}: ${message}`);
  process.exit(1);
});
