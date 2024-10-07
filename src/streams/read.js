import path from "node:path";
import fs from "node:fs";
import {stdout} from 'node:process';
import os from "os";

const read = async () => {
  // Write your code here

  const pathToFile = path.join(import.meta.dirname, 'files', `fileToRead.txt`);

  const rs = fs.createReadStream(pathToFile);

  rs.on('data', chunk => {
    stdout.write(chunk);
  });

  rs.on('end', () => stdout.write(os.EOL));
};

await read();