document.addEventListener("DOMContentLoaded", () => {
    const currentDate = document.getElementById("current-date");
    const nameInput = document.getElementById("name");
    const moodInput = document.getElementById("mood");
    const greetingButton = document.getElementById("greeting-button");
    const greeting = document.getElementById("greeting");
    const numberInput = document.getElementById("number");
    const polygonButton = document.getElementById("polygon-button");
    const randomItemButton = document.getElementById("random-item-button");
    const randomItem = document.getElementById("random-item");
    const yearlyCasesButton = document.getElementById("yearly-cases-button");
    const yearlyCases = document.getElementById("yearly-cases");
    const legalCases = document.getElementById("legal-cases");
    const legalCaseInput = document.getElementById("legal-case");
    const legalCaseButton = document.getElementById("legal-case-button");
    const honoraryName = document.getElementById("honorary-name");
    const honoraryButton = document.getElementById("honorary-defender-button");
    const honoraryInput = document.getElementById("honorary-defender");
    const dishonorableName = document.getElementById("dishonorable-name");
    const dishonorableButton = document.getElementById("dishonorable-defender-button");
    const dishonorableInput = document.getElementById("dishonorable-defender");

    

    // Arrays for day and month names
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Array for court room items
    const courtItems = ["Gavel", "Jury chair", "Courtroom podium", "Scales of justice statue", "legal nameplate", "Engraved pen"];
    
    // Get the current date and time
    const current = new Date();
    const year = current.getFullYear();
    const month = current.getMonth() + 1;
    const date = current.getDate();
    const hours = current.getHours();
    const minutes = current.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;

    // Get the day of the week and month
    const dayOfWeek = daysOfWeek[current.getDay()];
    const monthName = months[month - 1];
    
    // Adding Current Date to DOM
    currentDate.innerHTML = `Today is ${formattedHours}:${minutes} ${amOrPm} on ${dayOfWeek}, ${date} ${monthName}, ${year}`;

    // Greeting Button Function
    greetingButton.addEventListener("click", () => {
        if (!nameInput.value && !moodInput.value) {
            greeting.innerHTML = "The Judicious Beaver Law Firm welcomes you!";
            return;
        } else if (!moodInput.value && nameInput.value) {
            greeting.innerHTML = `The Judicious Beaver Law Firm welcomes you, ${nameInput.value}!`;
            return;
        } else if (!nameInput.value) {
            greeting.innerHTML = `The Judicious Beaver Law Firm welcomes you! We're glad you are ${moodInput.value}!`;
        } else {
            greeting.innerHTML = `The Judicious Beaver Law Firm welcomes you, ${nameInput.value}! 
            We're glad you are ${moodInput.value}!`;
        }
    });

    // Polygon Button Function
    polygonButton.addEventListener("click", () => {
        if (!numberInput.value) {
            alert("Please enter a number between 1 and 10.");
            return;
        } else if (numberInput.value > 10 || numberInput.value === 0 || numberInput.value < -10) {
            alert("Please enter a number less than 10 or greater than 0.");
            return;
        }

        const polygons = ["henagon", "digon", "trigon", "tetragon", "pentagon", "hexagon", "heptagon", "octagon", "enneagon", "decagon"];
        const polygonNumber = Math.round(Math.abs(numberInput.value));
        const polygonName = polygons[polygonNumber - 1];
        alert(`The name of the polygon with ${polygonNumber} sides is ${polygonName}`);
    });

    // Random Item Button Function
    randomItemButton.addEventListener("click", () => {
        const randomItemIndex = Math.floor(Math.random() * courtItems.length);
        randomItem.innerHTML = `Random Court Room Item: <b>${courtItems[randomItemIndex]}</b>`;
    });

    // Yearly Cases Button Function
    yearlyCasesButton.addEventListener("click", () => {
        yearlyCases.innerHTML = `NC Beaver Population as of 2010: <b>500,000</b>`;
    });

    // Legal Case Button Function
    legalCaseButton.addEventListener("click", () => {
        if (!legalCaseInput.value) {
            alert("Please enter a legal case.");
            return;
        }
        const newCase = document.createElement("li");
        newCase.textContent = legalCaseInput.value;
        legalCases.appendChild(newCase);
        legalCaseInput.value = "";
    });

    // Honorary Defender Button Function
    honoraryButton.addEventListener("click", () => {
        if (!honoraryInput.value) {
            alert("Please enter a name.");
            return;
        }
        honoraryName.innerHTML = honoraryInput.value;
        honoraryInput.value = "";
    });

    // Dishonorable Defender Button Function
    dishonorableButton.addEventListener("click", () => {
        if (!dishonorableInput.value) {
            alert("Please enter a name.");
            return;
        }
        dishonorableName.innerHTML = dishonorableInput.value;
        dishonorableInput.value = "";
    });




    // function 5 - Change the name of the worst beaver in the world







});