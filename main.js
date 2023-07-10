$(document).ready(function() {
    $('#botao-exibir').click(function(){
        $('form').slideDown();
    })

    
    $('#telefone').mask('(00) 0 0000 - 0000' ,{placeholder: '(DDD)  _ _ _ _ _ - _ _ _ _'})
    $('#CPF').mask(' 000.000.000-00', {placeholder: '000.000.000-00'})
    $('#CEP').mask(' 00000-000', {placeholder: '_ _ _ _ _ - _ _ _'})

    $('form').validate ({
        rules:{
            name: {required: true},
            email: {required: true},
            telefone: {required: true},
            cpf: {required: true},
            endereco: {required: true},
            CEP: {required: true},
        },
        messages:{
            name: 'Insira um nome válido',
            email: 'Insira um email válido',
            telefone: 'Insira um telefone válido',
            cpf: 'Insira um CPF válido',
            endereco: 'Insira um endereço válido',
            CEP: 'Insira um CEP válido',
        }
    })
})