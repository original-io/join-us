const axios = require('axios');

// axios.post('http://localhost:8081/usuario/cadastro', {
//     nome: 'asdsad',
//     email: 'b@gmail.com',
//     senha: "123"
//     }).then(function (response) {
//     console.log(response);
//     }).catch(function (error) {
//         console.log(error);
//     });

// axios.post('http://localhost:8081/usuario/login', {
//     email: 'b@gmail.com',
//     senha: "123"
// }).then(function (response) {
//     console.log(response);
// }).catch(function (error) {
//     console.log(error);
// });

axios.post('http://localhost:8081/usuario/carrinho', {
    email: 'b@gmail.com',
    produtoId: '2',
    produtoCor: 'af',
    produtoTamanho: '55'
}).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});

