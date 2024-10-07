const parseEnv = () => {
  const PREFIX = 'RSS_';
  const argumentList = Object.entries(process.env);
  const filteredArguments = argumentList.filter((entry) => entry[0].startsWith(PREFIX));

  let i = 0;
  while (i !== filteredArguments.length - 1) {
    console.log(`${filteredArguments[i][0]}=${filteredArguments[i][1]};`);
    i++;
  }
  console.log(`${filteredArguments[i][0]}=${filteredArguments[i][1]}`);
};

parseEnv();