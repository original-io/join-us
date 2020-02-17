const axios = require('axios');

// axios.post(process.env.VUE_APP_API_HOST + ":" + process.env.VUE_APP_API_PORT + "/" + 'usuario/cadastro', {
//     nome: 'asdsad',
//     email: 'b@gmail.com',
//     senha: "123"
//     }).then(function (response) {
//     console.log(response);
//     }).catch(function (error) {
//         console.log(error);
//     });

// axios.post(process.env.VUE_APP_API_HOST + ":" + process.env.VUE_APP_API_PORT + "/" + 'usuario/login', {
//     email: 'b@gmail.com',
//     senha: "123"
// }).then(function (response) {
//     console.log(response);
// }).catch(function (error) {
//     console.log(error);
// });

axios.post(process.env.VUE_APP_API_HOST + ":" + process.env.VUE_APP_API_PORT + "/" + 'usuario/carrinho', {
    email: 'b@gmail.com',
    produtoId: '2',
    produtoCor: 'af',
    produtoTamanho: '55'
}).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});

