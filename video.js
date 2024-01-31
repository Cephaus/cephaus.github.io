document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('.w-100.mb-100.show-on-scroll');
    var playPauseBtn = document.getElementById('playPauseBtn');

    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});
