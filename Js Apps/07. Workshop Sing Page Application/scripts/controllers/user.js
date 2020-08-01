import { login, register, logout } from '../data.js'

export async function loginGet() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        main: await this.load('./templates/user/login.hbs')
    };

    this.partial('./templates/home/home.hbs');
}

export async function loginPost() {
    try {
        const result = await login(this.params.username, this.params.password);

        if (result.hasOwnProperty('errorData')) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        this.app.userData.username = result.username;
        localStorage.setItem('userToken', result['user-token']);
        localStorage.setItem('username', result.username);
        localStorage.setItem('userId', result.objectId);
        this.redirect('#/home');
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

export async function registerGet() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        main: await this.load('./templates/user/register.hbs')
    };

    this.partial('./templates/home/home.hbs');
}

export async function registerPost() {
    if (this.params.password !== this.params.repeatPassword) {
        alert("Password don't match");
        return;
    }

    try {
        const result = await register(this.params.username, this.params.password);
        if (result.hasOwnProperty('errorData')) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        this.app.userData.username = result.username;
        localStorage.setItem('userToken', result['user-token']);
        localStorage.setItem('username', result.username);
        localStorage.setItem('userId', result.objectId);

        this.redirect('#/home');
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

export async function logoutGet() {
    await logout();

    this.app.userData.username = undefined;
    localStorage.removeItem('userToken');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');

    this.redirect('#/home');
}