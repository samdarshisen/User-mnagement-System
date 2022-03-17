var express = require('express');
var router = express.Router();
var User = require('./users')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/read' , function(req , res){
  User.find()
  .then(function(data){
    res.render('read' , {data})
  })
})
router.get('/update' , function(req , res){
  res.render('update')
})
//DATA MANIPULATION ROUTES
// Create User Route
router.post('/submit' , function(req , res){
User.create({
  name : req.body.name,
  mobile : req.body.mobile,
  location : req.body.location
})
.then(function(){
  res.redirect('/read')
})
.catch(function(err){
console.log(err)
})
})
//deleting record
router.get('/delete/:id' , function(req , res){
  User.findOneAndRemove({_id:req.params.id})
  .then(function(){
    res.redirect('/read')
  })
})
router.get('/update/:id' , function(req , res){
  User.findById({_id:req.params.id})
  .then(function(data){
    res.render('update' , {data})
  })
})
router.post('/update/:id' , function(req , res){
 var updated = {
   name:req.body.name,
   mobile:req.body.mobile,
   location:req.body.location
 }
 User.findByIdAndUpdate({_id:req.params.id} , {'$set':updated} )
 .then(function(){
   res.redirect('/read')
 })
})
module.exports = router; 
