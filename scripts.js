const first = document.getElementById("first");
const second = document.getElementById("second");
const options = document.getElementById("options");
const form = document.getElementById("form");
const resultText = document.getElementById("result-text");

let votedValue;

eventListeners();

function eventListeners() {
  options.addEventListener("click", voteForFeedback);
  form.addEventListener("submit", submitForm);
}

function voteForFeedback(e) {
  if (votedValue) {
    document.getElementById(votedValue).classList.remove("active");
  }
  votedValue = e.target.id;
  document.getElementById(votedValue).classList.add("active");
  //e.preventDefault();
}

function submitForm(e) {
  if (votedValue) {
    first.classList.add("hide");
    second.classList.remove("hide");
    resultText.innerText = `You selected ${votedValue} out of 5`;
  }

  e.preventDefault();
}
