function getInfo() {
    const stopId = document.querySelector('#stopId').value;
    const name = document.querySelector('#stopName');
    const buses = document.querySelector('#buses');

    fetch(`https://judgetests.firebaseio.com/businfo/${stopId}.json `)
        .then(r => r.json())
        .then(d => renderData(name, buses, d))
        .catch(() => errorHandling(name));
}

function renderData(name, buses, data) {
    name.textContent = data.name;
    for (const [busId, time] of Object.entries(data.buses)) {
        buses.innerHTML += `<li>Bus ${busId} arrives in ${time} minutes</li>`;
    }
}

function errorHandling(field) {
    field.textContent = 'Error';
}