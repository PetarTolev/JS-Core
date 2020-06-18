function solve(name, age, weight, height) {
    const bmi = Math.round(weight / ((height / 100) ** 2));

    let res = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: undefined
    };

    if (bmi < 18.5) {
        res.status = 'underweight';
    } else if (bmi < 25) {
        res.status = 'normal';
    } else if (bmi < 30) {
        res.status = 'overweight';
    } else {
        res.status = 'obese';
        res.recommendation = 'admission required';
    }

    return res;
}