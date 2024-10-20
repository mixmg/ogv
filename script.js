document.addEventListener("DOMContentLoaded", function() {
    fetch('videos.json')
        .then(response => response.json())
        .then(data => {
            const replaysDiv = document.getElementById('replays');

            const players = {};

            data.videos.forEach(video => {
                if (!players[video.player]) {
                    players[video.player] = [];
                }
                players[video.player].push(video.file);
            });

            for (const player in players) {
                const playerSection = document.createElement('div');
                playerSection.classList.add('player-section');
                playerSection.innerHTML = `<h3>${player}</h3>`;

                players[player].forEach(file => {
                    const videoElement = document.createElement('video');
                    videoElement.src = `videos/${file}`;
                    videoElement.controls = true;
                    playerSection.appendChild(videoElement);
                });

                replaysDiv.appendChild(playerSection);
            }
        });
});
