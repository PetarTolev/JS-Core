function solve(arr, sortingCriteria) {
    class Ticket {
        constructor(descriptor) {
            const [destination, price, status] = descriptor.split('|');
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    return arr.map(t => new Ticket(t))
        .sort((a, b) =>
            isNaN(a[sortingCriteria]) ?
            a[sortingCriteria].localeCompare(b[sortingCriteria]) :
            a[sortingCriteria] - b[sortingCriteria]
        );
}