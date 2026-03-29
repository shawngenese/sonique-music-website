const popularArtist = {
    'IV of Spades': [
        { number: 1, image: '../assets/images/4ofSpades/music-cover-04.jpg', title: "Mundo", time: "5:49", listeners: "360,151,156", album: "Single", artistProfile: "../assets/images/4ofSpades/profile.jpg", artistCover: "../assets/images/4ofSpades/cover.jpg", monthlyListeners: "7,341,027 Monthly Listeners"},
        { number: 2, image: '../assets/images/4ofSpades/music-cover-01.jpg', title: "Aura", time: "5:18", listeners: "56,554,964", album: "Single" },
        { number: 3, image: '../assets/images/4ofSpades/music-cover-02.jpg', title: "Come Inside Of My Heart", time: "4:07", listeners: "337,388,294", album: "CLAPCLAPCLAP!"},
        { number: 4, image: '../assets/images/4ofSpades/music-cover-02.jpg', title: "Dulo Ng Hangganan", time: "5:29", listeners: "126,691,312", album: "CLAPCLAPCLAP!"},
        { number: 5, image: '../assets/images/4ofSpades/music-cover-03.jpg', title: "Kabisado", time: "3:27", listeners: "6,399,411", album: "Andalucia"},
    ]
};

function showArtist(artistDisplayName) {
    window.location = "artist.html?artist=" + artistDisplayName;
}

let param = new URLSearchParams(window.location.search);
let artistDisplayName = param.get("artist");
let artistSongsCon = document.querySelector(".artist-preview");
let artistSongs = popularArtist[artistDisplayName];

document.querySelector(".artist-image").src = artistSongs[0].artistProfile;
document.querySelector(".monthly-listeners").innerHTML = artistSongs[0].monthlyListeners;
document.querySelector(".artist-name").innerHTML = artistDisplayName;

const backgroundCover = document.querySelector(".artist-cover");
backgroundCover.style.backgroundImage = `url('${artistSongs[0].artistCover}')`;
backgroundCover.style.backgroundSize = "cover";
backgroundCover.style.backgroundPosition = "center";

artistSongs.forEach(function(song) {
    artistSongsCon.innerHTML += `
        <div class="song-card">
            <div class="song-title">
                <svg class="btnPlay" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
                    <path fill="currentColor" d="M240 128a15.74 15.74 0 0 1-7.6 13.51L88.32 229.65a16 16 0 0 1-16.2.3A15.86 15.86 0 0 1 64 216.13V39.87a15.86 15.86 0 0 1 8.12-13.82a16 16 0 0 1 16.2.3l144.08 88.14A15.74 15.74 0 0 1 240 128"/>
                </svg>
                <p class="number">${song.number}</p>
                <img class="image" src="${song.image}" alt="" height="60px">
                <p class="title">${song.title}</p>
            </div>
            <div class="song-album">
                <p>${song.album}</p>
            </div>
            <div class="song-duration">
                <p class="time">${song.time}</p>
            </div>
            <div class="song-listeners">
                <p class="listeners">${song.listeners}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                <path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 8 8"/>
            </svg>
        </div>
    `;
});