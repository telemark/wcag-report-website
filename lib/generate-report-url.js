'use strict'

const config = require('../config')
const base = 'http://achecker.ca/checkacc.php'

module.exports = page => {
  return `${base}?uri=${page}&id=${config.API_KEY}`
}
