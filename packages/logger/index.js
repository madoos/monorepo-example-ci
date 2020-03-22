const { curry } = require('ramda')

// log :: String -> a -> ()
const log = curry((tag, data) => console.log(tag, data))

module.exports = {
    log
}