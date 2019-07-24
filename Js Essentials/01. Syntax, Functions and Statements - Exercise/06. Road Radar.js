function solve(elements){
    function giveResult(speed, speedLimit){
        let exceedance = speed - speedLimit;

        if (exceedance > 0 && exceedance <= 20) {
            return "speeding";
        }
        else if (exceedance > 20 && exceedance <= 40) {
            return "excessive speeding";
        }
        else {
            return "reckless driving";
        }
    }

    let speed = elements[0];
    let area = elements[1];

    if (area == "motorway" && speed > 130) {
        console.log(giveResult(speed, 130));
    }
    else if (area == "interstate" && speed > 90) {
        console.log(giveResult(speed, 90));
    }
    else if (area == "city" && speed > 50) {
        console.log(giveResult(speed, 50));
    }
    else if (area == "residential" && speed > 20) {
        console.log(giveResult(speed, 20));
    }
}