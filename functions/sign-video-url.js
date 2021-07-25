const Mux = require('@mux/mux-node');

const playbackId = 'elecMd56a702qV7pWUCPO2Pejf01RvuKKF9EBrts7jdrk'; // This should be passed in as playBackID

// Public and private keys for MUX -- the private key is stored in environment variable
const keyIdPublic = process.env.MUX_ENCRYPT_PUBLIC_KEY
const keyEncryptSecretEnv = process.env.MUX_ENCRYPT_PRIVATE_KEY                    

const tokenValidFor = "2h"

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
        body: JSON.stringify({
            src: playbackId + "?token=" + token, 
            srcTimelineHover: "https://image.mux.com/" + playbackId + "/storyboard.vtt?token=" + tokenStoryboard,  
            srcStoryboard: "https://image.mux.com/" + playbackId + "/storyboard.jpg?token=" + tokenStoryboard,
            token: token, 
            tokenStoryboard: tokenStoryboard, 
            srcThumbnail: "https://image.mux.com/" + playbackId + "/thumbnail.jpg?token=" + tokenThumbnail,
            tokenTumbnail: tokenThumbnail
        })
    };
}