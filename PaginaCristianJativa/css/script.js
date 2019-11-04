

$(document).ready(function(){
    $('.popup').delay(4000).fadeIn(500);
    $(window).scroll(function(){
        scroll=$(window).scrollTop();

        if($(window).width()>480){
            if(scroll>300){
                $(".menu").css({"background":"#fff"});
                $(".menu").css({"padding":"5px 0"});
                $(".menu").addClass("sombra");
                $(".logo").css({"color":"#000"});
                $("nav ul li a").css({color:"#30374b"});
                

            }else{
                $(".menu").css({"background":"transparent"});
                $(".menu").css({"padding":"5px 0"});
                $(".logo").css({"color":"#fff"});
                $("nav ul li a").css({color:"#fff"});
                $(".menu").removeClass("sombra");
            }
        }

        if($(window).width()<480){
            if(scroll>100){
                $(".menu").css({"background":"#fff"});
                $(".menu").css({"padding":"5px 0"});
                $(".menu").addClass("sombra");
                $(".logo").css({"color":"#000"});
                $("nav ul li a").css({color:"#30374b"});
                
    
            }else{
                $(".menu").css({"background":"transparent"});
                $(".menu").css({"padding":"5px 0"});
                $(".logo").css({"color":"#fff"});
                $("nav ul li a").css({color:"#fff"});
                $(".menu").removeClass("sombra");
            }
        }
    


    })


    if ($(window).width() < 500) {
        $('.menu_icono').on('click', function() {
          $('nav').slideToggle();
        })
    }

      

      //Aparece luego de 4 segundos el popup
      $('.popup').delay(4000).fadeIn(500);
      

      $('#trabajos')
            .delay(4000)
            .queue(function (next) {
             $(this).css('opacity', '0.4');
             next();
        });

        $('#especialidades')
            .delay(4000)
            .queue(function (next) {
             $(this).css('opacity', '0.4');
             next();
        });

        $('#Sobre_mi')
            .delay(4000)
            .queue(function (next) {
             $(this).css('opacity', '0.4');
             next();
        });

        $('#header')
            .delay(4000)
            .queue(function (next) {
             $(this).css('opacity', '0.4');
             next();
        });

      //Funcion jquery para cerrar el modal
    $('.popup .Cerrar').on('click',function(){
        $('.popup').fadeOut();
        $('#trabajos').css('opacity', '1');
        $('#especialidades').css('opacity', '1');
        $('#Sobre_mi').css('opacity', '1');
        $('#header').css('opacity', '1');
    })

})

    


