const express = require("express");
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/user-routes');
require('./src/config/database');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/usuarios', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});