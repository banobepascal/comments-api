const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    firstname: {
        type: String,
        required: true
    }
});

const User = mongoose.model('Users', userSchema);
module.exports = User;