//Rotas usuário

router.post('/usuario/login', async (req, res) => {
    let a = await Usuario.find({
        email: req.body.nome,
        senha: req.body.senha
    });
});

router.post('/usuario/cadastro', (req, res) => {
    let novoUsuario = new Usuario({
        nome,
        email,
        senha
    });
    novoUsuario.save()
        .then()
        .catch();
});

router.post('/usuario/carrinho', (req, res) => {
});

router.get('/usuario/carrinho', (req, res) => {
});


// Rotas Produtos

router.get('/produto/categoria/:categoria', (req, res) => {
    Produto.find({
        categoria: req.params.categoria
    })
        .then()
        .catch();
});

router.get('/produto/nome/:nome', (req, res) => {
    Produto.find({
        nome: req.params.nome
    })
        .then()
        .catch();
});

router.get('/produto/id/:id', (req, res) => {
    Produto.find({
        id: req.params.id
    })
        .then()
        .catch(err => console.log(err));
});
