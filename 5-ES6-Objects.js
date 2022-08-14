const name = 'Pavitra';
const userAge = 19;

const user = {
    name,
    age:userAge,
    location:'BBSR'
}
console.log(user);

//Object Destructuring

const product = {
    price:10,
    stock:100,
    label:'Pendrive',
    rating:4.2,
    salePrice:undefined
}

// const lable = product.lable;
// console.log(lable);

//ES6
const {label,price,rating = 5,salePrice} = product;
console.log(label,price,rating,salePrice)


const transaction = (type, { label, stock = 0 }) => {
    console.log(type, label, stock)
}

transaction('order', product)