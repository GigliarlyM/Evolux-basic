const express = require('express');
const router = express.Router();

const usuarios = [];

// Cadastrar
router.post('/', (req, res) => {
    const { nome, nicho } = req.body;
    const newUsuario = {nome, nicho};
    usuarios.push(newUsuario);
    return res.json(newUsuario);
});

// Ler um usuário
router.get('/:index', (req, res) => {
    const { index } = req.params;
    return res.json(usuarios[index]);
});

// Atualizar
router.put('/:index', (req, res) => {
    const { index } = req.params;
    const { nome, nicho } = req.body;
    const updatedUsuario = { nome, nicho };
    usuarios[index] = updatedUsuario;

    return res.json(usuarios);
});

// Deletar
router.delete('/:index', (req, res) => {
    const { index } = req.params;

    usuarios.splice(index, 1);

    return res.json({ message: "Usuário deletado com sucesso"});
});

// Ler todos os usuários
// Precisa ler só algumas informações como seu nome e nicho 
router.get('/', (req, res) => {
    const usuarioResumido = usuarios.map(usuario => ({
        nome: usuario.nome,
        nicho: usuario.nicho
    }))

    return res.json(usuarioResumido);
});

// Identificar pelo nicho

router.get('/nicho/:nicho', (req, res) => {
    const { nicho } = req.params;
    const usuariosFiltrados = usuarios.filter(usuario => usuario.nicho === nicho);

    return res.json(usuariosFiltrados);
});

module.exports = router;