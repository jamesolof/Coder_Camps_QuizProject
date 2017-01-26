
class quiz{
    private totalScore: number = 0;
    constructor(
        public questions: []
    ){}

    public runQuiz(){
        for (let key of this.questions){
            this.adjustScore(this.questions[key].ask())
        }
    }

    public adjustScore(result: boolean){
        if (result = true){
            this.totalScore++;
        }
        if (result = false){
            this.totalScore--;
        }
    }

}

class question {
    constructor( 
        public question: string, 
        public answer: string, 
        public choices: string
        ){}

    public ask() {
        let answerTry = window.prompt(`${this.question} \n ${this.choices}`);
        let success: boolean = false
        if (answerTry == this.answer){
            totalScore++;
            alert(`youre right! \n Score = ${totalScore}`);
            success = true;
        }
        else {
            alert(`youre wrong!!!!!!1 \n Score = ${totalScore}`);
        }
        return success;
    }
}

let quiz1: [] = 4

let quiz1[0] = new question(
    "what color is the sky?",
    "blue",
    "choices: blue, green, red"
)

let quiz2 = new quiz(
    "what is the moon made of?",
    "cheese",
    "choices: gold, lava, cheese"
)

let quiz3 = new quiz(
    "what is gokus power level",
    "9001",
    "choices: 0, 9000, 9001"
)

let quiz4 = new quiz(
    "wheres my car",
    "dude",
    "choices: garage, driveway, dude"
)

quiz1.present();
quiz2.present();
quiz3.present();
quiz4.present();

