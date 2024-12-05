document.addEventListener("DOMContentLoaded", function() {
    const headerContainer = document.getElementById("header-container");
    const footerContainer = document.getElementById("footer-container");
    let titleId = "";

    const titleElement = document.querySelector(".title");
    if (titleElement) {
        titleId = titleElement.id;
    }

    const addValidator = () => {
        const validator = document.createElement("script");
        validator.src = "https://lint.page/kit/4d0fe3.js";
        validator.crossorigin = "anonymous";
    
        headerContainer.appendChild(validator);
    };

    addValidator();

    // Fetch JSON data
    fetch("../project/components/header.json")
        .then((response) => response.json())
        .then((data) => {

            // Process JSON data
            const addMainNav = () => {
                //adding title
                const findTitle = data.titles.find((obj) => obj.id === titleId);
                if (findTitle) {
                    const titleValue = findTitle.title;
                    headerContainer.innerHTML = `<h1>${titleValue}</h1>`;
                }

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
                    mainNav.appendChild(document.createTextNode(""));
                });

                //removing last ||
                mainNav.removeChild(mainNav.lastChild);
                //adding navigation to header
                headerContainer.appendChild(mainNav);
            };
            addMainNav();
        })
    .catch((error) => console.error("Error fetching menu:", error));

    fetch("../project/components/footer.json")
        .then((response) => response.json())
        .then((data) => {
            const addFooter = () => {
                const footerNav = document.createElement("nav");

                data.footerLinks.forEach((item) => {
                    const menuItem = document.createElement("a");
                    if (item.icon) {
                        menuItem.innerHTML = item.icon;
                    }
                    const nameText = document.createTextNode(item.name);
                    menuItem.appendChild(nameText); // Safely append plain text without affecting the icon

                    menuItem.href = item.url;
                    menuItem.target = item.target ? "_blank" : "_self";

                    console.log(menuItem);
                    
                    footerNav.appendChild(menuItem);
                    footerNav.appendChild(document.createTextNode(""));
                });

                footerNav.removeChild(footerNav.lastChild);

                footerContainer.appendChild(footerNav);

            };
            addFooter();

            const addDesigner = () => {
                const designer = document.createElement("p");
                designer.innerHTML = `<span id = "designer"><p>Page Designed by <a href="${data.designLinks[0].url}" target="${data.designLinks[0].target ? "_blank" : "_self"}">${data.designLinks[0].name}</a> &copy;2024, <a href="${data.designLinks[1].url}" target="${data.designLinks[1].target ? "_blank" : "_self"}">${data.designLinks[1].name}</a></p></span>`;
                footerContainer.appendChild(designer);
            };

            addDesigner();








        })
    .catch((error) => console.error("Error fetching footer:", error));







});