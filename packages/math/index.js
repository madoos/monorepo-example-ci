const { reduce, add } = require('ramda');

// sum :: [Number] -> Number
const sum = reduce(add, 0)

module.exports = {
    sum
}