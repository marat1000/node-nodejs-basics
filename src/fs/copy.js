import fs from 'node:fs/promises';
import path from 'node:path';

const copy = async () => {
  // Write your code here
  const pathToFiles = path.join(import.meta.dirname, 'files');
  const pathToCopy = path.join(import.meta.dirname, 'files_copy');
  try {
    await fs.cp(pathToFiles, pathToCopy, {errorOnExist: true, force: false, recursive: true});
  } catch (error) {
    throw new Error(`FS operation failed`);
  }
};

await copy();

