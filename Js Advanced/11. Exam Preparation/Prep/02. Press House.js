function solveClasses() {
    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Title: ${this.title}\nContent: ${this.content}`;
        }
    }

    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            if (content.length > 150) {
                throw Error('Short reports content should be less then 150 symbols.');
            }

            if (!originalResearch.title || !originalResearch.author) {
                throw Error('The original research should have author and title.');
            }

            super(title, content);
            this.originalResearch = originalResearch;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
            return 'The comment is added.';
        }

        toString() {
            let res = super.toString() + `\nOriginal Research: ${this.originalResearch.title} by ${this.originalResearch.author}\n`;

            if (this.comments.length > 0) {
                res += 'Comments:\n';
            }

            for (const comment of this.comments) {
                res += comment + '\n';
            }

            return res.trim();
        }
    }
    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content);
            this.book = book;
            this.clients = [];
        }

        addClient(clientName, orderDescription) {
            if (this.clients.some(c => c.clientName === clientName && c.orderDescription === orderDescription)) {
                throw Error('This client has already ordered this review.');
            }

            this.clients.push({ clientName, orderDescription });
            return `${clientName} has ordered a review for ${this.book.name}`;
        }

        toString() {
            let res = super.toString() + `\nBook: ${this.book.name}\n`;

            if (this.clients.length > 0) {
                res += 'Orders:\n';
            }

            for (const client of this.clients) {
                res += `${client.clientName} - ${client.orderDescription}\n`;
            }

            return res.trim();
        }
    }

    return {
        Article,
        ShortReports,
        BookReview
    }
}