class Ano {

    constructor () {
        this.meses = [];
    }

    adicionarMes (mes) {
        this.meses.push(mes);
    }

    adicionarLancamento(nomeDoMes, lancamento){
        //se não tiver entra aqui, ! é negação
        if (!this.meses.some(mes => mes.nome === nomeDoMes)){ //Dectecar primeiro se já existe; principalemnte por causa da função some que é nativa do javascript;
            this.adicionarMes(new Mes(nomeDoMes));
        }
        for (const mes of this.meses) {
            if (mes.nome === nomeDoMes){
                mes.adicionarLancamento(lancamento);
                break; //interrompe o laço
            }
        }
    }

   deletarLancamento (mes, lancamento){
        const pos = mes.lancamentos.indexOf(lancamento);
        mes.lancamentos.splice(pos, 1);
    }


    calcularSaldo () {
        let saldoInicial = 0;
        for (const mes of this.meses){
            mes.saldoInicial = saldoInicial;
            mes.calcularSaldo();
            saldoInicial = mes.totalizador.saldo;
        }
    }

}