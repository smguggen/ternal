#!/usr/bin/env node

const { echo } = require('../src/console.js');
const Ternal = require('../src/console.js');
let ternal = new Ternal();
ternal.set({
    color:'blue',
    bg:'white',
    format:'bold'
}, true);

console.log('I am blue and bold');

ternal.reset('So am I');

console.log('Now I\'m normal again');

