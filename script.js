// Animation Trigger
const animateBtn = document.getElementById("animate-btn");
animateBtn.addEventListener("click", () => {
    console.log("Button clicked!"); // Log message when the button is clicked

    // Add the animated class to trigger CSS animation
    animateBtn.classList.add("animated");

    // Remove the class after the animation ends
    animateBtn.addEventListener(
        "animationend",
        () => {
            console.log("Animation ended!"); // Log message when the animation ends
            animateBtn.classList.remove("animated");
        },
        { once: true }
    );
});

// Theme Preferences
const themeSelector = document.getElementById("theme");
const saveBtn = document.getElementById("save-btn");

// Load saved theme
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    console.log(`Saved theme: ${savedTheme}`); // Log the saved theme value
    if (savedTheme) {
        document.body.classList.add(`${savedTheme}-mode`);
        themeSelector.value = savedTheme;
    }
});

// Save theme on button click
saveBtn.addEventListener("click", () => {
    const selectedTheme = themeSelector.value;
    console.log(`Selected theme: ${selectedTheme}`); // Log the selected theme value

    try {
        // Save theme to localStorage
        localStorage.setItem("theme", selectedTheme);

        // Remove any existing theme classes
        document.body.classList.remove("dark-mode", "light-mode");

        // Add the selected theme class
        document.body.classList.add(`${selectedTheme}-mode`);
    } catch (error) {
        console.error("Failed to save theme preference:", error);
    }
});