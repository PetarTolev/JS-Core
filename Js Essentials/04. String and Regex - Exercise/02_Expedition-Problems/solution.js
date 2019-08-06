function solve() {
    const keyword = document.getElementById('string').value;
    const text = document.getElementById('text').value;

    const messageStringRegex = `${keyword}(.*)${keyword}`;
    const messagePattern = new RegExp(messageStringRegex, 'g');;

    const messageMatches = messagePattern.exec(text);
    const message = `Message: ${messageMatches[1]}`;

    const locationPattern = /(north|east).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gmi;
    let locationMatches = locationPattern.exec(text);
    
    let northMatch;
    let eastMatch;

    while (locationMatches !== null) {
        if (locationMatches[1].toUpperCase() === "NORTH") {
            northMatch = `${locationMatches[2]}.${locationMatches[3]} N`;
        }
        else {
            eastMatch = `${locationMatches[2]}.${locationMatches[3]} E`;
        }

        locationMatches = locationPattern.exec(text);
    }

    let result = document.getElementById('result');

    let p1 = document.createElement('p');
    p1.innerHTML = northMatch;
    
    let p2 = document.createElement('p');
    p2.innerHTML = eastMatch;
    
    let p3 = document.createElement('p');
    p3.innerHTML = message;

    result.appendChild(p1);
    result.appendChild(p2);
    result.appendChild(p3);
}