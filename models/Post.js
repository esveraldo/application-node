const base = require('./base');

const Posts = base.sequelize.define('posts', {
    title: {
        type: base.Sequelize.STRING
    },
    post: {
        type: base.Sequelize.TEXT
    }
})

//Posts.sync({force: true});

module.exports = Posts;

