const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const { AuthRoles } = require("../utils/AuthRoles");

// Create User:
const User = sequelize.define("users", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	userName: {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: "",
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: "",
		unique: true,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null,
	},
	phoneNumber: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	role: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: AuthRoles.STUDENT,
	},
	isBlocked: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
	otp: {
		type: DataTypes.STRING,
		defaultValue: "",
	},
	otpVerified: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
});

module.exports = User;
