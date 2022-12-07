//print.js must be imported.

//more straightforward an' less complex

const data = {
  Z: 6,
  Y: 3,
  X: 0,
  rock: 1,
  paper: 2,
  scissors: 3,
  y: {
      A: 'rock',
      B: 'paper',
      C: 'scissors'
  },
  z: {
      A: 'paper',
      B: 'scissors',
      C: 'rock'
  },
  x: {
      A: 'scissors',
      B: 'rock',
      C: 'paper'
  }
}

const str = string.split('\n')
let score = 0
str.forEach(el => score += data[el[2]] + data[data[el[2].toLowerCase()][el[0]]])

println(score)
