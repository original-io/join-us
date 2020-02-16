const fs = require('fs');

let Usuario = JSON.parse(fs.readFileSync ('Usuario.json'));
let Produto = JSON.parse(fs.readFileSync ('Produto.json'));

//Rotas usuário

async function login(email, senha) {
    let usuario = {
        email,
        senha,
    };
    let usuarioEncontrado = await Usuario.find(usuarios => ((usuarios.email === usuario.email) && (usuarios.senha === usuario.senha)));
    console.log(usuarioEncontrado);
};

function cadastrar(nome, email, senha) {
    let novoUsuario = {
        nome,
        email,
        senha,
        carrinho: []
    };
    Usuario.push(novoUsuario);
    fs.writeFile('Usuario.json', JSON.stringify(Usuario), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
};

cadastrar("av", "c@gmail.com","123");

login("c@gmail.com","123");

async function adicionarCarrinho (email, id, tamanho, cor) {
    let produto = {
        id,
        tamanho,
        cor
    };
    let usuarioEncontrado = await Usuario.findIndex(usuarios => (usuarios.email === email));
    Usuario[usuarioEncontrado].carrinho.push(produto);
    fs.writeFile('Usuario.json', JSON.stringify(Usuario), (err) => {
        if (err) throw err;
    });
};

async function pegarCarrinho(email) {
    let usuarioEncontrado = await Usuario.find(usuarios => (usuarios.email === email));
    let carrinho = usuarioEncontrado.carrinho;
    console.log(carrinho);
};

pegarCarrinho("c@gmail.com");

adicionarCarrinho("c@gmail.com", "1", "34", "v");
adicionarCarrinho("c@gmail.com", "5", null, "a");

pegarCarrinho("c@gmail.com");