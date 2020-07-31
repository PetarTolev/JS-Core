import { getMovies, getMyMovies, createMovie, getMovieById, updateMovie } from '../data.js'

export async function cinema() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        movie: await this.load('./templates/movies/allMovies/movie.hbs'),
        main: await this.load('./templates/movies/allMovies/cinema.hbs')
    };

    Handlebars.registerPartial('movie', this.partials.movie);

    //#region remove
    const a = await getMovies();
    console.log(a);
    //#endregion 

    Object.assign(this.app.userData, { movies: a })

    this.partial('./templates/home/home.hbs', this.app.userData);
}

export async function addMovieGet() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        main: await this.load('./templates/movies/addMovie.hbs')
    };

    this.partial('./templates/home/home.hbs', this.app.userData);
}

export async function addMoviePost() {
    const { title, imageUrl, description, genres, tickets } = this.params;

    try {
        const result = await createMovie(title, imageUrl, description, genres, tickets, 2020);

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
    let a = Object.assign(this.app.userData, { movies: await getMyMovies() })

    console.log(a);
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