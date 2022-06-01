import connect from "../repository/connect.js";
import sequelize from "sequelize";
import proprietario from "./proprietario.models.js";


const animal = connect.define('animais', {
    animalId: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: sequelize.STRING,
        allowNull: false
    },
    tipo: {
        type: sequelize.STRING,
        allowNull: false
    }
}, { underscored: true })

animal.belongsTo(proprietario, { foreignKey: "proprietarioId" })

export default animal