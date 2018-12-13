'use strict'

const parseString = require('xml2js').parseString

module.exports = (xml, callback) => {
  parseString(xml, { trim: true, explicitArray: false }, (error, result) => {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, result)
    }
  })
}
