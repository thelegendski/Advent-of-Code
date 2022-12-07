//load print.js from ski.js, :)

const arr = string.split('\n\n')
arr.forEach((el, i) => arr[i] = Number(el.split('\n').reduce((a, b) => (+a) + (+b))))
arr.sort((b, a) => b - a)
const l = arr.length 

//part 1
println(arr[l - 1])
//part 2
println(arr[l - 1] + arr[l - 2] + arr[l - 3])
