import { Sequelize } from "sequelize";

const sequelize = new Sequelize('penly-db', 'penly-app', 'my8ZLE*XHWpNxfxB', {
    host: 'localhost',
    dialect: 'mariadb'
  });

export default sequelize;