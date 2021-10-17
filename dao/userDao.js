const winston = require('winston');
const db = require('../models');
const User = db.testdbs;
const bcrypt = require('bcrypt');
const uuid = require('uuid').v1;
module.exports = {
	fetchAllUsers: async()=>{
		 return await User.findAll({where: { isDeleted: false}})
		.then((result)=>{
			winston.info("user list has been fetched successfully.")
			return result;
		}).catch((error)=>{
			winston.error(`Error occurs while fetching user list from database :${error}`)
			throw error;
		})
	},
	fetchUserById: async(userId)=>{
		await User.findOne({where:{userId: userId}})
		.then((result)=>{
			winston.info("user has been fetched successfully.")
			return result;
		}).catch((error)=>{
			winston.error(`Error occurs while fetching user from database :${error}`)
			throw error;
		})
	},
	signin: async(email, password)=>{
		return await User.findOne({where:{email: email}})
		.then((result)=>{
			winston.info("user sigin has been fetched successfully.")
			// console.log(result)
			return result;
		}).catch((error)=>{
			winston.error(`Error occurs while sigining user from database :${error}`)
			throw error;
		})
	},
	updateUserById:async(name, email, gender, userId)=>{
		await User.update({
			name:name,
			email:email,
			gender:gender
		},
		{
			where: { userId: userId }
		}
		)
		.then((result)=>{
			winston.info("user has been updated successfully.")
			return result;
		}).catch((error)=>{
			winston.error(`Error occurs while updating user details :${error}`)
			throw error;
		})
	},
	deleteById: async(userId)=>{
		return await User.destroy({isDeleted: true,where:{userId: userId}})
		.then((result)=>{
			console.log(result)
			winston.info("user has been delete successfully.")
			return result;
		}).catch((error)=>{
			winston.error(`Error occurs while deleting user from database :${error}`)
			throw error;
		})
	},
	createUser: async(name, password, email, gender, saltRounds)=>{
		await User.create({
			userId: uuid(),
			name: name,
			password: bcrypt.hashSync(password, saltRounds),
			email: email,
			gender: gender,
		})
		.then((result)=>{
			winston.info("user has been created successfully.")
			return result;
		}).catch((error)=>{
			winston.error(`Error occurs while creating user into database :${error}`)
			throw error;
		})
	}
}