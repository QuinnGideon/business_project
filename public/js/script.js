$(document).ready(function(){
  $(".lightbox-link").on("click",function(){
    $("body").append("<div id='shade'> </div>");
    $("body").append("<img id='lightImage' src='images/chrome_stingray.jpg'>");

    $("#shade").on("click", function(){
      $("#shade").remove();
      $("#lightImage").remove();
    });

    $("#lightImage").on("click",function(){
      $("#shade").remove();
      $("#lightImage").remove();
    });
  });


});