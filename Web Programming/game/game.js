const showButton = document.createElement("div");
showButton.id = "gameButton";
document.getElementById("prompt").insertAdjacentElement("afterbegin", showButton);
document.getElementById("gameButton").innerHTML = '<button onclick="playGame()">Play Game</button>';
// var buttonHTML = '<button onclick="playGame()">Play Game</button>';
// document.getElementById("prompt").innerHTML = buttonHTML;

var questions = [
    ["What is the largest ocean on Earth?", 1, "Atlantic Ocean", "Pacific Ocean", "Indian Ocean"],
    ["Which country is famous for the Eiffel Tower?", 0, "France", "Italy", "Spain"],
    ["What is the square root of 9?", 2, "2", "4", "3"]
];

var tracker = 0
var showResultChoice = '';

const showDiv = document.createElement("div");
showDiv.id = "resultDiv";
document.getElementById("prompt").insertAdjacentElement("afterbegin", showDiv);

function playGame() {
    //end game if tracker = 3
    if(tracker == 3){
        if (confirm('Game Over! Play again?')) {
            tracker = 0
            showResultChoice = '';
            document.getElementById("resultDiv").innerHTML = showResultChoice;
            playGame();
          } else {
            return;
          }

        return;
    }
    showResultChoice = '';
    document.getElementById("resultDiv").innerHTML = showResultChoice;
    
    let currentQuestion = questions[tracker];
    let questionText = currentQuestion[0];
    let correctIndex = currentQuestion[1];
    let answers = currentQuestion.slice(2);
    
    document.getElementById('question').innerHTML = questionText;

    let answerListHTML = '';
    answers.forEach((answer, index) => {
        answerListHTML += `<li><a href="#" onclick="checkAnswer(${index}, ${correctIndex})">${answer}</a></li>`;
    });

    document.getElementById("answers").innerHTML = answerListHTML;
    document.getElementById("gameButton").innerHTML = '<button onclick="playGame()">Next Question</button>';

    tracker ++;
}
function checkAnswer(index, correctIndex){
    
    if(index == correctIndex){
        showResultChoice = "<p>Correct!</p>";
    } else {
        showResultChoice = "<p>Incorrect!</p>";
    }
    document.getElementById("resultDiv").innerHTML = showResultChoice;
}