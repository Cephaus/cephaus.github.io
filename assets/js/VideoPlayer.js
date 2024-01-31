document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the image
    var thumbnail = document.getElementById('videoThumbnail');
    thumbnail.addEventListener('click', OpenVideo);
});

function OpenVideo() {
    var video = document.getElementById('video');
    var thumbnail = document.getElementById('videoThumbnail');

    // Hide the thumbnail and show the video
    thumbnail.style.display = 'none';
    video.style.display = 'block';

	 // Set the volume to 50%
	 video.volume = 0.5;

    // Play the video
    video.play();

    // // Listener for when the video is paused
    // video.onpause = function() {
    //     // Hide the video and show the thumbnail
    //     video.style.display = 'none';
    //     thumbnail.style.display = 'block';
    // };
}
