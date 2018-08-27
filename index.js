const pug = require('pug');

// Compile template.pug, and render a set of data
console.log(pug.renderFile('src/index.pug', {
  name: 'Timothy'
}));