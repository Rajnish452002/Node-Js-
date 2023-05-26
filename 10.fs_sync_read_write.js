  
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first ,second)

writeFileSync('./content/res-sync.txt' , `here is result :${first} , ${second} `,
/*{ flag : 'a' }*/
)
