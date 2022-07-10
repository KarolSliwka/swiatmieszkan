$(document).ready(function () {
  $("#ham-btn-med").click(function () {
    $(this).toggleClass("open");

    // chceck if sub-menu has class open then change display to block otherwise change it back to none
    if ($("#ham-btn-med").hasClass("open")) {
      $(".sub-menu-1").css("visibility", "visible");
    } else {
      $(".sub-menu-1").css("visibility", "hidden");
    }
  });
});
