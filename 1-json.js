const fs = require('fs');
const book = {
    title:'Ego is the enemy',
    author:'Rayn Holiday'
}

//Converting js object to JSON data
// const BookJSON = JSON.stringify(book);
// console.log(BookJSON);

//Converting JSON data to js object 
// const parseData = JSON.parse(BookJSON);
// console.log(parseData);
// console.log(parseData.title);
// console.log(parseData.author);

//creating json file for data
// fs.writeFileSync('1-json.json',BookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// console.log(dataBuffer);//Buffer Data
// console.log(dataBuffer.toString());//Buffer Data
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

//V-18 Challange : Make changes in json
const dataBuffer = fs.readFileSync('1-json.json');
const JSONdata = dataBuffer.toString();
const data = JSON.parse(JSONdata);
data.title = 'calculus';
data.author = 'james stewart';

const returnData = JSON.stringify(data);
fs.writeFileSync('1-json.json',returnData);



