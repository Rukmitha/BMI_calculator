function calculateBMI() {
    let height = parseFloat(document.getElementById('height').value) / 100;
    let weight = parseFloat(document.getElementById('weight').value);

    if (!height || !weight) {
        alert("Please enter valid height and weight!");
        return;
    }

    let bmi = (weight / (height * height)).toFixed(2);
    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    document.getElementById('bmi-result').innerText = `Your BMI is: ${bmi}`;
    document.getElementById('bmi-category').innerText = `Category: ${category}`;
}
