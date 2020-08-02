import { login, register, logout } from '../data.js'
import { showInfo, showError, beginRequest, endRequest } from '../notifications.js'

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
        this.app.userData.userId = result.objectId;
        localStorage.setItem('userToken', result['user-token']);
        localStorage.setItem('username', result.username);
        localStorage.setItem('userId', result.objectId);

        showInfo(`Logged in as ${result.username}!`);

        this.redirect('#/home');
    } catch (err) {
        console.error(err);
        showError(err.message);
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
    try {
        if (this.params.password !== this.params.repeatPassword) {
            throw new Error('Password don\'t match');
        }
        if (this.params.username.length < 3) {
            throw new Error('Username must be at least 3 characters long');
        }
        if (this.params.password.length < 6) {
            throw new Error('Password must be at least 6 characters long');
        }

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

        showInfo('Successfully registered!');

        this.redirect('#/home');
    } catch (err) {
        console.error(err);
        showError(err.message);
    }
}

export async function logoutGet() {
    try {
        const result = await logout();
        if (result.hasOwnProperty('errorData')) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        localStorage.removeItem('userToken');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        this.app.userData.username = '';
        this.app.userData.userId = '';

        showInfo('Successfully logged out');

        this.redirect('#/home');
    } catch (err) {
        console.error(err);
        showError(err.message);
    }
}