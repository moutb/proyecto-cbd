const fs = require('fs');

const files = fs.readdirSync(__dirname + '/')

files
  .filter((file) => fs.lstatSync(`${__dirname}/${file}`).isDirectory())
  .forEach((file) => {
      const dirFiles = fs.readdirSync(`${__dirname}/${file}/`);

      const index = dirFiles.find(file => file === 'index.js');
      if (index != null) {
        exports[file] = require(`./${file}/index.js`);
      }
  });