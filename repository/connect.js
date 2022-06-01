import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    "your postgre key", {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize