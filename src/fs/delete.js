import fs from 'node:fs/promises';
import path from 'node:path';

const remove = async () => {
  // Write your code here
  const pathToFile = path.join(import.meta.dirname, 'files', 'fileToRemove.txt');
  try {
    await fs.unlink(pathToFile);
  } catch (error) {
    throw new Error(`FS operation failed`);
  }
};

await remove();