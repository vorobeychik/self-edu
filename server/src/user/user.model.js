const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    gitHubId: Number,
    boards: [ String ],
});

module.exports = mongoose.model('User', userSchema);