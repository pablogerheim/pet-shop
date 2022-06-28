import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    "postgres://pvlrexpm:LKERgPGODLuoxmS0ty9VSxAJeyV77bb3@kesavan.db.elephantsql.com/pvlrexpm", {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize