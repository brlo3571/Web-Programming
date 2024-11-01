var questions = [
    'How many days are there in a year?',
    'What is the maximum number of players on a soccer team?',
    'How many states are there in the United States?',
];

var answers = [
    '365',
    '11',
    '50',
];
var points = 0;

function quiz() {

    for (let i = 0; i < 3; i++) {
        var guesses = 3;
        var correct = false;

        while (guesses > 0 && !correct) {
            var userAnswer = prompt(questions[i]);

            if (userAnswer === answers[i]) {
                correct = true;
                points += guesses;
                alert(`Correct!`);
            } else {
                guesses--;
                if (guesses > 0) {
                    alert(`Incorrect! You have ${guesses} attempt(s) left.`);
                }
            }
        }
    }

    return points;
}