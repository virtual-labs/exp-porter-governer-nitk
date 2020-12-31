
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
    question: "Which one of the following is a Dead weight type governor?",
    answers: {
      a: "Porter Governor",
      b: "Hartnell",
      c: "Wilson-Hartnell Governor",
      d: "Hartung Governor"
    },
    correctAnswer: "a"
  },

  {
    question: "The ratio of the height of porter governor (when the length of arms and links are equal) to the height of watt governor is (Where m is the mass of the ball and M is the mass of sleeve)",
    answers: {
      a:  "(m+M)/m",
      b:  "M/(m+M)",
      c:  "m/(m+M)",
      d:  "None of the above"
    },
    correctAnswer: "a"
  },

  {
    question: "Governor is attached to the camshaft through",
    answers: {
      a: "Bevel gear",
      b: "Spur gear",
      c: "Rack and pinion",
      d: "Herringbone gear"
    },
    correctAnswer: "a"
  },
  {
    question: "Which type of governor is used in a petrol engine?",
    answers: {
      a: "Pendulum type",
      b: "Spring load type",
      c: "Inertia type",
      d: "Any of the above",
      e: "SI engine doesn't have a governor"
    },
    correctAnswer: "e"
  },
  {
    question: "Which of the following is more appropriate if we remove the governor:",
    answers: {
      a: "The engine wouldn't work at all",
      b: "We Can't control the speed limit",
      c: "It will take more fuel for the same distance",
      d: "None of these"
    },
    correctAnswer: "b"
  },
  {
    question: "The weight of a porter governor is",
    answers: {
      a: "proportional to angular speed (ω)",
      b: "inversely proportional to ω",
      c: "proportional to ω<sup>2</sup>",
      d: "inversely proportional to ω<sup>2</sup>"
    },
    correctAnswer: "d"
  },
  {
    question: "The power of porter governor is",
    answers: {
      a: "proportional to percentage increase speed (s)",
      b: "inversely proportional to s",
      c: "proportional to s<sup>2</sup>",
      d: "inversely proportional to s<sup>2</sup>",
      e: "independent of s"
    },
    correctAnswer: "d"
  },
  {
    question: "The effort of a porter governor is",
    answers: {
      a: "proportional to percentage increase speed s",
      b: "inversely proportional to s",
      c: "proportional to s<sup>2</sup>",
      d: "inversely proportional to s<sup>2</sup>",
      e: "independent of s"
    },
    correctAnswer: "a"
  },
  {
    question: "For the same lift of sleeve, range of speed of proell governor as compared to porter governor is",
    answers: {
      a: "Less",
      b: "More",
      c: "Equal",
      d: "Half",
      e: "Double"
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
