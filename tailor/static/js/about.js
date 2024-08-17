// about.js

document.addEventListener("DOMContentLoaded", function() {
    // Add any interactive JavaScript if needed
    console.log("About page loaded");

    // Example: Change text color on hover
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseenter', function() {
        ctaButton.style.backgroundColor = '#ffd700';
        ctaButton.style.color = '#333';
    });

    ctaButton.addEventListener('mouseleave', function() {
        ctaButton.style.backgroundColor = '#333';
        ctaButton.style.color = '#fff';
    });
});
