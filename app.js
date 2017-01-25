var totalScore = 0;
var quiz = (function () {
    function quiz(q, a, c) {
        this.question = q;
        this.answer = a;
        this.choices = c;
    }
    quiz.prototype.present = function () {
        var answerTry = window.prompt(this.question + " \n " + this.choices);
        if (answerTry == this.answer) {
            totalScore++;
            alert("youre right! \n Score = " + totalScore);
        }
        else {
            alert("youre wrong!!!!!!1 \n Score = " + totalScore);
        }
    };
    return quiz;
}());
var qt = "what color is the sky?";
var at = "blue";
var ct = "choices: blue, green, red";
var quiz1 = new quiz(qt, at, ct);
console.log(quiz1.answer);
qt = "what is the moon made of?";
at = "cheese";
ct = "choices: gold, lava, cheese";
var quiz2 = new quiz(qt, at, ct);
qt = "what is vageetas power level";
at = "9001";
ct = "choices: 0, 9000, 9001";
var quiz3 = new quiz(qt, at, ct);
qt = "wheres my car";
at = "dude?";
ct = "choices: garage, driveway, dude?";
var quiz4 = new quiz(qt, at, ct);
quiz1.present();
quiz2.present();
quiz3.present();
quiz4.present();
