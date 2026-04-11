const containers = document.querySelectorAll(".scroll-container");

containers.forEach(container => {
    const album = container.querySelector(".albums");
    const artist = container.querySelector(".artists");
    const left = container.querySelector(".scrollBtnLeft");
    const right = container.querySelector(".scrollBtnRight");

    left.addEventListener("click", () => {
        if (album) {
            album.scrollLeft -= 400;
        }
        if (artist) {
            artist.scrollLeft -= 400;
        }
        console.log("left clicked")
    });

    right.addEventListener("click", () => {
        if (album) {
            album.scrollLeft += 400;
        }
        if (artist) {
            artist.scrollLeft += 400;
        }
        console.log("right clicked")
    });
});