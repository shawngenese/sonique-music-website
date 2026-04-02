window.addEventListener("load", () => {
    if (!sessionStorage.getItem('animate')) {
        document.querySelector('.soniqueLoader').classList.add('active');
        setTimeout(() => {
            document.querySelector('.soniqueLoader').classList.remove('active');
        }, 12000);
        sessionStorage.setItem('animate', 'true');
    }
});