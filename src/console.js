const { exec } = require('child_process');
class Console {
    constructor(args) {
        this.maps = require('../lib/map.json');
        this.close = '\x1b[0m';
        if (args) {
            this._parseIncoming(args);
        }
    }
    
    static echo(settings, text) {
        let c = new Console();
        c.format = false;
        c._parseIncoming(settings);
        console.log(c.open + c.close, text);
    }
    
    print(text) {
        console.log(this.open + this.close, text);
        return this;
    }
    
    reset(text) {
        text = text || '';
        this.print(text);
        this.set('null-null-null');
        return this;
    }
    
    set(settings, text) {
        text = text || '';
        this._parseIncoming(settings);
        if (text) {
            if (typeof text !== 'string') {
                text = '';
            }
            console.log(this.open, text);
        } 
        return this;
    }

    set format(name) {
        if (!this._format) {
            this._format = ['default'];
        }
        if (!name || name == 'default') {
            this._format = ['default'];
        } else {
            if (typeof name === 'string') {
                name = name.split(';');
            }
            if (name.includes('default')) {
                this._format = ['default'];
            } else {
                this._format = name;
            }
        }
    }
    get format() {
        let f = this._format && this._format.length ? this._format : [];
        return f.join(';');
    }
    
    get open() {
        let op = '\x1b[__m%s';
        let format = this._map('format');
        let color = this._map('color');
        let bg = this._map('bg');
        let code = [format, color, bg].filter(t => t && t.length && t != "0" ? true : false).join(';');
        return op.replace('__', code);
    }
    
    _parseObject(type, obj) {
        if (obj.hasOwnProperty(type)) {
            return obj[type] || 'default';
        } else if (this[type]) {
            return this[type];
        } else {
            return 'default';
        }
    }
    
    _parseIncoming(arr) {
        if (typeof arr === 'string') {
            arr = arr.split(/[\,\|\:\-]/);
        }
        if (!arr || typeof arr !== 'object') {
            return;
        }
        let color, bg, format;
        if (Array.isArray(arr)) {
            [color, bg, format] = arr;
        } else {
            color = this._parseObject('color', arr);
            bg = this._parseObject('bg', arr);
            format = this._parseObject('format', arr);
        }
        this.color = color;
        this.bg = bg;
        this.format = format;
    }
    
    _map(map) {
        if (!['color', 'bg', 'format'].includes(map)) {
            return '';
        }
        map = map.toLowerCase();
        let key = (this[map] || '').toLowerCase();
        let m = this.maps[map] || 'default';
        let n = Object.keys(m);
        return n.find((k) => {
            return m[k].includes(key);
        }) || ''; 
    }
}

module.exports = Console;