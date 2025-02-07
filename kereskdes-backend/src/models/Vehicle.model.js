import { DataTypes } from "sequelize";
import db from "../db.js"

export default db.define(
    "Vehicle",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        marka: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipus: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        evjarat: {
            type: DataTypes.INTEGER,
            validate: {
                min: 2000
            }
        },
        ar: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        teljesitmeny: {
            type: DataTypes.INTEGER,
        },
        szin: {
            type: DataTypes.STRING,
        },
        automataValtosE: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
        },
        {
         createdAt: "felvetelIdeje",
         updatedAt: false,
         tableName: "vehicles",   
        }

);