const express = require("express");
const {
  getAllUsers,
  getById,
  postByIdUsers,
  patchUsers,
  deleteUsersId,
} = require("../controllers/users");
const { getAllProducts, getIdProducts } = require("../controllers/product");
const router = express.Router();

//localhost:4000/
router.get("/", (req, res) => {
  res.send("we'r on Chapter SIX DAY 4");
});

//localhost:4000/users
router.get("/users", getAllUsers);
router.get("/users/:id", getById);
router.post("/users", postByIdUsers);
router.patch("/users/:id", patchUsers);
router.delete("/users/:id", deleteUsersId);

// products
router.get("/products", getAllProducts);
router.get("/products/:id", getIdProducts);

module.exports = router;

console.log("hai");
