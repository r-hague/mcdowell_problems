function testMatchRepInsertDel(str1, str2) {
    const math = require("math")

    // return true if strings are equal
    if (str1 == str2) {
        return true;

        // return false if length of strings varies by more than 1
    } else if (math.abs(str1.length - str2.length) > 1) {
        //console.log("Hi from diff length");
        return false;

        //Evaluate for other cases
    } else {
        // Test for replacement
        if (str1.length == str2.length) {
            var oneChanceBool = true;
            for (var i = 0; i < str1.length; i++) {
                if (str1[i] != str2[i]) {
                    if (oneChanceBool == true) {
                        oneChanceBool = false;
                    } else {
                        return false;
                    }
                }
            }
            return true;
            //Test for insertion or deletion
        } else {
            if (str1.length < str2.length) {
                var strShort = str1;
                var strLong = str2;
            } else {
                var strShort = str2;
                var strLong = str1;
            }
            // loop through, removing one letter at a time from the longer string to see if any case matches the shorter string
            for (var i = 0; i < strLong.length; i++) {
                var newStr = strLong.substring(0, i) + strLong.substring(i + 1, strLong.length)
                if (newStr == strShort) {
                    return true;
                }
            }
            return false;
        }
    }
}

const mocha = require("mocha");
const chai = require("chai");
const assert = chai.assert;

describe('randomTest', () => {

    it('should return true with matching strings', () => {
        var str = "abc"
        assert.strictEqual(testMatchRepInsertDel(str, str), true);
    })

    it('should return false with different string lengths', () => {
        var str1 = "abc"
        var str2 = "YellowDuck"
        assert.strictEqual(testMatchRepInsertDel(str1, str2), false);
    })

    it('should return true with replacement', () => {
        var str1 = "cat"
        var str2 = "car"
        assert.strictEqual(testMatchRepInsertDel(str1, str2), true);
    })

    it('should return false with same length, diff chars', () => {
        var str1 = "dog"
        var str2 = "bar"
        assert.strictEqual(testMatchRepInsertDel(str1, str2), false);
    })

    it('should return true with insertion', () => {
        var str1 = "hit"
        var str2 = "hiat"
        assert.strictEqual(testMatchRepInsertDel(str1, str2), true);
    })

    it('should return true with deletion', () => {
        var str1 = "baby"
        var str2 = "bay"
        assert.strictEqual(testMatchRepInsertDel(str1, str2), true);
    })

    it('should return false with diff strings, length one off', () => {
        var str1 = "nag"
        var str2 = "gale"
        assert.strictEqual(testMatchRepInsertDel(str1, str2), false);
    })
})