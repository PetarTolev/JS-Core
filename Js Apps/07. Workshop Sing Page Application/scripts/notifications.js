const elements = {
    info: document.querySelector('#infoBox'),
    error: document.querySelector('#errorBox'),
    loading: document.querySelector('#loadingBox')
};

elements.info.addEventListener('click', hideInfo);
elements.error.addEventListener('click', hideError);

function hideInfo() {
    elements.info.style.display = 'none';
}

export function showInfo(message) {
    elements.info.style.display = 'block';
    elements.info.children[0].textContent = message;

    setTimeout(hideInfo, 3000);
}

function hideError() {
    elements.error.style.display = 'none';
}

export function showError(message) {
    elements.error.style.display = 'block';
    elements.error.children[0].textContent = message;

    setTimeout(hideError, 3000);
}

let requests = 0;

export function beginRequest() {
    requests++;
    elements.loading.style.display = 'block';
}

export function endRequest() {
    requests--;

    if (requests === 0) {
        elements.loading.style.display = 'none';
    }
}