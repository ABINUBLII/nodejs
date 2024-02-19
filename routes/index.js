const express = require(`express`);
const { getById, getAllContacts, postContacts } = require("../controller/contacts");
const router = express.Router();

router.get(`/`, (req, res) => {
  res.send(`blank page`);
});
router.get(`/contacts`, getAllContacts);
router.get(`/contacts/:id`, getById);
router.post(`/contacts`, postContacts);

module.exports = router;
