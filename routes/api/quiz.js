const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

// import Quiz model
const Quiz = require('../../models/Quiz');

// @route   GET api/quiz
// @desc    Get the default quiz
// @access  Public

router.get('/', async (req, res) => {
  try {
    //const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    //res.json(profiles);
  } catch (err) {
    console.error(err.message);
    //res.status(500).send('Server Error');
  }
});
