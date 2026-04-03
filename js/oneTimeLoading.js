window.addEventListener("load", () => {
    const mainLoader = document.querySelector('.soniqueLoader');
    if (!sessionStorage.getItem('animate')) {
        setTimeout(() => {
            mainLoader.classList.add('hide');
            sessionStorage.setItem('animate', 'true');
        }, 12000);
    } else {
        mainLoader.classList.add('hide');
    }
});