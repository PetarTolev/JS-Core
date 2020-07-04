const expect = require('chai').expect;
const obj = require('../03. Math Enforcer');

const incorrectInputs = [
    {},
    [],
    ''
];

const correctInputs = {
    '1': { add: 6, subtract: -9 },
    '-1': { add: 4, subtract: -11 },
    '1.1': { add: 6.1, subtract: -8.9 },
    '-1.1': { add: 3.9, subtract: -11.1 }
};

const sumInputs = [
    [1, 1, 2],
    [-1, 1, 0],
    [1, -1, 0],
    [0, -1, -1],
    [-1, -1, -2],
    [1.1, 1.1, 2.2],
    [-1.1, 10, 8.9],
    [-1.11111, 10, 8.88889]
];

describe('mathEnforcer tests', () => {
    describe('addFive tests', () => {
        incorrectInputs.forEach(i => it(`${JSON.stringify(i)} => undefined`, () => {
            expect(obj.addFive(i)).to.be.undefined;
        }));

        Object.entries(correctInputs).forEach(i => it(`${i[0]} => ${i[1].add}`, () => {
            expect(obj.addFive(Number(i[0]))).to.equal(i[1].add);
        }));
    });

    describe('subtractTen tests', () => {
        incorrectInputs.forEach(i => it(`${JSON.stringify(i)} => undefined`, () => {
            expect(obj.subtractTen(i)).to.be.undefined;
        }));

        Object.entries(correctInputs).forEach(i => it(`${i[0]} => ${i[1].subtract}`, () => {
            expect(obj.subtractTen(Number(i[0]))).to.equal(i[1].subtract);
        }));
    });

    describe('sum tests', () => {
        incorrectInputs.forEach(i => it(`${JSON.stringify(i)} => undefined`, () => {
            expect(obj.sum(i)).to.be.undefined;
        }));

        incorrectInputs.forEach(i => it(`1, ${JSON.stringify(i)} => undefined`, () => {
            expect(obj.sum(1, i)).to.be.undefined;
        }));

        sumInputs.forEach(i => it(`${i[0]}, ${i[1]} => ${i[2]}`, () => {
            expect(obj.sum(i[0], i[1])).to.equal(i[2]);
        }));
    });
});