$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $("#mobile_button").click(function () {
    $("#mobile_menu").toggleClass("active");
  });
  $("#close_menu").click(function () {
    $("#mobile_menu").toggleClass("active");
  });
  $(".hide_menu").click(function () {
    $("#mobile_menu").toggleClass("active");
  });
  setInterval(() => {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ],
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
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ],
      dots: true,
      responsiveClass: true
    });
  }, 500);
});




function scrollToElement(element) {
  var elmnt = document.getElementById(element);
  console.log(elmnt);
  elmnt.scrollIntoView();
}