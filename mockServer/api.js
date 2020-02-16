const express = require('express');
const router = express.Router();
const fs = require('fs');

let Usuario = JSON.parse(fs.readFileSync ('Usuario.json'));
let Produto = JSON.parse(fs.readFileSync ('Produto.json'));

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

router.get('/produto', async (req, res) => {
    let returnData = [];
    await Produto.forEach(produto =>{
        returnData.push(produto);
    });
    res.status(200).send(JSON.stringify(returnData));
});

router.get('/produto/categoria', async (req, res) => {
    // Quebrando REST para adiantar o mock server:
    let returnData = [{nome: Produto[0].categoria, foto: Produto[0].foto}];

    Produto.forEach(produto =>{
        let alreadyIn = false;
        for(let i = 0; i < returnData.length; i++) {
            if(returnData[i].nome == produto.categoria) {
                alreadyIn = true;
            }
        }
        if (!alreadyIn) {
            returnData.push({nome: produto.categoria, foto: produto.foto});
        }
    });
    console.log(returnData);
    res.status(200).send(JSON.stringify(returnData));
});

router.get('/produto/categoria/subcategorias', async (req, res) => {
    // Quebrando REST para adiantar o mock server:
    let returnData = [{nome: Produto[0].subcategoria, foto: Produto[0].foto}];

    Produto.forEach(produto =>{
        let alreadyIn = false;
        for(let i = 0; i < returnData.length; i++) {
            if(returnData[i].nome == produto.categoria) {
                alreadyIn = true;
            }
        }
        if (!alreadyIn) {
            returnData.push({nome: produto.categoria, foto: produto.foto});
        }
    });
    console.log(returnData);
    res.status(200).send(JSON.stringify(returnData));
});

router.get('/produto/categoria/:categoria', async (req, res) => {
    let produtoEncontrado = [];

    await Produto.forEach(produto =>{
        if (produto.categoria == req.params.categoria){
            produtoEncontrado.push(produto);
        }
    });
    res.status(200).send(produtoEncontrado);
});

router.get('/produto/nome/:nome', async (req, res) => {
    let produtoEncontrado = [];

    await Produto.forEach(produto =>{
        if (produto.nome.toLowerCase().includes(req.params.nome.toLowerCase())){
            produtoEncontrado.push(produto);
        }
    });
    let resultado = JSON.stringify(produtoEncontrado);
    res.status(200).send(resultado);
});

router.get('/produto/id/:id', async (req, res) => {
    let produtoEncontrado = [];

    await Produto.forEach(produto =>{
        if (produto.id == req.params.id){
            produtoEncontrado.push(produto);
        }
    });
    res.status(200).send(produtoEncontrado);
});

module.exports = router;
