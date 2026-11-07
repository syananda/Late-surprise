
// OPENING WEBSITE
const openButton = document.getElementById("openButton");
const opening = document.getElementById("opening");
const mainWebsite = document.getElementById("mainWebsite");

const backgroundMusic = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

openButton.addEventListener("click", function () {

    opening.style.display = "none";
    mainWebsite.classList.remove("hidden");

    // Mencoba memutar musik setelah tombol diklik
    backgroundMusic.play()
        .then(function () {
            musicButton.textContent = "♫ Pause Music";
        })
        .catch(function () {
            musicButton.textContent = "♫ Play Music";
        });

});


// PHOTO LIGHTBOX
const photoItems = document.querySelectorAll(".photo-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

photoItems.forEach(function (photo) {

    photo.addEventListener("click", function () {

        lightboxImage.src = photo.src;
        lightbox.classList.add("active");

    });

});

function closePhoto() {
    lightbox.classList.remove("active");
    lightboxImage.src = "";
}

closeLightbox.addEventListener("click", closePhoto);

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {
        closePhoto();
    }

});

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closePhoto();
    }

});


// MUSIC PLAYER
musicButton.addEventListener("click", function () {

    if (backgroundMusic.paused) {

        backgroundMusic.play();

        musicButton.textContent = "♫ Pause Music";

    } else {

        backgroundMusic.pause();

        musicButton.textContent = "♫ Play Music";

    }

});


// BIRTHDAY CANDLE
const candleButton = document.getElementById("candleButton");
const flame = document.getElementById("flame");
const birthdayMessage = document.getElementById("birthdayMessage");

candleButton.addEventListener("click", function () {

    flame.classList.toggle("off");

    if (flame.classList.contains("off")) {

        birthdayMessage.textContent =
            "Happy Birthday, Mama! May all your wishes come true. ♡";

        candleButton.textContent = "Light the Candle Again";

    } else {

        birthdayMessage.textContent =
            "Make a wish, Mama!";

        candleButton.textContent = "Blow the Candle ♡";

    }

});
