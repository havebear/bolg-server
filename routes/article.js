const express = require('express');
const router = express.Router();
const articleDB = require('../module/article');
const base = require('../ctrl/base');
let returnTxt = require('../config/return');

let data_0    = returnTxt.data_0;
let data_4100 = returnTxt.data_4100;
let data_4200 = returnTxt.data_4200;
let data_4500 = returnTxt.data_4500;

router.use('/', function(req, res, next) {
  console.log(req.method);
  if(req.method == 'POST'){
    if(req.headers.token){
      next();
    } else {
      res.json(data_4100);
      return;
    }
  }
  next();
});

router.get('/list/:index/:number', (req, res) => {
  let index  = req.params.index,    //页
      number = req.params.number;   //数量

  articleDB.findAll({
    index:  index,
    number: number
  }).then((data) => {
    data_0.data = data;
    res.json(data_0);
  }).catch((err) => {
    res.json(data_4200);
  });
});

router.post('/add', (req, res) => {
  let array = base.objToArray(req.body);

  articleDB.insert(array).then((data) => {
    res.send(data_0);
    console.log('成功添加');
  }).catch((err) => {
    res.send(data_4200);
  });
});

module.exports = router;