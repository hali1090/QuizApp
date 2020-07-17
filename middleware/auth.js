const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from request header
  const token = req.header('x-auth-token');

  // Check if no token is sent
  if (!token) {
    return res.status(401).json({ msg: 'Mo token, autherisation denied' });
  }

  // Verify that the token is valid
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    // Send an error if the token is invalid
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
