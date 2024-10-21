const express = require('express');
const server = express();

server.use(express.json());

const usuarios = [];

// Cadastrar
server.post('/usuarios', (req, res) => {
    const { nome, nicho } = req.body;
    const newUsuario = {nome, nicho};
    usuarios.push(newUsuario);
    return res.json(newUsuario);
});

// Ler um usuário
server.get('/usuarios/:index', (req, res) => {
    const { index } = req.params;
    return res.json(usuarios[index]);
});

// Atualizar
server.put('/usuarios/:index', (req, res) => {
    const { index } = req.params;
    const { nome, nicho } = req.body;
    const updatedUsuario = { nome, nicho };
    usuarios[index] = updatedUsuario;

    return res.json(usuarios);
});

// Deletar
server.delete('/usuarios/:index', (req, res) => {
    const { index } = req.params;

    usuarios.splice(index, 1);

    return res.json({ message: "Usuário deletado com sucesso"});
});

// Ler todos os usuários
// Precisa ler só algumas informações como seu nome e nicho 
server.get('/usuarios', (req, res) => {
    const usuarioResumido = usuarios.map(usuario => ({
        nome: usuario.nome,
        nicho: usuario.nicho
    }))

    return res.json(usuarioResumido);
});

// Identificar pelo nicho

server.get('/usuarios/nicho/:nicho', (req, res) => {
    const { nicho } = req.params;
    const usuariosFiltrados = usuarios.filter(usuario => usuario.nicho === nicho);

    return res.json(usuariosFiltrados);
});

server.listen(3000);