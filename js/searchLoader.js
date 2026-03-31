// loaders para sa search
const formSearch = document.querySelector(".left-header");
const loadContainer = document.querySelector(".load-container");
const loader = document.querySelector(".loader");

// sa premium buttons to
const premiumBtns = document.querySelectorAll(".premiumBtn");
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

const search = document.querySelector("#search");
const searchBar = document.querySelector(".left-header");

search.addEventListener("click", () => {
    searchBar.classList.toggle('active');
});

document.addEventListener("click", (event) => {
    if (!searchBar.contains(event.target)) {
        searchBar.classList.remove('active');
    }
});

formSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    loadContainer.classList.toggle("active");
    loader.classList.toggle("active");
    
    setTimeout(() => {
        loadContainer.classList.remove("active");
        loader.classList.remove("active");
    }, 3000);
});  

loadContainer.addEventListener("click", () => {
    loadContainer.classList.toggle("active");
    loader.classList.toggle("active");
});
