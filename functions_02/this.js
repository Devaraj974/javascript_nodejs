// const us={
//     name:"dev",
//     age:89,
//     wel:function(){
//         console.log(`${this.name}, welcome to my book book `)
//     }

// }

// // console.log(us.wel())


// us.wel()
// console.log(us)
// us.name="devaraj"
// us.wel()
// // this refers to empty
// console.log(this)

// console.log(us)



// function one(){
//     const n="dev"
//     console.log(this.name)

// }
// one()


// how to declare function through arrow
// const na=()=> {
//     const n="dev"
//     console.log(this)

// }
// one()

//pure  arrow function
//this is explicit return

 const add= (a,b) =>{
    return a+b

}

console.log(add(8,9))

// this is implicit return
const add1= (a,b) => (a+b)
// to return object 
const add3=(a,d)=>({name:"dev"})


console.log(add1(8,9))
