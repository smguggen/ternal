#!/usr/bin/env node

let Shell = require('../src/shell');

[a,b, command, ...settings] = process.argv;

let sh = new Shell(settings);

switch(command) {
    case 'print':
    case 'echo': Shell.echo();
    break;
    case 'set': sh.set();
    break;
    case 'unset':
    case 'reset': sh.reset();
    break;
    default: console.error('Unrecognized command, please try again');
    break;
}
