document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('.w-100.mb-100.show-on-scroll');
    var playPauseBtn = document.getElementById('playPauseBtn');

    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play().catch(function(error) {
                console.error("Error trying to play the video: ", error);
            });
        } else {
            video.pause();
        }
    });
});
