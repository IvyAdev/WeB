const form = document.getElementById("contactForm");
const feedbackMessage = document.getElementById("feedbackMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name === "" || email === "") {
    feedbackMessage.textContent = "Please fill in all fields.";
    feedbackMessage.className = "error";
  } else if (!validateEmail(email)) {
    feedbackMessage.textContent = "Please enter a valid email address.";
    feedbackMessage.className = "error";
  } else {
    feedbackMessage.textContent = `Thank you, ${name}! Your form has been submitted.`;
    feedbackMessage.className = "success";
  }
});

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}
