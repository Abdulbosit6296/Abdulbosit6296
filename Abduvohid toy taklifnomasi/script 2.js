const weddingDate = new Date('Noyabr 9, 2024 18:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days + " <span>kun</span>";
    document.getElementById('hours').innerHTML = hours + " <span>soat</span>";
    document.getElementById('minutes').innerHTML = minutes + " <span>daqiqalar</span>";
    document.getElementById('seconds').innerHTML = seconds + " <span>soniyalar</span>";

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector('.countdown').innerHTML = "To'yga marhamat!";
    }
}

const interval = setInterval(updateCountdown, 1000);


const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
}