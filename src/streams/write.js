import path from "node:path";
import fs from "node:fs";
import {stdin} from 'node:process';

const write = async () => {
  // Write your code here

  const pathToFile = path.join(import.meta.dirname, 'files', `fileToWrite.txt`);

  const ws = fs.createWriteStream(pathToFile);

  stdin.addListener("data", function(chunk) {
    const str = chunk.toString();
    ws.write(str);
  });
};

await write();