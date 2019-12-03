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
    let full_message = `<h3>${name} acaba de escribirte</h3><br/><br/>
  Correo: ${mail}<br/>
  Teléfono: ${phone}<br/>
  Mensaje: ${message}<br/>
  `;
    console.log(full_message)
    Email.send({
      Host: "smtp.elasticemail.com", //Crear una cuenta gratuita desde https://elasticemail.com/ y configurar los datos
      Username: "itzli2000@gmail.com",
      Password: "0788978a-3b09-4264-bdc3-44151d816c8b",
      To: 'itzli2000@msn.com',
      From: 'itzli2000@gmail.com',
      Subject: "Contacto desde sitio tonsKe",
      Body: full_message
    }).then(
      message => {
        if (message == 'OK') {
          Swal.fire({
            text: 'Su mensaje ha sido enviado!',
            confirmButtonText: 'Cerrar'
          })
        }
        else {
          Swal.fire({
            title: 'Error!',
            text: 'No se pudo enviar tu mensaje, intentalo nuevamente',
            icon: 'error',
            confirmButtonText: 'Cerrar'
          })
        }
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
    let full_message = `<h3>${name} acaba de escribirte</h3><br/><br/>
    Correo: ${mail}<br/>
    Teléfono: ${phone}<br/>
    Mensaje: ${message}<br/>
    `;
    console.log(full_message)
    Email.send({
      Host: "smtp.elasticemail.com", //Crear una cuenta gratuita desde https://elasticemail.com/ y configurar los datos
      Username: "itzli2000@gmail.com",
      Password: "0788978a-3b09-4264-bdc3-44151d816c8b",
      To: 'itzli2000@msn.com',
      From: 'itzli2000@gmail.com',
      Subject: "Contacto desde sitio tonsKe",
      Body: full_message
    }).then(
      message => {
        if (message == 'OK') {
          Swal.fire({
            text: 'Su mensaje ha sido enviado!',
            confirmButtonText: 'Cerrar'
          })
        }
        else {
          Swal.fire({
            title: 'Error!',
            text: 'No se pudo enviar tu mensaje, intentalo nuevamente',
            icon: 'error',
            confirmButtonText: 'Cerrar'
          })
        }
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