window.addEventListener("scroll", function () {
let aboutText = document.getElementsByClassName("about-text")[0];

// Get the top position of the element
let position = aboutText.getBoundingClientRect().top;

// Get window height
let screenHeight = window.innerHeight;

// If element is visible in the viewport
if (position < screenHeight - 100) {
    aboutText.classList.add("reveal");
}

//Skills section JS
const skillFills = document.querySelectorAll(".skill-fill");

skillFills.forEach(fill => {
    const rect = fill.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
    const targetWidth = fill.getAttribute("data-width");
    fill.style.width = targetWidth;
    }
});
});

// Get all cards and modals
  const cards = document.querySelectorAll(".project-card");
  const modals = document.querySelectorAll(".modal");
  const closes = document.querySelectorAll(".close");

  // Show modal on card click
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const modalId = card.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      modal.style.display = "block";
    });
  });

  // Close modal on × click
  closes.forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
      closeBtn.closest(".modal").style.display = "none";
    });
  });

  // Optional: close modal when clicking outside content
  window.addEventListener("click", (e) => {
    modals.forEach(modal => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual submission

    // Clear previous errors
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(msg => msg.textContent = "");

    // Grab values
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    let isValid = true;

    // Validate Name
    if (name.value.trim() === "") {
      name.nextElementSibling.textContent = "Name is required.";
      isValid = false;
    }

    // Validate Email
    if (email.value.trim() === "") {
      email.nextElementSibling.textContent = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      email.nextElementSibling.textContent = "Email is invalid.";
      isValid = false;
    }

    // Validate Message
    if (message.value.trim() === "") {
      message.nextElementSibling.textContent = "Message is required.";
      isValid = false;
    }

    if (isValid) {
      // Submit logic (e.g., send to server or show success message)
      alert("Form submitted successfully!");
      // this.reset(); // Optional: clear form
    }
  });


