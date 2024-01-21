// models/index.js
const dbConfig = require("../config/dbConfig.js");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAlias: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    idle: dbConfig.pool.idle,
    acquire: dbConfig.pool.acquire,
  },
});

async function testDbConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database connection established.");
  } catch (error) {
    console.error(error);
  }
}
testDbConnection();

const db = {
  sequelize,
  Sequelize,
};
db.products = require("./productModel.js")(sequelize, DataTypes);

async function databaseSync() {
  try {
    await sequelize.sync({ force: false });
    console.log("Database sync completed.");
  } catch (error) {
    console.error(error);
  }
}
databaseSync();

module.exports = db;
