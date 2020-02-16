const express = require('express');
const router = express.Router();
const fs = require('fs');
const Aux = require('./auxscripts.js');

let Usuario = JSON.parse(fs.readFileSync('Usuario.json'));
let Produto = JSON.parse(fs.readFileSync('Produto.json'));
let Categoria = JSON.parse(fs.readFileSync('Categoria.json'));
let Subcategoria = JSON.parse(fs.readFileSync('Subcategoria.json'));

//Rotas usuário

router.post('/usuario/login', async (req, res) => {
    let usuario = {
        email: req.body.email,
        senha: req.body.senha
    };
    let usuarioEncontrado = await Usuario.find(usuarios => ((usuarios.email === usuario.email) && (usuarios.senha === usuario.senha)));
    res.status(200).send(usuarioEncontrado);
});

router.post('/usuario/cadastro', async (req, res) => {
    let novoUsuario = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        carrinho: []
    };
    let usuarioEncontrado = await Usuario.findIndex(usuarios => (usuarios.email === req.body.email));
    if (usuarioEncontrado < 0) {
        Usuario.push(novoUsuario);
        fs.writeFile('Usuario.json', JSON.stringify(Usuario), (err) => {
            if (err) throw err;
            else res.status(201).send();
        });
    } else {
        res.status(200).send("Email já cadastrado.");
    }
});

router.post('/usuario/carrinho', async (req, res) => {
    let produto = {
        id : req.body.produtoId,
        tamanho : req.body.produtoTamanho,
        cor : req.body.produtoCor
    };
    let usuarioEncontrado = await Usuario.findIndex(usuarios => (usuarios.email === req.body.email));
    Usuario[usuarioEncontrado].carrinho.push(produto);
    fs.writeFile('Usuario.json', JSON.stringify(Usuario), (err) => {
        if (err) throw err;
        else res.status(200).send();
    });
});

router.get('/usuario/carrinho', async (req, res) => {
    let usuarioEncontrado = await Usuario.find(usuarios => (usuarios.email === req.body.email));
    let carrinho = usuarioEncontrado.carrinho;
    res.status(200).send(carrinho);
});


// Rotas Produtos

router.get('/produtos', async (req, res) => {
    let returnData = [];
    await Produto.forEach(produto =>{
        returnData.push(produto);
    });
    res.status(200).send(JSON.stringify(returnData));
});

router.get('/categorias/:nome', async (req, res) => {
    // Quebrando REST para adiantar o mock server:
    let returnData;
    for(let cat of Categoria) {
        if(Aux.removeDiacritics(cat.nome.toLowerCase()) == Aux.removeDiacritics(req.params.nome.toLowerCase())) {
            returnData = cat;
            break;
        }
    }
    res.status(200).send(JSON.stringify(returnData));
});

router.get('/categorias', async (req, res) => {
    // Quebrando REST para adiantar o mock server:
    res.status(200).send(JSON.stringify(Categoria));
});

router.get('/categorias/:categoria/subcategorias', async (req, res) => {
    // Quebrando REST para adiantar o mock server:
    let categoria = req.params.categoria;
    let returnData = [];
    for(sc of Subcategoria) {
        if(!returnData.includes(sc.nome) && Aux.removeDiacritics(sc.categoria.toLowerCase()) == Aux.removeDiacritics(categoria.toLowerCase())) {
            returnData.push(sc);
        }
    }
    res.status(200).send(JSON.stringify(returnData));
});

router.get('/produtos/categoria/:categoria', async (req, res) => {
    let produtoEncontrado = [];

    await Produto.forEach(produto =>{
        if (produto.categoria == req.params.categoria){
            produtoEncontrado.push(produto);
        }
    });
    res.status(200).send(produtoEncontrado);
});

router.get('/produtos/nome/:nome', async (req, res) => {
    let produtoEncontrado = [];

    await Produto.forEach(produto =>{
        if (produto.nome.toLowerCase().includes(req.params.nome.toLowerCase())){
            produtoEncontrado.push(produto);
        }
    });
    let resultado = JSON.stringify(produtoEncontrado);
    res.status(200).send(resultado);
});

router.get('/produtos/id/:id', async (req, res) => {
    let produtoEncontrado = [];

    await Produto.forEach(produto =>{
        if (produto.id == req.params.id){
            produtoEncontrado.push(produto);
        }
    });
    res.status(200).send(produtoEncontrado);
});

router.get('/produtos/off', async (req, res) => {
    let returnData = [];

    await Produto.forEach(produto =>{
        if (produto.valor != produto.valorPromocao){
            returnData.push(produto);
        }
    });
    res.status(200).send(returnData);
});

module.exports = router;
