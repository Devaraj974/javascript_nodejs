

// gobal scope
// const a=19
// let b=10
// let c= 14



// // block scope
// if (true){
// const a=10
// let b=10
// let c= 14
// console.log("block", a)
// }

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const name="dev"

    function two(){
        const id=998
        console.log(name)

    }
    //console.log(id)
    two()
}

one()