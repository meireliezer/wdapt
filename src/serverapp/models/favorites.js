const actionsLog = require('./actionslog');


const favoritesList = [
    {
      id: 1,
      websiteName: 'ynet',
      url: 'http://ynet.co.il',
      img: '//unsplash.it/300/201',      
    },
    {
      id: 2,
      websiteName: 'cnn',
      url: 'http://cnn.com',
      img: '//unsplash.it/301/200',      
    },
    {
      id: 3,
      websiteName: 'facebook',
      url: 'http://facebook.com',
      img: '//unsplash.it/301/201',      
    },
    {
      id: 4,
      websiteName: 'hotmail.com',
      url: 'http://hotmail.com',
      img: '//unsplash.it/300/200',      
    },
    {
      id: 5,
      websiteName: 'google',
      url: 'http://google.com',
      img: '//unsplash.it/302/200',      
    },
    {
      id: 6,
      websiteName: 'angular univeristy',
      url: 'https://angular-university.io/',
      img: '//unsplash.it/302/201',      
    }
  ];
let nextIndex = 7;

function add(websiteName, url) {
    let id = Math.trunc(Math.random()*100);
    let width = 300 + Math.trunc(Math.random()*10);
    let height = 200 +Math.trunc(Math.random()*10);
    let newItem = {
      id: nextIndex++,
      img: `//unsplash.it/${width}/${height}`,
      websiteName,
      url
    };    
    favoritesList.push(newItem);
    actionsLog.add(websiteName, url);
    return newItem;    
  }


function remove(id){
    let item;
    let index = favoritesList.findIndex( item => item.id === id);
    if(index !== -1){
      item = favoritesList[index];
      favoritesList.splice(index, 1);
      actionsLog.remove(item.websiteName, item.url);
    }
    return item;
  }


function edit(id, websiteName, url) {
    let favorite = favoritesList.find( item => item.id === id);
    if(favorite){
      favorite.websiteName = websiteName;
      favorite.url = url;      
      actionsLog.edit(id, websiteName, url);
    }
    return favorite;
  }

  function get(id){
      let retVal;
      if(id) {
        retVal = favoritesList.find( item => item.id === id);        
      } else {
          retVal = favoritesList;
      }
      return retVal;
  }


module.exports = {
    get,
    add,
    edit,
    remove
};