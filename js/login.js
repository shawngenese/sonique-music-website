
const errorCon = document.querySelector(".error-container");
const errorMess = document.querySelector(".error");
const socials = document.querySelectorAll(".socials");
const forgot = document.querySelector(".forgot");

socials.forEach(social => {
    social.addEventListener("click", () => {
        errorCon.classList.toggle("active");
        errorMess.classList.toggle("active");
    });
});
forgot.addEventListener("click", () => {
    errorCon.classList.toggle("active");
    errorMess.classList.toggle("active");
});
errorCon.addEventListener("click", () => {
    errorCon.classList.toggle("active");
    errorMess.classList.toggle("active");
});

const email = document.getElementById("email");
const password = document.getElementById("password");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    // admin account reveal HAHAHAHA
    window.location = "?username=admin@example.com" + "&password=admin";
    if(email.value === "admin@example.com" && password.value === "admin") {
        window.location.href = "sonique.html";
    }
});