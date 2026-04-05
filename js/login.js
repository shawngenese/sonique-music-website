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

const email = document.querySelector("#email");
const password = document.querySelector("#password");
let errorMessage = document.querySelector("#errorMessage");

function showPass() {
    email.value = "admin@sonique";
    password.value = "admin"; 
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    if(email.value === "admin@sonique" && password.value === "admin") {
        errorMessage.innerHTML = `Redirecting to Sonique. Please wait a moment.`;
        errorMessage.style.color = "rgb(0, 255, 0)";
        setTimeout(() => window.location.href = "sonique.html", 3000);
    }
    else if (email.value == "" || password.value == "") {
        errorMessage.style.color = "red";
        errorMessage.textContent = "Please fill the input fields.";   
    }
    else {
        errorMessage.textContent = "Invalid username or password. Try again.";
        email.value = "";
        password.value = "";
        setTimeout(() => {
            errorMessage.innerHTML = `DEMO ONLY (LOGIN USING THIS) <a onclick="showPass()">CLICK HERE</a>`;
            errorMessage.style.color = "rgb(0, 255, 0)";
        }, 5000);
    }
});
