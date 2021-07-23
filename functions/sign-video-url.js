const { JWT } = require('@mux/mux-node');

const playbackId = 'elecMd56a702qV7pWUCPO2Pejf01RvuKKF9EBrts7jdrk'; // This should be passed in as playBackID

const keyIdPublic = "TQa3K9xr5bQpvzPqVLHhq6YqeTsYr02Mhu00VoUbIl2aM" // public side of MUX account key
const keySecretEnv = process.env.MUX_PRIVATE_KEY                    // Private side stored in Environment variables

const tokenValidFor = "2h"

let baseOptions = {
  keyId: keyIdPublic,     // Enter your signing key id here
  keySecret: keySecretEnv, // Enter your base64 encoded private key here
};

const token = JWT.sign(playbackId, { 
    ...baseOptions, 
    type: 'video', // Valid types are video, thumbnail, gif, or storyboard
    expiration: tokenValidFor, 
});

const tokenStoryboard = JWT.sign(playbackId, { 
    ...baseOptions, 
    type: 'storyboard', // Valid types are video, thumbnail, gif, or storyboard
    expiration: tokenValidFor, 
});

const tokenThumbnail = JWT.sign(playbackId, { 
    ...baseOptions, 
    type: 'thumbnail', // Valid types are video, thumbnail, gif, or storyboard
    expiration: tokenValidFor, 
});


exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({token: token, tokenStoryboard: tokenStoryboard, tokenTumbnail: tokenThumbnail})
    };
}