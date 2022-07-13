$(document).ready(function () {
  /**
   * This fucntion will apply class for hamburger button in each menu
   * when clicked on button
   */
  $("#btn-ham-tab").click(function () {
    $(this).toggleClass("open");
    $(this).parent().next("div").toggleClass("expand-menu");
  });

  $("#btn-ham-med").click(function () {
    $(this).toggleClass("open");
    $(this).parent().next("ul").toggleClass("expand-menu");
  });

  $("#btn-ham-mob").click(function () {
    $(this).toggleClass("open");
    $(this).parent().next("ul").toggleClass("expand-menu");
  });

  /**
   * This function will apply class to rotate little chevron
   * when clicked on submenu link in doprdown menu
   */
  $("#submenu-tab").click(function () {
    $(this).children("li").toggleClass("selected-menu");
    $(this).children("li").children("i").toggleClass("rotate");
    $(this)
      .children("li")
      .next("#expand-menu")
      .children("li")
      .toggleClass("d-none");
    $(this).children("li").next("#expand-menu").toggleClass("expand");
  });
  $("#submenu-med").click(function () {
    $(this).children("li").toggleClass("selected-menu");
    $(this).children("li").children("i").toggleClass("rotate");
    $(this)
      .children("li")
      .next("#expand-menu")
      .children("li")
      .toggleClass("d-none");
    $(this).children("li").next("#expand-menu").toggleClass("expand");
  });
  $("#submenu-mob").click(function () {
    $(this).children("li").toggleClass("selected-menu");
    $(this).children("li").children("i").toggleClass("rotate");
    $(this)
      .children("li")
      .next("#expand-menu")
      .children("li")
      .toggleClass("d-none");
    $(this).children("li").next("#expand-menu").toggleClass("expand");
  });
});
