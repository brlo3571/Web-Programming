var sNumber = 3
checkNumberInput();

//check if the input is a number and start another function if it is a number
function checkNumberInput(){
    var userGuess = Number(prompt("Please enter a number:"));

    //check to see if it's a number
    if (!isNaN(userGuess)) {
        console.log("It's a number!");
        guessNumber(userGuess);
    }else{
        console.log('Not a number');
        checkNumberInput()
    }
}

//check if userGuess is the correct number
function guessNumber(userGuess){
    if(userGuess === sNumber){
        alert('Congratulations! You won! +10 points')
        document.getElementById("score").innerHTML = "Score: 10 pts";
    }
    else{
        alert('Game over! :(')
        document.getElementById("score").innerHTML = "Score: 0 pts";
    }
}
