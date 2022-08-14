const fun = (a,b) =>{   //now don't do this in kotlin (fun😂)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a == 0 || b == 0){
                reject('Total 0... Bhai kya kr rha hai.. multiply with 0');
            }
            resolve(a*b);
        },2000)
    })
}

const mul = async()=>{
    try{
        const ans = await fun(10,0);
        console.log(ans);
    }catch(e){
        console.log(e);
    }
}

mul();
