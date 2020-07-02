const { log } = require('console');
const { loadavg } = require('os');

const expected = require('chai').expect;
const lib = require('../04. Add Subtract').createCalculator;

describe('createCalculator function', function() {
    let libObj = lib();
    libObj.add(5);

    it('should return 5 when add 5', function() {
        expected(libObj.get()).to.be.equal(5);
    });

    it('should return 4 when add -1', function() {
        libObj.add(-1);
        expected(libObj.get()).to.be.equal(4);
    });

    it('should return -1 when subtract 5', function() {
        libObj.subtract(5);
        expected(libObj.get()).to.be.equal(-1);
    });

    it('should return NaN', function() {
        libObj.add('a');
        expected(libObj.get()).to.be.NaN;
    });
});