$(function() {
  // $(".menu-icon").on("click" ,function() {
  //   $(".menu").slideDown();
  //   $(".menu-icon").hide();
  // });

  // $(".close-icon").click(function() {
  //   $(".menu").slideUp();
  //   $(".menu-icon").show(400);
  // });

  // $("input").click(function() {
  //   $(".mail-after").show();
  // })

  $(".menu-icon").click(function() {
    if ($(".list").hasClass("opne")) {
      $(".list").removeClass("open");
      $(".list").slideUp();
    } else {
      $(".list").addClass("open");
      $(".list").slideDown(500);
    }
  });

});

