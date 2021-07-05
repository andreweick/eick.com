module.exports = (data) => {

  let frontmatter = {
    ...require('./base.js')(data)
  }

return frontmatter
}