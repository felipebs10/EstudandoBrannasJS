
const Connection = require("./server/connection");
const HttpsServer = require("./server/HttpServer");
const LancamentoController = require("./server/LancamentoController");
const LancamentoData = require("./server/lancamentoData");


const connection = new Connection();
const lancamentoData = new LancamentoData(connection);
const httpsServer = new HttpsServer();
new LancamentoController(httpsServer, lancamentoData);
httpsServer.listen(3000);