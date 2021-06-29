const mongoose = require('mongoose');
const schema = mongoose.Schema;

const projectSchema = new schema({
    title: {
        type: String,
        required: true
    },
    comments: Array
});

const Project = mongoose.model('Projects', projectSchema);
module.exports = Project;