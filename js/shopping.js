$(document).ready(function() {
    // $(".sp_navi_btn").click(function() {
    //     $("#sp_navi_menu").slideToggle();
    // });
});

$(window).load(function(){
  $(".product_list").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
        loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
        );
    
});
