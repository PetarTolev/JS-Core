function attachEvents() {
    getElement('#submit')
        .addEventListener('click', async() => {
            const locationValue = getElement('#location').value;

            try {
                const data = await makeFetch('locations.json');
                const { code } = data.find(x => x.name === locationValue);
                let current = await makeFetch(`forecast/today/${code}.json`);
                let upcoming = await makeFetch(`forecast/upcoming/${code}.json`);

                renderCurrent(current);
                renderUpcoming(upcoming);
            } catch (error) {
                const current = getElement('#current');
                const upcoming = getElement('#upcoming');
                trim(current);
                trim(upcoming);

                current.appendChild(createElement('div', undefined, 'Error'));
                upcoming.appendChild(createElement('div', undefined, 'Error'));
            }

            getElement('#forecast').style.display = 'block';
            getElement('#location').value = '';
        });
}

function createElement(tag, classes, content) {
    const el = document.createElement(tag);

    function append(node) {
        if (typeof node === 'string') {
            node = document.createTextNode(node);
        }

        el.appendChild(node);
    }

    if (Array.isArray(content)) {
        content.forEach(e => {
            append(e);
        });
    } else {
        append(content);
    };

    if (classes !== undefined) {
        if (Array.isArray(classes)) {
            classes.forEach(c => {
                el.classList.add(c);
            });
        } else {
            el.classList.add(classes);
        }
    }

    return el;
}

const weatherMap = {
    'Sunny': '☀',
    'Partly sunny': '⛅',
    'Overcast': '☁',
    'Rain': '☔',
};

function renderCurrent(data) {
    const parent = getElement('#current');
    trim(parent);
    parent.appendChild(a = createElement('div', 'forecast', [
        createElement('span', ['condition', 'symbol'], weatherMap[data.forecast.condition]),
        createElement('span', 'condition', [
            createElement('span', 'forecast-data', data.name),
            createElement('span', 'forecast-data', `${data.forecast.low}°/${data.forecast.high}°`),
            createElement('span', 'forecast-data', data.forecast.condition),
        ])
    ]));
}

function renderUpcoming(data) {
    const parent = getElement('#upcoming');
    trim(parent);

    const forecastEl = createElement('div', 'forecast-info', '');
    data.forecast.forEach(e => {
        forecastEl.appendChild(createElement('span', 'upcoming', [
            createElement('span', 'symbol', weatherMap[e.condition]),
            createElement('span', 'forecast-data', `${e.low}°/${e.high}°`),
            createElement('span', 'forecast-data', e.condition),
        ]));
    });

    parent.appendChild(forecastEl);
}

function trim(el) {
    const elementForDelete = el.querySelector('.label + div');

    if (elementForDelete === null) {
        return;
    }

    elementForDelete.remove();
}

function makeFetch(url) {
    const baseUrl = `https://judgetests.firebaseio.com/${url}`;

    return fetch(baseUrl)
        .then(r => r.json());
}

function getElement(selector) {
    return document.querySelector(selector);
}

attachEvents();