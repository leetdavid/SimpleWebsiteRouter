var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'David\'s website' });
});

router.get('/pt', (req, res, next) => {
  res.render('wrapper', {title: 'ProfitTrailer', iframe_link: 'http://leetdavid.xyz:8081'});
});

router.get('/tracker', (req, res, next) => {
  res.render('wrapper', {title: 'PtTracker', iframe_link: 'http://leetdavid.xyz:8082'});
})

//Testing
router.get('/ptt', (req, res, next) => {
  res.redirect('http://leetdavid.xyz:8081');
});

module.exports = router;
