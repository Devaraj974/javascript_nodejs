function name(){
    console.log("y");
    console.log("for");
    console.log("r");
    console.log("f");
    console.log("t");
    console.log("gh");
    console.log("h");
    console.log(" b");

}

// name()
function add(a,b){
    const res=a+b
    return res
    // return a+b

}
// add(1,2)
const result= add(2,4)
// console.log(result)

function name(n="raju"){
    if(!undefined){
        console.log("pls enter user name")
        return
    }
    return `${n} just logged in`
}

// console.log(name("devaraj"))
//when you dont pass any argument it will show undefined
console.log(name())