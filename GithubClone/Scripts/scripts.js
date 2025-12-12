/* ---------------------------
   LOGO SCROLLER PAUSE BUTTON
---------------------------- */
const logoTrack = document.getElementById("logoTrack");
const logoToggleBtn = document.getElementById("toggleBtn");

let logoPaused = false;

logoToggleBtn.addEventListener("click", () => {
    logoPaused = !logoPaused;

    if (logoPaused) {
        logoTrack.classList.add("paused");
        logoToggleBtn.textContent = "▶";
    } else {
        logoTrack.classList.remove("paused");
        logoToggleBtn.textContent = "⏸";
    }
});


/* ---------------------------
      VIDEO PAUSE BUTTON
---------------------------- */
const video = document.getElementById("myVideo");
const videoToggleBtn = document.getElementById("videoToggle");

let videoPaused = false;

videoToggleBtn.addEventListener("click", () => {
    if (videoPaused) {
        video.play();
        videoToggleBtn.textContent = "⏸";
    } else {
        video.pause();
        videoToggleBtn.textContent = "▶";
    }
    videoPaused = !videoPaused;
});
// -----------gh--Video Section button ------------------


const ghVideo = document.getElementById("ghVideo");
const ghVideoToggle = document.getElementById("ghVideoToggle");

let ghPaused = false;

ghVideoToggle.addEventListener("click", () => {
    if (ghPaused) {
        ghVideo.play();
        ghVideoToggle.textContent = "⏸";
    } else {
        ghVideo.pause();
        ghVideoToggle.textContent = "▶";
    }
    ghPaused = !ghPaused;
});

const bars = document.getElementById("bars");
const navOption = document.querySelector(".navOption");

bars.addEventListener("click", () => {
  navOption.classList.toggle("active");
});