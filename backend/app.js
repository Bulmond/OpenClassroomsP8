const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
MONGO_URI = require("dotenv").config().parsed.MONGO_URI;

const skillsRoutes = require("./routes/skills");
const projectsRoutes = require("./routes/projects");

const app = express();

const fetchAndSaveProjects = () => {
    axios
        .get("https://api.github.com/users/bulmond/repos")
        .then((response) => {
            const repos = response.data;
            axios.post("http://localhost:3000/api/projects", repos);
        })
        .catch((error) => {
            console.error("Error fetching GitHub repos:", error);
        });
};

app.use(
    cors({
        origin: "http://localhost:5174",
        methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("Connexion à MongoDB réussie !");
        fetchAndSaveProjects();
    })
    .catch(() => console.log("Connexion à MongoDB échouée !"));
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

app.use("/api/skills", skillsRoutes);
app.use("/api/projects", projectsRoutes);

module.exports = app;
