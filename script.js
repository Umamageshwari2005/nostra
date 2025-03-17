function newarrival() {
    // Select the '.nostra-new-arrivals' section
    var newArrivals = document.querySelector('.nostra-new-arrivals');

    // Scroll to the '.nostra-new-arrivals' section
    if (newArrivals) {
        newArrivals.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function mostWanted() {
    var mostWantedSection = document.querySelector('.nostra-most-wanted');
    if (mostWantedSection) {
        mostWantedSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Function to scroll to the top of the page (Home)
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
    const summerCheckbox = document.getElementById("summer");
    const partyCheckbox = document.getElementById("party");
    const beachCheckbox = document.getElementById("beach");
    const redCheckbox = document.getElementById("red");
    const greenCheckbox = document.getElementById("green");
    const yellowCheckbox = document.getElementById("yellow");
    const shirtContainer = document.getElementById("shirt-container");

    // Function to filter shirts based on selected categories and colors
    function filterShirts() {
        const selectedCategories = [];
        const selectedColors = [];

        // Collect selected categories
        if (summerCheckbox.checked) selectedCategories.push("summer");
        if (partyCheckbox.checked) selectedCategories.push("party");
        if (beachCheckbox.checked) selectedCategories.push("beach");

        // Collect selected colors
        if (redCheckbox.checked) selectedColors.push("red");
        if (greenCheckbox.checked) selectedColors.push("green");
        if (yellowCheckbox.checked) selectedColors.push("yellow");

        // Show or hide shirts based on filters
        const shirts = shirtContainer.getElementsByClassName("nostra-options-img");
        for (let shirt of shirts) {
            const shirtCategory = shirt.getAttribute("data-category");
            const shirtColor = shirt.getAttribute("data-color");

            const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(shirtCategory);
            const colorMatch = selectedColors.length === 0 || selectedColors.includes(shirtColor);

            if (categoryMatch && colorMatch) {
                shirt.style.display = "block"; // Show shirt
            } else {
                shirt.style.display = "none"; // Hide shirt
            }
        }
    }

    // Event listeners for checkboxes
    summerCheckbox.addEventListener("change", filterShirts);
    partyCheckbox.addEventListener("change", filterShirts);
    beachCheckbox.addEventListener("change", filterShirts);
    redCheckbox.addEventListener("change", filterShirts);
    greenCheckbox.addEventListener("change", filterShirts);
    yellowCheckbox.addEventListener("change", filterShirts);
});

function toggleMenu() {
    const menu = document.querySelector('.nostra-title-para');
    // Toggle the display style between 'none' and 'block'
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

// Sample functions for your links (optional, based on your current functionality)
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function newarrival() {
    window.location.href = "index.html";  // Just a placeholder URL
}

function mostWanted() {
    window.location.href = "index.html";  // Just a placeholder URL
}

