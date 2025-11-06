const mongoose = require("mongoose");

const skillSchema = mongoose.Schema({
    name: { type: String, required: true },
    icon: { type: String, required: true },
});

module.exports = mongoose.model("Skill", skillSchema);
