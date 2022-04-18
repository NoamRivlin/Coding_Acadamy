
// sayHello('Muki');
// sayHello('Puki');

function sayHello(name) {
    alert(' Hello ' + name);
}


// Write the function printSum(x,y)

// printSum(3, 4);
// printSum(100, 200);

// var num1 = 17;
// var num2 = 19;
// printSum(num1, num2);

function printSum(x, y) {
    var sum = x + y;
    console.log('sum', sum);
}


// Write the function printMsg(greet,name).

// printMsg('Hi', 'Moshe');
// printMsg('Hola', 'David');
// printMsg();

function printMsg(greet, name) {
    var msg = greet + ', ' + name + '!';
    console.log('msg', msg);
}


// var name = prompt('Name?');

// var res = getSum(10, 20);
// console.log('res', res);

function getSum(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

// Write the function getBigger(x,y);

// var biggerNum = getBigger(100, 20);
// console.log('biggerNum', biggerNum);

// biggerNum = getBigger(17, 17);
// console.log('biggerNum', biggerNum);


function getBigger(x, y) {
    if (x > y) {
        return x
    } else {
        return y
    }
}



// printPrettyMsg(msg) vs getPrettyMsg(msg)


printPrettyMsg('Nana banana');

function printPrettyMsg(msg) {
    var prettyMsg = '$ ' + msg + ' $';
    console.log(prettyMsg);
}


var res = getPrettyMsg('I do what i wanna');
console.log(res);

// console.log(getPrettyMsg('I do what i wanna'))

function getPrettyMsg(msg) {
    var prettyMsg = '$ ' + msg + ' $';
    return prettyMsg;
}
