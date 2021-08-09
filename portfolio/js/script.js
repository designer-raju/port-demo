


$(document).ready(function(){
 $(window).scroll(function(){
  if(this.scrollY > 20){
   $('.main-menu').addClass("sticky");
  }else{
   $('.main-menu').removeClass("sticky")
  }
   
 });
 $('.menu-btn').click(function(){
  $('.main-menu .menu').toggleClass("active");
  $('.menu-btn i').toggleClass("active")
 });

})