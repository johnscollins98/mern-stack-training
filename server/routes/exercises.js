const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.get("/", (req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.post("/add", (req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then((added) => res.json(added))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.get("/:id", (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      if (exercise == null)
        return res.status(404).json(`Exercise ${req.params.id} not found.`);
      res.json(exercise);
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.delete("/:id", (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then((exercise) => {
      if (exercise == null)
        return res.status(404).json(`Exercise ${req.params.id} not found.`);
      res.json(exercise);
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.put("/update/:id", (req, res) => {
  Exercise.findById(req.params.id).then((exercise) => {
    if (exercise == null) return res.status(404).json(`Exercise ${req.params.id} not found.`)

    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);

    exercise.save()
      .then((added) => res.json(added))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  })
  .catch(err => res.status(400).json(`Error: ${err}`))
});

module.exports = router;
