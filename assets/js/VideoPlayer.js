document.addEventListener('DOMContentLoaded', function() {
    var thumbnail = document.getElementById('videoThumbnail');
    thumbnail.addEventListener('click', OpenVideo);
});

function OpenVideo() {
    var video = document.getElementById('video');
    var thumbnail = document.getElementById('videoThumbnail');

    // Set the video source
    video.querySelector('source').src = "https://peterariet.com/assets/StudioSyro/Videos/TFSI_C.mp4";
    video.load();

    // Hide the thumbnail and show the video
    thumbnail.style.display = 'none';
    video.style.display = 'block';

    // Set the volume to 50%
    video.volume = 0.5;

    // Play the video
    video.play();
}
