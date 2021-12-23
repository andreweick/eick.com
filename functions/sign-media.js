exports.handler = async function(event, context) {
  const fetch = require("node-fetch");
  //const mediaID = 'elecMd56a702qV7pWUCPO2Pejf01RvuKKF9EBrts7jdrk'; // This should be passed in as mediaID
  const mediaID = event.queryStringParameters.id
  const data = await fetch(`http://edc-router.missionfocus.workers.dev/signUrl/${mediaID}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw new Error(`We really could not retrieve data cloudflare private video (${mediaID})`);
    }

  }).then(data => {
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  })
  return data
}