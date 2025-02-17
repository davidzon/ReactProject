// backend/config/database.js
const config = require('./index');

module.exports = {
  development: {
    storage: config.dbFile,
    ...(process.env.USE_LOCAL_POSTGRESS === 'true' ? {
      use_env_variable: 'DATABASE_URL',
      dialect: 'postgres',
      dialectOptions: {},
      define: {
        schema: 'public',
      }
    } : {
      dialect: "sqlite",
    }),
    seederStorage: "sequelize",
    logQueryParameters: true,
    typeValidation: true
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    define: {
      schema: process.env.SCHEMA
    }
  }
};


// const config = require('./index');

// module.exports = {
//   development: {
//     storage: config.dbFile || './db/dev.sqlite', // Default SQLite path
//     ...(String(process.env.USE_LOCAL_POSTGRESS).toLowerCase() === 'true' ? {
//       use_env_variable: 'DATABASE_URL',
//       dialect: 'postgres',
//       dialectOptions: {},
//       define: {
//         schema: 'public',
//       }
//     } : {
//       dialect: 'sqlite',
//     }),
//     seederStorage: 'sequelize',
//     logQueryParameters: true,
//     typeValidation: true,
//   },
//   production: {
//     use_env_variable: 'DATABASE_URL',
//     dialect: 'postgres',
//     seederStorage: 'sequelize',
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },
//     define: {
//       schema: process.env.SCHEMA || 'public', // Default schema
//     },
//   },
// };
