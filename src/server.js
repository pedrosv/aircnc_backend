const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routs');


const app = express();
mongoose.connect('mongodb+srv://pedrosv:omnistack@omni9-iqegd.mongodb.net/semana9?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//req.query = acessar query params (para filtros) /users/2
//req.params = acessar route params (edicao e delete) /users?id=2
//req.body = Acessar corpo da requisicao  json

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);