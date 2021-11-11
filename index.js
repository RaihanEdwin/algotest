let a = [1,2,3,4,4,4,7,7,12,12,13]
let constUniqueValueA = a.filter((item, i, ar)  => ar.indexOf(item) === i)
console.log(constUniqueValueA.length)

let b = [1,2,2,2,2,2,2,2,4,6]
let constUniqueValueB = b.filter((item, i, ar)  => ar.indexOf(item) === i)
console.log(constUniqueValueB.length)

let c = []
let constUniqueValueC = c.filter((item, i, ar)  => ar.indexOf(item) === i)
console.log(constUniqueValueC.length)

// function constUniqueValue(a) {
//     let a = [1,2,3,4,4,4,7,7,12,12,13]
//     let constUniqueValue = a.filter((item, i, ar)  => ar.indexOf(item) === i)
    
//     console.log(constUniqueValue.length)

// } 




