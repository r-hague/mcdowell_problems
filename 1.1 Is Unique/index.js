function isUnique(str) {
    let myHashMap = new Map();
    // Loop through chars in string
    for (let i = 0; i < str.length; i++) {
        // if hashmap doesn't contain this char, add it. If hashmap does contain the char then it's a duplicate so return false.
        if (!myHashMap.has(str[i].toLowerCase())) {
            myHashMap.set(str[i].toLowerCase(), 0);
        } else {
            return false;
        }
    }
    // return true if the false return hasn't been hit, meaning the string has no duplicates
    return true;
}

const mocha = require('mocha');
const chai = require('chai');

const assert = chai.assert;

describe('randomTest', () => {

    it('should give true with all unique chars', () => {
        var word = "abc";
        assert.equal(isUnique(word), true);
    })

    it('should give false with duplicate characters', () => {
        var word = "aba";
        assert.equal(isUnique(word), false);
    })


})