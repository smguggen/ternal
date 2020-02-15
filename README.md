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
```javascript
echo('white-blue', 'Hello World');
```

### Using a ternal instance: 
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
###### Output:
![Hello World blue background](assets/bg-blue.png?raw=true)

Change color:
```javascript
    ternal.set({color:'red'}).print('Hello World');
```
###### Output:
![Hello World red blue background](assets/red-blue-bg.png?raw=true)

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
###### Output: 
```console
![Hello World plain text](assets/plain.png?raw=true)
```
Or call `ternal.set()` with the second parameter set to true to change your terminal defaults
```javascript
ternal.set({
    color:'blue',
    bg:'white',
    format:'bold'
}, true);
```

