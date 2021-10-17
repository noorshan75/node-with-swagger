const controller = require('../controller').userController;
const authJwt = require('../verifyToken');
module.exports = (app) =>{

app.post('/login',controller.login),
app.post('/addUser', controller.addUser),
app.get('/fetchUsers', authJwt, controller.fetchUsers),
app.get('/fetchUser/:userId',authJwt, controller.fetchUserById),
app.put('/updateById/:userId',authJwt, controller.updateById),
app.delete('/delete/:userId',authJwt, controller.deleteById)

}
