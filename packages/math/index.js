const { reduce, add, multiply } = require('ramda');

// sum :: [Number] -> Number
const sum = reduce(add, 0)

// mult :: [Number] -> Number
const mult = reduce(multiply, 0)

module.exports = {
    sum,
    mult
}