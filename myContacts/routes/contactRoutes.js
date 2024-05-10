// /routes/contactRoutes.js
const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send(" Page");
  })
  .post((req, res) => {
    res.send("Create contact");
  });

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Contact for ID : ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update Contact for ID : ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete Contact for ID : ${req.params.id}`);
  });

module.exports = router;
