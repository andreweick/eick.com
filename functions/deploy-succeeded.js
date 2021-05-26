const { MeiliSearch } = require('meilisearch')
// Or if you are in a ES environment
import { MeiliSearch } from 'meilisearch'

;(async () => {
  const client = new MeiliSearch({
    host: 'https://search-test.eick.ws',
    apiKey: 'ZjhiMDJmOWE5NDY5YWFmZGU1YjcxZGUy',
  })

  // An index is where the documents are stored.
  const index = client.index('movies')

  const documents = await fetch('/tnd_search_index.json').then(repsonse => {
    return response
  })

  // If the index 'movies' does not exist, MeiliSearch creates it when you first add the documents.
  let response = await index.addDocuments(documents)

  console.log(response) // => { "updateId": 0 }
})()