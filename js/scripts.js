$(document).ready(function(){
  $(".hamburger").click(function(){
    $(".links").toggle();
  });
 });
$(function(){
    $('.slideshow img:gt(0)').hide();
    setInterval(function(){
      $('.slideshow :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.slideshow');}, 
      3000);
});