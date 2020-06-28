class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this._getCustomerByPersonalId(customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }

        this.allCustomers.push({...customer, totalMoney: 0, transactions: [] });
        return customer;
    }

    depositMoney(personalId, amount) {
        let c = this._getCustomerByPersonalId(personalId);

        if (!c) {
            throw new Error('We have no customer with this ID!');
        }

        c.totalMoney += amount;
        c.transactions.push(`${c.firstName} ${c.lastName} made deposit of ${amount}$!`)

        return c.totalMoney + '$';
    }

    withdrawMoney(personalId, amount) {
        let c = this._getCustomerByPersonalId(personalId);

        if (!c) {
            throw new Error('We have no customer with this ID!');
        }

        if (c.totalMoney - amount < 0) {
            throw new Error(`${c.firstName} ${c.lastName} does not have enough money to withdraw that amount!`)
        }

        c.totalMoney -= amount;
        c.transactions.push(`${c.firstName} ${c.lastName} withdrew ${amount}$!`);

        return c.totalMoney + '$';
    }

    customerInfo(personalId) {
        let c = this._getCustomerByPersonalId(personalId);
        let res = [];
        res.push(`Bank name: ${this._bankName}`);
        res.push(`Customer name: ${c.firstName} ${c.lastName}`);
        res.push(`Customer ID: ${c.personalId}`);
        res.push(`Total Money: ${c.totalMoney}$`);
        res.push('Transactions:');
        for (let i = c.transactions.length; i >= 1; i--) {
            res.push(`${i}. ${c.transactions[i - 1]}`);
        }

        return res.join('\n');
    }

    _getCustomerByPersonalId(personalId) {
        return this.allCustomers.find(c => c.personalId === personalId);
    }
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));