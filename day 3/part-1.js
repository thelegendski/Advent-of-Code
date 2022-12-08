//needs print.js          
const arr = " abcdefghijklmnopqrstuvwxyz"
let sum = 0
const calc = char => char === char.toUpperCase() ? arr.indexOf(char.toLowerCase()) + 26 : arr.indexOf(char)

string.split('\n').forEach(str => {
  const mid = ((str.length / 2) | 0)
  const two = str.slice(mid, str.length).split('')
  for(const char of str.slice(0, mid).split('')){
      if(two.includes(char)){
          sum += calc(char)
          return
      }
  }
})

println(sum)
