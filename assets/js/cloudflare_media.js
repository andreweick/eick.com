document.querySelectorAll('[data-video-id]').forEach(video => {
  const id = video.getAttribute('data-video-id')
  const signed = video.getAttribute('data-video-signed')
  if(signed){
    getSignedMedia(id).then(data => {
      video.setAttribute('src', data.signedUrl)
    })
  }
})

async function getSignedMedia(id){
  const url = `/.netlify/functions/sign-media?id=${id}`
  const response = await fetch(url)
  if(response.ok) {
    return response.json()
  } else {
    throw new Error(`We really could not retrieve data cloudflare private video (${id})`);
  }
}