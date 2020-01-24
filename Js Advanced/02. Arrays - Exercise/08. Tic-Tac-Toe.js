function solve(input){
    let dashboard = [];

    for (let i = 0; i < 3; i++) {
        dashboard[i] = [];

        for (let j = 0; j < 3; j++) {
            dashboard[i][j] = false;
        }
    }

    for (let i = 0; i < input.length; i++) {
        let playerSymbol;

        if (i % 2 == 0) {
            playerSymbol = 'X'
        }
        else {
            playerSymbol = 'O';
        }

        const turnPosition = input[i].split(' ');
        const row = turnPosition[0];
        const col = turnPosition[1];

        if (dashboard[row][col] != false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        dashboard[row][col] = playerSymbol;

        if (dashboard[0][0] == dashboard[1][1] == dashboard[2][2]) {
            break;
        }
    }

    for (let i = 0; i < 3; i++) {
        console.log(dashboard[i].join(' '));
    }
}

solve(
["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"])