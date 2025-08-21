     //janeiro
        const saldoInicial = 0 
        const janeiro = new Mes("janeiro");
            janeiro.adicionarLancamento (new Lancamento("Salário",       "receita", 3000));
            janeiro.adicionarLancamento (new Lancamento("Aluguel",       "despesa", 1000));
            janeiro.adicionarLancamento (new Lancamento("Conta de Luz" , "despesa", 200));
            janeiro.adicionarLancamento (new Lancamento("Conta de água", "despesa", 100));
            janeiro.adicionarLancamento (new Lancamento("Internet",      "despesa", 100));
            janeiro.adicionarLancamento (new Lancamento("Escola",        "despesa", 500));
          /*  janeiro.adicionarLancamento (new Lancamento("Transporte",    "despesa", 300));
            janeiro.adicionarLancamento (new Lancamento("Lazer",         "despesa", 300));
            janeiro.adicionarLancamento (new Lancamento("Alimentação",   "despesa", 500));
            janeiro.adicionarLancamento (new Lancamento("Condomínio",    "despesa", 300));
            janeiro.adicionarLancamento (new Lancamento("Farmácia",      "despesa", 100));*/
            
        //Fevereiro    
        const fevereiro = new Mes ("fevereiro");
            fevereiro.adicionarLancamento(new Lancamento("Salário",       "receita", 3000 ));
            fevereiro.adicionarLancamento(new Lancamento("Aluguel",       "despesa", 1200 ));
            fevereiro.adicionarLancamento (new Lancamento("Escola",        "despesa", 400));
            fevereiro.adicionarLancamento(new Lancamento("Conta de Luz",  "despesa",  250 ));
            fevereiro.adicionarLancamento(new Lancamento("Conta de água", "despesa",  100 ));
            fevereiro.adicionarLancamento(new Lancamento("Internet",      "despesa",  100 ));
         /*   fevereiro.adicionarLancamento(new Lancamento("Transporte",    "despesa",  500 ));
            fevereiro.adicionarLancamento(new Lancamento("Alimentação",   "despesa", 1000 ));
            fevereiro.adicionarLancamento(new Lancamento("Condomínio",    "despesa",  400 )); */
        
        //Março 
        const marco = new Mes ("marco");
            marco.adicionarLancamento( new Lancamento("Salário",      "receita", 3000 ));
            marco.adicionarLancamento( new Lancamento("Aluguel",      "despesa", 1200 ));
            marco.adicionarLancamento (new Lancamento("Escola",        "despesa", 500));
            marco.adicionarLancamento( new Lancamento("Conta de Luz", "despesa",  200 ));
            marco.adicionarLancamento( new Lancamento("Conta de água","despesa",  100 ));
            marco.adicionarLancamento( new Lancamento("Internet",     "despesa",  200 ));
          /*  marco.adicionarLancamento( new Lancamento("Transporte",   "despesa",  500 ));
            marco.adicionarLancamento( new Lancamento("Lazer",        "despesa",  800 ));
            marco.adicionarLancamento( new Lancamento("Alimentação",  "despesa", 1000 ));
            marco.adicionarLancamento( new Lancamento("Condomínio",   "despesa",  400 )); */
       
        const abril = new Mes ("abril");
        abril.adicionarLancamento(new Lancamento("Salário","receita", 4000))
         

            const ano = new Ano();
            ano.adicionarMes(janeiro);
            ano.adicionarMes(fevereiro);
            ano.adicionarMes(marco);
            ano.adicionarMes(abril);
            ano.calcularSaldo () ;
     

            /*
            janeiro.adicionarLancamento(new Lancamento("Escola", "despesa", 500));
            fevereiro.adicionarLancamento(new Lancamento("Escola", "despesa", 400));
            marco.adicionarLancamento(new Lancamento("Escola", "despesa", 500));
            ano.calcularSaldo();
            */
                        
            console.log(ano.meses);

            /*Essa função serve para exemplificar um framework, onde é possível criar um 
            componente com uma função e par ser chamado e reutilizado*/     
            function addElement (parent, elementType, text){
                const element = document.createElement(elementType);
                if (text !== "" && text !== undefined && text !== null){
                    element.innerText = text;
                }
                parent.appendChild(element);
            }


            function renderizar (){
                //Função para rendereizar a interface gráfica
               const app =  document.getElementById("app");
               const cores = ["red", "yellow", "green", "blue"];
               /*Tratamento para quando chamar mais de uma vez e não acumular os dados na tela*/ 
               if (app.firstChild){
                    app.firstChild.remove();
               }
               const painel = document.createElement("div");     


               const grafico = document.createElement("div");
               grafico.className = "grafico";
               for (const mes of ano.meses){
                    const coluna = document.createElement("div");
                    coluna.className = "grafico-coluna";
                    const cor = document.createElement("div");
                    cor.style.height = (mes.totalizador.saldo*100)/10000;
                    cor.style.background = cores.pop();
                    coluna.appendChild(cor);
                    const nomeDoMes = document.createElement("div");
                    nomeDoMes.className = "grafico-coluna-texto";
                    nomeDoMes.innerText = mes.nome;
                    coluna.appendChild(cor)
                    coluna.appendChild(nomeDoMes)
                    grafico.appendChild(coluna);

               }
               painel.appendChild(grafico);


                for (const mes of ano.meses)    {
                    addElement(painel, "h4", mes.nome);
                    const tabelaLancamentos = document.createElement("table");
                    tabelaLancamentos.className = "tabela-lancamentos" ;
                    const linhaTitulo = document.createElement("tr");
                    addElement(linhaTitulo, "th", "Categoria");
                    addElement(linhaTitulo, "th", "Valor");
                    tabelaLancamentos.appendChild(linhaTitulo);
                    for (const lancamento of mes.lancamentos){
                        const linhaLancamentos = document.createElement("tr");
                        addElement(linhaLancamentos, "td", lancamento.categoria);
                        addElement(linhaLancamentos, "td", formatarDinheiro(lancamento.valor));
                        tabelaLancamentos.appendChild(linhaLancamentos);
                   
                    }
                   const linhaJuros = document.createElement("tr");
                   addElement(linhaJuros, "th", "Juros");
                   addElement(linhaJuros, "th", formatarDinheiro(mes.totalizador.juros));
                   tabelaLancamentos.appendChild(linhaJuros);
                   const linhaRendimentos = document.createElement("tr");
                   addElement(linhaRendimentos, "th", "Rendimentos");
                   addElement(linhaRendimentos, "th", formatarDinheiro(mes.totalizador.rendimentos));
                   tabelaLancamentos.appendChild(linhaRendimentos);

                   const linhaSaldo = document.createElement("tr");
                   addElement(linhaSaldo, "th", "Total");
                   addElement(linhaSaldo, "th", formatarDinheiro(mes.totalizador.saldo));
                   tabelaLancamentos.appendChild(linhaSaldo);
                   
                   painel.appendChild(tabelaLancamentos)
                }
                app.appendChild(painel);
            }


            renderizar();

            function adicionarLancamento(){
                //No vídeo tem outro formato no ínicio, esse é o formato final que ele passa
                const mes= document.getElementById("mes");
                const tipo = document.getElementById("tipo");
                const categoria = document.getElementById("categoria");
                const valor = document.getElementById("valor");
                
                
                ano.adicionarLancamento(mes.value, new Lancamento(categoria.value, tipo.value,  parseFloat(valor.value)));
                ano.calcularSaldo();
                renderizar();
                mes.value = ano.mes[0].nome;;
                tipo.value = "receita";
                categoria.value = "";
                valor.value = "";
            } 

            const botao = document.getElementById("botao");
            botao.addEventListener("click", adicionarLancamento);
            
            /*Varrendo os meses para mostrar na tela*/
            const mesSelect = document.getElementById("mes");
            for (const mes of ano.meses){
                const option = document.createElement("option");
                option.text = mes.nome;
                mesSelect.add(option);
            }