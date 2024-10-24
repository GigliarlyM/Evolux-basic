const user = require('../models/user-schema');

const usuarios = [];

exports.createUsuario = (req, res) => {
    const { nome, nicho } = req.body;
    const newUsuario = {nome, nicho};
    usuarios.push(newUsuario);
    return res.json(newUsuario);
};

exports.readOneUsuario = (req, res) => {
    const { index } = req.params;
    return res.json(usuarios[index]);
};

exports.uptadeUsuario = (req, res) => {
    const { index } = req.params;
    const { nome, nicho } = req.body;
    const updatedUsuario = { nome, nicho };
    usuarios[index] = updatedUsuario;

    return res.json(usuarios);
};

exports.deleteUsuario = (req, res) => {
    const { index } = req.params;

    usuarios.splice(index, 1);

    return res.json({ message: "Usuário deletado com sucesso"});
};

exports.readAllUsuario = (req, res) => {
    const usuarioResumido = usuarios.map(usuario => ({
        nome: usuario.nome,
        nicho: usuario.nicho
    }))

    return res.json(usuarioResumido);
};

exports.searchForNicho = (req, res) => {
    const { nicho } = req.params;
    const usuariosFiltrados = usuarios.filter(usuario => usuario.nicho === nicho);

    return res.json(usuariosFiltrados);
};