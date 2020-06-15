class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        this._validateInput(username);
        this._validateInput(salary);
        this._validateInput(position);
        this._validateInput(department);
        if (salary < 0) {
            throw new Error('Invalid input!');
        }

        let current = this.departments.find(d => d.name === department);

        if (current === undefined) {
            current = { name: department, employees: [] };
            this.departments.push(current);
        }

        let employee = { username, salary, position };
        current.employees.push(employee);

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        let hasd = this.departments.reduce((acc, curr) => {
            let average = curr.employees.reduce((a, b) => a + b.salary, 0) / curr.employees.length;
            if (acc.average === undefined || acc.average < average) {
                let sortedEmployees = curr.employees.sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));

                acc = { average: average, name: curr.name, employees: sortedEmployees };
            }
            return acc;
        }, {});

        let res =
            `Best Department is: ${hasd.name}\n` +
            `Average salary: ${hasd.average.toFixed(2)}\n`;

        hasd.employees.forEach(emp => {
            res += `${emp.username} ${emp.salary} ${emp.position}\n`;
        });

        return res.trim();
    }

    _validateInput(input) {
        if (input === undefined || input === null || input === '') {
            throw new Error('Invalid input!');
        }
    }
}