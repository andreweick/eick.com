---
title: "Zoom Piano Recital, June 2021"
date: 2021-06-19T17:37:38Z
draft: false
tags:
  - libby
  - piano
  - recital
---
Libby plays a for her "Zoom" piano recital.


<video id="my-player" class="video-js vjs-16-9" controls preload="auto" width="100%">
</video>

<script>
const playbackId = "elecMd56a702qV7pWUCPO2Pejf01RvuKKF9EBrts7jdrk"
const token = "token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ2IiwiZXhwIjoxNjM3MDYxODQ4LCJraWQiOiJUUWEzSzl4cjViUXB2elBxVkxIaHE2WXFlVHNZcjAyTWh1MDBWb1ViSWwyYU0iLCJzdWIiOiJlbGVjTWQ1NmE3MDJxVjdwV1VDUE8yUGVqZjAxUnZ1S0tGOUVCcnRzN2pkcmsifQ.Va19an3C643ESgJ8hw68IOy-3JEAQ3GEoUS7ZloHN9X3B428Lg6cUl3PIWTIqd6cFqN5dfmB6wkiAxSy74Fex-KHWJSsXaU2TM2JQr7QKOu_aUa3Bbeas8t_g4QSeHBTeXK9NtlQxL4GyM1V1BXwsYzZQaPCTgT2h2ZzIRd1WI2IcyfIGJsppBBipbb6dyLB8zAu7ctDGzQUM1Ir7AltMuxjR1NtYvEJ8re1F5-Q5mHJLMMJhGsLoOiRtNJq-4U_r_ADis3se5KjDnsQVDUhmqiaQIloe5ZTHgJidDDORG0RJcwHKSh8ThKEscbrZozG2IETnxidKDpSux-1iBakgQ"

// Call .netlify/functions/sign-video-url
// returns a json obeject 

const player = videojs('my-player', {
  plugins: {
    mux: {
      debug: false,
      data: {
        video_title: 'Zoom Piano Recital'
      }
    }
  }
});

player.src({
  src: playbackId + "?" + token,
  type: "video/mux",
});

</script>
