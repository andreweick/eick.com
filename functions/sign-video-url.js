const Mux = require('@mux/mux-node');

exports.handler = async function(event, context) {

    //const playbackId = 'elecMd56a702qV7pWUCPO2Pejf01RvuKKF9EBrts7jdrk'; // This should be passed in as playBackID
    const playbackID = event.queryStringParameters.id
    // Public and private keys for MUX -- the private key is stored in environment variable
    const keyIdPublic = process.env.MUX_ENCRYPT_PUBLIC_KEY
    const keyEncryptSecretEnv = process.env.MUX_ENCRYPT_PRIVATE_KEY                    

    let tokenValidFor = "2h"
    if(event.queryStringParameters.expire_time){
        tokenValidFor = event.queryStringParameters.expire_time
    }
    let baseOptions = {
        keyId: keyIdPublic,     // Enter your signing key id here
        keySecret: keyEncryptSecretEnv, // Enter your base64 encoded private key here
    };

    const token = Mux.JWT.sign(playbackID, { 
        ...baseOptions, 
        type: 'video', // Valid types are video, thumbnail, gif, or storyboard
        expiration: tokenValidFor, 
    });

    const tokenStoryboard = Mux.JWT.sign(playbackID, { 
        ...baseOptions, 
        type: 'storyboard', // Valid types are video, thumbnail, gif, or storyboard
        expiration: tokenValidFor, 
    });

    const tokenThumbnail = Mux.JWT.sign(playbackID, { 
        ...baseOptions, 
        type: 'thumbnail', // Valid types are video, thumbnail, gif, or storyboard
        expiration: tokenValidFor, 
    });

    return {
        statusCode: 200,
        body: JSON.stringify({
            src: playbackID + "?token=" + token, 
            srcThumbnail: "https://image.mux.com/" + playbackID + "/thumbnail.jpg?token=" + tokenThumbnail,
            // For debugging purposes
            tokenValidFor,
            // More data
            srcHls: "https://stream.mux.com/" + playbackID + ".m3u8?token=" + token,
            srcTimelineHover: "https://image.mux.com/" + playbackID + "/storyboard.vtt?token=" + tokenStoryboard,  
            srcStoryboard: "https://image.mux.com/" + playbackID + "/storyboard.jpg?token=" + tokenStoryboard,
            token: token,
            tokenStoryboard: tokenStoryboard, 
            tokenTumbnail: tokenThumbnail
        })
    };
}