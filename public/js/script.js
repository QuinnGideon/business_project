$(document).ready(function(){

  $(".lightbox-link").on("click",function(e){
    e.preventDefault();
    // $("body").append("<div class='shade'> </div>");
    // $("body").append("<img class='candyimage' src='../images/candy7.png'>");
    $(".candyimage").attr("src", $(this).attr("src"));
    $(".shade").show();

  });


    $(".shade").on("click", function(){
      $(".shade").hide();
      
    });

    // $(".candyimage").on("click",function(){
    //   $(".shade").remove();
    //   $(".candyimage").remove();
    // });
  // });


});