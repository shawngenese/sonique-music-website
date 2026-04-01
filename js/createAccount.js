const createError = document.querySelector(".createError");
const pass = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirmPassword");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (pass.value == confirmPassword.value) {
        createError.textContent = "Account has been created.";
        createError.style.color = "rgb(0, 255, 0)";
        setTimeout(() => createError.textContent = "LOGIN USING DUMMY ACCOUNT.", 1500);
        setTimeout(() => createError.textContent = "Redirecting to Login page.", 3000);
        setTimeout(() => window.location.href = 'login.html', 4500);
    }
    else if (pass.value != confirmPassword) {
        createError.textContent = "Password are not the same";
        createError.style.color = "red"
    } 
    else {
        createError.textContent = '';
    }
});