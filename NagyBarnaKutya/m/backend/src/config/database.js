import { Sequelize } from "sequelize";

const sequelize = new Sequelize('fullstackfeladat', 'admin', 'pwd', {
    host: 'localhost',
    dialect: 'mariadb',
});

export default sequelize;