var yourScore = document.getElementById('yourScore');
yourScore.innerHTML = 0; //
var targetScore = document.getElementById('targetScore');
targetScore.innerHTML = getRandomValue(10, 4);

function addToScore(val) {
    var numberToAdd = parseInt(val);
    var currentScore = parseInt(yourScore.innerHTML);
    yourScore.innerHTML = numberToAdd + currentScore;
}

var purple = document.getElementById("purple");

console.log(purple.value);

var orange = document.getElementById("orange");


var green = document.getElementById("green");






purple.addEventListener('click', function () {

    addToScore(this.value);
    checkPlayerScore();
});



orange.addEventListener('click', function () {

    addToScore(this.value);
    checkPlayerScore();
});

green.addEventListener('click', function () {

    addToScore(this.value);
    checkPlayerScore();
});


function getRandomValue(a, b) {
    return Math.floor((Math.random() * a) + b);
}


function checkPlayerScore() {

    var playerInt = parseInt(yourScore.innerHTML);
    var targetInt = parseInt(targetScore.innerHTML);
    if (playerInt === targetInt) {
        alert('You win!');
    } else if (playerInt > targetInt) {
        alert('You lose! REFRESH');


    

    }
}


console.log(getRandomValue(10, 4));
