import { Sequelize } from "sequelize"; 

export default new Sequelize(
    "shelter-donations",
    "shelter",
    "VizsgaMenhely2024",
    {
        host: "localhost",
        port: 3306,
        dialect: "mariadb"
    }
);