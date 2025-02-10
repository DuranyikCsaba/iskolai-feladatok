import sequelize from "../config/db";
import { Sequelize, DataTypes } from "sequelize";

const Poszt = sequelize.define(
    'Poszt',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        felhasznaloId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tartalom: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        createdAt: 'letrehozas',
        updatedAt: 'modositas',
        
    },
  );
  

  console.log(Poszt === sequelize.models.Poszt);


export default sequelize;
