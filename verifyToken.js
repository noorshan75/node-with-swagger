const jwt = require("jsonwebtoken");
const config = require('./config/config.js')
verifyToken = async (req, res, next) => {

    let token = req.headers["x-access-token"];
      console.log("endpoint..............",req.route.path)
        if (!token) {
            return res.status(403).send({
              auth: false,
              message: "No token provided.",
            });
          }
      jwt.verify(token, config.secretKey ,(err,auth)=>{
if(err){
    return res.status(403).json({
        auth: false,
        message: "Invalid token.",
      });
}
        req.user = auth.user;
        next();
      })
   
}

module.exports = verifyToken;