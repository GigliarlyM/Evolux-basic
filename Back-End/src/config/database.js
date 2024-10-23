const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const routes = require('../controllers/user-controller');

app.use('/usuarios', routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});