const { builder } = require("@netlify/functions")

const extractNetlifySiteFromContext = function(context) {
  let site = {site_url: "http://localhost:8888"}
  if(typeof context.clientContext.custom !== "undefined") {
    site = JSON.parse(Buffer.from(context.clientContext.custom.netlify, "base64").toString("utf-8"))
  }
  return site
}

const fetch = require("node-fetch");

async function handler(event, context) {
  const {site_url} = extractNetlifySiteFromContext(context)

  const name = event.queryStringParameters.name
  
  const placeholder = await fetch(`${site_url}/placeholder/index.html`).then(response => {
    if(response.ok) {
      return response.text()
    } else {
      throw new Error(`Nothing found at ${site_url}/placeholder/index.html`);
    }
  })
  const photo_data = await fetch(`https://m2gfewcae1.execute-api.us-east-1.amazonaws.com/Prod/photoapi?name=${name}`).then(response => {
    if(response.ok) {
      return response.json()
    }
  })
  let content = await placeholder.replace(/builder_eick_title/g, name)
                              .replace(/builder_eick_img_src/g, name)
                              .replace(/builder_eick_debug/g, event.queryStringParameters.name)
                              .replace(/builder_eick_artist/g, photo_data.Artist)
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: content,
  };
}

// There is currently no easy way to determine if we want a cached route (using builder()) or not. 
// As builder is not supported locally, we need to comment/uncomment for now.

//For deploy:
//exports.handler = builder(handler)

// For local
exports.handler = handler