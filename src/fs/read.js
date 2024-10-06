import fs from 'node:fs/promises';
import path from 'node:path';

const read = async () => {
  // Write your code here
  const pathToFile = path.join(import.meta.dirname, 'files', 'fileToRead.txt');
  try {
    const content = await fs.readFile(pathToFile, {encoding: 'utf8'});
    console.log(content);
  } catch (error) {
    throw new Error(`FS operation failed`);
  }
};

await read();
