const express = require("express");
const router = express.Router();

const projectsCtrl = require("../controllers/projects");

router.get("/", projectsCtrl.getAllProjects);
router.post("/", projectsCtrl.createProjects);
router.post("/fetch", projectsCtrl.fetchAndSaveProjects);
router.patch("/:id", projectsCtrl.valorizeProject);

module.exports = router;
