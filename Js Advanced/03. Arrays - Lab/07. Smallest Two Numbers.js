function solve(input){
    let result = [];

    for (let i = 0; i < 2; i++) {
        let elementIndex = input.indexOf(Math.min(...input));
        let smallestElement = input[elementIndex];
        input.splice(elementIndex, 1);
        result.push(smallestElement);
    }

    console.log(result);
}