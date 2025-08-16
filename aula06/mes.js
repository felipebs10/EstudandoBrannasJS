class Mes {
            constructor (nome){
                if (nome === "") throw new Error("Mês Inválido: O nome é obrigatório");
                this.nome = nome; //this é a referência do estado interno;
                this.saldoInicial = 0
                this. totalizador = {saldo: 0, juros: 0,  rendimentos: 0, receitas: 0, despesas:0, distribuicaoDeDespesas: []}
                this.lancamentos = []


            }

            adicionarLancamento (lancamento){
                this.lancamentos.push(lancamento);
            }

            calcularJuros(valor) {
                const juros = arrendondar(valor * 0.1);
                return juros;
            }

            calcularRendimentos(valor) {
                const  rendimentos = arrendondar(valor * 0.005);
                return rendimentos;
            }


         calcularSaldo () {
            this. totalizador = {saldo: 0, juros: 0,  rendimentos: 0, receitas: 0, despesas:0, distribuicaoDeDespesas: []}
            this.totalizador.saldo = this.saldoInicial
            this.apurarReceitas();
            this.apurarDespesas();
            this.distribuircaoDeDespesas();
            this.apurarJuros();
            this.apurarRendimentos();
        }
        
        apurarReceitas() {
            for (const lancamento of this.lancamentos){
                if (lancamento.tipo === "receita"){  
                    this.totalizador.saldo  += lancamento.valor;
                    this.totalizador.receitas += lancamento.valor;
                }
            }
        }
        
        apurarDespesas(){
            for (const lancamento of this.lancamentos){
                if (lancamento.tipo === "despesa"){
                        this.totalizador.saldo -= lancamento.valor;
                        this.totalizador.despesas += lancamento.valor;
                }
            }    
        }

          distribuircaoDeDespesas(){
                const distribuicaoDeDespesas = [];
                for (const lancamento of this.lancamentos){
                    if (lancamento.tipo === "despesa"){
                        const percentual = arrendondar((lancamento.valor/this.totalizador.despesas) *100);

                        distribuicaoDeDespesas.push(
                        {categoria: lancamento.categoria, percentual}
                    )
                }
            }
            this.totalizador.distribuicaoDeDespesas =  distribuicaoDeDespesas;
         }


         apurarJuros(){
            if (this.totalizador.saldo  < 0){
                this.totalizador.juros = this.calcularJuros(this.totalizador.saldo)
                this.totalizador.saldo  = arrendondar(this.totalizador.saldo + this.  totalizador.juros)
            }
         }

        apurarRendimentos(){
            if (this.totalizador.saldo  > 0){
                this.totalizador.rendimentos = this.calcularRendimentos(this.totalizador.saldo)
                this.totalizador.saldo  = arrendondar( this.totalizador.saldo  + this.totalizador.rendimentos)
            }
       }
     
 }
