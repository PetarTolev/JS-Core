function solve(input){
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            let removed = input.splice(i, 1);
            input.unshift(removed);
        }
    }

    console.log(input.join('\n'));   
}