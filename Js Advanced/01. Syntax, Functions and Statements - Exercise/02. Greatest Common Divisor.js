function solve(firstNum, secondNum){
    let bigerNum = Math.max(firstNum, secondNum);
    let smallerNum = Math.min(firstNum, secondNum);

    let result = -1;

    while(result != 0){
        result = bigerNum % smallerNum;
        bigerNum = smallerNum;
        smallerNum = result;
    }

    console.log(bigerNum);
}