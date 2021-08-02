async function getMuxData(id, expire_time, private = true) {
  if(private) {
    const response = await fetch(`/.netlify/functions/sign-video-url?id=${id}&expire_time=${expire_time}`)
    if(response.ok) {
      return response.json()
    } else {
      throw new Error(`We really could not retrieve data for Mux private video (${id})`);
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
    const [playerID, playerMuxID, expireTime, video_title] = [
      player.getAttribute('id'),
      player.getAttribute('data-video-id'),
      player.getAttribute('data-expire-time') || '2h',
      player.getAttribute('data-title')
    ]
    if(playerMuxID){
      getMuxData(playerMuxID, expireTime)
      .then(data => {
        muxPlayers[playerMuxID] = videojs(playerID, {
          plugins: {
            mux: {
              debug: false,
              data: {
                video_title
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
        player.setAttribute('poster', data.srcThumbnail)
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
