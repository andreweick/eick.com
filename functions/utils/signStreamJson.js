function signStreamJson(params) {
    var tokenJson = {};
    tokenJson['uid'] = params

    let headers = new Headers({
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
		'Access-Control-Allow-Headers': '*'
	});

    var resp = await fetch('https://api.cloudflare.com/client/v4/accounts/' + CLOUDFLARE_ACCOUNT_ID + '/stream/' + params + '/token', {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + IMAGES_STREAM_READWRITE
        }
    });

    var data = await resp.json();


    console.log ('token success? ' + data.success)

    tokenJson['success'] = data.success

    if (data.success == true) {
        tokenJson['token'] = data.result.token
        tokenJson['signedUrl'] = 'https://iframe.videodelivery.net/' + data.result.token
    }
    else {
        tokenJson['Errors'] = data.Errors
        tokenJson['Error Message'] = "Maybe authentication?  Check IMAGES_STREAM_READWRITE is expired"
    }

    return new Response(JSON.stringify(tokenJson), {
        status: 200,
        headers: headers
    });
}
