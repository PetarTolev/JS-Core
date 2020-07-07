function solve() {
    const infoEl = document.querySelector('#info');
    const departBtn = document.querySelector('#depart');
    const arriveBtn = document.querySelector('#arrive');
    let name;
    let next = 'depot';

    function depart() {
        departBtn.disabled = true;
        arriveBtn.disabled = false;

        fetch(`https://judgetests.firebaseio.com/schedule/${next}.json`)
            .then(r => r.json())
            .then(d => {
                infoEl.textContent = 'Next stop ' + d.name;
                return d;
            })
            .then(d => {
                next = d.next;
                return d;
            })
            .then(d => {
                name = d.name;
                return d;
            })
            .catch();
    }

    function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;

        infoEl.textContent = 'Arriving at ' + name;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();