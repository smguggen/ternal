#!/usr/bin/env node

let Shell = require('../src/shell');
let { exec } = require('child_process');
let path = require('path');
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
    case 'x':
    case 'globalize': exec('"' + path.resolve(__dirname,'globalize.sh') + '"', (err, out, errmsg) => {
       if (err) {
           console.log(err);
       } 
       if (errmsg) {
           console.log(errmsg);
       }
       console.log(out);
    });
    break;
    default: console.error('Unrecognized command, please try again');
    break;
}
