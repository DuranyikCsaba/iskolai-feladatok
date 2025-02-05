const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fullstackfeladat', 'admin', 'pwd', {
    host: 'localhost',
    dialect: 'mariadb',
});

module.exports = sequelize;