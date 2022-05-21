const sumNumbers = require('./index');
const {assert} = require('chai');

describe('tests are nice', ()=>{
    it('is', ()=>{
        assert.equal(sumNumbers(3,4),7);
    });
    it('really is', ()=>{
        assert.equal(sumNumbers('3',4),7);
    });
});