//immediately invoked function expression (iife)
(function nam(){
    // named iife
    console.log("hi")
})();

// console.log(nam())

(()=>{
    // unnamed iife is arrow iife
    console.log(`hi`)
})()