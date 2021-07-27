async function getMuxData(id, private) {
  if(private) {
    const response = await fetch(`/.netlify/functions/sign-video-url?id=${id}`)
    if(response.ok) {
      return response.json()
    } else {
      throw new Error(`We could not retrieve data for Mux private video (${id})`);
    }
  } else {
    return {
      src: id,
      srcThumbnail: "https://image.mux.com/" + id + "/thumbnail.png?time=16",
    }
  }

}
const errorClasses = ['border', 'border-red', 'bg-red-lightest', 'text-red', 'p-4']
const players = document.querySelectorAll('[data-mux-player]')
if(players) {
  const muxPlayers = {}
  players.forEach(player => {
    const playerMuxID = player.getAttribute('data-video-id')
    const private = player.getAttribute('private') && player.getAttribute('private')
    if(playerMuxID){
      getMuxData(playerMuxID, private)
      .then(data => {
        muxPlayers[playerMuxID] = videojs(player.getAttribute('id'), {
          plugins: {
            mux: {
              debug: false,
              data: {
                video_title: 'Zoom Piano Recital'
              }
            }
          }
        })
        muxPlayers[playerMuxID].src({
          src: data.src,
          type: "video/mux",
        });
        muxPlayers[playerMuxID].timelineHoverPreviews({
          enabled: true,
          src: data.srcThumbnail
        });
      })
      .catch(error => {
        let errorBox = document.createElement('div')
        errorBox.classList.add(...errorClasses)
        errorBox.innerHTML = error
        player.parentNode.replaceChild(errorBox, player);
      });
    }
  })
}
