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
        }
    },
    {

    },
  );
  

  console.log(Poszt === sequelize.models.Poszt);


export default sequelize;
