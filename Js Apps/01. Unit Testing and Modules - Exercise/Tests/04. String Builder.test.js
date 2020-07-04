const expect = require('chai').expect;
const StringBuilder = require('../04. String Builder');

let sb;

describe('StringBuilder', () => {

    describe('vrfyParam', () => {
        it('should throw error', () => {
            expect(() => StringBuilder._vrfyParam({})).to.throw();
            expect(() => StringBuilder._vrfyParam([])).to.throw();
            expect(() => StringBuilder._vrfyParam(1)).to.throw();
            expect(() => StringBuilder._vrfyParam(1.1)).to.throw();
            expect(() => StringBuilder._vrfyParam(undefined)).to.throw();
        });

        it('should not throw error', () => {
            expect(() => StringBuilder._vrfyParam('')).to.not.throw();
            expect(() => StringBuilder._vrfyParam('hello')).to.not.throw();
        });
    });

    describe('Instantiation', () => {
        it('valid input', () => {
            expect(new StringBuilder('hello')._stringArray.join('')).to.equal('hello');
        });

        it('empty input', () => {
            expect(new StringBuilder()._stringArray.length).to.equal(0);
        });
    });

    describe('append', () => {
        beforeEach(() => {
            sb = new StringBuilder('hello');
        });

        it('append valid string', () => {
            expect(() => sb.append('new string')).to.not.throw();
            expect(sb._stringArray.join('').endsWith('new string')).to.be.true;
        });

        it('not append invalid string', () => {
            expect(() => sb.append({})).to.throw();
            expect(sb._stringArray.join('')).to.be.equal('hello');
        });
    });

    describe('prepend', () => {
        beforeEach(() => {
            sb = new StringBuilder('hello');
        });

        it('prepend valid string', () => {
            expect(() => sb.prepend('new string')).to.not.throw();
            expect(sb._stringArray.join('').startsWith('new string')).to.be.true;
        });

        it('not prepend invalid string', () => {
            expect(() => sb.prepend({})).to.throw();
            expect(sb._stringArray.join('')).to.be.equal('hello');
        });
    });

    describe('insertAt', () => {
        beforeEach(() => {
            sb = new StringBuilder('hello');
        });

        it('aa, 2 => heaallo', () => {
            expect(() => sb.insertAt('aa', 2)).to.not.throw();
            expect(sb._stringArray.join('')).to.equal('heaallo');
        });
    });

    describe('remove', () => {
        beforeEach(() => {
            sb = new StringBuilder('hello');
        });

        it('0, 1 => ello', () => {
            expect(() => sb.remove(0, 1)).to.not.throw();
            expect(sb._stringArray.join('')).to.equal('ello');
        });

        it('3, 6 => hel', () => {
            expect(() => sb.remove(3, 6)).to.not.throw();
            expect(sb._stringArray.join('')).to.equal('hel');
        });
    });

    describe('toString', () => {
        beforeEach(() => {
            sb = new StringBuilder('hello');
        });

        it('should be correct string', () => {
            expect(sb.toString()).to.equal('hello');
        });

        it('should be empty string', () => {
            sb.remove(0, 5);
            expect(sb.toString()).to.equal('');
        });
    });
});