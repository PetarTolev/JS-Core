function solve() {
    let inputText = document.getElementById('arr').value;
    let result = document.getElementById('result');

    let users = JSON.parse(inputText);

    const extractName = (user) => {
        const pattern = /[A-Z]{1}[a-z]{0,} [A-Z]{1}[a-z]{0,}/;
        let match = user.match(pattern);
        return match && match[0];
    };

    const extractPhoneNumber = (user) => {
        const pattern = /(\+359 \d \d{3} \d{3})|(\+359-\d-\d{3}-\d{3})/;
        let match = user.match(pattern);
        return match && match[0];
    };

    const extractEmail = (user) => {
        const pattern = /([a-z0-9]+@[a-z]+\.[a-z]{2,3})$/;
        let match = user.match(pattern);
        return match && match[0];
    };

    users.forEach(user => {
        const name = extractName(user);
        const phoneNumber = extractPhoneNumber(user);
        const email = extractEmail(user);

        if (!name || !phoneNumber || !email) {
            let errorElement = document.createElement('p');
            errorElement.textContent = 'Invalid data'
            result.appendChild(errorElement);
        }
        else {
            let nameElement = document.createElement('p');
            nameElement.textContent = `Name: ${name}`;
            result.appendChild(nameElement);

            let phoneNumberElement = document.createElement('p');
            phoneNumberElement.textContent = `Phone Number: ${phoneNumber}`;
            result.appendChild(phoneNumberElement);

            let emailElement = document.createElement('p');
            emailElement.textContent = `Email: ${email}`;
            result.appendChild(emailElement);
        }

        let dashes = document.createElement('p');
        dashes.textContent = '- - -';
        result.appendChild(dashes);
    });
}