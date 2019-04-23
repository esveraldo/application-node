const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const port = 3000;

const Post = require('./models/Post');

//TODO Template engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//TODO body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/list', (req, res, next) => {
    Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
        res.render('posts/list', {posts: posts});
    });
})

app.get('/create', (req, res, next) => {
    res.render("posts/create");
});

app.post('/store', (req, res, next) => {
    Post.create({
        title: req.body.title,
        post: req.body.post
    }).then(() => {
        res.redirect('/list');
    })
    .catch((err) => {
        res.redirect('/list');
    });
});

app.get('/delete/:id', (req, res, next) => {
    Post.destroy({
        where: {'id': req.params.id}
    }).then(() => {
        res.redirect('/list');
    })
    .catch((err) => {
        res.send('Erro ao deletar post ' + err);
    });
});

app.get('/', (req, res, next) => {
    res.send('Pagina inicial');
});
app.listen(port, () => {
    console.log('Server in running port ' + port);
});