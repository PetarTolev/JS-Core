import home from './controllers/home.js'
import { loginGet, loginPost, registerGet, registerPost, logoutGet } from './controllers/user.js'
import { cinema, addMovieGet, addMoviePost, myMovies, buyTicket, details } from './controllers/movies.js'

window.addEventListener('load', () => {
    const app = Sammy('#container', function() {
        this.use('Handlebars', 'hbs');

        this.userData = {
            isLoggedIn: false,
            username: 'Petar'
        };

        this.get('index.html', home);
        this.get('#/home', home);
        this.get('/', home);

        this.get('#/login', loginGet);
        this.post('#/login', ctx => { loginPost.call(ctx) });

        this.get('#/register', registerGet);
        this.post('#/register', ctx => { registerPost.call(ctx) });

        this.get('#/logout', logoutGet);

        this.get('#/cinema', cinema);

        this.get('#/addMovie', addMovieGet);
        this.post('#/addMovie', ctx => { addMoviePost.call(ctx) });

        this.get('#/myMovies', myMovies);

        this.get('#/buyTicket/:id', buyTicket);

        this.get('#/details/:id', details);
    });

    app.run();
});