function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },
        set(newFullName) {
            let splitted = newFullName.split(' ');
            if (splitted.length != 2) { return; }
            this.firstName = splitted[0];
            this.lastName = splitted[1];
        }
    });
}