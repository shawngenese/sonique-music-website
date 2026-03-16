document.addEventListener("DOMContentLoaded", () => {

const play = document.querySelector(".playBtn");
const pause = document.querySelector(".pauseBtn");
const audio = document.querySelector("#audio");

const progress = document.querySelector(".slider");
const current = document.querySelector("#current");
const duration = document.querySelector("#duration-time");

const musicName = document.querySelector(".music-name");

play.addEventListener("click", () => {
    audio.play();
    play.classList.add("active")
    pause.classList.remove("active");
    musicName.textContent = "Multo - Cup of Joe Playing";

});


pause.addEventListener("click", () => {
    audio.pause();
    pause.classList.add("active")
    play.classList.remove("active")
    musicName.textContent = "Multo - Cup of Joe";
});

// kapag loaded na ang audio
// audio.addEventListener("loadedmetadata", () => {
//     duration.textContent = formatTime(audio.duration);
//     progress.max = audio.duration;
// });
audio.addEventListener("canplay", () => {
    duration.textContent = formatTime(audio.duration);
    progress.max = audio.duration;
});

// habang tumutugtog
audio.addEventListener("timeupdate", () => {

    progress.value = audio.currentTime;
    current.textContent = formatTime(audio.currentTime);

});

// kapag ginagalaw ang slider
progress.addEventListener("input", () => {
    audio.currentTime = progress.value;
});

// time formatter
function formatTime(time){

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
}

});