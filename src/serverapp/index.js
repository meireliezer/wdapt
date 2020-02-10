const express = require('express');
const actionsLog = require('./models/actionslog');
const favorites = require('./models/favorites');

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

/*****************************************
        Actions Log 
******************************************/
app.get('/api/actions-log', (req, res) => {
    res.send(actionsLog.get());
});

/*****************************************
        Favorites 
******************************************/
app.get('/api/favorites/:id', (req, res) => {
    let retValue;
    let retStatus = 200;
    let id = req.params['id'];
    console.log('id', id);
    if(id) {
        id = parseInt(id);
        retValue = favorites.get(id);
        if(!retValue) {
            retStatus = 404;
            retValue = {};
        }
    } else {
        retValue = favorites.get();
    }

    console.log('retValue', retValue);
    res.status(retStatus).send(retValue);

});

/*
console.log('actionsLog',actionsLog)
console.log('get item id 1 -----------------\n',actionsLog.get(1));
actionsLog.add('meir1', 'http://meir1');
console.log('after add meir1 ---------------\n',actionsLog.get());
actionsLog.edit(1, 'meir2', 'http://meir2');
console.log('after edit id 1  meir 2 -------\n',actionsLog.get());
actionsLog.remove(1, 'meir', 'http:\\meir');
console.log('after remove ------------------\n',actionsLog.get());
*/
/*
console.log('favorites', favorites);
//console.log('favorites get', favorites.get(7));
console.log('add: ',favorites.remove(6));
console.log('favorites', favorites.get());
console.log('actions', actionsLog.get());
*/