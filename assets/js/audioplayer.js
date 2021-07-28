var Amplitude = require("amplitudejs")

const player = document.querySelector('[data-audioplayer]')
//const player = document.querySelector('data-audioplayer')
if (player) {

  const songs = player.getAttribute('data-songs')
  Amplitude.init({
    songs: JSON.parse(songs),
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

