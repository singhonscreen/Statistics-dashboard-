var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', (req, res, next)=>{
  res.render('login')
})

router.get('/signup',(req, res, next)=>{
  res.render('forms')
})

module.exports = router;
