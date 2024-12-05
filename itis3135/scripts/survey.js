document.addEventListener("DOMContentLoaded", () => {
    const formSection = document.getElementById('byo-intro-form-section');
    const form = document.getElementById('byo-intro-form');
    const introduction = document.getElementById('byo-intro-output');
    const resetButton = document.getElementById('reset-button');
    const fillOutAgainButton = document.getElementById('fill-out-again-button');
    const addCourseButton = document.getElementById('add-course-button');
    const coursesContainer = document.getElementById('courses-container');

    const getCourses = () => {
        const courseInputs = document.querySelectorAll('input[name="courses-currently-taking[]"]');
        const courses = Array.from(courseInputs).map((input) => input.value); // Joins course names in a comma-separated list
        return courses;
    };

    addCourseButton.addEventListener('click', () => {
        const courseDiv = document.createElement('div');

        const courseInput = document.createElement('input');
        courseInput.type = 'text';
        courseInput.name = 'courses-currently-taking[]';
        courseInput.placeholder = 'Enter a course name';
        courseInput.required = true;
        courseInput.classList.add('course-input');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.type = 'button';

        deleteButton.addEventListener('click', () => {
            courseDiv.remove();
        });

        courseDiv.appendChild(courseInput);
        courseDiv.appendChild(deleteButton);

        coursesContainer.appendChild(courseDiv);
    });

    fillOutAgainButton.addEventListener('click', () => {
        formSection.style.display = 'block';
        introduction.style.display = 'none';
    });

    resetButton.addEventListener('click', (event) => {
        event.preventDefault();

        if (confirm('Are you sure you want to reset the form?')) {
            form.reset();
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const mascot = document.getElementById('mascot').value;
        const imageCaption = document.getElementById('image-caption').value;
        const personalBackground = document.getElementById('personal-background').value;
        const professionalBackground = document.getElementById('professional-background').value;
        const academicBackground = document.getElementById('academic-background').value;
        const backgroundInWebDevelopment = document.getElementById('background-in-web-development').value;
        const primaryComputerPlatform = document.getElementById('primary-computer-platform').value;
        const funnyThing = document.getElementById('funny-thing').value;
        const anythingElse = document.getElementById('anything-else').value;
        const checkboxBookmark = document.getElementById('checkbox-bookmark');

        if (!checkboxBookmark.checked) {
            alert('Please agree to the terms below to continue');
            return;
        }

        const image = document.getElementById('image').files[0];
        const imageURL = image ? URL.createObjectURL(image) : '';

        const nameOutput = document.getElementById('name-output');
        const imageOutput = document.getElementById('image-output');
        const imageCaptionOutput = document.getElementById('image-caption-output');
        const personalBackgroundOutput = document.getElementById('personal-background-output');
        const professionalBackgroundOutput = document.getElementById('professional-background-output');
        const academicBackgroundOutput = document.getElementById('academic-background-output');
        const backgroundInWebDevelopmentOutput = document.getElementById('background-in-web-development-output');
        const primaryComputerPlatformOutput = document.getElementById('primary-computer-platform-output');
        const funnyThingOutput = document.getElementById('funny-thing-output');
        const anythingElseOutput = document.getElementById('anything-else-output');
    
        nameOutput.textContent = `${fname} ${lname} || ${mascot}`;

        if (imageURL) {
            imageOutput.innerHTML = `<img src="${imageURL}" alt="${imageCaption}">`;
        }

        imageCaptionOutput.textContent = imageCaption;
        personalBackgroundOutput.textContent = personalBackground;
        professionalBackgroundOutput.textContent = professionalBackground;
        academicBackgroundOutput.textContent = academicBackground;
        backgroundInWebDevelopmentOutput.textContent = backgroundInWebDevelopment;
        primaryComputerPlatformOutput.textContent = primaryComputerPlatform;
        funnyThingOutput.textContent = funnyThing;
        anythingElseOutput.textContent = anythingElse;

        const coursesCurrentlyTakingOutput = document.getElementById('courses-currently-taking-output');

        const coursesCurrentlyTaking = getCourses();
        coursesCurrentlyTakingOutput.innerHTML = '';
        coursesCurrentlyTaking.forEach((course) => {
            const courseItem = document.createElement('li');
            courseItem.innerHTML = `<b>${course}</b>`;
            coursesCurrentlyTakingOutput.appendChild(courseItem);
        });

        formSection.style.display = 'none';
        introduction.style.display = 'block';
    });
});