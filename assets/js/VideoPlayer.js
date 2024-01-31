document.addEventListener('DOMContentLoaded', function() {
    var thumbnail = document.getElementById('videoThumbnail');
    thumbnail.addEventListener('click', OpenVideo);
});

function OpenVideo() {
    var video = document.getElementById('video');
    var thumbnail = document.getElementById('videoThumbnail');

    // Set the video source and load the video
    video.querySelector('source').src = "https://peterariet.com/assets/StudioSyro/Videos/TFSIC.mp4";
    video.load();

    // Hide the thumbnail and show the video
    thumbnail.style.display = 'none';
    video.style.display = 'block';

    // Set the volume to 50%
    video.volume = 0.5;

    // Event listeners for video loading
    video.addEventListener('loadeddata', function() {
        console.log("Video data has loaded.");
    });

    video.addEventListener('canplay', function() {
        console.log("Video can be played.");
    });

    video.addEventListener('error', function(e) {
        console.error("Error loading video:", e);
    });

    // Play the video and handle the promise
    var playPromise = video.play();

    if (playPromise !== undefined) {
        playPromise.then(function() {
            // Automatic playback started successfully
        }).catch(function(error) {
            console.error("Error trying to play the video: ", error);
            // Automatic playback failed
            // Show a UI element to let the user manually start playback
        });
    }
}
