const { builder } = require("@netlify/functions")

/**
 * Extract data from the Netlify provided context 
 * @param {*} context 
 * @returns Map
 *   String (.site_url)
 */
const extractNetlifySiteFromContext = function(context) {
  let site = {site_url: "http://localhost:8888"}
  if(typeof context.clientContext.custom !== "undefined") {
    site = JSON.parse(Buffer.from(context.clientContext.custom.netlify, "base64").toString("utf-8"))
  }
  return site
}

/**
 * Retrieves the last part of the URL after having removed any trailing slash
 * @param {*} event 
 * @returns String
 */
const getURLSlug = function(url) {
  // Trim potential trailing slash and split
  const URLSplits = url.replace(/\/$/, "").split('/');
  const slug = URLSplits[URLSplits.length - 1]
  return slug
}

const fetch = require("node-fetch");

async function handler(event, context) {
  const {site_url} = extractNetlifySiteFromContext(context)

  const name = getURLSlug(event.path)
  
  const debug = ''
  /** 1. First we grab the HTML from the Hugo generated placeholder */
  const placeholder = await fetch(`${site_url}/placeholder/index.html`).then(response => {
    if(response.ok) {
      return response.text()
    } else {
      throw new Error(`Nothing found at ${site_url}/placeholder/index.html`);
    }
  })
  /** 2. Then we fetch the data from the API */
  const photo_data = await fetch(`${process.env.S3API_URL}?name=${name}`).then(response => {
    if(response.ok) {
      return response.json()
    }
  })
  let classifications = ''
  if(typeof photo_data.Classification !== "undefined") {
    photo_data.Classification.Labels.map(entry => {
      classifications += `<div class="border mx-1 mb-2 p-1">${entry.Name}</div>`
    })
  }

  let content = await placeholder
  .replace(/builder_eick_title/g, name)
  .replace(/builder_eick_img_src/g, name)
  .replace(/builder_eick_classifications/g, classifications)
  .replace(/builder_eick_artist/g, photo_data.Artist)
  .replace(/builder_eick_debug/g, debug)

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: content,
  };
}

exports.handler = builder(handler)