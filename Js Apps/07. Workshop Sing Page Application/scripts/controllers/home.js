export default async function() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        main: await this.load('./templates/common/background.hbs')
    };

    this.partial('./templates/home/home.hbs', this.app.userData);
}