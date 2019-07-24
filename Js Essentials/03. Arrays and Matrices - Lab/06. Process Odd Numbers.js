function solve(input){
    let resultArr = [];

    for (let i = 0; i < input.length; i+2) {
        resultArr.push(input[i] * 2);
        
    }

    console.log(resultArr);
    
}

solve([10, 15, 20, 25]);