document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const email = document.getElementById("email");
  const name = document.getElementById("name");
  const subject = document.getElementById("subject"); // not required but collected
  const message = document.getElementById("message");

  // Clear previous custom validity messages
  email.setCustomValidity("");
  name.setCustomValidity("");
  message.setCustomValidity("");

  let valid = true;

  // Full Name validation
  if (!name.value.trim()) {
    name.setCustomValidity("Full name is required.");
    name.reportValidity();
    valid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    email.setCustomValidity("Email is required.");
    email.reportValidity();
    valid = false;
  } else if (!emailRegex.test(email.value)) {
    email.setCustomValidity("Please enter a valid email address.");
    email.reportValidity();
    valid = false;
  }

  // Message validation
  if (!message.value.trim()) {
    message.setCustomValidity("Message is required.");
    message.reportValidity();
    valid = false;
  }

  // If all fields are valid, show the popup
  if (valid) {
    document.getElementById("successPopup").style.display = "block";
    this.reset(); // Clear form
  }
});

// Function to close popup
function closePopup() {
  document.getElementById("successPopup").style.display = "none";
}
