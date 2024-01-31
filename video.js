document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('.w-100.mb-100.show-on-scroll');
    var playPauseBtn = document.getElementById('playPauseBtn');

    var playPromise;

    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            // Attempt to play the video and capture the promise
            playPromise = video.play();

            // If there is a promise, handle it
            if (playPromise !== undefined) {
                playPromise.then(function() {
                    // Playback started successfully
                }).catch(function(error) {
                    // Handle playback start error
                    console.error("Error trying to play the video: ", error);
                });
            }
        } else {
            // If the play promise is not pending, pause the video
            if (playPromise === undefined || playPromise.state === 'fulfilled') {
                video.pause();
            }
        }
    });
});
