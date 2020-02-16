const Con = require('./console');

class Shell extends Con {
    constructor(args) {
        super();
        let settings = this._parseArgs(args);
        this.color = settings.color;
        this.bg = settings.bg;
        this.format = settings.format;
        this.text = settings.text;
    }
    
    static echo() {
        let c = new Shell();
        c.format = false;
        console.log(c.open + c.close, text);
    }
    
    set() {
        console.log(this.open, '');
    }
    
    reset() {
        console.log(this.close, '');
    }
    
    
    _parseArgs(settings) {
        settings = settings || [];
        let text, color, bg, format;
        let params = [];
        for (let i = 0; i < settings.length;i++) {
            let setting = settings[i];
            let next = settings[i+1] || '';
            if (setting.startsWith('-')) {
                let flag = setting.replace('-', '');
                switch(flag) {
                    case 'text':
                    case 't': text = next; i++;
                    break;
                    case 'color':
                    case 'c': color = next; i++;
                    break;
                    case 'background':
                    case 'bg': bg = next; i++;
                    break;
                    case 'format':
                    case 'f': format = next; i++;
                    break;
                }
            } else {
                params.push(setting);
            }
        }
        
        let [cr, br, fr, tx] = params;
        if (!tx) {
            tx = br;
            br = null;
            if (!tx) {
                tx = fr;
                fr = null;
            }
        }
        
        return {
            color: color || cr,
            bg: bg || br,
            format: format || fr,
            text: text || tx
        }      
    }
    
}

module.exports = Shell;