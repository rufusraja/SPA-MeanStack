var express = require('express');
var router = express.Router();

router.get('/tasks', function(req, res, next) {
	res.send ('Welcome Rufus....'); //res.render ('index.html');
});

module.exports = router;