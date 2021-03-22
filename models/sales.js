const Sequelize = require('sequelize');
const db = require('../config/postgres');

//Schema for data
const Sales = db.define('Sales', {
  Region: {
    type: Sequelize.STRING
  },
  Country: {
    type: Sequelize.STRING
  },
  itemTypes: {
    type: Sequelize.STRING
  },
  salesChannel: {
    type: Sequelize.STRING
  },
  orderPrice: {
    type: Sequelize.STRING
  },
  orderDate: {
    type: Sequelize.DATE
  },
  orderId: {
    type: Sequelize.INTEGER
  },
  shipDate: {
    type: Sequelize.DATE
  },
  unitsSold: {   
    type: Sequelize.INTEGER
  },
  unitPrice: {
    type: Sequelize.INTEGER
  },
  unitCost: {
    type: Sequelize.INTEGER
  },
  totalRevenue: {
    type: Sequelize.INTEGER
  },
  totalCost: {
    type: Sequelize.INTEGER
  },
  totalProfit: {
    type: Sequelize.INTEGER
  }
});

Sales.sync().then(() => {
  console.log('table created');
});
module.exports = Sales;