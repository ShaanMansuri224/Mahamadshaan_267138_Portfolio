// ==========================================================================
// Web Technology Portfolio - script.js
// Author: Mansuri Mahamadshaan Sajidbhai (Roll No: 267138)
// Features:
//   1. Dark Mode Toggle (click event)
//   2. Mobile Navigation Menu Toggle (click event)
//   3. Contact Form Validation & Live Character Counter (input & submit events)
// ==========================================================================

// Feature 1: Dark Mode Toggle Button
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggleBtn.textContent = "Light Mode";
  } else {
    themeToggleBtn.textContent = "Dark Mode";
  }
});

// Feature 2: Mobile Menu Open/Close Toggle
const menuToggleBtn = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

// Feature 3: Live Character Count (input event) & Contact Form Validation (submit event)
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("sender-name");
const emailInput = document.getElementById("sender-email");
const messageInput = document.getElementById("sender-message");
const charCountSpan = document.getElementById("char-count");
const feedbackMsg = document.getElementById("form-feedback");

messageInput.addEventListener("input", function () {
  const currentLength = messageInput.value.length;
  charCountSpan.textContent = "(" + currentLength + " characters)";
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameVal = nameInput.value.trim();
  const emailVal = emailInput.value.trim();
  const messageVal = messageInput.value.trim();

  if (nameVal === "") {
    feedbackMsg.style.color = "#dc2626";
    feedbackMsg.textContent = "Please enter your full name before submitting.";
    return;
  }

  if (emailVal === "" || !emailVal.includes("@") || !emailVal.includes(".")) {
    feedbackMsg.style.color = "#dc2626";
    feedbackMsg.textContent = "Please enter a valid email address (e.g., name@example.com).";
    return;
  }

  if (messageVal.length < 10) {
    feedbackMsg.style.color = "#dc2626";
    feedbackMsg.textContent = "Please write a message of at least 10 characters.";
    return;
  }

  feedbackMsg.style.color = "#16a34a";
  feedbackMsg.textContent = "Thank you, " + nameVal + "! Your message has been validated and sent.";
  contactForm.reset();
  charCountSpan.textContent = "(0 characters)";
});
