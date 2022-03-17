var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://samdarshi:samdarshi123@cluster0.kr6jy.mongodb.net/user?retryWrites=true&w=majority')
.then(function(){
  console.log("Database Connected")
})
.catch(function(err){
console.log(err)
})
var userSchema = mongoose.Schema({
  name : String,
  mobile : Number,
  location : String
})
module.exports = mongoose.model('User' , userSchema)