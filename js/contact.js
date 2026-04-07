document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector("#errorMessage").textContent = "Thank you for addressing your concern.";
    setTimeout(() => {
        window.history.back();
    }, 2000);
});