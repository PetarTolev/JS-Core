import { createTeam } from '../data.js'

export default async function() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        createForm: await this.load('./templates/create/createForm.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    };

    this.partial('./templates/create/createPage.hbs', this.app.userData);
}

export async function createPost() {
    const name = this.params.name;
    const comment = this.params.comment;

    if (name.length === 0 || comment.length === 0) {
        alert('All fields are required!');
        return;
    }

    try {
        const result = await createTeam({ name, comment });
        if (result.hasOwnProperty('errorData')) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        this.app.userData.hasTeam = true;
        this.app.userData.teamId = result.objectId;

        this.redirect(`#/catalog/${result.objectId}`);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}