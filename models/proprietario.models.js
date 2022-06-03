import connect from "../repository/Postgreconnect.js";
import sequelize from "sequelize";

const proprietario = connect.define('proprietarios', {
    proprietarioId: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: sequelize.STRING,
        allowNull: false
    }
}, { underscored: true })

export default proprietario