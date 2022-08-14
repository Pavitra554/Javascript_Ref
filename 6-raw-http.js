const https = require('https');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Bhubaneshwar&units=metric&appid=ENTER_YOUR_OWN';

const request = https.request(url, (res)=>{
    let data = '';
    res.on('data', (chunk)=>{
        data += chunk.toString();
    });

    res.on('end',()=>{
        console.log(JSON.parse(data));
    });
});

request.on('error',(e)=>{
    console.log(e)
});
request.end();

