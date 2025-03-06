import { Sequelize } from "sequelize";

const sequelize = new Sequelize('webshop-db', 'polo-webshop', 'PoloWebshop', {
    host: 'localhost',
    dialect: 'mariadb'
});

export default sequelize;