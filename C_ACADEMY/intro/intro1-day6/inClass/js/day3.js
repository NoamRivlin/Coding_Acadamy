// console.log('Day3');

// calling the function:
// sayHello();
// sayHello();
// sayHello();

function sayHello() {
    alert('Hello!');
}


// Write the function greetUser().

// greetUser();
// greetUser();

function greetUser() {
    var userName = prompt('Your name please?')
    console.log('Hello ' + userName);
}


// Write the function checkPassword().

// checkPassword();
// checkPassword();

function checkPassword() {
    var password = prompt('Password please?');

    if (password === 'a123') {
        console.log('Welcome');
    } else {
        console.log('Wrong password')
    }
}


function doIt() {
    console.log('Done!')
}


// Write the function increaseCounter() ,
// add a button that call this function

var counter = 0;

function increaseCounter() {
    counter = counter + 10;
    console.log('counter', counter);
}


// var y = 19;
// console.log('y', y);

// foo()

function foo() {
    var x = 17;
    console.log('x', x);
    console.log('y', y);
}
// console.log('x', x);


// Write the function toggleOnOff(),
// add a button that call this function

var isOn = true;
console.log('isOn', isOn);
console.log('isOn === true', isOn === true);


function toggleOnOff() {

    // if (isOn === true) {
    if (isOn) {
        isOn = false;
        // console.log('isOn', isOn)
        console.log('OFF');

    } else {
        isOn = true;
        // console.log('isOn', isOn)
        console.log('ON');
    }
}