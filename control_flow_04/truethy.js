
// falsy values 
// false , 0,-0,BigInt 0n,"",null,undefined,NaN

// truethy values ==" what ever we write in strings will become truthy values"
//"0" "false","",[],{},function(){}



// const use ="hi am  devaraj permission for request"

// if(use){
//     console.log("hi how are you")
// }else{
//     console.log("get out from here ")
// }



 // for array
// const use =[]

// if(use.length===0){
//     console.log("array is empty")
// }else{
//     console.log("get out from here ")
// }



// for object
const use ={}

if(Object.keys(use).length===0){
    console.log("object is empty")
}else{
    console.log("get out from here ")
}




// nullish caolesing operator (??): null undefind
 let val1;
 val1=null??10



//  console.log(val1)


 // terniary operator

 // condition   ?   true  :   false

 const im=90
 im>=100?console.log("is grater than 100"):console.log("less than 100")
