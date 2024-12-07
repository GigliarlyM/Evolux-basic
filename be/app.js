const express = require("express");
const userRoutes = require('./src/routes/user-routes');
// require('./src/config/database');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to the Evolux")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
});