function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
}

function classifyBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal weight";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

let weight = 70;
let height = 1.7;
let bmi = calculateBMI(weight, height);

console.log("Your BMI is: " + bmi);
console.log("You are: " + classifyBMI(bmi));