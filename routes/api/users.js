const express = require("express");
const router = express.Router();

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post("/", (req, res) => {
  console.log(req.bosy);
  res.send("User route");
});

module.exports = router;
