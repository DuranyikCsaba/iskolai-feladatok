import { DataTypes } from "sequelize";
import db from "../db.js"

export default db.define(
    "Adomany",
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        osszeg: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        nev: {
            type: DataTypes.STRING(100),
            defaultValue: "Ismeretlen adományozó"
        }
    },
    {
        tableName: "donations1",
        createdAt: "adomanyozasIdeje",
        updatedAt: false,
    }
)