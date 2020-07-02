const expected = require('chai').expect;
const lib = require('../02. Check for Symmetry').isSymmetric;

describe('isSymmetric function', function() {
    it('should return false when input is not array', function() {
        expected(lib('')).to.be.equal(false, 'input is string');
    });

    it('should return true when array is symmetric', function() {
        expected(lib([1, 2, 3, 2, 1])).to.be.true;
    });

    it('should return false when array is not symmetric', function() {
        expected(lib([1, 2, 3])).to.be.false;
    });
});