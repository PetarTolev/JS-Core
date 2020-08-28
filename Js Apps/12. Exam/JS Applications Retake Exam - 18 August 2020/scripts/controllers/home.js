import { getShoes } from '../data.js'

export default async function() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        main: await this.load('./templates/common/main.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        shoe: await this.load('./templates/shoes/shoe.hbs'),
        shoes: await this.load('./templates/shoes/shoes.hbs')
    };

    const token = localStorage.getItem('userToken');

    if (token !== null) {
        Handlebars.registerPartial('shoe', this.partials.shoe);
        const shoes = await getShoes();

        if (shoes.length > 0) {
            Object.assign(this.app.userData, { shoes, hasShoes: true });
        }
    }

    this.partial('./templates/home/home.hbs', this.app.userData);
}