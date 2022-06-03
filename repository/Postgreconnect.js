import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    "sua poutgre chave", {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize