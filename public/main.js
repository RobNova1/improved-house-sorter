// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Example: Change background color on button click
    const changeColorButton = document.getElementById('change-color-button');
    if (changeColorButton) {
        changeColorButton.addEventListener('click', function() {
            document.body.style.backgroundColor = getRandomColor();
        });
    }

    // Example function to generate random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Add more JavaScript functionality as needed
});

// Example: Toggle navbar color on scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('bg-dark');
    } else {
        $('.navbar').removeClass('bg-dark');
    }
});
