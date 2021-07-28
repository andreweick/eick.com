---
title: Media Test
private: true
---

So we have a shortocde which for now only passes a mux video id and a private toggle.

If private is set then the js (assets/js/mux.js) will fetch the sign-video-url functions and use the returned `data.src` and `data.srcThumbnail`,
if not, we'll just return:

```js
{
  src: id,
  srcThumbnail: "https://image.mux.com/" + id + "/thumbnail.png?time=16",
}
```

### Questions:
1. We're hardcoding the title, I assume this will come from a shortcode attribute as well?
2. I'm not sure I understand where the `thumbnail-time-offset` would be in play?
3. I'm using `/.netlify/functions/sign-video-url.js` but we also have a `assetid2infos.js`, any preference?
3. The shortcode set an expire time, should we pass it as a parameter to the serverlerss function as well? Then again I'm not sure why we need this per shortcode... Coudn't it be a global setting we set?
4. I have error handling on the client, but we need one on the serverless function as well. (for now it returns the same structured data only with ULR pointing to errors). I couldn't find [here](https://docs.mux.com/guides/video/secure-video-playback#3-generate-a-json-web-token) how we're supposed to handle and erroneous video ID for example...

### Examples:
#### Private Video (elecMd56a702qV7pWUCPO2Pejf01RvuKKF9EBrts7jdrk) with an expire time of 4h
{{< mux id="elecMd56a702qV7pWUCPO2Pejf01RvuKKF9EBrts7jdrk" title="Libby Plays Piano" expire-time="4h" >}}

