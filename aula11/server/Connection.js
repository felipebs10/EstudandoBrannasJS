const pgp = require ("pg-promise"); // trouxe a biblioteca

class Connection {
    constructor(){
        this.connection = pgp()("postgres://postgres:postgresql@localhost:5432/app"); //Conexão lembrando a senha é postgresql, antes do @ e deposi do postgres
    }

    query (statement, params){ //statemente é o select;
        return this.connection.query(statement, params);
    }
}

module.exports = Connection