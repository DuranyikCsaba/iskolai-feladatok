import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    discount: {
        type: DataTypes.INTEGER,
        default: 0,
        validate: {
            min: 0,
            max: 90
        }
    }
},
{
    tableName: 'product',
    updatedAt: 'lastModified'
}) 

export default Product;