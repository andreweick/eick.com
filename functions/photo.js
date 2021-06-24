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
    }
  })
  const photo_data = await fetch(`https://m2gfewcae1.execute-api.us-east-1.amazonaws.com/Prod/photoapi?name=${name}`).then(response => {
    if(response.ok) {
      return response.json()
    }
  })
 
  let body = await placeholder.replaceAll('builder_eick_title', name)
                              .replaceAll('builder_eick_img_src', name)
                              .replaceAll('builder_eick_artist', photo_data.Artist)
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body,
  };
}

exports.handler = builder(handler)