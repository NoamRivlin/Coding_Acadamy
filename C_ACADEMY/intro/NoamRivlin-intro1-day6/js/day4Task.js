

var isgreen = true;
function changeTextColor() {
    if (isgreen) {
        var elBall = document.querySelector('.ball');
        elBall.style.color = 'green';
        isgreen = false;

    } else {
        var elBall = document.querySelector('.ball');
        elBall.style.color = 'black';
        isgreen = true;
    }
}


function changeTextSize() {
    var elBall = document.querySelector('.ball');
    var textSize = prompt('choose new size')
    elBall.style.fontSize = textSize + 'px';
    if (textSize < 50) {

    } else {
        console.log('size too big');
        elBall.style.fontSize = '20px';
    }
}

var isBall = true;
function toggleBallShape() {
    var elBall = document.querySelector('.ball');
    var elBtn = document.querySelector('.shape-btn');
    if (isBall) {
        elBall.style.borderRadius = '1px';
        elBtn.innerText = 'To Round'
        isBall = false;
    } else {
        elBall.style.borderRadius = '50%';
        elBtn.innerText = 'To Square'
        isBall = true;
    }
}




var ballMargin = 0;
function moveDown() {
    var elBall = document.querySelector('.ball');
    ballMargin = ballMargin + 10;
    elBall.style.marginTop = ballMargin + 'px';

    if (ballMargin <= 60) {
        console.log('ballMargin', ballMargin);

    } else {
        ballMargin = 0;
    }

}