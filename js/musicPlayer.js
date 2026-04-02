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
        musicName.textContent = "Multo - Cup of Joe | Playing";
    });
    
    pause.addEventListener("click", () => {
        audio.pause();
        pause.classList.add("active")
        play.classList.remove("active")
        musicName.textContent = "Multo - Cup of Joe";
    });

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

const shuffle = document.querySelectorAll(".shuffleBtn");
const loop = document.querySelector(".loopBtn");

shuffle.forEach(shuffle => {
    shuffle.addEventListener("click", () => {
        shuffle.classList.toggle("active");
    });
});

loop.addEventListener("click", () => {
    loop.classList.toggle("active")
});

// para hindi sila makapag select ng text (google)
document.body.style.userSelect = "none";
document.body.style.webkitUserSelect = "none"; // For Safari
document.body.style.msUserSelect = "none";     // For older IE