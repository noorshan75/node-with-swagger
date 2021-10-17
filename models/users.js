module.exports=(sequelize, DataTypes)=>{
var users=sequelize.define('testdbs',{
    userId:{
    type:DataTypes.UUID,
    unique:true,
    primaryKey: true
    },
    name:DataTypes.STRING,
    email:{
        type:DataTypes.STRING,
        defaultValue:'example@gmail.com',
        unique:true,
    },
    gender:DataTypes.STRING,
    password:DataTypes.STRING,
    isDeleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});
return users;
};