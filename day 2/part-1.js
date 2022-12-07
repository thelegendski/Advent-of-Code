//print.js must be imported.

//more straightforward an' less complex

const data = {
    win: 6,
    draw: 3,
    lose: 0,
    X: 1,
    Y: 2,
    Z: 3,
    A: 'Y',
    B: 'Z',
    C: 'X',
    AX: 1,
    BY: 1,
    CZ: 1,
}

const wins = {
    A: 'Y',
    B: 'Z',
    C: 'X'
}


const determine = (a, b) => data[a + b] ? 'draw' : b === wins[a] ? 'win' : 'lose'

const str = string.split('\n')
let score = 0

str.forEach(el => {
    score += data[determine(el[0], el[2])] + data[el[2]]
})

println(score)
