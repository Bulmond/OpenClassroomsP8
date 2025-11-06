const Skill = require("../models/skill");

exports.getAllSkills = (req, res, next) => {
    Skill.find()
        .then((skills) => res.status(200).json(skills))
        .catch((error) => res.status(404).json({ error }));
};

exports.createSkill = (req, res, next) => {
    const skill = new Skill({
        name: req.body.name,
        icon: req.body.icon,
    });
    skill
        .save()
        .then(() => res.status(201).json({ message: "Skill created!" }))
        .catch((error) => res.status(400).json({ error }));
};

exports.deleteSkill = (req, res, next) => {
    Skill.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Skill deleted!" }))
        .catch((error) => res.status(400).json({ error }));
};

exports.updateSkill = (req, res, next) => {
    Skill.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => {
            res.status(200).json({ message: "Skill updated!" });
        })
        .catch((error) => res.status(400).json({ error }));
};
