const express = require("express");
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/user-routes');
require('./src/config/database');

dotenv.config();
const app = express();
app.use(express.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRoutes);
app.get('/', () => {
    res.send("Welcome to Evolux BE")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});