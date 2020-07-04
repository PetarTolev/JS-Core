const expect = require('chai').expect;
const func = require('../01. Even or Odd');

const inputs = [
    ['a', 'odd'],
    ['aa', 'even'],
    ['aaa', 'odd'],
    ['aaaa', 'even']
];

describe('Even or Odd tests', () => {
    inputs.forEach(i => it(`${i[0]} => ${i[1]}`, () => {
        expect(func(i[0])).to.equal(i[1]);
    }));

    it('{} => undefined', () => {
        expect(func({})).to.be.undefined;
    });

    it('[] => undefined', () => {
        expect(func([])).to.be.undefined;
    });

    it('1 => undefined', () => {
        expect(func(1)).to.be.undefined;
    });
});