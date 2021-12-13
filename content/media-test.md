---
title: Media Test
private: true
---
Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

## Cloudflare Image

{{< figure_cloudflare src="000b6b49-c71e-412c-5222-a20e37883b00" title="Lady" >}}

![Vintage picture Montreal](/close_up_montreal_police_on_parade2.jpg "Figure 1: Montreal")

Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. Cras mattis consectetur purus sit amet fermentum.



## Private Video
<video 
  id="my-playerPrivate" 
  class="video-js vjs-16-9" 
  controls 
  preload="auto" 
  poster="https://image.mux.com/elecMd56a702qV7pWUCPO2Pejf01RvuKKF9EBrts7jdrk/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRRYTNLOXhyNWJRcHZ6UHFWTEhocTZZcWVUc1lyMDJNaHUwMFZvVWJJbDJhTSJ9.eyJleHAiOjE2MjcyNTg4NjUsImF1ZCI6InQiLCJzdWIiOiJlbGVjTWQ1NmE3MDJxVjdwV1VDUE8yUGVqZjAxUnZ1S0tGOUVCcnRzN2pkcmsifQ.BUcZWoVhc2uZvTomOmKvYRRR2NyiKjm7_hh45oo_pO7U71jazz9E7D1GfTg0iY-XDONrr6SSh262WYypRLhKJB288poW3YlO21OQ2jO0NXnclAUvW0E3g45mSNf7GQLS9BNN-VZkPY-Aqa7ihU7C_I202qJiQnNCfNrHzP93_ck7Fbhzz-GznyGjOM7BAv04Gxh7segNfjWZRR5AWTYVnoZvJcAA1MPlvj--qhMEeQm_GQ3VzdjiL4U6D0hjvBfm-t5MFtm44QFk32RnPRz8D0Ri4Pzyaw-Kt9Z0iImmYHcQR-nDwbiz9n9XDTmqKqeo6jpBavgtDuVeP0ssW_qYew"
  width="100%">
</video>

<script>
const assetIdPrivate = 'iZoHfp1h7n021vFJtkMPODcLf2NK025C01JfTn4Q8pww0000' 
const playbackIdPrivate = "elecMd56a702qV7pWUCPO2Pejf01RvuKKF9EBrts7jdrk"

// Proposed shortcode

// <mux elecMd56a702qV7pWUCPO2Pejf01RvuKKF9EBrts7jdrk thumbnail-time-offset="10" expire-time="2h" aspect-ratio="16:9">

// Return from ~/.netlify/functions/sign-video-url
// {
//   "src": "elecMd56a702qV7pWUCPO2Pejf01RvuKKF9EBrts7jdrk?token=eyJhbGciOi...",
//   "srcTimelineHover": "https://image.mux.com/elecMd56a702qV7pWUCPO2Pejf01RvuKKF9EBrts7jdrk/storyboard.vtt?token=eyJhbG....",
//   "srcStoryboard": "https://image.mux.com/elecMd56a702qV7pWUCPO2Pejf01RvuKKF9EBrts7jdrk/storyboard.jpg?token=eyJ...",
//   "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCI...",
//   "tokenStoryboard": "eyJhbGciOiJSUzI1NiIsInR5cCI...",
//   "srcThumbnail": "https://image.mux.com/elecMd56a702qV7pWUCPO2Pejf01RvuKKF9EBrts7jdrk/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsI...",
//   "tokenTumbnail": "eyJhbGciOiJSUzI1Ni..."
// }


// Call .netlify/functions/sign-video-url
// returns a json obeject 

const playerPrivate = videojs('my-playerPrivate', {
  plugins: {
    mux: {
      debug: false,

      data: {
        video_title: 'Zoom Piano Recital'
      }
    }
  }
});

playerPrivate.src({
  src: "elecMd56a702qV7pWUCPO2Pejf01RvuKKF9EBrts7jdrk?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRRYTNLOXhyNWJRcHZ6UHFWTEhocTZZcWVUc1lyMDJNaHUwMFZvVWJJbDJhTSJ9.eyJleHAiOjE2MjcyNjAwNTgsImF1ZCI6InYiLCJzdWIiOiJlbGVjTWQ1NmE3MDJxVjdwV1VDUE8yUGVqZjAxUnZ1S0tGOUVCcnRzN2pkcmsifQ.LmeVi5GDpYjFnOtmjjQTGaHWnEgmJ450rG_vensE2ayAIw3d5FG1L3vHkQ9s6TUgBah-DmH_1zFZPWe1hqLU9f7-7VYf4imsW5dRMPf2x3iRUqRJkHqw05w2VCC_EEH7jCp0pHKegQ7DvskDZzfi_ZTF_YWgkSTh8VLI8eshh--gG8JhYC9CDzv46TVPAXEFB1_FjYXe8ydGvsCnq86LlHLHYCi4uFp0P1cOmiY7gtflLEfqShla6cVlibJH_wsGbxLIJDdBZAyIGADZ_u3Tt0hPkGjh_ry_1732MwPnHo_LU0HMyJzy9axYWwWYN40xh3RcUPYruw-aIONR44uY3A",
  type: "video/mux",
});

playerPrivate.timelineHoverPreviews({
  enabled: true,
  src: "https://image.mux.com/elecMd56a702qV7pWUCPO2Pejf01RvuKKF9EBrts7jdrk/storyboard.vtt?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRRYTNLOXhyNWJRcHZ6UHFWTEhocTZZcWVUc1lyMDJNaHUwMFZvVWJJbDJhTSJ9.eyJleHAiOjE2MjcyNTg4NjUsImF1ZCI6InMiLCJzdWIiOiJlbGVjTWQ1NmE3MDJxVjdwV1VDUE8yUGVqZjAxUnZ1S0tGOUVCcnRzN2pkcmsifQ.QoC7-CjOAAvTV3ilfdz7s11nvA-XZItLQUL_UIICb4S-Ewz3GIynCnlzObty-V0ZUbvYiBXF194l7a056oTJoxg_sgzn87xlHUH0QimxS7ov2cXFGPJgi35QlSFfs12brPh0-PMqR4FXld4X4PVsn2ntQsEnPYlUhMIP7sTIAZXh3gT6efnU1LJKbh-KfVpeezpKfiZRmsmigcoYyA1HOQcKXgoxhZrgLKUwiO6pzUFI1yaTImnhPqy6SKvslMzDd0ey6POoLjeQzDF2mcib_qrbGD1jRUYG1yxXYjPFO-JSRc5haj0K5B5c5oUvkGBdzqoXO3V-IUJG7hqpqapLPA"
});

</script>
[Storyboard for video](https://image.mux.com/elecMd56a702qV7pWUCPO2Pejf01RvuKKF9EBrts7jdrk/storyboard.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRRYTNLOXhyNWJRcHZ6UHFWTEhocTZZcWVUc1lyMDJNaHUwMFZvVWJJbDJhTSJ9.eyJleHAiOjE2MjcyNTg4NjUsImF1ZCI6InMiLCJzdWIiOiJlbGVjTWQ1NmE3MDJxVjdwV1VDUE8yUGVqZjAxUnZ1S0tGOUVCcnRzN2pkcmsifQ.QoC7-CjOAAvTV3ilfdz7s11nvA-XZItLQUL_UIICb4S-Ewz3GIynCnlzObty-V0ZUbvYiBXF194l7a056oTJoxg_sgzn87xlHUH0QimxS7ov2cXFGPJgi35QlSFfs12brPh0-PMqR4FXld4X4PVsn2ntQsEnPYlUhMIP7sTIAZXh3gT6efnU1LJKbh-KfVpeezpKfiZRmsmigcoYyA1HOQcKXgoxhZrgLKUwiO6pzUFI1yaTImnhPqy6SKvslMzDd0ey6POoLjeQzDF2mcib_qrbGD1jRUYG1yxXYjPFO-JSRc5haj0K5B5c5oUvkGBdzqoXO3V-IUJG7hqpqapLPA "Figure 1: Storyboard")

## MUX normmal public

Libby and Nargol play Bach for the 2019 Levine School of Music Themed recital.

<video id="my-player" class="video-js vjs-16-9" controls preload="auto" width="100%">
</video>

<script>
const assetId = '2HlZKwXuxShYALFeHzrErOs01NzFnO62qgf2vS47Fhck'

const playbackIdPublic = 'DZUbscooFImH800Zod01zZx8VI4Sf5Wx900CIk1VvqQedo'
const playerPublic = videojs('my-player', {
  timelineHoverPreviews: true,
  poster: "https://image.mux.com/" + playbackIdPublic + "/thumbnail.png?time=16",
  plugins: {
    mux: {
      debug: false,
      data: {
        video_title: 'Libby and Nargol play Bach'
      }
    }
  }
});

playerPublic.src({
  src: playbackIdPublic,
  type: "video/mux",
});
</script>

## Portrait Video
<video id="my-portrait" class="video-js vjs-16-9" controls preload="auto" width="100%">
</video>

<script>
const assetIDPortrait = '6wj00HiBo84g9XCTA4JxXH5GCOSeS8TjkKzN8nv8MBPU'
const playbackIdPortrait = '6lJMuVdh78lye01FhsDoeA6vQBMkHim00B1CMmaveJSP4'

const playerPortrait = videojs('my-portrait', {
  poster: "https://image.mux.com/" + playbackIdPortrait + "/thumbnail.png?time=6",
  timelineHoverPreviews: true,
  plugins: {
    mux: {
      debug: false,
      data: {
        video_title: 'Libby Slide'
      }
    }
  }
});

playerPortrait.src({
  src: playbackIdPortrait,
  type: "video/mux",
});
</script>


## Audio
<audio controls>
	<source src='https://cdn.eick.com/audio/2019/2019-12-14-beethoven-sonata-c-minor.mp3' type="audio/mpeg" >
</audio>

{{< audio title="Libby Joplin" file="/uploads/go-went-gone-audio-sample.mp3" >}}

### Multiple audio files
{{< audio title="Libby Piano Run 1" file="https://cdn.eick.com/audio/2021-07-10-run-1.mp3" >}}

{{< audio title="Libby Piano Drill" file="https://cdn.eick.com/audio/2021-07-10-drill-1.mp3" >}}

{{< audio title="Libby Piano Run 2" file="https://cdn.eick.com/audio/2021-07-10-run-2.mp3" >}}

