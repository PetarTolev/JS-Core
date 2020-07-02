const expected = require('chai').expect;
const lib = require('../03. RGB to HEX').rgbToHexColor;

describe('rgbToHexColor function', function() {
    it('should return undefined when red parameter is negative number', function() {
        expected(lib(-1, 1, 1)).to.be.undefined;
    });

    it('should return undefined when red parameter is over 255', function() {
        expected(lib(256, 1, 1)).to.be.undefined;
    });

    it('should return undefined when red parameter is string', function() {
        expected(lib('a', 1, 1)).to.be.undefined;
    });

    it('should return valid hex code', function() {
        expected(lib(252, 3, 3)).to.be.equal('#FC0303');
    });
});