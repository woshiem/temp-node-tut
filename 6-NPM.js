const _ = require("lodash")

const items = [1,[2,[3]]]

const newItems = _.flattenDeep(items)

console.log(newItems)