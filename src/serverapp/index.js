const express = require('express');
const actionsLog = require('./models/actionslog');
const favorites = require('./models/favorites');

const app = express();
const port = 3000;


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//const dirName = `${__dirname}\\..\\..\\dist\\wdapt\\`
let dirName = `${__dirname}\\www\\`
console.log('__dirname(1):'+ dirName);
app.use(express.static(dirName));
dirName = `${__dirname}\\..\\..\\dist\\wdapt\\`;
console.log('__dirname(2):'+ dirName);
app.use(express.static(dirName));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

/*****************************************
        Actions Log 
******************************************/
app.get('/api/actions-log', (req, res) => {
    res.send(actionsLog.get());
});

/*****************************************
        Favorites 
******************************************/
app.get('/api/favorites', (req, res) => {
    let retValue;
    let retStatus = 200;
    retValue = favorites.get();
    console.log('retValue', retValue);
    res.status(retStatus).send(retValue);
});

app.get('/api/favorites/:id', (req, res) => {
    let retValue;
    let retStatus = 200;
    let id = req.params['id'];
    id = parseInt(id);
    retValue = favorites.get(id);
    if(!retValue) {
        retStatus = 404;
        retValue = {};
    }
    console.log('retValue', retValue);
    res.status(retStatus).send(retValue);
});

app.delete('/api/favorites/:id', (req, res) =>{
    let id = parseInt(req.params['id']);    
    let removedItem = favorites.remove(id);
    let retStatus = (removedItem)? 200: 404;
    console.log('removedItem', removedItem);
    res.status(retStatus).end();
});

app.post('/api/favorites', (req, res) => {
    let item = req.body;
    let newItem = favorites.add(item.websiteName, item.url);
    console.log('new Item', newItem);
    res.send(newItem);
});

app.put('/api/favorites/:id', (req, res) => {
    let retStatus = 200;
    let id = parseInt(req.params['id']); 
    console.log('id', id);       
    let item = req.body;
    console.log('body', item);
    let retItem = favorites.edit(id, item.websiteName, item.url);
    if(!retItem){
        retStatus = 404;        
    }
    console.log('new Item', retItem);
    res.status(retStatus).end();
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