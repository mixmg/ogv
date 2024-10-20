document.addEventListener("DOMContentLoaded", function() {
    fetch('videos.json')
        .then(response => response.json())
        .then(data => {
            window.videoData = data.videos;
        });
});

function showReplays(player) {
    const replaysDiv = document.getElementById('replays');
    replaysDiv.innerHTML = '';

    const playerVideos = window.videoData.filter(video => video.player === player);

    playerVideos.forEach(video => {
        const videoContainer = document.createElement('div');
        videoContainer.classList.add('video-container');

        const videoElement = document.createElement('video');
        videoElement.controls = true;
        videoElement.muted = true;
        videoElement.loop = true;
        videoElement.autoplay = true;

        const sourceElement = document.createElement('source');
        sourceElement.src = `videos/${video.file}`;
        sourceElement.type = 'video/mp4';

        videoElement.appendChild(sourceElement);
        videoContainer.appendChild(videoElement);

        const dateElement = document.createElement('p');
        dateElement.textContent = `Dodano: ${video.date}`;
        videoContainer.appendChild(dateElement);

        replaysDiv.appendChild(videoContainer);
    });
}
