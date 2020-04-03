const express = require("express");

const InterestedStacks = require("./interested_stacks.model.js");

const router = express.Router();

router.get("/", (req, res) => {
  InterestedStacks.getInterestedStack()
    .then(stack => {
      res.status(200).json(stack);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to get stacks." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  InterestedStacks.getInterestedStackById(id)
    .then(stack => {
      stack
        ? res.status(200).json(stack)
        : res
            .status(404)
            .json({ message: "Stack with that ID does not exist." });
    })
    .catch(error => {
      res.status(500).json({ errorMessage: "Failed to get stack." });
    });
});

module.exports = router;
