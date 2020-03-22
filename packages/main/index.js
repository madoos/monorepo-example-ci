const { log } = require('@mono/logger')
const { sum } = require('@mono/math')
const { pipe } = require('ramda')

// showSum :: [Number] -> ()
const showSum = pipe(
    sum,
    log('Total:')
)

module.exports = {
    showSum
}