require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('authorization');
  if (!token) return res.status(401).send('Access denied');
  const [bearer, jwtToken] = token.split(' ');
  if (bearer !== 'Bearer') return res.status(401).send({status: 'error', error: 'Malformed token'});
  try {
    const decodedToken = jwt.verify(jwtToken, process.env.JWT_PRIVATE_KEY);
    req.user = decodedToken;
  } catch (e) {
    return res.status(401).send('Invalid token');
  }
  return next();
};