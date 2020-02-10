const express = require('express');
const actionsLog = require('./actionsLog');

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




console.log('actionsLog',actionsLog)


console.log('get item id 1 -----------------\n',actionsLog.get(1));
/*
actionsLog.add('meir1', 'http://meir1');
console.log('after add meir1 ---------------\n',actionsLog.get());
actionsLog.edit(1, 'meir2', 'http://meir2');
console.log('after edit id 1  meir 2 -------\n',actionsLog.get());
actionsLog.remove(1, 'meir', 'http:\\meir');
console.log('after remove ------------------\n',actionsLog.get());
*/