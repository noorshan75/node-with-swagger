const express = require('express')
const app = express()
// const models=require('./model');
const controller=require('./controller').userController;
var bodyParser=require('body-parser');
var cors = require("cors");
var swagger = require('./swagger/swagger')
var swaggerDocs = require('swagger-jsdoc');
var swaggerjsDocs = swaggerDocs(swagger)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
    next();
  });
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var swaggerUI = require('swagger-ui-express');
app.get('/',(req,res)=>{
    res.send("Hello World ");
})
require('./routers')(app);
app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerjsDocs))
app.listen(process.env.PORT || 3306,()=>{
    console.log(`Server is running on 3306.`);
})