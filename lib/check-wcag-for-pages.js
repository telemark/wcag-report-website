'use strict'

const wcag = require('wcag-validator')
const config = require('../config')
const formatReport = require('./format-report')
const generateReportUrl = require('./generate-report-url')
const gotErrors = item => item.errors > 0

module.exports = (pagesToCheck, callback) => {
  var results = []
  var list = JSON.parse(JSON.stringify(pagesToCheck))
  const next = () => {
    if (list.length > 0) {
      const page = list.pop()
      if (page) {
        console.log(list.length + ' pages remaining.')
        wcag({ uri: page, id: config.API_KEY, output: 'rest' }, (error, data) => {
          if (error) {
            console.error(error)
          } else {
            formatReport(data, (err, result) => {
              if (err) {
                console.error(err)
              } else {
                const summary = result.resultset.summary
                results.push({
                  url: page,
                  errors: parseInt(summary.NumOfErrors, 10),
                  fullReport: generateReportUrl(page)
                })
              }
            })
          }
          next()
        })
      } else {
        next()
      }
    } else {
      console.log('Finished checking pages')
      const filtered = results.filter(gotErrors)
      callback(null, filtered)
    }
  }
  next()
}
