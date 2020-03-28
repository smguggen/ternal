# Ternal

A node library for easily formatting console output.
------

![Ternal](https://img.shields.io/endpoint?url=https%3A%2F%2Fsrcer.com%2Fshields%2FApp%2FTernal%2Fblueviolet)
![![Version](https://img.shields.io/endpoint?url=https%3A%2F%2Fsrcer.com%2Fshields%2FTernal%2FVersion%2Finformational)](https://img.shields.io/github/package-json/v/smguggen/ternal?style=plastic)
![![Status](https://img.shields.io/endpoint?url=https%3A%2F%2Fsrcer.com%2Fshields%2FTernal%2FStatus%2Fsuccess)](https://img.shields.io/github/workflow/status/smguggen/ternal/Build?style=plastic)
![![Size](https://img.shields.io/endpoint?url=https%3A%2F%2Fsrcer.com%2Fshields%2FTernal%2FSize%2Finformational)](https://img.shields.io/bundlephobia/min/ternal?style=plastic)
![![License](https://img.shields.io/endpoint?url=https%3A%2F%2Fsrcer.com%2Fshields%2FTernal%2FLicense%2Fgreen)](https://img.shields.io/npm/l/ternal?style=plastic)

Install
-------
```javascript
npm install ternal
```

Usage
-----
### The quick way:
```javascript
const { echo } = require('ternal');
echo('blue', 'Hello World');
```
###### Output:
![Hello World blue](assets/blue.png?raw=true)
----

### Using a ternal instance: 
```javascript
const Ternal = require('ternal');

let ternal = new Ternal('blue');
ternal.print('Hello World');
```
###### Output:
![Hello World blue](assets/blue.png?raw=true)
---
_New instance with blue background_:
```javascript
let ternal = new Ternal({
    bg:'blue'
});
ternal.print('Hello World');
```
###### Output:
![Hello World blue background](assets/bg-blue.png?raw=true)
----
_Same instance, change color_:
```javascript
    ternal.set({color:'red'}).print('Hello World');
```
###### Output:
![Hello World red blue background](assets/red-blue-bg.png?raw=true)
----
_Remove background and underline text_:
```javascript
ternal.set({bg: null, format: 'underline'}).print('Hello World');
```
###### Output:
![Hello World red underlined](assets/red-underline.png?raw=true)
----
_Reset to defaults_:
```javascript
ternal.reset().print('Hello World');
```
###### Output: 
![Hello World plain text](assets/plain.png?raw=true)
----
_Call `ternal.set()` with the second parameter set to true to change your terminal defaults_:
```javascript
ternal.set({
    color:'blue',
    bg:'white',
    format:'bold'
}, true);

console.log('I am blue and bold');
console.log('So am I')
ternal.reset('Let\'s go back to normal');
console.log('Now I\'m normal again');
```
###### Output: 
![Hello World multiline](assets/multi.png?raw=true)
----

Command Line
-----
You can also use `ternal` straight from the command line:
```console
foo:bar foo$ ternal set blue
#blue output
foo:bar foo$ ternal reset
```
Or use the command `ternal globalize` to place the `xternal` executable in your global path:
```console
foo:bar foo$ ternal globalize

xternal command now globally executable.

foo:bar foo$ xternal blue

foo:bar foo$ echo "Hello World"
```
###### Output:
![Hello World blue](assets/blue.png?raw=true)
----
```console
foo:bar foo$ xternal --reset

foo:bar foo$ echo "Hello World"
```
###### Output:
![Hello World blue](assets/plain.png?raw=true)
----