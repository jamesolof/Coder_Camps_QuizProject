var quiz = (function () {
    function quiz(questions) {
        if (questions === void 0) { questions = []; }
        this.questions = questions;
        this.totalScore = 0;
    }
    quiz.prototype.runQuiz = function () {
        for (var _i = 0, _a = this.questions; _i < _a.length; _i++) {
            var i = _a[_i];
            this.adjustScore(i.ask());
        }
        alert("you scored " + this.totalScore + " \n great jorb");
    };
    quiz.prototype.adjustScore = function (result) {
        if (result = true) {
            this.totalScore++;
            console.log(this.totalScore);
        }
        if (result = false) {
            this.totalScore--;
            console.log(this.totalScore);
        }
    };
    return quiz;
}());
var question = (function () {
    function question(question, answer, choices) {
        this.question = question;
        this.answer = answer;
        this.choices = choices;
    }
    question.prototype.ask = function () {
        var answerTry = window.prompt(this.question + " \n " + this.choices);
        var success = false;
        if (answerTry == this.answer) {
            alert("youre right!");
            success = true;
        }
        else {
            alert("youre wrong!!!!!!1");
        }
        return success;
    };
    return question;
}());
var questions = [];
questions[0] = new question("what color is the sky?", "blue", "choices: blue, green, red");
questions[1] = new question("what is the moon made of?", "cheese", "choices: gold, lava, cheese");
questions[2] = new question("what is gokus power level", "9001", "choices: 0, 9000, 9001");
questions[3] = new question("wheres my car", "dude", "choices: garage, driveway, dude");
var test1 = new quiz(questions);
test1.runQuiz();
