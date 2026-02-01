// -------------------- FRONT PAGE --------------------
// NAKK!! button goes to yes.html
const yesBtn = document.getElementById('yes-btn');
if (yesBtn) {
    yesBtn.addEventListener('click', () => {
        location.href = 'yes.html';
    });
}

// -------------------- YES PAGE --------------------
// Love hearts rain on load
if (document.querySelector('.yes-page')) {
    window.addEventListener('load', () => {
        createLoveRain();
    });
}

// Function to create falling hearts
function createLoveRain() {
    const loveCount = 30;
    for (let i = 0; i < loveCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('love-heart');
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.animationDuration = 5 + Math.random() * 5 + 's';
        document.body.appendChild(heart);
    }
}

// -------------------- NO PAGE --------------------
const goBackBtn = document.getElementById('goBackBtn');
if (goBackBtn) {
    goBackBtn.addEventListener('click', () => {
        location.href = 'indexhb.html';
    });
}

// -------------------- FLOWERS PAGE --------------------
if (document.querySelector('.flowers-page')) {
    window.addEventListener('load', () => {
        createPetals();
    });
}

function createPetals() {
    const petalsContainer = document.querySelector('.petals-container');
    const petalCount = 30;

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDuration = (5 + Math.random() * 5) + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';
        petal.style.transform = `rotate(${Math.random() * 360}deg)`;
        petalsContainer.appendChild(petal);

        const sway = Math.random() * 20 + 10;
        petal.animate(
            [
                { transform: `translateX(0) rotate(${Math.random() * 360}deg)` },
                { transform: `translateX(${sway}px) rotate(${Math.random() * 360}deg)` },
                { transform: `translateX(-${sway}px) rotate(${Math.random() * 360}deg)` },
                { transform: `translateX(0) rotate(${Math.random() * 360}deg)` }
            ],
            {
                duration: (5 + Math.random() * 5) * 1000,
                iterations: Infinity
            }
        );
    }
}

// -------------------- MEMORIES PAGE --------------------
const backMemory = document.querySelector('.memories-page .back-button');
if (backMemory) {
    backMemory.addEventListener('click', () => location.href = 'yes.html');
}

// -------------------- LETTER PAGE --------------------
const letterBackBtn = document.getElementById('letterBackButton');
if (letterBackBtn) {
    letterBackBtn.addEventListener('click', () => location.href = 'yes.html');
}

const envelope = document.getElementById('envelope');
if (envelope) {
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
    });
}

// -------------------- FLOWERS PAGE BACK BUTTON --------------------
const backFlower = document.querySelector('.flowers-page .back-button');
if (backFlower) {
    backFlower.addEventListener('click', () => location.href = 'yes.html');
}

// -------------------- BACKGROUND MUSIC SYSTEM --------------------
const bgMusic = document.getElementById('bgMusic');
if (bgMusic) {
    bgMusic.volume = 0.5;

    const savedTime = localStorage.getItem('bgMusicTime');
    if (savedTime) {
        bgMusic.currentTime = parseFloat(savedTime);
    }

    bgMusic.play().catch(() => {
        console.log("User needs to interact first to play music");
    });

    setInterval(() => {
        localStorage.setItem('bgMusicTime', bgMusic.currentTime);
    }, 1000);

    window.addEventListener('beforeunload', () => {
        localStorage.setItem('bgMusicTime', bgMusic.currentTime);
    });
}

// =====================================================
// 🔒 COUNTDOWN TIMER SYSTEM (FRONT PAGE BUTTON LOCK)
// =====================================================
const birthdayDate = new Date("2026-02-21T00:00:00"); // SET HER REAL BIRTHDAY
const timerBox = document.getElementById("timer");
const buttonsBox = document.getElementById("mainButtons");
const lockText = document.getElementById("lockText");

function updateCountdown() {
    if (!timerBox) return; // Only run on front page

    const now = new Date().getTime();
    const distance = birthdayDate - now;

    if (distance <= 0) {
        timerBox.innerHTML = "🎉 IT'S TIME!!! 🎉";
        lockText.innerHTML = "Unlocked! 💖";
        buttonsBox.classList.add("unlocked"); // unlock buttons via CSS
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / 1000);

    timerBox.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// START COUNTDOWN
if (timerBox) {
    var countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
}



