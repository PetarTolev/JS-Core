function loadRepos() {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('res').textContent = xhr.responseText;
        }
    });

    xhr.open('GET', 'https://api.github.com/repos/testnakov/test-nakov-repo');
    xhr.send();
}