const isOddOrEven = require('./even-or-odd.js');
const {assert} = require('chai');

describe('isOddOrEven function tests',()=>{
    // invalid input tests
    it('should return undefined if parameter is number', ()=>{
        assert.equal(isOddOrEven(10), undefined);
    });
    it('should return undefined if parameter is object', ()=>{
        assert.equal(isOddOrEven({}), undefined);
    });
    it('should return undefined if parameter is array', ()=>{
        assert.equal(isOddOrEven([]), undefined);
    });
    it('should return undefined if parameter undefined', ()=>{
        assert.equal(isOddOrEven(undefined), undefined);
    });
    it('should return undefined if parameter is null', ()=>{
        assert.equal(isOddOrEven(null), undefined);
    });
    // valid input tests
    it('should return even', ()=>{
        assert.equal(isOddOrEven('Hi'),'even');
    });
    it('should return odd', ()=>{
        assert.equal(isOddOrEven('Hello'),'odd');
    });
})