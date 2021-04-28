function checkPerm(a, b) {
    if (a.length != b.length) {
      return false;
    } else {
      aSortedArr = a.split("").sort();
      bSortedArr = b.split("").sort();
      for (let i = 0; i < aSortedArr.length; i++){
        if (aSortedArr[i] != bSortedArr[i]){
          return false;
        }
      }
      return true;
    }
  }
  
  const mocha = require('mocha');
  const chai = require ('chai');
  
  const assert = chai.assert;
  
  describe('randomTest', () => {
    
      it('should give false with different lengths', () => {
      var word = "1a";
      var otherWord = "1bb";
      assert.equal(checkPerm(word, otherWord), false);
    })
    
      it('should give false with non-permutations, same length', () => {
      var word = "1a";
      var otherWord = "1b";
      assert.equal(checkPerm(word, otherWord), false);
    })
    
      it('should give true with permutations', () => {
      var word = "car";
      var otherWord = "acr";
      assert.equal(checkPerm(word, otherWord), true);
    })
    
  })
