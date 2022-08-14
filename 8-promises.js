const doWord = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Process done..!!');
        // reject('oops something went wrong');
    }, 2000);
})

doWord.then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error);
})



//                                            -----> Fulfilled (resolve())
//                                           /
//                                          /
//Promise ---> Pending...(when created) --->
//                                          \
//                                           \ 
//                                            -----> rejected (reject())


//Promise chaining

const add = (x,y) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(x+y);
        }, 2000);
    })
}

//This is called nasted promises
// add(1,4).then((sum)=>{
//     console.log(sum);
//     add(sum,10).then((sum)=>{
//         console.log(sum);
//     }).catch((e)=>{
//         console.log(e)
//     })
// }).catch((e)=>{
//     console.log(e);
// })

//short hand syntax (promise chaining)
add(1,4).then((sum)=>{
    console.log(sum);
    return add(sum,10);
}).then((sum2)=>{
    console.log(sum2);
}).catch((e)=>{
    console.log(e);
})