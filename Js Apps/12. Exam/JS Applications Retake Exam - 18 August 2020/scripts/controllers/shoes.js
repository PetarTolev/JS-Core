import { addShoe, getShoeById, updateShoe, deleteShoe } from '../data.js'

export async function createGet() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        main: await this.load('./templates/shoes/create.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
    };

    this.partial('./templates/home/home.hbs', this.app.userData);
}

export async function createPost() {
    const { name, price, imageUrl, description, brand } = this.params;

    if (name === '' || price === '' || imageUrl === '' || description === '' || brand === '') {
        alert('All fields are required!')
        return;
    }

    const priceAsNum = Number(price);

    if (isNaN(priceAsNum)) {
        alert('The price must be a number!');
        return;
    }

    const result = await addShoe(name, priceAsNum, imageUrl, description, brand);

    errorHandler(result);

    this.redirect('/');
}

export async function details() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        main: await this.load('./templates/shoes/details.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
    };

    const id = this.params.id;
    const result = await getShoeById(id);
    errorHandler(result);

    const userId = localStorage.getItem('userId');
    const buyers = result.buyers === null ? [] : result.buyers.split(', ');
    const email = localStorage.getItem('email');

    if (buyers.includes(email)) {
        result.isPurchased = true;
    }

    result.isOwner = result.ownerId === userId;
    Object.assign(this.app.userData, result);

    this.partial('./templates/home/home.hbs', this.app.userData);
}

export async function editGet() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        main: await this.load('./templates/shoes/edit.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
    };

    const id = this.params.id;
    const result = await getShoeById(id);
    errorHandler(result);
    Object.assign(this.app.userData, result);

    this.partial('./templates/home/home.hbs', this.app.userData);
}

export async function editPost() {
    const id = this.params.id;

    const shoe = await getShoeById(id);
    errorHandler(shoe);

    const { name, price, imageUrl, description, brand } = this.params;

    const priceAsNum = Number(price);

    if (isNaN(priceAsNum)) {
        alert('The price must be a number!');
        return;
    }

    shoe.name = name;
    shoe.price = priceAsNum;
    shoe.imageUrl = imageUrl;
    shoe.description = description;
    shoe.brand = brand;

    const result = await updateShoe(shoe);
    errorHandler(result);

    this.redirect(`#/details/${id}`);
}

export async function deleteGet() {
    const id = this.params.id;
    const result = await deleteShoe(id);
    errorHandler(result);

    this.redirect('/')
}

export async function buyGet() {
    const email = localStorage.getItem('email');
    const id = this.params.id;
    const shoe = await getShoeById(id);
    errorHandler(shoe);

    shoe.boughtCount++;

    const buyers = shoe.buyers === null ? [] : shoe.buyers.split(', ');

    if (!buyers.includes(email)) {
        shoe.buyers += `, ${email}`;
    }

    const result = await updateShoe(shoe);
    errorHandler(result);

    this.redirect(`#/details/${id}`);
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