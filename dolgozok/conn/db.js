import { Sequelize } from "sequelize";

const sequelize = new Sequelize('dolgozok', 'admin', 'pwd', {
    host: 'localhost',
    dialect: "mariadb"
});

sequelize.authenticate()
    .then(() => console.log("Sikeres adatbázis kapcsolat"))
    .catch((err) => console.error("Adatbázis hiba: ", err.message));

export default sequelize;
