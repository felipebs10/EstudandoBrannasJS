const express = require ("express"); 

class HttpsServer {
    constructor() {
        this.app = express (); //instanciando um servidor
        this.app.use(express.json()); // conversor para transmitir os dados
        this.app.use("/", express.static("./client"));  //abrindo o cliente por meio do servidor ;

    }

    register (method, url, callback){
        this.app[method] (url, async function (req, res) {
            const output = await callback(req.params, req.body);
            res.json(output);
        });
    }

    listen (port) {
        this.app.listen(port);
    }
}

module.exports = HttpsServer;