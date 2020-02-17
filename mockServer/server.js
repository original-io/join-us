const express = require('express');

class API {
    constructor(serverPort, serverHost) {
        this.serverPort = serverPort;
        this.serverHost = serverHost;
        this.serverDependencies = {
            bodyParser: require('body-parser')
        };
        this.serverInstance = express();
    }

    setupServer() {
        const api = this.serverInstance;
        const bodyParser = this.serverDependencies.bodyParser;
        let whitelist = [
            'http://localhost:8080',
            'http://ec2-18-229-118-221.sa-east-1.compute.amazonaws.com',
        ];

        api.use(
            bodyParser.urlencoded({
                extended: true
            })
        );
        api.use(bodyParser.json());
        api.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "http://localhost:8080");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        api.use(require(process.cwd() + '/api.js'));
    }

    static startServer() {
        const api = new API(
            8081,
            'localhost'
        );
        api.setupServer();
        api.serverInstance.listen(api.serverPort, () => {
            console.log('Server iniciado. Porta: ' + api.serverPort);
        });
        module.exports = api;
    }
}

API.startServer();
