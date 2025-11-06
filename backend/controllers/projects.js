const Project = require("../models/project");
const axios = require("axios");

exports.fetchAndSaveProjects = (req, res, next) => {
    axios
        .get("https://api.github.com/users/bulmond/repos")
        .then((response) => {
            const repos = response.data;
            const promises = repos.map((repo) => {
                const project = new Project({
                    ...repo,
                    rating: 0,
                });
                return Project.findOneAndUpdate(
                    { full_name: project.full_name },
                    project,
                    { upsert: true, new: true, setDefaultsOnInsert: true }
                );
            });
            Promise.all(promises)
                .then(() =>
                    res.status(200).json({
                        message: "Projects fetched and saved successfully.",
                    })
                )
                .catch((error) => res.status(500).json({ error }));
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

exports.createProjects = (req, res, next) => {
    const projects = req.body;
    const promises = projects.map((project) => {
        return Project.findOneAndUpdate(
            { full_name: project.full_name },
            project,
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );
    });

    Promise.all(promises)
        .then(() =>
            res.status(201).json({ message: "Projects created or updated." })
        )
        .catch((error) => res.status(400).json({ error }));
};

exports.getAllProjects = (req, res, next) => {
    Project.find()
        .then((projects) => res.status(200).json(projects))
        .catch((error) => res.status(400).json({ error }));
};

exports.valorizeProject = (req, res, next) => {
    const projectId = req.params.id;
    Project.findById(projectId)
        .then((project) => {
            if (!project) {
                return res.status(404).json({ message: "Project not found." });
            }
            project.valorized = !project.valorized;
            return project.save();
        })
        .then((updatedProject) => res.status(200).json(updatedProject))
        .catch((error) => res.status(400).json({ error }));
};
