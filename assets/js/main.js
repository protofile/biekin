$(document).ready(function(){
  $(".burger-bt").click(function(){
    $(this).toggleClass("active");
    $($(this).children("i")).toggleClass("ri-menu-2-line ri-close-line");
    $(".menu").toggleClass("show");
  });
});