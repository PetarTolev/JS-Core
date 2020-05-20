function solve(input){
let heroes = [];

    for (const line of input) {

        let [name, level, items] = line.split(' / ');
        items = items ? items.split(', ') : [];

        let hero = {
            name: name,
            level: Number(level),
            items: items
        }

        heroes.push(hero);    
    }
    console.log(JSON.stringify(heroes));
}