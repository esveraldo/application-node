const Sequelize = require('sequelize');

//TODO conexao com banco de dados
const sequelize = new Sequelize('application', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}