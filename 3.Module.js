//commo js , every fiile is module
// modules - encapsulated code (only share minimum)


const names = require('./4.names')
const say = require('./5.utils')

const data = require('./6.alternative')

require('./7.mind-gre')

console.log(data)
console.log(names);
say(names.john)
say(names.peter) 


