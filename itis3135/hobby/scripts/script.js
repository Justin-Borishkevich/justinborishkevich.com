document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');

    // Function to show the selected section
    function showSection(targetId) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show the targeted section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: makes scrolling smooth
        });
    }

    // Event listeners for each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('data-target'); // Get target section ID
            showSection(targetId); // Show the corresponding section
        });
    });

    // Show the first section by default
    showSection('hobby');
});