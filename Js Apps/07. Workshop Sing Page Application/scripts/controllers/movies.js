import { getMovies, getMyMovies, createMovie, getMovieById, updateMovie, deleteMovie as deleteMovieGet } from '../data.js'

export async function cinema() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        movie: await this.load('./templates/movies/allMovies/movie.hbs'),
        main: await this.load('./templates/movies/allMovies/cinema.hbs')
    };

    Handlebars.registerPartial('movie', this.partials.movie);

    Object.assign(this.app.userData, { movies: await getMovies() })

    this.partial('./templates/home/home.hbs', this.app.userData);
}

export async function addMovieGet() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        main: await this.load('./templates/movies/add.hbs')
    };

    this.partial('./templates/home/home.hbs', this.app.userData);
}

export async function addMoviePost() {
    const { title, imageUrl, description, genres, tickets } = this.params;

    try {
        const result = await createMovie(title, imageUrl, description, genres, tickets, '');

        if (result.hasOwnProperty('errorData')) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        this.redirect('/');
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

export async function myMovies() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        movie: await this.load('./templates/movies/myMovies/movie.hbs'),
        main: await this.load('./templates/movies/myMovies/myMovies.hbs')
    };

    Handlebars.registerPartial('movie', this.partials.movie);
    Object.assign(this.app.userData, { movies: await getMyMovies() })

    this.partial('./templates/home/home.hbs', this.app.userData);
}

export async function buyTicket() {
    const movieId = this.params.id;

    const movie = await getMovieById(movieId);

    //validation 

    movie.ticketsCount--;
    try {
        const result = await updateMovie(movie);

        if (result.hasOwnProperty('errorData')) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        this.redirect('#/cinema');

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

export async function details() {
    const movieId = this.params.id;

    const movie = await getMovieById(movieId);

    //validation

    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        main: await this.load('./templates/movies/details.hbs')
    };

    Object.assign(this.app.userData, movie);

    this.partial('./templates/home/home.hbs', this.app.userData);
}

export async function editGet() {
    const movieId = this.params.id;
    const movie = await getMovieById(movieId);

    //validation

    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        main: await this.load('./templates/movies/edit.hbs')
    };

    Object.assign(this.app.userData, movie);

    this.partial('./templates/home/home.hbs', this.app.userData);
}

export async function editPost() {
    const userId = localStorage.getItem('userId');
    const movieId = this.params.id;
    const movie = await getMovieById(movieId);

    if (movie.ownerId !== userId) {
        this.redirect('/');
        console.log('not your movie');
        return;
    }

    movie.title = this.params.title;
    movie.description = this.params.description;
    movie.image = this.params.image;
    movie.genres = this.params.genres;
    movie.ticketsCount = Number(this.params.ticketsCount);

    const result = await updateMovie(movie);
    errorHandler(result);

    this.redirect('/');
}

export async function deleteMovie() {
    const movieId = this.params.id;
    const movie = await getMovieById(movieId);

    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        main: await this.load('./templates/movies/delete.hbs')
    };

    Object.assign(this.app.userData, movie)

    this.partial('./templates/home/home.hbs', this.app.userData);
}

export async function deleteConfirmation() {
    const movieId = this.params.id;
    const result = await deleteMovieGet(movieId);

    errorHandler(result);

    this.redirect('/');
}

function errorHandler(result) {
    try {
        if (result.hasOwnProperty('errorData')) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}