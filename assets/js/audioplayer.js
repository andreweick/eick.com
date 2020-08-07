var Amplitude = require("amplitudejs")

const player = document.getElementById('audioplayer')
if (player) {
  console.log(player)
  const songs = player.getAttribute('data-songs')
  Amplitude.init({
    songs: JSON.parse(songs),
    debug: true
  })
  
  var progress = document.getElementById("song-played-progress")

  if (progress) {
    progress.addEventListener("click", function(e) {
      if (Amplitude.getActiveIndex() == 0) {
        var offset = this.getBoundingClientRect()
        var x = e.pageX - offset.left

        Amplitude.setSongPlayedPercentage(
          parseFloat(x) / parseFloat(this.offsetWidth) * 100
        )
      }
    })
  }
}

