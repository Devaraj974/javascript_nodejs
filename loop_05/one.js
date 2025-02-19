//  for loop
for (let i = 0; i <=10; i++) {
   
    if(i==5){
        // console.log(`${i} is  the best number`)
    }
    // console.log(i)
    
}



for(let i=1;i<10;i++){
    // console.log(`${i}`)
    for(let j=1;j<10;j++){
        //console.log(`inner loop ${j} and   outer loop ${i}  `)
        // console.log(`${i}*${j}=${i*j}`)
    }

}

let a=["dev","raj"]

for(let i=0;i<a.length;i++){
   
    console.log(a[i])
}

// break and continue

for(let i=0;i<30;i++){
    if(i==5){
        console.log(`hi five`)
        break
    }
    console.log(i)

}

for(let i=0;i<30;i++){
    if(i==5){
        console.log(`hi five`)
        continue
    }
    console.log(i)

}