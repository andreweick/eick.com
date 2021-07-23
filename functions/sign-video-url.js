const { JWT } = require('@mux/mux-node');

const playbackId = 'elecMd56a702qV7pWUCPO2Pejf01RvuKKF9EBrts7jdrk'; // Enter your signed playback id here

const keySecretEnv = process.env.MUX_PRIVATE_KEY

let baseOptions = {
  keyId: 'TQa3K9xr5bQpvzPqVLHhq6YqeTsYr02Mhu00VoUbIl2aM',     // Enter your signing key id here
  keySecret: keySecretEnv, // Enter your base64 encoded private key here
};

const token = JWT.sign(playbackId, { 
    ...baseOptions, 
    type: 'video', // Valid types are video, thumbnail, gif, or storyboard
    expiration: '2h', 
});

const tokenStoryboard = JWT.sign(playbackId, { 
    ...baseOptions, 
    type: 'storyboard', // Valid types are video, thumbnail, gif, or storyboard
    expiration: '2h', 
});

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({token: token, tokenStoryboard: tokenStoryboard})
    };
}