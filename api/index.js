const { generate } = require('../generator/pkg/genesis_generator');

const output = generate('express');

console.log(new TextDecoder("utf-8").decode(output));
