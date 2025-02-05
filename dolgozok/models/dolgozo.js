import { DataTypes } from "sequelize";
import sequelize from "../conn/db.js";

const Dolgozo = sequelize.define('Dolgozo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    vezeteknev: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    keresztnev: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    szul_hely: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    szul_datum: {
        type: DataTypes.DATE,
        allowNull: false
    },
    adoszam: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    TAJ_szam: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    lakhely: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    telefonszam: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(320),
        allowNull: false
    },
    ertesitesi_nev: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    ertesitesi_telefonszam: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ertesitendo_jelleg: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    statusz: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    szerzodes_tipusa: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    munkakor: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
}, {
        tableName: 'dolgozok',
        timestamps: false
    });

    export default Dolgozo;