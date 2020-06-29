class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = {};
        this.workload = 0;
        this.totalProfit = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.workload >= this.capacity) {
            throw new Error("Sorry, we are not able to accept more patients!");
        }

        if (this.clients[ownerName] === undefined) {
            this.clients[ownerName] = {};
        }

        if (this.clients[ownerName][petName] === undefined) {
            this.clients[ownerName][petName] = {}
            this.clients[ownerName][petName].kind = kind;
            this.workload++;
        }

        if (this.clients[ownerName][petName].procedures && this.clients[ownerName][petName].procedures.length > 1) {
            throw new Error(`This pet is already registered under ${ ownerName } name! ${ petName } is on our lists, waiting for ${ this.clients[ownerName][petName].procedures.join(', ') }.`);
        }

        this.clients[ownerName][petName].procedures = procedures;
        return `Welcome ${petName}!`;
    }

    onLeaving(ownerName, petName) {
        if (this.clients[ownerName] === undefined) {
            throw new Error("Sorry, there is no such client!");
        }

        if (this.clients[ownerName][petName] === undefined || this.clients[ownerName][petName].procedures.length < 1) {
            throw new Error(`Sorry, there are no procedures for ${ petName }!`);
        }

        this.totalProfit += this.clients[ownerName][petName].procedures.length * 500;
        this.clients[ownerName][petName].procedures = [];
        this.workload--;

        return `Goodbye ${petName}. Stay safe!`;
    }

    toString() {
        let res = [];
        res.push(`${this.clinicName} is ${Math.floor(this.workload / this.capacity * 100)}% busy today!`);
        res.push(`Total profit: ${this.totalProfit.toFixed(2)}$`);

        for (const [name, pets] of Object.entries(this.clients).sort((a, b) => a[0].localeCompare(b[0]))) {
            res.push(`${name} with:`);

            for (const [pet, pair] of Object.entries(pets).sort((a, b) => a[0].localeCompare(b[0]))) {
                res.push(`---${pet} - a ${pair.kind.toLowerCase()} that needs: ${pair.procedures.join(', ')}`);
            }
        }

        return res.join('\n');
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.onLeaving('Jim Jones', 'Tom'));
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());