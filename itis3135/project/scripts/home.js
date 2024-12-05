document.addEventListener("DOMContentLoaded", function() {
    const eventButton = document.getElementById("event-more");
    const registrationButton = document.getElementById("register-more");
    const aboutButton = document.getElementById("about-more");
    // Get the button and popup elements
    const shareButton = document.getElementById('share-btn');
    const sharePopup = document.getElementById('share-popup');
    
    eventButton.addEventListener("click", () => {
        window.location.href = "events.html";
    });
    
    registrationButton.addEventListener("click", () => {
        window.location.href = "register.html";
    });
    
    aboutButton.addEventListener("click", () => {
        window.location.href = "about.html";
    });

    // Toggle the pop-up visibility on button click
    shareButton.addEventListener('click', () => {
        sharePopup.classList.toggle('hidden');
        sharePopup.classList.toggle('visible');
    });

    // Close the popup when clicking outside
    document.addEventListener('click', (event) => {
        if (!shareButton.contains(event.target) && !sharePopup.contains(event.target)) {
            sharePopup.classList.add('hidden');
            sharePopup.classList.remove('visible');
        }
    });

















});