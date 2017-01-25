let totalScore = 0;

class quiz {

    question: string;

    answer: string;

    choices: string;

    constructor( q: string, a: string, c: string){
        this.question = q;

        this.answer = a;

        this.choices = c;

    }

    present(){
        let answerTry = window.prompt(`${this.question} \n ${this.choices}`);

        if (answerTry == this.answer){
            totalScore++;
            alert(`youre right! \n Score = ${totalScore}`);

        }
        else {
            alert(`youre wrong!!!!!!1 \n Score = ${totalScore}`);
        }

    }
}

let qt = "what color is the sky?"
let at = "blue"
let ct = "choices: blue, green, red"
let quiz1 = new quiz(qt, at, ct)
console.log(quiz1.answer);


qt = "what is the moon made of?"
at = "cheese"
ct = "choices: gold, lava, cheese"
let quiz2 = new quiz(qt, at, ct)


qt = "what is vageetas power level"
at = "9001"
ct = "choices: 0, 9000, 9001"
let quiz3 = new quiz(qt, at, ct)


qt = "wheres my car"
at = "dude?"
ct = "choices: garage, driveway, dude?"
let quiz4 = new quiz(qt, at, ct)

quiz1.present();
quiz2.present();
quiz3.present();
quiz4.present();

