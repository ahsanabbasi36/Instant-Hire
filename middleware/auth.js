// const jwt = require('jsonwebtoken')
// const config = require('config')

// module.exports = function(req, res, next){
//     //get token from header
//     const token = req.header('x-auth-token')

//     //check if there is no token
//     if(!token){
//         return res.status(401).json({msg: 'No token found, authorization failed'})
//     }

//     try{
//         const decoded = jwt.verify(token, config.get('jwtSecret'))
//         req.user = decoded.user
//         next()

//     }catch(err){
//         return res.status(401).json({ msg: 'Invalid token'})
//     }

//     //verify token
// }

const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
