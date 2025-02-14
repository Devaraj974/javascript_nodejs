
// object literals 

// symbol
// const sym=Symbol("key")

// const jsUser={
//     name:"raju",
//     "full name":"devarajnaravula",
//     [sym]:974,
//     Age:10,
//     loc:"pal",
//     email:"raju.gmail.com"
// }

// console.log(jsUser.name)
// console.log(jsUser["full name"])
// console.log(jsUser[sym])

// jsUser.age=10
// // Object.freeze(jsUser)

// //obj with function 
// jsUser.grant=function(){
//     console.log(`hi , ${this.name}`)

// }

// console.log(jsUser.grant())

//singleton or constructor

// // const inst=new Object()
// const inst={}
// inst.id="123"
// inst.name="dev"

// console.log(inst)


//nested object
const user={
    n:"dev",
    fulname:{
        fn:"devv",
        ln:"raju"
    }
}

// console.log(user.n)
// console.log(user.fulname.fn)
// console.log(user.fulname)

// let ob1={1:"d",2:"e",3:"v"}

// let ob2={1:"r",2:"a",3:"j"}

// //to combine two object

// let ob3={ ...ob1,...ob2}
// console.log(ob3)

let ob1 = { 1: "d", 2: "e", 3: "v" };
let ob2 = { 4: "r", 5: "a", 6: "j" };
let ob3={ ...ob1,...ob2}

// let ob3 = { ...ob1, ...ob2 };

console.log(ob3);
// Output: {1: "d", 2: "e", 3: "v", 4: "r", 5: "a", 6: "j"}

// const user_id={
//     {

//     }
// }
// user_id[1].email


const inst={}
inst.id="123"
inst.name="dev"
console.log(Object.keys(inst))
console.log(Object.values(inst))
console.log(Object.entries(inst))

console.log(inst.hasOwnProperty('name'))