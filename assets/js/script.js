/**
 * PinjamanExpress - Main JavaScript File
 * Version: 1.0
 */

document.addEventListener("DOMContentLoaded", function () {
  // Initialize loan amount slider
  initLoanSlider();

  // Initialize apply loan button with Telegram redirect
  initApplyLoanButton();

  // Initialize contact form
  initContactForm();

  // Initialize scroll animations
  initScrollAnimations();
});

/**
 * Initialize loan amount slider functionality
 */
function initLoanSlider() {
  const loanSlider = document.getElementById("loan-amount");
  const loanAmountValue = document.getElementById("loan-amount-value");

  if (loanSlider && loanAmountValue) {
    // Update the loan amount display when slider value changes
    loanSlider.addEventListener("input", function () {
      // Format the loan amount with thousand separators
      loanAmountValue.textContent = formatNumber(this.value);
    });

    // Initialize with formatted value
    loanAmountValue.textContent = formatNumber(loanSlider.value);
  }
}

/**
 * Initialize apply loan button with Telegram redirect
 */
function initApplyLoanButton() {
  const applyLoanBtn = document.getElementById("apply-loan-btn");
  const customerNameInput = document.getElementById("customer-name");
  const loanSlider = document.getElementById("loan-amount");

  if (applyLoanBtn && customerNameInput && loanSlider) {
    applyLoanBtn.addEventListener("click", function () {
      const customerName = customerNameInput.value.trim();
      const loanAmount = loanSlider.value;

      if (customerName === "") {
        showAlert("Sila masukkan nama anda.", "danger");
        return;
      }

      // Redirect to Telegram with pre-filled message
      redirectToTelegram(customerName, loanAmount);
    });
  }
}

/**
 * Redirect to Telegram with pre-filled message
 * @param {string} customerName - Customer's name
 * @param {number} loanAmount - Selected loan amount
 */
function redirectToTelegram(customerName, loanAmount) {
  // Telegram username
  const telegramUsername = "aainaasafra";

  // Create pre-filled message
  const message = `Hai! Nama saya ${customerName}. Saya berminat untuk memohon pinjaman sebanyak RM${formatNumber(loanAmount)}. Boleh saya dapatkan maklumat lanjut?`;

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);

  // Create Telegram URL
  const telegramURL = `https://t.me/${telegramUsername}?text=${encodedMessage}`;

  // Open Telegram in a new tab
  window.open(telegramURL, "_blank");
}

/**
 * Initialize contact form submission
 */
function initContactForm() {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || phone === "" || message === "") {
        showAlert("Sila lengkapkan semua maklumat yang diperlukan.", "danger");
        return;
      }

      if (!isValidEmail(email)) {
        showAlert("Sila masukkan alamat e-mel yang sah.", "danger");
        return;
      }

      if (!isValidPhoneNumber(phone)) {
        showAlert("Sila masukkan nombor telefon yang sah.", "danger");
        return;
      }

      // Show success message
      showAlert("Terima kasih! Mesej anda telah dihantar. Kami akan menghubungi anda secepat mungkin.", "success");

      // Redirect to Telegram with contact info
      redirectToTelegramWithContactInfo(name, email, phone, message);

      // Reset the form
      contactForm.reset();
    });
  }
}

/**
 * Initialize scroll animations
 */
function initScrollAnimations() {
  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        e.preventDefault();

        window.scrollTo({
          top: target.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        });

        // If mobile menu is open, close it
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
          document.querySelector(".navbar-toggler").click();
        }
      }
    });
  });

  // Add active class to nav items on scroll
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}

/**
 * Show alert message
 * @param {string} message - Alert message
 * @param {string} type - Alert type (success, danger, warning, info)
 */
function showAlert(message, type = "info") {
  // Create alert element
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
  alertDiv.role = "alert";
  alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

  // Find a suitable container for the alert
  let container;
  if (document.querySelector(".loan-application-card")) {
    container = document.querySelector(".loan-application-card");
    alertDiv.style.marginBottom = "20px";
    container.insertBefore(alertDiv, container.firstChild);
  } else if (document.querySelector(".contact-form-card")) {
    container = document.querySelector(".contact-form-card");
    alertDiv.style.marginBottom = "20px";
    container.insertBefore(alertDiv, container.querySelector("h3").nextSibling);
  } else {
    container = document.querySelector(".container");
    if (container) {
      container.insertBefore(alertDiv, container.firstChild);
    }
  }

  // Auto-dismiss after 5 seconds
  setTimeout(() => {
    alertDiv.classList.remove("show");
    setTimeout(() => {
      alertDiv.remove();
    }, 300);
  }, 5000);
}

/**
 * Format number with thousand separators
 * @param {number} number - Number to format
 * @returns {string} Formatted number
 */
function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} Is valid email
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} Is valid phone number
 */
function isValidPhoneNumber(phone) {
  // Simple validation for Malaysian phone numbers
  // Accepts numbers like: 123456789, 1234567890, etc.
  const phoneRegex = /^[0-9]{9,11}$/;
  return phoneRegex.test(phone);
}

/**
 * Redirect to Telegram with contact form information
 * @param {string} name - Customer's name
 * @param {string} email - Customer's email
 * @param {string} phone - Customer's phone number
 * @param {string} message - Customer's message
 */
function redirectToTelegramWithContactInfo(name, email, phone, message) {
  // Telegram username
  const telegramUsername = "aainaasafra";

  // Create pre-filled message
  const formattedMessage = `Pertanyaan Baru dari Website:\n\nNama: ${name}\nE-mel: ${email}\nTelefon: ${phone}\n\nMesej:\n${message}`;

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(formattedMessage);

  // Create Telegram URL
  const telegramURL = `https://t.me/${telegramUsername}?text=${encodedMessage}`;

  // Open Telegram in a new tab
  window.open(telegramURL, "_blank");
}
