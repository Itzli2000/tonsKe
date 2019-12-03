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



function sendContactMail(event) {
  event.preventDefault();
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let mail = document.getElementById('mail').value;
  let message = document.getElementById('message').value;
  if (name.length > 3 && phone.length > 3 && mail.length > 5 && message.length > 5) {
    let full_message = `<h3>${name} acaba de escribirte</h3>
  Correo: ${mail}
  Teléfono: ${phone}
  Mensaje: ${message}
  `;
    console.log(full_message)
    Email.send({
      SecureToken: "959cc12b-7776-4ce4-aabb-9b145a790390",
      To: 'itzli2000@msn.com',
      From: 'itzli2000@gmail.com',
      Subject: "Contacto desde sitio tonsKe",
      Body: full_message
    }).then(
      message => {
        Swal.fire({
          text: message,
          confirmButtonText: 'Cerrar'
        })
      }
    );
  }
  else {
    Swal.fire({
      title: 'Error!',
      text: 'Revisa tus datos',
      icon: 'error',
      confirmButtonText: 'Revisar'
    })
  }
}

function sendMobileContactMail(event) {
  event.preventDefault();
  let name = document.getElementById('name_mobile').value;
  let phone = document.getElementById('phone_mobile').value;
  let mail = document.getElementById('mail_mobile').value;
  let message = document.getElementById('message_mobile').value;
  console.log(name.length)
  if (name.length > 3 && phone.length > 3 && mail.length > 5 && message.length > 5) {
    let full_message = `<h3>${name} acaba de escribirte</h3>
    Correo: ${mail}
    Teléfono: ${phone}
    Mensaje: ${message}
    `;
    console.log(full_message)
    Email.send({
      SecureToken: "959cc12b-7776-4ce4-aabb-9b145a790390",
      To: 'itzli2000@msn.com',
      From: 'itzli2000@gmail.com',
      Subject: "Contacto desde sitio tonsKe",
      Body: full_message
    }).then(
      message => {
        Swal.fire({
          text: message,
          confirmButtonText: 'Cerrar'
        })
      }
    );
  }
  else {
    Swal.fire({
      title: 'Error!',
      text: 'Revisa tus datos',
      icon: 'error',
      confirmButtonText: 'Revisar'
    })
  }
}

function scrollToElement(element) {
  var elmnt = document.getElementById(element);
  console.log(elmnt);
  elmnt.scrollIntoView();
}