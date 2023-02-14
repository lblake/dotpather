"use strict";
module.exports = dotpath;
function dotpath(str) {
    const parts = str.split('.');
    const len = parts.length;
    return function parse(obj) {
        let testKey;
        for (var i = 0; i < len; ++i) {
            testKey = parts[i];
            if (!obj)
                return;
            console.log(obj);
            obj = obj[testKey];
        }
        return obj;
    };
}
