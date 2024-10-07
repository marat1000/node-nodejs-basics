import {stdin, stdout} from 'node:process';
import os from "os";

const transform = async () => {
  // Write your code here

  stdin.addListener("data", function(chunk) {
    const str = chunk.toString().split(``).reverse().join(``);
    stdout.write(str);
    stdout.write(os.EOL);
    stdout.write(os.EOL);
  });
};

await transform();