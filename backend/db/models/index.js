'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/database.js')[env];
const db = {};

Sequelize.postgres.DECIMAL.parse = (val) => parseFloat(val);

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
/**
 * Function to reset the database (drop and recreate tables)
 */
async function resetDatabase() {
  try {
    console.log("Resetting database...");
    await sequelize.sync({ force: true }); // WARNING: This deletes all data!
    console.log("Database has been reset successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Error resetting database:", error);
    process.exit(1);
  }
}

// Run the reset function if executed directly
if (require.main === module) {
  resetDatabase();
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
