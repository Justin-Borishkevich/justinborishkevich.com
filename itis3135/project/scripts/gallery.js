document.addEventListener("DOMContentLoaded", function() {
    const slideshowContainer = document.getElementById("slideshow-container");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const slideshowThumbnails = document.getElementById("slideshow-thumbnails");

    fetch("../project/components/gallery.json")
        .then((response) => response.json())
        .then((data) => {
            const images = data.images;

            const createSlideshow = () => {
                const slideshowImage = document.createElement("img");
                const slideshowSize = images.length;
                let slideshowImageId = images[0].id;
                slideshowImage.src = images[0].src;
                slideshowImage.alt = images[0].alt;
                slideshowImage.id = "slideshow-image";

                const imageCaption = document.createElement("p");
                imageCaption.textContent = images[0].alt;
                imageCaption.id = "image-caption";



                const createThumbnails = () => {
                    images.forEach((image) => {
                        const thumbnail = document.createElement("img");
                        thumbnail.src = image.src;
                        thumbnail.alt = image.alt;
                        thumbnail.id = image.id;
                        thumbnail.classList.add("thumbnail");
                        slideshowThumbnails.appendChild(thumbnail);
    
                        thumbnail.addEventListener("click", () => {
                            slideshowImage.src = image.src;
                            slideshowImage.alt = image.alt;
                            imageCaption.textContent = image.alt;
    
                            const thumbnails = document.querySelectorAll(".thumbnail");
                            thumbnails.forEach((thumbnail) => {
                                thumbnail.classList.remove("selected");
                            });

                            thumbnail.classList.add("selected");
                        });

                        if (slideshowImage.src === thumbnail.src) {
                            thumbnail.classList.add("selected");
                        }
                    });
    

    
                };

                slideshowContainer.appendChild(slideshowImage);
                slideshowContainer.appendChild(imageCaption);
    
                createThumbnails();


                prevButton.addEventListener("click", () => {
                    const slideshowNextImage = (slideshowImageId - 1 + slideshowSize) % slideshowSize;
                    slideshowImageId = images[slideshowNextImage].id;
                    slideshowImage.src = images[slideshowNextImage].src;
                    slideshowImage.alt = images[slideshowNextImage].alt;
                    imageCaption.textContent = images[slideshowNextImage].alt;

                    const thumbnails = document.querySelectorAll(".thumbnail");

                    thumbnails.forEach((thumbnail) => {
                        thumbnail.classList.remove("selected");
                    });

                    document.getElementById(slideshowImageId).classList.add("selected");

                });
    
                nextButton.addEventListener("click", () => {
                    const slideshowNextImage = (slideshowImageId + 1 + slideshowSize) % slideshowSize;
                    slideshowImageId = images[slideshowNextImage].id;
                    slideshowImage.src = images[slideshowNextImage].src;
                    slideshowImage.alt = images[slideshowNextImage].alt;
                    imageCaption.textContent = images[slideshowNextImage].alt;

                    const thumbnails = document.querySelectorAll(".thumbnail");

                    thumbnails.forEach((thumbnail) => {
                        thumbnail.classList.remove("selected");
                    });

                    document.getElementById(slideshowImageId).classList.add("selected");
                });
            };

            createSlideshow();




        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
});