import { Sequelize } from "sequelize";

export default new Sequelize(
    "autokereskedes",
    "kereskedes",
    "Farkas2024",
    {
        host: "localhost",
        port: 3306,
        dialect: "mariadb"
    }
)