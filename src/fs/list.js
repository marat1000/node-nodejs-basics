import fs from 'node:fs/promises';
import path from 'node:path';

const list = async () => {
  // Write your code here
  const pathToFiles = path.join(import.meta.dirname, 'files');
  try {
    const files = await fs.readdir(pathToFiles);
    console.log(files);
  } catch (error) {
    throw new Error(`FS operation failed`);
  }
};

await list();
