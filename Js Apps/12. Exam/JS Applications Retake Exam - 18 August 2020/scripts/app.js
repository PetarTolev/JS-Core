import home from './controllers/home.js'
import { loginGet, loginPost, registerGet, registerPost, logoutGet } from './controllers/user.js'
import { createGet, createPost, details, editGet, editPost, deleteGet, buyGet } from './controllers/shoes.js'

window.addEventListener('load', () => {
    const app = Sammy('main', function() {
        this.use('Handlebars', 'hbs');

        this.userData = {
            email: localStorage.getItem('email') || '',
            userId: localStorage.getItem('userId') || '',
        };

        this.get('index.html', home);
        this.get('#/home', home);
        this.get('/', home);

        this.get('#/login', loginGet);
        this.post('#/login', ctx => { loginPost.call(ctx) });

        this.get('#/register', registerGet);
        this.post('#/register', ctx => { registerPost.call(ctx) });

        this.get('#/logout', logoutGet);

        this.get('#/create', createGet);
        this.post('#/create', ctx => { createPost.call(ctx) });

        this.get('#/details/:id', details);

        this.get('#/edit/:id', editGet);
        this.post('#/edit/:id', ctx => { editPost.call(ctx) });

        this.get('#/delete/:id', deleteGet);
        this.get('#/buy/:id', buyGet);
    });

    app.run();
});