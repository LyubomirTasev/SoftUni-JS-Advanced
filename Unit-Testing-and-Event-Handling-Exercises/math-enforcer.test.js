const mathEnforcer = require('./math-enforcer.js');
const { assert } = require('chai');

describe('mathEnforcer function tests', () => {
    describe('addFive function tests', () => {
        // Tests with incorrect input
        it('returns undefined if parameter is a string', () => {
            assert.equal(mathEnforcer.addFive('wassup'), undefined);
        });
        it('returns undefined if parameter is an empty string', () => {
            assert.equal(mathEnforcer.addFive(''), undefined);
        });
        it('returns undefined if parameter is an array', () => {
            assert.equal(mathEnforcer.addFive([]), undefined);
        });
        it('returns undefined if parameter is an object', () => {
            assert.equal(mathEnforcer.addFive({}), undefined);
        });
        it('returns undefined if parameter is undefined', () => {
            assert.equal(mathEnforcer.addFive(undefined), undefined);
        });
        it('returns undefined if parameter is null', () => {
            assert.equal(mathEnforcer.addFive(null), undefined);
        });
        // Tests with correct input
        it('returns result', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
        });
        it('returns result', () => {
            assert.equal(mathEnforcer.addFive(-1), 4);
        });
        it('returns result', () => {
            assert.equal(mathEnforcer.addFive(2.5), 7.5);
        });
    });
    describe('subtractTen function tests', () => {
        // Tests with incorrect input
        it('returns undefined if parameter is a string', () => {
            assert.equal(mathEnforcer.subtractTen('wassup'), undefined);
        });
        it('returns undefined if parameter is an empty string', () => {
            assert.equal(mathEnforcer.subtractTen(''), undefined);
        });
        it('returns undefined if parameter is an array', () => {
            assert.equal(mathEnforcer.subtractTen([]), undefined);
        });
        it('returns undefined if parameter is an object', () => {
            assert.equal(mathEnforcer.subtractTen({}), undefined);
        });
        it('returns undefined if parameter is undefined', () => {
            assert.equal(mathEnforcer.subtractTen(undefined), undefined);
        });
        it('returns undefined if parameter is null', () => {
            assert.equal(mathEnforcer.subtractTen(null), undefined);
        });
        // Tests with correct input
        it('returns result', () => {
            assert.equal(mathEnforcer.subtractTen(10), 0);
        });
        it('returns result', () => {
            assert.equal(mathEnforcer.subtractTen(0), -10);
        });
        it('returns result', () => {
            assert.equal(mathEnforcer.subtractTen(-10), -20);
        });
        it('returns result', () => {
            assert.equal(mathEnforcer.subtractTen(10.5), 0.5);
        });
    });
    describe('sum function tests', () => {
        // Tests with incorrect input
        it('returns undefined if first parameter is not a number', () => {
            assert.equal(mathEnforcer.sum('yo',5), undefined);
            assert.equal(mathEnforcer.sum('',5), undefined);
            assert.equal(mathEnforcer.sum([],5), undefined);
            assert.equal(mathEnforcer.sum({},5), undefined);
            assert.equal(mathEnforcer.sum(undefined,5), undefined);
            assert.equal(mathEnforcer.sum(null,5), undefined);
        });
        it('returns undefined if second parameter is not a number', () => {
            assert.equal(mathEnforcer.sum(5, 'sup'), undefined);
            assert.equal(mathEnforcer.sum(5, ''), undefined);
            assert.equal(mathEnforcer.sum(5, []), undefined);
            assert.equal(mathEnforcer.sum(5, {}), undefined);
            assert.equal(mathEnforcer.sum(5, undefined), undefined);
            assert.equal(mathEnforcer.sum(5, null), undefined);
        });
        // Tests with correct input
        it('returns result', () => {
            assert.equal(mathEnforcer.sum(5,5), 10);
        });
        it('returns result', () => {
            assert.equal(mathEnforcer.sum(-5,5), 0);
        });
        it('returns result', () => {
            assert.equal(mathEnforcer.sum(5,-5), 0);
        });
        it('returns result', () => {
            assert.equal(mathEnforcer.sum(-5,-5), -10);
        });
        it('returns result', () => {
            assert.equal(mathEnforcer.sum(5.5,5), 10.5);
        });
        it('returns result', () => {
            assert.equal(mathEnforcer.sum(5,5.5), 10.5);
        });
    });
});