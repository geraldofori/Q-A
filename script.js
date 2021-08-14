
(function (){

//Function constructor
function Question (question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function (){
    console.log(this.question);
    for(var i=0;i<this.answers.length;i++){
        console.log(i+ ':' + this.answers[i]);
    }
}

Question.prototype.checkAnswer = function (ans, callback){
    var sc ;

    if(ans===this.correct){
        console.log("Correct answer!");
        sc = callback(true);
    }else{
        console.log("Wrong answer. Try again");
        sc = callback(false);
    }
    this.displayScore(sc);
}

Question,prototype.displayScore =function (score){
    console.log('Your current score is:' + score);
    console.log('---------------------------');
}
//Write questions
var q1 = new Question('Is Javascript the best programming language in the world?',
['Yes','No'],
0);

var q2 = new Question('What framework is written in Javascript?',
['Laravel','Node','Django'],
1);

var q3 = new Question('What word best decribes coding?',
['Boring','Tedious','Fun','Useless'],
2);

var questions = [q1,q2,q3];

function score (){
    var sc = 0;
    return function(){
        if(correct){
            sc++;
        }
        return sc;
    }
}

var keepScore = score();

function nextQuestion(){
    

    //Generate a random number
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = prompt('Please select the right answer:');


    if(answer !== 'exit'){
        questions[n].checkAnswer(parseInt(answer), keepScore);

        nextQuestion();
    }
    
 }
nextQuestion();

})();
