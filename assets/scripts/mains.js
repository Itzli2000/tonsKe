$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $("#mobile_button").click(function () {
    $("#mobile_menu").toggleClass("active");
  });
  $(".hide_menu").click(function () {
    $("#mobile_menu").toggleClass("active");
  });
  try {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      nav: true,
      dots: true,
      responsiveClass: true
    });
    $(".owl-concepto").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
      nav: true,
      dots: true,
      responsiveClass: true
    });
  }
  catch (err) { }
});




function scrollToElement(element) {
  var elmnt = document.getElementById(element);
  console.log(elmnt);
  elmnt.scrollIntoView();
}