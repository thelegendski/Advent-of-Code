const arr = " abcdefghijklmnopqrstuvwxyz"
let sum = 0
const calc = char => char === char.toUpperCase() ? arr.indexOf(char.toLowerCase()) + 26 : arr.indexOf(char)
const ztring = string.split('\n')
for(let i = 0; i < ztring.length; i += 3){
    const str = [ztring[i], ztring[i + 1].split(''), ztring[i + 2].split('')]
    for(const char of str[0].split('')){
        if(str[1].includes(char) && str[2].includes(char)){
            sum += calc(char)
            break
        }
    }
}
println(sum)
