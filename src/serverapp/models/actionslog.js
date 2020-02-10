
const ACTION_ADD = 0;
const ACTION_EDIT = 1;
const ACTION_DELETE = 2;
const actionsList= [
    {
      id: 0,
      date: Date.now(),
      websiteName: 'ynet',
      url:'http://ynet.co.il',
      type: ACTION_ADD
    },
    {
      id: 1,
      date: Date.now(),
      websiteName: 'cnn',
      url:'http://cnn.com',
      type: ACTION_ADD
    },
    {
      id: 2,
      date: Date.now(),
      websiteName: 'facbook',
      url:'http://facebook',
      type: ACTION_EDIT
    },
    {
      id: 3,
      date: Date.now(),
      websiteName: 'hotmail',
      url:'http://hotmail.com',
      type: ACTION_DELETE
    }
  ];


   function add(websiteName, url) {
     addAction(ACTION_ADD, websiteName, url);
   };


   function edit(id, websiteName, url) {
    addAction(ACTION_EDIT, websiteName, url);
  };

  function remove(websiteName, url) {
    addAction(ACTION_DELETE, websiteName, url);   
  }

  function get(id) {
      let retVal;
      if(!id){
        retVal =  actionsList;
      } else {
        retVal =  actionsList.find( item => item.id === id);        
      }
      return retVal;
  }


  function addAction(actionType, websiteName, url){
    let action  = {
      id: actionsList.length,
      websiteName, 
      url,
      date: Date.now(),
      type: actionType
    }
    actionsList.push(action);    
  }


  module.exports = {
      add,
      edit,
      remove,
      get
  } ;

  /*
  exports.add = add;
  exports.edit = edit 
  ...
  
  */