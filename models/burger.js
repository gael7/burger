var orm = require('../config/orm.js');

var burger={
  selectAll: function(cb){
    orm.selectAll('burgers', function(res){
    cb(res);
  });
},
  insertOne: function(burgerName, cb){
    orm.insertOne('burgers',burgerName, function(res){
    cb(res);
    });
  },
  updateOne: function(burgerName, cb){
    orm.updateOne('burgers', burgerName, function(res){
      console.log('updateOne on burger.js', burgerName);
      cb(res);
    });
  }
};

module.exports=burger;
