$(document).ready(function(){
    $('.button-1').click(function(){
        $('.button-1').addClass("show");
        $('.button-2').removeClass("show");
        $('.button-3').removeClass("show");
        $('#ams').css("display","flex");
        $('#mod').css("display","none");
        $('#choos').css("display","none");
    });

    $('.button-2').click(function(){
        $('.button-1').removeClass("show");
        $('.button-2').addClass("show");
        $('.button-3').removeClass("show");
        $('#ams').css("display","none");
        $('#mod').css("display","flex");
        $('#choos').css("display","none");
    });

    $('.button-3').click(function(){
        $('.button-1').removeClass("show");
        $('.button-2').removeClass("show");
        $('.button-3').addClass("show");
        $('#ams').css("display","none");
        $('#mod').css("display","none");
        $('#choos').css("display","flex");
    });
    $('.btn-1').click(function(){
        $('.btn-1').addClass("active");
        $('.btn-2').removeClass("active");
        $('.btn-3').removeClass("active");
        $('.btn-4').removeClass("active");


        $('.slider-slick').css("display","block"); 
        $('.green').css("display","none");
        $('.red').css("display","none");
        $('.blue').css("display","none");
    });
    $('.btn-2').click(function(){
        $('.btn-1').removeClass("active");
        $('.btn-2').addClass("active");
        $('.btn-3').removeClass("active");
        $('.btn-4').removeClass("active");

        $('.slider-slick').css("display","none"); 
        $('.green').css("display","block");
        $('.red').css("display","none");
        $('.blue').css("display","none");
    });
    $('.btn-3').click(function(){
        $('.btn-1').removeClass("active");
        $('.btn-2').removeClass("active");
        $('.btn-3').addClass("active");
        $('.btn-4').removeClass("active");

        $('.slider-slick').css("display","none"); 
        $('.green').css("display","none");
        $('.red').css("display","block");
        $('.blue').css("display","none");
    });
    $('.btn-4').click(function(){
        $('.btn-1').removeClass("active");
        $('.btn-2').removeClass("active");
        $('.btn-3').removeClass("active");
        $('.btn-4').addClass("active");

        $('.slider-slick').css("display","none"); 
        $('.green').css("display","none");
        $('.red').css("display","none");
        $('.blue').css("display","block");
    });

    $('.big-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.small-img'
      });
      $('.small-img').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        asNavFor: '.big-img',
        autoplay: true,
        dots: true,
        focusOnSelect: true,
        arrows:false,
      });
                      
      $('.slider-2').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
      });

})
