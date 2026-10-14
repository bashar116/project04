
const themeButton = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");
const currentYear = document.getElementById("current-year");

// Theme switcher
themeButton.addEventListener("click", function () {
    const darkModeEnabled =
        document.body.classList.toggle("dark-theme");

    themeButton.setAttribute("aria-pressed", darkModeEnabled);

    themeButton.textContent = darkModeEnabled
        ? "☀ Light theme"
        : "◐ Theme";
});

// Contact form: prepare an email
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formNote.textContent =
            "Please complete all fields before preparing your email.";
        return;
    }

    const subject = encodeURIComponent("Portfolio contact from " + name);

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    formNote.textContent =
        "Opening your email application. If it does not open, email basharalzeq2003@gmail.com directly.";

    window.location.href =
        "mailto:basharalzeq2003@gmail.com?subject=" +
        subject +
        "&body=" +
        body;
});

// Update footer year automatically
currentYear.textContent = new Date().getFullYear();
