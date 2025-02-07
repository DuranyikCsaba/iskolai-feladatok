import { Sequelize } from "sequelize";

const sequelize = new Sequelize('forum', 'admin', 'pwd', {
    host: 'localhost',
    dialect: 'mariadb'
  });

  export default sequelize;