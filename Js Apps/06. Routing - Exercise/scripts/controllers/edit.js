export default async function() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        editForm: await this.load('./templates/edit/editForm.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    };

    this.partial('./templates/edit/editPage.hbs', this.app.userData);
}