function result(command) {
    const commands = { upvote, downvote, score };

    function upvote() { this.upvotes += 1; }

    function downvote() { this.downvotes += 1; }

    function score() {
        let res = [this.upvotes, this.downvotes, undefined, undefined];
        const total = this.upvotes + this.downvotes;

        if (total > 50) {
            let votesForAdd = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);

            res[0] += votesForAdd;
            res[1] += votesForAdd;
        }

        const balance = this.upvotes - this.downvotes;
        res[2] = balance;

        if (this.upvotes / total > 0.66 && total > 10) {
            res[3] = 'hot';
        } else if (balance >= 0 && total > 100) {
            res[3] = 'controversial';
        } else if (balance < 0 && total >= 10) {
            res[3] = 'unpopular';
        } else {
            res[3] = 'new';
        }
        return res;
    }

    return commands[command].call(this);
}