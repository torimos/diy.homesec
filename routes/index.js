var express = require('express');
var router = express.Router();
var baseUrl = 'http://' + (process.env.HOME_IP != null ? process.env.HOME_IP : '93.73.72.253');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { baseUrl });
});

module.exports = router;
