
document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('nav a');

    navItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();

            // Get the target section's ID from the href attribute
            const targetId = item.getAttribute('href').substring(1);

            // Use the target ID to get the corresponding section
            const targetSection = document.getElementById(targetId);

            // Scroll to the target section with smooth behavior
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Remove the 'active' class from all navigation items
            navItems.forEach(function (navItem) {
                navItem.classList.remove('active');
            });

            // Add the 'active' class to the clicked item
            item.classList.add('active');
        });
    });
});

// Example: Toggle dark mode
const body = document.body;

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
}

