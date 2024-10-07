import path from 'node:path';
import {createGzip} from 'node:zlib';
import {pipeline} from 'node:stream';
import {createReadStream, createWriteStream} from 'node:fs';

const compress = async () => {
  const pathToFile = path.join(import.meta.dirname, 'files', `fileToCompress.txt`);
  const destPath = path.resolve(import.meta.dirname, 'files', `archive.gz`);

  const gzip = createGzip();
  const source = createReadStream(pathToFile);
  const destination = createWriteStream(destPath);

  pipeline(
    source,
    gzip,
    destination,
    (err) => {
      if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
      }
    });
};

await compress();