if(true){
    const name="dev"
    if(name==="dev"){
        const web ="k"
        console.log(name+web)
    }

}

//++++++intersecting++++++++


// function one method
 // here we can call function before function is declared
console.log(add(8))

function add(num){
    return num+1
}

//  console.log(add(8))

// second method to declare the function
// so when we call before the declaration the fuction  it will rise the error
//console.log(add1(9))
const add1=function(num){
    return num + 1
}
// here we can  not call function before function is declared

console.log(add1(9))