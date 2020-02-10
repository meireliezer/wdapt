const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const dirName = `${__dirname}\\..\\..\\dist\\wdapt\\`
console.log('__dirname:'+ dirName);
app.use(express.static(dirName));


app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.get('/about',  (request, response) => {
    response.send('About Us');
});

app.get('/test',  (request, response) => {
    console.log('request', request);
    
    const meir = {
        firstName: 'Meir',
        lastName: 'Eliezer',
        age:46
    }

    response.status(201).send(meir);
});

