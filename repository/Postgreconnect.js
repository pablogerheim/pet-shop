import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    "postgres://pvlrexpm:keyOfDatabase", {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize