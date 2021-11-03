const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    type: String,
    categories: [{}],
    properties: [],
    tags: [],
    comments: [],
});

module.exports = mongoose.model('Board', userSchema);