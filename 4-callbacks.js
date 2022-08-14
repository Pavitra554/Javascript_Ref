setTimeout(()=>{
    console.log('After two seconds')
},2000)

//Callbacks

const geocode = (str,callback)=>{
    setTimeout(()=>{
        const data = {
            name:'pavitra',
            age:19
        }
        callback(data);
    },2000)
}

geocode("String value",(data)=>{
    console.log(data)
})

//Callbacks Challange

const add = (x, y, callback) => {
    // const sum = x + y;
    // callback(sum);
    setTimeout(()=>{
        callback(x+y);
    },2000)
}

add(1, 4, (sum)=>{
    console.log(sum);
})