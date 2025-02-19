const myArr=[1,2,3,4,5,7]
console.log(myArr[0])
const hero=['r','r']
const array =new Array(1,2,3,4,56)
array.push(9)
array.pop()
array.unshift(1)
array.shift()
console.log(array)
// slice and splice

const ar=array.slice(0,4)
const a=array.splice(0,4)
console.log(a)
console.log(ar)
console.log(array)

const h=['hi','bye']
const d=['a','d']

h.push(d)
h.concat(d)
console.log(h)

spread

const n=[...h,...d]
console.log(n)

// very useful

console.log(Array.isArray("dev"))
console.log(Array.from("dev"))