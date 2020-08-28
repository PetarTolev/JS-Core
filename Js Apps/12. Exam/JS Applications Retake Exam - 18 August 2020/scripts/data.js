function host(endpoint) {
    return `https://api.backendless.com/9B5FD8AB-F7E1-8B3E-FFD2-BFBB50AC2200/3A773D92-7AAD-465E-8BDB-DDA98328F635/${endpoint}`;
}

const endpoints = {
    REGISTER: 'users/register',
    LOGIN: 'users/login',
    LOGOUT: 'users/logout',
    SHOES: 'data/shoes',
};

export async function register(email, password) {
    return (await fetch(host(endpoints.REGISTER), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })).json();
}

export async function login(email, password) {
    return (await fetch(host(endpoints.LOGIN), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: email,
            password
        })
    })).json();
}

export async function logout() {
    const token = localStorage.getItem('userToken');

    if (!token) {
        throw new Error('User is not logged in!');
    }

    return fetch(host(endpoints.LOGOUT), {
        method: 'GET',
        headers: {
            'user-token': token
        }
    });
}

export async function getShoes() {
    return (await fetch(host(endpoints.SHOES))).json();
}

export async function addShoe(name, price, imageUrl, description, brand) {
    const token = localStorage.getItem('userToken');

    if (!token) {
        throw new Error('User is not logged in!');
    }

    const result = (await fetch(host(endpoints.SHOES), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify({ name, price, imageUrl, description, brand })
    })).json();

    if (result.hasOwnProperty('errorData')) {
        const error = new Error();
        Object.assign(error, result);
        throw error;
    }

    return result;
}

export async function getShoeById(id) {
    const token = localStorage.getItem('userToken');

    if (!token) {
        throw new Error('User is not logged in!');
    }

    return (await fetch(host(endpoints.SHOES + `/${id}`))).json();
}

export async function updateShoe(shoe) {
    const token = localStorage.getItem('userToken');

    if (!token) {
        throw new Error('User is not logged in!');
    }

    const result = await (await fetch(host(endpoints.SHOES + `/${shoe.objectId}`), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify(shoe)
    })).json();

    if (result.hasOwnProperty('errorData')) {
        const error = new Error();
        Object.assign(error, result);
        throw error;
    }

    return result;
}

export async function deleteShoe(id) {
    const token = localStorage.getItem('userToken');

    if (!token) {
        throw new Error('User is not logged in!');
    }

    const result = await (await fetch(host(endpoints.SHOES + `/${id}`), {
        method: 'DELETE',
        headers: { 'user-token': token }
    })).json();

    if (result.hasOwnProperty('errorData')) {
        const error = new Error();
        Object.assign(error, result);
        throw error;
    }

    return result;

}