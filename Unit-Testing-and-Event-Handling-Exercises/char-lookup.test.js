const lookupChar = require('./char-lookup.js');
const {assert} = require('chai');

describe('char lookup function tests', ()=>{
    // Invalid tests
    it('should return undefined if parameters are not string or number', ()=>{
        assert.equal(lookupChar(10,'index'), undefined)
    });
    it('should return undefined if first parameter is not a string', ()=>{
        assert.equal(lookupChar(10,0), undefined)
    });
    it('should return undefined if second parameter is a decimal', ()=>{
        assert.equal(lookupChar('gucci',4.5), undefined)
    });
    it('should return undefined if second parameter is not a number', ()=>{
        assert.equal(lookupChar('gucci','L'), undefined)
    });
    it('should return Incorrect index if index value is bigger than string length', ()=>{
        assert.equal(lookupChar('gucci',6),'Incorrect index')
    });
    it('should return Incorrect index if index value is < 0', ()=>{
        assert.equal(lookupChar('gucci',-1), 'Incorrect index')
    });
    it('should return Incorrect index if string is empty', ()=>{
        assert.equal(lookupChar('',0), 'Incorrect index')
    });
    // Valid test
    it('should return char at the given index', ()=>{
        assert.equal(lookupChar('gucci',1), 'u')
    });
});