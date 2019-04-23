const Sequelize = require('sequelize');
const sequelize = new Sequelize('application', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log('Conectado com sucesso')
})
.catch((err) => {
    console.log('Falha ao se conectar ' + err)
})

const Posts = sequelize.define('posts', {
    title: {
        type: Sequelize.STRING
    },
    post: {
        type: Sequelize.TEXT
    }
})

Posts.create({
    title: "New posts",
    post: "My first post"
})

const Users = sequelize.define('users', {
    name: {
        type: Sequelize.STRING
    },
    email : {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    },
    password: {
        type: Sequelize.STRING
    }

})

Users.create({
    name: "Esveraldo",
    email: "esveraldo@hotmail.com",
    age: 50,
    password: "123456"
})

//Posts.sync({force: true});
//Users.sync({force: true});