class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = +ticketPrice;
        this.screenings = [];
        this.totalProfit = 0;
        this.totalSoldTickets = 0;
    }

    newScreening(date, hall, description) {
        if (this.screenings.includes(x => x.date === date && x.hall === hall)) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }

        this.screenings.push({ date, hall, description });

        return `New screening of ${this.movieName} is added.`;
    }

    endScreening(date, hall, soldTickets) {
        const screening = this.screenings.find(x => x.date === date && x.hall === hall);

        if (!screening) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }

        const currentProfit = soldTickets * this.ticketPrice;
        this.totalProfit += currentProfit;
        this.totalSoldTickets += soldTickets;

        const index = this.screenings.indexOf(screening);
        this.screenings.splice(index, 1);

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;
    }

    toString() {
        const res = [];

        res.push(`${this.movieName} full information:`);
        res.push(`Total profit: ${this.totalProfit.toFixed(0)}$`);
        res.push(`Sold Tickets: ${this.totalSoldTickets}`);

        if (this.screenings.length > 0) {
            res.push(`Remaining film screenings:`);
            this.screenings
                .sort((a, b) => a.hall.localeCompare(b.hall))
                .forEach(s => res.push(`${s.hall} - ${s.date} - ${s.description}`));
        } else {
            res.push('No more screenings!');
        }

        return res.join('\n').trim();
    }
}