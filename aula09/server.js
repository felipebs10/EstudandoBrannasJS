const express = require ("express"); //importando a biblioteca
const app = express (); //instanciando um servidor
app.use(express.json()); // conversor para transmitir os dados
app.use("/app", express.static("./client"));  //abrindo o cliente por meio do servidor ;

const lancamentos = [
     {mes: "janeiro",   categoria: "Salário",       tipo :"receita", valor:  4000 },
     {mes: "janeiro",   categoria: "Aluguel",       tipo :"despesa", valor:  1000 },
     {mes: "janeiro",   categoria: "Conta de Luz" , tipo :"despesa", valor:   200 },
     {mes: "janeiro",   categoria: "Conta de água", tipo :"despesa", valor:   100 },
     {mes: "janeiro",   categoria: "Internet",      tipo :"despesa", valor:   100 },
     {mes: "janeiro",   categoria: "Escola",        tipo :"despesa", valor:   500 },
     {mes: "fevereiro", categoria: "Salário",       tipo: "receita", valor:  3000 }, 
     {mes: "fevereiro", categoria: "Aluguel",       tipo: "despesa", valor:  1200 },
     {mes: "fevereiro", categoria: "Escola",        tipo: "despesa", valor:   400 },
     {mes: "fevereiro", categoria: "Conta de Luz",  tipo: "despesa", valor:   250 },
     {mes: "fevereiro", categoria: "Conta de água", tipo: "despesa", valor:   100 },
     {mes: "fevereiro", categoria: "Internet",      tipo: "despesa", valor:   100 },
     {mes: "marco",     categoria: "Salário",      tipo: "receita",  valor:  3000 },
     {mes: "marco",     categoria: "Aluguel",      tipo: "despesa",  valor:  1200 },
     {mes: "marco",     categoria: "Escola",       tipo: "despesa",  valor:  500  },
     {mes: "marco",     categoria: "Conta de Luz", tipo: "despesa",  valor:  200  },
     {mes: "marco",     categoria: "Conta de água",tipo: "despesa",  valor:  100  },
     {mes: "marco",     categoria: "Internet",     tipo: "despesa",  valor:  200  },
     {mes: "abril",     categoria: "Salário",      tipo: "receita",  valor: 4000  },
];

// Leio
app.get ("/api/lancamentos", function (req, res){
    res.json(lancamentos);
});

//Escrevo
app.post ("/api/lancamentos", function (req, res){
    //console.log("body", req.body);
    const lancamento = req.body;
    lancamentos.push(lancamento)
    res.end();
});


app.listen (3000);