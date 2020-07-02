const lib = require('../01. Sum of Numbers');
const expect = require('chai').expect;

describe('sum', function() {
    it('should return number when input is an array', function() {
        expect(lib.sum([1, 2, 3])).to.be.equal(6);
    });

    it('should return NaN when input is not an array', function() {
        expect(lib.sum('1, 2')).to.be.NaN;
    });

    it('should return sum when input is an array from strings', function() {
        expect(lib.sum(['3', '4'])).to.be.equal(7);
    });
});