class Lancamento {
            
            constructor (categoria, tipo, valor, idLancamento){
                if (tipo !== "receita" && tipo !== "despesa"){
                    throw new Error ("Lançamento Inválido: Tipo deve ser receita ou despesa")
                }

                if (valor <= 0){
                    throw new Error ("Lançamento Inválido: Valor deve ser maior que zero")
                }

                if (categoria === ""){
                    throw new Error ("Lançamento Inválido: Categoria é obrigatória")
                }
                this.categoria = categoria;
                this.tipo = tipo;
                this.valor = valor;
                this. idLancamento = idLancamento;
            }
            getValorString(){
             /*   if (this.tipo === "despesa"){
                    return this.valor * -1;
                }else {
                    return this.valor;
                }*/
                //operador ternário - Simplificnando o if acima, direto no return;
                return (this.tipo === "despesa") ? this.valor * -1 : this.valor;
                
            }
        }