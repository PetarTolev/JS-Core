function solve() {
    class Pet {
        constructor(owner, name) {
            this.owner = owner;
            this.name = name;
            this.comments = [];
        }

        addComment(comment) {
            if (this.comments.some(x => x === comment)) {
                throw new Error('This comment is already added!');
            }

            this.comments.push(comment);
            return 'Comment is added.';
        }

        feed() {
            return `${this.name} is fed`;
        }

        toString() {
            let resString = `Here is ${this.owner}'s pet ${this.name}.`;
            if (this.comments.length === 0) {
                return resString.trim();;
            }

            let res = [];
            this.comments.forEach(c => res.push(c));
            return (resString + '\n' + 'Special requirements: ' + res.join(', ')).trim();
        }
    };

    class Cat extends Pet {
        constructor(owner, name, insideHabits, scratching) {
            super(owner, name);
            this.insideHabits = insideHabits;
            this.scratching = scratching;
        }

        feed() {
            return (super.feed() + ', happy and purring.').trim();
        }

        toString() {
            return (super.toString() + `\nMain information:\n${this.name} is a cat with very good habits${this.scratching === true ? ', but beware of scratches.' : ''}`).trim();
        }
    };

    class Dog extends Pet {
        constructor(owner, name, runningNeeds, trainability) {
            super(owner, name);
            this.runningNeeds = runningNeeds;
            this.trainability = trainability;
        }

        feed() {
            return (super.feed() + ', happy and wagging tail.').trim();
        }

        toString() {
            return (super.toString() + `\nMain information:\n${this.name} is a dog with need of ${this.runningNeeds}km running every day and ${this.trainability} trainability.`).trim();
        }
    };

    return {
        Pet,
        Cat,
        Dog
    };
}