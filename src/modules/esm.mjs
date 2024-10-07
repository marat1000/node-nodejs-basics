import path from 'node:path';
import {release, version} from 'node:os';
import {createServer} from 'node:http';
import './files/c.js';
import {readFile} from 'node:fs/promises';

const a = JSON.parse(
  await readFile(
    new URL('./files/a.json', import.meta.url)
  )
);

const b = JSON.parse(
  await readFile(
    new URL('./files/b.json', import.meta.url)
  )
);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = a;
} else {
  unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.filename}`);
console.log(`Path to current directory is ${import.meta.dirname}`);

const myServer = createServer((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export default {
  unknownObject,
  myServer,
};

