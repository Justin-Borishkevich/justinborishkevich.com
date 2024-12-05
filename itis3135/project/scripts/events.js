document.addEventListener("DOMContentLoaded", function() {
    const event1Button = document.getElementById("event1-more");
    const event3Button = document.getElementById("event3-more");
    // Get the button and popup elements
    const share1Button = document.getElementById('share1-btn');
    const share1Popup = document.getElementById('share1-popup');

    const share2Button = document.getElementById('share2-btn');
    const share2Popup = document.getElementById('share2-popup');

    const share3Button = document.getElementById('share3-btn');
    const share3Popup = document.getElementById('share3-popup');
    
    event1Button.addEventListener("click", () => {
        window.open("https://goodnewschurchclt.churchcenter.com/registrations/events/2625287", "_blank");
    });

    event3Button.addEventListener("click", () => {
        window.open("https://www.goodnewschurchclt.com", "_blank");
    });
    
    // Toggle the pop-up visibility on button click
    share1Button.addEventListener('click', () => {
        share1Popup.classList.toggle('hidden');
        share1Popup.classList.toggle('visible');
    });

    // Close the popup when clicking outside
    document.addEventListener('click', (event) => {
        if (!share1Button.contains(event.target) && !share1Popup.contains(event.target)) {
            share1Popup.classList.add('hidden');
            share1Popup.classList.remove('visible');
        }
    });

    // Toggle the pop-up visibility on button click
    share2Button.addEventListener('click', () => {
        share2Popup.classList.toggle('hidden');
        share2Popup.classList.toggle('visible');
    });

    // Close the popup when clicking outside
    document.addEventListener('click', (event) => {
        if (!share2Button.contains(event.target) && !share2Popup.contains(event.target)) {
            share2Popup.classList.add('hidden');
            share2Popup.classList.remove('visible');
        }
    });



            // Toggle the pop-up visibility on button click
    share3Button.addEventListener('click', () => {
        share3Popup.classList.toggle('hidden');
        share3Popup.classList.toggle('visible');
    });

    // Close the popup when clicking outside
    document.addEventListener('click', (event) => {
        if (!share3Button.contains(event.target) && !share3Popup.contains(event.target)) {
            share3Popup.classList.add('hidden');
            share3Popup.classList.remove('visible');
        }
    });
});