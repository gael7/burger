var connection = require('./connection.js');

// object relational mapper (ORM)
var orm = {
	selectAll: function (table, cb) {
		var queryString = 'SELECT * FROM '+table;
		connection.query(queryString, function (err, result) {
			cb(result);
		});
	},
	insertOne: function (table, burgerName, cb) {
		var queryString = 'INSERT INTO '+table+'(burger_name, devoured) VALUES ("'+ burgerName+', FALSE")';
		console.log(queryString);
		connection.query(queryString, function (err, result) {
			cb(result);
		});
	},
	updateOne: function (table, burgerName, cb) {
		var queryString = 'UPDATE '+table+' SET devoured=TRUE WHERE burger_name='+burgerName;
		connection.query(queryString, function (err, result) {
			cb(result);
		});
	}
};

module.exports = orm;
