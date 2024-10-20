document.addEventListener("DOMContentLoaded", function() {
    fetch('videos.json')
        .then(response => response.json())
        .then(data => {
            const replaysDiv = document.getElementById('replays');
            data.videos.forEach(video => {
                const videoElement = document.createElement('video');
                videoElement.src = `videos/${video}`;
                videoElement.controls = true;
                replaysDiv.appendChild(videoElement);
            });
        });
});
