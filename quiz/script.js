function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
var name = window.prompt('Enter your name and lets begin');
window.confirm ('Hey!  ' + name + ' You think you can survive these questions?' )
ready(choices);

var content =
[
  {question: 'What is the number of most goals scored in a season in the Top 5 leagues?', choices: [73, 61, 50, 12], correct: 0},
  {question: 'Who won the Fifa Best Player in 1997', choices: ['Ronaldo', 'Zidane', 'Romario', 'Rivaldo'], correct: 0 },
  {question: 'How many years did Pele play for Santos?', choices: [14, 20, 18, 19], correct: 2},
  {question: 'Which of these teams did Clarence Seedorf not play for?', choices: ['Botafogo', 'AC Milan', 'Inter Milan', 'Sampdoria', 'Ajax'], correct: 3},
  {question: 'Which of these clubs have never won the Champions League?', choices: ['Steaua Bucuresti', 'Red Star Belgrade','Reims', 'Marseille', 'PSV'], correct: 2},
    {question: 'Which of these clubs drew all Champions league group games in 2002/03?', choices: ['Liverpool', 'Rubin Kazan', 'Spartak Moscow', 'Dynamo Kyiv', 'AEK Athens'], correct: 4}
    
];

var x = 0;
var y = 1;
var score = 0;

function choices() {
  if (content[x] === undefined) {
    document.form1.style.visibility = 'hidden';
    document.querySelector('.header').style.visibility = 'hidden';
      if(score >= 4){
          document.querySelector('.score').textContent ='Charle, You try! You had ' + score + ' out of 5';
      }
      if (score < 4){
          document.querySelector('.score').textContent = 'You hwie small but you got ' + score + ' out of 5';
      }
      if (score = 0){
           document.querySelector('.score').textContent = 'Really???? , Charle, You had ' + score;
      }

  } else {
    var questionNumber = document.querySelector('.questionNumber');
    questionNumber.textContent = 'Question#' + y;

var question = document.querySelector('.question');
    question.textContent = content[x]['question'];

    var choices = document.querySelectorAll('label');
    for (var i = 0; i < choices.length; i++) {
      choices[i].textContent = content[x]['choices'][i];
    }
  }
}

function next() {
  var inputs = document.querySelectorAll('input');

  if (content[x] === undefined) {
    return false;

  }

  else if (inputs[0].checked !== true && inputs[1].checked !== true && inputs[2].checked !== true && inputs[3].checked !== true) {
    alert ('Please select an answer');

  } else {
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].checked === true && i === content[x]['correct']) {
        score++;
      }
    inputs[i].checked = false;
  }

  x++;
  y++;
  choices();
  }
}

function back() {
  var inputs = document.querySelectorAll('input');
  if (x === 0) {
    return false;

  } else {
    x--;
    y--;
    choices();
  }
  
}
