import { DataTypes } from "sequelize";
import sequelize from "../conn/db.js";

const Szabadsag = sequelize.define('Szabadsag', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    dolgozo_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    kezdete: {
        type: DataTypes.DATE,
        allowNull: false
    },
    vege: {
        type: DataTypes.DATE,
        allowNull: false
    },
    oka: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
}, {
    timestamps: false,
    tableName: 'szabadsag'
});

export default Szabadsag;
