$(document).ready(function() {

    $(document).on('click', '.acaoConta', function(){
        
        let valorInput = $('.conteiner-num').html();
        let valorSelec = $(this).attr('data-valor');  

        if(valorInput == 0 && valorSelec != 'AC' && valorSelec != 'M'){

            $('.conteiner-num').html(valorSelec);

        } else {
        
            if(valorSelec == 'AC'){

                $('.conteiner-num').html(0);

            } else if (valorSelec == '='){
                
                $('.conteiner-num').html(eval(valorInput));

            } else if (valorSelec == 'M'){
                
                if(valorInput.length > 1 && valorInput != 0){

                    $('.conteiner-num').html(valorInput.substring(0, valorInput.length -1));

                } else {

                    $('.conteiner-num').html(0);
                }

            } else {

                //$.each($('.operador'), function(indice, index){

                //    operadores = $(index).attr('data-valor');

                //});

                $('.conteiner-num').html(valorInput + valorSelec);
            }
        }
    });
});