function host(endpoint) {
    return `https://api.backendless.com/A7B76E5D-D2A9-F7E5-FFD3-A82A1997F800/02537667-F68C-40D8-B859-CF6488D16FEF/${endpoint}`;
}

const endpoints = {
    REGISTER: 'users/register',
    LOGIN: 'users/login',
    LOGOUT: 'users/logout',
    MOVIES: 'data/movies',
};

export async function register(username, password) {
    return (await fetch(host(endpoints.REGISTER), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })).json();
}

export async function login(username, password) {
    return (await fetch(host(endpoints.LOGIN), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: username,
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

export async function createMovie(title, image, description, genres, ticketsCount, year) {
    //TODO: add validation
    const token = localStorage.getItem('userToken');

    if (!token) {
        throw new Error('User is not logged in!');
    }

    const result = await (await fetch(host(endpoints.MOVIES), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify({
            title,
            description,
            genres,
            year,
            "ticketsCount": Number(ticketsCount),
            image
        })
    })).json();


    //extract function 
    if (result.hasOwnProperty('errorData')) {
        const error = new Error();
        Object.assign(error, result);
        throw error;
    }

    return result;
}

export async function getMovieById(id) {
    return (await fetch(host(endpoints.MOVIES + `/${id}`))).json();
    //Add error handling if movie not exist
}

export async function getMovies() {
    return (await fetch(host(endpoints.MOVIES))).json();
}

export async function getMyMovies() {
    const userId = localStorage.getItem('userId');

    return (await fetch(host(endpoints.MOVIES + `?where=ownerId%20%3D%20%27${userId}%27`))).json();
}

export async function deleteMovie(id) {
    const token = getToken();

    const result = (await fetch(host(endpoints.MOVIES + `/${id}`), {
        method: 'DELETE',
        headers: {
            'user-token': token
        }
    })).json();

    if (result.hasOwnProperty('errorData')) {
        const error = new Error();
        Object.assign(error, result);
        throw error;
    }

    return result;
}

export async function updateMovie(movie) {
    const token = localStorage.getItem('userToken');

    if (!token) {
        throw new Error('User is not logged in!');
    }

    const result = await (await fetch(host(endpoints.MOVIES + `/${movie.objectId}`), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify(movie)
    })).json();

    if (result.hasOwnProperty('errorData')) {
        const error = new Error();
        Object.assign(error, result);
        throw error;
    }

    return result;
}

function getToken() {
    const token = localStorage.getItem('userToken');

    if (!token) {
        throw new Error('User is not logged in!');
    }

    return token;
}