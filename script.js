
// Welcome message in console
console.log("Welcome to Sumer's Portfolio!");

// Select all navigation links
const navLinks = document.querySelectorAll(".nav-links a");

// Add click event to navigation links
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        console.log("You clicked: " + this.textContent);
    });
});

// Display current year in console
const currentYear = new Date().getFullYear();

console.log("Current Year: " + currentYear);
