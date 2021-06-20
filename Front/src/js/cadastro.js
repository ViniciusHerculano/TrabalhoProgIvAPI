//Validação inicial

(function () {
    window.addEventListener('load', function () {
        $('#btn-enviar').hide();
        var forms = document.getElementsByClassName('precisa-validar');

        var validacao = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() == false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });

    }, false);
})();


//Configuração do ajax para ligar com a api e possibilitar o post
var endpoint = 'https://localhost:5001'

var fApi = {
    requisicaoAdicionar: function (endpoint, valor) {
        try {
            $.ajax({
                url: endpoint + "/v1/games",
                data: valor,
                type: 'POST',
                contentType: 'application/json',
                dataType: 'json',
                success: function (result) {
                    Materialize.toast(`&#x2714;&#xFE0F;` + "<div class='red-text'>" + `${result.nome}` + "&nbsp;</div>" + `registrado com sucesso!` + "<div class='red-text blue-grey-text text-lighten-3'>&nbsp;" + "</div>", 10000, `rounded`);
                    //let mensagem = `Registro efetuado: ${result.nome} com o conteúdo ${result.stringify}`;
                    //alert(mensagem);

                    $('#btn-validar').attr('disabled', false);
                    $('#btn-enviar').hide();
                    $('#cadastro-games').trigger('reset');
                }
            });
        } catch (e) {
            alert('Erro ao enviar requisição ajax. Detalhes:' + e.message);
        }
    }
}


//Ação do botão validar, onde após o click checa se o formulário está valido e mostra o botão de cadastro


$('#btn-validar').click(function () {
    if (document.getElementsByClassName('precisa-validar')[0].checkValidity()) {
        $('#btn-validar').attr('disabled', true);
        $('#btn-enviar').attr('disabled', false);
        $('#btn-enviar').show();

    } else {
        $('#btn-validar').attr('disabled', false);

        Materialize.toast('Opa, pera aê! &#128556; Um ou mais campos inválido(s). Por favor, confira e valide novamente.', 3000, 'rounded');

    }
});



//Ação do botão enviar, porém antes de enviar ele checa novamente se é válido os campos do form
$('#btn-enviar').click(function () {
    if (document.getElementsByClassName('precisa-validar')[0].checkValidity()) {
        fApi.requisicaoAdicionar(endpoint, JSON.stringify({
            nome: $('#nome').val(),
            descricao: $('#descricao').val(),
            plataforma: $('#plataforma').val(),
            categoria: $('#categoria').val(),
            preco: $('#preco').val()
        }));
    } else
        Materialize.toast('Eita! &#129320; O formulário está inválido. Por favor, confira os campos e tente novamente.', 3000, 'rounded');
}); //Fim Ação do botão enviar