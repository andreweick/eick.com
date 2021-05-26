const { MeiliSearch } = require('meilisearch')

// Following functions decode context data and turns it into an object:
const extractNetlifySiteFromContext = function(context) {
  data = context.clientContext.custom.netlify
  decoded = JSON.parse(Buffer.from(data, "base64").toString("utf-8"))
  return decoded
}

exports.handler = async function(event, context) {

  const client = new MeiliSearch({
    host: process.env.MEILI_HOST,
    apiKey: process.env.MEILI_PRIVATE_KEY,
  })
  const {site_url} = extractNetlifySiteFromContext(context)
  // An index is where the documents are stored.

  const index = client.index('default')

  const documents = await fetch(`${site_url}/tnd_search_index.json`).then(response => {
    if(response.ok) {
      return response.json()
    }
  })

  // If the index 'movies' does not exist, MeiliSearch creates it when you first add the documents.
  let response = await index.addDocuments(documents)
  console.log(response) // => { "updateId": 0 }
  // Better to return 
  return {
    statusCode: 200,
    body: response
  };
}