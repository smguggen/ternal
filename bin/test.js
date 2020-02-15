#!/usr/bin/env node

/*const { echo } = require('../src/console.js');

[a,b, text, settings] = process.argv;

echo(settings, text);*/

const name = require('npm-name');
[a,b, text] = process.argv;
name(text).then(res => console.log(res));