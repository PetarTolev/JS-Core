function solve() {
    let input = document.getElementById('string').value;
    let divElement = document.getElementById('result');

    let passengerNamePattern = / [A-Z][a-z]*-?([A-Z][a-z]*.)?-[A-Z][a-z]* /;
    let airportPattern = / [A-Z]{3}\/[A-Z]{3} /;
    let flightNumberPattern = / [A-Z]{1,3}[0-9]{1,5} /;
    let companyPattern = /- [A-Z]\w*\*[A-Z]\w* /;

    let passengerName = input.match(passengerNamePattern)[0].trimEnd().trimStart().replace('-', ' ');
    let flightNumber = input.match(flightNumberPattern)[0].trimEnd().trimStart().replace();
    let company = input.match(companyPattern)[0].trimEnd().trimStart().replace('- ', '').replace('*', ' ');
    let airports = input.match(airportPattern)[0].trimEnd().trimStart().split('/');
    let fromAirport = airports[0];
    let toAirport = airports[1];

    let p = document.createElement('p');
    p.innerText = `Mr/Ms, ${passengerName}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`;
    divElement.appendChild(p)
}