let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: 'uaKyS6gqTxI',
    events: {
      'onReady': () => {}
    }
  });
}

document.getElementById("saveDateBtn").addEventListener("click", () => {

  // 🎵 start music
  if (player) {
    player.playVideo();
  }

  // 🌸 smooth scroll
  document.getElementById("invitation").scrollIntoView({
    behavior: "smooth"
  });

});
