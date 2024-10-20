document.addEventListener("DOMContentLoaded", function() {
    fetch('videos.json')
        .then(response => response.json())
        .then(data => {
            const players = Object.keys(data);
            players.forEach(player => {
                const playerSection = document.createElement('section');
                playerSection.classList.add('player-section');
                
                const playerTitle = document.createElement('h2');
                playerTitle.textContent = `Powtórki gracza: ${player}`;
                playerSection.appendChild(playerTitle);
                
                const videoGrid = document.createElement('div');
                videoGrid.classList.add('video-grid');
                playerSection.appendChild(videoGrid);
                
                data[player].forEach(video => {
                    const videoElement = document.createElement('video');
                    videoElement.src = `videos/${player}/${video}`;
                    videoElement.controls = true;
                    videoGrid.appendChild(videoElement);
                });

                document.body.appendChild(playerSection);
            });
        });
});
