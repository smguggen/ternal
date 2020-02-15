class Console {
    constructor() {
        this.maps = require('../lib/map.json');
        this.close = '\x1b[0m';
    }
    
    static echo(settings, text) {
        let c = new Console();
        c.format = false;
        c._parseIncoming(settings);
        console.log(c.open + c.close, text);
    }
    
    print(text) {
        console.log(this.open + this.close, text);
    }
    
    reset(text) {
        text = text || '';
        console.log(this.close, text);
    }
    
    set(settings, text) {
        text = text || '';
        this._parseIncoming(settings);
        console.log(this.open, text)
    }

    set format(name) {
        if (!this._format) {
            this._format = [];
        }
        if (name === false) {
            this._format = [];
        } else {
            if (typeof name === 'string') {
                name = name.split(';');
            }
            name.forEach(n => {
                let nm = this._map('format', n)
                if (!this._format.includes(nm)) {
                    this._format.push(nm);
                }
            }, this);
        }
    }
    get format() {
        let f = this._format && this._format.length ? this._format : [];
        return f.join(';');
    }
    
    set color(name) {
        this._color = this._map('color', name);
    }
    get color() {
        return this._color || 37;
    }
    
    set bg(name) {
        this._bg = this._map('bg', name);
    }
    get bg() {
        return this._bg && this._bg != "0" ? this._bg : null;
    }
    
    get open() {
        let op = '\x1b[__m%s';
        let code = [this.format, this.color, this.bg].filter(t => t && t.length ?true : false).join(';');
        return op.replace('__', code);
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
            color = arr.color;
            bg = arr.bg;
            format = arr.format;
        }
        if (format) {
            this.format = format;
        } 
        if (color) {
            this.color = color;
        }
        if (bg) {
            this.bg = bg;
        }
    }
    
    _map(map, key) {
        key = key.toLowerCase();
        map = map.toLowerCase();
        let m = this.maps[map];
        if (!m) {
            return null;
        }
        let n = Object.keys(m);
        return n.find((k) => {
            return m[k].includes(key);
        }); 
    }
    
    _template(type, name) {

        if (!this['_' + type]) {
            this['_' + type] = [];
        }
        if (name === false) {
            this['_' + type] = [];
        } else {
            let nm = this._map(type, name);
            this['_' + type].push(nm);
        }
    }
}

module.exports = Console;