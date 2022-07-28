let arrayOriginal1 = ["casa", "sapato", "relógio"]
console.log("Original 1:", arrayOriginal1)
let copiaArray1 = arrayOriginal1.slice()

copiaArray1.push(7)
console.log("Cópia:", copiaArray1)

let arrayOriginal2 = [2,18,25,33]
console.log("Original 2:", arrayOriginal2)
let copiaArray2 = arrayOriginal2.slice()
copiaArray2.pop()
console.log("Cópia2:", copiaArray2)

let arrayOriginal3 = [1, 8, 9, 5, 7]
console.log("Original 3:",  arrayOriginal3)
let copiaArray3 = arrayOriginal3.slice()
copiaArray3.splice(1,1)
console.log("Cópia 3:",  copiaArray3)