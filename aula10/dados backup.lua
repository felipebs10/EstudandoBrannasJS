        dados backup
        
        const janeiro = new Mes("janeiro");
           janeiro.adicionarLancamento (new Lancamento("Salário",       "receita", 3000));
           janeiro.adicionarLancamento (new Lancamento("Aluguel",       "despesa", 1000));
           janeiro.adicionarLancamento (new Lancamento("Conta de Luz" , "despesa", 200));
           janeiro.adicionarLancamento (new Lancamento("Conta de água", "despesa", 100));
           janeiro.adicionarLancamento (new Lancamento("Internet",      "despesa", 100));
           janeiro.adicionarLancamento (new Lancamento("Escola",        "despesa", 500));
            
        const fevereiro = new Mes ("fevereiro");
            fevereiro.adicionarLancamento(new Lancamento("Salário",       "receita", 3000 ));
            fevereiro.adicionarLancamento(new Lancamento("Aluguel",       "despesa", 1200 ));
            fevereiro.adicionarLancamento (new Lancamento("Escola",        "despesa", 400));
            fevereiro.adicionarLancamento(new Lancamento("Conta de Luz",  "despesa",  250 ));
            fevereiro.adicionarLancamento(new Lancamento("Conta de água", "despesa",  100 ));
            fevereiro.adicionarLancamento(new Lancamento("Internet",      "despesa",  100 ));
        
        const marco = new Mes ("marco");
            marco.adicionarLancamento( new Lancamento("Salário",      "receita", 3000 ));
            marco.adicionarLancamento( new Lancamento("Aluguel",      "despesa", 1200 ));
            marco.adicionarLancamento (new Lancamento("Escola",        "despesa", 500));
            marco.adicionarLancamento( new Lancamento("Conta de Luz", "despesa",  200 ));
            marco.adicionarLancamento( new Lancamento("Conta de água","despesa",  100 ));
            marco.adicionarLancamento( new Lancamento("Internet",     "despesa",  200 ));
        const abril = new Mes ("abril");
        abril.adicionarLancamento(new Lancamento("Salário","receita", 4000))
       
        const ano = new Ano();
        ano.adicionarMes(janeiro);
        ano.adicionarMes(fevereiro);
        ano.adicionarMes(marco);
        ano.adicionarMes(abril);
        ano.calcularSaldo () ;
        this.ano = ano;