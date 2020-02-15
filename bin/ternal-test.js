#!/usr/bin/env node

const { echo } = require('../src/console.js');
const Ternal = require('../src/console.js');
let tern = new Ternal('red');
//tern.print('Hello World');
tern.set({bg: null, format: 'underline'}).print('Hello World');