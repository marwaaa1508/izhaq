let player;

function onYouTubeIframeAPIReady(){
  player = new YT.Player('player',{
    height:'0',
    width:'0',
    videoId:'uaKyS6gqTxI'
  });
}

document.getElementById("saveDateBtn").addEventListener("click", () => {

  // 🎵 play music
  if(player){
    player.playVideo();
  }

  // ⬇️ scroll to section 2
  document.getElementById("invite").scrollIntoView({
    behavior:"smooth"
  });

});
