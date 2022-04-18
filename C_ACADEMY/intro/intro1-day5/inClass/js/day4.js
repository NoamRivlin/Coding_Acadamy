// console.log('day4')


function changeBallColor() {
    var elBall = document.querySelector('.ball');
    elBall.style.backgroundColor = 'yellow';
}

// Write the function changeBallSize() , let the user choose the size.

function changeBallSize() {

    var elBall = document.querySelector('.ball');
    var size = prompt('New size?');

    elBall.style.height = size + 'px';
    elBall.style.width = size + 'px';
    elBall.style.lineHeight = size + 'px';
}


// Write the counter from the previous lesson on the ball.

var counter = 0;

function increaseCounter() {
    counter = counter + 10;
    // console.log('counter', counter);
    var elBall = document.querySelector('.ball');
    elBall.innerText = counter;

}

// Write the function changeBallShape(), 
// that changes the ball into a square. 

function changeBallShape() {
    var elBall = document.querySelector('.ball');
    elBall.style.borderRadius = '5px';

}


// Write the function toggleVisibility(),
// that disappears and display the ball.

var isVisible = true;

function toggleVisibility() {
    var elBall = document.querySelector('.ball');
    var elBtn = document.querySelector('.toggle-btn');

    if (isVisible) {
        // elBall.style.display = 'none';
        elBall.style.visibility = 'hidden';
        isVisible = false;
        elBtn.innerText = 'Show';

    } else {
        // elBall.style.display = 'block';
        elBall.style.visibility = 'visible';
        isVisible = true;
        elBtn.innerText = 'Hide';
    }
}
