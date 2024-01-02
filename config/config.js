
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres','123456', {
  host: 'localhost',
  dialect: 'postgres',
  define: { timestamps: false },
  logging:false
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
module.exports = sequelize;