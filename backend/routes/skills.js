const express = require("express");
const router = express.Router();

const skillsCtrl = require("../controllers/skills");

router.get("/", skillsCtrl.getAllSkills);
router.post("/", skillsCtrl.createSkill);
router.delete("/:id", skillsCtrl.deleteSkill);
router.put("/:id", skillsCtrl.updateSkill);

module.exports = router;
