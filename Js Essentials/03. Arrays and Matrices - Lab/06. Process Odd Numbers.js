function solve(input){
    let resultArr = [];

    for (let i = 1; i <= input.length; i+=2) {
        resultArr.push(input[i] * 2);
    }

    console.log (resultArr.reverse());
}