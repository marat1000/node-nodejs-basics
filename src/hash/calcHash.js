import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const calculateHash = async () => {
  // Write your code here
  const pathToFile = path.join(import.meta.dirname, 'files', `fileToCalculateHashFor.txt`);

  try {
    const hashValue = await getHash(pathToFile);
    console.log(hashValue);
  } catch (error) {
    console.error('Error:', error);
  }

  function getHash (path) {
    return new Promise((resolve, reject) => {
      const hash = crypto.createHash('sha256');
      const rs = fs.createReadStream(path);
      rs.on('error', reject);
      rs.on('data', chunk => {
        hash.update(chunk);
      });
      rs.on('end', () => resolve(hash.digest('hex')));
    })
  }
};

await calculateHash();