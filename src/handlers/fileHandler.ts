import fs from "fs";

const isDirectory = (path: string) => fs.lstatSync(path).isDirectory();
const isReadable = (path: string) => path.endsWith(".ts");

export function loadFiles(baseDir: string, subFiles: boolean = true): string[] {
  let files = [];
  fs.readdirSync(baseDir).forEach(file => {
    const subDir = `${baseDir}/${file}`;
    if (subFiles && isDirectory(subDir)) files = [...files, loadFiles(subDir).map(f => `${file}/${f}`)];
    else if (isReadable(file)) files = [...files, file];
  });
  return files;
}
