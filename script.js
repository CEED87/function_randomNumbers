
function randomNumbers(num1, num2) {
    for (var i = 0; i < 7; i++) {
        var question= Math.random() * (num2 - num1) + num1;
        console.log(question.toFixed(0));
    }
}
randomNumbers(1, 50);