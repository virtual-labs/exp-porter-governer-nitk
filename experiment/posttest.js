
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------
const myQuestions = [
  {
    question: "The height of a governor is distance measure from",
    answers: {
      a: "N<sup>2</sup>&Proportional;1/h",
      b: "N&Proportional;1/h",
      c: "N<sup>3</sup>&Proportional;1/h",
      d: "h&Proportional;N"
    },
    correctAnswer: "a"
  },

  {
    question: "The arms of porter governor are 200mm long. The load on the sleeve is 240N and weight of each ball is 30N. Radius of rotation of the balls is 125mm. Determine the speed of the governor.",
    answers: {
      a: "200 rpm",
      b: "227 rpm",
      c: "350 rpm",
      d: "377 rpm"
    },
    correctAnswer: "b"
  },
  {
    question: "From the simulator, at 160rpm what is the approximate height of the governor?",
    answers: {
      a: "140mm",
      b: "165mm",
      c: "104mm",
      d: "262mm"
    },
    correctAnswer: "c"
  },
  {
    question: "If height of the governor increases speed",
    answers: {
      a: "decreases",
      b: "increases",
      c: "remains constant",
      d: "none of the above"
    },
    correctAnswer: "a"
  },
  {
    question: "The height of a governor is distance measure from",
    answers: {
      a: "the centre of two balls mass",
      b: "the centre of balls mass to the point of intersection of upper arms",
      c: "the centre of balls mass to the point of intersection of lower links",
      d: "the point of intersection of upper arms to the point of intersection of lower links"
    },
    correctAnswer: "b"
  }
];



// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
