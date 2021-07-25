const Mux = require('@mux/mux-node');

const assetId = '6wj00HiBo84g9XCTA4JxXH5GCOSeS8TjkKzN8nv8MBPU'

// assume process.env.MUX_TOKEN_ID and process.env.MUX_TOKEN_SECRET contain your credentials

// If environment variables aren't set, do
// const { Video } = new Mux(accessToken, secret);

// Given and assetId, get info
// const { vidinfo } = muxClient.Assets.get(assetId)

// Public and private keys for MUX -- the private key is stored in environment variable
const keyIdPublic = process.env.MUX_ENCRYPT_PUBLIC_KEY
const keyEncryptSecretEnv = process.env.MUX_ENCRYPT_PRIVATE_KEY                    

const muxClient = new Mux(process.env.MUX_TOKEN_ID, process.env.MUX_TOKEN_SECRET);

const { Video } = muxClient

let ap = "not-known"
async function getVideoDets() {
    let data = await Video.Assets.get(assetId)
    // console.log(data)
    ap = data.aspect_ratio
    console.log("aspect_ratio: " + data.aspect_ratio)
    console.log("playback: " + data.playback_ids[0].policy)
    console.log("playbackId: " + data.playback_ids[0].id)
    // ap = obj.aspect_ratio
}

getVideoDets()

// const { Video } = muxClient
// Video.Assets.get(assetId)
//   .then((data) =>{
//       ap = data.aspect_ratio
//   })

const tokenValidFor = "2h"

const playbackId = 'elecMd56a702qV7pWUCPO2Pejf01RvuKKF9EBrts7jdrk'; // This should be passed in as playBackID

let baseOptions = {
  keyId: keyIdPublic,     // Enter your signing key id here
  keySecret: keyEncryptSecretEnv, // Enter your base64 encoded private key here
};

const token = Mux.JWT.sign(playbackId, { 
    ...baseOptions, 
    type: 'video', // Valid types are video, thumbnail, gif, or storyboard
    expiration: tokenValidFor, 
});

const tokenStoryboard = Mux.JWT.sign(playbackId, { 
    ...baseOptions, 
    type: 'storyboard', // Valid types are video, thumbnail, gif, or storyboard
    expiration: tokenValidFor, 
});

const tokenThumbnail = Mux.JWT.sign(playbackId, { 
    ...baseOptions, 
    type: 'thumbnail', // Valid types are video, thumbnail, gif, or storyboard
    expiration: tokenValidFor, 
});


exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({aspect_ratio: ap, token: token, tokenStoryboard: tokenStoryboard, tokenTumbnail: tokenThumbnail})
    };
}