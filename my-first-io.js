const fs = require("fs")
const file = process.argv[2]

let buf = fs.readFileSync(file)

buf = buf.toString().split("\n").length - 1


console.log(buf)



