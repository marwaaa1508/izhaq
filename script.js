let player;

// 🎬 YouTube API ready
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: 'uaKyS6gqTxI',
    events: {
      'onReady': (event) => {
        // do nothing until click
      }
    }
  });
}

// 🌸 Save the Date click
document.getElementById("saveDateBtn").addEventListener("click", () => {

  // 🎵 Play music AFTER user click (required by browsers)
  if (player) {
    player.playVideo();
  }

  // 💌 Smooth scroll to invitation
  document.getElementById("invitation-section").scrollIntoView({
    behavior: "smooth"
  });

});
