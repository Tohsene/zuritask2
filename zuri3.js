const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const resultFolder = 'result';
if(!fs.existsSync(resultFolder)) {
    fs.mkdirSync(resultFolder);
    console.log(`The directory $(resultFolder) has been successfully created`);
}

const jsonData = fetch('http://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(jsonData => {
    stringedData = JSON.stringify(jsonData, null, 2);
    fs.writeFile('./result/posts.json', stringedData, (err) => {
        if (err)
            throw err;
    });
});
const fileDirectory = path.join(__dirname, 'result', 'posts.json');