# Ternal

A node library for easily formatting console output.

Install
-------
```javascript
npm i ternal
```

Usage
-----
#### The quick way:
```javascript
const { echo } = require('ternal');
echo('blue', 'Hello World');
```
*Output*:
![Hello World blue](https://github.com/smguggen/ternal/blob/master/assets/blue.png?raw=true)
```javascript
echo('white-blue', 'Hello World');
```
*Output*:
![Hello World background blue](https://github.com/smguggen/ternal/blob/master/assets/bg-blue.png?raw=true)
```javascript
echo('blue-null-underline', 'Hello World');
```
*Output*:
![Hello World blue underline](https://github.com/smguggen/ternal/blob/master/assets/blue-underline.png?raw=true)
-----
#### Using a ternal instance: 
```javascript
const Ternal = require('ternal');

let ternal = new Ternal('blue');
ternal.print('Hello World');

//set the background (default color is white)
let ternal = new Ternal({
    bg:'blue'
});
ternal.print('Hello World');
```
##### Output:
![Hello World blue background](https://github.com/smguggen/ternal/blob/master/assets/bg-blue.png?raw=true)

Change color:
```javascript
    ternal.set({color:'red'}).print('Hello World');
```
###### Output:
![Hello World red blue background](https://github.com/smguggen/ternal/blob/master/assets/red-blue-bg.png?raw=true)

Remove background and underline text:
```javascript
ternal.set({bg: null, format: 'underline'}).print('Hello World');
```
###### Output:
![Hello World red underlined](assets/red-underline.png?raw=true)

Reset to defaults
```javascript
ternal.reset().print('Hello World');
```
#### Output:
![Hello World plain text](assets/plain.png?raw=true)

Or call _ternal.set()_ with the second parameter set to true to change your terminal defaults
```javascript
ternal.set({
    color:'blue',
    bg:'white',
    format:'bold'
}, true);
```

