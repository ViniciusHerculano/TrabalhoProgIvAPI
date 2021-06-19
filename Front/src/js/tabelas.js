var endpoint = 'https://localhost:5001'

var fApi = {
    requisicaoConsultar: function (endpoint) {

        try {
            $.ajax({
                url: endpoint + "/v1/games",
                data: null,
                type: 'GET',
                contentType: 'application/json',
                dataType: 'json',
                success: function (result) {
                    var lista = '';
                    $(result).each(function (index, value) {
                        var retNome = value.nome;
                        var retDescricao = value.descricao;
                        var retPlataforma = value.plataforma;
                        var retCategoria = value.categoria;
                        var retPreco = value.preco;

                        lista += `<tr><td>${retNome}</td><td>${retDescricao}</td><td>${retPlataforma}</td><td>${retCategoria}</td><td>${retPreco}</td></tr>`;
                    });
                    $('#tabela-games tbody').empty().append(lista);
                }

            });
        } catch (e) {
            alert('Erro ao enviar requisição ajax. Detalhes:' + e.message);
        }
    }
}

$(document).ready(function () {
    fApi.requisicaoConsultar(endpoint)
});