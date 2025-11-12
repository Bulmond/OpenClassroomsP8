const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");
MONGO_URI = require("dotenv").configDotenv().parsed.MONGO_URI;

const skillsRoutes = require("./routes/skills");
const projectsRoutes = require("./routes/projects");
const userRoutes = require("./routes/user");

const app = express();

const fetchAndSaveProjects = () => {
    axios
        .get("https://api.github.com/users/bulmond/repos")
        .then((response) => {
            const repos = response.data;
            axios.post("http://localhost:10000/api/projects", repos);
        })
        .catch((error) => {
            console.error("Error fetching GitHub repos:", error);
        });
};

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
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
app.use("/api/auth", userRoutes);

module.exports = app;
