const jwt=require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const winston = require('winston');
const userDao = require('../dao').userDao;
const config = require('../config/config.js');
module.exports = {
  fetchUsers:async (req, res) => {
  // return res.status(200).json({"response":""});
  try{
    const response = await userDao.fetchAllUsers();
     return res.status(200).json(response);
  }
  catch(error){
   winston.error(`Error occurs while fetching user list from database :${error}`)
   return res.status(500).json({"message":"Unable to your request. please try again later."})
 }
},
addUser:async (req, res) => {
  try {
    const name= req.body.name;
    const email = req.body.email;
    const gender= req.body.gender;
    const password =req.body.password;
    const saltRounds = 10;
    const hashPass = bcrypt.hashSync(password, saltRounds)
    await userDao.createUser(name, password, email, gender, saltRounds);
    return res.status(200).json({ message:"Registration Successfully"});
  }
  catch(error){
   winston.error(`Error occurs while creating user into database :${error}`)
   return res.status(500).json({"message":"Registration failed"});
 } 
},
updateById : async (req, res) => {
  const userId=req.params.userId;
  const name= req.body.name;
  const email = req.body.email;
  const gender= req.body.gender;
  try{
   let data = await userDao.updateById(name, email, gender, userId);
   return res.status(200).json(data);
 }
 catch(error){
  winston.error(`Error occurs while updating user into database :${error}`)
  return res.status(500).json({"message":"Unable to your request. please try again later."});
}
},
fetchUserById :async (req, res) => {
  const userId = req.params.userId;
  try{
    let data = await userDao.fetchUserById(userId)
    return res.status(200).json(data);
  }
  catch(error){
    winston.error(`Error occurs while fetchoing user :${error}`)
    return res.status(500).json({"message":"Unable to your request. please try again later."});
  }
},
deleteById :async (req, res) => {
  const userId = req.params.userId
  console.log(req.params)
  try{ 
    let data = await userDao.deleteById(userId)
    console.log(data)
    if(data){
      return res.status(200).json({"message":"user details has been updated successfully."});
    }else{
      return res.status(200).json({"message":"user details has been updated successfully."});
    }
  }
  catch(error){
    winston.error(`Error occurs while deleting user :${error}`)
    return res.status(500).json({"message":"Unable to your request. please try again later."});
  }
},
login: async(req,res)=>{
  const email=req.body.email;
  const password=req.body.password;
  try{

    let user = await userDao.signin(email, password);
    if(!user){
     return res.status(404).json({"message":"user not found."});
   }
   const hashPass = bcrypt.compareSync(password, user.password);
   if(user && hashPass){
     var token= jwt.sign({
      userId: user.userId,
      userName:user.name,
      email:user.email
    }, config.secretKey,
    { 
      expiresIn: '1h' 
    });
    return res.status(200).json({
      auth: true,
      accessToken: token,
      message: "Successfully Login",
    });
   }
   else if( user || hashPass){
     return res.status(401).json({message: "Invalid credential",})
   }
 }
 catch(error){
  winston.error(`Error occurs while sigin user :${error}`)
  return res.status(500).json({"message":"Unable to your request. please try again later."});
}
},
}
