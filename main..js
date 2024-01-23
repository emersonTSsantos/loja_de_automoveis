$(document).ready(function() {
    $('#carouselImagens').slick({
        autoplay: true
    });


    $('.menuHamburguer').click(function(){
        $('nav').slideToggle();

    })

    
    $('#telefone').mask("(00) 00000-0000" , {
        placeholder: '(DDD) 00000-0000'
    });

    $('form').validate({
        rules: {
            nome: { required:true} , email: {required:true , email:true} ,
            telefone: {required:true}, interesse: {required:true}, mensagem: {required:false}                }, 

        messages: {
            nome:'Por favor, insira o seu nome.',
            telefone:'Este campo é obrigatório.',
            email: 'Este campo é obrigatório.',
            interesse: 'Informe o veículo do seu interesse.',
        },

        submitHandler: function(form) {
            console.log(form)
        }, 
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
                if (camposIncorretos){
                    alert(`Existem ${camposIncorretos} campos incorretos`)
                }         }

    })

    $('.listaDeVeiculos button').click(function(){
        const destino = $('#contato')

        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#interesseEmVeiculo').val(nomeVeiculo);

        $('html').animate({
            scrollTop : destino.offset().top
        }, 1000)
    })
})