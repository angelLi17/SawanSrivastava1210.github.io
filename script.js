
var myQuestions = [
    {
        question: "Did you recently travel to or live in a high risk location?",
        answers: {
            a: 'Yes',
            b: 'No'
        },
        correctAnswer: 'a'
    },
    {
        question: "Have you been in contact with someone with symptoms of or diagnosed with covid 19?",
        answers: {
            a: 'Yes',
            b: 'No'
        },
        correctAnswer: 'a'
    },
    {
        question: "Are you a risk group(Older adults or underlying medical conditions)",
        answers: {
            a: 'Yes',
            b: 'No'
        },
        correctAnswer: 'a'
    },
    {
        question: "Have you been interacting with people other than your Shelter in place group (the people you are shelter-in-place with)?",
        answers: {
            a: 'Yes',
            b: 'No'
        },
        correctAnswer: 'a'
    }, 
    {
        question: "Do you exhibit fevers or chills?",
        answers: {
            a: 'Yes',
            b: 'No'
        },
        correctAnswer: 'a'
    },
  {
        question: "Do you exhibit a cough?",
        answers: {
            a: 'Yes',
            b: 'No'
        },
        correctAnswer: 'a'
    },
    {
        question: "Do you exhibit shortness of breath?",
        answers: {
            a: 'Yes',
            b: 'No'
        },
        correctAnswer: 'a'
    },
    {
        question: "Do you exhibit fatigue?",
        answers: {
            a: 'Yes',
            b: 'No'
        },
        correctAnswer: 'a'
    },
    {
        question: "Do you exhibit headache?",
        answers: {
            a: 'Yes',
            b: 'No'
        },
        correctAnswer: 'a'
    },
    {
        question: "Do you exhibit a sore throat?",
        answers: {
            a: 'Yes',
            b: 'No'
        },
        correctAnswer: 'a'
    },
    {
        question: "Do you exhibit a congestion or runny nose?",
        answers: {
            a: 'Yes',
            b: 'No'
        },
        correctAnswer: 'a'
    },
    {
        question: "Do you exhibit nausea or vomiting?",
        answers: {
            a: 'Yes',
            b: 'No'
        },
        correctAnswer: 'a'
    },
    {
        question: "Do you exhibit diarrhea?",
        answers: {
            a: 'Yes',
            b: 'No'
        },
        correctAnswer: 'a'
    },
    
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){

        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){

            answers = [];

            for(letter in questions[i].answers){

                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        var userAnswer = '';
        var numCorrect = 0;
        
        for(var i=0; i<questions.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            if(userAnswer===questions[i].correctAnswer){

                numCorrect++;
                             answerContainers[i].style.color = 'red';
            }

            else{
                answerContainers[i].style.color = 'lightgreen';
            }
        }

        resultsContainer.innerHTML = numCorrect/questions.length*100 + '% chance of coronavirus';
    }

    showQuestions(questions, quizContainer);
    
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}