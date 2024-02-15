const express = require("express");
const { getAllUsers, getById, postByIdUsers } = require("../controllers/users");
const router = express.Router();

//localhost:4000/
router.get("/", (req, res) => {
  res.send("we'r on Chapter SIX DAY 4");
});

//localhost:4000/users
router.get("/users", getAllUsers);

//localhost:4000/users/id
router.get("/users/:id", getById);

// method post
//notes : jika di restart vscodenya data yang ditambah akan di reset oleh postman karna bukan ditampung dalam json
router.post("/users", postByIdUsers);

module.exports = router;
