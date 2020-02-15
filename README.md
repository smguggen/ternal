# Ternal

A node library for easily formatting console output.

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
let ternal = new Ternal({
    bg:'blue'
});
ternal.print('Hello World');
```
###### Output:
![Hello World blue background](assets/bg-blue.png?raw=true)
----
_Change color_:
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