const Sequelize = require('sequelize');

//databse connection
module.exports =  new Sequelize('Sales','Postgres' ,'0000', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});