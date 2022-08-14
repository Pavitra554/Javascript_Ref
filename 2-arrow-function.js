// const square = function (x){
//     return x*x;
// }

// const square = (x) => {
//     return x*x;
// } 
// const square = (x) => x*x;

// console.log(square(5));

// const event = {
//     event:'meeting',
//     attendies:['Bot-1','Bot-2','Bot-3'],
//     print:()=>{
//         console.log(this.event); //undefind in arrow functino
//     }
// }
const event = {
    event:'meeting',
    attendies:['Bot-1','Bot-2','Bot-3'],
    print(){
        console.log(this.event); 
        this.attendies.forEach((e)=>console.log(e+'is attending the '+this.event+'.'))
    }
}
event.print();