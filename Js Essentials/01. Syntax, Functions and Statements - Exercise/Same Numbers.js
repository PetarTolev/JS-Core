function Solve(num){

    let sum = 0;
    let areSame = true;

    for (let i = 0; i < num.toString().length; i++) {
        if (num.toString()[0] !== num.toString()[1] && areSame) {
            areSame = false;
        }
        
        sum += +num.toString()[i];
    }

    console.log(areSame);
    console.log(sum);
}

Solve(2222222);