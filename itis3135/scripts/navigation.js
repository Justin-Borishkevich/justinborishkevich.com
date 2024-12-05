document.addEventListener("DOMContentLoaded", function() {
    const titleElement = document.getElementById("title");
    const title = titleElement.textContent;
    const headerContainer = document.getElementById("header-container");
    const footerContainer = document.getElementById("footer-container");

    const addValidator = () => {
        const validator = document.createElement("script");
        validator.src = "https://lint.page/kit/4d0fe3.js";
        validator.crossorigin = "anonymous";
    
        headerContainer.appendChild(validator);
    };

    addValidator();

    // Fetch JSON data
    fetch("../itis3135/components/header.json")
        .then((response) => response.json())
        .then((data) => {

            // Process JSON data
            const addMainNav = () => {
                //adding title
                const titleValue = data.title;
                headerContainer.innerHTML = `<h1>${titleValue}</h1>`;

                //creating main navigation
                const mainNav = document.createElement("nav");
                mainNav.classList.add("primary");

                //adding menu items
                data.menuLinks.forEach((item) => {
                    const menuItem = document.createElement("a");
                    menuItem.textContent = item.name;
                    menuItem.href = item.url;
                    menuItem.target = item.openInNewTab ? "_blank" : "_self";
                    
                    mainNav.appendChild(menuItem);
                    mainNav.appendChild(document.createTextNode(" || "));
                });

                //removing last ||
                mainNav.removeChild(mainNav.lastChild);
                //adding navigation to header
                headerContainer.appendChild(mainNav);
            
                //adding slogan
                const sloganValue = data.slogan;
                headerContainer.innerHTML += `<em>"${sloganValue}"</em>`;
            };
            addMainNav();

            const addSecondaryNav = () => {
                const secondaryNav = document.createElement("nav");
                secondaryNav.classList.add("secondary");

                data.sublinks.forEach((item) => {
                    const menuItem = document.createElement("a");
                    menuItem.textContent = item.name;
                    menuItem.href = item.url;
                    menuItem.target = item.openInNewTab ? "_blank" : "_self";
                    
                    secondaryNav.appendChild(menuItem);
                    secondaryNav.appendChild(document.createTextNode(" || "));
                });

                secondaryNav.removeChild(secondaryNav.lastChild);

                headerContainer.appendChild(secondaryNav);
            };
            addSecondaryNav();
        })
    .catch((error) => console.error("Error fetching menu:", error));

    fetch("../itis3135/components/footer.json")
        .then((response) => response.json())
        .then((data) => {
            const addFooter = () => {
                const footerNav = document.createElement("nav");

                data.footerLinks.forEach((item) => {
                    const menuItem = document.createElement("a");
                    menuItem.textContent = item.name;
                    menuItem.href = item.url;
                    menuItem.target = item.target ? "_blank" : "_self";
                    
                    footerNav.appendChild(menuItem);
                    footerNav.appendChild(document.createTextNode(" || "));
                });

                footerNav.removeChild(footerNav.lastChild);

                footerContainer.appendChild(footerNav);

            };
            addFooter();

            const addDesigner = () => {
                const designer = document.createElement("p");
                designer.innerHTML = `<p>Page Designed by <a href="${data.designLinks[0].url}" target="${data.designLinks[0].target ? "_blank" : "_self"}">${data.designLinks[0].name}</a> &copy;2024, <a href="${data.designLinks[1].url}" target="${data.designLinks[1].target ? "_blank" : "_self"}">${data.designLinks[1].name}</a></p>`;
                footerContainer.appendChild(designer);
            };

            addDesigner();








        })
    .catch((error) => console.error("Error fetching footer:", error));







});