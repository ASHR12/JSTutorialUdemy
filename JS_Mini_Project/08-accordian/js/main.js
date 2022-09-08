// using selector inside element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function (e) {
    console.log("btn-specific question", question);
    questions.forEach(function (item) {
      console.log("all question", item);
      if (item != question) {
        item.classList.remove("show-answer");
      }
    });
    question.classList.toggle("show-answer");
  });
});
