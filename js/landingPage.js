const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const support = document.querySelector(".support");
const errorCon = document.querySelector(".error-container");
const errorMess = document.querySelector(".error");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

support.addEventListener("click", () => {
    errorCon.classList.toggle("active");
    errorMess.classList.toggle("active");
});

errorCon.addEventListener("click", () => {
    errorCon.classList.toggle("active");
    errorMess.classList.toggle("active");
});

const loadContainer = document.querySelector(".load-container");
const loader = document.querySelector(".loader");
const microsoftDownload = document.querySelector(".microsoft-download");
const platforms = document.querySelectorAll(".platforms");
const premiumBtns = document.querySelectorAll(".premiumBtn");


loadContainer.addEventListener("click", () => {
    loadContainer.classList.toggle("active");
    loader.classList.toggle("active");
});

platforms.forEach(platforms => {
    platforms.addEventListener("click", () => {
        loadContainer.classList.toggle("active");
        loader.classList.toggle("active");
        
        setTimeout(() => {
            loadContainer.classList.remove("active");
            loader.classList.remove("active");
        }, 3000);
    });
});

premiumBtns.forEach(premiumBtn => {
    premiumBtn.addEventListener("click", () => {
        loadContainer.classList.toggle("active");
        loader.classList.toggle("active");
        
        setTimeout(() => {
            loadContainer.classList.remove("active");
            loader.classList.remove("active");
        }, 3000);
    });
});
microsoftDownload.addEventListener("click", () => {
    loadContainer.classList.toggle("active");
    loader.classList.toggle("active");
    
    setTimeout(() => {
        loadContainer.classList.remove("active");
        loader.classList.remove("active");
    }, 3000);
});

