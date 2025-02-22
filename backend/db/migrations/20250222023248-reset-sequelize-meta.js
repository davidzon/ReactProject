'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // Define schema in production
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 🚨 Force reset the SequelizeMeta table to remove invalid migration history
    await queryInterface.sequelize.query(`
      DELETE FROM "${process.env.SCHEMA}".SequelizeMeta;
    `);
  },

  async down(queryInterface, Sequelize) {
    // No rollback needed
  }
};
