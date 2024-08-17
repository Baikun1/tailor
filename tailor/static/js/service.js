// Placeholder JavaScript file for future interactivity

document.addEventListener("DOMContentLoaded", function() {
    console.log("Scripts loaded");
    
    // Example of JS interactivity
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hovered');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('hovered');
        });
    });
});
