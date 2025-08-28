const express = require ("express"); //importando a biblioteca
const pgp = require ("pg-promise"); // trouxe a biblioteca
const app = express (); //instanciando um servidor
app.use(express.json()); // conversor para transmitir os dados
app.use("/app", express.static("./client"));  //abrindo o cliente por meio do servidor ;
const connection = pgp()("postgres://postgres:postgresql@localhost:5432/app"); //Conexão lembrando a senha é postgresql, antes do @ e deposi do postgres

app.get ("/api/lancamentos", async function (req, res){
   const lancamentos = await  connection.query("select * from financas_pessoais.lancamento", []);
   console.log(lancamentos);
    res.json(lancamentos);
});

app.post ("/api/lancamentos", async function (req, res){
    //console.log("body", req.body);
    const lancamento = req.body;
    await connection.query ("insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ($1, $2, $3, $4)", [lancamento.mes, lancamento.categoria, lancamento.tipo, lancamento.valor])
    res.end();
});

app.listen (3000);