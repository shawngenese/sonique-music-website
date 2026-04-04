const cancelBtn = document.querySelector("#cancelBtn");
const popupCon = document.querySelector(".are-you-sure-popup");
const logoutBtn = document.querySelector("#logoutBtn");
const message = document.querySelector(".message");
const deleteBtn = document.querySelector("#deleteBtn");
const confirm = document.querySelector(".confirm");

function showPopUp() {
    popupCon.classList.add('popup');
}
function backToHome() {
    setTimeout(() => {      
        // window.location.href = "../index.html";
        window.location.replace("/");
    }, 5000);
}
cancelBtn.addEventListener('click', () => {
    popupCon.classList.remove('popup');
});

confirm.addEventListener("click", () => {
    message.textContent = "Signing out from all devices...";
    logoutBtn.textContent = "Exit";
    cancelBtn.style.display = "none";
    backToHome();
    // logoutBtn.onclick = () => window.location.href = "../index.html";
    logoutBtn.onclick = () => window.location.replace("https://shawngenese.github.io/sonique-music-website/");
});

deleteBtn.addEventListener('click', () => {
    message.textContent = "Deleting your account...";
    deleteBtn.textContent = "Exit";
    backToHome();
    // deleteBtn.onclick = () => window.location.href = "../index.html";
    deleteBtn.onclick = () => window.location.replace("https://shawngenese.github.io/sonique-music-website/");
    cancelBtn.style.display = "none";
});

function showPopUpChange(changeType) {
    const inputs = document.querySelectorAll("input[type='text']");
    const message = document.querySelector(".message");
    popupCon.classList.add('popup');
    document.querySelector("#changeType").textContent = changeType;

    document.querySelector("#changeBtn").addEventListener("click", () => {
        if (changeType == "Change Gender") {
            message.textContent = "Something went wrong. Try again later."
        } else {
            message.textContent = "Already Taken. Try something new."
        }
        cancelBtn.addEventListener("click", () => {
            inputs.forEach(input => {
                input.value = '';
                message.textContent = "";
            });
        })
    })

    if (changeType == "Change Gender") {
        inputs.forEach(input => input.style.display = "none");
        document.querySelector("select").style.display = "inline-block";

    } else {
        inputs.forEach(input => input.style.display = "inline-block");
        document.querySelector("select").style.display = "none";
    }
}