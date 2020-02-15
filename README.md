# Ternal

A node library for easily formatting console output.

Install
-------
```javascript
npm i ternal
```

Usage
-----
```javascript
const Ternal = require('ternal');
let ternal = new Ternal();
ternal.print('blue', 'Hello World');
```
#### Or:
```javascript
const { echo } = require('ternal');
echo('blue', 'Hello World');
```
#### Output:
<img src="/assets/hello-world-blue.png"/>
