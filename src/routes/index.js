const express = require('express');
const router = express.Router();

const model = require('../model/task')();

router.get('/',(req,res)=>{
  model.find({},(err,tasks)=>{
    if(err) throw err;
    res.render('index',{
      title:'CRUD',
      tasks: tasks
    });
  });
});
router.post('/add',(req,res)=>{
  let body = req.body;
console.log(body);
model.create(body,(err,task)=>{
  if(err) throw err;
  res.redirect('/');
});
});
module.exports = router;
