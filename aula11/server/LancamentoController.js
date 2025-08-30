class LancamentoController {

    constructor (httpsServer, lancamentoData) {
         httpsServer.register("get","/api/lancamentos", async function (params, body){
                const lancamentos = await lancamentoData.getLancamentos();
                console.log(lancamentos);
                return lancamentos;
        });

         httpsServer.register( "post", "/api/lancamentos", async function (params, body ){
            const lancamento = body;
            await lancamentoData.saveLancamento(lancamento);
         });

        httpsServer.register( "delete", "/api/lancamentos/:idLancamento", async function (params, body ){
            const idLancamento = params.idLancamento;
            await lancamentoData.deleteLancamento(idLancamento);
         });

    }
}

module.exports = LancamentoController;