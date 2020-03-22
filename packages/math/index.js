const { reduce, add, multiply, times, identity, pipe} = require('ramda');

// sum :: [Number] -> Number
const sum = reduce(add, 0)

// mult :: [Number] -> Number
const mult = reduce(multiply, 0)

// pow3 :: Number -> Number
const pow3 = pipe(
    times(identity),
    educe(multiply, 1)
)

module.exports = {
    sum,
    mult
}