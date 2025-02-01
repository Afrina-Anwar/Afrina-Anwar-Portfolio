const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = ()=>{
    navLinks.classList.toggle('active');
}

function openMailApp() {
    // Get the input email
    const emailInput = document.querySelector('input[type="text"]');
    const userEmail = emailInput.value;

    // Validating the email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userEmail)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Defining email and optional subject and body
    const toEmail = "afrina.anwar.shornova@gmail.com";
    const subject = "Contact from " + userEmail;
    const body = "Hi, I would like to get in touch with you.";

    // Construct the mailto URL
    const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the mail app
    window.location.href = mailtoLink;
}

function scrollToContact() {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
}