const Sequelize = require('sequelize');

const sequelize = new Sequelize('database1', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
