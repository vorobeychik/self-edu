const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    gitHubId: Number,
    todos:[],
});

module.exports = mongoose.model('User', userSchema);