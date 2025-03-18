import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const TShirt = sequelize.define('TShirt', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    megnevezes: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: "Póló"
    },
    meret: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    egysegar: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    akcioMerteke: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
},
{
    tableName: "sold-products",
    createdAt: "arusitasKezdete",
    updatedAt: false
});

export default TShirt