---
title: Media Test
private: true
---
Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

![Vintage picture Montreal](/close_up_montreal_police_on_parade2.jpg "Figure 1: Montreal")

Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. Cras mattis consectetur purus sit amet fermentum.

## MUX 

Libby and Nargol play Bach for the 2019 Levine School of Music Themed recital.

<video id="my-player" class="video-js vjs-16-9" controls preload="auto" width="100%">
</video>

<script>
const player = videojs('my-player', {
  timelineHoverPreviews: true,
  plugins: {
    mux: {
      debug: false,
      data: {
        video_title: 'Libby and Nargol play Bach'
      }
    }
  }
});

player.src({
  src: "DZUbscooFImH800Zod01zZx8VI4Sf5Wx900CIk1VvqQedo",
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

