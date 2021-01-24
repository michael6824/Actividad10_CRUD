const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);
var UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    age: Number
});

module.exports = mongoose.model('estudiantes', UserSchema);