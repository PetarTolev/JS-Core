class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;
        } else if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
    }

    like(username) {
        if (this._likes.includes(x => x === username)) {
            throw new Error("You can't like the same article twice!");
        }

        if (this.creator === username) {
            throw new Error("You can't like your own articles!");
        }

        this._likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        const index = this._likes.indexOf(username);

        if (index === -1) {
            throw new Error("You can't dislike this article!");
        }
        this._likes.splice(index, 1);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        const comment = this._comments.find(x => x.id === id);
        let currentId = 1;
        let currentReplyId = 1;
        if (this._comments.length > 0) {
            currentId = this._comments[this._comments.length - 1].id + 1;
        }

        if (id === undefined || comment === undefined) {
            this._comments.push({ id: currentId, username, content, replies: [] });
            return `${username} commented on ${this.title}`;
        }

        if (comment.replies.length > 0) {
            currentReplyId = Number(comment.replies[comment.replies.length - 1].id.split('.')[1]) + 1;
        }

        comment.replies.push({ id: comment.id + '.' + currentReplyId, username, content });
        return 'You replied successfully';
    }

    toString(sortingType) {
        const sortMap = {
            asc: (a, b) => a.id - b.id,
            desc: (a, b) => b.id - a.id,
            username: (a, b) => a.username.localeCompare(b.username)
        }

        let res = [];
        res.push(`Title: ${this.title}`);
        res.push(`Creator: ${this.creator}`);
        res.push(`Likes: ${this._likes.length}`);
        res.push('Comments:');

        for (const comment of this._comments.sort(sortMap[sortingType])) {
            res.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);

            if (comment.replies.length > 0) {
                for (const reply of comment.replies.sort(sortMap[sortingType])) {
                    res.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`);
                }
            }
        }

        return res.join('\n');
    }
}