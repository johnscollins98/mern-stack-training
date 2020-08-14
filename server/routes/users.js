const router = require("express").Router();
let User = require("../models/user.model");

router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.post("/add", (req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then((added) => res.json(added))
    .catch((err) => res.status(400).json(`Error ${err}`));
});

module.exports = router;
