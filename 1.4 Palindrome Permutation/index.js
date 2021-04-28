function PaliPerm(myStr) {
    //put string in lower case
    myStr = myStr.toLowerCase().replace(" ", "");
    
    //Generate a hashmap that countss the characters in the string
    let myHashMap = new Map();

    for (const c of myStr) {
        if (!myHashMap.has(c)) {
            myHashMap.set(c, 1);
        } else {
            myHashMap.set(c, myHashMap.get(c) + 1)
        }
    }

    // Iterate through the hashmap to see if there are any odd numbers 
    let x = 0;
    for (const [key, value] of myHashMap) {
        if (value % 2 != 0) {
            //If the length of the string is odd, then there can be a single character type with an odd number of occurances
            if ((myStr.length % 2 != 0) && (x === 0)) {
                x++;
            } else {
                return false;
            }
        }
    }
    return true;
}


const mocha = require("mocha");
const chai = require("chai");
const assert = chai.assert;

describe('randomTest', () => {

    it('should run, happy path', () => {
        var thisStr = "racecar"
        assert.strictEqual(PaliPerm(thisStr), true);
    })

    it('should run, other happy path', () => {
        var thisStr = "acbabc"
        assert.strictEqual(PaliPerm(thisStr), true);
    })

    it('should run, with spaces', () => {
        var thisStr = "ac bab c"
        assert.strictEqual(PaliPerm(thisStr), true);
    })


    it('should run, false', () => {
        var thisStr = "racingcar"
        assert.strictEqual(PaliPerm(thisStr), false);
    })
})