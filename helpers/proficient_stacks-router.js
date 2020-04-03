const express = require("express");

const ProficientStacks = require("./proficient_stacks-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  ProficientStacks.getProficientStacks()
    .then(stack => {
      res.status(200).json(stack);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to get the Stacks" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  ProficientStacks.getProficientStacksById(id)
    .then(stack => {
      stack
        ? res.status(200).json(stack)
        : res
            .status(404)
            .json({ message: "We do not have a stack with that ID, sorry" });
    })
    .catch(error => {
      res.status(500).json({ errorMessage: "Failed to get the Stack." });
    });
});

module.exports = router;
