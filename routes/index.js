var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '💻' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: '💻' });
});

router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Resume' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
