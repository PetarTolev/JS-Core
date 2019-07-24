function solve(input) {
    let rotationNum = Number(input.pop()) % input.length;

    for (let i = 0; i < rotationNum; i++) {
        let a = input.pop();
        input.unshift(a);
        
    }

    console.log(input.join(' '));
}