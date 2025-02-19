function calCar(...num1){  
    return num1
}
// console.log(calCar(200,400,599))

// function calCar(val1,...num1){  
//     return num1
// }
// console.log(calCar(200,400,599))
const u={
    name:"dev",
    age:19
}

function handobj(obj){
    console.log(`user name is ${obj.name}, price is${obj.age}`)

}

//in this way you can call function of obj
handobj(u)
// this is second method to call funtion
handobj({
    name:"dev",
    age:90
})

//array with function

const narray=[12,3,54,78]

function name(a){
    return a[2]
}

console.log(name(narray))