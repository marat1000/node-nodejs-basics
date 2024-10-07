import { argv } from 'node:process';

const parseArgs = () => {
    // Write your code here
  console.dir(argv);
  let i = 2;
  while (i !== argv.length - 2) {
    const str = `${argv[i].slice(2)} is ${argv[i + 1]},`;
    console.log(str);
    i = i + 2;
  }
  const str = `${argv[i].slice(2)} is ${argv[i + 1]}`;
  console.log(str);

};

parseArgs();