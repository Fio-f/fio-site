
const music = document.getElementById('music');
let songs = [
    "https://docs.google.com/uc?export=download&id=1WqG4QBdYoSo3WojDCfMQUx1Tf4yk03HC",  // Твоя пісня
    "https://docs.google.com/uc?export=download&id=1vHl8jStEyEK4VpzjNqvruIRUxbWajwqt"   // Інша пісня
];
let current = 0;

function togglePlay() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function nextSong() {
    current = (current + 1) % songs.length;
    music.src = songs[current];
    music.play();
}

function prevSong() {
    current = (current - 1 + songs.length) % songs.length;
    music.src = songs[current];
    music.play();
}
