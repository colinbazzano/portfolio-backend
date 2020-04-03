const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to get the projects." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Projects.getProjectById(id)
    .then(project => {
      project
        ? res.status(200).json(project)
        : res
            .status(404)
            .json({ message: "Project with that ID does not exist." });
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "Mission Failed, we'll get a project next time."
      });
    });
});

module.exports = router;
