import connect from "../repository/Postgreconnect.js";
import sequelize from "sequelize";
import animals from "./animal.models.js";


const servico = connect.define('servico', {
    servicoId: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricao: {
        type: sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: sequelize.STRING,
        allowNull: false
    }
}, { underscored: true })

servico.belongsTo(animals, { foreignKey: "animalId" })

export default servico