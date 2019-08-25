var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var dbURL = 'mongodb://localhost:27017';

/* GET home page. */
router.get('/', function (req, res, next) {
	MongoClient.connect(dbURL, function (err, db) {

		assert.equal(err, null);
		const person = db.db('person');
		const student = person.collection('student');

		student.insertOne({

			"name": "insert in nodejs"

		}, function (error, result) {
			var re = JSON.parse(result);
			if (re.n === 1) {
				res.send("插入成功。");
			} else {
				res.send("插入失败,error：" + error);
			}
			res.end();
			db.close();
		})
	})
});

module.exports = router;
