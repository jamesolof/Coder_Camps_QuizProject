var quiz = (function () {
    function quiz(questions) {
        this.questions = questions;
        this.totalScore = 0;
    }
    quiz.prototype.runQuiz = function () {
        for (var _i = 0, _a = this.questions; _i < _a.length; _i++) {
            var key = _a[_i];
            this.adjustScore(this.questions[key].ask());
        }
    };
    quiz.prototype.adjustScore = function (result) {
        if (result = true) {
            this.totalScore++;
        }
        if (result = false) {
            this.totalScore--;
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
            totalScore++;
            alert("youre right! \n Score = " + totalScore);
            success = true;
        }
        else {
            alert("youre wrong!!!!!!1 \n Score = " + totalScore);
        }
        return success;
    };
    return question;
}());
var quiz1 = 4;
var quiz1 = (_a = new question("what color is the sky?", "blue", "choices: blue, green, red"), 0 = _a[0], _a);
var quiz2 = new quiz("what is the moon made of?", "cheese", "choices: gold, lava, cheese");
var quiz3 = new quiz("what is gokus power level", "9001", "choices: 0, 9000, 9001");
var quiz4 = new quiz("wheres my car", "dude", "choices: garage, driveway, dude");
quiz1.present();
quiz2.present();
quiz3.present();
quiz4.present();
var _a;
