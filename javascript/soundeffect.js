// Sound Effect onClick Start

document.querySelectorAll("[data-audio]").forEach(el => {
    el.addEventListener("click", () => {
        const huruf = el.dataset.audio;
        const audio = new Audio(`../assets/audio/${huruf}.mp3`);
        audio.currentTime = 0;
        audio.play();
    });
});

// Sound Effect onClick End