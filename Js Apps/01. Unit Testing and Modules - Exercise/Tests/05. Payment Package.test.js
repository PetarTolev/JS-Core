const expect = require('chai').expect;
const PaymentPackage = require('../05. Payment Package');

describe('PaymentPackage', () => {
    const validName = 'Package';
    const validValue = 1;
    let package = null;

    describe('Instantiation and structure', () => {
        it('works with valid parameters', () => {
            expect(() => new PaymentPackage(validName, validValue)).to.not.throw();
        });

        it('does not work with invalid name', () => {
            expect(() => new PaymentPackage(undefined)).to.throw();
            expect(() => new PaymentPackage(1)).to.throw();
            expect(() => new PaymentPackage([])).to.throw();
            expect(() => new PaymentPackage({})).to.throw();
        });

        it('does not work with invalid value', () => {
            expect(() => new PaymentPackage(validName, undefined)).to.throw();
            expect(() => new PaymentPackage(validName, '')).to.throw();
            expect(() => new PaymentPackage(validName, [])).to.throw();
            expect(() => new PaymentPackage(validName, {})).to.throw();
        });

        it('should has all properties', () => {
            package = new PaymentPackage(validName, validValue);

            expect(package).to.have.property('name');
            expect(package).to.have.property('value');
            expect(package).to.have.property('VAT');
            expect(package).to.have.property('active');
        });
    });

    describe('accessors', () => {
        beforeEach(() => {
            package = new PaymentPackage(validName, validValue);
        });

        it('accepts and sets valid name', () => {
            expect(() => package.name = 'new name').to.not.throw();
            expect(package.name).to.equal('new name');
        });

        it('reject invalid name', () => {
            expect(() => package.name = undefined).to.throw();
            expect(() => package.name = 1).to.throw();
            expect(() => package.name = '').to.throw();
            expect(() => package.name = {}).to.throw();
            expect(() => package.name = []).to.throw();
        });

        it('accepts and sets valid value', () => {
            expect(() => package.value = 2).to.not.throw();
            expect(package.value).to.equal(2);
        });

        it('reject invalid value', () => {
            expect(() => package.value = undefined).to.throw();
            expect(() => package.value = -1).to.throw();
            expect(() => package.value = '').to.throw();
            expect(() => package.value = {}).to.throw();
            expect(() => package.value = []).to.throw();
        });

        it('accepts and sets valid VAT', () => {
            expect(() => package.VAT = 2).to.not.throw();
            expect(package.VAT).to.equal(2);
        });

        it('reject invalid VAT', () => {
            expect(() => package.VAT = undefined).to.throw();
            expect(() => package.VAT = -1).to.throw();
            expect(() => package.VAT = '').to.throw();
            expect(() => package.VAT = {}).to.throw();
            expect(() => package.VAT = []).to.throw();
        });

        it('accepts and sets valid active', () => {
            expect(() => package.active = false).to.not.throw();
            expect(package.active).to.be.false;
        });

        it('reject invalid VAT', () => {
            expect(() => package.active = undefined).to.throw();
            expect(() => package.active = -1).to.throw();
            expect(() => package.active = 1).to.throw();
            expect(() => package.active = '').to.throw();
            expect(() => package.active = 'aa').to.throw();
            expect(() => package.active = {}).to.throw();
            expect(() => package.active = []).to.throw();
        });
    });

    describe('toString tests', () => {
        beforeEach(() => {
            package = new PaymentPackage(validName, validValue);
        });

        it('contains the name', () => {
            expect(package.toString()).to.contain(validName);
        });

        it('contains the value', () => {
            expect(package.toString()).to.contain(validValue);
        });

        it('does not contains the inactive', () => {
            expect(package.toString()).to.not.contain('inactive');
        });

        it('contains the inactive', () => {
            package.active = false;
            expect(package.toString()).to.contain('inactive');
        });

        it('correct vat value', () => {
            package.value = 1500;
            expect(package.toString()).to.contain(`(VAT 20%): 1800`);
        });
    });
});