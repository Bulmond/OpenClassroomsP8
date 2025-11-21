const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    name: { type: String, required: true },
    full_name: { type: String, required: true },
    description: { type: String },
    html_url: { type: String, required: true },
    stargazers_count: { type: Number },
    forks_count: { type: Number },
    language: { type: String },
    valorized: { type: Boolean, default: 0 },
    img: { type: String },
});

module.exports = mongoose.model("Project", projectSchema);
