$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const nomeNovaTarefa = $('#nova-tarefa').val();
        $('ul').append(`<li id="item">${nomeNovaTarefa}</li>`)
        $('li').click(function() {
            console.log('clicou aqui');
            $(this).addClass('item-completado');
    })

        $('#nova-tarefa').val('');
        console.log('enviou aqui');
    })
})
