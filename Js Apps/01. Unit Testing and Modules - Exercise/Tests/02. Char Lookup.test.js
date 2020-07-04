const expect = require('chai').expect;
const func = require('../02. Char Lookup');

const inputs = [
    ['input', 0, 'i'],
    ['input', 2, 'p'],
    ['input', 4, 't'],
    ['input', -1, 'Incorrect index'],
    ['input', 5, 'Incorrect index'],
    ['input', 6, 'Incorrect index']
];

describe('Char lookup', () => {
    inputs.forEach(i => it(`${i[0]}, ${i[1]} => ${i[2]}`, () => {
        expect(func(i[0], i[1])).to.equal(i[2]);
    }));

    it("'', 0 => Incorrect index", () => {
        expect(func('', 0)).to.equal('Incorrect index');
    });

    it("'', 1 => Incorrect index", () => {
        expect(func('', 1)).to.equal('Incorrect index');
    });

    it('{} => undefined', () => {
        expect(func({}, 1)).to.be.undefined;
    });

    it('[] => undefined', () => {
        expect(func([])).to.be.undefined;
    });

    it('1 => undefined', () => {
        expect(func(1)).to.be.undefined;
    });

    it('input, {} => undefined', () => {
        expect(func('input', {})).to.be.undefined;
    });

    it('input, [] => undefined', () => {
        expect(func('input', [])).to.be.undefined;
    });

    it('input, 1.1 => undefined', () => {
        expect(func('input', 1.1)).to.be.undefined;
    });

    it('input, string => undefined', () => {
        expect(func('input', 'string')).to.be.undefined;
    });
});