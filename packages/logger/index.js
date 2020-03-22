const { curry, tryCatch, F, ifElse, identity, partialRight } = require('ramda')
const { parse, stringify } = JSON

// isJSON :: a -> Boolean
const isJSON = tryCatch(parse, F)

// parseObject :: a -> String | a
const parseObject = ifElse(isJSON,  partialRight(parse, [null, 2]), identity)

// log :: String -> a -> ()
const log = curry((tag, data) => console.log(
    tag, 
    data
))

module.exports = {
    log
}