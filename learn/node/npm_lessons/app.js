const { flatMap, flattenDeep } = require('lodash')
const _=require('lodash')

const items=[1,[1,[2,[5,]]]]
const newItems=flattenDeep(items)
console.log(newItems);