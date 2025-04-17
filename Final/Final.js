document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkmode");

    // Select elements to toggle dark mode
    const elementsToToggle = [
        document.documentElement, // Root HTML element
        document.body,            // Body element
        document.getElementById("mobile-nav"),
        document.getElementById("container"),
        document.getElementById("left-container"),
        document.querySelector("nav"),
        document.querySelector("footer"),
        document.querySelector(".wrappernav"),
        document.querySelector(".wrappernavwords"),
        document.querySelectorAll("section, article, aside, main, h1, h2, h3, p, a, div, ul, li, span, label, button, input, textarea, .region, .travel, #darkmode"),
    ];

    // Elements to EXCLUDE from dark mode
    const elementsToExclude = [
        document.querySelector(".newgreen"), // Prevent .newgreen from changing
        document.querySelector("#gallery"), // Prevent #gallery from changing
        document.querySelectorAll("#gallery img"), // Prevent images in gallery from changing
        document.querySelectorAll("table tr, table td, table th, .travel"), // Prevent tables from turning black
        document.querySelectorAll("#heroindex, #morgathimage, #thragarimage, #elowenimage, #kaelithorimage, #vestraimage, #nimimage, #twisted-fangimage, #heroDM, #aidm, #world, #lore, #opinion, #scribe, .contribute-peice-7, #mobile-nav li") // Exclude background images
    ];

    // Function to enable dark mode
    function enableDarkMode() {
        elementsToToggle.forEach(element => {
            if (element) {
                if (NodeList.prototype.isPrototypeOf(element)) {
                    element.forEach(el => el.classList.add("dark-mode"));
                } else {
                    element.classList.add("dark-mode");
                }
            }
        });

        // Ensure excluded elements keep their original styles
        elementsToExclude.forEach(element => {
            if (element) {
                if (NodeList.prototype.isPrototypeOf(element)) {
                    element.forEach(el => el.classList.remove("dark-mode"));
                } else {
                    element.classList.remove("dark-mode");
                }
            }
        });

        localStorage.setItem("darkMode", "enabled");
    }

    // Function to disable dark mode
    function disableDarkMode() {
        elementsToToggle.forEach(element => {
            if (element) {
                if (NodeList.prototype.isPrototypeOf(element)) {
                    element.forEach(el => el.classList.remove("dark-mode"));
                } else {
                    element.classList.remove("dark-mode");
                }
            }
        });

        localStorage.setItem("darkMode", "disabled");
    }

    // Check localStorage and apply dark mode if it was enabled
    function applyDarkModePreference() {
        if (localStorage.getItem("darkMode") === "enabled") {
            enableDarkMode();
            if (darkModeToggle) {
                darkModeToggle.checked = true;
            }
        } else {
            disableDarkMode();
        }
    }

    applyDarkModePreference(); // Apply the preference on every page load

    // Event listener for the toggle switch
    if (darkModeToggle) {
        darkModeToggle.addEventListener("change", function () {
            if (darkModeToggle.checked) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        });
    }
});
