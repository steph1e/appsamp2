var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MemberSchema = new Schema({
    name:String,
    surname: String,
    age:Number,
    group: String
});

var Model = mongoose.model('Member', MemberSchema);

module.exports = Model;