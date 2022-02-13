let arr = process.argv
const initialVal = 0
arr = arr.slice(2)
arr = arr.map(number => Number(number))
arr = arr.reduce((currentVal,previousVal) =>{
   return previousVal + currentVal + initialVal
})
console.log(arr)
    