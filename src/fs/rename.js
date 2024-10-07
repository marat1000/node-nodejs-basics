import fs from 'node:fs/promises';
import path from 'node:path';

const rename = async () => {
  // Write your code here
  const oldPath = path.join(import.meta.dirname, 'files', 'wrongFilename.txt');
  const newPath = path.join(import.meta.dirname, 'files', 'properFilename.md');
  try {
    const newPathExists = await fs.access(newPath)
      .then(() => true)
      .catch(() => false);
    if (newPathExists) {
      throw new Error();
    }
    await fs.rename(oldPath, newPath);
  } catch (error) {
    throw new Error(`FS operation failed`);
  }
};

await rename();