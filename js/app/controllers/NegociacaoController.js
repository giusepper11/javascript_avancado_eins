class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); // truques para mandar usar como jquery
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {
        event.preventDefault();
        // let datehelper = new DateHelper();
        let data = DateHelper.textoParaData(this._inputData.value);

        let negociacao = new Negociacao(
            data, this._inputQuantidade.value, this._inputValor.value
        );

        this._listaNegociacoes.adiciona(negociacao);

        console.log(this._listaNegociacoes.negociacoes);


    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputValor.value = 0.0;
        this._inputQuantidade.value = 1;
    }
}
