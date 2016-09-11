var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Finally Tightening Up Express With HandleBars, Huh?' });
// });

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cool, Huh?', condition: true, anyArray: ['red,','orange,','yellow,','green,','blue,','indigo,','violot.'],  });
});

module.exports = router;
