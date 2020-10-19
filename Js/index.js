
$(document).ready(function(){
    $("div.design").click(function() {
        $(".designshow").toggle();
        $(".designhide").toggle();
      });
      $("div.development").click(function() {
        $(".developmentshow").toggle();
        $(".developmenthide").toggle();
      });
      $("div.product").click(function() {
        $(".productshow").toggle();
        $(".producthide").toggle();
      });

    $('div.porto').hover(function() {
        $('div.porto').find('div.overlay').fadeIn();
        }, function() {
        $('div.porto').find('div.overlay').fadeOut();
        });
});