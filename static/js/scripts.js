$(document).ready(function () {
  // NAVIGATION
  /**
   * This function fill change hamburegr button from lines to cross sign on small devices
   */
  $("#hamburger-button").click(function () {
    $(this).toggleClass("open");
  });
  /**
   * This function fill change hamburegr button from lines to cross sign on medium devices
   */
  $("#hamburger-button-medium").click(function () {
    $(this).toggleClass("open");
  });
});
