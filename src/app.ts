
class quiz {
    private totalScore: number = 0;
    constructor(
        public questions: question[] = []
    ) { }

    public runQuiz() {
        for (let i of this.questions) {
            this.adjustScore(i.ask())
        }
        alert(`you scored ${this.totalScore} \n great jorb`)
    }

    public adjustScore(result: boolean) {
        if (result = true) {
            this.totalScore++;
            console.log(this.totalScore);
        }
        if (result = false) {
            this.totalScore--;
            console.log(this.totalScore;
        }
    }

}

class question {
    constructor(
        public question: string,
        public answer: string,
        public choices: string
    ) { }

    public ask() {
        let answerTry = window.prompt(`${this.question} \n ${this.choices}`);
        let success: boolean = false
        if (answerTry == this.answer) {
            alert(`youre right!`);
            success = true;
        }
        else {
            alert(`youre wrong!!!!!!1`);
        }
        return success;
    }
}

let questions: question[] = []

questions[0] = new question(
    "what color is the sky?",
    "blue",
    "choices: blue, green, red"
)

questions[1] = new question(
    "what is the moon made of?",
    "cheese",
    "choices: gold, lava, cheese"
)

questions[2] = new question(
    "what is gokus power level",
    "9001",
    "choices: 0, 9000, 9001"
)

questions[3] = new question(
    "wheres my car",
    "dude",
    "choices: garage, driveway, dude"
)

let test1 = new quiz(questions)
test1.runQuiz();