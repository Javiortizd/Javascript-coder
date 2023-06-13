document
  .getElementById("reservationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var partySize = document.getElementById("partySize").value;

    console.log("Nombre: " + name);
    console.log("Correo electrónico: " + email);
    console.log("Fecha de reserva: " + date);
    console.log("Hora de reserva: " + time);
    console.log("Tamaño del grupo: " + partySize);

    document.getElementById("reservationForm").reset();
  });
