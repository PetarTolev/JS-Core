function solve(input){

    let number = Number(input[0]);

    for (let i = 1; i < input.length; i++){
        switch(input[i]){
            case "chop":
                number /= 2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number += 1;
                break;
            case "bake":
                number *= 3;
                break;
            case "fillet":
                number -= number * 0.20;
            break;
        }

        console.log(number);
    }
}