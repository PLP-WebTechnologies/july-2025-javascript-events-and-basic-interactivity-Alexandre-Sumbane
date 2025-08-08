// Toggle between light and dark mode
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Real-time character counter for textarea
const message = document.getElementById("message");
const charCount = document.getElementById("charCount");

message.addEventListener("input", () => {
  const length = message.value.length;
  charCount.textContent = `${length} / 200`;
});

// Form validation
const form = document.getElementById("feedbackForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission
  clearErrors();

  let isValid = true;

  // Validate name
  if (nameInput.value.trim().length < 2) {
    showError("nameError", "Name must be at least 2 characters.");
    isValid = false;
  }

  // Validate email (simple regex)
  if (!/^\S+@\S+\.\S+$/.test(emailInput.value.trim())) {
    showError("emailError", "Please enter a valid email.");
    isValid = false;
  }

  // Validate message
  if (message.value.trim().length < 10) {
    showError("messageError", "Message must be at least 10 characters.");
    isValid = false;
  }

  // If valid, show success message
  if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
    charCount.textContent = "0 / 200";
  }
});

// Clear all error messages
function clearErrors() {
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  successMessage.textContent = "";
}

// Show error message by ID
function showError(id, message) {
  document.getElementById(id).textContent = message;
}
