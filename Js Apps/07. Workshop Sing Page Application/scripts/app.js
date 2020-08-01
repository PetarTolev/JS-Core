import home from './controllers/home.js'
import { loginGet, loginPost, registerGet, registerPost, logoutGet } from './controllers/user.js'
import { cinema, addMovieGet, addMoviePost, myMovies, buyTicket, details, editGet, editPost, deleteMovie, deleteConfirmation } from './controllers/movies.js'

window.addEventListener('load', () => {
    const app = Sammy('#container', function() {
        this.use('Handlebars', 'hbs');

        this.userData = {
            username: localStorage.getItem('username') || '',
            userId: localStorage.getItem('userId') || '',
        };

        this.get('index.html', home);
        this.get('#/home', home);
        this.get('/', home);

        this.get('#/login', loginGet);
        this.post('#/login', ctx => { loginPost.call(ctx); });

        this.get('#/register', registerGet);
        this.post('#/register', ctx => { registerPost.call(ctx); });

        this.get('#/logout', logoutGet);

        this.get('#/cinema', cinema);

        this.get('#/addMovie', addMovieGet);
        this.post('#/addMovie', ctx => { addMoviePost.call(ctx); });

        this.get('#/myMovies', myMovies);

        this.get('#/buyTicket/:id', buyTicket);

        this.get('#/details/:id', details);

        this.get('#/edit/:id', editGet);
        this.post('#/edit/:id', ctx => { editPost.call(ctx); });

        this.get('#/delete/:id', deleteMovie);
        this.post('#/deleteConfirmation/:id', ctx => { deleteConfirmation.call(ctx); });
    });

    app.run();
});