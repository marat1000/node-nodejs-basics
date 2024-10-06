import fs from 'node:fs/promises';
import path from 'node:path';

const create = async () => {
    // Write your code here
  const pathToFile = path.join(import.meta.dirname, 'files', 'fresh.txt');
  try {
    await fs.access(pathToFile);
  } catch (error) {
    const content = `I am fresh and young`;
    await fs.writeFile(pathToFile, content);
    return;
  }
  throw new Error(`FS operation failed`);
};

await create();