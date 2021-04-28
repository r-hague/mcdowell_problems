function UrlifyString(myStr) {
    myUrlify = myStr.trim().replace(/ +/g, '%20');
    return myUrlify;
}


const mocha = require("mocha");
const chai = require("chai");
const assert = chai.assert;

describe('randomTest', () => {

    it('happy path', () => {
        var myStr = "Rachel Stevens"
        assert.strictEqual(UrlifyString(myStr), "Rachel%20Stevens");
    })

    it('inner spaces', () => {
        var myStr = "hi        Rachel"
        assert.strictEqual(UrlifyString(myStr), "hi%20Rachel");
    })

    it('lots of spaces', () => {
        var myStr = "  R a c h e l "
        assert.strictEqual(UrlifyString(myStr), "R%20a%20c%20h%20e%20l");
    })

})