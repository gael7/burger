var express=require('express');
var router=express.Router();
var burger=require('../models/burger.js');

router.get('/', function(req, res){
  res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
  burger.selectAll(function(data){
    var hbsObject={ burgers: data};
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burgers/insertOne', function (req, res) {
  console.log(req.body.burgerName);
	burger.insertOne([req.body.burgerName], function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/updateOne/:burgerName', function (req, res) {
  console.log(req.params.burgerName);
  burger.updateOne(req.params.burgerName, function () {
		res.redirect('/burgers');
	});
});

module.exports=router;
