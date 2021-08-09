$(document).ready(function(){
 $(window).scroll(function(){
      if (this.scrollY > 20){
        $('.header').addClass("sticky");
          }else{
            $('.header').removeClass("sticky");
            }
            if (this.scrollY > 500){
              $('.scroll-btn').addClass("show");
          }else{
          $('.scroll-btn').removeClass("show");
      }
 });
    //slidr up script
    $('.scroll-btn').click(function(){
      $('html').animate({scrollTop:0});
    });

    //menu btn script
 $('.menu-btn').click(function(){
  $('.top-menu ul').toggleClass("active");
   $('.menu-btn i').toggleClass("active")
 });
 
   var typed = new Typed(".typing",{
    strings:["Designer","Developer","Blogger","Freelancer"],
     typeSpeed:150,
     backSpeed:80,
   loop:true,
 });
 
 //owl carousel script
 
 $('.my-team').owlCarousel({
   margin:10,
   loop:true,
   autoplay:true,
  autoplayTimeOut:2000,
  autoplayHoverPush:true,
  responsive:{
   0:{
    items: 1,
    nav:false,
   },
   610:{
    items:2,
    nav: false,
   },
   700:{
    items:2,
    nav: false,
   },
   910:{
    items:3,
    nav: false,
   },
   1200:{
    items:4,
    nav:false
   }
  }
  
 });
 
})