import fs from "fs";
import path from "path";

export const EXAMPLES_PATH = path.join(process.cwd(), "data/examples");

export const exampleFilePaths = fs
  .readdirSync(EXAMPLES_PATH)
  .filter((path) => /\.mdx?$/.test(path));
