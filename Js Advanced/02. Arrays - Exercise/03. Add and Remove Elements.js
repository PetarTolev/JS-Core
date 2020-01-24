function solve(input) {
    let arrOfNumbers = [];

    let number = 1;
    for (let i = 0; i < input.length; i++) {
        let command = input[i];


        if (command === "add") {
            arrOfNumbers.push(number)
        }
        else if (command === "remove") {
            arrOfNumbers.pop();
        }


        number++;
    }

    if (arrOfNumbers.length == 0) {
        console.log("Empty")
    }
    else {
        console.log(arrOfNumbers.join("\n"));
    }
}