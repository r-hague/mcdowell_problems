function StringCompression(myStr) {
    let outStr = myStr[0] || "";
    let repCt = 1;
    for (var i = 1; i < myStr.length; i++) {
        if (myStr[i] == myStr[i - 1]) {
            repCt += 1;
        } else {
            outStr += repCt + myStr[i];
            repCt = 1;
        }
        if (i == myStr.length - 1) {
            outStr += repCt;
        }
    };

    if (outStr.length >= myStr.length) {
        return myStr;
    } else {
        return outStr;
    }
};


const mocha = require("mocha");
const chai = require("chai");
const assert = chai.assert;

describe('randomTest', () => {

    it('should return compressed string', () => {
        var repyStr = "aaaabbbbbbbccccccc"
        assert.strictEqual(StringCompression(repyStr), "a4b7c7");
    })

    it('should return compressed string with returning chars', () => {
        var repyStr = "aaaabbbbbbbaaccccccc"
        assert.strictEqual(StringCompression(repyStr), "a4b7a2c7");
    })

    it('should not return compressed string if longer than OG', () => {
        var noRepyStr = "cat"
        assert.strictEqual(StringCompression(noRepyStr), "cat");
    })

    it('should not return compressed string if same length as OG', () => {
        var bitRepyStr = "ffgg"
        assert.strictEqual(StringCompression(bitRepyStr), "ffgg");
    })

    it('should not crash for empty str', () => {
        var emptyStr = ""
        assert.strictEqual(StringCompression(emptyStr), "");
    })

})
