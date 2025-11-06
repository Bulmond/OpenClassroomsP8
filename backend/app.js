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
            axios.post(
                "https://portfoliobackend-c34d.onrender.com/api/projects",
                repos
            );
        })
        .catch((error) => {
            console.error("Error fetching GitHub repos:", error);
        });
};

app.use(
    cors({
        origin: [
            "https://www.dashboard.filipe-motta.com/",
            "https://www.dashboard.filipe-motta.com/projects",
            "https://www.dashboard.filipe-motta.com/skills",
        ],
        methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Access-Control-Allow-Origin",
        ],
    })
);

mongoose
    .connect(
        "mongodb+srv://lfilipemottaa:qX7ZvFw54QWU0rXf@clusterportfolio.rq9u88n.mongodb.net/?appName=ClusterPortfolio"
    )
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
