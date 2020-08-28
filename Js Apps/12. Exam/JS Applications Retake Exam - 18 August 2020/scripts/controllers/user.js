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
    console.log(this.params);
    try {
        const result = await login(this.params.email, this.params.password);
        console.log(result);
        if (result.hasOwnProperty('errorData')) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        this.app.userData.isLoggedIn = true;
        this.app.userData.email = result.email;
        this.app.userData.userId = result.objectId;

        localStorage.setItem('userToken', result['user-token']);
        localStorage.setItem('email', result.email);
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
    console.log(this.params);

    if (this.params.email === "") {
        alert('Email is required!');
        return;
    }

    if (this.params.password.length < 6) {
        alert('Password should be at least 6 characters long!');
        return;
    }

    if (this.params.password !== this.params.repeatPassword) {
        alert("Password don't match");
        return;
    }

    try {
        const result = await register(this.params.email, this.params.password);
        console.log(result);
        if (result.hasOwnProperty('errorData')) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        loginPost.call(this);

        this.redirect('#/home');
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

export async function logoutGet() {
    await logout();

    this.app.userData.isLoggedIn = false;
    this.app.userData.email = undefined;
    localStorage.removeItem('userToken');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');

    this.redirect('#/home');
}