// var userName = 'Noam';

// var age = Number(prompt('Please enter your age')) + (' years old');
// if (age >= 18) {
//     console.log('welcome ' + userName + ', you are ' + age + ' so you are old enough to buy beer');
// } else {
//     console.log("we're sorry, " + userName + " you're " + age + " and that means that you're too young for buying a beer");
// }


// alcoholAgeCheck()
// alcoholAgeCheck()
alcoholAgeCheck()
function alcoholAgeCheck() {
    var userName = prompt('Please enter your name');

    var age = prompt('Please enter your age') + (' years old');
    console.log(typeof age);

    if (age >= 18) {
        console.log('welcome ' + userName + ', you are ' + age + ' years old so you are old enough to buy beer');
    } else {
        console.log("we're sorry, " + userName + " you're " + age + " years old and that means that you're too young for buying a beer");
    }
}

// drink()
function drink() {
    var favoriteDrink = prompt("what's your favorite drink?");
    console.log('enjoy your ' + favoriteDrink + ('!'));
}

var score = 1;
function multTen() {
    score = score * 10;
    console.log('score', score);
}

function resetScore() {
    if (score >= 100000) {
        score = 1;
        console.log('score', score);
    }
}

function calculateMult() {
    var num1 = prompt('First number to multiple')
    var num2 = prompt('Second number to multiple')
    var num3 = prompt('Third number to multiple')
    console.log(num1 * num2 * num3);
}